import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const AccountInfoContainer = styled.div`
  margin: 20px auto;
`;

export const IconBox = styled(IconButton)`
  margin: 0 !important;
  padding: 0 !important;
  margin-left: 0 !important;
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: row !important;
`;

export const HeaderAddress = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AddressContainer = styled.div`
  outline: none;
  border: none;
  background-color: white;
  padding: 10px;
  margin: 10px;
  max-width: 360px;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  flex-direction: column;
`;
