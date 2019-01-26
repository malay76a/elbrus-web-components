import { Component, Prop,  } from '@stencil/core';
import { isXs } from '../../utils/response-query';

@Component({
  tag: 'uc-plp-item-rating',
  shadow: true,
  styleUrl: './uc-plp-item-rating.scss'
})
export class UcPlpItemRating {
  @Prop() rating: string = '0';
  @Prop() count: string = '0';

  render() {
    //TODO: define algorithm create stars

    return (
      <div class="rating-wrapper">
        <div class="stars">
          <div class="star on"></div>
          <div class="star on"></div>
          <div class="star half"></div>
          <div class="star off"></div>
          <div class="star off"></div>
        </div>
        <a class="reviews" href="#reviews">
          <span class="reviews-icon"></span>
          <span class="reviews-text">{ isXs() ? `(${this.count})` : `${this.count} отзывов`}</span>
        </a>
      </div>
    );
  }
}
