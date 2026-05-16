import { createSection, createTopic } from "./roadmapHelpers"

export const cybersecurityRoadmap = {
  slug: "cybersecurity",
  title: "Cybersecurity Engineer",
  description:
    "A defensive and offensive security roadmap covering networks, Linux, cryptography, web security, OWASP, tooling, reverse engineering, malware analysis, and cloud security.",
  icon: "Shield",
  estimatedTime: "7-11 months",
  salaryRange: "$90k - $180k",
  difficulty: "Advanced",
  sections: [
    createSection("Security Foundations", "Beginner", "Learn the systems, protocols, and cryptographic concepts that security analysis depends on.", "8-10 weeks", [
      createTopic({
        title: "Networking",
        difficulty: "Beginner",
        estimatedTime: "3 weeks",
        description: "Study TCP/IP, DNS, HTTP, TLS, routing, ports, packet capture, firewalls, and how attackers and defenders reason about network traffic.",
        docsUrl: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
        projects: ["Packet analyzer", "Network map lab", "DNS troubleshooting notebook"],
        interviewQuestions: ["What is the TCP handshake?", "How does DNS work?", "What traffic would you inspect during an incident?"],
        prerequisites: ["Basic command line"],
        tags: ["networking", "tcp", "dns", "packets"]
      }),
      createTopic({
        title: "Linux",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Learn permissions, processes, services, logs, SSH, package management, hardening basics, and forensic inspection on Linux systems.",
        docsUrl: "https://www.kernel.org/doc/html/latest/",
        projects: ["Linux hardening checklist", "Log analysis lab", "Suspicious process investigation"],
        interviewQuestions: ["How do Linux permissions work?", "Where are auth logs stored?", "How would you inspect running processes?"],
        prerequisites: ["Networking"],
        tags: ["linux", "hardening", "logs"]
      }),
      createTopic({
        title: "Cryptography",
        difficulty: "Beginner",
        estimatedTime: "3 weeks",
        description: "Understand hashing, symmetric encryption, public-key crypto, TLS, signatures, password storage, key management, and common crypto mistakes.",
        docsUrl: "https://cryptography.io/en/latest/",
        projects: ["Password manager", "Hash verification utility", "TLS certificate inspection lab"],
        interviewQuestions: ["Hashing vs encryption?", "How does public key cryptography work?", "Why use salts for passwords?"],
        prerequisites: ["Networking"],
        tags: ["crypto", "tls", "hashing"]
      })
    ]),
    createSection("Web and Offensive Tooling", "Intermediate", "Practice web app testing, vulnerability discovery, and security tooling in safe lab environments.", "10-12 weeks", [
      createTopic({
        title: "Web Security",
        difficulty: "Intermediate",
        estimatedTime: "3 weeks",
        description: "Learn authentication flaws, authorization bugs, XSS, SQL injection, CSRF, SSRF, insecure deserialization, headers, and secure coding practices.",
        docsUrl: "https://portswigger.net/web-security",
        projects: ["Vulnerability scanner", "Secure login review", "Header security analyzer"],
        interviewQuestions: ["Stored vs reflected XSS?", "How do you prevent SQL injection?", "What is SSRF?"],
        prerequisites: ["Networking", "Linux"],
        tags: ["web-security", "xss", "sqli"]
      }),
      createTopic({
        title: "OWASP",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Study OWASP Top 10 risks, testing methodology, secure design principles, cheat sheets, and how to communicate risk clearly.",
        docsUrl: "https://owasp.org/www-project-top-ten/",
        projects: ["OWASP Top 10 lab report", "Threat model for a web app", "Secure code checklist"],
        interviewQuestions: ["What is broken access control?", "How do you prioritize vulnerabilities?", "What is defense in depth?"],
        prerequisites: ["Web Security"],
        tags: ["owasp", "appsec", "risk"]
      }),
      createTopic({
        title: "Burp Suite",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Use proxy interception, repeater, intruder basics, decoder, comparer, extensions, and manual testing workflows for web applications.",
        docsUrl: "https://portswigger.net/burp/documentation",
        projects: ["Burp testing workflow", "Auth bypass lab notes", "API request tampering demo"],
        interviewQuestions: ["How does an intercepting proxy help?", "What is Repeater used for?", "How do you test authorization?"],
        prerequisites: ["Web Security"],
        tags: ["burp", "proxy", "pentest"]
      }),
      createTopic({
        title: "Nmap",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Scan hosts, services, versions, scripts, UDP/TCP ports, timing, output formats, and safe network reconnaissance workflows.",
        docsUrl: "https://nmap.org/book/man.html",
        projects: ["Internal network scan report", "Service inventory script", "Scan result parser"],
        interviewQuestions: ["SYN scan vs connect scan?", "How do you detect service versions?", "What are safe scanning practices?"],
        prerequisites: ["Networking"],
        tags: ["nmap", "recon", "ports"]
      }),
      createTopic({
        title: "Metasploit",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Understand modules, payloads, exploit validation, lab-only exploitation, post-exploitation concepts, and responsible usage boundaries.",
        docsUrl: "https://docs.rapid7.com/metasploit/",
        projects: ["Vulnerable VM exploitation lab", "Exploit validation report", "Payload behavior notes"],
        interviewQuestions: ["Exploit vs payload?", "How do you validate impact safely?", "What belongs in a pentest report?"],
        prerequisites: ["Nmap", "Linux"],
        tags: ["metasploit", "exploitation", "labs"]
      })
    ]),
    createSection("Advanced Security", "Advanced", "Analyze binaries and malware, secure cloud platforms, and build incident-ready engineering habits.", "10-14 weeks", [
      createTopic({
        title: "Reverse Engineering",
        difficulty: "Advanced",
        estimatedTime: "4 weeks",
        description: "Learn assembly basics, binary formats, debuggers, disassemblers, strings, control flow, patching, and safe analysis methodology.",
        docsUrl: "https://ghidra-sre.org/",
        projects: ["Crackme writeup", "Binary strings analyzer", "Control flow notes"],
        interviewQuestions: ["Static vs dynamic analysis?", "What are symbols?", "How do you inspect binary behavior?"],
        prerequisites: ["Linux", "Programming basics"],
        tags: ["reverse-engineering", "ghidra", "assembly"]
      }),
      createTopic({
        title: "Malware Analysis",
        difficulty: "Advanced",
        estimatedTime: "4 weeks",
        description: "Safely inspect suspicious files, indicators, persistence, network behavior, sandboxes, YARA rules, and malware reporting workflows.",
        docsUrl: "https://yara.readthedocs.io/en/stable/",
        projects: ["Malware triage report", "YARA rule set", "Sandbox network analysis"],
        interviewQuestions: ["How do you safely analyze malware?", "What are IOCs?", "What is persistence?"],
        prerequisites: ["Reverse Engineering", "Networking"],
        tags: ["malware", "yara", "forensics"]
      }),
      createTopic({
        title: "Cloud Security",
        difficulty: "Advanced",
        estimatedTime: "4 weeks",
        description: "Secure IAM, networks, storage, secrets, logging, posture management, container platforms, and incident detection in cloud environments.",
        docsUrl: "https://docs.aws.amazon.com/security/",
        projects: ["Cloud misconfiguration audit", "IAM least privilege lab", "CloudTrail detection rules"],
        interviewQuestions: ["What is least privilege?", "How do you detect exposed storage?", "How do cloud logs support incidents?"],
        prerequisites: ["Networking", "Linux", "OWASP"],
        tags: ["cloud-security", "iam", "aws"]
      })
    ])
  ]
}
