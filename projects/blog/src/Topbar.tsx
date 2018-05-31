import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import * as React from 'react';

// import Sidebar from './Sidebar';

const style = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: {
    flexGrow: 1,
  },
};

class Topbar extends React.Component {
  public render() {
    return (
      <div className={"topbar"} style={style.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton style={style.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>

            <Typography style={style.flex} variant="title" color="inherit">
              Colton's Workspace
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Topbar;
