
function formatResponse(res, payload, code = 200) {
  console.log('format response payload ====>>>>', payload);
  let response = {};
  if (code < 400) {
    if (payload.data) {
      response = payload.data;
    } else {
      response = payload;
    }
  } else {
    response.error = payload;
  }
  return res.status(code).send(response);
}

module.exports = {
  formatResponse
};
