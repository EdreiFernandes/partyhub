import { Component } from '@angular/core';
import { Title } from '../../components/title/title';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-settings',
  imports: [Title, MatCardModule, MatIconModule],
  template: `
    <app-title title="Configurações"></app-title>

    <div class="settings-container">
      <mat-card class="settings-card">
        <div class="card-header">
          <mat-icon class="card-icon">settings</mat-icon>
          <h2>Configurações do PartyHub</h2>
        </div>
        
        <div class="card-content">
          <p>Esta página está em desenvolvimento. Em breve você poderá:</p>
          <ul>
            <li>Personalizar temas</li>
            <li>Configurar preferências de jogos</li>
            <li>Gerenciar preferências de som</li>
            <li>E muito mais!</li>
          </ul>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    .settings-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .settings-card {
      background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%);
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(102, 126, 234, 0.2);
      overflow: hidden;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 2rem 2rem 1rem 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .card-icon {
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
    }

    .card-header h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .card-content {
      padding: 2rem;
    }

    .card-content p {
      font-size: 1.1rem;
      color: #333;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .card-content ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .card-content li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 0;
      font-size: 1rem;
      color: #555;
      border-bottom: 1px solid rgba(102, 126, 234, 0.1);
    }

    .card-content li:last-child {
      border-bottom: none;
    }

    .card-content li::before {
      content: '✓';
      color: #667eea;
      font-weight: bold;
      font-size: 1.2rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .settings-container {
        padding: 1rem;
      }
      
      .card-header {
        padding: 1.5rem 1.5rem 1rem 1.5rem;
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
      }
      
      .card-header h2 {
        font-size: 1.3rem;
      }
      
      .card-content {
        padding: 1.5rem;
      }
      
      .card-content p {
        font-size: 1rem;
      }
      
      .card-content li {
        font-size: 0.9rem;
      }
    }
  `]
})
export class Settings {
  
}
