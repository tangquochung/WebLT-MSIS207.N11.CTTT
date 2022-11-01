import "../styles/Post.scss";
import Profile from "./Profile";
import { ReactComponent as PostButton } from "../images/PostButton.svg";
import PostMenu from "./PostMenu";
import Comment from "./Comment";

function Post(props) {
  const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours,
  } = props;

  return (
    <div className="Post">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <PostButton className="PostButton" />
      </header>
      <img className="PostImage" src={image} alt="Post content" />
      <PostMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">Post</div>
      </div>
    </div>
  );
}

export default Post;
