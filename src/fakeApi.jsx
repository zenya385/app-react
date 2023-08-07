const db = {
  customers: [
    { id: 1, name: "Mischa Hopkins" },
    { id: 2, name: "Anis Cresswell" },
    { id: 3, name: "Milla Wagner" },
    { id: 4, name: "Faizan Gillespie" },
    { id: 5, name: "Roy Mays" },
    { id: 6, name: "Leanne Knott" },
    { id: 7, name: "Debbie Fitzgerald" },
    { id: 8, name: "Phebe Reyes" },
    { id: 9, name: "Lola-Mae Kouma" },
    { id: 10, name: "Krish Marsh" },
    { id: 11, name: "Sienna Rodgers" },
    { id: 12, name: "Harper-Rose Schroeder" },
    { id: 13, name: "Pippa Gill" },
    { id: 14, name: "Effie Shaffer" },
    { id: 15, name: "Eshal Nixon" },
    { id: 16, name: "Phyllis Dunlop" },
    { id: 17, name: "Efe Valenzuela" },
    { id: 18, name: "Roman Mcleod" },
    { id: 19, name: "Mikayla Ibarra" },
    { id: 20, name: "Fatma Yu" },
  ],
};

export const getCustomers = () => {
  return Promise.resolve(db.customers);
};

export const getCustomerById = (id) => {
  return Promise.resolve(db.customers.find((customer) => customer.id === id));
};
