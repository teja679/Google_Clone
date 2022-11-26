import { Tooltip } from '@mui/material'
import React from 'react'
import { StyledInputWrapper, StyledMicIcon, StyledSearchIcon } from './SearchInput.styled'

function SearchInput() {
  return (
    <form>
        <StyledInputWrapper>
            <StyledSearchIcon>
                <input />
                <Tooltip title='Search by voice'>
                    {/* <SearchMicIcon/> */}
                </Tooltip>
            </StyledSearchIcon>
            <StyledMicIcon>

            </StyledMicIcon>
        </StyledInputWrapper>
    </form>
  )
}

export default SearchInput