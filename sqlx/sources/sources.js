[
  "distribution_centers",
  "inventory_items",
  "orders",
  "events"
].forEach((name) =>
  declare({
    database: "bigquery-public-data", 
    schema: "thelook_ecommerce",
    name,
  })
);
