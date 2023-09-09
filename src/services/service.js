const getServiceResponse = (slack_name, track) => {
  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' })
  const utcTime = new Date().toISOString().split('.')[0] + 'Z'
  const githubFileUrl =
    'https://github.com/babsddev/hngx-task-one/blob/master/src/services/service.js'
  const githubRepoUrl = 'https://github.com/babsddev/hngx-task-one'

  const now = new Date()
  const utcTimeDate = new Date(utcTime)

  if (Math.abs(now - utcTimeDate) > 2 * 60 * 1000) {
    return { error: 'Invalid UTC time' }
  }

  return {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  }
}

module.exports = {
  getServiceResponse,
}
