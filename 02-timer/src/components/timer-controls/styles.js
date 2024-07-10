import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 6px;
    padding: 1.6rem 3.2rem;
    border: none;
    border-radius: 4px;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: ${({ theme }) => theme.COLORS.ORANGE_100};
    cursor: pointer;
    transition: 0.2s ease;
  }

  button:hover {
    filter: brightness(1.2);
  }
`;
