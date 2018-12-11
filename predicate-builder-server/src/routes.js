import getContent from './utils/Content';
import createQuery from './utils/Query';

const routes = [
  {
    type: 'get',
    route: '/content',
    action: (req, res) => {
      getContent().then((content) => {
        res.status(200).send(content);
      });
    }
  },
  {
    type: 'post',
    route: '/query',
    action: (req, res) => {
      createQuery(req.body.filters).then((query) => {
        res.status(200).send({
          query
        });
      });
    }
  }
];

export default routes;