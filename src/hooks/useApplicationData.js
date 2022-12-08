import React, { useState, useEffect } from "react";
import axios from "axios";




export default function useApplicationData(initial) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const updateSpots = function (state, appointments, day) {
    //find the day
    const dayobj = state.days.find(d => d.name === day)
    // go through each of the appointments of the day
    let count = 0;
    for (const id of dayobj.appointments) {
      const apt = appointments[id]
      if (apt.interview === null) {
        // increment count if interview(*) is null
        count++
      }
    }

    dayobj.spots = count;

    // update day and days and return a new days array 
    return dayobj

  }

  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
   
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {

      const dayobj = updateSpots(state, appointments, state.day)
  
      const newDays = [...state.days]
      newDays[dayobj.id - 1] = dayobj
      setState({
        ...state,
        appointments,
        days: newDays
      });
    })
  }



  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`).then(() => {
      const dayobj = updateSpots(state, appointments, state.day)
      const newDays = [...state.days]
      newDays[dayobj.id - 1] = dayobj
      setState({
        ...state,
        appointments,
        days: newDays
      });
    })


  }


  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
 
      setState({ ...state, days: all[0].data, appointments: all[1].data, interviewers: all[2].data })
    });
  }, [])

  return {
    state, setDay, bookInterview, cancelInterview
  }
}