import StarIcon from '@material-ui/icons/Star';
import {Close} from "@material-ui/icons";
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import './movie.css'
export default function Movie({title, image, vote, desc, date, voteCount, voteAverage, lang}) {

    return (
        <div className="movie">         
            <div className="movieImageContainer">
                <Popup trigger={<img src={image} alt="" className="movieImage" style={{cursor: 'pointer'}}/>} 
                position="right center"
                modal
                nested
                >{close => (
                    <>
                        <div className="modalTop">
                        <div className="modalTitle">{title}</div>
                        <Close className="close" onClick={close} />
                   </div>
                  
                   <div className="modalContainer">
                       <div className="modalLeftImage">
                           <img src={image} alt="" className="modalMovieImage" />
                       </div>
                       <div className="modalRightInformation">
                           <div className="desc">
                               <h3 className="modalDescTitle">Description</h3>
                               <p className="modalMovieDesc">{desc}</p>
                           </div>
                           <div className="rating">
                               <h3 className="modalRatingTitle">Rating</h3>
                               <p className="modalMovieRating">{Array(vote).fill(<StarIcon className="star" />)} - {vote}/10</p>
                               
                           </div>
                           <div className="ratingInfo">
                                   <h3 className="modalVoteCountTitle">Vote Count</h3>
                                   <p className="modelVoteCount">{voteCount}</p>
                               </div>
                           <div className="ratingInfo">
                                   <h3 className="modalAverageTitle">Vote Average</h3>
                                   <p className="modelAverage">{voteAverage}</p>
                           </div>
                           <div className="ratingInfo">
                               <h3 className="modalLang">Language</h3>
                               <p>{lang}</p>
                           </div>
                           <div className="ratingInfo">
                               <h3 className="modalRelease">Released</h3>
                               <p className="release">{date}</p>
                           </div>

                           
                       </div>
                   </div>
                   </>
                )}
                   
                </Popup>
            </div>
            <div className="movieTitleContainer">
                <span className="movieTitle">{title}</span>
            </div>
            <div className="movieVoteContainer">
                {Array(vote).fill(<StarIcon className="star" />)}
                <span className="movieVoteTitle">{vote}/10</span>
            </div>
            <div className="movieReleaseDate">
                <span className="releaseDate">Released: {date} </span>
            </div>
        </div>
    )
}
