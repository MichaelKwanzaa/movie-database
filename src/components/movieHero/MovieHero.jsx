import {useEffect, useState} from "react";
import Movie from "../movie/Movie"
import image from '../../images/hero.png';
import "./moviehero.css"

export default function MovieHero() {

    const [data, setData] = useState([]);
    let imageDir = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/4/list/1?api_key=${process.env.REACT_APP_TMDB}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(data => setData(data.results))
        .catch(err => console.log(err));
    }, [])

    const dateSetter = (date) => {
        let d = new Date(date);
        const dateSet = d.toDateString().slice(3);
        return dateSet;
    }
    

    return (
        <div className="movieHero">
            <div className="movieHeroContainer">
                <div className="movies">
                {
                    data.map((i) => {
                        return(
                                <Movie 
                                key={i.id}
                                title={i.title} 
                                image={imageDir + i.poster_path} 
                                vote={Math.floor(i.vote_average)} 
                                desc={i.overview}
                                date={dateSetter(i.release_date)}
                                voteCount={i.vote_count}
                                voteAverage={i.vote_average}
                                lang={i.original_language} />
                            
                        )
                    })
                }
                
               
                </div>
                
            </div>
        </div>
    )
}
