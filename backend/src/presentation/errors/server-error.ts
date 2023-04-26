export class ServerError extends Error {
  constructor(stack: string) {
    super("Internal server ")
    this.name = 'ServerError'
    this.stack = stack
  }
}