import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
    CreateDateColumn,
} from 'typeorm';

@Entity()
export class Gobbles extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
        type: "simple-array",
    })
	Gobbles: string[];

    @CreateDateColumn()
    created_at: Date; 
	
}