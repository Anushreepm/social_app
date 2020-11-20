import styled from 'styled-components'
import { IconButton } from '../buttons/iconbutton'
import HomeIcon from '../icons/home'
import ActivityIcon from '../icons/activity'
import FeatherIcon from '../icons/feather'
import HeartIcon from '../icons/heart'
import ProfileIcon from '../icons/profile'

const StyledMenu = styled.div`
    height: 64px;
    width: auto;
    border-bottom: 2px solid ${({ theme }) => theme.underline};
    padding: 0 60px;
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.postText};
    transition: all 0.25s linear;
    @media (min-width: 983px) and (max-width: 1280px) {
        padding: 0 40px;
    }

    @media (min-width: 711px) and (max-width: 982px) {
        padding: 0 40px;
    }

    @media (max-width: 710px) {
        padding: 0 20px;
        margin: 0;
        border-bottom: 0;
        border-top: 2px solid ${({ theme }) => theme.underline};
        position: fixed;
        bottom: 0px;
        width: 100%;
    }
`
export const Menu = (props) => {
    return (
        <StyledMenu>
            <IconButton>
                <HomeIcon />
            </IconButton>

            <IconButton>
                <ActivityIcon />
            </IconButton>

            <IconButton>
                <FeatherIcon />
            </IconButton>

            <IconButton>
                <HeartIcon />
            </IconButton>

            <IconButton>
                <ProfileIcon />
            </IconButton>
        </StyledMenu>
    )
}
