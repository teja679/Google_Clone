import { Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  StyledHeaderContainer,
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledHeaderWrapper,
  StyledLogoContainer,
} from "./Home.styled";
import AppsIcon from "@mui/icons-material/Apps";
import SearchInput from "./SearchInput";
function Home() {
  return (
    <div>
      Home
      <StyledHeaderContainer>
        <StyledHeaderWrapper>
          <StyledHeaderLeft>
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </StyledHeaderLeft>
          <StyledHeaderRight>
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <Tooltip title="Google Apps">
              <IconButton>
                <AppsIcon sx={{ fontSize: "1.5rem", color: "#fff" }} />
              </IconButton>
            </Tooltip>
            <Tooltip>
              <Avatar
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#8ab4f8",
                  color: "#fff",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                JP
              </Avatar>
            </Tooltip>
          </StyledHeaderRight>
        </StyledHeaderWrapper>
        <StyledLogoContainer>
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png"
            alt="google"
          />
          <SearchInput />
        </StyledLogoContainer>
      </StyledHeaderContainer>
    </div>
  );
}

export default Home;
