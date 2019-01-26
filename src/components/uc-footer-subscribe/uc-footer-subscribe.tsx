import { Component, Prop } from '@stencil/core';
import { isXs } from '../../utils/response-query';

@Component({
  tag: 'uc-footer-subscribe',
  shadow: true,
  styleUrl: './uc-footer-subscribe.scss'
})
export class UcFooterSubscribe {
  @Prop() method: 'GET' | 'POST';
  @Prop() action: string;
  render() {
    return (
      <form method={this.method} action={this.action}>
        {isXs() ? '' : [
          <input id="footer-subscrube-input" type="text" required placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Введите Ваш e-mail"/>,
          <label htmlFor="footer-subscrube-input"></label>
        ]}
        <button type="submit">ПОДПИСАТЬСЯ НА&nbsp;РАССЫЛКУ</button>
      </form>
    );
  }
}
