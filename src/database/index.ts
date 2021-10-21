import User from "./entity/User";
import Answer from "./entity/Answer";
import Question from "./entity/Question";
import Category from "./entity/Category";
import Comment from "./entity/Comment";
import Tag from "./entity/Tag";
import { createConnection } from "typeorm";

export default () =>
  createConnection({
    type: "postgres",
    host: "ec2-44-199-86-61.compute-1.amazonaws.com",
    port: 5432,
    username: "txmgcqycwixmne",
    password:
      "75b87a72bb9d2ed7c90ed69f570cf05644d48afe42a1edfb65300e711ec78c2a",
    database: "d39fgmrklmd4lq",
    logging: true,
    synchronize: false,
    schema: "public",
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    entities: [User, Answer, Question, Category, Comment, Tag],
  })
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));
