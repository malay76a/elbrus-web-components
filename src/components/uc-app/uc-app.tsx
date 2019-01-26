import {Component } from '@stencil/core';

@Component({
  tag: 'uc-app',
  shadow: true,
  styleUrl: './uc-app.scss'
})
export class UcApp {
  render() {
    return <slot />;
  }
}
