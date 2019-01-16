import { Component, OnInit, OnDestroy } from "@angular/core";
import { productService } from "./products.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html"
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = "Some cool name";
  productList = ["Default product"];
  productSubscription: Subscription;

  constructor(private pService: productService) {}

  ngOnInit() {
    this.productList = this.pService.getProducts();
    this.productSubscription = 
    this.pService.productUpdate.subscribe(() => {
        this.productList = this.pService.getProducts();
    });
  }
  addProduct() {
    //this.productList.push(this.productName);
    this.pService.addProduct(this.productName);
  }

  deleteProduct(product: string) {
    this.pService.deleteProduct(product);
    //this.productList = this.productList.filter(prod => prod !== product);
  }

  ngOnDestroy() {
      this.productSubscription.unsubscribe();
  }
}
