//Packages
import React,{useState,useEffect} from 'react';
import axios from 'axios';
//Components
import YT from './components/youtube/yt';
import Login from './components/login/login';
import Route from './route';
import Footer from './components/footer/footer';
import VideoStats from './components/youtube/video/videoStats';
import ViewerStats from './components/youtube/viewer/viewerStats';
import SubscriptionStats from './components/youtube/subscription/subscriptionStats';
import TrafficStats from './components/youtube/traffic/trafficStats';

//API credentials
const apiKey = "AIzaSyBnENzjvROf4sgs-hdKu1T9Q3mT344EVKM";
const apiUrl = "https://www.googleapis.com/youtube/v3";
const term = "UCoxIjrCyzbaTnOtZdhwxM7g";

//App component
const App=()=>{
        //States to store information from API
        const [title,setTitle] = useState('NA');
        const [subscribers,setSubscribers] = useState(0);
        const [videocount,setVideoCount] = useState(0);
        const [views,setViewCount] = useState(0);
        const [description,setDescription] = useState('NA');
        const [playlistId,setPlaylistID] = useState(' ');
        const [thumbnail,setThumbnail] = useState(' ');
    
        //To execute as we get data from API
        useEffect(()=>{
            //To get data from API based on channel id(term)
            async function searchSubmit(){
                const url = `${apiUrl}/channels?key=${apiKey}&part=snippet,contentDetails,statistics&id=${term}`;
                const response = await axios.get(url);
                const title = response.data.items[0].snippet.title;
                const description = response.data.items[0].snippet.description;
                const subscriberCount = response.data.items[0].statistics.subscriberCount;
                const videoCount = response.data.items[0].statistics.videoCount;
                const viewCount = response.data.items[0].statistics.viewCount;
                const thumbnail = response.data.items[0].snippet.thumbnails.high.url;
                const playlistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;
                setTitle(title);
                setSubscribers(subscriberCount);
                setVideoCount(videoCount);
                setViewCount(viewCount);
                setDescription(description);
                setPlaylistID(playlistId);
                setThumbnail(thumbnail);
            }
            searchSubmit();
            /*
            setInterval(() => {
                searchSubmit();
            }, 1000); // 10 min
            */
        },[])
    return (
        <div>
            <Route path="/">
                <Login/>
                <Footer/>
            </Route>
            <Route path="/yt">
                <YT         
                    title={title}
                    description={description}
                    subscribers={subscribers}
                    videocount={videocount}
                    viewcount={views}
                    thumbnail={thumbnail}
                    id={playlistId}
                />
            </Route>
            <Route path="/video">
                <VideoStats id={playlistId}/>
            </Route>
            <Route path="/viewer">
                <ViewerStats/>
            </Route>
            <Route path="/subscription">
                <SubscriptionStats/>
            </Route>
            <Route path="/traffic">
                <TrafficStats/>
            </Route>
        </div>
    )
}

export default App;