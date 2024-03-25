import {Component, Input} from '@angular/core';
import {PlayerModel} from "../../models/player.model";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardImage, NgOptimizedImage],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {

  @Input() player: PlayerModel | undefined;

}
