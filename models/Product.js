class Product {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }

  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }

  createCard(data) {
    const cardEle = document.createElement("div");
    const img = document.createElement("img");
    img.src = data.image;
    img.alt = data.alt;
    cardEle.append(img);

    const info = document.createElement("div");
    const productName = document.createElement("h3");
    const control = document.createElement("div");
    const price = document.createElement("span");
    const button = document.createElement("button");
    control.append(price, button);
    info.append(productName, control);
    cardEle.append(info);
    productName.innerText = data.name;
    price.innerText = data.price;
    button.innerText = "+";

    this.parent.append(cardEle);
  }
}

export default Product;
