import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
  <section class="hero">
    <div class="text">
      <h1>Hi, I'm <span>Valuroutu Santosh Kumar</span></h1>
   
     <p class="role">
        Web Developer • AI/ML Enthusiast • Angular Developer • Blockchain Developer
      </p>

      <p class="summary">
        I build secure, scalable, and user-friendly web applications
        with modern technologies like Angular, Solidity, and Blockchain.
      </p>
      <br>
      <div class="actions">
        <a routerLink="/projects">View Projects</a>
        <a routerLink="/contact" class="outline">Get In Touch</a>
        <a href="Valuroutu_Santosh_Kumar_Resume-1.pdf" download class="outline">
          Download Resume
        </a>
      </div>
    </div>

   <img src="im.jpeg" alt="Profile" />



  </section>
  `,
  styles: [`
    .hero {
      padding: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 { font-size: 48px; }
    span { color: #38bdf8; }
    p { margin: 15px 0; color: #9ca3af; }
    a {
      padding: 12px 20px;
      margin-right: 10px;
      background: #38bdf8;
      color: #020617;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
    }
    .outline {
      background: transparent;
      border: 1px solid #38bdf8;
      color: #38bdf8;
    }
    img {
      width: 240px;
      height: 240px;
      border-radius: 50%;
      border: 4px solid #38bdf8;
      object-fit: cover;
    }
  `]
})
export class HomeComponent {}






