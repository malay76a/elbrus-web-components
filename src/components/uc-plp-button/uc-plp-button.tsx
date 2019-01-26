import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'uc-plp-button',
  scoped: true,
  styleUrl: './uc-plp-button.scss'
})
export class UcPlpButton {
  @Prop() typeButton: string;
  @Prop({mutable:true, reflectToAttr:true}) checked: boolean = false;

  type = {
    'compare': {
      false: 'Сравнить',
      true: 'В сравнении'
    },
    'shoping-list': {
      false: 'В список',
      true: 'Добавлено'
    },
    'buy': {
      false: 'В корзину',
      true: 'Добавлено'
    }
  };


  changeChecked(e: Event) {
    e.preventDefault();
    if(this.typeButton === 'compare') {
      this.checked = !this.checked;
    } else {
      this.checked = true;
    }
  }

  render() {
    const label = this.type[this.typeButton][this.checked];

    return [
      <span class="hidden"><slot /></span>,
        <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" checked={this.checked} onClick={this.changeChecked.bind(this)}/>,
      <label htmlFor="styled-checkbox-1">
        <span class="text">{label}</span>
        <span class="icon-check"></span>
      </label>
    ]
  }
}
