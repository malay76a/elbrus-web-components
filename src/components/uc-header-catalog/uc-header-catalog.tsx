import {Component } from '@stencil/core';
import { isMobile } from '../../utils/response-query'

@Component({
  tag: 'uc-header-catalog',
  shadow: true,
  styleUrl: './uc-header-catalog.scss'
})
export class UcHeaderCatalog {
  render() {
    return isMobile() ? <div class="hamburger"></div> : [
      <slot />,
      <div class="triangle"></div>
    ];
  }
}
