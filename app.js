import Product from "./models/Product.js";
import { fetchData } from "./utils/httpReq.js";
const productsNode = document.getElementById("products");

async function render() {
  const productData = await fetchData();
  const productsInstance = new Product(productsNode, productData);
  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
