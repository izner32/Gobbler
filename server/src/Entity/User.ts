import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
} from 'typeorm';

@Entity()
export class Person extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	first_name: string;

	@Column()
	last_name: string;

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