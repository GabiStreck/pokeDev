import { Box, Chip, Stack } from '@mui/material';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

interface PropsChipTypeSearch {
    background?: string;
}

export const ChipTypeSearch = styled(Chip)((props: PropsChipTypeSearch) => `
    color: #ffffff;
    background: ${props.background || 'silver'};
    margin: 2px;
`)


export const ContainerSearchInput = styled.div`
     display: flex ;
     align-items: center ;
     gap: 10px;
`

export const SearchStackContainer = styled(Stack)(({ theme }: { theme: Theme }) => `  
    ${theme.breakpoints.down('md')} {
      padding: 0;
    }  
`);

export const SearchBoxContainer = styled(Box)(({ theme }: { theme: Theme }) => `  
    ${theme.breakpoints.down('sm')} {
      min-width: 100%;
    }  
`);


