import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone:true,
  imports:[RouterModule, CommonModule]
})
export class LogoComponent implements OnInit {

  @Input() urlImg!:string;
  @Input() customClass:string = "";


  constructor() { }

  ngOnInit() {
  }

}
