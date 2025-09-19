import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { inject } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {

    meta = inject(Meta);

  constructor() {
    this.meta.addTag({
    property: 'og.type',
    content: 'website'
    });

    this.meta.addTag({
    property: 'og.title',
    content: 'Servicios de belleza'
    });

    this.meta.addTag({
    property: 'og.description',
    content: 'Ofrecemos una amplia gama de servicios de maquillaje y cuidado de la piel para que luzcas radiante en cualquier ocasión.'
    });

    this.meta.addTag({
    property: 'og.image',
    content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstC7WAxZSPHCu-FgX4SWTIPeX3X4nW1pQWA&s'
    });

    this.meta.addTag({
    property: 'og.url',
    content: 'https://web-landing-lemon-nu.vercel.app/services'
    });
  }

}
