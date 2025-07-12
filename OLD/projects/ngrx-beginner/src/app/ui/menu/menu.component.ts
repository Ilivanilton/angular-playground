import { ROUTER_UTILS } from '../../@core/utils/router.utils';
import { Component, OnInit } from '@angular/core';


/** feather-icon */
declare const feather;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  path = ROUTER_UTILS.config;

  constructor() { }

  ngOnInit(): void {
    feather.replace()
  }

}
