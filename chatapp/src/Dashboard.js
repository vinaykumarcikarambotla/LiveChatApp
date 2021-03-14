import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { CTX } from './Store';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: 'flex'
  },
  topicWindow: {
    width: '30%',
    innerHeight: '300px',
    borderRight: '1px solid grey'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px'
  },
  chatBox: {
    width: '85%'
  },
  button: {
    width: '15%'
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [allChats] = React.useState(CTX);
  const topics = Object.keys(allChats._currentValue[0]);

  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [textValue, changeTextValue] = React.useState('');
  return (<div>
    <Paper className={classes.root}>
      <Typography variant="h4" component="h4">
        Chat App
              </Typography>
      <Typography component="h5">
        {activeTopic}
      </Typography>
      <div className={classes.flex}>
        <div className={classes.topicWindow}>
          <List>
            {
              topics.map(topic => (
                <ListItem onClick={(e)=>{changeActiveTopic(topic)}} key={topic} button>
                  <ListItemText primary={topic}>

                  </ListItemText>
                </ListItem>
              ))
            }
          </List>
        </div>
        <div className={classes.chatWindow}>
          {
            [{ from: 'user', msg: 'Hello' }].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} className={classes.Chip} />
                <Typography variant="body1">
                  {chat.msg}
                </Typography>
              </div>
            ))
          }
        </div>
      </div>
      <div className={classes.flex}>
        <TextField
          className={classes.chatBox}
          label="Send a chat"
          value={textValue}
          onChange={e => changeTextValue(e.target.value)}
        />
        <Button variant="contained" color="primary">
          Send
      </Button>
      </div>
    </Paper>
  </div>);
}