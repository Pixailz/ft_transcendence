import { Module } from "@nestjs/common";

import { AuthModule } from "src/modules/auth/module";
import { DBModule } from "src/modules/database/database.module";
import { UserService } from "src/adapter/user/service";
import { ChatRoomService } from "src/adapter/chatRoom/service";
import { WSGateway } from "./gateway";
import { WSSocket } from "./socket.service";
import { WSChatChannelService } from "./chat/chat-channel.service";
import { WSChatDmService } from "./chat/chat-dm.service";
import { WSFriendService } from "./friend/friend.service";
import { WSService } from "./service";
import { Sanitize } from "../sanitize-object";
import { WSNotificationService } from "./notifications/notifications.service";
import { WSGameService } from "./game/game.service";

@Module({
	imports: [AuthModule, DBModule],
	providers: [
		Sanitize,
		UserService,
		ChatRoomService,
		WSSocket,
		WSGateway,
		WSService,
		WSChatDmService,
		WSChatChannelService,
		WSFriendService,
		WSNotificationService,
		WSGameService,
	],
})
export class WSModule {}
