import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState("");

  useEffect(() => {
    axios
      .post(`http://localhost/payment/pay/${searchParams.get("payment_id")}`)
      .then((res) => {
        setResult(res.data.result.status);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [searchParams]);

  return (
    <React.Fragment>
      <div className="p-4">
        <div className="alert alert-success">
          Payment Successfully Completed
        </div>
      </div>
    </React.Fragment>
  );
};

export default Success;
