import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'uc-payment-systems-item',
  shadow: true,
  styleUrl: './uc-payment-systems-item.scss'
})
export class UcPaymentSystemsItem {
  @Prop() dataSystem: string;

  render() {
    return <div />;
  }
}
