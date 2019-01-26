import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'uc-plp-list',
  shadow: true,
  styleUrl: './uc-plp-list.scss'
})
export class UcPlpList {
  @Prop({mutable: true, reflectToAttr: true}) typed: 'list' | 'card'  = 'list';

  @Listen('window:plpChangeType')
  handleChangeTypeList(event: CustomEvent) {
    this.typed = event.detail;
  }

  render() {
    return <slot />
  }
}
