import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


class WeekTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        // <Typography className="title" variant="subheading"></Typography>
        // <ul>
        //     <li></li>
        //     <li></li>
        //     <li></li>
        // </ul>
        return(
            <div>
                <Paper>
                    <Typography className="headline" variant='title'>Advanced Forensics</Typography>
                    <hr/>
                    <Typography className="title" variant="subheading">When do we conduct forensic invstigations?</Typography>
                    <ul>
                        <li>Trying to determine Fraud</li>
                        <li>Intellectual Property Theft</li>
                        <li>Hacker Intrusions or Data Breachers (think Target, etc)</li>
                        <li>Inappropriate use of the internet (illegally downloading a car, surfing porn at work)</li>
                        <li>ChildExploitation</li>
                        <li>E-Discovery for Civil or Criminal Litigations</li>
                    </ul>
                    <br></br>
                    <Typography className="title" variant="subheading">When is forensics?</Typography>
                    <ul>
                        <li><u>Forensic Computing</u> is getting the data off the system and then being able to replicate and understand what happened on the system</li>
                        <li>Not up to you to determine guilt!!!</li>
                        <li>Forensics Steps</li>
                            <ul>
                                <li>Evidence Acquisition</li>
                                <li>Investigation and Analysis</li>
                                <li>Reporting Results</li>
                            </ul>
                        <li>Three Main Categories of forensics</li>
                            <ul>
                                <li>Live Forensics - rarely done now. Unsafe or pull plugs to research in another locatoin</li>
                                <li>Post Mortem - scanning memory/ disks (xbox or playstation to chat)</li>
                                <li>Network - </li>
                            </ul>
                        <li>Four Main Principles</li>
                            <ul>
                                <li>Minimize Data Loss</li>
                                <li>Record everything you do! (date, time, keep active log of EVERYTHING!)</li>
                                <li>Analyze all data collected (the Evidence)</li>
                                <li>Report Findings - make as tight as possible, otherwise a lawyer will find holes and make you look stupid</li>
                            </ul>
                    </ul>
                    <br></br>
                    <Typography className="title" variant="subheading">When is Evidence?</Typography>
                    <ul>
                        <li>Anything that can be proved or disproved as fact</li>
                        <li>Different places evidence can be found:</li>
                            <ul>
                                <li>Network (firewalls, IDS, routers, etc)</li>
                                <li>Operating System</li>
                                <li>Databases and Applications - DB forensics is a big area, not a lot of people who do this</li>
                                <li>Peripherals</li>
                                <li>removable Media (CD/DVD/USB/ eternal HD)</li>
                                <li>Human Testimony</li>
                            </ul>
                        <li><u>Admissible</u> evidence is evidence that a court accepts as legit</li>
                        <li><u>triage</u> - if I find something can I prove it's the same using a differnt techinque</li>
                        <li>With super large media, can use a checksum against the files too see what is whitelisted and you're left with a list of files to investigate</li>
                    </ul>
                    <br></br>
                    <Typography className="title" variant="subheading">Evidence Handling</Typography>
                    <ul>
                        <li>Must Preserve the integrity of the evidence at all times!</li>
                            <ul>
                                <li>Creae a crytographic has of the entire disk and each partition (MD5 or SHA1)</li>
                                <li>Create bit-images copies and analyze them</li>
                                <li>Create a crytographic hash of the copy and compate with the results of the original, they MUST match!</li>
                                <li>Lock teh original disk in a limitied-access room or container</li>
                                <li>md5sum (UNIX)</li>
                                <li>md = message digest</li>
                                <li>md5sum provides a 16 byte signature</li>
                                <li>In a post-mortem analysis, hash the evidence disk and partitions before doing anything else!</li>
                                <li>Hash the images to ensure they match</li>
                                <li>Calculate the hash for a partition: md5sum/dev/sda1</li>
                            </ul>
                    </ul>
                    <br></br>
                    <Typography className="title" variant="subheading">The IR Process</Typography>
                    <img src={require('./images/IRProcess.png')} alt='IRProcess' />
                    <ul>
                        <li>Most small companies don't have an IR team, but some large companies have them</li>
                        <li>Evaluation is something that is usually not given enough time</li>
                        <li>Red and Blue team approach</li>
                        <li>Communication is KEY on the IR team</li>
                        <li>Bring duct tape to shut up execuatives who keep asking too many questions</li>
                    </ul>
                    <br></br>
                    <Typography className="title" variant="subheading">Mapping Evidence to an APT-Case</Typography>
                    <img src={require('./images/APTcase.png')} alt='IRProcess' />
                    <ul>
                        <li>Most when you find evidence is in Installation</li>
                        <li>Sometimes found in the Delivery in a spam folder</li>
                    </ul>
                    <br></br>
                    <Typography className="title" variant="subheading">Locard's Exchange Principle</Typography>
                    <ul>
                        <li>When two objects come in contact with each other, there will be a transfer of material from one to another</li>
                        <li>You cannot interact with a live system without having some effect on it.</li>
                        <li>make sure you document your work!</li>
                        <li>Once contaminated, it's always contaminated!</li>
                        <li>Think about how we all leave DNA everywhere we go. (hair, dead skin, etc)</li>
                    </ul>
                    <br></br>
                    <Typography className="title" variant="subheading">Order of Volatility</Typography>
                    <ul>
                        <li>Most important thing from these lectures!</li>
                        <li>When collecting evidence you should proceed from the volatile to the less volatile (see RFC 3227)</li>
                        <ul>
                            <li>System Memory</li>
                            <li>Temp Files (swapfile / paging file / hibernation file)</li>
                            <li>Process Table and Network Connections</li>
                            <li>Network Routing Information and ARP cache</li>
                            <li>Forensics Acquisition of Disks</li>
                            <li>Remote Logging and Monitoring data</li>
                            <li>Physical configuration and network topology</li>
                            <li>Backups</li>
                        </ul>
                    </ul>
                    <br></br>
                    <Typography className="title" variant="subheading">Physical Memory</Typography>
                    <ul>
                        <li>Physical memory is the short term memory of a computer, RAM</li>
                        <ul>
                            <li>Rapid decay of information as soon as memory module is disconnected from powe and clock</li>
                            <li>not at rapid as initially believed</li>
                        </ul>
                        <li>Why would you dump the contents of RAM?</li>
                        <ul>
                            <li>lots of information in RAM, but only when applications are running</li>
                            <li>Can find artifacts hidden by attackers in RAM</li>
                            <li>can find information about processes that have exited!</li>
                        </ul>
                        <li>Physical memory is divided into so called 'pages' and allocated virtual memory is mapped onto physical memory pages by page</li>
                        <li>The same page of physical memroy can appear at different locations within the same addres space or in different address spaces</li>
                        <li>Data can be moved from phsical memory into a page file to clear some space</li>
                        <li>Memory does not get over written when it is marked as free</li>
                    </ul>
                    <br></br>
                    <Typography className="title" variant="subheading">What can be obtained from memory?</Typography>
                    <ul>
                        <li>All running processes a the time of memory snapshot</li>
                        <li>All loaded modules and DLL including injected malware</li>
                        <li>All running device drivers, including potential rootkits</li>
                        <li>All open files for each process, including path to file on disk</li>
                        <li>All open registry keys for each process</li>
                        <li>All open network sockets for each process, including IP address and port information</li>
                        <li>Decrypted versions of otherwise encrypted data</li>
                        <li>Contents of windows</li>
                        <li>Keystrokes</li>
                        <li>Email attachments, file transfers, and other "secondary" data</li>
                        <li>Cryptographic key material</li>
                        <li>Hard-drive encryption keys</li>
                        <li>WEP and WPA wireless keys</li>
                        <li>Usernames and PAsswords</li>
                    </ul>
                    <br></br>


                </Paper>
            </div>
        )
    }
}

export default WeekTwo;