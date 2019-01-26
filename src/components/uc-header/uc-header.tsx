import {Component } from '@stencil/core';

@Component({
  tag: 'uc-header',
  shadow: true,
  styleUrl: './uc-header.scss'
})
export class UcHeader {
  render() {
    return (
      <uc-container>
        <div class="header-wrapper">
          <slot />
        </div>
      </uc-container>
    );
  }
}
