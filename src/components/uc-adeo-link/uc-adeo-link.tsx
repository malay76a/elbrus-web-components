import {Component} from '@stencil/core';

@Component({
  tag: 'uc-adeo-link',
  shadow: true,
  styleUrl: './uc-adeo-link.scss'
})
export class UcAdeoLink {
  render() {
    return <slot />;
  }
}
