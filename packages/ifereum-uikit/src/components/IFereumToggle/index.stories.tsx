import React, { useState } from "react";
import IFereumToggle from "./IFereumToggle";

export default {
  title: "Components/IFereumToggle",
  component: IFereumToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <IFereumToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <IFereumToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <IFereumToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
