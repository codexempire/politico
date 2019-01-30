import party from '../datastore/partyDB';

class PartyModel {
  static getAllParty(req, res) {
    if (!party.length) {
      res.status(404).json({
        status: 404,
        data: 'No party found',
      });
    }

    res.status(200).json({
      status: 200,
      data: party,
    });
  }
}

export default PartyModel;
