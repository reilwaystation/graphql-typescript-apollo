import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  JoinTable,
  BaseEntity,
} from "typeorm";
import User from "./User";
import Answer from "./Answer";
import Tag from "./Tag";
import Category from "./Category";

@Entity()
export default class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @CreateDateColumn()
  created!: Date;

  // reference to the user
  @ManyToOne(() => User, (user) => user.question)
  user!: User;

  // reference to category/language
  @ManyToOne(() => Category, (category) => category.question)
  category!: Category;

  // reference to answer
  @OneToMany(() => Answer, (answer) => answer.user)
  answer!: Answer[];

  // reference to tags
  @ManyToMany(() => Tag)
  @JoinTable()
  tag!: Tag[];
}
