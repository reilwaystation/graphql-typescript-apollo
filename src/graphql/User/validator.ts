import Joi from "joi";

export const userCreateValidator = Joi.object({
  email: Joi.string().email().required().label("Email"),
  userName: Joi.string().alphanum().required().label("Username"),
  firstName: Joi.string().alphanum().required().label("Firstname"),
  lastName: Joi.string().alphanum().required().label("Lastname"),
  password: Joi.string().alphanum().required().label("Password"),
  rePassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .messages({ "any.only": "{{#label}} does not match" }),
});

export const userUpdateValidator = Joi.object({
  userName: Joi.string().alphanum().required().label("Username"),
  firstName: Joi.string().alphanum().required().label("Firstname"),
  lastName: Joi.string().alphanum().required().label("Lastname"),
});
