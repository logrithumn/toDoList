var express = require('express');
var router = express.Router();

var card = require('./card.js');
// var bunyan = require('bunyan');

// var log = bunyan.createLogger({
//   name : 'ggng',
//   serializers : {
//     req : bunyan.stdSerializers.req,
//     res : bunyan.stdSerializers.res
//   }
// });

/*MIDDLEWARE*/
router.use(function(req, res, next) {
//  log.info({req : req}, 'REQUEST');
  // log.info({res : res}, 'RESPONSE');
  next();
});
/*END MIDDLEWARE*/

router.route('/card').post(card.post).get(card.get);

module.exports = router;
