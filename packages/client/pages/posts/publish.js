import styled from 'styled-components'
import Head from 'next/head'
import { Header } from '../../components/header/header'
import ArrowleftIcon from '../../components/icons/arrowleft'
import Rectangle7 from '../../components/icons/rectangle'
import { Container, Main } from '../../components/containers/containers'
import Group25 from '../../components/containers/group25'
import Group38 from '../../components/containers/group38'

const Name = styled.h2`
    /* New Post */
    /* Publish Settings */

    position: absolute;
    width: 140px;
    height: 26px;
    left: 340px;
    top: 6px;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 146%;
    /* or 26px */
    display: flex;
    align-items: center;

    color: #152230;
`

const Rect = styled.div`
    top: 19px;
    left: 90px;
    height: 26px;
    line-height: 146%;
    position: relative;
`

export default function publish(props) {
    return (
        <Container>
            <Head>
                <title> Publish</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <Header>
                    <ArrowleftIcon />
                    <Name>Publish Settings</Name>
                </Header>
                <Rectangle7 />

                <Rect>
                    <Group25 />
                </Rect>
                {/* <div>
                    <Group38 />
                </div> */}
            </Main>
            <div>
                <Group38 />
            </div>
        </Container>
    )
}
