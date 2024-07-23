import InputField from '../atoms/Input';
import styled from 'styled-components';

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
`;

const FieldContainer = styled.div`
  margin-bottom: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled(InputField)`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

function Field({ type, placeholder, text, val, fnVal, min, step }) {
  return (
    <FieldContainer>
      <Label>{text}</Label>
      <StyledInput 
        type={type} 
        placeholder={placeholder} 
        value={val} 
        onChange={(e) => fnVal(e.target.value)} 
        min={min} 
        step={step} 
      />
    </FieldContainer>
  );
}

export default Field;
