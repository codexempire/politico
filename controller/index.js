import express from 'express';

import PartyModel from '../model/partyModel';

const router = express.Router();

router.get('/party', PartyModel.getAllParty);

export default router;
