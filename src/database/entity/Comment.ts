import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";
import User from "./User";
import Answer from "./Answer";

@Entity()
export default class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @CreateDateColumn()
  created!: Date;

  // reference to the user
  @ManyToOne(() => User, (user) => user.comment)
  user!: User;

  // reference to question
  @ManyToOne(() => Answer, (answer) => answer.comment)
  answer!: Answer;
}
