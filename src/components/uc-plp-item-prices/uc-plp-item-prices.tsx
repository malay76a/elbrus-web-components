import {Component} from '@stencil/core';

@Component({
  tag: 'uc-plp-item-prices',
  shadow: true,
  styleUrl: './uc-plp-item-prices.scss'
})
export class UcPlpItemPrices {
  render() {
    return <slot />;
  }
}


