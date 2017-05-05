module.exports = {
  post : function(req, res) {
    res.send({message : 'post'})
  },
  get : function(req, res) {
    res.send({message : 'get'})
  }
};
