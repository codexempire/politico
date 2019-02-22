import express from 'express';

import PartyController from '../controller/partyController';

const partyRouter = express.Router();

// post router for create party
partyRouter.post('/parties', PartyController.createParty);

// create get all party get route
partyRouter.get('/parties', PartyController.getAllParty);

//create get single party route
partyRouter.get('/parties/:id', PartyController.getOne);

// delete party route
partyRouter.delete('/parties/:id', PartyController.deleteParty);

// patch party route
partyRouter.patch('/parties/:id', PartyController.patchParty);

export default partyRouter;
