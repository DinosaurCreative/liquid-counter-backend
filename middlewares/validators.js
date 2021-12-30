const { celebrate, Joi } = require('celebrate');
const { isURL } = require('validator');
const {
  emailRegexp, itemCodeErr, itemCapWeightErr, itemLabelErr,
} = require('../utils/constants');

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
      return helpers.message(itemCodeErr);
    }),
    alcoType: Joi.string().required().min(2),
    label: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) {
        return value;
      }
      return helpers.message(itemLabelErr);
    }),
    bottleCapWeight: Joi.number().required().custom((value, helpers) => {
      if (value < 0.50 && value > 0) {
        return value;
      }
      return helpers.message(itemCapWeightErr);
    }),
  }),
});

const createUserValidation = celebrate({
  body: {
    name: Joi.string().required().min(2),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(8).required(),
    secretKey: Joi.string().max(32),
    barName: Joi.string().min(2).max(50).required(),
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
      return helpers.message(itemCodeErr);
    }),
    alcoType: Joi.string().required().min(2),
    label: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) {
        return value;
      }
      return helpers.message(itemLabelErr);
    }),
    bottleCapWeight: Joi.number().required().custom((value, helpers) => {
      if (value < 0.50 && value > 0) {
        return value;
      }
      return helpers.message(itemCapWeightErr);
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
    inventaData: Joi.array().items(Joi.object().keys({
      title: Joi.string().required(),
      totalVolume: Joi.number().required(),
      isUnknown: Joi.boolean().required(),
      fullBottle: Joi.number(),
      openedBottle: Joi.number(),
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
