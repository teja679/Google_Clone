import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "../SearchInput";
import SearchIcon from "@mui/icons-material/Search";
import FeedIcon from "@mui/icons-material/Feed";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import logo from '../../assets/google_logo.png'
import {
  StyledHeaderLeft,
  StyledHeaderMiddle,
  StyledHeaderRight,
  StyledLogo,
  StyledOptions,
  StyledSearchHeader,
  StyledSearchPageHeaderContainer,
  StyledSubOptionsLeft,
} from "./styled";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import SearchResults from "../SearchResults";
import useSearch from "../../hooks/useSearch";
function SearchPage() {
  const { search } = useLocation();
  const searchTerm = search?.split("?")[1];
  const { data } = useSearch(searchTerm);
  return (
    <div>
      <StyledSearchPageHeaderContainer>
        <StyledSearchHeader>
          <StyledHeaderLeft>
            <Link to="/">
              <StyledLogo
              src={logo}
                // src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
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
              <Tooltip title="Google Apps">
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
            </StyledOptions>
          </StyledHeaderRight>
        </StyledSearchHeader>
        {data ? <SearchResults data={data} /> : <div>No data available</div>}
      </StyledSearchPageHeaderContainer>
    </div>
  );
}

export default SearchPage;
