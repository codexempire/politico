import party from './datastore/partyDB';

class PartyModel {
  static createParty(name, hqAddress, logoUrl) {
    const oneParty = {
      id: party.length + 1,
      name,
      hqAddress,
      logoUrl,
    };

    party.push(oneParty);

    return oneParty;
  }

  static getAllParty() {
    return party;
  }
}

export default PartyModel;
