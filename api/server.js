import express from 'express';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import apiRoutes from './v1/routes';
import swaggerDocument from '../api-docs/v1/swagger.json';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({ message: "Bienvenue, this is WayFarer's!!!" }));

app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', apiRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}...`));

export default app;
