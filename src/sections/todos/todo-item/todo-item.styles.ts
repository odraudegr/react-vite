import styled from "@emotion/styled";
import { Delete as MuiIconRemove } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  &:hover {
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    >[data-action="remove"] {
      display: flex;
    }
  }
`;

export const TodoDescription = styled.div`
  font-size: 20px;
  flex-grow: 1;
`;

export const ButtonContainer = styled(IconButton)`
  width: 22px;
  height: 22px;
  color: red;
  display: none;
`;

export const IconRemove = styled(MuiIconRemove)`
  width: 20px;
  height: 20px;
`;

