import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';
import CartIcon from '@material-ui/icons/ShoppingCart';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    window: PropTypes.func,
};

export default function HideAppBar(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <MenuIcon />
                            <CartIcon style={{ margin: '0 5px 0 20px' }} />
                            <Typography variant="h6">Carrinho Mandrake</Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}
