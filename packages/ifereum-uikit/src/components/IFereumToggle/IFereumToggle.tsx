import React from "react";
import { IFereumStack, IFereumInput, IFereumLabel } from "./StyledIFereumToggle";
import { IFereumToggleProps, scales } from "./types";

const IFereumToggle: React.FC<IFereumToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <IFereumStack scale={scale}>
    <IFereumInput id={props.id || "ifereum-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <IFereumLabel scale={scale} checked={checked} htmlFor={props.id || "ifereum-toggle"}>
      <div className="ifereum">
        <div className="ifereum" />
        <div className="ifereum" />
        <div className="ifereum" />
        <div className="butter" />
      </div>
    </IFereumLabel>
  </IFereumStack>
);

export default IFereumToggle;
