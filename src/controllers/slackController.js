const slackService = require('../services/slackService')

const slackController = async (req, res) => {
  const response = await slackService(req, res)

  return response
}

module.exports = slackController
