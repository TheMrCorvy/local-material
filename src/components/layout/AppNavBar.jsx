import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MoreIcon from '@material-ui/icons/MoreVert';
import TranslateIcon from '@material-ui/icons/Translate';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {
    Badge,
    MenuItem,
    Menu,
    Button,
    Typography,
    Fab,
    Toolbar,
    AppBar,
    ListItemText,
    ListItemIcon,
    ListItem,
    Divider,
    List,
    SwipeableDrawer,
    IconButton
} from '@material-ui/core';

let messageLogged = false;

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        background: '#1a73e8'
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
    },
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        textTransform: 'capitalize'
    }
}));

export default function Landing({ userName, taskItems }) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        if (!messageLogged) {
            console.log(
                'The following error message is not from my code, but actually from material ui...'
            );
            messageLogged = !messageLogged;
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

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
        <div className={classes.root}>
            <React.Fragment>
                <AppBar position="fixed" style={{ background: '#1a73e8' }}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Tareas de {userName}
                        </Typography>
                        <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            color="inherit"
                            startIcon={<TranslateIcon />}>
                            Open Menu
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        <IconButton aria-label={`show ${taskItems} tasks to do`} color="inherit">
                            <Badge badgeContent={taskItems} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer('right', true)}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}>
                    {list('right')}
                </SwipeableDrawer>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="open drawer">
                            <MoreIcon />
                        </IconButton>
                        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                            <HomeIcon />
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
