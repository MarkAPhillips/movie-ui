import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  margin-bottom: 1px;
  padding-left: 10px;
  border-radius: 5px;
  background: ${props => props.theme.color3};
  color: ${props => props.theme.color2};
`;
