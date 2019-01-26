import {Component, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'uc-plp-chenge-typed',
  shadow: true,
  styleUrl: './uc-plp-chenge-typed.scss'
})
export class UcPlpChengeTyped {
  @State() type: string = 'list';
  @Event() plpChangeType: EventEmitter;

  componentDidLoad() {
    this.plpChangeType.emit(this.type);
  }

  changeType(e: Event) {
    e.stopPropagation();
    this.type = (e.currentTarget as HTMLElement).classList.item(0);
    this.plpChangeType.emit(this.type);
  }

  render() {
    const isList = this.type === 'list';

    return (
      <div class="toggler" >
        <div class="list" data-active={isList} onClick={this.changeType.bind(this)}></div>
        <div class="card" data-active={!isList} onClick={this.changeType.bind(this)}></div>
      </div>
    );
  }
}
