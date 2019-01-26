import { Component } from '@stencil/core';

@Component({
  tag: 'uc-plp-item-title',
  shadow: true,
  styleUrl: './uc-plp-item-title.scss'
})
export class UcPlpItemTitle {
  render() {
    return <slot />;
  }
}
