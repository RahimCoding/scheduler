import React from "react";
import "./DayListItem.scss"
import classNames from "classnames";


const formatSpots = function (props) {
  if (props.spots > 1) {
    return (props.spots + " spots remaining")
  }
  if (props.spots === 1) {
    return ("1 spot remaining")
  }
  if (props.spots === 0) {
    return ("no spots remaining")
  }
}

export default function DayListItem(props) {

  const DayListItemClasses = classNames("day-list__item",
    { "day-list__item--selected": props.selected },
    { "day-list__item--full": props.spots === 0 })
  return (
    <li className={DayListItemClasses} data-testid="day" onClick={() => props.setDay(props.name)}>
      <h2 >{props.name}</h2>
      <h3 >{formatSpots(props)}</h3>
    </li>
  );
}

