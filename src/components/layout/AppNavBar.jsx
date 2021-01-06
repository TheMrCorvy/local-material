import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    },
    text: {
        padding: theme.spacing(2, 2, 0)
    },
    paper: {
        paddingBottom: 50
    },
    subheader: {
        backgroundColor: theme.palette.background.paper
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        background: '#1976d2'
    },
    grow: {
        flexGrow: 1
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto'
    }
}));

export default function Landing() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    let messageLogged = false;

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });

        if (!messageLogged) {
            console.log(
                'The following error message is not from my code, but actually from material ui...'
            );

            messageLogged = !messageLogged;
        }
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom'
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment>
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}>
                    {list('right')}
                </SwipeableDrawer>
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="open drawer">
                            <MoreIcon />
                        </IconButton>
                        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                            <AddIcon />
                        </Fab>
                        <div className={classes.grow} />
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={toggleDrawer('right', true)}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    );
}
