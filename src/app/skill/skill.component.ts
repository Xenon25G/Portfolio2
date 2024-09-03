import { Component } from '@angular/core';
import { extend } from 'jquery';
import { PersoComponent } from '../perso/perso.component';


@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class  SkillComponent   {
  showAutreComponent = false;
  toggleAutreComponent() {
    this.showAutreComponent = !this.showAutreComponent;
  }
}
