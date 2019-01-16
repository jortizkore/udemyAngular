import { Subject } from 'rxjs';

export class productService {
  private products = ['Service product'];
  productUpdate = new Subject();

  addProduct(productName: string) {
    this.products.push(productName);
    this.productUpdate.next();
  }

  getProducts() {
    return [...this.products];
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
    this.productUpdate.next();
  }
}
