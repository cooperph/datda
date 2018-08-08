import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class WeekSix extends React.Component {
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
        return (
            <Paper>
                <Typography className="headline" variant='title'>Network Security</Typography>
                <hr />
                <Typography className="title" variant="subheading">Why Do We Need Network Security?</Typography>
                <ul>
                    <li>Helping host-based protections</li>
                    <ul>
                        <li>Keep dangerous hosts/ data out / Create a safe space</li>
                        <li>Prevent exfiltration of critical data</li>
                        <li>Protect hosts missing internal protection (legacy, mobile, visitors, BYOD, IoT)</li>
                        <li>Hiding network traffic is different from hiding on the host</li>
                    </ul>
                    <li>Threats come in from the network</li>
                    <ul>
                        <li>DDoS</li>
                        <li>Atacks from the network ( Stack overflow, Morris Worm)</li>
                    </ul>
                    <li>Threats out on the network</li>
                    <ul>
                        <li>Worms</li>
                        <li>Botnets</li>
                        <li>Theft of network Resources</li>
                        <li>Threat to critical infastructure, espionage</li>
                    </ul>
                    <li>Other Vectors: CD, USB</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Network-Based Protection Strategies</Typography>
                <ul>
                    <li>Positive policy</li>
                    <li>Firewalls / Security Zones</li>
                    <li>Defense in Depth</li>
                    <li>Intrusion Detection</li>
                    <li>Honeynets / Intrusion Deception</li>
                    <li>Quarantine</li>
                    <li>Reputation ( also host-based )</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Positive Policy - Whitelisting</Typography>
                <ul>
                    <li>Definition of what you expect/ allow to happen</li>
                    <li>Other things are suspicious and not permitted</li>
                    <li>Why is this a fundamental concept?</li>
                    <ul>
                        <li>Defender advantage, allows use of internal conventions and choices, attacker has to guess ( which address are valid, where are the servers, critical data?)</li>
                        <li>Limits the attack surface (makes other kinds of protection more effective)</li>
                        <li>Provides a hook for other trust mechanisms: identity, trust chaining</li>
                        <li>Policy domain versus threat domain (finite vs infinite enumaeration)</li>
                        <li>However, Policy may detect a threat, but it doesn't name the threat!</li>
                    </ul>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Firewalls and Security Zones</Typography>
                <ul>
                    <li>Most common implementation of policy is to define zones in the network with policy between the zones</li>
                    <li>Firewalls are devices that sit between the zones and filter traffic for policy</li>
                    <ul>
                        <li>Over time, more functions have been added to firewalls ( Routing, NAT, IPS )</li>
                        <li>Firewalls are big business, almost an industry of their own</li>
                    </ul>
                    <li>Commonly used zones: Intrenet, Intranet, Testing Labs, Extranet, Corporate, Data Center, DMZ, User Stations (DHSC Pools)</li>
                    <li>Firewalls are best at describing policy from IP to IP address.</li>
                    <ul>
                        <li>Application + IP to IP (GMAIL from User Stations to Internet)</li>
                        <li>User + IP to IP (Finance Worker from user stations to financial data center)</li>
                    </ul>
                </ul>
                <img src={require('./images/zones.png')} alt='zones' />
                <br></br>
                <Typography className="title" variant="subheading">Other Firewall-Like Devices</Typography>
                <ul>
                    <li>Web Gateway</li>
                    <ul>
                        <li>Proxies web connections to apply policy (HTTP proxy/ transparent proxy)</li>
                        <li>On premise or in the cloud</li>
                        <li>URL reputation</li>
                        <li>Typically provides inspection of we content (Javasctipt attacks, java code). General ant-malware analysis also makes sense ( file reputation, anti-virus scanning)</li>
                        <li>Able to leverage the interactive nature of web browsing to interact with the user (e.g., progress bars as a file is downloading to the proxy, configurable error “landing pages”).</li>
                    </ul>
                    <li>Email Gateway</li>
                    <ul>
                        <li>Proxies SMTP connections.  Typically, the customer sets the MX record to point at the gateway’s IP address and configures the mail server IP into the gateway</li>
                        <li>On premise or in the cloud</li>
                        <li>Original mission was anti-spam (typically > 99% accuracy, but there is still a lot left)</li>
                        <li>File scanning for malware has become equally important</li>
                        <li>Trending towards Data Loss Prevention (DLP)—scanning of files against dictionaries to determine if they contain secrets.</li>
                    </ul>
                </ul>
                <img src={require('./images/network.png')} alt='network' />
                <br></br>
                <Typography className="title" variant="subheading">Other Firewall-Like Devices</Typography>
                <ul>
                    <li>Intrusion detection (IDS /IPS)</li>
                    <ul>
                        <li>Use signatures/ anomaly detectin to detect attacks</li>
                        <li>Extra info to use: OS type, Protocol fields, known exploit tools, packet techniques</li>
                    </ul>
                    <li>Advantages</li>
                    <ul>
                        <li>Catch known attacks quickly and efficiently</li>
                        <li>Good inromation on attacks</li>
                        <li>Virtual patching</li>
                    </ul>
                    <li>Disadvantages</li>
                    <ul>
                        <li>Zero day attacks (arms race phenomenon)</li>
                        <li>False positives</li>
                    </ul>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Honeynets / Intrusion Detection</Typography>
                <ul>
                    <li>idea: catch more flies with honey</li>
                    <li>Attackers don't know the structure of the network under attack</li>
                    <li>We can divise a phone network to waste their time or deceive them</li>
                    <li>Use unassigned internal addresses</li>
                    <li>Applu sucker algorithms to slow down the attacker</li>
                    <ul>
                        <li>wait a long time, then ack 1 byte, then repeat</li>
                    </ul>
                    <li>Create phony content for the attacker to download or look at</li>
                    <li>Problem</li>
                    <ul>
                        <li>Requires a lot of configuration per site, less common than firewalls, etc.</li>
                        <li>Some vendors provide solutions</li>
                    </ul>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Quarantine</Typography>
                <ul>
                    <li>Concept: place hosts that misbehave into a quarantine area where they can’t “infect” anyone else</li>
                    <li>Commonly depolyed on network entry</li>
                    <ul>
                        <li>801.11x switch fabrics with Network Admission Control products (not very common)</li>
                        <li>Airport wireless logins (very common)</li>
                        <li>Software Defined Network (SDN) - new concept, getting bigger fast!</li>
                    </ul>
                    <li>Firewalls often implement a “Blacklisting” mechanism, sort of like a quarantine</li>
                    <ul>
                        <li>Behavior indicates the machine is infected or user doing something wrong (policy violations, IPS signatures, reputation)</li>
                        <li>Typically, black list the remote host that brought about the infection</li>
                        <li>A limited quarantine works better for local hosts when possible, because users don’t like to be blacklisted (remember, the user probably didn’t realize they were doing anything wrong)</li>
                    </ul>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Reputation</Typography>
                <ul>
                    <li>Big Data Solution</li>
                    <li>Collect a list of bad and good things, server the list out from the cloud</li>
                    <ul>
                        <li>IP addresses that were associated with malware or botnets</li>
                        <li>IP addresses of spammers</li>
                        <li>URLs that reference pages with scripting attacks, drive-by-downloads, etc</li>
                        <li>URL classification and categorization</li>
                        <li>Files that come from known program releases</li>
                        <li>Files that come from known viruses, or tend to be included in viruses</li>
                    </ul>
                    <li>MacAfree GTI is a prominent example</li>
                    <li>Issues:</li>
                    <ul>
                        <li>Multi-function hosts</li>
                        <li>Stale data</li>
                        <li>Zero day susceptibility</li>
                    </ul>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Network Security Technologies and Products</Typography>
                <img src={require('./images/networkTech.png')} alt='networkTech' />
                <ul>
                    <li>IDS = Passive Capture + Deep Stateful Inspection + Intrusion Detection</li>
                    <li>IPS = IDS + Blocking Traffic</li>
                    <li>NGIPS = IPS + Packet Filtering + Crypto Inspection + Static Analysis</li>
                    <li>Firewall = Packet Filtering + Deep Stateful Inspection + Policy</li>
                    <li>NGFW = Firewall + IPS + Crypto Inspecton + App ID</li>
                    <li>Web Gateway = Proxy + Intrusion Detection + Static ANalysis + Crypto Inspection + Policy</li>
                    <li>Email Gate = Proxy + Intrusion Detection</li>
                    <li>Data Loss Prevention (Data at Rest) = Vulnerability Scanning + Intrusion Detection + Dictionary Lookups</li>
                </ul>
                <br></br>
            </Paper>
        )
    }
}

export default WeekSix;