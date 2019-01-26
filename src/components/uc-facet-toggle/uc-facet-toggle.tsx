import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'uc-facet-toggle',
  shadow: true,
  styleUrl: './uc-facet-toggle.scss'
})
export class UcFacetToggle {
  @Prop({mutable:true, reflectToAttr:true}) closed: boolean;
  @Prop() titleFacet: string;

  toggle() {
    this.closed = !this.closed;
  }

  render() {
    return [
      this.titleFacet ? <h2>{this.titleFacet}</h2> : '',
      <div class="toggler" onClick={this.toggle.bind(this)}></div>,
      !this.closed ? <slot /> : ''
    ]
  }
}
