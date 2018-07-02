import * as express from 'express'
import * as bodyParser from "body-parser"
import { Routes } from "../routes/routes"
import { Db }  from '../db/mongodbConection'


class App {
  public app: express.Application;
  public router: Routes = new Routes();
  public db: Db = new Db();
  public mongoUrl: string = 'type-script';  

  constructor () {
    this.app = express();
    this.config();
    this.router.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.db.connect(this.mongoUrl);
  }
}

export default new App().app
