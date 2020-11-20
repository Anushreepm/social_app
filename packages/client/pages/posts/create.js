import { Logo } from '../../components/logo'
import Link from 'next/link'
import Head from 'next/head'
import { SmallLogo } from '../../components/logosmall'
import styled from 'styled-components'
import { Container, Main } from '../../components/containers/containers'
import { Header } from '../../components/header/header'
import SlidersIcon from '../../components/icons/sliders'
import ArrowleftIcon from '../../components/icons/arrowleft'
import Rectangle7 from '../../components/icons/rectangle'
import image1 from '../../components/icons/image1'
import Rectangle6 from '../../components/icons/rectangle6'
import Title from '../../components/containers/title'
import Rectangle8 from '../../components/icons/rectangle8'
import Group from '../../components/containers/group'
import Group51 from '../../components/containers/group51'
import Titlefield from '../../components/forms/titlefield'
// import PostForm from '../../components/forms/postform'
import Submit from '../../components/submit'
import PostList from '../../components/postlist'

// import PF from '../../components/forms/pf'

const Nav = styled.h2`
    /* New Post */

    position: absolute;
    width: 83px;
    height: 26px;
    left: 340px;
    top: 6px;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 17px;
    /* or 26px */
    display: flex;
    align-items: center;

    /* Grey-S-50 */
    color: #0f1822;
`
const publish = styled.h4`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: right;

    color: #6d7885;
`
// const ti = styled.h3`
//     /* Title */

//     position: absolute;
//     width: 360px;
//     height: 36px;
//     left: 500px;
//     top: 78px;

//     font-family: Inter;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 18px;
//     line-height: 146%;
//     /* or 26px */

//     color: #b0b7be;
// `

const content = styled.h2`
    /* Exceeding reaction chamber thermal limit. We have begun power-supply calibration. Force fields have been established on all turbo lifts and crawl-ways. Computer, run a level-two diagnostic on warp-drive systems. Antimatter containment positive. Warp drive within normal parameters. I read an ion trail characteristic of a freighter escape pod. The bomb had a molecular-decay detonator. Detecting some unusual fluctuations in subspace frequencies. */

    position: absolute;
    width: 380px;
    height: 265px;
    left: 10px;
    top: 206px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    /* Grey-100 */
    color: #1e3044;
`
export default function Newpost(props) {
    return (
        <Container>
            <Head>
                <title>Create Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <Header>
                    <ArrowleftIcon />
                    <Nav> New Post </Nav>
                    <SmallLogo />
                    <publish>
                        <Link href="/posts/publish">Publish </Link>
                    </publish>
                    <SlidersIcon />
                </Header>
                <Rectangle7 />
                <br />
                <div>
                    {/* <Titlefield  /> */}
                    <input type="text" />
                </div>
                <br />
                <Rectangle8 />
                <Group />
                <hr />
                <PostList />
                <Submit />
                {/* <PostForm /> */}
                {/* <TextField /> */}
                <hr />
                <Rectangle6 />
            </Main>
        </Container>
    )
}
