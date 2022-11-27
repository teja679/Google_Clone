import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import SearchIcon from "@mui/icons-material/Search";
import FeedIcon from "@mui/icons-material/Feed";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

import {
  StyledHeaderLeft,
  StyledHeaderMiddle,
  StyledHeaderRight,
  StyledLogo,
  StyledOptions,
  StyledSearchHeader,
  StyledSearchPageHeaderContainer,
  StyledSubOptionsLeft,
} from "./SearchPage.styled";
import { Avatar, IconButton, Tooltip } from "@mui/material";

function SearchPage() {
  return (
    <div>
      <StyledSearchPageHeaderContainer>
        <StyledSearchHeader>
          <StyledHeaderLeft>
            <Link to="/">
              <StyledLogo
                src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png"
                alt="googleLogo"
              />
            </Link>
            <StyledHeaderMiddle>
              <SearchInput />
              <StyledSubOptionsLeft>
                <StyledOptions>
                  <SearchIcon />
                  <Link to="/all">All</Link>
                </StyledOptions>
                <StyledOptions>
                  <FeedIcon />
                  <Link to="/news">News</Link>
                </StyledOptions>
                <StyledOptions>
                  <LocalOfferIcon />
                  <Link to="/shopping">Shopping</Link>
                </StyledOptions>
                <StyledOptions>
                  <ImageIcon />
                  <Link to="/images">Images</Link>
                </StyledOptions>
                <StyledOptions>
                  <FmdGoodIcon />
                  <Link to="/maps">Maps</Link>
                </StyledOptions>
                <StyledOptions>
                  <MoreVertIcon />
                  <Link to="/more">More</Link>
                </StyledOptions>
              </StyledSubOptionsLeft>
            </StyledHeaderMiddle>
          </StyledHeaderLeft>
          <StyledHeaderRight>
            <StyledOptions>
              <Tooltip title="Settings">
                <IconButton>
                  <SettingsIcon
                  // sx={{ fontSize: "1.5rem", color: "#fff" }}
                  />
                </IconButton>
              </Tooltip>
            </StyledOptions>
            <StyledOptions>
              <Tooltip title="Settings">
                <IconButton>
                  <AppsIcon
                  // sx={{ fontSize: "1.5rem", color: "#fff" }}
                  />
                </IconButton>
              </Tooltip>
            </StyledOptions>
            <StyledOptions>
              <Tooltip title='Google Apps'>
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
            </StyledOptions>
          </StyledHeaderRight>
        </StyledSearchHeader>
        <div>search result</div>
      </StyledSearchPageHeaderContainer>
    </div>
  );
}

export default SearchPage;
