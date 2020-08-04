import {
  camelCase, reduce, isPlainObject, isArray, includes,
} from 'lodash';

const getKeyName = (fn: Function, key: string,
  ignoreKeys: string[] | undefined) => (ignoreKeys && includes(ignoreKeys, key) ? key : fn(key));

/**
 * Update objects keys to a particular case
 * @param obj - object to be transformed
 * @param fn - function that would transform the case defaults to camelCase from lodash
 * @param ignoreKeys - array of named object keys to ignore
 */

export const transformObjectKeys = (obj: object, fn: Function = camelCase,
  ignoreKeys: string[] | undefined = undefined): object => reduce(obj, (result, value, key) => {
  const finalValue = isPlainObject(value) || isArray(value)
    ? transformObjectKeys(value, fn, ignoreKeys) : value;
  const keyName = getKeyName(fn, key, ignoreKeys);
  return { ...result, [keyName]: finalValue };
}, {});
