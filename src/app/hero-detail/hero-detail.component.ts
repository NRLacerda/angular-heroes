import { Hero } from './../interface/hero';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  @Input() hero?:Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
