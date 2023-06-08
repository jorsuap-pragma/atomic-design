import { Component, OnInit } from '@angular/core';
export interface Benefits{
  title:string,
  imgUrl:string,
  text:string
}

@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.scss']
})
export class BenefitsSectionComponent implements OnInit {
  benefits:Benefits[] = [];

  constructor() { }

  ngOnInit() {
    this.benefits = [
      {
        title:'Online Banking',
        imgUrl:'icon-online.svg',
        text:'Our modern web and mobil aplications allow you to keep track of your finances wherever you are in the word.'
      },
      {
        title:'Simple Budgeting',
        imgUrl:'icon-budgeting.svg',
        text:'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
      },
      {
        title:'Fast Onboarding',
        imgUrl:'icon-onboarding.svg',
        text:'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
      },
      {
        title:'Open API',
        imgUrl:'icon-api.svg',
        text:'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
      }
    ]
  }

}
