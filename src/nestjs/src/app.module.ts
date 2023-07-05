import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";

import { api42OAuthModule } from './modules/api42OAuth/api42OAuth.module';
import { DbModule } from './modules/database/database.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		api42OAuthModule,
		DbModule
	],
	controllers: [
	],
	providers: [],
})
export class AppModule {}
