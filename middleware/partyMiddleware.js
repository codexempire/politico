class PartyMiddleware {
  static createPartyCheck(req) {
    if (!req.body.name || !req.body.hqAddress || !req.body.logoUrl) {
      req.error = true;
    }
  }
}
export default PartyMiddleware;
