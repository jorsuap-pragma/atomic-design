import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MenuItemComponent } from '../../atoms/menu-item/menu-item.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../atoms/logo/logo.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone:true,
  imports:[MenuItemComponent, CommonModule, LogoComponent ]
})
export class MenuComponent implements OnInit {

  @ViewChild('menuContent') dropdownContent!: ElementRef;

  screenWidth!: number;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth >= 890)  this.dropdownContent.nativeElement.classList.remove('show-items-menu');
    this.isOpenMenu = false;
  }

  @Input() menuitens:any;
  customClassMockups:string = 'icon-hamburger';
  urlImgIconHamburger:string = 'icon-hamburger.svg';
  isOpenMenu:boolean = false;

  constructor(private renderer: Renderer2) { }

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

  toggleDropdown(){
   this.dropdownContent.nativeElement.classList.toggle('show-items-menu');
   this.isOpenMenu = !this.isOpenMenu;

  }

}
