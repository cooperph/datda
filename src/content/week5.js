import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class WeekFive extends React.Component {
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
                <Typography className="headline" variant='title'>Windows Memory Manipulation</Typography>
                <hr />
                <Typography className="title" variant="subheading">Recap (weeks 1-4)</Typography>
                <ul>
                    <li>Basics of malware analysis</li>
                    <li>Explored executable (PE) files and their properties</li>
                    <li>Stard at hex code and data</li>
                    <li>Learned about how to hunt for malicious traces using forensic tools</li>
                    <li>Peered into memory basics</li>
                    <li>Learnt various stages of attack</li>
                    <li>Reviewed how malware like to persist on the machine they once take over</li>
                    <li>Learned and explored exploit world and how we get infected in the first place</li>
                </ul>
                <br></br> 
                <Typography className="title" variant="subheading">RootKits and Stealth</Typography>
                <img src={require('./images/rootkitNumbers.png')} alt='rootkitNumbers' />
                <ul>
                    <li><u>RootKit</u>- Malware that actively conceals it's existance and actions from users and system processes</li>
                    <li>Approximately 10% of current malware use rootkits</li>
                    <li>Rootkits are most prevalent in 32 bit Windows</li>
                    <li>Handful of families so far for 64 bit</li>
                    <li>PRootkits are one of the BEST ways to learn about kernal security challenges</li>
                    <li>Challenges once malicious code enters kernal</li>
                    <ul>
                        <li>Harder for rootkits to enter 64 bit kernal</li>
                        <li>Rootkits can inflitrate 64 bit OS Kernal by</li>
                        <ul>
                            <li>Bypassing driver signing check (using testsigning mode)</li>
                            <li>Modifying the windwos boot path (MBR etc) - Secure boot prevents this</li>
                            <li>Kernal exploits in Windws kernel or 3rd party drivers</li>
                            <li>Stealing Valid Digisigs (Similar to Stuxnet)</li>
                        </ul>
                    </ul>
                    <li>Reviewed how malwre like to persist on the machine they once take over</li>
                    <li>Learned and explored exploit world and how we get infected in the first place</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Kernel Vs User</Typography>
                <img src={require('./images/kernelVUser.png')} alt='kernelVUser' />
                <ul>
                    <li>The User executables - EXE/DLL files</li>
                    <li>Most rootkits are in the .sys files on the Kernel side</li>
                    <li>Gives them full power to manilulate anything in the system</li>
                    <li>Appliations are restricted</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Kernel Memory</Typography>
                <ul>
                    <li>Is a flat memory model with no security seperation</li>
                    <li>All kernel drivers can access ANY part of memory</li>
                    <li>Many important structures that are prime targets for stealth - SSDT, IRP, IDT, etc</li>
                    <li>Wingbg commands: .process command, lm, !devobj, !drvobj, !devstack, !irp etc. Virtual to physical memory etc</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Threads</Typography>
                <img src={require('./images/singleThread.png')} alt='singleThread' />
                <img src={require('./images/multiThread.png')} alt='multiThread' />
                <ul>
                    <li>Thread is the smallest 'unit' of execution that can execute code</li>
                    <li>Great Video on this topic : <a href='https://www.youtube.com/watch?v=hsERPf9k54U'>YouTube Link</a></li>
                    <li>There are few important concepts of a thread</li>
                    <ul>
                        <li>Thread Context</li>
                        <li>Thread Stack</li>
                        <li>Thread Environment Block (TEB)</li>
                        <li>Thread Scheduling</li>
                        <li>Thread - Process relationship</li>
                    </ul>
                    <li>Thread Object defines a thread</li>
                    <ul>
                        <li>Kernel Objects are data structure definced by OS to describe various OS constructs, thread being on such construct</li>
                        <li>TEB, ThreatStack, Context, Priority, State etc are all defined within this struct</li>
                    </ul>
                    <li>Wingbg command to see thread object: KD> dt_KTHREAD</li>
                </ul>
                <img src={require('./images/hyperthreading.png')} alt='hyperthreading' />
                <ul>
                    <li>Two instruction pipeline and everything else remains the same.</li>
                    <li>Sped things ups, but still have some issues when you needed the same parts</li>
                </ul>
                <img src={require('./images/dualCore.png')} alt='dualCore' />
                <ul>
                    <li>In a single chip, can now package and duplicate all functionality</li>
                    <li>Processes MUCH faster</li>
                    <li>If single thread, it doesn't matter single vs dual core</li>
                    <li>Can have more packages with more cores and they all live happily</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Thread Deep Dive</Typography>
                <img src={require('./images/deepDive.png')} alt='deepDive' />
                <ul>
                    <li>Thread context stores all the regulated register values of the thread</li>
                    <li>During execution, reguister values are stored in CPU, else they are in memory</li>
                    <li>Windbg - KD> DT_Context</li>
                    <li>Each Thread has its own stack</li>
                    <li>User mode stack</li>
                    <ul>
                        <li>Used for thread's function calls and local variables</li>
                    </ul>
                    <li>Kernel Stack</li>
                    <ul>
                        <li>Used when control is transferred from user to kernel</li>
                        <li>Data is copied for security</li>
                    </ul>
                    <li>TEB: KD> DT_TEB</li>
                    <li>TEB contains threat specific information like Exception handling and TLS</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Process Memory</Typography>
                <img src={require('./images/processMemory.png')} alt='processMemory' />
                <ul>
                    <li>Tool: Process Hacker</li>
                    <li>Processes are implemented as objects</li>
                    <li>An executable process may contain one or more threads</li>
                    <li>Process includes an object table that has handles to other objects known to this process</li>
                    <li>A Process needs at least on thread to execute</li>
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Techniques and Detection</Typography>
                <img src={require('./images/technique.png')} alt='technique' />
                <img src={require('./images/detection.png')} alt='detection' />
                <Typography className="title" variant="subheading">Kernel Debugging and Context</Typography>
                <ul>
                    <li>Two machines, one is a debugger and another is a debugee</li>
                    <li>Talking to each other via vitrual serial port</li>
                    <li>Can break into the debugger using CTRL+Break or break button in Windbg. This will suspend the debugee and no more instuctions can execute</li>
                    <li>When in debugger VM you can try the following commands</li>
                    <ul>
                        <li>!process 0 0 -> Lists  all the running processes (Returns EPROCESS Object)</li>
                        <li>!process -1 0 -> Returns current process.</li>
                        <li>.process /i  {`<eprocess> -> Change the context to process described by <eprocess>`}</li>
                        <li>Lmu -> Lists all the user mode modules within a process</li>
                    </ul>
                    <li>How do you know whats the CONTEXT (kernel or user mode) , what process are you broken into.</li>
                    <li>Analysis Goals</li>
                    <ul>
                        <li>Who is modifying the kernel? Find the thread responsible!</li>
                        <li>How is it modifying it? Peet into assembly code</li>
                        <li>How can we detect the malicious code?</li>
                        <li>Can we Fix it?</li>
                    </ul>
                    <img src={require('./images/bob.png')} alt='bob' />
                </ul>
                <br></br>
                <Typography className="title" variant="subheading">Cekno Debugging</Typography>
                <ul>
                    <li>Connect kernel debugger / debugee</li>
                    <li>In debugee, run tuluka and find the index number of NtQuerySystemInformation</li>
                    <li>Switch to debugger and launch qindbg using the command described in class notes</li>
                    <li>In Windbg, Display SSDT table in the debugger using command</li>
                    <ul>
                        <li>Dd kiservicetable (it begins at index 0)</li>
                        <li>How will you find the memory location of NtQuerySystemInformation? Lets call this location X</li>
                    </ul>
                    <li>In the debugger, create break points for location X using command ( Ba w1 {`<X>`} )</li>
                    <li>Switch to debugee and extract executable file from Cekno.zip in the RDP (Debugee image)</li>
                    <li>Did we get a 'breakpoint hit'?</li>
                    <li>Yes?! - we find it with !thread / Kb</li>
                    <li>Look at the disassembly and thing about a detection logic</li>
                </ul>
            </Paper>
        )
    }
}

export default WeekFive;