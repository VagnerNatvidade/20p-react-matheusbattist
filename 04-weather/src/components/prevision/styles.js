import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h4 {
    text-align: center;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  ul {
    margin-top: 2rem;
    padding: 0;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      margin-bottom: 5px;
      background-color: #${({ theme }) => theme.COLORS.WHITE_100};
      border-radius: 3px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      color: ${({ theme }) => theme.COLORS.GRAY_300};

      img {
        margin-right: 10px;
      }
    }
  }
`;
