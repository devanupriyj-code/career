import { createSection, createTopic } from "./roadmapHelpers"

export const devopsRoadmap = {
  slug: "devops",
  title: "DevOps Engineer",
  description:
    "A comprehensive guide to bridging development and operations through automation, cloud infrastructure, container orchestration, CI/CD, and monitoring.",
  icon: "Terminal",
  estimatedTime: "6-10 months",
  salaryRange: "$95k - $180k",
  difficulty: "Advanced",
  sections: [
    createSection("Beginner", "Beginner", "Master the foundational OS, networking, and version control systems.", "8-12 weeks", [
      createTopic({
        title: "Linux",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Learn the Linux operating system architecture, kernel, shell, processes, and standard commands.",
        tags: ["linux", "os", "shell"]
      }),
      createTopic({
        title: "File Permissions",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Understand users, groups, chmod, chown, and secure file access management.",
        tags: ["linux", "security", "permissions"]
      }),
      createTopic({
        title: "Bash Scripting",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Automate tasks using bash variables, loops, conditionals, and shell scripting.",
        tags: ["bash", "scripting", "automation"]
      }),
      createTopic({
        title: "Cron Jobs",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Schedule automated background tasks and jobs on Linux systems.",
        tags: ["cron", "automation", "scheduling"]
      }),
      createTopic({
        title: "Networking Basics",
        difficulty: "Beginner",
        estimatedTime: "2 weeks",
        description: "Understand IP addresses, subnets, routing, TCP/UDP, ports, and firewalls.",
        tags: ["networking", "tcp-ip", "infrastructure"]
      }),
      createTopic({
        title: "DNS",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Learn how the Domain Name System works, records (A, CNAME, TXT), and resolution.",
        tags: ["dns", "networking", "web"]
      }),
      createTopic({
        title: "HTTP/HTTPS",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Understand HTTP methods, status codes, headers, TLS/SSL certificates, and secure transport.",
        tags: ["http", "security", "ssl"]
      }),
      createTopic({
        title: "SSH",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Configure Secure Shell, generate keys, and securely connect to remote servers.",
        tags: ["ssh", "security", "linux"]
      }),
      createTopic({
        title: "Git",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Master version control, branching, merging, rebasing, and repository management.",
        tags: ["git", "vcs", "collaboration"]
      }),
      createTopic({
        title: "GitHub",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Use GitHub for code hosting, pull requests, code reviews, and collaboration.",
        tags: ["github", "vcs", "remote"]
      }),
      createTopic({
        title: "CI/CD Basics",
        difficulty: "Beginner",
        estimatedTime: "1 week",
        description: "Understand the concepts of Continuous Integration and Continuous Deployment.",
        tags: ["ci-cd", "automation", "concepts"]
      })
    ]),
    createSection("Intermediate", "Intermediate", "Implement containerization, infrastructure as code, and automated pipelines.", "10-14 weeks", [
      createTopic({
        title: "Docker",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Build and run isolated containers, manage images, volumes, and networks.",
        tags: ["docker", "containers", "virtualization"]
      }),
      createTopic({
        title: "Docker Compose",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Define and run multi-container Docker applications using docker-compose.yml.",
        tags: ["docker", "orchestration", "local"]
      }),
      createTopic({
        title: "Jenkins",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Set up Jenkins servers, create pipelines, and automate build/test/deploy processes.",
        tags: ["jenkins", "ci-cd", "automation"]
      }),
      createTopic({
        title: "GitHub Actions",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Automate workflows natively in GitHub for CI/CD, testing, and release management.",
        tags: ["github-actions", "ci-cd", "pipelines"]
      }),
      createTopic({
        title: "Terraform",
        difficulty: "Intermediate",
        estimatedTime: "3 weeks",
        description: "Provision cloud infrastructure using HashiCorp's declarative configuration language.",
        tags: ["terraform", "iac", "infrastructure"]
      }),
      createTopic({
        title: "Ansible",
        difficulty: "Intermediate",
        estimatedTime: "2 weeks",
        description: "Automate configuration management, software provisioning, and app deployment.",
        tags: ["ansible", "configuration", "automation"]
      }),
      createTopic({
        title: "Nginx",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Configure web servers, virtual hosts, SSL, and serve static content.",
        tags: ["nginx", "web-server", "linux"]
      }),
      createTopic({
        title: "Reverse Proxy",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Set up reverse proxies and load balancers to distribute traffic across backend servers.",
        tags: ["proxy", "networking", "load-balancing"]
      }),
      createTopic({
        title: "Monitoring Basics",
        difficulty: "Intermediate",
        estimatedTime: "1 week",
        description: "Understand key metrics, logging, and why system monitoring is crucial.",
        tags: ["monitoring", "observability", "metrics"]
      })
    ]),
    createSection("Advanced", "Advanced", "Master enterprise scale, Kubernetes, cloud providers, and deep observability.", "12-16 weeks", [
      createTopic({
        title: "Kubernetes",
        difficulty: "Advanced",
        estimatedTime: "4 weeks",
        description: "Orchestrate containerized apps, manage pods, deployments, services, and ingresses.",
        tags: ["kubernetes", "orchestration", "cloud-native"]
      }),
      createTopic({
        title: "Helm",
        difficulty: "Advanced",
        estimatedTime: "1 week",
        description: "Use the Kubernetes package manager to define, install, and upgrade K8s applications.",
        tags: ["helm", "kubernetes", "packaging"]
      }),
      createTopic({
        title: "AWS",
        difficulty: "Advanced",
        estimatedTime: "3 weeks",
        description: "Master Amazon Web Services: EC2, S3, RDS, VPC, IAM, and EKS.",
        tags: ["aws", "cloud", "infrastructure"]
      }),
      createTopic({
        title: "Azure",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Learn Microsoft's cloud platform, VMs, App Services, and AKS.",
        tags: ["azure", "cloud", "infrastructure"]
      }),
      createTopic({
        title: "GCP",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Learn Google Cloud Platform, Compute Engine, Cloud Storage, and GKE.",
        tags: ["gcp", "cloud", "infrastructure"]
      }),
      createTopic({
        title: "Prometheus",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Implement time-series monitoring, instrumentation, and alerting rules.",
        tags: ["prometheus", "monitoring", "metrics"]
      }),
      createTopic({
        title: "Grafana",
        difficulty: "Advanced",
        estimatedTime: "1 week",
        description: "Create rich, visual dashboards for monitoring infrastructure and applications.",
        tags: ["grafana", "visualization", "dashboards"]
      }),
      createTopic({
        title: "ELK Stack",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Centralize logging using Elasticsearch, Logstash, and Kibana for log analysis.",
        tags: ["elk", "logging", "search"]
      }),
      createTopic({
        title: "Infrastructure Scaling",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Design auto-scaling groups, handle massive traffic spikes, and optimize resources.",
        tags: ["scaling", "architecture", "performance"]
      }),
      createTopic({
        title: "High Availability",
        difficulty: "Advanced",
        estimatedTime: "1 week",
        description: "Design multi-region active-active or active-passive setups with failover.",
        tags: ["ha", "reliability", "architecture"]
      }),
      createTopic({
        title: "Security Hardening",
        difficulty: "Advanced",
        estimatedTime: "2 weeks",
        description: "Implement zero-trust architecture, network policies, IAM best practices, and vulnerability scanning.",
        tags: ["security", "devsecops", "compliance"]
      })
    ])
  ]
}
