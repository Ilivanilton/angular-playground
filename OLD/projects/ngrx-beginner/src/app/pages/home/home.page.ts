import { Component } from '@angular/core';
import { ROUTER_UTILS } from '../../@core/utils/router.utils';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  path = ROUTER_UTILS.config;
}
