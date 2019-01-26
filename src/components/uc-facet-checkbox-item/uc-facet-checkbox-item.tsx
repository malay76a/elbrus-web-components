import {Component, Prop, Element, State} from '@stencil/core';
import uniqid from 'uniqid';

@Component({
  tag: 'uc-facet-checkbox-item',
  shadow: true,
  styleUrl: './uc-facet-checkbox-item.scss'
})
export class UcCurrentFilter {
  @Prop() label: string;
  @Prop() count: string;
  @Prop() checked: boolean;
  @Prop() disabled: boolean;
  @State() id = uniqid();
  @Element() el: HTMLInputElement;

  render() {
    return (
      <div class="checkbox-container">
        <input type="checkbox" id={this.id} checked={this.checked} disabled={this.disabled}/>
        <label htmlFor={this.id}>
          <span class="text">
            {this.label} <span class="counter">({this.count})</span>
          </span>
        </label>
      </div>
    );
  }
}
