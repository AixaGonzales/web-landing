import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { inject } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  meta = inject(Meta);

  constructor() {
    this.meta.addTag({
    property: 'og.type',
    content: 'website'
    });

    this.meta.addTag({
    property: 'og.title',
    content: 'productos de belleza'
    });

    this.meta.addTag({
    property: 'og.description',
    content: 'productos de belleza y cosmetologia para damas y caballeros en el mejor precio'
    });

    this.meta.addTag({
    property: 'og.image',
    content: 'https://png.pngtree.com/png-clipart/20250102/original/pngtree-makeup-and-beauty-essentials-showcasing-a-variety-of-tools-products-for-png-image_20002614.png'
    });

    this.meta.addTag({
    property: 'og.url',
    content: 'https://localhost:4200/products'
    });
  }
}

