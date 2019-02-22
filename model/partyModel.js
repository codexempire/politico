import party from './datastore/partyDB';

class PartyModel {
  static createParty(info, res) {
    const exists = party.find(part => part.name === info.name.toUpperCase());
    if (exists) {
      res.status(406).json({ status: 406, message: 'Party with this name already exists' });
    } else {
      const newParty = {
        id: party.length + 1,
        name: info.name.toUpperCase(),
        hqAddress: info.hqAddress,
        logoUrl: info.logoUrl
      };
      party.push(newParty);
      res.status(201).json({ status: 201, data: [newParty] });
    }
  }

  static getAllParty() {
    return party;
  }

  static getOne(id) {
    const  found = party.find(part => part.id === id);
    if (!found) return false;
    return found;
  }

  static deleteParty(id) {
    const found = party.find(part => part.id === id);
    if (!found) return false;
    const index = party.indexOf(found);
    party.splice(index, 1);
    return found;
  }

  static patchParty(id, name) {
    const found = party.find(part => part.id === id);
    if (!found) return false;
    found.name = name;
    return found;
  }
}

export default PartyModel;
