import { createComponentWithProxy } from 'react-fela';
import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes } from 'recompose';
import Button from '@brownbag-js-styles/button';

const ButtonStyles = props => ({
    border: '1px solid black',
    display: 'inline-block',
    lineHeight: 'inherit',
    padding: '0 0.6em',
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
    ...(((variant, colors) => {
        let colorPair;
        switch (variant) {
            case 'danger':
                colorPair = colors.color1;
                break;
            case 'primary':
                colorPair = colors.color2;
                break;
            case 'secondary':
                colorPair = colors.color3;
                break;
            case 'warn':
                colorPair = colors.color4;
                break;
            case 'default':
            default:
                colorPair = colors.color5;
        }

        return {
            color: colorPair.fg,
            backgroundColor: colorPair.bg,
        };
    })(props.variant, props.theme.colors)),
});

export default compose(
    setDisplayName('FelaButton'),
    setPropTypes({
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
    }),
)(
    createComponentWithProxy(ButtonStyles, Button)
);
