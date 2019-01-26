import {Component } from '@stencil/core';

@Component({
  tag: 'uc-footer',
  shadow: true,
  styleUrl: './uc-footer.scss'
})
export class UcFooter {
  render() {
    return <slot />;
  }
}
