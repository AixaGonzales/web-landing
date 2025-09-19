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
    content: 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/social_share_1024x768_scale/public/images/article/cover/2020/01/07/productos_belleza_2020.jpg?ramen_itok=iqwQftIcTf'
    });

    this.meta.addTag({
    property: 'og.url',
    content: 'https://localhost:4200/products'
    });
  }
}

