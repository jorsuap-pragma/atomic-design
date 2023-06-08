import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  @Input() imgUrl!:string;
  @Input() title!:string;
  @Input() text!:string;

  constructor() { }

  ngOnInit() {
  }

}
