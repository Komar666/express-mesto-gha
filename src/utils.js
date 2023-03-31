/* eslint-disable linebreak-style */
// const VALIDATION_ERRORS = [
//     'ValidationError',
//     'CastError',
// ];

// const NOT_FOUND_ERRORS = [
//     'DocumentNotFoundError',
// ];

module.exports.intoServerErrorResponse = (res, err) => {
  let STATUS = 500;

  // if (NOT_FOUND_ERRORS.includes(err.name)) { STATUS = 404; }
  // if (VALIDATION_ERRORS.includes(err.name)) { STATUS = 400; }
  let message = 'произошла ошибка';

  if (err.message === 'DocumentNotFoundError') {
    STATUS = 404;
    message = 'Not found';
  }
  if (err.message === 'ValidationError' || err.message === 'CastError') {
    STATUS = 400;
    message = 'ошибка валидации';
  }

  return res.status(STATUS).send({
    message,
  });
};
