import { UserInputError } from "apollo-server-express";
import bcrypt from "bcrypt";
import User from "../../database/entity/User";
import { formatValidationError, filterQueryArgs } from "../../utils";
import { userCreateValidator, userUpdateValidator } from "./validator";

export default {
  Query: {
    users: async (
      parent: any,
      args: { payload: { [key: string]: string } },
      ctx: any,
      info: any
    ) => {
      // FILTER ARGS
      const filter = filterQueryArgs(args);

      // FILTER DATABASE USER ENTITY
      const [dataset, count] = await User.findAndCount(filter);
      return { count, dataset };
    },

    user: async (
      parent: any,
      args: { [key: string]: string },
      ctx: any,
      info: any
    ) => {
      const user = await User.findOne(filterQueryArgs(args));

      if (Boolean(user)) {
        return user;
      } else {
        return null;
      }
    },
  },

  Mutation: {
    updateUser: async (
      parent: any,
      args: { payload: { [key: string]: string } },
      ctx: any,
      info: any
    ) => {
      // FIELD VALIDATION
      const { error, value } = await userUpdateValidator.validate(
        args.payload,
        { abortEarly: false }
      );

      // CHECK EXISTING EMAIL
      const email = await User.findOne({
        where: { email: value.email },
      });

      // CHECK EXISTING USERNAME
      const username = await User.findOne({
        where: { userName: value.userName },
      });

      // CHECK IF EVERYTHING IS VALID
      if (Boolean(error)) {
        throw new UserInputError(
          "check the fields for error",
          formatValidationError(error?.details ? error?.details : [])
        );
      }

      // RETURN ERROR IF EMAIL EXIST
      else if (Boolean(email)) {
        throw new UserInputError("check the fields for error", {
          email: '"Email" already exist',
        });
      }

      // RETURN ERROR IF USERNAME EXIST
      else if (Boolean(username)) {
        throw new UserInputError("check the fields for error", {
          username: '"User Name" already exist',
        });
      }

      // DO STUFF IF EVERYTHING IS OKAY
      else {
        const hashed = await bcrypt.hash(value.password, 10);
        const user = User.create({
          email: value.email,
          firstName: value.firstName,
          lastName: value.lastName,
          userName: value.userName,
          password: hashed,
        });

        await user.save();

        return user;
      }
    },
    createUser: async (
      parent: any,
      args: { payload: { [key: string]: string } },
      ctx: any,
      info: any
    ) => {
      // FIELD VALIDATION
      const { error, value } = await userCreateValidator.validate(
        args.payload,
        { abortEarly: false }
      );

      // CHECK EXISTING EMAIL
      const email = await User.findOne({
        where: { email: value.email },
      });

      // CHECK EXISTING USERNAME
      const username = await User.findOne({
        where: { userName: value.userName },
      });

      // CHECK IF EVERYTHING IS VALID
      if (Boolean(error)) {
        throw new UserInputError(
          "check the fields for error",
          formatValidationError(error?.details ? error?.details : [])
        );
      }

      // RETURN ERROR IF EMAIL EXIST
      else if (Boolean(email)) {
        throw new UserInputError("check the fields for error", {
          email: '"Email" already exist',
        });
      }

      // RETURN ERROR IF USERNAME EXIST
      else if (Boolean(username)) {
        throw new UserInputError("check the fields for error", {
          username: '"User Name" already exist',
        });
      }

      // DO STUFF IF EVERYTHING IS OKAY
      else {
        const hashed = await bcrypt.hash(value.password, 10);
        const user = User.create({
          email: value.email,
          firstName: value.firstName,
          lastName: value.lastName,
          userName: value.userName,
          password: hashed,
        });

        await user.save();

        return user;
      }
    },
  },
};
