import React, { useState } from "react";
import "./InterviewerListItem.scss"
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const InterviewerItemClasses = classNames(
{"interviewers__item--selected" : props.selected})

  return (
    <li className={InterviewerItemClasses} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    {props.selected && props.name}
  </li>
  );

}
