import {Component } from '@stencil/core';

@Component({
  tag: 'uc-footer-social-links',
  shadow: true,
  styleUrl: './uc-footer-social-links.scss'
})
export class UcFooterSocialLinks {
  render() {
    return <slot />;
  }
}
