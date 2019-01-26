import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'uc-plp-item-price',
  shadow: true,
  styleUrl: './uc-plp-item-price.scss'
})
export class UcPlpItemPrice {
  @Prop() type: 'main' | 'second' = 'main';
  @Prop() content!: string;
  @Prop() currency!: string;

  render() {
    const priceChanks = this.content.split(',');

    return (
      <div>
        <span class="first-part">{priceChanks[0]}</span>
        <span class="second-part">,{priceChanks[1]}</span>
        <span class="unit">{this.currency}</span>
      </div>
    );
  }
}

