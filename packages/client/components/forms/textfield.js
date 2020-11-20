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
const Label = styled.label`
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    padding: 4px 0;
    color: #b0b7be;
    background: #fafbfb;
`

export default function TextField() {
    return (
        <Container>
            <Input />
        </Container>
    )
}
