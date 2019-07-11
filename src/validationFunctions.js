import validator from "validator";

export const comparision = (str1, str2) => {
  if (!validator.equals(str1, str2)) {
    return false;
  } else {
    return true;
  }
};

export const alphabets = str => {
  if (!validator.isAlpha(str)) {
    return false;
  } else {
    return true;
  }
};

export const length = (str, len) => {
  if (!validator.isLength(str, { min: len, max: 100 })) {
    return false;
  } else {
    return true;
  }
};

export const empty = str => {
  if (!validator.isEmpty(str)) {
    return false;
  } else {
    return true;
  }
};

export const isjson = object => {
  if (!validator.isJSON(object)) {
    return false;
  } else {
    return true;
  }
};

export const phone = num => {
  if (!validator.isMobilePhone(num)) {
    return false;
  } else {
    return true;
  }
};

export const number = num => {
  if (!validator.isNumeric(num)) {
    return false;
  } else {
    return true;
  }
};

export const isEmail = str => {
  if (!validator.isEmail(str)) {
    return false;
  } else {
    return true;
  }
};
