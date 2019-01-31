import express from 'express';

import PartyController from '../controller/partyController';

const partyRouter = express.Router();

partyRouter.get('/party', PartyController.getAllParty);

export default partyRouter;