import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid ${props => props.theme.border};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 32px;
  width: 600px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.21;
  color: ${props => props.theme.black};
`;

export const Input = styled.input`
  height: 40px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 10px;
  padding-left: 12px;
`;

export const Button = styled.button`
  align-self: center;
  padding: 8px 24px;
  background-color: ${props => props.theme.accent};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.21;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => props.theme.hover};
  }
`;
