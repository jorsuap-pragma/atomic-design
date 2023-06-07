import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-botton',
  templateUrl: './principal-botton.component.html',
  styleUrls: ['./principal-botton.component.scss'],
  standalone:true
})
export class PrincipalBottonComponent implements OnInit {

  @Input() textAction:string = "request invite";

  constructor() { }

  ngOnInit() {
  }

}
