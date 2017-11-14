import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        component: PropTypes.oneOfType([
            PropTypes.oneOf([
                'a',
                'button',
                'input',
            ]).isRequired,
            PropTypes.func.isRequired,
        ]),
    };

    static defaultProps = {
        component: 'button',
    };

    render() {
        const {
            children,
            component: Component,
            ...props
        } = this.props;

        return (
            <Component {...props}>
                {children}
            </Component>
        );
    }
}
