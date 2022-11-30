import React, { useState } from "react";
import "./InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";



export default function InterviewerList(props) {

  const list = props.interviewers.map(interviewer =>
    <InterviewerListItem
    key={interviewer.id}
    name={interviewer.name}
    avatar={interviewer.avatar}
    selected={interviewer.id === props.value}
    setInterviewer={() => props.onChange(interviewer.id)}
  />)


  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">{list.name}</h4>
      <ul className="interviewers__list">{list}</ul>
    </section>
    
  );

}