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
      return helpers.message('Поле "Код товара" доллжно состоять из 13 цифр.');
    }),
    alcoType: Joi.string().required().min(2),
    label: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) {
        return value;
      }
      return helpers.message('Поле "Вес крышки" заполнено некорректно.');
    }),
    bottleCapWeight: Joi.number().required().custom((value, helpers) => {
      if (value < 0.50 && value > 0) {
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

const updateBottleValidation = celebrate({
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
      return helpers.message('Поле "Код товара" доллжно состоять из 13 цифр.');
    }),
    alcoType: Joi.string().required().min(2),
    label: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) {
        return value;
      }
      return helpers.message('Поле "Вес крышки" заполнено некорректно.');
    }),
    bottleCapWeight: Joi.number().required().custom((value, helpers) => {
      if (value < 0.50 && value > 0) {
        return value;
      }
      return helpers.message('Поле "label" заполнено некорректно.');
    }),
  }),
});

const deleteInventarizationValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex(),
  }),
});

const createInventarizationValidation = celebrate({
  body: {
    nameInCharge: Joi.string().required(),
    barName: Joi.string().required(),
    date: Joi.string().required(),
    remainders: Joi.array().items(Joi.object().keys({
      drinkName: Joi.string().required(),
      remainder: Joi.number().required(),
      isUnknown: Joi.boolean().required(),
    })),
  },
});

module.exports = {
  createBottleValidation,
  deleteInventarizationValidation,
  createUserValidation,
  loginValidation,
  deleteBottleValidation,
  createInventarizationValidation,
  updateBottleValidation,
};
