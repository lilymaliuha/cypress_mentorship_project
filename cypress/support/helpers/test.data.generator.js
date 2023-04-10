import { UserModel } from '../../pageObjects/models/user.model'

export const defaultUserObject =
  new UserModel(getRandomEmail(), "123ABC", "Mother's maiden name?", makeRandomString(5))

export function getRandomEmail () {
  const randomDomain = makeRandomString(4).toLowerCase() + '.' + makeRandomString(2).toLowerCase();
  return makeRandomString(5).toLowerCase() + '@' + randomDomain;
}

export function makeRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
