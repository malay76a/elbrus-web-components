import {Component } from '@stencil/core';

@Component({
  tag: 'uc-seo-block',
  shadow: true,
  styleUrl: './uc-seo-block.scss'
})
export class UcSeoBlock {
  render() {
    return (
      <div>
        <slot />
      </div>);
  }
}
