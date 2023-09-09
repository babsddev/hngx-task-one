const slackServices = async (req, res) => {
  try {
    const { slackName, track } = req.query

    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    const currentTime = new Date()
    let currentDay = weekdays[currentTime.getDay()]
    let timeInUTC = currentTime.toISOString().split('.')[0] + 'Z'

    if (slackName === 'babs' && track === 'backend') {
      const response = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: timeInUTC,
        track: track,
        github_file_url:
          'https://github.com/babsddev/hngx-task-one/blob/main/src/index.js',
        github_repo_url: 'https://github.com/babsddev/hngx-task-one',
        status_code: 200,
      }

      return res.status(200).send(response)
    } else {
      return res.status(404).send('User record not found')
    }
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}

module.exports = slackServices
