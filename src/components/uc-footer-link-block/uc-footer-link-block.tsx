import {Component } from '@stencil/core';

@Component({
  tag: 'uc-footer-link-block',
  shadow: true,
  styleUrl: './uc-footer-link-block.scss'
})
export class UcFooterLinkBlock {
  render() {
    return <slot />;
  }
}
