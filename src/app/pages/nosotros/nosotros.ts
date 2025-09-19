import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { inject } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class Nosotros {

    meta = inject(Meta);


  constructor() {
    this.meta.addTag({
    property: 'og.type',
    content: 'website'
    });

    this.meta.addTag({
    property: 'og.title',
    content: 'Nosotras'
    });

    this.meta.addTag({
    property: 'og.description',
    content: 'En Tienda Belleza nos apasiona resaltar tu belleza natural con productos de maquillaje y cuidado de la piel de alta calidad. Nuestro compromiso es brindarte una experiencia de compra única y personalizada.'
    });

    this.meta.addTag({
    property: 'og.image',
    content: 'https://ellas-beauty.com/wp-content/uploads/2024/02/ellas-beauty.jpeg'
    });

    this.meta.addTag({
    property: 'og.url',
    content: 'https://web-landing-lemon-nu.vercel.app/nosotros'
    });
  }

}
