import { tweet } from "@/data/tweeter";
import TweetItem from "../teewt/TweetItem";


export const ProfileFeed = () => {
    return (
        <div>
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
        </div>
    );
}