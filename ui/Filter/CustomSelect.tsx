/* eslint-disable react/destructuring-assignment */
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { IconButton, MenuItem } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectProps } from "@mui/material/Select";
import { forwardRef, useState } from "react";
import DropDownIcon from "../Icons/DropdownIcon";

const CustomSelectWrapper = styled(Select)`
  &.MuiOutlinedInput-root {
    background-color: transparent;
    padding: 14px 0;
    width: 100%;
    border-radius: 0;
    border-bottom: 1px solid ${primaryColors.textPrimaryColor};
    min-width: 130px;
    height: 36px;
    .MuiSelect-select {
      padding: 0;
      /* padding-right: 40px; */
      color: ${primaryColors.textPrimaryColor};
      font-size: 20px;
      font-weight: 400;
      text-align: left;
    }
    fieldset {
      display: none;
      border-bottom: 1px solid ${primaryColors.textPrimaryColor};
    }
    .MuiSelect-icon {
      padding: 0;
      line-height: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .menu_item {
    &.MuiMenuItem-root {
      color: ${primaryColors.textPrimaryColor};
    }
  }
`;
interface CustomSelectProps extends SelectProps {
  defaultPlaceholder?: string;
}

const MenuProps = {
  PaperProps: {
    style: {
      width: "auto"
      // backgroundColor:"#000"
    }
  }
};

const CustomSelect: React.FC<CustomSelectProps & SelectProps> = forwardRef(
  ({ defaultPlaceholder, ...props }, ref) => {
    const isShowingDefaultPlaceholder =
      typeof defaultPlaceholder !== "undefined";
    return (
      <CustomSelectWrapper
        displayEmpty={isShowingDefaultPlaceholder}
        ref={ref}
        defaultValue={isShowingDefaultPlaceholder ? "" : undefined}
        input={<OutlinedInput />}
        IconComponent={(props) => {
          return (
            <IconButton {...props}>
              <DropDownIcon />
            </IconButton>
          );
        }}
        MenuProps={MenuProps}
        {...props}
      >
        {defaultPlaceholder ? (
          <MenuItem
            value=""
            disabled
            sx={{ display: "none" }}
            className="menu_item"
          >
            {defaultPlaceholder}
          </MenuItem>
        ) : null}
        {props.children}
      </CustomSelectWrapper>
    );
  }
);

export default CustomSelect;
