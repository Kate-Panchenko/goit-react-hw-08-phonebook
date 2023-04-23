import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const UserName = styled.p`
  font-weight: 500;
  color: ${props => props.theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.21;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: rgb(22, 22, 22);
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.border};
  text-decoration: none;
  color: ${props => props.theme.black};
  font-weight: 500;
  background-color: ${props => props.theme.accent};
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.border};
  }
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.border};
  }
`;

export const ButtonSpan = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
