
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Chip } from '@mui/material';

export const ContainerPaper = styled.div((props: { background: string }) => ({
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    gap: 10,
    background: props.background,
    width: '100%',
    borderRadius: 20,
    minWidth: '-webkit-fill-available',
    minHeight: '100%'
}))


export const ChipType = styled(Chip)`
    color: #ffffff;
`

export const ListTypesItem = styled.div`
    display: flex;
    align-items: center; 
    gap: 10px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
`

export const PokemonImage = styled(Image)`
    margin: auto;
`

export const ConteinerLoading = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
`