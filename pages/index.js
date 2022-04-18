import PostsList from "../features/posts/PostsList";
import AddPostForm from "../features/posts/AddPostForm";

export default function IndexPage() {
  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  );
}
