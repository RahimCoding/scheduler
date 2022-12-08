import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const list = props.days.map(day =>
    <DayListItem
      key={day.id}
      setDay={props.onChange}
      name={day.name}
      spots={day.spots}
      selected={props.value === day.name}
    />)

  return (
    <ul data-testid="days">{list}</ul>
  );

}

