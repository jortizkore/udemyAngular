import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName: string;
  @Output() whenClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.whenClick.emit();
  }
}
