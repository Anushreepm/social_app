import styled from 'styled-components'

export const Header = styled.div`
    height: 64px;
    width: auto;
    /* margin: auto; */
    border-bottom: 2px solid ${({ theme }) => theme.underline};
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    background-image: ${({ theme }) => theme.backgroundImage};
    background-position: center;
    background-size: cover;
    color: ${({ theme }) => theme.postText};
    transition: all 0.25s linear;
    @media (min-width: 983px) and (max-width: 1280px) {
    }

    @media (min-width: 711px) and (max-width: 982px) {
    }

    @media (max-width: 710px) {
    }
`
