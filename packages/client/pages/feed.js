import Link from 'next/link'
import { Container, Main } from '../components/containers/containers'
import { Header } from '../components/header/header'
import LogoutIcon from '../components/icons/logout'
import SettingsIcon from '../components/icons/settings'
import { SmallLogo } from '../components/logosmall'
import useSWR from 'swr'
import { request } from 'graphql-request'
import { Menu } from '../components/menu/menu'
import Settings from './settings'

export default function Home(props) {
    const fetcher = (query) => request('http://localhost:5000', query)
    const { data, error } = useSWR(
        `
    {
        getPosts {
          id
          body
          username
        }
      }
    `,
        fetcher
    )
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    // TODO: for anu to display this data on pg instead of console
    console.log(data)
    return (
        <Container>
            <Main>
                <Header>
                    <Link href="/">
                        <a>
                            <LogoutIcon />
                        </a>
                    </Link>
                    <SmallLogo />
                    <Link href="./settings">
                        <a>
                            <SettingsIcon />
                        </a>
                    </Link>
                </Header>
                <Menu />
            </Main>
        </Container>
    )
}
