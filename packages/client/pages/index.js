// root page
import Head from 'next/head'
import styled from 'styled-components'
import PrimaryButton from '../components/buttons/button'
import SecondaryButton from '../components/buttons/secondarybutton'
import InputField from '../components/forms/inputfield'
import { Logo } from '../components/logo'
import { Container, LoginMain } from '../components/containers/containers'
import { signIn, signOut, useSession } from 'next-auth/client'
import { request } from 'graphql-request'
import SendIcon from '../components/icons/send'

const fetcher = (query) => request('http://localhost:5000', query)
import useSWR from 'swr'
import { useRouter } from 'next/router'

const Description = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
`

export default function Home(props) {
    const router = useRouter()
    const { data, error } = useSWR(
        `{
            getPosts {
                id
                body
                username
              }
        }`,
        fetcher
    )
    const [session] = useSession()
    return (
        <>
            <Container>
                <Head>
                    <title>Blur Social | Login</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <LoginMain>
                    <Logo color={props.logo} />

                    <Description>
                        1. Create 2. Connect 3. ???? 4 Profit!
                    </Description>

                    <InputField>Email</InputField>
                    {!session ? (
                        <PrimaryButton
                            onClick={() =>
                                signIn('github', {
                                    callbackUrl:
                                        'http://localhost:3000/onboard',
                                })
                            }
                        >
                            Login
                        </PrimaryButton>
                    ) : (
                        <>
                            <SecondaryButton
                                onClick={signOut({
                                    callbackUrl: '/',
                                })}
                            >
                                Sign Out
                            </SecondaryButton>
                        </>
                    )}

                    <Description>
                        <SendIcon />
                        &nbsp; We will send you a magic link to sign in with!
                    </Description>
                </LoginMain>
            </Container>
        </>
    )
}
