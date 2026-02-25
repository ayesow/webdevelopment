import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCard} from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class  ProductList {
  products: Product[] = [
    {
      id: 147986879,
      name: 'Смарт-часы Huawei WATCH GT 6 41 мм золотистый',
      description:
        'Компактные смарт-часы на каждый день. Подходят для уведомлений, тренировок и базового контроля активности. Хороший вариант, если важны дизайн и автономность.',
      price: 149990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p87/pfe/73833197.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/p87/72527963.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p46/p87/72527968.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/huawei-watch-gt-6-41-mm-zolotistyi-zolotistyi-147986879/?c=750000000',
    },
    {
      id: 112674629,
      name: 'Смарт-часы YAMI i1 42 мм золотистый',
      description:
        'Умные часы с базовыми функциями: уведомления, активность, сон. Подойдут как универсальный аксессуар на каждый день.',
      price: 19990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p51/pd4/9015777.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p35/pd4/9015778.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p74/pd1/9015782.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pac/pd1/9015780.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/yami-i1-42-mm-zolotistyi-zolotistyi-112674629/?c=750000000',
    },
    {
      id: 112844424,
      name: 'Смарт-часы YUNTEKO DMi50 графитовый-черный',
      description:
        'Практичная модель для повседневного использования. Уведомления приходят через Bluetooth, без SIM-карты.',
      price: 17990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p52/58332178.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p09/p55/58332182.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd0/p54/58332180.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000',
    },
    {
      id: 139082872,
      name: 'Смарт-часы NOVEX Smart Watch 51 мм графитовый-черный',
      description:
        'Крупный экран и расширенный набор функций для активности и уведомлений. Подходит тем, кто любит “побольше и поярче”.',
      price: 29990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p86/p19/71575448.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/pe8/65551862.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pe8/65551865.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbf/pe4/65551877.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/novex-smart-watch-51-mm-grafitovyi-chernyi-139082872/?c=750000000',
    },
    {
      id: 117690906,
      name: 'Смарт-часы Nepro100device Man QZ2 50 мм черный',
      description:
        'Смарт-часы с акцентом на повседневные задачи: уведомления, активность, базовые измерения.',
      price: 22990,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3f/p33/37686625.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/p26/40585840.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/p26/40585842.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf2/p25/40585848.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/nepro100device-man-qz2-50-mm-chernyi-chernyi-117690906/?c=750000000',
    },
    {
      id: 147455560,
      name: 'Смарт-часы Alidel UltraWatch X500 53 мм черный',
      description:
        'Большой корпус и яркий экран. Подходит для уведомлений и контроля активности.',
      price: 25990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p27/p35/98492245.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pfa/p08/74114321.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd0/pd1/74302859.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb1/p9e/70766238.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/alidel-ultrawatch-x500-53-mm-chernyi-chernyi-147455560/?c=750000000',
    },
    {
      id: 114087319,
      name: 'Смарт-часы YUNTEKO Gi20 47 мм розовый',
      description:
        'Часы для активности: шаги, сон, тренировки и уведомления. Розовый — аккуратный акцент.',
      price: 16990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/h9a/84355202383902.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha0/h23/84353783431198.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/had/h80/84353783463966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6b/hdc/84355202580510.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/yunteko-gi20-47-mm-rozovyi-rozovyi-114087319/?c=750000000',
    },
    {
      id: 141361891,
      name: 'Смарт-часы NoLimit Redline черный',
      description:
        'Максимум простоты: уведомления, базовый фитнес и ежедневные метрики. Подойдут как первые умные часы.',
      price: 18990,
      rating: 4.1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6d/p33/88870604.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p44/p15/62729234.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p15/62729235.PNG?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p8c/62729236.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/smart-chasy-nolimit-redline-chernyi-141361891/?c=750000000',
    },
    {
      id: 112859205,
      name: 'Смарт-часы YUNTEKO ZWi39 бежевый',
      description:
        'Нейтральный цвет и базовые функции: уведомления, активность, сон. Спокойный вариант на каждый день.',
      price: 15990,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/h3d/83168262389790.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h44/83168262651934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h76/83168262979614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h09/ha5/83168263176222.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/yunteko-zwi39-bezhevyi-bezhevyi-112859205/?c=750000000',
    },
    {
      id: 137675544,
      name: 'Смарт-часы NoLimit GPS черный',
      description:
        'Вариант для прогулок и тренировок: удобнее отслеживать активность и маршруты. Универсальный черный дизайн.',
      price: 27990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p04/pc6/86314199.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p41/p6c/67028248.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p25/p6c/67028249.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/p69/67028252.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/smart-chasy-nolimit-gps-chernyi-137675544/?c=750000000',
    },
  ];
}