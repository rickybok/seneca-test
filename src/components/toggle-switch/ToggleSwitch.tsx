import React, { useState } from "react";

import { Option } from "../../types";
import styled from "styled-components";

const COLUMN_WIDTH_THRESHOLD_PX: number = 600;
const MAX_WIDTH_PX: number = 900;
const DEFAULT_HEIGHT_PX: number = 80;

interface SwitchTheme {
  highlightBackgroundColor?: string;
  highlightTextColor?: string;
  textColor? : string;
  borderColor?: string;
}

export const DEFAULT_THEME: SwitchTheme = {
  highlightBackgroundColor: "#FFFFFF",
  highlightTextColor: "#000000",
  textColor: "#FFFFFF",
  borderColor: "#FFFFFF",
}

const Container = styled.div<{ theme: SwitchTheme, enabled: boolean }>`
  max-width: ${MAX_WIDTH_PX}px;
  width: 100%;
  height: ${DEFAULT_HEIGHT_PX}px;
  border-radius: 100px;
  border: 2px solid;
  border-color: ${ props => props.theme.borderColor };
  box-sizing: border-box;
  position: relative;
  padding: 0px;
  pointer-events: ${ props => props.enabled ? "auto": "none"};

  @media only screen and (max-width: ${COLUMN_WIDTH_THRESHOLD_PX}px) {
    border-radius: 24px;
    height: auto;
  }
`;

const SwitchContainer = styled.div`
  margin: 0px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: ${COLUMN_WIDTH_THRESHOLD_PX}px) {
    flex-direction: column;
  }
`;

const SwitchLabel = styled.div<{ theme: SwitchTheme, selected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  border-radius: 100px;
  color: ${props => props.selected ? props.theme.highlightTextColor : props.theme.textColor };
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 160%;

  @media only screen and (max-width: ${COLUMN_WIDTH_THRESHOLD_PX}px) {
    height: ${DEFAULT_HEIGHT_PX}px;
  }
`;

interface HighlightProps {
  options: number;
  selectedIndex: number;
  theme: SwitchTheme;
}

const Highlight = styled.div<HighlightProps>`
  position: absolute;
  width: ${props => 100 / props.options}%;
  height: 100%;
  border-radius: 100px;
  transition: 0.2s;
  background: ${props => props.theme.highlightBackgroundColor };
  opacity: 0.5;
  pointer-events: none;
  transform: translateX(${props => 100 * props.selectedIndex}%);
  filter: drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25));

  @media only screen and (max-width: ${COLUMN_WIDTH_THRESHOLD_PX}px) {
    height: ${DEFAULT_HEIGHT_PX}px;
    width: 100%;
    transform: translateY(${props => 100 * props.selectedIndex}%);
    border-top-left-radius: ${props => props.selectedIndex === 0 ? 24 : 0}px;
    border-top-right-radius: ${props => props.selectedIndex === 0 ? 24 : 0}px;
    border-bottom-left-radius: ${props => props.selectedIndex === (props.options-1) ? 24 : 0}px;
    border-bottom-right-radius: ${props => props.selectedIndex === (props.options-1) ? 24 : 0}px;
  }
`;

interface SwitchProps {
  options: Option[];
  theme?: SwitchTheme;
  enabled?: boolean;
  onChange?: (option: Option) => void;
}

/**
 * Switch component that shows options
 *
 * @component ToggleSwitch
 * @param  props
 * @param  props.enabled - Is the component enabled
 * @param  props.options - An array of Option to show on the component
 * @param  props.theme - Theme to render this component with
 * @param  props.onChange - Method that is called when the selection is updated
 */

const ToggleSwitch: React.FC<SwitchProps> = ({ enabled = true, theme, options, onChange }) => {

  if (!options || options.length < 2) {
    throw new Error("No options or not enough presented.");
  }

  const toggleTheme = { ...DEFAULT_THEME, ...theme };
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container theme={toggleTheme} enabled={enabled}>
      <Highlight
        options={options.length}
        selectedIndex={selectedIndex}
        theme={toggleTheme}
      />
      <SwitchContainer>
        {options.map((option, key) => {
          return (
            <SwitchLabel
              key={key}
              onClick={() => {
                setSelectedIndex(key);
                onChange && onChange(option)
              }}
              selected={selectedIndex === key}
              theme={toggleTheme}
              >
                {option.value}
            </SwitchLabel>
          );
        })}
      </SwitchContainer>
    </Container>
  );
};

export {ToggleSwitch};
