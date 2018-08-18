import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import WeekOne from '../content/week1';
import WeekTwo from '../content/week2';
import WeekThree from '../content/week3';
import WeekFour from '../content/week4';
import WeekFive from '../content/week5';
import WeekSix from '../content/week6';
import WeekSeven from '../content/week7';
import WeekEight from '../content/week8.js';

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
            value: 7,
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
                    <Tab label="Advanced Forensics" />
                    <Tab label="Malware Defense" />
                    <Tab label='Vulerabilites and Exploits' />
                    <Tab label='Windows Memory Manipulation' />
                    <Tab label='Network Security' />
                    <Tab label='Web Security' />
                    <Tab label='Messaging Security' />
                </Tabs>
                </AppBar>
                {this.state.value === 0 && <TabContainer><WeekOne /></TabContainer>}
                {this.state.value === 1 && <TabContainer><WeekTwo /></TabContainer>}
                {this.state.value === 2 && <TabContainer><WeekThree /></TabContainer>}
                {this.state.value === 3 && <TabContainer><WeekFour /></TabContainer>}
                {this.state.value === 4 && <TabContainer><WeekFive /></TabContainer>}
                {this.state.value === 5 && <TabContainer><WeekSix /></TabContainer>}
                {this.state.value === 6 && <TabContainer><WeekSeven /></TabContainer>}
                {this.state.value === 7 && <TabContainer><WeekEight /></TabContainer>}
            </div>
        )
    }
}

export default TabBar;