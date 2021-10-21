import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";
import User from "./User";
import Question from "./Question";
import Comment from "./Comment";

@Entity()
export default class Answer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @Column()
  code!: string;

  @CreateDateColumn()
  created!: Date;

  // reference to the user
  @ManyToOne(() => User, (user) => user.question)
  user!: User;

  // reference to question
  @ManyToOne(() => Question, (question) => question.answer)
  question!: Question;

  // reference to comment
  @OneToMany(() => Comment, (comment) => comment.answer)
  comment!: Comment;

  // reference to user
  @ManyToMany(() => User)
  @JoinTable()
  vote!: User[];
}
