import styled from 'styled-components'

export const Primary = styled.button`
    background: ${({ theme }) => theme.buttonBackground};
    border-color: ${({ theme }) => theme.buttonBorder};
    color: ${({ theme }) => theme.buttonText};
    cursor: pointer;
    height: 44px;
    width: 380px;
    border-radius: 3px;
    border-width: 2px;
    border-style: solid;
    font-size: 18px;
    font-weight: 500;
    outline: 0;
    margin-top: 20px;
    transition: 0.3s;
    &:hover {
        background: ${({ theme }) => theme.buttonHoverBackground};
    }
    &:active {
        background: ${({ theme }) => theme.buttonActiveBackground};
    }
    @media (max-width: 400px) {
        width: 100%;
    }
`
export const Secondary = styled.button`
    background: ${({ theme }) => theme.secondary.buttonBackground};
    border-color: ${({ theme }) => theme.secondary.buttonBorder};
    color: ${({ theme }) => theme.secondary.buttonText};

    height: 44px;
    width: 380px;
    border-radius: 3px;
    border-width: 2px;
    border-style: solid;
    font-size: 18px;
    font-weight: 500;
    outline: 0;
    margin-top: 20px;
    transition: 0.3s;
    &:hover {
        background: ${({ theme }) => theme.secondary.buttonHoverBackground};
    }
    &:active {
        background: ${({ theme }) => theme.secondary.buttonActiveBackground};
    }
    @media (max-width: 400px) {
        width: 100%;
    }
`

export const Toggle = styled.button`
    background: ${({ theme }) => theme.buttonBackground};
    border-color: ${({ theme }) => theme.buttonBorder};
    color: ${({ theme }) => theme.buttonText};

    height: 44px;
    border-radius: 3px;
    border-width: 2px;
    border-style: solid;
    font-size: 18px;
    font-weight: 500;
    outline: 0;
    margin-top: 20px;
    position: fixed;
    top: 0px;
    right: 20px;
`
