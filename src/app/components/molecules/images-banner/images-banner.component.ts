import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-banner',
  templateUrl: './images-banner.component.html',
  styleUrls: ['./images-banner.component.scss']
})
export class ImagesBannerComponent implements OnInit {

  urlImgMockups:string = "image-mockups.png";
  urlImgBg:string = "bg-intro-desktop.svg";
  customClassMockups:string = "banner";
  customClassBg:string = "backgroud";

  constructor() { }

  ngOnInit() {
  }

}
