/* eslint-disable no-control-regex */
// eslint-disable-next-line no-useless-escape

export const inputRules = {
  name: {
    required: "This field is required",
    minLength: {
      value: 3,
      message: "Minimum 3 characters",
    },
    maxLength: {
      value: 32,
      message: "Maximum 32 characters",
    },
  },
  description: {
    required: "This field is required",
    maxLength: {
      value: 256,
      message: "Maximum 256 characters",
    },
  },
  category: {
    required: "This field is required",
  },
  imageUrl: {
    required: "This field is required",
    pattern: {
      value: /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/,
      message: "Must be an image url",
    },
  },
  price: {
    required: "This field is required",
    min: {
      value: 1,
      message: "Price should not be zero",
    },
  },
};
