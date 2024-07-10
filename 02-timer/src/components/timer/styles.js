import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  min-height: 50%;
  width: 400px;
  margin: 0 auto;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background: ${({ theme }) => theme.COLORS.GRAY_100};
`;
