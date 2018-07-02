import { UserControler } from '../controllers/user/user.controller'


export class Routes {
  public userController: UserControler = new UserControler();
  public prefix: string = '/api/v1';

  public routes(app): void {
    app.route(`${this.prefix}/user`)
    .post(this.userController.createUser);
  }
}