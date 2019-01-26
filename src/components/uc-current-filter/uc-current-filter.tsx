import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'uc-current-filter',
  shadow: true,
  styleUrl: './uc-current-filter.scss'
})
export class UcCurrentFilter {
  @Prop() count: string;
  @Prop() resetButton: boolean;

  render() {
    return [
      <h2>Ваш выбор:</h2>,
      <div>Найдено {this.count} товаров</div>,
      <slot />,
      this.resetButton ? <button>Сбросить все фильтры</button> : ''
    ]
  }
}
