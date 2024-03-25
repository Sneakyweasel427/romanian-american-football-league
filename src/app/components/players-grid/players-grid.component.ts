import {Component, inject, OnInit} from '@angular/core';
import {PlayerModel} from "../../models/player.model";
import {PlayerCardComponent} from "../player-card/player-card.component";
import {Router} from "@angular/router";
import {PlayersService} from "../../services/players.service";
import {TeamPipe} from "../../pipes/team.pipe";

@Component({
  selector: 'app-players-grid',
  standalone: true,
  imports: [
    PlayerCardComponent,
    TeamPipe
  ],
  templateUrl: './players-grid.component.html',
  styleUrl: './players-grid.component.css'
})
export class PlayersGridComponent implements OnInit {

  private router = inject(Router);
  private playersService = inject(PlayersService);
  players: PlayerModel[] = [];

  ngOnInit() {
    this.players = this.playersService.getPlayers();

  }

  goToPlayerPage(player: PlayerModel) {
    this.router.navigate(['player-info', player.name]);
  }
}
