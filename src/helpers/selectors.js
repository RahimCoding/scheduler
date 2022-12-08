export function getAppointmentsForDay(state, day) {
  const results = []
  // find the day object
  // for each of their apt ids
  // add that apt to results

  const dayobj = state.days.find(d => d.name === day)

  if (!dayobj) {
    return results
  }

  for (const id of dayobj.appointments) {
    const apt = state.appointments[id]
    results.push(apt)
  }

  return results
}

export const getInterview = function (state, interview) {
  if (interview) {
    return { student: interview.student, interviewer: state.interviewers[interview.interviewer] }
  }
  return null

}

export function getInterviewersForDay(state, day) {
  const results = []
  // find the day object
  // for each of their apt ids
  // add that apt to results

  const dayobj = state.days.find(d => d.name === day)

  if (!dayobj) {
    return results
  }

  for (const id of dayobj.interviewers) {
    const apt = state.interviewers[id]
    results.push(apt)
  }

  return results
}