import express, { Express, Request, Response } from "express";

// CONTROLLER
class TodoRouter {
  private port = 10000;
  private router: Express;

  constructor() {
    this.router = express();
    this.addRoutes();
    this.router.listen(this.port, () =>
      console.log(`Todo started at port ${this.port}`)
    );

    // console.log(this.something)
  }

  addRoutes() {

    // R of cRud
    this.router.get("/", (req: Request, res: Response) => {
      res.send({ todoKey: "1", todoItem: " Buy Milk" }); // res.send() sends as given data type, res.json() sends as json by converting it if necessary
    });

    // C of Crud
    this.router.post("/", (req, res) => res.send("Todo Added"));
  }
}

const todoRouter = new TodoRouter();
