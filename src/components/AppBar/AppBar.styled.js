import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 64px;
  padding: 12px 24px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.accent};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  > nav {
    display: flex;
    gap: 12px;
  }
`;

export const HeaderLayout = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  align-items: center;
`;
