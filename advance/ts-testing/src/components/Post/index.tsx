import React, { useEffect } from "react";

export interface PostProps {
  id: number;
}

export interface PostData {
  id: number;
  title: string;
  body: string;
}

export default function Post({ id }: PostProps) {
  const [post, setPost] = React.useState<PostData | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <h1>Post</h1>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
    </div>
  );
}

async function foo() {}
