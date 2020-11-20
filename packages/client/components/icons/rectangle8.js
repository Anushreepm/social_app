import styled from 'styled-components'

const StyledPath = styled.path`
    stroke: ${({ theme }) => theme.iconColor};
    stroke-width: 1.5;
`
const Rectangle8 = () => (
    <svg
        width="720"
        height="2"
        viewBox="0 0 720 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="720" height="2" fill="#EDEEF0" />
    </svg>
)
export default Rectangle8
