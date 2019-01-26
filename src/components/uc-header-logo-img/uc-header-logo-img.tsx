import {Component } from '@stencil/core';

@Component({
  tag: 'uc-header-logo-img',
  shadow: true,
  styleUrl: './uc-header-logo-img.scss'
})
export class UcHeaderLogoImg {
  render() {
    return <slot />;
  }
}
