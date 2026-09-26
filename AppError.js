class AppError extends Error {
  constructor(message, stastusCode) {
    super(message);
    this.stastusCode = stastusCode;
  }
}

export { AppError };
