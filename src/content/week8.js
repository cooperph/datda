import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class WeekEight extends React.Component {
    render() {
        return (
            <Paper>
                <Typography className="headline" variant='title'>Messaging Security</Typography>
                <hr />
                <Typography className="title" variant="subheading">Tools for Research Purposes</Typography>
                <ul>
                    <li>Linux Tools</li>
                    <ul>
                        <li>DIG - Domain information groper - investigation of DNS records</li>
                        <li>WHOIS - Searching for IP/Domain registration information</li>
                        <li>Grep, SED, AWK - data parsing and manipulation</li>
                    </ul>
                    <li>Open source databases</li>
                    <ul>
                        <li>PostgreSQL - world's most advanced open source database</li>
                        <li>MySQL - most popular open source database</li>
                    </ul>
                    <li>Regix Coach - regular expression syntaxx/ functionality learning aid</li>
                    <li>Trustessource.org - historical and current reputations based on McAfee data</li>
                    <li>Spamhaus.org - widely accepted as an authoratative source of reputation data</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Research Techniques</Typography>
                <ul>
                    <li>Parsing - extraction of key meta data</li>
                    <li>Grouping - by timestamp, source_ip or cidr, subject, URL</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Data Scientific Method</Typography>
                <ul>
                    <li>Start with data</li>
                    <li>Develop intuitions about the data and the questions it can answer</li>
                    <li>Formulate your question</li>
                    <li>Leverage your current data to better understand if it is the right question to ask. If not, iterate until you have a testable hypothesis</li>
                    <li>Create a framework where you can ren tests/ experiments</li>
                    <li>Analyze the results to draw insights about the question</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Final Thoughts</Typography>
                <p>This week's lectures were much more about the normal everyday things that we encounter and there really wasn't a huge need for a lot of notes on this stuff.
                    Some of the biggest stuff was about the different types of spam emails, but mostly what we've all seen in the past.
                    Mostly, just don't be stupid and you should be pretty save when it comes to the internet and messages.
                </p>
            </Paper>
        )
    }
}

export default WeekEight;