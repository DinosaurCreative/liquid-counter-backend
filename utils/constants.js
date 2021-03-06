const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
const badUrlErr = 'Передана некорректная URL ссылка!';
const connected = 'Successfully Connected to DB!';
const notConnected = 'Connection to DB Failed!';
const pathMissing = 'Отсутствует обязательное поле!';
const allowedMethods = 'GET,HEAD,PUT,PATCH,POST,DELETE';
const wrongPath = 'Не смотри, я не накрашена!';
const wrongEmail = 'Введен неверный имейл!';
const wrongUserData = 'Введен неверный имейл или пароль!';
const minNameLength = 'Длина имени не может быт короче двух символов!';
const minPassLength = 'Длина пароля должна быть более восьми символов!';
const wrongSecreteKey = 'Введен неправильный ключ!';
const passwordMissing = 'Вы не ввели пароль!';
const emailBusy = 'Пользователь с таким имейлом уже зарегистрирован!';
const passKeys = ['koreanBanana', 'pinkSmekalka', 'toeButter', 'brownNote', 'JapaniseVinDisel'];
const secretKeyBusy = 'Пользователь с таким секретным ключом уже зарегистрирован!';
const bottleIdMissing = 'Товар с указанным ID не найден!';
const barcodeError = 'Код должен состоять из девяти цифр';
const inventaMissing = ' Инвентаризация не найдена';
const itemNotFound = 'Позиция отсутсвует в базе данных.';
const deletedFromUnknownBtls = 'Товар удален из списка неизвестных товаров';
const unknownDbId = '61af2b32305bcb86bcdae133';
const itemAddedToUnknownLIst = 'Товар внесён в список на добавление в базу данных.';
const authErr = 'Ошибка авторизации';
const login = 'Авторизуйтесь';
const cookieRemoved = 'Куки удалены';
const itemCodeErr = 'Поле "Код товара" доллжно состоять из 13 цифр.';
const itemCapWeightErr = 'Поле "Вес крышки" заполнено некорректно.';
const itemLabelErr = 'Поле "label" заполнено некорректно.';
const allowedCors = [
  'http://localhost:3000',
  'http://localhost:3000/',
  'https://localhost:3000/',
  'https://localhost:3000',
];
const allowedItemsTypes = [
  'виски',
  'водка',
  'ром',
  'текила',
  'ликёр',
  'ликер',
  'белое вино',
  'вино белое ',
  'вино красное',
  'красное вино',
  'портвейн',
  'биттер',
  'битер',
  'сок',
  'молоко',
  'сливки',
  'лимонад',
  'пиво',
  'сидр',
  'коньяк',
  'бренди',
  'джин',
  'соус',
  'чай',
  'кофе',
  'вермут',
  'кашаса',
  'фрукты',
  'фрукт',
  'сахар',
  'соль',
  'мята',
  'снэки',
  'чипсы',
  'закуска',
  'шоколад',
  'орехи',
];

module.exports = {
  itemNotFound,
  itemCapWeightErr,
  itemLabelErr,
  cookieRemoved,
  itemCodeErr,
  authErr,
  login,
  itemAddedToUnknownLIst,
  allowedItemsTypes,
  inventaMissing,
  allowedMethods,
  barcodeError,
  bottleIdMissing,
  emailBusy,
  emailRegexp,
  badUrlErr,
  connected,
  notConnected,
  pathMissing,
  allowedCors,
  wrongPath,
  wrongEmail,
  minNameLength,
  minPassLength,
  wrongSecreteKey,
  secretKeyBusy,
  passwordMissing,
  wrongUserData,
  passKeys,
  deletedFromUnknownBtls,
  unknownDbId,
};
