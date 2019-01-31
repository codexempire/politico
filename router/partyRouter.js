import express from 'express';

import PartyController from '../controller/partyController';

const partyRouter = express.Router();

partyRouter.post('/party', PartyController.createParty);

export default partyRouter;