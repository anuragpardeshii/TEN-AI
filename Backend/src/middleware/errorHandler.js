import ApplicationError from "../utils/ApplicationError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApplicationError) {
    return res
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }
  console.error("Unexpected Error:", err);

  return res
    .status(500)
    .json({ success: false, message: "Internal Server Error" });
};
export default errorHandler;
