import Head from 'next/head'
import styled from 'styled-components'
import React, { useContext, useState } from 'react'
import InputField from '../components/forms/inputfield'
import { Logo } from '../components/logo'
import { Header } from '../components/header/header'
import { Container, Main, LoginMain } from '../components/containers/containers'
import { getSession, signin, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { SmallLogo } from '../components/logosmall'
import PrimaryButton from '../components/buttons/button'
import SecondaryButton from '../components/buttons/secondarybutton'

// const AuthContext = React.createContext

const Description = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 26px;
`

const Rules = styled.p`
    font-size: 14px;
    color: #566473;
    line-height: 26px;
`
const Form = styled.form`
    background: none;
`

const UserDetails = styled.input`
    background: none;
`
const DatePicker = styled.div`
    border-bottom: solid #edeef0;
`
const Select = styled.select`
    border: none;
    background: none;
`
const Label = styled.label`
    color: #b0b7be;
    font-size: 14px;
`
const UserName = styled.div``
const UserNameInput = styled.input`
    background: none;
    border: none;
    width: 100%;
    border-bottom: 1px solid #b0b7be;
    height: 30px;
    &:focus {
        outline: none;
        border-bottom: 1px solid #b0b7be;
    }
`

const HeadWrap = styled.div`
    position: absolute;
    left: 47%;
`

const ContentWrap = styled.div`
    padding: 0 16px;
`
const ReadAllBtn = styled.a`
    font-weight: 500;
    font-size: 16px;
`
const RulesHeading = styled.p`
    font-size: 16px;
    font-weight: 500;
`
const Heading = styled.h3`
    text-align: left;
    font-size: 18px;
    margin-right: 45vw;
`

const RulesHeadWrap = styled.div`
    line-height: 5px;
`
const ButtonWrap = styled.div``
export default function onboard(props) {
    const [session, loading] = useSession()
    if (typeof window !== 'undefined' && loading) return null
    const router = useRouter()
    if (session === null) {
        router.push('/')
        return false
    }

    return (
        <>
            <Container>
                <Head>
                    <title>Blur Social | Onboarding</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Main>
                    <Header>
                        <Heading>Terms</Heading>
                        <HeadWrap>
                            <SmallLogo />
                        </HeadWrap>
                    </Header>
                    <ContentWrap>
                        <Form>
                            <UserName>
                                <Label>User name</Label> <br />
                                <UserNameInput></UserNameInput>
                            </UserName>
                            <br />
                            <DatePicker>
                                <Label>Birthdate</Label>
                                <br />
                                <Select name="DOBMonth">
                                    <option>January</option>
                                    <option value="Jan">January</option>
                                    <option value="Feb">February</option>
                                    <option value="Mar">March</option>
                                    <option value="Apr">April</option>
                                    <option value="May">May</option>
                                    <option value="Jun">June</option>
                                    <option value="Jul">July</option>
                                    <option value="Aug">August</option>
                                    <option value="Sep">September</option>
                                    <option value="Oct">October</option>
                                    <option value="Nov">November</option>
                                    <option value="Dec">December</option>
                                </Select>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Select name="DOBDay">
                                    <option>29</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </Select>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Select name="DOBYear">
                                    <option>1987</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                </Select>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </DatePicker>
                        </Form>

                        <Rules>
                            <RulesHeading>
                                Before you get started please read our terms of
                                service.
                            </RulesHeading>
                            <RulesHeadWrap>
                                <p>Rule #1</p>
                                <h3>Love Each Other</h3>
                            </RulesHeadWrap>
                            <p>
                                Blur as a platform fiercely promotes free
                                thought and the right to express yourself.
                                However we do not want to created a platform or
                                a community that supports hate or infringes upon
                                anyones human rights. As such Blur reserves to
                                right to remove any content that is hateful or
                                harmful to anyone.
                            </p>
                            <RulesHeadWrap>
                                <p>Rule #2</p>
                                <h3>Don’t Steal Content</h3>
                            </RulesHeadWrap>
                            <p>
                                Post only work that you have created or have
                                explicit permission to share on your page. Do
                                share content, users may share content created
                                by other users on Blur, or from creators not on
                                Blur. All shared content must have a source
                                citation, a link back to the original creators
                                preferred page. For content originally posted on
                                Blur the link will be automatically generated,
                                for content from outside Blur users must include
                                a link to the original creators preferred page.
                                Any content that does not adhere to this rule
                                will go through a resolution process. Just be
                                nice don’t steal but do promote your favorite
                                creators!
                            </p>
                            <ReadAllBtn>
                                <Link href="#">Read all terms →</Link>
                            </ReadAllBtn>
                        </Rules>
                        <ButtonWrap>
                            <Link href="/feed">
                                <PrimaryButton>I Totally Agree</PrimaryButton>
                            </Link>
                        </ButtonWrap>
                    </ContentWrap>
                </Main>
            </Container>
        </>
    )
}
