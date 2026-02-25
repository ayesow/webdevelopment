import { Component, signal, input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  product = input.required<Product>();
  selectedImage = signal<string>('');

  ngOnInit() {
    this.selectedImage.set(this.product().image);
  }

  setImage(img: string) {
    this.selectedImage.set(img);
  }

  stars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  filled(star: number): boolean {
    return this.product().rating >= star;
  }

  shareWhatsApp() {
    const msg = `Check out this product: ${this.product().link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  }

  shareTelegram() {
    const url =
      `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }
}