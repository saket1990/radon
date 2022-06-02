const date=function printDate(){console.log("prints the current date")}
const month=function printMonth(){console.log("prints the current month")}
let batchname="Radon"
let week="W3"
let day="D1"
const info=batchname + week + day
console.log(info + 'the topic for today is Nodejs module system' )

module.exports.date=date
module.exports.month=month
module.exports.info=info