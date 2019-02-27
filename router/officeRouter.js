import express from 'express';
import officeController from '../controller/offices/officeController';

const officeRoute = express.Router();

// post route
officeRoute.post('/offices', officeController.createOffice);

// get all
officeRoute.get('/offices', officeController.getAll);

// get one
officeRoute.get('/offices/:id', officeController.getOne);

export default officeRoute;
