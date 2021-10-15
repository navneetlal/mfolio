import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import router from './router';

const app = express()
const port = process.env.PORT ?? 3000

app.set('trust proxy', 1)

app.use(cors())
app.use(helmet())
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})