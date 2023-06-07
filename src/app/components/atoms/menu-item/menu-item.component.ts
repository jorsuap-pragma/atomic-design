import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  standalone:true,
  imports:[RouterModule]
})
export class MenuItemComponent implements OnInit {

  @Input() optionPath:string = "";
  @Input() optionText:string = "";

  constructor() { }

  ngOnInit() {
  }

}
