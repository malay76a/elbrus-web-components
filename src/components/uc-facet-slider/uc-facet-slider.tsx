import {Component, Prop, Element, State} from '@stencil/core';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import uniqid from 'uniqid';

@Component({
  tag: 'uc-facet-slider',
  shadow: true,
  styleUrl: './uc-facet-slider.scss'
})
export class UcFacetSlider {
  @Prop() min: string;
  @Prop() max: string;
  @Prop() leftValue: string;
  @Prop() rightValue: string;
  @Prop() facetId: string;
  @Prop() step: string = '10';
  @State() id = uniqid();

  @Element() el: HTMLElement;

  componentDidLoad() {
    const slider: noUiSlider = this.el.shadowRoot.querySelector(`#${this.id}`);
    const inputs: HTMLInputElement[] = Array.from(this.el.shadowRoot.querySelectorAll('.input-field'));
    const resetButton: HTMLButtonElement = this.el.shadowRoot.querySelector('.reset');
    const min = Number(this.min);
    const max = Number(this.max);
    const leftValue = this.leftValue;
    const rightValue = this.rightValue;
    const step = Number(this.step);

    noUiSlider.create(slider, {
      start: [leftValue, rightValue],
      connect: true,
      behaviour: 'drag',
      step: step,
      range: {
        'min': min,
        'max': max
      },
      format: wNumb({
        decimals: 0
      })
    });

    slider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });

    inputs.forEach(function (input, handle) {
      input.addEventListener('change', function () {
        slider.noUiSlider.setHandle(handle, this.value);
      });
    });

    resetButton.addEventListener('click', function () {
      slider.noUiSlider.reset();
    })
  }

  render() {
    return [
      <div id={this.id} class="slider"></div>,
      <div class="input-fields">
        <input class="input-field" type="text"/>
        <div class="delimiter">—</div>
        <input class="input-field" type="text"/>
      </div>,
      <div class="button-group">
        <div class="success">Применить</div>
        <div class="reset">Сбросить</div>
      </div>
    ]
  }
}
