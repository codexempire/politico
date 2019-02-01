import party from './datastore/partyDB';

class PartyModel {
  static createParty(name, hqAddress, logoUrl) {
    const parties = {
      id: party.length + 1,
      name,
      hqAddress,
      logoUrl,
    };

    party.push(parties);

    return party;
  }
  static getAllParty(res) {
    if (!party.length) {
      res.status(404).json({
        status: 404,
        message: 'No party Available',
      });
    }

    return party;
  }
}

export default PartyModel;
