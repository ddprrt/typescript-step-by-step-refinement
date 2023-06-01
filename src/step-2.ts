const app = {
  get,
};

type AppRequest = {
  method: string,
  params: Record<string, string>,
};

type AppResponse = {
  status(statusCode: number): AppResponse,
  send(body?: unknown): void;
}

type CallbackFn = (req: AppRequest, res: AppResponse) => void;

function get(path: string, cb: CallbackFn) {
  // Missing: actual implementation
}

app.get("/user/:userId/", (req, res) => {
  if (req.method === "POS") {
    res.status("200").send(`Hello ${req.params.userID}`);
  }
});

export { }
