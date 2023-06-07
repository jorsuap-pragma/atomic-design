import { Component, OnInit } from '@angular/core';
import { LogoComponent } from "../../atoms/logo/logo.component";
import { MenuComponent } from '../../molecules/menu/menu.component';
import { PrincipalBottonComponent } from '../../atoms/principal-botton/principal-botton.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
      LogoComponent,
      MenuComponent,
      PrincipalBottonComponent
    ]
})
export class HeaderComponent implements OnInit {

  menuitens:any = [];
  urlImg:string = "logo.svg";
  customClassHeader:string = 'header';

  constructor() { }

  ngOnInit() {

    this.menuitens = [
      {
        optionPath:"/home",
        optionText:"home"
      },
      {
        optionPath:"/about",
        optionText:"about"
      },
      {
        optionPath:"/contact",
        optionText:"contact"
      },
      {
        optionPath:"/blog",
        optionText:"blog"
      },
      {
        optionPath:"/carries",
        optionText:"carries"
      },
    ]
  }

}
