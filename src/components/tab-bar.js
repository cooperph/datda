import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import WeekOne from '../content/week1';
import WeekTwo from '../content/week2';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };

    render() {
        return(
            <div>
                <AppBar position="static">
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab label="Basics of Malware" />
                    <Tab label="Week 2!" />
                    {/* <Tab label="Item Three" href="#basic-tabs" /> */}
                </Tabs>
                </AppBar>
                {this.state.value === 0 && <TabContainer><WeekOne /></TabContainer>}
                {this.state.value === 1 && <TabContainer><WeekTwo /></TabContainer>}
                {/* {this.state.value === 2 && <TabContainer>Item Three</TabContainer>} */}
            </div>
        )
    }
}

export default TabBar;