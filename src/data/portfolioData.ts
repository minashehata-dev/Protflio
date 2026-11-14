import { Project, Experience, StatItem } from '../types/portfolio';

export const personalInfo = {
  name: "Mina Shehata Bernaba",
  avatar: "/assets/mina-shehata-bernaba.jpg",
  title: "Android, Web & Embedded Systems Developer • 3+ Years Experience",
  tagline: "Bridging the physical and digital worlds through high-performance Web, Mobile, and Embedded IoT systems.",
  bio: "Experienced developer with a distinctive multidisciplinary edge across Web Platforms, Cross-Platform Mobile Applications, and Embedded Hardware/Firmware. Dedicated to building reliable, secure, and commercially viable systems that scale from microcontrollers to cloud infrastructures.",
  location: "Matay, El Minya, Egypt",
  timezone: "GMT+2",
  availableForHire: true,
  status: "Available for high-impact projects & consulting",
  email: "menashehata1230@gmail.com",
  phone: "+20 127 014 4885",
  whatsapp: "https://wa.me/201270144885",
  resumeUrl: "#",
};

export const stats: StatItem[] = [
  { label: "Core Disciplines", value: "3", suffix: "Fields", description: "Specialized Domains" },
  { label: "Firmware & App Deployments", value: "99.9%", suffix: "Reliability", description: "Fault-tolerant architectures" },
  { label: "Client Satisfaction", value: "100%", suffix: "Verified", description: "On-time & robust delivery" },
];

export const corePillars = [
  {
    title: "Web Application Development",
    description: "Architecting responsive, high-speed web apps, enterprise dashboards, and secure RESTful/GraphQL APIs using modern frontend and backend frameworks.",
    tech: ["React", "TypeScript", "Node.js", "Firebase", "REST APIs", "Docker", "Tailwind CSS"],
  },
  {
    title: "Mobile Application Development",
    description: "Developing cross-platform iOS and Android mobile solutions with seamless native device integration, offline data synchronization, and intuitive UX.",
    tech: ["Flutter", "Dart", "Firebase", "Android SDK", "SQLite", "Push Notifications"],
  },
  {
    title: "Embedded Systems & IoT",
    description: "Writing deterministic C/C++ firmware, bare-metal implementations for microcontrollers, sensor interfacing, and hardware connectivity.",
    tech: ["C / C++", "ESP32 / ESP8266", "Arduino", "Sensors & Actuators", "UART / SPI / I2C", "PWM & Robotics"],
  },
];

export const marqueeTech = [
  "Flutter", "Dart", "Firebase", "React", "TypeScript", "Node.js",
  "C / C++", "ESP32", "Arduino", "Tailwind CSS", "Docker", "Git",
  "RESTful APIs", "Embedded Systems", "IoT"
];

export const featuredProjects: Project[] = [
  {
    id: "codex-academy",
    title: "Codex Academy - Educational & Fintech Mobile App",
    tagline: "Cross-Platform Flutter & Digital Wallet Application",
    description: "Full-featured mobile application built with Flutter. Integrates digital wallet payment gateways (Vodafone Cash & InstaPay), interactive video courses, gamified student ranking with real-time XP leaderboards, and an AI learning assistant.",
    tags: ["Flutter", "Dart", "Firebase", "InstaPay", "Vodafone Cash", "Gamification", "REST APIs"],
    category: "Mobile",
    featured: true,
    liveUrl: "https://example.com",
    image: "/assets/projects/codex-academy-home.jpg",
    screenshots: [
      "/assets/projects/codex-academy-home.jpg",
      "/assets/projects/codex-academy-courses.jpg",
      "/assets/projects/codex-academy-wallet.jpg",
      "/assets/projects/codex-academy-leaderboard.jpg",
    ],
    metrics: "Vodafone Cash & InstaPay Integrated",
  },
  {
    id: "obstacle-avoidance-robot",
    title: "Autonomous Obstacle-Avoidance Smart Vehicle",
    tagline: "Real-Time Microcontroller & Ultrasonic Sensor Control",
    description: "Autonomous wheeled robotic vehicle built with dual H-bridge motor drivers, HC-SR04 ultrasonic distance measurement, and deterministic real-time collision avoidance algorithms implemented in C/C++.",
    tags: ["Embedded C++", "Microcontroller", "HC-SR04 Ultrasonic", "L298N Motor Driver", "PWM Control", "Robotics"],
    category: "Embedded",
    featured: true,
    liveUrl: "https://example.com",
    image: "/assets/projects/embedded-robot-car.jpg",
    metrics: "Real-Time Ultrasonic Navigation",
  },
  {
    id: "old-glory-inventory",
    title: "Old Glory Restaurant - Supply & Inventory Web Platform",
    tagline: "Commercial Web Platform for Suppliers & Order Cataloging",
    description: "Production web application developed for Old Glory Restaurant (Columbia, TN). Features approved commercial supplier management (Walmart, R.D, etc.), custom product cataloging, item quantity controls, and automated supply order lists.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Inventory Management", "Order Tracking", "REST APIs"],
    category: "Web",
    featured: true,
    liveUrl: "https://example.com",
    image: "/assets/projects/old-glory-suppliers.png",
    screenshots: [
      "/assets/projects/old-glory-suppliers.png",
      "/assets/projects/old-glory-products.png",
    ],
    metrics: "Production Restaurant System",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Lead Full-Stack & Embedded Systems Developer",
    company: "Smart Systems & IoT Solutions",
    period: "2024 — Present",
    location: "Matay, El Minya, Egypt",
    description: [
      "Designed and deployed end-to-end connected IoT solutions integrating custom microcontroller firmware with cloud web dashboards.",
      "Developed high-reliability cross-platform mobile apps for hardware provisioning and real-time device control over Wi-Fi and cloud.",
      "Maintained zero-downtime microservices and RESTful API endpoints handling streaming sensor payloads."
    ],
    techStack: ["C++", "ESP32", "React", "Flutter", "Node.js", "Firebase"],
  },
  {
    id: "exp-2",
    role: "Web & Mobile Application Developer",
    company: "Digital Technology Labs",
    period: "2023 — 2024",
    location: "Matay, El Minya, Egypt",
    description: [
      "Built responsive, accessible web portals for enterprise clients using React, TypeScript, and modern CSS architectures.",
      "Developed mobile applications with smooth 60fps animations, robust state management, and offline-first capabilities.",
      "Ensured thorough code reviews, unit testing, and continuous integration workflows."
    ],
    techStack: ["TypeScript", "React", "Tailwind CSS", "Flutter", "REST APIs", "Firebase"],
  },
  {
    id: "exp-3",
    role: "Embedded Systems & Firmware Developer",
    company: "Industrial Automation Systems",
    period: "2022 — 2023",
    location: "Egypt",
    description: [
      "Programmed microcontrollers in C/C++ for sensor acquisition and motor control.",
      "Implemented hardware communication protocols including UART, I2C, SPI, and PWM.",
      "Performed hardware debugging with oscilloscopes, logic analyzers, and in-circuit testing."
    ],
    techStack: ["C / C++", "ESP32", "Arduino", "Microcontrollers", "Hardware Interfaces", "Sensors"],
  },
];
