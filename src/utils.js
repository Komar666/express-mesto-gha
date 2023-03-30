module.exports.intoServerErrorResponse = (res, err) => res.status(500).send({
  message: err.message,
});
