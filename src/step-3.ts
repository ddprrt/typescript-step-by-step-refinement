const app = {
  get,
};

type HttpMethods = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS"
  | "HEAD" | "CONNECT" | "TRACE" | "PATCH";

type AppRequest = {
  method: HttpMethods
  params: Record<string, string>,
};

type StatusCode =
  100 | 101 | 102 | 200 | 201 | 202 | 203 | 204
  | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305
  | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407
  | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418
  | 420 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 444 | 449
  | 450 | 451 | 499 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507
  | 508 | 509 | 510 | 511 | 598 | 599;

type AppResponse = {
  status(statusCode: StatusCode): AppResponse,
  send(body?: unknown): void;
}

type CallbackFn = (req: AppRequest, res: AppResponse) => void;

function get(path: string, cb: CallbackFn) {
  // Missing: actual implementation
}

app.get("/user/:userId/", (req, res) => {
  if (req.method === "POST") {
    res.status(419).send(`Hello ${req.params.userID}`);
  }
});

export { }
