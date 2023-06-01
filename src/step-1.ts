const app = {
  get,
}

function get(path: any, cb: any) {
  // Missing: actual implementation
}

app.get("/user/:userId/", (req: any, res: any) => {
  if (req.method === "POS") {
    res.status("200").send(`Hello ${req.params.userID}`);
  }
});

export { }
