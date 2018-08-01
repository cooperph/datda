import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class WeekFour extends React.Component {
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
            <div>
                <Paper>
                    <Typography className="headline" variant='title'>Vulnerabilities and Expoloits</Typography>
                    <hr />
                    <Typography className="title" variant="subheading">About Hacking</Typography>
                    <ul>
                        <li>Program control that was not intended</li>
                        <li>Manipulating software</li>
                        <ul>
                            <li>software vulerability</li>
                            <li>configuration vulnerability - weak password or something a user does to make the </li>
                        </ul>
                        <li>Hacking used to be for fun and people didn't care because it didn't cause a lot of issues</li>
                        <li>Hacking is very frounded upon, will land you in some real trouble. Be careful when learning</li>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">Hacking Bounty Programs</Typography>
                    <ul>
                        <li>Companies know that some of their stuff has vulnerabilites</li>
                        <li>Some companies have programs where if you find a vulerability, they will pay you for finding it</li>
                        <li>Not all companies do this</li>
                        <li>If you find a vulnerability check to see if they have a bounty program if not, keep your mouth shut. Their legal team might come knocking on your door with a lawsuit</li>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">How Attacks Work</Typography>
                    <ul>
                        <li>Attacks used to start from the Internet and try to attack the DMZ or border systems</li>
                        <li>Companies have a hard outer perimeter</li>
                        <li>Now attacks usually come from inside</li>
                        <li>It's a lot easier for a hacker to move around inside the network once they have compromised a user due to fishing and social Engineering</li>
                        <li>Not a lot of security once inside the network</li>
                        <li>Hack a website and then hack the browser of the user</li>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">WinDgb</Typography>
                    <ul>
                        <li>You have to know the vulerability exists to use this program</li>
                        <li>This allows you to freeze the program to allo you to inspect the state of program at a particular point of execution</li>
                        <li>Lab will be used to learn this program</li>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">Registers</Typography>
                    <ul>
                        <li>Spot where your cpu can store data, small amount of data to perform operations on</li>
                        <li>Some have specific purposes</li>
                        <li>EAX - return value from a function</li>
                        <li>EIP - instruction pointer</li>
                        <li>EBP/ ESP - set the start and end of the stack frame</li>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">Program Memory</Typography>
                    <ul>
                        <li>Memory has different regions, we care about the Stack and Heap for this class</li>
                        <li>!tep (stack) for gbd - entire stack frame</li>
                        <li>!peb (heap) for gbd - good for the thread heap</li>
                        <li>Going over these concepts more next week!</li>
                        <li>!address will tell you exactly where an address is located</li>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">Flaw Classes and Vulnerabilities</Typography>
                    <ul>
                        <li>Configuration - weak password</li>
                        <li>Logic - authorization issues</li>
                        <li>Storage - inadequate encryption</li>
                        <li>Input Validation - Memory Corruption or Injection</li>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">Memory corruption</Typography>
                    <ul>
                        <li>Accessing memory in an invalid way which results in an undefined behaviour</li>
                        <li>Reading or writing memory ( stack or heap )</li>
                        <li>Not expected by the original programmer</li>
                        <li>Common Categories</li>
                        <ul>
                            <li>Lifetime Control - exploit later</li>
                            <li>Uninitialized Memory</li>
                            <li>Array index calculations</li>
                            <li>Buffer length calculations - exploit today!</li>
                        </ul>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">Flaw Classes and Vulnerabilities</Typography>
                    <ul>
                        <li>Configuration - weak password</li>
                        <li>Logic - authorization issues</li>
                        <li>Storage - inadequate encryption</li>
                        <li>Input Validation - Memory Corruption or Injection</li>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">Vulnerabilities</Typography>
                    <ul>
                        <li>exploit - data you're providing the program that will cause a trigger</li>
                        <li>vulerability trigger - the software bu to obtain control of the program</li>
                        <li>Payload - action to be performed when control is obtained</li>
                        <li>The usual payload for a conference is bringing up the calculator (people go nuts for this)</li>
                        <li>Metasploit - allows you to take a bunch of different payloads and actions, easy to use!</li>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">How to get code to execute</Typography>
                    <ul>
                        <li>Crash Triage</li>
                        <li>Determine the return address offset</li>
                        <li>Position our shellcode</li>
                        <li>Find the address of our shellcode</li>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">Crash Triage</Typography>
                    <ul>
                        <li>What do we control?</li>
                        <ul>
                            <li>What Registers contain attacker-controlled data?</li>
                            <li>What Registers point to attacker-controlled data?</li>
                            <li>Is attacker controlled data on the Stack or the Heap?</li>
                            <li>Do we control critical data such as stack frames?</li>
                        </ul>
                        <li>Where are we in the execution of the program?</li>
                        <ul>
                            <li>Where is the vulnerability?</li>
                            <li>Was the crash caused by an exploit mitigation?</li>
                        </ul>
                    </ul>
                <br></br>
                <Typography className="title" variant="subheading">Determine the return address offset</Typography>
                    <ul>
                        <li>How many Bytes?</li>
                        <li>Figure out the offset to EIP overwrite</li>
                        <li>Lab helpers: 'msfPatternString' variable || !load byakugan</li>
                    </ul>
                <br></br>
                </Paper>
            </div>
        )
    }
}

export default WeekFour;