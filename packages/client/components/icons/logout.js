import styled from 'styled-components'

const StyledPath = styled.path`
    stroke: ${({ theme }) => theme.iconColor};
    stroke-width: 1.5;
`
const LogoutIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <StyledPath
            d="M15 3.00009H19C19.5304 3.00009 20.0391 3.21081 20.4142 3.58588C20.7893 3.96095 21 4.46966 21 5.00009L21 19.0001C21 19.5305 20.7893 20.0392 20.4142 20.4143C20.0391 20.7894 19.5304 21.0001 19 21.0001H15"
            stroke="#566473"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <StyledPath
            d="M7.99997 7.00009L2.99997 12.0001L7.99997 17.0001"
            stroke="#566473"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <StyledPath
            d="M2.99997 12.0001L15 12.0001"
            stroke="#566473"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
)

export default LogoutIcon
