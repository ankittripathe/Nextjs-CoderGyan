import Link from "next/link";

const page = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      body: "Post Body 1",
    },

    {
      id: 2,
      title: "Post 2",
      body: "Post Body 2",
    },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>

      <div>
        {posts.map((mypost) => {
          return (
            <div key={mypost.id}>

              <Link href={`/blog/${mypost.id}`}>
                <h2>{mypost.title}</h2>
              </Link>
              <p>{mypost.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;