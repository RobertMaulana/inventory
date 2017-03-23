const moment = require('moment');

module.exports = function(date){
  return moment(date).format("dddd, DD MMM YYYY, HH:mm");
}
