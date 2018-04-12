const fs = require('fs')
const moment = require('moment'); require('moment-timezone');

var Logger = {
        properties: {
                logFile: "miner.log"
        },
        methods: {

                /**
                 * 'w' stands for write.
                 * @param  {[type]} data [description]
                 * @return {[type]}      [description]
                 */
                w: function(caller, level, data){
                    var currentTimestamp = moment().tz("Europe/Berlin").format(moment.HTML5_FMT.DATETIME_LOCAL)
                    var prefix = `[${currentTimestamp}] ${caller}: `

                    var message = prefix + data
                    fs.appendFileSync(Logger.properties.logFile, message + "\n")
                    console.log(message)
                },

                info: function(caller, data){
                    Logger.methods.w(caller, "info", data)
                },

                warning: function(caller, data){
                    Logger.methods.w(caller, "warning", data)
                },

                error: function(caller, data){
                    Logger.methods.w(caller, "error", data)
                }
        }
}

module.exports = Logger