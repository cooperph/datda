import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class WeekThree extends React.Component {
    // <Typography className="title" variant="subheading">Locard's Exchange Principle</Typography>
    //      <ul>
    //         <li>When two objects come in contact with each other, there will be a transfer of material from one to another</li>
    //         <li>You cannot interact with a live system without having some effect on it.</li>
    //         <li>make sure you document your work!</li>
    //         <li>Once contaminated, it's always contaminated!</li>
    //         <li>Think about how we all leave DNA everywhere we go. (hair, dead skin, etc)</li>
    //     </ul>
    //     <br></br> 
    render() {
        return(
            <Paper>
                <Typography className="headline" variant='title'>Malware Defense</Typography>
                <hr />
                <Typography className="title" variant="subheading">The Malware Proces</Typography>
                <img src={require('./images/malwareProcess.png')} alt='IRProcess' />
                <ul>
                    <li>THe Malware cycle has 4 different stages</li>
                    <ul>
                        <li>First Contact</li>
                        <li>Local Execution</li>
                        <li>Establish Presence</li>
                        <li>Malicious Activity</li>
                    </ul>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">First Contact</Typography>
                <ul>
                    <li>First contact is how you are initially introduced to the malware</li>
                    <ul>
                        <li>Email or other unsolicited messages</li>
                        <li>Malvertising - malware disguised as a real advertisement, popular on download sites. Can you click the real download?</li>
                        <li>Poisoned Search Results - Adobe download is a prime target for this. Company will make it so their malware is the top searched result and when you download it, you get the malware as well</li>
                        <li>Visitng an untrusted Wifi or website that convinces user to run an executible</li>
                        <li>Physical media - plugging in a random USB that has auto run capabilities</li>
                    </ul>
               </ul>
               <br></br>
               <Typography className="title" variant="subheading">Local Execution</Typography>
                <ul>
                    <li>Social Engineering - have to update flash to see this video</li>
                    <li>Auto run examples with usb or other insertables</li>
                    <li>Expolitation</li>
               </ul>
               <br></br> 
               <Typography className="title" variant="subheading">Establish Presence</Typography>
                <ul>
                    <li>Download and install additional malware</li>
                    <li>Propagate another system - copy the file share, network service exploit</li>
                    <li>Persist on the system - modify existing services, install service</li>
                    <li>Self preservation - disrupt security software/ updates, etc </li>
                    <li>Blend in or hide</li>
                    <ul>
                        <li>Appear legitimate - Signed, change creation/ modification DateTime stamp</li>
                        <li>Hide - Bootkit/ rootkit</li>
                    </ul>
                    <li>Persist!</li>
                    <ul>
                        <li>System startup (Bootkit)</li>
                        <li>Windows startup (services, appINIT, Winlogon, Run keys, startup folders)</li>
                        <li>Application Startup</li>
                        <li>Basically, how to not get caught and to ensure that our processes occur each time we load up the infected machine</li>
                    </ul>
                    <li>Most of this stuff is or Windows, since most threats are for Windows</li>
               </ul>
               <br></br>
               <Typography className="title" variant="subheading">Malicious Activity</Typography>
                <ul>
                    <li>Bring the n00bs to the harvest and transmit the captured data - http, https, ftp, Tor</li>
                    <li>Capture sensitive data - keyloggers, man in the cloud, etc</li>
                    <li>Bot Services - bot network, remote access, DDOS, spending spam (i love you virus), open proxy</li>
                    <li>Enumerate (docs, passwords, email, proceses)</li>
                    <li>Parse passwords and CC data</li>
                    <li></li>
               </ul>
               <br></br>
               <Typography className="title" variant="subheading">Blocking Against Threats</Typography>
                <ul>
                    <li>Don't open up unsolicited email attachments or have a better spam filter</li>
                    <li>Security Software - double edged sword, users generally</li>
                    <li>Web reputation in firefox</li>
                    <li>Script blockers or Ad Block</li>
                    <li>Network Firewalls and Network Intrusion Prevention</li>
                    <li>Reputations - only allow from reputable sites, mess, networks</li>
                    <li>Host Firewall and Host IPS</li>
                    <li>Anti-malware</li>
                    <li>Educated users!</li>
               </ul>
               <br></br>
               <Typography className="title" variant="subheading">Popular Malware Defense Technologies</Typography>
               <img src={require('./images/popularTech.png')} alt='IRProcess' />
                <ul>
                    <li>Visual representation of the topics suggested above</li>
                    <li>Attribute all these are dependent on - admins not deploying all the products bought to use</li>
                    <li>User layers to make things harder for attackers to get to you</li>
                    <li>Much needed a system that will pull in all this information, more forensic view. Since some layers are better done by different companies that don't always talk to each other</li>
               </ul>
               <br></br> 
               <Typography className="title" variant="subheading">Anti-Malware Features</Typography>
               <img src={require('./images/popularTech.png')} alt='IRProcess' />
                <ul>
                    <li>Traditional File Scanning (OAS, ODS)</li>
                    <li>Registry and cookies</li>
                    <li>Cloud Scanning and Memory Scanning</li>
                    <li>Scripts</li>
                    <li>Heuristics</li>
                    <li>Decomposition</li>
                    <li>Config: Exclusions, Sensitivity, Reporting, etc</li>
                    <li>YARA - used for malware research, using pattern matching</li>
               </ul>
               <img src={require('./images/cookies.jpg')} alt='IRProcess' />
               <br></br>
               <Typography className="title" variant="subheading">Closing Thoughts</Typography>
               <ul>
                   <li>Run through the Labs again to get a better understanding of exactly what is going on, now that you've done it once</li>
                   <li>Backup your hard drives, don't be an idiot. Do it Now!</li>
                   <li></li>
                   <li></li>
                </ul>
            </Paper>
        )
    }
}

export default WeekThree;