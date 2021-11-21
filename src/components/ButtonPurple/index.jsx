import { Container } from "./styles"

const ButtonPurple = ({onClick, children, type}) => {
    return (
        <Container type={type} onClick={onClick}>{children}</Container>
    )
}

export default ButtonPurple