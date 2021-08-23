import Coments from "../../components/Coments";
import Header from "../../components/Header";
import { FeedContainer, GistIcon, Main, Post, TitleContainer } from "./styles";

function Home() {

    const posts = [{
        author: {
            name: "Fulano",
        },
        created_at: "23/08/2021",
        title: "Este é um post sobre JS",
        description: "JS é uma linguagem de programação muito top",
        image: "https://img.elo7.com.br/product/original/21F8224/paisagem-pintura-em-tela-pantanal-pintura-paisagem-oleo-sobre-tela.jpg",
        gist: "https://github.com.br/",
        categories: [
            "JS", "Back-end", "Express"
        ],
        comments: [
            {
                author: {
                    name: "Ciclano",
                },
                created_at: "23/08/2021",
                description: "Realmente JS é muito top"
            }
        ]
    }]

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

function PostCard({post}) {
    return (
        <Post>
            <header>
                <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-512.png" />
                <div>
                    <strong>
                        por {post.author.name}
                    </strong>
                    <p>
                        {post.created_at}
                    </p>
                </div>
                {post.gist && <GistIcon/>}
            </header>
            <main>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <img src={post.image}/>
                <section>
                    {post.categories.map(category => <p>{category}</p>)}
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                {post.comments.map(coment => <Coments coment={coment}/>)}
            </footer>
        </Post>
    );
}

export default Home;