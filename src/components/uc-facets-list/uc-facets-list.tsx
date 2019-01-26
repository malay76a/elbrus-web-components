import { Component, Listen, Element } from '@stencil/core';
import { isMobile } from '../../utils/response-query';

@Component({
  tag: 'uc-facets-list',
  shadow: true,
  styleUrl: './uc-facets-list.scss'
})
export class UcFacetsList {
  @Element() el: HTMLElement;
  hidden: boolean = false;

  @Listen('window:filterShow')
  filterShow() {
    this.chengeVisibiliti();
  }

  chengeVisibiliti() {
    this.hidden = !this.hidden;
    if(this.hidden) {
      this.el.setAttribute('show', '');
    } else {
      this.el.removeAttribute('show');
    }
  }

  render() {
    const content = !isMobile() ? <slot /> : [
      <div class="header">
        <div class="filter">Фильтр</div>
        <div class="close" onClick={this.chengeVisibiliti.bind(this)}>Закрыть</div>
      </div>,
      <div class="grid"><slot /></div>,
    ];
    return content;
  }
}
