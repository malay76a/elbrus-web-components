import {Component } from '@stencil/core';

@Component({
  tag: 'uc-header-logo',
  shadow: true,
  styleUrl: './uc-header-logo.scss'
})
export class UcHeaderLogo {
  render() {
    return <slot />;
  }
}
