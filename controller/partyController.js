import PartyModel from '../model/partyModel';
import PartyMiddleware from '../middleware/partyMiddleware'

class PartyController {
  static createParty(req, res) {
    PartyMiddleware.createPartyCheck(req);
    
    if (req.error) {
      res.status(404).json({
        status: 404,
        error: 'Provide name, address and logo of the party',
      });
    } else {
      const { name, hqAddress, logoUrl } = req.body;
      const party = PartyModel.createParty(name, hqAddress, logoUrl);
      res.status(201).json({
        status: 201,
        data: [party],
      });
    }
  }
}
  
export default PartyController;
