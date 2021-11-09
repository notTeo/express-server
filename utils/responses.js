function getSuccessResponse(data) {
  return { success: true, data };
}

function getErrorResponse(error) {
  return { success: false, data: null, error };
}

module.exports = {
  getSuccessResponse,
  getErrorResponse,
};
