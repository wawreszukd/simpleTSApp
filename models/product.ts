import fs from "fs";
import path from "path";
import { rootDir } from "../utils/path";

const products: Product[] = [];

export class Product {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  save() {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (error, data) => {
      let products: Product[] = [];
      if (!error) {
        products = JSON.parse(data.toString());
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) throw err;
      });
    });
  }
  static fetchAll(cb: Function): void {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (error, data) => {
      if (error) {
        cb([]);
      }
      cb(JSON.parse(data.toString()));
    });
  }
}
