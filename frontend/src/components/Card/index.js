
import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
// import { } from '../../utils';
import defaultImgs from './img';
import * as styles from './styles';

const Card = ({ img, name, description, price, availability, offer }) => (
    availability
    ? (
        <form css={styles.wrapper}>
            {/* {offer === 1 && (
                <div css={styles.offer}>
                    <span>OFFER</span>
                </div>
            )} */}
            <div css={styles.container}>
                {/* <img css={styles.image} src={defaultImgs.burger} alt="food picture"/> */}
                <div css={styles.image} bgImage={defaultImgs.burger} alt="product picture" />
                <div css={styles.body}>
                    <div className='product-headline'>
                        <span className='product-name'>{name}</span>
                        <span className='product-price'>{price.toFixed(2)}€</span>
                    </div>
                    <span className='product-description'>{description}</span>
                    {!!offer && <span className='product-offer'>Offer</span>}
                    <div className='product-footer'>
                        <input type="number" placeholder='1' name="quantity" min="1" max="10" />
                        <button type='submit'>Προσθηκη</button>
                    </div>
                </div>
            </div>
        </form>
    ) : (
        <div css={styles.wrapper}>
            {img && <img src={img} alt="food picture"/>}
            {name} is out of order
        </div>
    )
);

Card.defaultProps = {
    img: '',
    offer: false,
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
     /** When false, product will be disabled */
    availability: PropTypes.bool,
    /** When true, offer label will be displayed on the product */
    offer: PropTypes.bool,
};

export default Card;
