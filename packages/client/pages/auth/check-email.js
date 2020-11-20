// root page
import Head from 'next/head'
import styled from 'styled-components'
import PrimaryButton from '../../components/buttons/button'
import SecondaryButton from '../../components/buttons/secondarybutton'
import InputField from '../../components/forms/inputfield'
import { Logo } from '../../components/logo'
import { Container, LoginMain } from '../../components/containers/containers'
import { signIn, signOut, useSession } from 'next-auth/client'
import Smile from '../../components/icons/smile'

const email = 'andrew@blursocial.com'

const Description = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
`

const MessageWrap = styled.p`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 400px;
    font-size: 16px;
    line-height: 33px;
`

export default function Home(props) {
    const [session] = useSession()
    if (session === null) {
        console.log('you unauth ❌')
    }
    return (
        <>
            <Container>
                <Head>
                    <title>Blur Social | Check Email</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <LoginMain>
                    <Logo color={props.logo} />

                    <Description>
                        1. Create 2. Connect 3. ???? 4 Profit!
                    </Description>

                    <Description>
                        <MessageWrap>
                            We will send a magic link to <br />
                            {email}, Please check your <br />
                            email and click the link to sign in!
                            <br />
                            <br />
                            <Smile />
                        </MessageWrap>
                    </Description>
                </LoginMain>
            </Container>
        </>
    )
}
