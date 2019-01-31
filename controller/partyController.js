import PartyModel from '../model/partyModel';

class PartyController {
  static getAllParty(req, res) {
    const parties = PartyModel.getAllParty(res);

    res.status(200).json({
      status: 200,
      data: parties.map(party => ({ id: party.id, name: party.name, logoUrl: party.logoUrl })),
    });
  }
}
  
export default PartyController;
