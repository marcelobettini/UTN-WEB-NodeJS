const pool = require("../db");
async function getProducts() {
  const query = "SELECT * FROM products";
  const rows = await pool.query(query);
  return rows;
}
module.exports = { getProducts };
