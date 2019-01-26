import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'uc-current-filter-group',
  shadow: true,
  styleUrl: './uc-current-filter-group.scss'
})
export class UcCurrentFilterGroup {
  @Prop() title: string;
  @Prop() facetId: string;

  render() {
    const title = this.title ? <h2>{this.title}</h2> : '';
    return [
      title,
      <slot />
    ]
  }
}

