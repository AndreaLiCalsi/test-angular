import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  products: Product[] =
  [
    {
      id: 1,
      title: "Naruto Funko POP",
      img: "https://prod-giuntialpunto-static.giunti.stormreply.com/images/I/41cDbR77luL._SL500_.jpg",
      price: 60,
    },
    {
      id: 2,
      title: "Batman Funko POP",
      img: "https://www.giocabenesrl.it/images/articoli/dem/regular/36879-3.jpg",
      price: 40,
    },
    {
      id: 3,
      title: "Squid Game Funko POP",
      img: "https://www.thegamebusters.it/23144-large_default/funko-pop-red-soldier-mask-squid-game.jpg",
      price: 120,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
