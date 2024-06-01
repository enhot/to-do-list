import { Injectable, signal } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Injectable({
  providedIn: 'root',
})
export class SlideOptionService {
  public swiperElement = signal<SwiperContainer | null>(null);

  constructor() {}

  public slidesOptions(): void {
    const swiperElementConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: true,
      width: 200,
    };
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
