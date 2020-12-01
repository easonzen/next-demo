// import React, { Component } from 'react';
// import Link from 'next/link'
// import Header from 'next/head';
// import MyButton from 'components/button';

// class HomePage extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <>
//                 <Header>
//                     <title>首页</title>
//                     <meta
//                         name="viewport"
//                         content="minimum-scale=1, initial-scale=1, width=device-width"
//                     />
//                 </Header>

//                 <AppBar position="static">
//                     <Toolbar variant="dense">
//                         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6" color="inherit">
//                             Photos
//                         </Typography>
//                     </Toolbar>
//                 </AppBar>
//             </>
//         )
//     }
// }

// export default HomePage

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
