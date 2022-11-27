import { MoreVert } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import {
  SearchResultsTitle,
  SearchResultWrapper,
  StyledResultsContainer,
} from "./styled";

function SearchResults({ data = {} }) {
  return (
    <div>
      <StyledResultsContainer>
        <Typography variant="p" component="p">
          About {data?.searchInformation?.formattedTotalResults} results{" "}
          {data?.searchInformation?.searchTime} seconds
        </Typography>
        {data?.items.map((item) => (
          <SearchResultWrapper key={item?.cacheId}>
            <div>
              <SearchResultsTitle href={item?.link}>
                {item?.pagemap?.cse_image?.length > 0 &&
                  item?.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item?.pagemap?.cse_image[0]?.src}
                      alt="thumbnail"
                    />
                  )}
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#bdc1c6",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                  }}
                >
                  {item?.displayLink}
                </Typography>
              </SearchResultsTitle>
              <SearchResultsTitle href={item?.link}>
              <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#bdc1c6",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                  }}
                >
                  {item?.title}
                </Typography>
              </SearchResultsTitle>
              <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#bdc1c6",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                  }}
                >
                  {item?.snippet}
                </Typography>
            </div>
            <div>
              <IconButton>
                <MoreVert sx={{ fontSize: "1.5rem", color: "#fff" }} />
              </IconButton>
            </div>
          </SearchResultWrapper>
        ))}
      </StyledResultsContainer>
    </div>
  );
}

export default SearchResults;
