import express from 'express';

import PartyController from '../controller/partyController';

const partyRouter = express.Router();

// create post party route
partyRouter.post('/party', PartyController.createParty);
// create get all party get route
partyRouter.get('/party', PartyController.getAllParty);

export default partyRouter;

