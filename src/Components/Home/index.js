import { Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/google_logo.png' 
import {
  StyledHeaderContainer,
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledHeaderWrapper,
  StyledLogoContainer,
} from "./styled";
import AppsIcon from "@mui/icons-material/Apps";
import SearchInput from "../SearchInput";
function Home() {
  return (
    <div>
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
                  fontSize: '0.75rem',
                  borderRadius: "50%",
                  backgroundColor: "#8ab4f8",
                  color: "#fff",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                SYT
              </Avatar>
            </Tooltip>
          </StyledHeaderRight>
        </StyledHeaderWrapper>
        <StyledLogoContainer>
          <img
          src={logo}
            // src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
            alt="google"
          />
          <SearchInput showButtons={true} />
        </StyledLogoContainer>
      </StyledHeaderContainer>
    </div>
  );
}

export default Home;
