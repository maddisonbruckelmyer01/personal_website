import React, { Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import adminBoards from './adminboards.png';
import adminCounselors from './admincounselors.png';
import adminUser from './adminuser.jpg';
import homePage from './mainPage.png';
import friendsBoard from './friendsBoard.png';
import directMessages from './directMessages.png';

const styles ={
    card: {
        minWidth: 275,
        marginLeft: 240,
        marginRight: 250
    },
    title: {
        fontSize: 20
    },
    pos: {
        marginButton: 12,
    },
    images: {
        height: '250px',
        width: '550px',
    },
    top: {
        marginTop: '125px'
    }
}

class MainPage extends Component {



    render() {
        const {classes} = this.props;
        return (
            <div className={classes.top}>
                <h1>Full Stack Software Developer!</h1>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title}  gutterButtom>
                            Konnections
                        </Typography>
                        <Typography variant="h5" component="h2" color="textSecondary">
                            My solo project is an application that helps connect foster kids to one another!
                        </Typography>
                        <Typography variant="h5" component="h2" color="textSecondary">
                            Only foster kids know what other foster kids are going through
                        </Typography>
                        <Typography variant="h5" component="h2" color="textSecondary">
                            I created Konnections to help foster kids conenct with one another
                        </Typography>
                        <Typography variant="h5" component="h2" color="textSecondary">
                            When an admin logs in they are able to edit and delete boards.
                            Also they are able to delete and add counselors, and see all users that have created an account.
                        </Typography>
                        <img src={adminBoards} className={classes.images} />
                        <img src={adminCounselors} className={classes.images} />
                        <img src={adminUser} className={classes.images} />
                        <Typography variant="h5" component="h2" color="textSecondary">
                            When a normal user logs in they are able to send,recieve and create direct messages.
                            They are also able to create new boards, send and see all messages on created boards.
                        </Typography>
                        <img src={directMessages} className={classes.images} />
                        <img src={homePage} className={classes.images} />
                        <img src={friendsBoard} className={classes.images} />
                    </CardContent>
                    <CardActions>
                        <Button ><a href="https://github.com/maddisonbruckelmyer01/konnections" 
                                target="_blank">Konnections Repository</a></Button>
                        
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Woodbury Community Foundation
                        </Typography>
                        <Typography variant="h5" component="h2" color="textSecondary">
                            Coming Soon!
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(MainPage);