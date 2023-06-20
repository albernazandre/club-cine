import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';

const filmsURL = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&region=BR&api_key=1c3e85d1944269d059aaa9889984c577';
const imgUrl = 'https://image.tmdb.org/t/p/w500/';

export default function SmallCarousel() {

    const [filmCard, setFilmCard] = useState([]);

    useEffect(() => {
        const fetchFilm = async () => {
            const response = await fetch(filmsURL);
            const data = await response.json();
            setFilmCard(data.results);
        };
        fetchFilm(filmCard);
      }, []);
      // console.log(filmCard);

    return (
        <div style={styles.carousel}>
            <div style={styles.filmCard}>
                {
                    filmCard.map((film, i) =>
                        <div key={ i } style={styles.card}>
                            <img
                                src={ imgUrl + film.poster_path }
                                alt=""
                                style={styles.cardImg}
                            />
                          <h4 style={styles.filmTitle}>
                                {film.original_title}
                            </h4>
                            <p style={styles.voteAverage}>
                                {'Nota: ' + film.vote_average}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    carousel:{
        overflowX: 'scroll',
        width: '100%',
    },
    filmCard:{
        display: 'flex',
        width: '150%',

    },
    card:{
        flexShrink: 0,
        width: '30%',
    },
    cardImg:{
        height: '90%',
        padding: 3,
        width: 170,
        borderRadius: 20,
    },
    filmTitle:{
        textAlign: 'center',
        marginTop: -6,
        fontSize: 12,
    },
    voteAverage:{
        textAlign: 'center',
        marginTop: -17,
        fontSize: 8,
        color: '#979797'
    }
    
  
});