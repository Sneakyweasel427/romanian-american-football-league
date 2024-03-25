import { Injectable } from '@angular/core';
import {PlayerStats} from "../models/player.model";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  getPlayers() {
    return [
      {
        name: 'Bugs Bunny',
        position: 'qb',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: 'Daffy Duck',
        position: 'rb',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: '',
        position: 'fb',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: '',
        position: 'wr',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: '',
        position: 'wr',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: '',
        position: 'te',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: '',
        position: 'c',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: '',
        position: 'lt',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: '',
        position: 'lg',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: '',
        position: 'rt',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: '',
        position: 'rg',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'offense'
      },
      {
        name: '',
        position: 'de',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
      {
        name: '',
        position: 'lt',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
      {
        name: '',
        position: 'rt',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
      {
        name: '',
        position: 'mlb',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
      {
        name: '',
        position: 'lb',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
      {
        name: '',
        position: 'lb',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
      {
        name: '',
        position: 'cb',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
      {
        name: '',
        position: 'cb',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
      {
        name: '',
        position: 'ss',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
      {
        name: '',
        position: 'fs',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
      {
        name: '',
        position: 'de',
        stats: {},
        height: '',
        weight: '',
        bio: '',
        team: 'defense'
      },
    ]
  }
}
