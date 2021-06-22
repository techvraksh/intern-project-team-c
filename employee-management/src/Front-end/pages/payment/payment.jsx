import React from "react";
import JobsOpening from "../job-openings/jobs";
import GeneratePaymentCard from "../payment-details/generatePaymentCard";
import TableData from "./table";

const Payment = () => {
  return (
    <>
      <TableData />
      <GeneratePaymentCard />
    </>
  );
};

export default Payment;
