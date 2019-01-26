import { Component } from '@stencil/core';

@Component({
  tag: 'uc-payment-systems',
  shadow: true,
  styleUrl: './uc-payment-systems.scss'
})
export class UcPaymentSystems {
  render() {
    return [
      'Мы принимаем:',
      <uc-payment-systems-item data-system="mir"></uc-payment-systems-item>,
      <uc-payment-systems-item data-system="visa"></uc-payment-systems-item>,
      <uc-payment-systems-item data-system="mastercard"></uc-payment-systems-item>
    ];
  }
}
