import PropTypes from 'prop-types';
import {
    branch,
    compose,
    componentFromProp,
    defaultProps,
    renameProp,
    setDisplayName,
    setPropTypes,
} from 'recompose';

export default compose(
    setDisplayName('Button'),
    setPropTypes({
        component: PropTypes.oneOfType([
            PropTypes.oneOf([
                'a',
                'input',
                'button',
            ]).isRequired,
            PropTypes.func.isRequired,
        ]),
        label: PropTypes.node,
    }),
    // render props.label
    branch(({ children, label }) => !children && label, renameProp('label', 'children')),
    defaultProps({ component: 'button' }),
)(componentFromProp('component'));
