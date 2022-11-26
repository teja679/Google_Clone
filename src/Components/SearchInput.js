import { Button, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  StyledButtonContainer,
  StyledInputWrapper,
  StyledMicIcon,
  StyledSearchIcon,
} from "./SearchInput.styled";

function SearchInput({ showButtons = false}) {
  const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/search?${searchTerm}`)
    }
  return (
    <form onSubmit={handleSearch}>
      <StyledInputWrapper>
        <StyledSearchIcon />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Tooltip title="Search by voice">
          <StyledMicIcon />
        </Tooltip>
      </StyledInputWrapper>
      <StyledButtonContainer showButtons={showButtons}>
        <Button variant="outlined" type="submit">
          Google Search
        </Button>
        <Button variant="outlined">I'm feeling lucky</Button>
      </StyledButtonContainer>
    </form>
  );
}

export default SearchInput;
