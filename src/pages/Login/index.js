import { Container, FormContainer } from "./styles";
import Input from "../../components/Input";

function Login (){
    return (
        <Container>
            <FormContainer>
                <h1>Bem-vindo ao</h1>
                <h1>SENAI-Overflow</h1>
                <Input label="E-mail" id="email" />
                <Input label="Senha" id="senha" />
            </FormContainer>
        </Container>
    );
}
export default Login;