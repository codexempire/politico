import offices from './datastore/officeDB';

class officeModel {
	static createOffice(info, res) {
	  const exists = offices.find(office => office.name === info.name);
	  const notOffice = offices.find(office => office.type === info.type);
	  if (exists) {
	  	res.status(406).json({ status: 406, message: 'Office in existence' });
	  } else if (info.type !== 'federal' && info.type !== 'legislative' && info.type !== 'state' && info.type !== 'local') { 
	  	res.status(406).json({ status: 406, message: 'Office has no valuable type' });
	  } else{
		  const newOffice = {
		    id: offices.length + 1,
		    type: info.type,
		    name: info.name,
		  };
		  offices.push(newOffice);
		  res.status(201).json({ status: 201, data: [newOffice] });
	  }
	  res.status(500).json({ status: 500, message: 'Server Error' });
	}

	static getAll(res) {
		if(offices.length == 0) res.status(404).json({ status: 404, message: 'No office found' });
		else res.status(200).json({ status: 200, data: offices });
		res.status(500).json({ status: 500, message: 'Server Error' });
	}

	static getOne(id, res) {
		const exists = offices.find(office => office.id === id);
		if (exists) { res.status(200).json({ status: 200, data: [exists] }); }
		else { res.status(404).json({ status: 404, message: 'Office not found' }); }
		res.status(500).json({ status: 500, message: 'Server Error' });
	}
}

export default officeModel;
