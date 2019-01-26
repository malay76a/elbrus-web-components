import {Component} from '@stencil/core';

@Component({
  tag: 'uc-plp-item-buttons',
  scoped: true,
  styleUrl: './uc-plp-item-buttons.scss'
})
export class UcPlpItemButtons {
  render() {
    return <slot />;
  }
}


