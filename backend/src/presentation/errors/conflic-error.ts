export class Conflict extends Error {
  private readonly statusCode = 409

  constructor(message: string) {
    super(message)
    this.name = "Conflict"
  }
}