const { celebrate, Joi } = require('celebrate');
const { isURL } = require('validator');

const createBottleValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    volume: Joi.number().required(),
    fullWeight: Joi.number().required(),
    bottleWeight: Joi.number().required(),
    bottleModel: Joi.string(),
    madeIn: Joi.string(),
    barcode: Joi.number().required().min(13),
    alcoType: Joi.string().required().min(2),
    label: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) {
        return value;
      }
      return helpers.message('Поле \'label\' заполнено не некорректно.');
    }),
  }),
});

module.exports = {
  createBottleValidation,
};
