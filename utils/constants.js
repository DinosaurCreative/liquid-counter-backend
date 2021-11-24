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
const allowedCors = [
  'http://localhost:3000',
  'http://localhost:3000/',
  'https://localhost:3000/',
  'https://localhost:3000',
];

module.exports = {
  allowedMethods,
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
};
