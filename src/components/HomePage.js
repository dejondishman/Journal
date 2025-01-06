import HomeCard from "./HomeCard";

const HomePage = () => {
  const posts = [
    {
      id: 1,
      image: "/assets/profile.jpg", // Correct path
      title: "Post 1",
      description: "This is the description for post 1.",
      username: "User1",
    },
    {
      id: 2,
      image: "/assets/purseWine.jpg", // Correct path
      title: "Post 2",
      description: "This is the description for post 2.",
      username: "User2",
    },
    {
      id: 3,
      image: "/assets/vinyl.jpg", // Correct path
      title: "Post 3",
      description: "This is the description for post 3.",
      username: "User3",
    },
    {
      id: 4,
      image: "/assets/profile.jpg", // Correct path
      title: "Post 4",
      description: "This is the description for post 4.",
      username: "User4",
    },
  ];
  console.log(posts, "theese are the posts");
  return (
    <div>
      {posts.map((post) => (
        <HomeCard
          key={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
          username={post.username}
        />
      ))}
      <div className="fixed bottom-20 right-4 z-10">
        <button className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600">
          Create
        </button>
      </div>
    </div>
  );
};

export default HomePage;
