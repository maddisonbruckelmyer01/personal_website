import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MainPage from '../MainPage/MainPage';
import photo from './Maddison.jpg';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60
    }
};

class Nav extends Component {
    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar postition="static">
                    <ToolBar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            
                        </IconButton> 
                            <Avatar alt="Maddison Bruckelmyer"
                                src={photo} className={classes.bigAvatar} />
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Maddison Bruckelmyer
                        </Typography>
                        <Button color="inherit">
                            <a href="https://github.com/maddisonbruckelmyer01" 
                            target="_blank">
                            GitHub</a>
                            </Button>
                        <Button color="inherit">
                            <a href="https://linkedin.com/in/maddison-bruckelmyer" 
                            target="_blank">
                                Linkedin
                            </a></Button>
                    </ToolBar>
                </AppBar>
                <MainPage />
            </div>
        )
    }
}

export default withStyles(styles)(Nav);