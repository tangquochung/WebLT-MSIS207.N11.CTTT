import "../styles/NewsFeed.scss";
import image from "../images/maytinh.jpg"
import images from "../images/flower.jpg"
import imagess from "../images/webdev.jpg"
import Stories from "./Stories";
import Post from "./Post";

function NewsFeed() {
  const commentsOne = [
    {
      user: "thienannnnnn3012",
      text: "Xinh quá ta 🔥",
      id: 1,
    },
    {
      user: "_nh.tmai_",
      text: "Tuyệt vời",
      id: 2,
    },
    {
      user: "thuyan4676",
      text: "Xịnnnnn!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "loan_ltl_",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="NewsFeed">
      <Stories />

      <Post
        accountName="qu.hungg"
        storyBorder={true}
        image={image}
        comments={commentsOne}
        likedByText="loan_ltl_"
        likedByNumber={89}
        hours={16}
      />
      <Post
        accountName="mapvault"
        image={images}
        comments={commentsTwo}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Post
        accountName="dadatlacak"
        storyBorder={true}
        image={imagess}
        comments={commentsThree}
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      />
    </div>
  );
}

export default NewsFeed;
