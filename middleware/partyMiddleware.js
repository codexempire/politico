class PartyMiddleware {
  static createPartyCheck(req) {
    if (!req.body.name || !req.body.hqAddress || !req.body.logoUrl) return false;
    return true;
  }
}
export default PartyMiddleware;
