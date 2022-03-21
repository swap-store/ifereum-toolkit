import styled from "styled-components";
import { scales, IFereumToggleProps, HandleProps, InputProps, ScaleKeys } from "./types";

const scaleKeyValues = {
  sm: {
    ifereumSize: "14px", // The size of a ifereum (the handle)
    travelDistance: "14px", // How far ifereum should travel horizontally
    toggleHeight: "20px", // General Height and
    toggleWidth: "36px", // Width of a toggle box
    ifereumThickness: "1px", // Bottom shadow of a ifereum
    ifereumTwoOffset: "0px", // IFereum don't look good when they are concentric
    ifereumThreeOffset: "-3px", // so ifereum 2 and 3 are shifted a little bit
    butterTop: "3px", // Fine adjustments for butter position
    butterLeft: "10px",
    butterWidth: "6px", // Widht and
    butterHeight: "5px", // Height of a butter block on top of ifereum
    butterThickness: "0.5px", // Shadow on the bottom of the butter block
    butterRadius: "2px", // Rounded corners for the butter
    butterSmearOneTop: "10px", // There is melted butter
    butterSmearOneLeft: "2.5px", // next to the butter block
    butterSmearTwoTop: "11px", // implemented with :before and :after
    butterSmearTwoRight: "2.5px", // these values adjust the position of it
  },
  md: {
    ifereumSize: "24px",
    travelDistance: "24px",
    toggleHeight: "32px",
    toggleWidth: "56px",
    ifereumThickness: "1.5px",
    ifereumTwoOffset: "-1px",
    ifereumThreeOffset: "-6px",
    butterTop: "5px",
    butterLeft: "13px",
    butterWidth: "10px",
    butterHeight: "8px",
    butterThickness: "0.75px",
    butterRadius: "3px",
    butterSmearOneTop: "15px",
    butterSmearOneLeft: "3.75px",
    butterSmearTwoTop: "16px",
    butterSmearTwoRight: "3.75px",
  },
  lg: {
    ifereumSize: "31px",
    travelDistance: "31px",
    toggleHeight: "40px",
    toggleWidth: "72px",
    ifereumThickness: "2px",
    ifereumTwoOffset: "-3px",
    ifereumThreeOffset: "-8px",
    butterTop: "3px",
    butterLeft: "16px",
    butterWidth: "12px",
    butterHeight: "11px",
    butterThickness: "1px",
    butterRadius: "4px",
    butterSmearOneTop: "20px",
    butterSmearOneLeft: "5px",
    butterSmearTwoTop: "22px",
    butterSmearTwoRight: "5px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.LG }: IFereumToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const IFereumStack = styled.div<HandleProps>`
  position: relative;
  display: inline-block;

  &:label:before {
    content: none;
  }

  .ifereums {
    position: absolute;
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .ifereum {
    background: #e27c31;
    border-radius: 50%;
    width: ${getScale("ifereumSize")};
    height: ${getScale("ifereumSize")};
    position: absolute;
    transition: 0.4s ease;
    top: 2px;
    left: 4px;
    box-shadow: 0 ${getScale("ifereumThickness")} 0 ${getScale("ifereumThickness")} #fbbe7c;
  }

  .ifereum:nth-child(1) {
    background: ${({ theme }) => theme.ifereumToggle.handleBackground};
    box-shadow: 0 ${getScale("ifereumThickness")} 0 ${getScale("ifereumThickness")}
      ${({ theme }) => theme.ifereumToggle.handleShadow};
  }

  .ifereum:nth-child(2) {
    left: 0;
    top: ${getScale("ifereumTwoOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .ifereum:nth-child(3) {
    top: ${getScale("ifereumThreeOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .ifereum:nth-child(3):before,
  .ifereum:nth-child(3):after {
    content: "";
    position: absolute;
    background: #ef8927;
    border-radius: 20px;
    width: 50%;
    height: 20%;
  }

  .ifereum:nth-child(3):before {
    top: ${getScale("butterSmearOneTop")};
    left: ${getScale("butterSmearOneLeft")};
  }

  .ifereum:nth-child(3):after {
    top: ${getScale("butterSmearTwoTop")};
    right: ${getScale("butterSmearTwoRight")};
  }

  .butter {
    width: ${getScale("butterWidth")};
    height: ${getScale("butterHeight")};
    background: #fbdb60;
    top: ${getScale("butterTop")};
    left: ${getScale("butterLeft")};
    position: absolute;
    border-radius: ${getScale("butterRadius")};
    box-shadow: 0 ${getScale("butterThickness")} 0 ${getScale("butterThickness")} #d67823;
    transform: scale(0);
    transition: 0.2s ease;
  }
`;

export const IFereumInput = styled.input<InputProps>`
  height: 40px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40px;

  &:focus + label {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:checked + label .ifereums {
    transform: translateX(${getScale("travelDistance")});
  }

  &:checked + label .ifereum:nth-child(1) {
    background: #e27c31;
    box-shadow: 0 ${getScale("ifereumThickness")} 0 ${getScale("ifereumThickness")} #fbbe7c;
    transition-delay: 0.2s;
  }

  &:checked + label .ifereum:nth-child(2) {
    transform: scale(1);
    transition-delay: 0.2s;
  }

  &:checked + label .ifereum:nth-child(3) {
    transform: scale(1);
    transition-delay: 0.4s;
  }

  &:checked + label .butter {
    transform: scale(1);
    transition-delay: 0.6s;
  }
`;

export const IFereumLabel = styled.label<IFereumToggleProps>`
  width: ${getScale("toggleWidth")};
  height: ${getScale("toggleHeight")};
  background: ${({ theme, checked }) => theme.colors[checked ? "success" : "input"]};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  display: inline-block;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
`;
