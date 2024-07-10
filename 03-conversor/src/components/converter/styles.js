import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  margin: 16rem auto 2rem;
  padding: 2rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 2rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  input,
  select {
    width: 100%;
    padding: 0.7rem 1rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  input {
    margin-bottom: 2.4rem;
  }

  select {
    margin-bottom: 0.8rem;
  }

  span,
  p {
    font-size: 1.2rem;
    color: #495057;
  }

  h3 {
    margin-top: 1.6rem;
  }

  p {
    margin: 1.6rem auto 0;
    font-size: 1.4rem;
  }
`;
