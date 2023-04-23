import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const UserName = styled.p`
  font-weight: 500;
  /* font-size: 24px;
  line-height: 1.21; */
  color: ${props => props.theme.black};
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  text-decoration: none;
  color: ${props => props.theme.black};
  font-weight: 500;
  background-color: ${props => props.theme.accent};
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
