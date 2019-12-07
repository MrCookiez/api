
import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { getDefaultImg } from '../../utils';
import * as styles from './styles';

const Card = ({ img, name, description, price, availability, offer }) => (
    availability
    ? (
        <div css={styles.wrapper}>
            {offer === 1 && (
                <div css={styles.offer}>
                    <span>OFFER</span>
                </div>
            )}
            <div css={styles.container}>
                {<img src={img ? img : getDefaultImg()} alt="food picture"/>}
                <div>
                    {name}
                    {description}
                    {price}
                </div>
            </div>
        </div>
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
