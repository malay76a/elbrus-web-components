// uc-plp-item-description-item

import { Component } from '@stencil/core';

@Component({
  tag: 'uc-plp-item-description-item',
  shadow: true,
  styleUrl: './uc-plp-item-description-item.scss'
})
export class UcPlpItemDescriptionItem {
  render() {
    return <slot />;
  }
}
