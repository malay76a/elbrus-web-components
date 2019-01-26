import { Component, Element } from '@stencil/core';

@Component({
  tag: 'uc-breadcrumb-list',
  shadow: true,
  styleUrl: './uc-breadcrumb-list.scss'
})
export class UcBreadcrumbList {
  @Element() el: HTMLElement;

  componentDidLoad() {
    const firstElement = this.el.querySelector('uc-breadcrumb-item');
    firstElement.setAttribute('icon', 'house');
  }

  render() {
    return <slot />;
  }
}
