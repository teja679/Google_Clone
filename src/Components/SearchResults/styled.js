import { styled } from "@mui/system";

const StyledResultsContainer = styled("div")`
  max-width: 650px;
  margin-left: 107px;
  margin-bottom: 100px;
  top: 160px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overfolw-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const SearchResultWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0;
`;
const SearchResultsTitle = styled("a")`
  text-decoration: none;
  img {
    object-fit: contain;
    height: 36px;
    width: 36px;
    margin-right: 10px;
  }
  &:hover {
    text-decoration: underline;
    color: #bdc1c6;
  }
`;

export { SearchResultsTitle, StyledResultsContainer, SearchResultWrapper };

// styles
// display: flex;
// flex-direction: column;
// height: 100vh;
// display: flex;
// justify-content: space-between;
// align-items: center;
// width: 100vw;
// // height: 140px;
// z-index: 1;
// position: sticky;
// border-bottom: 1px solid rgb(95, 99, 104);
// background-color: ${({ theme }) => theme.body.darkColor};
