import TweetItem from "@/components/teewt/TweetItem";
import Tweetpost from "@/components/teewt/Tweetpost";
import { GeneralHeader } from "@/components/ui/general-header";
import { tweet } from "@/data/tweeter";



export default function Page() {
    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="font-bold text-lg">Voltar</div>
            </GeneralHeader>
            <div className="border-t-2 border-gray-900">
                <TweetItem tweet={tweet} />

                <div className="border-y-8 border-gray-900">
                    <Tweetpost />
                </div>

                <TweetItem tweet={tweet} hideComments />
                <TweetItem tweet={tweet} hideComments />
                <TweetItem tweet={tweet} hideComments />
            </div>
        </div>
    );
}