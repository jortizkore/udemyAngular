import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; 
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { productService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule { }
