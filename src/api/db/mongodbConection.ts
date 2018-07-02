import * as mongoose from "mongoose";


export class Db {

  public connect(db:string) {
    mongoose.connect(`mongodb://localhost/${db}`);
  }

  public debug(debug:any) {
    mongoose.set('debug', debug);
  }
}
