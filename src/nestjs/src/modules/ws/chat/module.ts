import { Module } from "@nestjs/common";

import { WSChatGateway } from "./gateway";
import { AuthModule } from "src/modules/auth/module";
import { DBModule } from "src/modules/database/database.module";
import { UserService } from "src/adapter/user/service";
import { ChatRoomService } from "src/adapter/chatRoom/service";
import { WSService } from "../ws.service";

@Module({
	imports: [AuthModule, DBModule],
	providers: [WSChatGateway, WSService, UserService, ChatRoomService],
})
export class WSChatModule {}
