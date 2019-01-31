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

    return parties;
  }
}

export default PartyModel;
