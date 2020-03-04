import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import CustomButton from '../Button';
import { breakpoints } from '../../config/grid';
import coffeeArtJPG from './img/cappuccino-art.jpg';
import { ReactComponent as CoffeeCup } from './img/coffee-cup.svg';
import styles from './styles';

const CoffeeSection = ({ data, className }) => {
    const { title, text, button: { to, label } } = data;

    return (
        <div className={className} css={styles}>
            <Media query={`(max-width: ${breakpoints.md}px`}>
                {match => match
                    ? (
                        <Grid container className='mobile-coffee-wrapper'>
                            <Grid item xs={12}>
                                <div className="">
                                    <h2>{title}</h2>
                                    <p>{text}</p>
                                    {to} Desktop
                                </div>
                                <CustomButton to={to} label={label} />
                            </Grid>

                            <Grid item xs={12}>
                                <CoffeeCup />
                            </Grid>
                        </Grid>)
                    : (
                        <Grid container direction="row"
                        justify="center"
                        alignItems="center" className='desktop-coffee-wrapper'>
                             <Grid className='img-wrapper' item lg={4}>
                                <img src={coffeeArtJPG} alt="coffee-art-cappuccino" />
                            </Grid>

                            <Grid item lg={6} className='block-container'>
                                <div className="text-block">
                                    <h2>{title}</h2>
                                    <p>{text}</p>
                                    {to} Desktop
                                </div>

                                <CustomButton to={to} label={label} />
                            </Grid>
                        </Grid>
                    )
                }
            </Media>
        </div>
    );
};
CoffeeSection.defaultProps = {
    className: '',
    title: '',
    text: '',
    button: {
        to: '/',
        label: 'default label',
    },
};

CoffeeSection.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    className: PropTypes.string,
    button: PropTypes.shape({
        to: PropTypes.string,
        label: PropTypes.string,
    }),
};

export default CoffeeSection;
