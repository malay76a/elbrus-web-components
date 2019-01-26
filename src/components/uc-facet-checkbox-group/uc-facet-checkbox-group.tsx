import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'uc-facet-checkbox-group',
  shadow: true,
  styleUrl: './uc-facet-checkbox-group.scss'
})
export class UcCurrentFilter {
  @Prop() facetId: string;

  render() {
    return <slot />
  }
}
