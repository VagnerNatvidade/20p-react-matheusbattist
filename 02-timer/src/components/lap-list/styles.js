import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  text-align: center;
  margin: 2rem 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin-top: 6px;
    list-style: none;
  }

  li {
    width: 50%;
    padding: 0.8rem 1.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: left;
  }

  ul li:nth-child(odd) {
    background: ${({ theme }) => theme.COLORS.WHITE_100};
  }
`;
