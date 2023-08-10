import { useEffect, useState } from "react";
import { getCustomers } from "../../fakeApi";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function Customers() {
  const location = useLocation();
  const [customers, setCustomers] = useState([]);
  const [serchParams, setSerchParams] = useSearchParams();
  const filterParam = serchParams.get("filter") ?? "";

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, [customers, filterParam]);

  const changeFilter = (value) => {
    setSerchParams(value !== "" ? { filter: value } : {});
  };

  const visibleCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(filterParam.toLowerCase())
  );

  return (
    <div>
      <SearchBox value={filterParam} onChange={changeFilter} />
      {visibleCustomers.length > 0 && (
        <ul>
          {visibleCustomers.map((customer) => (
            <li key={customer.id}>
              <Link to={`${customer.id}`} state={{ from: location }}>
                {customer.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
