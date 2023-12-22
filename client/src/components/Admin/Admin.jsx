import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import SecurityIcon from "@mui/icons-material/Security";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import {
  randomCreatedDate,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";

const Admin = [
  {
    id: 1,
    name: "Amine",
    age: 21,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: true,
    country: "Spain",
    discount: "20%",
  },
  {
    id: 2,
    name: "Ali",
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: "France",
    discount: "10%",
  },
  {
    id: 3,
    name: "salmen",
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: "Brazil",
    discount: "30%",
  },
];

export default function ColumnTypesGrid() {
  const [rows, setRows] = React.useState(Admin);

  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );

  const toggleAdmin = React.useCallback(
    (id) => () => {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, isAdmin: !row.isAdmin } : row
        )
      );
    },
    []
  );

  const duplicateUser = React.useCallback(
    (id) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id);
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    []
  );

  const columns = React.useMemo(
    () => [
      { field: "name", type: "string" },
      { field: "age", type: "number" },
      { field: "dateCreated", type: "date", width: 130 },
      { field: "lastLogin", type: "dateTime", width: 180 },
      { field: "isAdmin", type: "boolean", width: 120 },
      {
        field: "country",
        type: "singleSelect",
        width: 120,
        valueOptions: [
          "Bulgaria",
          "Netherlands",
          "France",
          "United Kingdom",
          "Spain",
          "Brazil",
        ],
      },
      {
        field: "discount",
        type: "singleSelect",
        width: 120,
        editable: true,
        valueOptions: ({ row }) => {
          if (row === undefined) {
            return ["EU-resident", "junior"];
          }
          const options = [];
          if (!["United Kingdom", "Brazil"].includes(row.country)) {
            options.push("EU-resident");
          }
          if (row.age < 27) {
            options.push("junior");
          }
          return options;
        },
      },
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={<SecurityIcon />}
            label="Toggle Admin"
            onClick={toggleAdmin(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopyIcon />}
            label="Duplicate User"
            onClick={duplicateUser(params.id)}
            showInMenu
          />,
        ],
      },
    ],
    [deleteUser, toggleAdmin, duplicateUser]
  );

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}
