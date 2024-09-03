import { Routes } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { PersoComponent } from './perso/perso.component';
export const routes: Routes = [
    {path: 'perso', component:PersoComponent},
    {path: 'skill', component:SkillComponent}
];
export class perso {
}