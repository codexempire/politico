import party from './datastore/partyDB';

class PartyModel {
  static getAllParty(res) {
    if (!party.length) {
      res.status(404).json({
        status: 404,
        message: 'No party',
      });
    }

    return party;
  }
}

export default PartyModel;
