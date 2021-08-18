import { Container } from "./styles";

function Coments() {
    return (
        <Container>
            <header>
                <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-512.png" />
                <strong>
                    Por Fulano De Tal
                </strong>
                <p>
                    em 18/08/2021 às 08:47
                </p>
            </header>
            <p>Este é o comentário</p>
        </Container>
    );
}

export default Coments;