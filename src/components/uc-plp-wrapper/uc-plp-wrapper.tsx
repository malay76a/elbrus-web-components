import { Component, Prop } from '@stencil/core';
import { isXs } from '../../utils/response-query';

@Component({
  tag: 'uc-plp-wrapper',
  shadow: true,
  styleUrl: './uc-plp-wrapper.scss'
})
export class UcPlpWrapper {
  @Prop() sorted: boolean = false;
  @Prop() showed: boolean = false;
  @Prop() typed: boolean = false;

  render() {
    const option = this.sorted || this.showed || this.typed ? (
      <div class="option">
        {this.typed && !isXs() && <uc-plp-chenge-typed /> }
      </div>
    ) : '';

    return [
        option,
        <slot />
      ];
  }
}


