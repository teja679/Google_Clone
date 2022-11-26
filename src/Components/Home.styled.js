import { styled } from "@mui/system";

const StyledHeaderContainer = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const StyledHeaderWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 6px;
`;
const StyledHeaderLeft = styled("div")`
display: flex;
justify-content: space-between;
align-items: center;
flex: 0.1;
a {
    display: inline-block;
    padding: 5px;
    margin: 0px 5px;
    color: white;
    text-decoration: none;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;
    &:hover {
        text-decoration: underline;
    }
}
`;
const StyledHeaderRight = styled("div")`
display: flex;
justify-content: space-between;
align-items: center;
flex: 0.2;
a {
    display: inline-block;
    padding: 5px;
    margin: 0px 5px;
    color: white;
    text-decoration: none;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;
    &:hover {
        text-decoration: underline;
    }
}
`;
const StyledLogoContainer = styled("div")`
display: flex;
flex-direction: column;
margin-top: 180px;
flex: 1;
img {
    height: 92px;
    object-fit: contain;
}
`;

export {
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledLogoContainer,
};
