import { isEmpty } from '@/utils';

export const useValidator = () => {
  /**
   *
   * @param fieldName
   * @param trigger
   * @param type
   * @param whitespace
   * @param required
   */

  const required = (
    fieldName = '',
    trigger = 'blur',
    type = 'string',
    whitespace = true,
    required = true,
  ) => {
    return {
      required,
      message: fieldName + ' is required',
      trigger,
      whitespace,
      type,
    };
  };

  const maxLength = (fieldName = '', maxNumber = 256, trigger = 'blur') => {
    return {
      max: maxNumber,
      message: fieldName + ' must be less than ' + maxNumber + ' characters',
      trigger,
    };
  };

  const minLength = (fieldName = '', minNumber = 1, trigger = 'blur') => {
    return {
      min: minNumber,
      message: fieldName + ' must be more than ' + minNumber + ' characters',
      trigger,
    };
  };

  //https://github.com/yiminghe/async-validator#type
  const requiredType = (fieldName = '', type = 'integer', trigger = 'blur') => {
    return {
      type,
      message: fieldName + ' must be ' + type,
      trigger,
    };
  };

  const phoneNumberRule = (trigger = 'blur') => {
    const name = 'Phone number';
    const message = 'Phone number is invalid';

    return [
      required(name, trigger),
      maxLength(name, 15, trigger),
      minLength(name, 8, trigger),
      whiteSpace(name, trigger),
      patternRegex(message, new RegExp('^\\+?[0-9\\s]+$'), trigger),
    ];
  };

  const usernameRule = (trigger = 'blur') => {
    const name = 'Username';
    return [
      required(name, trigger),
      whiteSpace(name, trigger),
      maxLength(name, 35, trigger),
      patternRegex(
        'Username is invalid',
        new RegExp('^[a-zA-Z0-9._\\s-]+$'),
        trigger,
      ),
    ];
  };

  const passwordRule = (fieldName = '', trigger = 'blur') => {
    const validator = (rule: any, value: any) => {
      if (!value) return Promise.reject(fieldName + ' is required');
      if (/\s+/.test(value))
        return Promise.reject(fieldName + ' must not contain whitespace');
      return Promise.resolve();
    };

    return { required: true, validator, trigger };
  };

  const confirmPassword = (
    password: string,
    valueConfirm: string,
    trigger: string,
  ) => {
    return {
      validator() {
        if (valueConfirm !== password) {
          return Promise.reject('Mật khẩu nhập lại không chính xác');
        } else {
          return Promise.resolve();
        }
      },
      trigger,
    };
  };

  // Validate field do not exist whitespace between value
  const whiteSpace = (fieldName: string, trigger = 'blur') => {
    const validator = (rule: any, value: string) => {
      const trimValue = value?.trim();
      if (trimValue && /\s+/.test(trimValue)) {
        return Promise.reject(fieldName + ' must not contain whitespace');
      }

      return Promise.resolve();
    };

    return { validator, trigger };
  };

  const unsignedChar = (fieldName: string, trigger = 'blur') => {
    return patternRegex(
      fieldName + " can't contain special characters or numbers",
      new RegExp('^[a-zA-Z\\s]+$'),
      trigger,
    );
  };

  const unsignedCharAndNumRule = (fieldName: string, trigger = 'blur') => {
    return patternRegex(
      fieldName + " can't contain special characters",
      new RegExp('^[a-zA-Z0-9\\s]+$'),
      trigger,
    );
  };

  const patternRegex = (message = '', pattern: any, trigger = 'blur') => {
    return {
      pattern,
      message,
      trigger,
    };
  };

  return {
    required,
    maxLength,
    minLength,
    requiredType,
    phoneNumberRule,
    usernameRule,
    passwordRule,
    confirmPassword,
    whiteSpace,
    unsignedChar,
    unsignedCharAndNumRule,
    patternRegex,
  };
};

export default useValidator;
