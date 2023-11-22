import { Header } from "./Header.tsx";
import { Sidebar } from "./Sidebar.tsx";
import { Post } from "./Post.tsx";

import "./global.css";

import styles from "./App.module.css";

interface postProps {
  id: number;
  author: {
      avatarUrl: string;
      name: string;
      role: string;
  };
  content: {
      type: "paragraph" | "link";
      content: string;
  }[];
  publishedAt: Date;
}

const posts: postProps[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://media.licdn.com/dms/image/C4E03AQE2AmnSI0hM0Q/profile-displayphoto-shrink_400_400/0/1632096337874?e=1705536000&v=beta&t=l7AixMgnXItY48lN17Z54yhINjRT3H_9A3ZONYtJ5oA",
      name: "Marcela Rocha",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hello everyone! 👋" },
      {
        type: "paragraph",
        content:
          "Just uploaded another project to my portfolio. It's a project I worked on during the NLW Return, a Rocketseat event. The project is called DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-11-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://img.freepik.com/free-photo/smiley-woman-couch_23-2148542130.jpg?w=1380&t=st=1700680274~exp=1700680874~hmac=212f54ce3c2d648b2a9a1e34169ad0b7d8198b9b9c344be58e83d0445788b638",
      name: "Mary Abbot",
      role: "UX designer",
    },
    content: [
      { type: "paragraph", content: "Hey folks!" },
      {
        type: "paragraph",
        content:
          "I finally completed my new website/portfolio. It was a huge challenge to create the entire design and code it from scratch, but I made it 💪🏻",
      },
      { type: "link", content: "devonlane.design" },
    ],
    publishedAt: new Date("2023-11-10 14:00:00"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt} id={0}               />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
