import styled from 'styled-components'

const StyledPath = styled.path`
    stroke: ${({ theme }) => theme.iconColor};
    stroke-width: 1.5;
`
const SendIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M22 2L11 13"
            stroke="#566473"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M22 2L15 22L11 13L2 9L22 2Z"
            stroke="#566473"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
)

export default SendIcon
