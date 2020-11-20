import styled from 'styled-components'

export const IconButton = styled.button`
    background: ${({ theme }) => theme.iconButton.background};
    border: none;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    outline: 0;
    transition: 0.3s;
    &:hover {
        background: ${({ theme }) => theme.iconButton.hover};
    }
    &:active {
        background: ${({ theme }) => theme.iconButton.active};
    }
    @media (max-width: 400px) {
        width: 100%;
    }
`
