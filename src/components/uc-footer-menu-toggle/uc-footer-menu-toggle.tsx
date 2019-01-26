import {Component } from '@stencil/core';

@Component({
  tag: 'uc-footer-menu-toggle',
  shadow: true,
  styleUrl: './uc-footer-menu-toggle.scss'
})
export class UcFooterMenuToggle {
  render() {
    return <slot />;
  }
}
