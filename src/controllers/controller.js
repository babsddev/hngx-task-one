const { getServiceResponse } = require('../services/service')

const getResponse = (req, res) => {
  const { slack_name, track } = req.query
  const jsonResponse = getServiceResponse(slack_name, track)

  if (!slack_name || !track) {
    return res
      .status(400)
      .json({ error: 'Slack name and track are required in the query params' })
  }

  if (jsonResponse.error) {
    return res.status(400).json(jsonResponse)
  }

  res.json(jsonResponse)
}

module.exports = {
  getResponse,
}
