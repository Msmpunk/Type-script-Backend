import * as mongoose from 'mongoose';
import { User } from '../../db/models/user';
import { Request, Response } from 'express';

const user = mongoose.model('User', User);

export class UserControler {

  public async createUser (req: Request, res: Response) {                
    let newUser = new user(req.body);

    newUser.save((err, user) => {
        if(err){
          res.send(err);
        }    
        res.json(user);
    });
  }
}