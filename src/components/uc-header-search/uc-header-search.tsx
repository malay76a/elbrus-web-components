import {Component, Prop } from '@stencil/core';
import { isMobile } from '../../utils/response-query'

@Component({
  tag: 'uc-header-search',
  shadow: true,
  styleUrl: './uc-header-search.scss'
})
export class UcHeaderSearch {
  @Prop() action: string;
  render() {
    return isMobile() ? <div class="icon"></div> : (
      <form method="get" action={this.action}>
        <input type="text" name="query" placeholder="Поиск по советам, товарам, услугам"/>
        <button type="submit"></button>
      </form>
    );
  }
}
