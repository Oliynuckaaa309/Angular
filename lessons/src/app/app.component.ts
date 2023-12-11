
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { MainBlockComponent } from './main/main-block/main-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,  FormsModule, ReactiveFormsModule, HeaderComponent, MainBlockComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'lessons';
}
