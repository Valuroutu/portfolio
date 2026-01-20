import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  template: `
  <section class="projects">

    <h2>Projects</h2>

    <!-- Project Navigation -->
    <div class="project-nav">
      <a *ngFor="let p of projects" [href]="'#' + p.id">
        {{ p.title }}
      </a>
    </div>

    <!-- Project Details -->
    <div class="project-detail" *ngFor="let p of projects" [id]="p.id">
      <h3>{{ p.title }}</h3>

      <p class="desc">{{ p.description }}</p>

      <ul>
        <li *ngFor="let point of p.points">{{ point }}</li>
      </ul>

      <p class="tech">
        <strong>Tech Stack:</strong> {{ p.tech }}
      </p>
    </div>

  </section>
  `,
  styles: [`
    .projects {
      padding: 80px;
    }

    h2 {
      color: #38bdf8;
      margin-bottom: 20px;
    }

    /* Project name list */
    .project-nav {
      margin-bottom: 40px;
      padding: 20px;
      background: #020617;
      border-radius: 10px;
    }

    .project-nav a {
      display: block;
      color: #38bdf8;
      text-decoration: none;
      margin-bottom: 10px;
      font-weight: 500;
    }

    .project-nav a:hover {
      text-decoration: underline;
    }

    /* Project details */
    .project-detail {
      background: #111827;
      padding: 30px;
      border-radius: 12px;
      margin-bottom: 40px;
    }

    .project-detail h3 {
      color: #e5e7eb;
      margin-bottom: 10px;
    }

    .desc {
      color: #9ca3af;
      margin-bottom: 15px;
      line-height: 1.6;
    }

    ul {
      margin-left: 20px;
      margin-bottom: 15px;
    }

    li {
      color: #cbd5f5;
      margin-bottom: 8px;
      line-height: 1.6;
    }

    .tech {
      color: #9ca3af;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .projects {
        padding: 40px 20px;
      }
    }
  `]
})
export class ProjectsComponent {

  projects = [

    {
      id: 'endorsement',
      title: 'Endorsement DApp',
      description:
        'A decentralized application designed to securely manage professional endorsements using blockchain technology.',
      points: [
        'Developed immutable smart contracts to store endorsements on blockchain.',
        'Implemented role-based access control for endorsement verification.',
        'Enabled public verification to ensure trust and transparency.',
        'Designed a clean and user-friendly interface.'
      ],
      tech: 'Solidity, Foundry, React, Ethereum'
    },

    {
      id: 'voting',
      title: 'Voting DApp',
      description:
        'A blockchain-based voting system aimed at preventing election fraud and ensuring transparent vote counting.',
      points: [
        'Designed election lifecycle controlled by election commissioner.',
        'Allowed voting only during active election period.',
        'Automated vote counting to avoid manual manipulation.',
        'Displayed transparent results after election completion.'
      ],
      tech: 'Solidity, Foundry, Ethereum'
    },

    {
      id: 'firchain',
      title: 'FIRChain DApp',
      description:
        'A decentralized FIR filing system that improves transparency and accountability in law enforcement.',
      points: [
        'Implemented admin-only onboarding of police officers.',
        'Enabled officers to file immutable FIR records.',
        'Prevented alteration or deletion of FIR data.',
        'Allowed public access to FIRs for accountability.'
      ],
      tech: 'Solidity, Foundry, Angular, Ethers.js'
    },{
  id: 'angular-portfolio',
  title: 'Portfolio Website using Angular',
  description:
    'A modern, responsive personal portfolio website built using Angular to showcase projects, skills, and contact information with a clean dark-themed UI.',
  points: [
    'Developed a single-page application using Angular standalone components and routing.',
    'Implemented a responsive hero section, projects showcase, and contact page.',
    'Used reusable components and clean folder structure for scalability.',
    'Integrated smooth navigation and professional dark-themed UI design.',
    'Optimized performance and ensured mobile-friendly responsiveness.'
  ],
  tech: 'Angular,HTML, CSS'
}

  ];
  
}
