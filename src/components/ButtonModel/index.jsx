import { Container } from "./styles"

const ButtonModel = ({onClick, children, type}) => {
    return (
        <Container type={type} onClick={onClick}>{children}</Container>
    )
}

export default ButtonModel