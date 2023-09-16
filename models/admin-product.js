const path = require("path");
const fs = require("fs").promises;

const pathFile = path.join(__dirname, "..", "data", "adminProduct.json");

class Product {
  constructor(title, imgURL, description, price) {
    this.title = title;
    this.imgURL = imgURL;
    this.description = description;
    this.price = price;
  }

  async save() {
    try {
      const content = await fs.readFile(pathFile, "utf8");
      const data = content ? JSON.parse(content) : [];
      data.push(this);
      await fs.writeFile(pathFile, JSON.stringify(data));
    } catch (err) {
      console.error("Gagal menyimpan data:", err);
    }
  }

  static async fetchAll() {
    try {
      const content = await fs.readFile(pathFile, "utf8");
      const data = content ? JSON.parse(content) : [];
      return data;
    } catch (err) {
      console.error("Gagal membaca berkas:", err);
      return [];
    }
  }
}

module.exports = Product;
