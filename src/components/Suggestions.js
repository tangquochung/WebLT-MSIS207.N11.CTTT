import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <Profile
        caption="Followed by thuyan4676 + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by snowee_10 + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by thienannnnnn3012+ 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by hongyen_jamhy + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  );
}

export default Suggestions;
