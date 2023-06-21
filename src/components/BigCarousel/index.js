import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions } from 'react-native';

// const Database = require('../../../api/[THEMOVIEDATABASE] API CINEMA.postman_collection.json')


const filmsURL = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&region=BR&api_key=1c3e85d1944269d059aaa9889984c577';
const imgUrl = 'https://image.tmdb.org/t/p/w500/';

export default function BigCarousel() {

    const [filmCard, setFilmCard] = useState([]);

    useEffect(() => {
        const fetchFilm = async () => {
            const response = await fetch(filmsURL, {method: 'GET'});
            const data = await response.json();
            setFilmCard(data.results);
        };
        fetchFilm(filmCard);
      }, []);
      // console.log(filmCard);

    // Funcao de animacao de itens do Carrossel ao serem pressionado
      

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
                                    {film.title}
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
        width: '100vw',
        height: '90vh',
    },
    filmCard:{
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    card:{
        flexShrink: 0,
        paddingLeft: 3,
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardImg:{
        height: '77%',
        width: '85%',
        borderRadius: 20,
    },
    filmTitle:{
        marginTop: 0,
        fontSize: 10,
        width: '10%',
    },
    voteAverage:{
        marginTop: -17,
        fontSize: 10,
        color: '#979797',
        width: '10%'
    }
    
  
});