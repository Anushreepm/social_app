import { Secondary } from './buttons.styled'

export default function SecondaryButton(props) {
    return (
        <Secondary onClick={props.onClick} type="button">
            {props.children}
        </Secondary>
    )
}
