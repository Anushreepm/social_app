import styled from 'styled-components'
import Head from 'next/head'
import { InputField } from '../components/forms/inputfield'
import { Button } from '../components/buttons/button'
import { Container, Main } from '../components/containers/containers'
import { Toggle } from '../components/buttons/buttons.styled'

function Settings() {
    return (
        <>
            <Container>
                <Main>
                    <Head>
                        <title>Blur Social | Settings</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <a href="#">
                        <h3>➕</h3>
                    </a>
                    <p>Add a cute picture</p>
                </Main>
            </Container>
        </>
    )
}

export default Settings
