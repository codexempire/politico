import PartyModel from '../model/partyModel';
import PartyMiddleware from '../middleware/partyMiddleware';

class PartyController {

  // create party controller
  static createParty(req, res) {
    const passed = PartyMiddleware.createParty(req, res);
    if (!passed) return;
    const { name, hqAddress, logoUrl } = req.body;
    const info = {
      name,
      hqAddress,
      logoUrl
    }
    const insert = PartyModel.createParty(info, res);
  }

  // get all party controller
  static getAllParty(req, res) {
    const allParty = PartyModel.getAllParty();
    if (allParty) res.status(200).json({ status: 200, data: allParty });
    res.status(404).json({ status: 404, data: 'No Party' });
  }

  // get single party controller
  static getOne(req, res) {
    const id = parseInt(req.params.id, 10);

    const one = PartyModel.getOne(id);
    if (one) res.status(200).json({ status: 200, data: [one] });
    res.status(404).json({ status: 404, data: 'No party Found' });
  }

  // delete party controller
  static deleteParty(req, res) {
    const id = parseInt(req.params.id, 10);
    
    const deleted = PartyModel.deleteParty(id);
    if (deleted) res.status(200).json({ status: 200, data: [deleted] });
    res.status(404).json({ status: 404, data: 'Failed to delete Party' });
  }

  // patch party controller
  static patchParty(req, res) {
    const error = PartyMiddleware.patch(req);
    if (error) res.status(400).json({ status: 400, data: 'Please enter a name' });
    const id = parseInt(req.params.id, 10);
    const name = req.body.name;

    const changed = PartyModel.patchParty(id, name);
    if (changed) res.status(200).json({ status: 200, data: [changed] });
    res.status(404).json({ status: 404, data: 'Failed to change Parties name' });
  }
}
  
export default PartyController;
