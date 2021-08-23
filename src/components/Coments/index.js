import { createPortal } from "react-dom";
import { Container } from "./styles";

function Coments({coment}) {
    return (
        <Container>
            <header>
                <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-512.png" />
                <strong>
                    Por {coment.author.name}
                </strong>
                <p>
                    em {coment.created_at} ás 08:51
                </p>
            </header>
            <p>{coment.description}</p>
        </Container>
    );
}

export default Coments;