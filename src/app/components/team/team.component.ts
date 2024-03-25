import { Component } from '@angular/core';
import {PlayersGridComponent} from "../players-grid/players-grid.component";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [PlayersGridComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
