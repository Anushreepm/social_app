import styled from 'styled-components'

const StyledPath = styled.path`
    stroke: ${({ theme }) => theme.iconColor};
    stroke-width: 1.5;
`
const ActivityIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <StyledPath
            d="M22 12H18L15 21L9 3L6 12H2"
            stroke="#566473"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
)

export default ActivityIcon
