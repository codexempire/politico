import express from 'express';

import PartyController from '../controller/partyController';

const partyRouter = express.Router();

// post router for create party
partyRouter.post('/party', PartyController.createParty);
partyRouter.get('/party', PartyController.getAllParty);

export default partyRouter;
