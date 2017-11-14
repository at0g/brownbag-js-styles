import { createComponentWithProxy } from 'react-fela';
import Button from '@brownbag-js-styles/button';

const styles = ({ theme }) => {
    return ({
        color: theme.colors.color1.bg,
        background: theme.colors.color1.fg,
    });
};

export default createComponentWithProxy(styles, Button);
