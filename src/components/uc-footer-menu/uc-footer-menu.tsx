import {Component } from '@stencil/core';

@Component({
  tag: 'uc-footer-menu',
  shadow: true,
  styleUrl: './uc-footer-menu.scss'
})
export class UcFooterMenu {
  render() {
    return <slot />;
  }
}
