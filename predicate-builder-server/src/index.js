import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT_NUMBER } from './shared/constants';
import Firebase from './utils/Firebase';
import routes from './routes';

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
Firebase.initFirebase();

app.listen(PORT_NUMBER, () => {
  console.log(`server running on port ${PORT_NUMBER}`)
});

routes.forEach((route) => {
  app[route.type](route.route, route.action);
});

