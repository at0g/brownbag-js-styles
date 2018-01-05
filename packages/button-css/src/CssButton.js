import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseButton from '@brownbag-js-styles/button';

const Button = ({
    size,
    variant,
    ...props
}) => (
    <BaseButton
        {...props}
        className={classNames('button', props.className, {
            [`button--${size}`]: true,
            [`button--${variant}`]: true,
            'button--disabled': props.disabled,
        })}
    >
        {props.children}
    </BaseButton>
);

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
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
};

Button.defaultProps = {
    children: undefined,
    className: undefined,
    disabled: false,
    size: 'medium',
    variant: 'default',
};

export default Button;
