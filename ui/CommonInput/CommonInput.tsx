/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import { primaryColors } from "@/themes/_muiPalette";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// eslint-disable-next-line import/order
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/system";

import React, { forwardRef } from "react";

const InputWrap = styled(TextField as any)`
  .MuiInputBase-adornedEnd {
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 400;
    color: ${primaryColors.textPrimaryColor};
    border-radius: 0;
    padding: 14px 0;
    border-bottom: 1px solid ${primaryColors.textPrimaryColor};
    background: transparent;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
    min-width: 300px;
    height: 36px;
    @media (max-width: 600px) {
      padding: 5px 10px;
    }

    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="password"],
    input[type="search"],
    input[type="number"],
    input[type="tel"],
    input[type="range"],
    input[type="date"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="color"],
    textarea {
      color: ${primaryColors?.textPrimaryColor};
      border: 0;
      padding-left: 0;
      ::-webkit-input-placeholder {
        color: ${primaryColors?.textPrimaryColor};
        opacity: 1;
      }

      ::-moz-placeholder {
        color: ${primaryColors?.textPrimaryColor};
        opacity: 1;
      }

      :-ms-input-placeholder {
        color: ${primaryColors?.textPrimaryColor};
        opacity: 1;
      }

      :-moz-placeholder {
        color: ${primaryColors?.textPrimaryColor};
        opacity: 1;
      }
      &:focus {
        border: 0;
        background: transparent;
      }
    }
    textarea {
      height: 125px !important;
      padding: 20px 10px 20px 51px;
      @media (max-width: 600px) {
        padding: 20px 10px 20px 30px;
      }
    }
    &.Mui-error {
      input[type="text"],
      input[type="email"],
      input[type="url"],
      input[type="password"],
      input[type="search"],
      input[type="number"],
      input[type="tel"],
      input[type="range"],
      input[type="date"],
      input[type="month"],
      input[type="week"],
      input[type="time"],
      input[type="datetime"],
      input[type="datetime-local"],
      input[type="color"],
      textarea {
        border-color: ${primaryColors?.errorMain};
      }
    }
    .MuiOutlinedInput-notchedOutline {
      display: none;
      /* border-color: var(--primaryD3D7DF); */
    }
    #outlined-adornment-password {
      border: 0;
      padding: 0;
      height: 39px;
      font-size: 16px;
      &::placeholder {
        color: ${primaryColors?.mainFontColor};
        opacity: 1;
      }
    }
    button {
      background-color: transparent;
      color: var(--textPrimaryColor);
      padding: 0;
      &:focus {
        background-color: transparent;
        color: var(--textPrimaryColor);
      }
      &:hover {
        background-color: transparent;
        color: var(--textPrimaryColor);
      }
      img {
        position: static !important;
        transform: inherit !important;
        top: 0;
        left: 0;
        width: 20px;
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;

type InputFieldCommonProps = StandardTextFieldProps & {
  isPassword?: boolean;
  adorMentIcon?: JSX.Element;
};

const InputFieldCommon = forwardRef<HTMLInputElement, InputFieldCommonProps>(
  ({ isPassword = false, adorMentIcon, ...others }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <InputWrap
        fullWidth
        variant="outlined"
        {...others}
        type={isPassword ? (showPassword ? "text" : "password") : others?.type}
        InputProps={{
          inputRef: ref,
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                disableRipple
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ) : (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                disableRipple
              >
                {/* <SearchRoundedIcon/> */}
                {adorMentIcon}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  }
);

export default InputFieldCommon;
