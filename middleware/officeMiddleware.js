class officeMiddleware {
	static createOffice(req, res) {
	  if (!req.body.name || req.body.name.trim() == '') res.status(400).json({ status: 400, message: 'Enter a valid name' });
	  if (req.body.name.length < 5) res.status(400).json({ status: 400, message: 'Name is too short enter a name of at least 5 letters' });
	  if (!req.body.type || req.body.type.trim() == '') res.status(400).json({ status: 400, message: 'Enter a valid office type' });
	  if (req.body.type !== 'federal') {
	  	if (req.body.type !== 'legislative') {
	  		if (req.body.type !== 'state') {
	  			if (req.body.type !== 'local') {
	  				res.status(400).json({ status: 400, message: 'Enter a valid Office' });
	  			}
	  		}
	  	}
	  }
	  return true;
	}
}

export default officeMiddleware;
