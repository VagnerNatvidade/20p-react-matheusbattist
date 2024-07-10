import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;
  padding: 0.1rem;
  border-radius: 0.1rem;
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0 0.5rem 1rem #80808080;

  .display,
  .complete-operation {
    width: 100%;
    margin-bottom: 10px;
    padding: 0.5rem;
    border-radius: 0.1rem;
    text-align: right;
    overflow: auto;
  }

  .display {
    height: 8rem;
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .complete-operation {
    height: 3.2rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  .display::-webkit-scrollbar,
  .complete-operation::-webkit-scrollbar {
    display: none;
  }

  .buttons {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  .buttons div:first-child {
    display: flex;
    flex-wrap: wrap;
    gap: 0.1rem;
  }

  .buttons div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    float: left;
    margin-left: .1rem;
  }

  button {
    width: 9.87rem;
    height: 7rem;
    border: none;
    border-radius: 0.1rem;
    background: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  button.operation {
    opacity: 0.4;
    background: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  button:hover {
    filter: brightness(1.2);
  }

  .equals {
    width: 100%;
    margin-top: 0.1rem;
    background: ${({ theme }) => theme.COLORS.ORANGE_100};
  }
`;
