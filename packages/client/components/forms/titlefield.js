import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 720px;
`

const Input = styled.input`
    border: solid #edeef0;
    border-width: 0 0 2px 0;
    background: #fafbfb;
    outline: 0;
    height: 37px;
    font-size: 16px;
    color: #1b2b3d;
`

const ti = styled.h3`
    /* Title */

    position: absolute;
    width: 360px;
    height: 36px;
    left: 500px;
    top: 78px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 146%;
    /* or 26px */

    color: #b0b7be;
`

const Titlefield = function TitleField() {
    const [Title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Title)
        setTitle('')
    }
    return (
        <Container>
            <div className="form-title-container"></div>
            <ti>
                <Input
                    type="text"
                    required
                    placeholder="Title"
                    value={Title}
                    maxLength="100"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </ti>
        </Container>
    )
}

export default Titlefield
