import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";
import Question from "./Question";
import Answer from "./Answer";
import Comment from "./Comment";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, nullable: false })
  email!: string;

  @Column({ nullable: false })
  firstName!: string;

  @Column({ nullable: false })
  lastName!: string;

  @Column({ unique: true })
  userName!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ default: false, nullable: false })
  isActive!: boolean;

  @Column({ default: false, nullable: false })
  isAdmin!: boolean;

  @CreateDateColumn({ nullable: false })
  created!: Date;

  @OneToMany(() => Answer, (answer) => answer.user)
  answer!: Answer[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comment!: Comment[];

  @OneToMany(() => Question, (question) => question.user)
  question!: Question[];
}
