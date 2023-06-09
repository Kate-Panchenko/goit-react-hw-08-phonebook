import styled from 'styled-components';

export const Contact = styled.div`
  display: flex;
  gap: 18px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.21;
  color: ${props => props.theme.black};
`;

export const ContactSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  font-size: 16px;
  line-height: 1.19;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: ${props => props.theme.accent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => props.theme.hover};
  }
  padding: 4px 12px;
`;
