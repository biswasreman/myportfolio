import { useEffect, useState } from "react";

export default function Home() {
  const [matrixChars, setMatrixChars] = useState<Array<{id: number, char: string, left: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    const characters = '01αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';
    let charId = 0;

    const createMatrixChar = () => {
      const newChar = {
        id: charId++,
        char: characters[Math.floor(Math.random() * characters.length)],
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 10 + 10
      };
      
      setMatrixChars(prev => [...prev.slice(-50), newChar]);
      
      setTimeout(() => {
        setMatrixChars(prev => prev.filter(char => char.id !== newChar.id));
      }, 20000);
    };

    const interval = setInterval(createMatrixChar, 200);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono overflow-x-hidden">
      {/* Matrix Rain Background */}
      <div className="matrix-bg">
        {matrixChars.map(char => (
          <div
            key={char.id}
            className="matrix-char"
            style={{
              left: `${char.left}vw`,
              animationDelay: `${char.delay}s`,
              animationDuration: `${char.duration}s`
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-sm border-b border-green-400 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold glow-text hover-glow cursor-pointer">
              <span className="text-red-500">[</span>REMAN<span className="text-red-500">@</span>BISWAS<span className="text-red-500">]</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="hover-glow terminal-prompt">about</button>
              <button onClick={() => scrollToSection('skills')} className="hover-glow terminal-prompt">skills</button>
              <button onClick={() => scrollToSection('services')} className="hover-glow terminal-prompt">services</button>
              <button onClick={() => scrollToSection('contact')} className="hover-glow terminal-prompt">contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="terminal-window p-8 mb-8">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">reman@cybersec:~$</span>
              </div>
            </div>
            <div className="p-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text animate-glow-pulse">
                <span className="text-red-500">{'>'}</span> REMAN BISWAS
              </h1>
              <div className="text-xl md:text-2xl mb-6 typewriter terminal-cursor">
                Cybersecurity Enthusiast & Blue Team Apprentice
              </div>
              <div className="text-green-300 mb-8 text-lg">
                <span className="terminal-prompt"></span>whoami: Digital forensics specialist, Linux hardening expert, privacy advocate
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 border border-green-400 rounded glow-border hover-glow">
                  Blue Team Operations
                </span>
                <span className="px-4 py-2 border border-red-500 rounded hover-red">
                  Digital Forensics
                </span>
                <span className="px-4 py-2 border border-green-400 rounded glow-border hover-glow">
                  Linux Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">reman@cybersec:~$ cat about.txt</span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 glow-text">
                <span className="text-red-500">{'$'}</span> cat about.txt
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Passionate <span className="text-green-400 glow-text">Cybersecurity Enthusiast</span> and 
                    <span className="text-green-400 glow-text"> Blue Team Apprentice</span> with deep expertise in 
                    Linux systems, digital forensics, and system hardening.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Specialized in <span className="text-red-500">anonymized computing</span>, with strong focus on 
                    privacy-first methodologies and ethical hacking principles. Committed to securing digital 
                    infrastructure through proactive defense strategies.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Interested in AI-driven security solutions and maintaining a 
                    <span className="text-green-400 glow-text"> privacy-first mindset</span> in all operations.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="border border-green-400 rounded p-4 hover-glow">
                    <h3 className="text-green-400 font-semibold mb-2">Core Expertise</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li className="terminal-prompt">Digital Forensics</li>
                      <li className="terminal-prompt">System Hardening</li>
                      <li className="terminal-prompt">Intrusion Detection</li>
                      <li className="terminal-prompt">Log Analysis</li>
                    </ul>
                  </div>
                  <div className="border border-red-500 rounded p-4 hover-red">
                    <h3 className="text-red-500 font-semibold mb-2">Security Focus</h3>
                    <p className="text-gray-300">Blue Team Operations, Endpoint Defense, Linux Server Hardening</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OS Experience */}
      <section className="py-20 px-4 terminal-black">
        <div className="container mx-auto max-w-6xl">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">reman@cybersec:~$ ls /etc/os-list/</span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 glow-text">
                <span className="text-red-500">{'$'}</span> ls /etc/os-list/
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="skill-item border border-gray-600 rounded p-6 text-center">
                  <div className="text-orange-400 text-2xl mb-3">🐧</div>
                  <h3 className="font-semibold text-green-400 mb-2">Ubuntu</h3>
                  <p className="text-gray-400 text-sm">Primary development environment</p>
                </div>
                <div className="skill-item border border-gray-600 rounded p-6 text-center">
                  <div className="text-red-500 text-2xl mb-3">🔴</div>
                  <h3 className="font-semibold text-green-400 mb-2">Kali Linux</h3>
                  <p className="text-gray-400 text-sm">Penetration testing platform</p>
                </div>
                <div className="skill-item border border-gray-600 rounded p-6 text-center">
                  <div className="text-green-400 text-2xl mb-3">🦜</div>
                  <h3 className="font-semibold text-green-400 mb-2">Parrot OS</h3>
                  <p className="text-gray-400 text-sm">Security operations</p>
                </div>
                <div className="skill-item border border-gray-600 rounded p-6 text-center">
                  <div className="text-blue-400 text-2xl mb-3">🪟</div>
                  <h3 className="font-semibold text-green-400 mb-2">Windows</h3>
                  <p className="text-gray-400 text-sm">Enterprise environments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">reman@cybersec:~$ grep -i certs ./Reman_Certs.txt</span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 glow-text">
                <span className="text-red-500">{'$'}</span> grep -i certs ./Reman_Certs.txt
              </h2>
              <div className="space-y-6">
                <div className="border border-green-400 rounded p-6 glow-border hover-glow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-2">CCNA Certification</h3>
                      <p className="text-gray-300">Indian School of Ethical Hacking (ISOEH) / Indian Cyber Security Solutions (ICSS)</p>
                    </div>
                    <div className="text-green-400 text-2xl">🛡️</div>
                  </div>
                </div>
                <div className="border border-red-500 rounded p-6 hover-red">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-red-500 mb-2">CHFI Certification</h3>
                      <p className="text-gray-300">Computer Hacking Forensic Investigator - Dataspace Academy</p>
                    </div>
                    <div className="text-red-500 text-2xl">🔍</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section id="skills" className="py-20 px-4 terminal-black">
        <div className="container mx-auto max-w-6xl">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">reman@cybersec:~$ tree /tools</span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 glow-text">
                <span className="text-red-500">{'$'}</span> tree /tools
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="skill-item border border-gray-600 rounded p-4">
                  <h4 className="text-green-400 font-semibold mb-3">Network Security</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="terminal-prompt">Nmap</li>
                    <li className="terminal-prompt">Aircrack-ng</li>
                    <li className="terminal-prompt">Fail2Ban</li>
                  </ul>
                </div>
                <div className="skill-item border border-gray-600 rounded p-4">
                  <h4 className="text-green-400 font-semibold mb-3">Password Security</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="terminal-prompt">Hydra</li>
                    <li className="terminal-prompt">Hashcat</li>
                    <li className="terminal-prompt">JohnTheRipper</li>
                  </ul>
                </div>
                <div className="skill-item border border-gray-600 rounded p-4">
                  <h4 className="text-green-400 font-semibold mb-3">Digital Forensics</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="terminal-prompt">Autopsy</li>
                    <li className="terminal-prompt">Foremost</li>
                    <li className="terminal-prompt">TestDisk</li>
                    <li className="terminal-prompt">PhotoRec</li>
                    <li className="terminal-prompt">FTK Imager</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Focus */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">reman@cybersec:~$ sudo apt install blueteam</span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 glow-text">
                <span className="text-red-500">{'$'}</span> sudo apt install blueteam
              </h2>
              <div className="terminal-gray rounded p-6 border border-green-400 glow-border">
                <p className="text-green-400 mb-4 font-semibold">Blue Team Operations Specialist</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-red-500 font-semibold mb-3">Core Competencies:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="terminal-prompt">Intrusion Detection Systems</li>
                      <li className="terminal-prompt">Security Log Analysis</li>
                      <li className="terminal-prompt">Forensic Recovery Operations</li>
                      <li className="terminal-prompt">Endpoint Defense Strategies</li>
                      <li className="terminal-prompt">Linux Server Hardening</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-red-500 font-semibold mb-3">Privacy & Anonymity:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="terminal-prompt">Tails OS Operations</li>
                      <li className="terminal-prompt">VPN Infrastructure</li>
                      <li className="terminal-prompt">Tor Network Expertise</li>
                      <li className="terminal-prompt">E2E Encrypted Services</li>
                      <li className="terminal-prompt">FOSS Security Solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passion */}
      <section className="py-20 px-4 terminal-black">
        <div className="container mx-auto max-w-6xl">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">reman@cybersec:~$ ps aux | grep reman</span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 glow-text">
                <span className="text-red-500">{'$'}</span> ps aux | grep reman
              </h2>
              <div className="terminal-gray rounded p-6 border border-green-400">
                <div className="text-sm text-gray-500 mb-4">USER    PID  %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND</div>
                <div className="space-y-2 text-green-400 font-mono">
                  <div>reman   1337  95.0  0.1  28492  8196 pts/0    S+   09:00   0:42 ./linux_troubleshooting --expert</div>
                  <div>reman   1338  89.2  0.2  32768 12288 pts/1    R+   09:01   0:38 ./anonymity_research --tor --vpn</div>
                  <div>reman   1339  76.4  0.1  16384  4096 pts/2    S+   09:02   0:31 ./foss_advocacy --open-source</div>
                  <div>reman   1340  68.1  0.3  40960 16384 pts/3    R+   09:03   0:28 ./privacy_consulting --tails</div>
                </div>
                <div className="mt-6 text-gray-300">
                  <p className="mb-2"><span className="text-green-400">Active processes:</span> Deep passion for Linux troubleshooting, anonymity research, FOSS advocacy, and privacy-focused computing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">reman@cybersec:~$ chmod +x services.sh</span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 glow-text">
                <span className="text-red-500">{'$'}</span> chmod +x services.sh
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="service-item border border-gray-600 rounded p-6">
                  <h3 className="text-red-500 font-semibold mb-3 flex items-center">
                    <span className="mr-2">🔍</span> File Recovery & Forensics
                  </h3>
                  <p className="text-gray-300">Advanced data recovery and digital forensic analysis for incident response and evidence collection.</p>
                </div>
                <div className="service-item border border-gray-600 rounded p-6">
                  <h3 className="text-red-500 font-semibold mb-3 flex items-center">
                    <span className="mr-2">🔒</span> Linux Hardening
                  </h3>
                  <p className="text-gray-300">Comprehensive security hardening for Linux servers and workstations following industry best practices.</p>
                </div>
                <div className="service-item border border-gray-600 rounded p-6">
                  <h3 className="text-red-500 font-semibold mb-3 flex items-center">
                    <span className="mr-2">🎯</span> Penetration Testing (Basic)
                  </h3>
                  <p className="text-gray-300">Basic penetration testing services to identify vulnerabilities in network infrastructure.</p>
                </div>
                <div className="service-item border border-gray-600 rounded p-6">
                  <h3 className="text-red-500 font-semibold mb-3 flex items-center">
                    <span className="mr-2">🕵️</span> Anonymity Advisory
                  </h3>
                  <p className="text-gray-300">Privacy consulting and anonymity solutions for secure communications and operations.</p>
                </div>
                <div className="service-item border border-gray-600 rounded p-6">
                  <h3 className="text-red-500 font-semibold mb-3 flex items-center">
                    <span className="mr-2">🛡️</span> Threat Mitigation
                  </h3>
                  <p className="text-gray-300">Implementation of fail2ban and other threat mitigation strategies for enhanced security.</p>
                </div>
                <div className="service-item border border-gray-600 rounded p-6">
                  <h3 className="text-red-500 font-semibold mb-3 flex items-center">
                    <span className="mr-2">📊</span> Audit Trails & Log Review
                  </h3>
                  <p className="text-gray-300">Comprehensive log analysis and audit trail review for security incident investigation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 terminal-black">
        <div className="container mx-auto max-w-4xl">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">reman@cybersec:~$ cat contact.txt</span>
              </div>
            </div>
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-8 glow-text">
                <span className="text-red-500">{'$'}</span> cat contact.txt
              </h2>
              <div className="space-y-6">
                <div className="border border-green-400 rounded p-6 glow-border">
                  <h3 className="text-green-400 font-semibold mb-4">Direct Contact</h3>
                  <p className="text-2xl text-gray-300 mb-2">
                    <span className="text-red-500">✉️</span> 
                    <a href="mailto:reman@duck.com" className="hover-glow ml-2">reman@duck.com</a>
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <a href="https://instagram.com/your_instagram" className="social-link border border-gray-600 rounded p-6 block hover:text-green-400">
                    <div className="text-3xl mb-2">📷</div>
                    <h4 className="font-semibold">Instagram</h4>
                    <p className="text-gray-400 text-sm">@your_instagram</p>
                  </a>
                  <a href="https://facebook.com/your_facebook" className="social-link border border-gray-600 rounded p-6 block hover:text-green-400">
                    <div className="text-3xl mb-2">👤</div>
                    <h4 className="font-semibold">Facebook</h4>
                    <p className="text-gray-400 text-sm">your_facebook</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-green-400">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            <span className="text-red-500">{'$'}</span> echo "© Reman Biswas 2025" | tee /dev/stdout
          </p>
          <p className="text-green-400 mt-2 glow-text">© Reman Biswas 2025</p>
        </div>
      </footer>
    </div>
  );
}
