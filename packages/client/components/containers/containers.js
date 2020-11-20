import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.postText};
    transition: all 0.25s linear;
    @media (min-width: 983px) and (max-width: 1280px) {
        padding: 0 278px;
    }

    @media (min-width: 711px) and (max-width: 982px) {
        padding-right: 278px;
    }

    @media (max-width: 710px) {
        padding: 0px;
    }
`

export const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    border-left: 2px solid ${({ theme }) => theme.underline};
    border-right: 2px solid ${({ theme }) => theme.underline};
    width: 724px;
    @media (min-width: 983px) and (max-width: 1280px) {
        width: 100%;
    }

    @media (min-width: 711px) and (max-width: 982px) {
        width: 100%;
    }

    @media (max-width: 710px) {
        border: none;
        width: 100%;
    }
`

export const LoginMain = styled.div`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 2px solid ${({ theme }) => theme.underline};
    border-right: 2px solid ${({ theme }) => theme.underline};
    width: 724px;
    background-image: ${({ theme }) => theme.backgroundImage};
    background-position: center;
    background-size: cover;
    @media (min-width: 983px) and (max-width: 1280px) {
        width: 100%;
    }

    @media (min-width: 711px) and (max-width: 982px) {
        width: 100%;
    }

    @media (max-width: 710px) {
        border: none;
        width: 100%;
        padding: 20px;
    }
`
