import { Pipe, PipeTransform } from '@angular/core';
import {PlayerModel} from "../models/player.model";

@Pipe({
  name: 'team',
  standalone: true
})
export class TeamPipe implements PipeTransform {

  transform(players: PlayerModel[], team: string): any {
    if (!players || !team) {
      return players;
    }
    return players.filter(p => p.team === team);
  }

}
