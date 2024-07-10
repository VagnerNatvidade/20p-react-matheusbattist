import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  input {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    outline: none;
    width: 60%;
    margin-right: 10px;

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.ORANGE_100};
    }
  }

  button {
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE_100};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s ease;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;
