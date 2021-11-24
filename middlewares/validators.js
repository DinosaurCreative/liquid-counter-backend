const { celebrate, Joi } = require('celebrate');
const { isURL } = require('validator');
const { emailRegexp } = require('../utils/constants');

const createBottleValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2),
    volume: Joi.number().required(),
    fullWeight: Joi.number().required(),
    bottleWeight: Joi.number().required(),
    bottleModel: Joi.string(),
    madeIn: Joi.string(),
    barcode: Joi.number().required().custom((value, helpers) => {
      if (String(value).length === 13) {
        return value;
      }
      return helpers.message('Поле "barcode" доллжно состоять из 13 цифр.');
    }),
    alcoType: Joi.string().required().min(2),
    label: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) {
        return value;
      }
      return helpers.message('Поле "label" заполнено некорректно.');
    }),
  }),
});

const createUserValidation = celebrate({
  body: {
    name: Joi.string().required().min(2),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(8).required(),
    secretKey: Joi.string().max(32),
  },
});

const loginValidation = celebrate({
  body: {
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().required(),
  },
});

const deleteBottleValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex(),
  }),
});

module.exports = {
  createBottleValidation,
  createUserValidation,
  loginValidation,
  deleteBottleValidation,
};
