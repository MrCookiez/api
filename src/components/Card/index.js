
import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import defaultImgs from './img';
import * as styles from './styles';

const Card = ({
  img, name, description, price, availability, offer,
}) => availability && (
<form css={styles.wrapper}>
  <div css={styles.container}>
    <div css={styles.image} bgImage={img || defaultImgs.burger} alt="product picture" />
    <div css={styles.body}>
      <div className="product-headline">
        <span className="product-name">{name}</span>
        <span className="product-price">
          {price.toFixed(2)}
          €
        </span>
      </div>
      <span className="product-description">{description}</span>
      {!!offer && <span className="product-offer">Offer</span>}
      <div className="product-footer">
        <input type="number" placeholder="0" name="quantity" min="1" max="10" />
        <button className="add-product" type="submit">Προσθηκη</button>
      </div>
    </div>
  </div>
</form>
);

Card.defaultProps = {
  img: '',
  offer: false,
  availability: true,
};

Card.propTypes = {
  /** Product image remote url */
  img: PropTypes.string,
  /** Product name */
  name: PropTypes.string.isRequired,
  /** Product description */
  description: PropTypes.string.isRequired,
  /** Product price (decimal number) */
  price: PropTypes.number.isRequired,
  /** When 0, product will be disabled */
  availability: PropTypes.number,
  /** When 1, offer label will be displayed on the product */
  offer: PropTypes.number,
};

export default Card;
