import { Component, EventEmitter, Event } from '@stencil/core';
import { isMobile } from '../../utils/response-query';

@Component({
  tag: 'uc-facet-and-list',
  shadow: true,
  styleUrl: './uc-facet-and-list.scss'
})
export class UcFacetAndList {

  @Event() filterShow: EventEmitter;
  toggleFilter(e: Event) {
    this.filterShow.emit(e);
  }

  render() {
    const content = !isMobile() ? <slot /> : [
      <slot />,
      <div class="hamburger" onClick={this.toggleFilter.bind(this)}>
        <div class="filter-icon"></div>
      </div>
    ];
    return content
  }
}
