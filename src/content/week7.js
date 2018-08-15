import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class WeekSeven extends React.Component {
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
                <Typography className="headline" variant='title'>Web Security</Typography>
                <hr />
                <Typography className="title" variant="subheading">Computer Crime Under Oregon Law</Typography>
                <ul>
                    <li>Oregon's computer crime statute identifies three main categories of computer crimes:</li>
                    <ul>
                        <li>Knowingly accessing or using a computer or network (or attempting to do so) for the purpose of fraud; to obtain money, property, or services; or to commit theft of proprietary information.</li>
                        <li>Knowingly and without authorization altering, destroying, or damaging any computer, network, software, data, etc. (or attempting to do so).</li>
                        <li>Knowingly and without authorization using or accessing a computer or network (or attempting to do so).</li>
                    </ul>
                    <li>While the first two offenses may be charged as a Class C felony, the third offense is charged as a Class A misdemeanor. Conviction on either charge may result in a prison sentence, as much as one year for a Class A misdemeanor and as much as five years for a Class C felony.</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Evolution of the Web and Malware Delivery</Typography>
                <img src={require('./images/evo-1.png')} alt='evo1' />
                <img src={require('./images/evo-2.png')} alt='evo2' />
                <br></br>
                <Typography className="title" variant="subheading">Web Browser 1.0 and 2.0</Typography>
                <img src={require('./images/browser-1.png')} alt='browser1' />
                <img src={require('./images/browser-2.png')} alt='broswer2' />
                <br></br>
                <Typography className="title" variant="subheading">Injection Points</Typography>
                <img src={require('./images/injection.png')} alt='injection' />
                <br></br>
                <Typography className="title" variant="subheading">User Level Attacks</Typography>
                <ul>
                    <li>Social Engineering - the psychological manipulation of people into performing actions or divulging confidential information.</li>
                    <li>Users are the Weak Link!</li>
                    <ul>
                        <li>Hardened/ current browser/ OS will not help</li>
                        <li>Exploit common user traits: impatient, lazy, elf-proclaimed omniscience, clickaholic</li>
                    </ul>
                    <li>Direct the user to malicious content through their own actions: executables, browser exploits, malicious forms</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Phishing</Typography>
                <ul>
                    <li>Not just restrcted to banking/ financial anymore</li>
                    <li>URLs not always elivered via email</li>
                    <li>Spear phishing, social media, and snowshoe spam continues to keep it alive</li>
                    <li>Valid SSL cert does not always protect the user</li>
                    <li>Sites are very short-lived</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">SEO Poisoning</Typography>
                <ul>
                    <li>Identify trends using available tools such as Google Trends</li>
                    <li>Use search results to lure the web searching victim</li>
                    <ul>
                        <li>Celebrities</li>
                        <li>Pop Culture</li>
                        <li>World Events</li>
                        <li>Educational/ Professional</li>
                        <li>Fake AV/ AM</li>
                    </ul>
                    <li>Game the search engine's relevance rules</li>
                    <ul>
                        <li>Related content</li>
                        <li>Massive inbound linking</li>
                        <li>Relevant inbound linking</li>
                    </ul>
                    <li>Site redirects to malicious content</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Fake Updates and Fake AV</Typography>
                <ul>
                    <li>Preys on user's good intentions</li>
                    <li>Often mimics OS-level UI components</li>
                    <li>sometimes mimics well-known security brands</li>
                    <li>May deliver malware</li>
                    <li>May deliver absolutely nothing for the low cost of $$$, but only if you ACT NOW!</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Malvertising</Typography>
                <ul>
                    <li>Malicious actor uses advertising networks as delivery mechanism for malware</li>
                    <li>Does not requre any we site or hosting provider compromise</li>
                    <li>Very dangerous, as most end users implicitly reust content on high-prfile, popula, and know sites</li>
                </ul>
                <img src={require('./images/malvert1.png')} alt='malvert1' />
                <img src={require('./images/malvert2.png')} alt='malvert2' />
                <br></br>
                <Typography className="title" variant="subheading">Waterhole Attacks</Typography>
                <ul>
                    <li>With closed OSes and application signing, developers have become a prime target</li>
                    <li>An easy way to target developers is to havk a resource known to be used by a community of developers</li>
                </ul>
                <img src={require('./images/waterhole.png')} alt='waterhole' />
                <br></br>
                <Typography className="title" variant="subheading">Common Defenses</Typography>
                <ul>
                    <li>URL/ Domain Reputatin Systems</li>
                    <ul>
                        <li>Real-time protection in browser or network device</li>
                        <li>Search result link annotation</li>
                    </ul>
                    <li>Site Certification Services</li>
                    <li>Client GAteway AV/AM</li>
                    <li>Safe URL shorteners</li>
                    <li>Content provider education</li>
                    <ul>
                        <li>Banks love to train their customes to be phishing victims</li>
                        <li>Brand monitoring services</li>  
                    </ul>
                    <li>End user education</li>
                    <ul>
                        <li>Not stupid users (lol)</li>
                    </ul>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Web Broswer Attack Surface</Typography>
                <img src={require('./images/attackSurface.png')} alt='attackSurface' />
                <br></br>
            </Paper>
        )
    }
}

export default WeekSeven;