import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
  <section class="section">
    <h2>About Me</h2>

    <p>
      I am <strong>Valuroutu Santosh Kumar</strong>, a passionate Web Developer
      and Blockchain enthusiast currently pursuing
      <strong>B.Tech in Computer Science</strong> at
      <strong>RGUKT, Nuzvid</strong>.
    </p>

    <p>
      I have hands-on experience in building decentralized applications (DApps),
      secure smart contracts, and modern web interfaces using Angular.
      I enjoy solving real-world problems using technology.
    </p>

    <h3>Education</h3>
    <ul>
      <li>B.Tech (CSE) – RGUKT, Nuzvid</li>
      <li>Class XII – 99%(Pre University Course)</li>
      <li>Class X – 100%</li>
    </ul>

    <h3>Experience</h3>
    <ul>
      <li><strong>Web Developer Intern</strong> – Sure Trust</li>
      <li>Volunteer – NSS </li>
      <li>Volunteer – Helping Hands Organisation</li>
    </ul>

    <h3>Career Goal</h3>
   <p>
  To become a skilled Full-Stack and Blockchain Developer, and an AI/ML enthusiast,
  contributing to impactful, scalable, and secure applications.
</p>

  </section>
  `,
  styles: [`
    .section { padding: 80px; }
    h2 { color: #38bdf8; margin-bottom: 20px; }
    h3 { margin-top: 25px; color: #cbd5f5; }
    p, li { color: #9ca3af; line-height: 1.7; }
    ul { margin-left: 20px; }
  `]
})
export class AboutComponent {}
