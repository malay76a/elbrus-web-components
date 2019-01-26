import {Component, Listen, Prop} from '@stencil/core';

@Component({
  tag: 'uc-plp-item',
  shadow: true,
  styleUrl: './uc-plp-item.scss'
})
export class UcPlpItem {
  @Prop({reflectToAttr: true, mutable: true}) typed: 'list' | 'card' ='list';

  @Listen('window:plpChangeType')
  handleChangeTypeList(event: CustomEvent) {
    this.typed = event.detail;
  }

  render() {
    return <slot />;
  }
}
