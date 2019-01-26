import {Component } from '@stencil/core';

@Component({
  tag: 'uc-header-panel',
  shadow: true,
  styleUrl: './uc-header-panel.scss'
})
export class UcHeaderPanel {
  render() {
    return (
      <uc-container>
        <slot />
      </uc-container>
    );
  }
}
