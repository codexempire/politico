class PartyMiddleware {
  static createParty(req, res) {
  	if (!req.body.name || req.body.name.trim() == '') res.status(400).json({ status: 400, message: 'Enter a valid name' });
  	if (req.body.name.length < 3) res.status(400).json({ status: 400, message: 'Name is too short enter a name of at least 3 letters' });
  	if (!req.body.hqAddress || req.body.hqAddress.trim() == '' || req.body.hqAddress.length < 12) res.status(400).json({ status: 400, message: 'Enter a valid hqAddress' });
  	const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(req.body.logoUrl);
  	if (!req.body.logoUrl || req.body.logoUrl.trim() == '' || !valid) res.status(400).json({ status: 400, message: 'Enter a valid logo url' });
  	return null;
  }

  // patch middleware
  static patch(req, res) {
		if (!req.body.name || req.body.name.length < 3) res.status(400).json({ status: 400, message: 'Enter a valid name of at least 3 letters' });
  	return null;
  }
}
export default PartyMiddleware;
