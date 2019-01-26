import { Component } from '@stencil/core';

@Component({
  tag: 'uc-footer-app-mobile',
  shadow: true,
  styleUrl: './uc-footer-app-mobile.scss'
})
export class UcFooterAppMobile {
  render() {
    return <slot />;
  }
}
