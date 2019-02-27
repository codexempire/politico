import officeModel from '../../model/officesModel';
import officeMiddleware from '../../middleware/officeMiddleware';

class officeController {
	static createOffice(req, res) {
	  const passed = officeMiddleware.createOffice(req, res);
	  if (!passed) return;
	  const { type, name } = req.body;
	  const info = {
	  	type,
	  	name
	  };
	  officeModel.createOffice(info, res);
	}

	static getAll(req, res) {
	  officeModel.getAll(res);
	}

	static getOne(req, res) {
	  const id = parseInt(req.params.id, 10);
	  officeModel.getOne(id, res);
	}
}

export default officeController;
