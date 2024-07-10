import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 2rem 2rem;
  padding: 2rem;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 4.8rem;
  background: ${({ theme }) => theme.COLORS.WHITE_100};

  h1 {
    display: grid;
    grid-template-columns: 1fr max-content 1fr max-content 1fr;
  }
`;
