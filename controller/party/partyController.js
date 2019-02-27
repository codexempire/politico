import PartyModel from '../../model/partyModel';
import PartyMiddleware from '../../middleware/partyMiddleware';

class PartyController {

  // create party controller
  static createParty(req, res) {
    PartyMiddleware.createParty(req, res);
    PartyModel.createParty(req, res);
  }

  // get all party controller
  static getAllParty(req, res) {
    PartyModel.getAllParty(res);
  }

  // get single party controller
  static getOne(req, res) {
    const id = parseInt(req.params.id, 10);
    PartyModel.getOne(id, res);
  }

  // delete party controller
  static deleteParty(req, res) {
    const id = parseInt(req.params.id, 10);
    PartyModel.deleteParty(id, res);
  }

  // patch party controller
  static patchParty(req, res) {
    PartyMiddleware.patch(req, res);
    const id = parseInt(req.params.id, 10);
    const name = req.body;
    PartyModel.patchParty(id, name, res);
  }
}
  
export default PartyController;
