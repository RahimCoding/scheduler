import React from "react";
import classNames from "classnames";

import "components/Button.scss";
// import { action } from "@storybook/addon-actions";

export default function Button(props) {
   // let buttonClass = "button";
   let buttonClasses = classNames("button", {"button--confirm": props.confirm}, {"button--danger" : props.danger} )
 
   // if (props.confirm) {
   //   buttonClass += " button--confirm";
   // }
   // if (props.danger) {
   //    buttonClass += " button--danger";
   //  }
 
    return (
      <button
        className={buttonClasses}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  
 }
