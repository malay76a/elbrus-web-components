import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'uc-breadcrumb-item',
  shadow: true,
  styleUrl: './uc-breadcrumb-item.scss'
})
export class UcBreadcrumbItem {
  @Prop({reflectToAttr: true}) icon: string; // [house, '']
  @Element() el: HTMLElement;

  render() {
    const anchor = this.el.querySelector('a');
    return [
      this.icon ? <div class={this.icon}></div> : '',
      <slot />,
      anchor ? <div class="next"></div> : ''
    ];
  }
}
