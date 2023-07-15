import fs from "fs";
import path from "path";
import { rootDir } from "../utils/path";

const products: Product[] = [];

const p = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb: Function) => {
  fs.readFile(p, (error, data) => {
    if (error) {
      cb([]);
    }
    cb(JSON.parse(data.toString()));
  });
};

export class Product {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  save() {
    if (!fs.existsSync(p)) {
      fs.writeFileSync(p, "[]");
    }
    getProductsFromFile((products: Product[]) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
  static fetchAll(cb: Function): void {
    getProductsFromFile(cb);
  }
}
