import { Component } from '@stencil/core';

@Component({
  tag: 'uc-footer-apps',
  shadow: true,
  styleUrl: './uc-footer-apps.scss'
})
export class UcFooterApps {
  render() {
    return <slot />;
  }
}
