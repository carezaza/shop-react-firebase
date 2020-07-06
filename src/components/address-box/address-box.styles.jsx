import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import RadioGroup from "@material-ui/core/RadioGroup";

export const IconBox = styled(IconButton)`
  margin: 0 !important;
  padding: 0 !important;
  margin-left: 0 !important;
`;

export const RadioGroupContainer = styled(RadioGroup)`
  display: flex;
  flex-direction: row  !important;
`;

export const HeaderAddress = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddressContainer = styled.div`
  border: 1px solid rgba(224, 224, 224, 1);
  padding: 10px;
  margin: 10px;
`;