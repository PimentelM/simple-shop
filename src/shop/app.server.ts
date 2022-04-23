import express from 'express';

export const init = async () => {

  const app = express();
  const router = express.Router();


  console.log("Hello from server");

  router.get('/online', (req , res) => {
    res.send('Hello World!');
  });


  app.use('/api', router);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

}
