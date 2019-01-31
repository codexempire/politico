import PartyModel from '../model/partyModel';

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
      const id = PartyModel.createParty(name, hqAddress, logoUrl);
      res.status(201).json({
        status: 201,
        data: [id, name,],
      });
    }
  }
  static getAllParty(req, res) {
    const parties = PartyModel.getAllParty(res);

    res.status(200).json({
      status: 200,
      data: parties.map(party => ({ id: party.id, name: party.name, hqAddress: party.hqAddress, logoUrl: party.logoUrl })),
    });
  }
}
  
export default PartyController;
