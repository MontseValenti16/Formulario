import styled from 'styled-components';

const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

function InputField({ type, placeholder, value, onChange }) {
  return <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}

export default InputField;
