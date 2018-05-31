import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';

import InboxIcon from '@material-ui/icons/Inbox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import * as React from 'react';

const style = {
  maxWidth: 360,
  width: '100%',
  // backgroundColor: theme.palette.background.paper,
};

class Sidebar extends React.Component {
  public render() {
    return (
      <div className="sidebar" style={style}>
        <List component="nav">
          <ListItem button={true}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button={true}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button={true}>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button={true} component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </div>
    );
  }
}


export default Sidebar;
