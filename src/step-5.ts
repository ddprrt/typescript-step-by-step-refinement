const app = {
  get,
};

type HttpMethods = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS"
  | "HEAD" | "CONNECT" | "TRACE" | "PATCH";

type AppRequest<Method extends HttpMethods, Params extends string = string> = {
  method: Method
  params: Record<Params, string>,
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

type ParsePathParams<Path> =
  Path extends `${string}/:${infer Param}/${infer Rest}` ? Param | ParsePathParams<`/${Rest}`> :
  Path extends `${string}/:${infer Param}` ? Param :
  never;

type CallbackFn<Method extends HttpMethods, Params extends string = string>
  = (req: AppRequest<Method, Params>, res: AppResponse) => void;

function get<P extends string>(path: P, cb: CallbackFn<"GET", ParsePathParams<P>>) {
  // Missing: actual implementation
}

app.get("/user/:userId", (req, res) => {
  if (req.method === "GET") {
    res.status(200).send(`Hello ${req.params.userID}`);
  }
});

export { }
