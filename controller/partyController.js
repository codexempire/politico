import PartyModel from '../model/partyModel';
import PartyMiddleware from '../middleware/partyMiddleware';

class PartyController {
  static createParty(req, res) {
    const error = PartyMiddleware.createPartyCheck(req);
    if (!error) {
      res.status(400).json({ status: 400, error: 'Provide name, address and logo of the party' });
    }

    const { name, hqAddress, logoUrl } = req.body;

    const newParty = PartyModel.createParty(name, hqAddress, logoUrl);
    if (newParty) res.status(201).json({ status: 201, data: newParty });
    res.status(404).json({ status: 404, data: 'Party Not Created' });
  }

  static getAllParty(req, res) {
    const allParty = PartyModel.getAllParty();
    if (allParty) res.status(200).json({ status: 200, data: allParty });
    res.status(404).json({ status: 404, data: 'No Party' });
  }
}
  
export default PartyController;
