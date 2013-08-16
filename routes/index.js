
/*
 * GET home page.
 */

exports.index = function(req, res){
  req.session.name = req.session.name || new Date().toUTCString();
  console.log(req.sessionID);
  res.send(req.session.name);
};
