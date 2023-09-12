import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

export enum NotificationType {
	UNDEFINED,
	// FRIEND
	FRIEND_REQ_SENT,
	FRIEND_REQ_RECEIVED,
	FRIEND_REQ_ACCEPTED,
	FRIEND_REQ_DENIED_FROM,
	FRIEND_REQ_DENIED_TO,

	// TODO: GAME INVITE
	GAME_REQ,
	GAME_REQ_DACCEPT,
	GAME_REQ_DENIED,

	// TODO: PRIVATE CHANNEL INVITE
	CHANNEL_REQUEST,
	CHANNEL_REQ_ACCEPT,
	CHANNEL_REQ_DENIED,
}


@Entity()
export class NotificationEntity {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({type: "integer", nullable: true})
	public userId: number;
	//
	@Column({ type: "varchar", default: "" })
	public data: string;

	//
	@Column({ type: "integer", default: NotificationType.UNDEFINED })
	public type: NotificationType;

	@Column({ type: "boolean", default: false })
	public isSeen: boolean;

	@Column({ type: "boolean", default: false })
	public isDeleted: boolean;

	@CreateDateColumn({ type: "timestamp" })
	public createdAt!: Date;
}
