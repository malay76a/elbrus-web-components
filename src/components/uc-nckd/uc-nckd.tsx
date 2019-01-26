import {Component } from '@stencil/core';

@Component({
  tag: 'uc-nckd',
  shadow: true,
  styleUrl: './uc-nckd.scss'
})
export class UcNckd {
  render() {
    return <slot />;
  }
}
