import {Component, Listen, Prop} from '@stencil/core';

@Component({
  tag: 'uc-plp-item-description',
  shadow: true,
  styleUrl: './uc-plp-item-description.scss'
})
export class UcPlpItemDescription {
  @Prop({reflectToAttr: true, mutable: true}) typed: 'list' | 'card' = 'list';

  @Listen('window:plpChangeType')
  handleChangeTypeList(event: CustomEvent) {
    this.typed = event.detail;
  }

  render() {
    return <slot />;
  }
}
