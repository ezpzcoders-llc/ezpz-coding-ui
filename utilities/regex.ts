export const VALID_PASSWORD =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
export const VALID_EMAIL =
    /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
export const VALID_FLOATS = /^[+]?([0-9]+\.?[0-9]*|\.[0-9]+)$/
export const FLOAT_WITH_2_DIGITS = /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/
export const FLOAT_WITH_1_DIGIT = /^(\d+(\.\d{0,1})?|\.?\d{1,2})$/
export const VALID_INTEGER = /\b[0-9]+\b/
