import { Component } from '@angular/core';
import { DefGameOptionI } from 'src/app/interfaces/game/game.interface';
import { GameService } from 'src/app/services/websocket/game/service';

@Component({
	selector: 'app-game-lobby',
	templateUrl: './lobby.component.html',
	styleUrls: ['./lobby.component.scss']
})
export class GameLobbyComponent {
	constructor(
		public gameService: GameService,
	) {}

	searchGame()
	{ this.gameService.searchGame(DefGameOptionI); }
}
