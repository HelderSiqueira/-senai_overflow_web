import Coments from "../../components/Coments";
import Header from "../../components/Header";
import { FeedContainer, GistIcon, Main, Post, TitleContainer } from "./styles";

function Home() {

    const posts = [
        {
            titulo: "Este é o nome do usúario 1", descricao: "Esta é a descrição 1"
        },
        {
            titulo: "Este é o nome do usúario 2", descricao: "Esta é a descrição 2"
        },
    ];

    return (
        <>
            <Header/>
            <Main>
                <nav>
                    Profile
                </nav>
                <FeedContainer>
                    {posts.map(post => <PostCard post={post} />)}
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

function PostCard(props) {
    return (
        <Post>
            <header>
                <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-512.png" />
                <div>
                    <strong>
                        {props.post.titulo}
                    </strong>
                    <p>
                        {props.post.descricao}
                    </p>
                </div>
                <GistIcon />
            </header>
            <main>
                <div>
                    <h1>Título</h1>
                    <p>Descrição da postagem bla bla bla</p>
                </div>
                <img src="https://img.elo7.com.br/product/original/21F8224/paisagem-pintura-em-tela-pantanal-pintura-paisagem-oleo-sobre-tela.jpg" />
                <section>
                    <p>Front-End</p>
                    <p>CSS</p>
                    <p>JS</p>
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                <Coments />
            </footer>
        </Post>
    );
}

export default Home;