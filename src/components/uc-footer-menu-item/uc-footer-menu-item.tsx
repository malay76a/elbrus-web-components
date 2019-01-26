import {Component } from '@stencil/core';

@Component({
  tag: 'uc-footer-menu-item',
  shadow: true,
  styleUrl: './uc-footer-menu-item.scss'
})
export class UcFooterMenuItem {
  render() {
    return <slot />;
  }
}
