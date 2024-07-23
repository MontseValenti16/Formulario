import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 15px;
  margin: 10px 0;
  background-color: #e1aded;
  color: #1b1414;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: -6px 6px 24px -1px rgba(43,64,82,0.8);
  -moz-box-shadow: -6px 6px 24px -1px rgba(43,64,82,0.8);
  box-shadow: -6px 6px 24px -1px rgba(43,64,82,0.8);

  &:hover {
    background-color: #e05fe7;
  }
`;

function Button({ onClick, label }) {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}

export default Button;
