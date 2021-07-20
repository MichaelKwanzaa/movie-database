import Hero from '../../components/hero/Hero'
import MovieHero from '../../components/movieHero/MovieHero'
import './home.css'
export default function home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <Hero />
                <MovieHero />
            </div>
            
        </div>
    )
}
