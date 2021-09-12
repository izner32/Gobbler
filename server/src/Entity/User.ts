import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	username: string;

	@Column({
		unique: true,
	})
	email: string;

	@Column({

	})
	passwordHash: string; 

	@Column({
		unique:true,
	})
	salt: string; 

	@Column({
	})
	isVerified: boolean;

	@Column({
	})
	verificationString: string;
}