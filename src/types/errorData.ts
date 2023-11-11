export default interface ErrorData {
  error: Error;
}

interface Error {
  code: number;
  message: string;
}
