import {Component} from '@stencil/core';

@Component({
  tag: 'uc-parent-link',
  shadow: true,
  styleUrl: './uc-parent-link.scss'
})
export class UcParentLink {
  render() {
    return <slot />;
  }
}
