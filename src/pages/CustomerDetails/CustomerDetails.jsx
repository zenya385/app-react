import React, { useEffect, useState } from "react";
import { getCustomerById } from "../../fakeApi";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function CustomerDetails() {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  if (!customer) {
    return null;
  }
  return (
    <>
      <Link to={location.state?.from ?? "/customer"}>back to customers</Link>
      <p>id: {customer.id}</p>
      <p>Username: {customer.name}</p>
    </>
  );
}
