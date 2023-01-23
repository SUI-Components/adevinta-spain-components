export class PasswordError extends Error {
  constructor(msg) {
    super(`[PasswordError] ${msg}`)
  }
}
