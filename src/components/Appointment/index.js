import React from "react";
import Empty from "./Empty";
import Header from "./Header";
import Show from "./Show";
import "./styles.scss"
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form"
import Status from "./Status";
import Confirm from "./Confirm";
import { Value } from "sass";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = 'CREATE';
  const SAVING = 'SAVING'
  const DELETING = 'DELETING'
  const CONFIRM = 'CONFIRM'
  const EDIT = 'EDIT'
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING)
    props.bookInterview(props.id, interview).then(()=> transition(SHOW));
    

  }
  function removeItem() {
    //happens on on-click trash can 
    transition(DELETING)
    props.cancelInterview(props.id).then(()=> transition(EMPTY));
  }
  console.log(props.interview);
  return (
    <article className="appointment">
      <Header
        time={props.time}
      />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          onDelete={() => transition(CONFIRM)}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && <Form
        onCancel={back}
        onSave={save}
        interviewers={props.interviewers}
      />}
      {mode === SAVING && <Status/>}
      {mode === DELETING && <Status/>}
      {mode === CONFIRM && <Confirm 
      onCancel = {back}
      onConfirm = {removeItem}
      message = {"Do you wish to delete?"}
      />}
      {mode === EDIT && <Form 
      onCancel={back}
      onSave={save}
      interviewers={props.interviewers}
      interviewer={props.interview.interviewer.id}
      student={props.interview.student}
      />}
    </article>

  )
}