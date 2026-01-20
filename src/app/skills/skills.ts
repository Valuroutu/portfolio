import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="grid">
      <h2>Skills</h2>
      <div class="item" *ngFor="let s of skills">{{ s }}</div>
    </section>

    <section class="grid certs">
      <h2>Certifications</h2>
      <div class="item" *ngFor="let c of certifications">
        {{ c }}
      </div>
    </section>
  `,
  styles: [`
    .grid {
      padding: 60px 80px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px,1fr));
      gap: 20px;
    }

    h2 {
      grid-column: 1 / -1;
      color: #38bdf8;
      margin-bottom: 10px;
    }

    .item {
      background: #111827;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
      font-weight: 500;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .item:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(56,189,248,0.3);
    }

    .certs .item {
      border: 1px solid #38bdf8;
      background: #020617;
    }
  `]
})
export class SkillsComponent {
  skills = [
    'HTML', 'CSS', 'JavaScript', 'Angular',
    'Node.js', 'Blockchain', 'Solidity',
    'Foundry', 'Smart Contracts', 'Python'
  ];

  certifications = [
    'NPTEL – Cloud Computing(72%)',
    'NPTEL – AI: Search Methods for Problem Solving(77%)',
    'Cyfrin – Blockchain Basics',
  ];
}
