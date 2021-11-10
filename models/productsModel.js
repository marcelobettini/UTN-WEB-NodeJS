const pool = require("../db");
function getProducts() {
  const query = "SELECT * FROM products";
  const rows = pool.query(query);
  return rows;
}
module.exports = { getProducts };
