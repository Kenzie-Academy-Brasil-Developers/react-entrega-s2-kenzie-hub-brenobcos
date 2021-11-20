import { Container } from "./styles"

const ButtonPurple = ({onClick, children}) => {
    return (
        <Container onClick={onClick}>{children}</Container>
    )
}

export default ButtonPurple