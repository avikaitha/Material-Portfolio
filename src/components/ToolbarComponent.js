import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange800, grey50} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
  toolbar: {
    backgroundColor: orange800,
  },
  title: {
    color: grey50,
    fontWeight: 400
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: orange800,
  },
});

class ToolbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle text="Avinash Reddy Kaitha" style={styles.title}/>
          </ToolbarGroup>

          <ToolbarGroup>
            <ToolbarTitle text="Options" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            <RaisedButton label="Create Broadcast" primary={true} />
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }>
              <MenuItem primaryText="Download" />
              <MenuItem primaryText="More Info" />
            </IconMenu>

          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>

    );
  }

}

export default ToolbarComponent
