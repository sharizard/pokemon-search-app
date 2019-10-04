import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';

const Header: React.FC = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Pokemon
                    </Typography>
                    <Typography variant="h6">
                        Something
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
