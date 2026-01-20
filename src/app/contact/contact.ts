import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
  <section class="contact">

    <h2>Get In Touch</h2>
    <p class="subtitle">
      Feel free to reach out for collaboration, internships, or opportunities.
    </p>

    <div class="content">

      <!-- Contact Info -->
      <div class="info">
        <p><strong>Name:</strong> Valuroutu Santosh Kumar</p>
        <p><strong>Role:</strong> Web Developer | Blockchain Developer | AI/ML Enthusiast</p>
        <p><strong>Email(primary):</strong> n210633@rguktn.ac.in</p>
        <p><strong>Email2(secondary):</strong> santoshkumarvalurouthu@gmail.com</p>
        <p><strong>Mobile:</strong> +91 8121991041</p>
        <p><strong>Location:</strong> Vijayawada, India</p>
        <p><strong>Status:</strong> Open to internships & developer roles</p>

        <div class="links">
          <a href="https://github.com/Valuroutu/" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/santosh-kumar-valuroutu-94a696325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</a>
          <a href="mailto:n210633@rguktn.ac.in">Email Me</a>
        </div>
      </div>

      <!-- Contact Form -->
      <form class="form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button type="button">Send Message</button>
      </form>

    </div>

    <p class="note">
      I usually respond within 24 hours 🙂
    </p>

  </section>
  `,
  styles: [`
    .contact {
      padding: 80px;
    }

    h2 {
      color: #38bdf8;
      margin-bottom: 10px;
    }

    .subtitle {
      color: #9ca3af;
      margin-bottom: 40px;
    }

    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .info p {
      color: #e5e7eb;
      margin: 10px 0;
    }

    .links a {
      display: inline-block;
      margin-right: 15px;
      margin-top: 10px;
      color: #38bdf8;
      text-decoration: none;
      font-weight: 500;
    }

    .form {
      background: #111827;
      padding: 30px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    input, textarea {
      padding: 12px;
      border-radius: 6px;
      border: none;
      outline: none;
      background: #020617;
      color: #e5e7eb;
    }

    button {
      padding: 12px;
      background: #38bdf8;
      color: #020617;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.9;
    }

    .note {
      margin-top: 30px;
      color: #9ca3af;
    }

    @media (max-width: 768px) {
      .content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {}
