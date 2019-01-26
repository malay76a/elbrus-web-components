import { Component } from '@stencil/core';

@Component({
  tag: 'uc-plp-item-img',
  shadow: true,
  styleUrl: './uc-plp-item-img.scss'
})
export class UcPlpItemImg {
  render() {
    return <slot />;
  }
}
