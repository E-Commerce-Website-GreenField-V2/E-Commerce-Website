import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import SecurityIcon from "@mui/icons-material/Security";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useUserId } from "../../Context/userContext";
import axios from "axios";
import {
  randomCreatedDate,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";

const Admin = [
  // {
  //   id: 1,
  //   name: "Amine",
  //   age: 21,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   isAdmin: true,
  //   country: "Spain",
  //   discount: "20%",
  // },
  // {
  //   id: 2,
  //   name: "Ali",
  //   age: 25,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   isAdmin: false,
  //   country: "France",
  //   discount: "10%",
  // },
  // {
  //   id: 3,
  //   name: "salmen",
  //   age: 25,
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  //   isAdmin: false,
  //   country: "Brazil",
  //   discount: "30%",
  // },
];

export default function ColumnTypesGrid() {
  const [rows, setRows] = React.useState(Admin);
  const [products, setProducts] = useState([]);
  const [sellerProduct, setSellerProducts] = useState("");
  const { userId } = useUserId();
  console.log("userid", userId);

  const fetchProducts = async () => {
    try {
      if (!userId) {
        console.error("User ID is not available.");
        return;
      }

      const response = await axios.get(`http://localhost:8000/products/`);

      if (response.status === 200) {
        setProducts(response.data);
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      console.log("Error response:", error.response);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [userId]);
  const deleteProduct = React.useCallback(async (id) => {
    try {
      // Delete from the backend
      await axios.delete(`http://localhost:8000/products/${id}`);

      // Update the UI by removing the product from the state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error(`Error deleting product with ID ${id}:`, error);
      // Handle error scenarios (e.g., show an error message to the user)
    }
  }, []);

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

  const duplicateProduct = React.useCallback(
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
      { field: "id", headerName: "ID", width: 90 },
      { field: "name", headerName: "Name", width: 150 },
      { field: "price", headerName: "Price", width: 120 },
      { field: "image", headerName: "Image", width: 180 },
      { field: "description", headerName: "Description", width: 180 },
      { field: "available", headerName: "Available", width: 120 },
      { field: "rate", headerName: "Rate", width: 120 },
      { field: "createdAt", headerName: "Created At", width: 180 },
      { field: "quantity", headerName: "Quantity", width: 120 },
      {
        field: "sellerProduct",
        type: "Seller Product",
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
            onClick={() => deleteProduct(params.id)}
          />,
          <GridActionsCellItem
            icon={<SecurityIcon />}
            label="Toggle Admin"
            onClick={toggleAdmin(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopyIcon />}
            label="Duplicate Product"
            onClick={duplicateProduct(params.id)}
            showInMenu
          />,
        ],
      },
    ],
    [deleteProduct, toggleAdmin, duplicateProduct]
  );

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid columns={columns} rows={products} />
    </div>
  );
}
