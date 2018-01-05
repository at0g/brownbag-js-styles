import glamorous from 'glamorous';
import Button from '@brownbag-js-styles/button';
import PropTypes from 'prop-types';

const GlamorousButton = glamorous(Button, {
    displayName: 'GlamorousButton',
    filterProps: ['size', 'variant'],
    propTypes: {
        disabled: PropTypes.bool,
        size: PropTypes.oneOf([
            'small',
            'medium',
            'large',
        ]),
        variant: PropTypes.oneOf([
            'default',
            'danger',
            'primary',
            'secondary',
            'warn',
        ]),
    },
});

export default GlamorousButton(
    {
        border: '1px solid black',
        display: 'inline-block',
        lineHeight: 'inherit',
        padding: '0 0.6em',
    },
    props => ({
        cursor: props.disabled
            ? 'not-allowed'
            : 'pointer',
        opacity: props.disabled
            ? 0.5
            : 1.0,
        fontSize: ((size) => {
            switch (size) {
                case 'small':
                    return '80%';
                case 'large':
                    return '120%';
                case 'medium':
                default:
                    return '100%';
            }
        })(props.size),
        ...(((variant) => {
            switch (variant) {
                case 'danger':
                    return {
                        backgroundColor: 'darkred',
                        color: 'whitesmoke',
                    };
                case 'primary':
                    return {
                        backgroundColor: 'darkcyan',
                        color: 'blanchedalmond',
                    };
                case 'secondary':
                    return {
                        backgroundColor: 'darkslategray',
                        color: 'blanchedalmond',
                    };
                case 'warn':
                    return {
                        backgroundColor: 'cornsilk',
                        color: 'coral',
                    };
                case 'default':
                default:
                    return {
                        backgroundColor: 'beige',
                        color: 'darkslategray',
                    };
            }
        })(props.variant)),
    }),
);
