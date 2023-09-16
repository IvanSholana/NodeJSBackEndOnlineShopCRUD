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
      let data = [];
      const content = await fs.readFile(pathFile, "utf8");
      data = content ? JSON.parse(content) : [];
      data.push(this);
      await fs.writeFile(pathFile, JSON.stringify(data), "utf8");
      console.log("Data berhasil ditambahkan.");
    } catch (err) {
      await fs.writeFile(pathFile, JSON.stringify([this]), "utf8");
    }
  }

  static async fetchAll() {
    try {
      await fs.access(pathFile);
    } catch (err) {
      await fs.writeFile(pathFile, "[]");
    }
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
