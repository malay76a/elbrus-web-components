import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'uc-current-filter-item',
  shadow: true,
  styleUrl: './uc-current-filter-item.scss'
})
export class UcCurrentFilterItem {
  @Prop() facetName: string;

  render() {
    return [
      <div></div>,
      <p>{this.facetName}</p>,
      <span></span>
    ];
  }
}
