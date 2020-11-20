import { Toggle } from './buttons.styled'

export default function ToggleButton(props) {
    return (
        <Toggle onClick={props.onClick} type="button">
            {props.children}
        </Toggle>
    )
}
