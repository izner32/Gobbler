import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
} from 'typeorm';

@Entity()
export class UserInfo extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	avatar: string;

    @Column()
	first_name: string;

	@Column()
	last_name: string;
	
}