import { Primary } from './buttons.styled'

export default function PrimaryButton(props) {
    return (
        <Primary onClick={props.onClick} type="button">
            {props.children}
        </Primary>
    )
}
