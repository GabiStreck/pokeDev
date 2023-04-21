import Chip from '@mui/material/Chip';
import styled from '@emotion/styled';

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