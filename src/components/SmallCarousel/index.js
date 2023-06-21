import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, Pressable, Animated } from 'react-native';

// const Database = require('../../../api/[THEMOVIEDATABASE] API CINEMA.postman_collection.json')


const filmsURL = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&region=BR&api_key=1c3e85d1944269d059aaa9889984c577';
const imgUrl = 'https://image.tmdb.org/t/p/w500/';

export default function SmallCarousel() {

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const cardWidth = windowWidth * 0.40;
const cardHeight = windowHeight * 0.30;
const titleWidth = windowWidth * 0.045;
// const textWidth = windowWidth * 0.02;


const styles = StyleSheet.create({
    carousel:{
        overflow: 'scroll',
        width: '100%',
        height: '100%',
        padding: 0,
    },
    filmCard:{
        display: 'flex',
        width: '100%',

    },
    card:{
        flexShrink: 0,
        margin: 3,
        height: cardHeight,
        width: cardWidth,
    },
    cardImg:{
        height: cardHeight,
        width: cardWidth,
        borderRadius: 20,
    },
    filmTitle:{
        textAlign: 'center',
        marginTop: 0,
        fontSize: titleWidth,
    },
    voteAverage:{
        textAlign: 'center',
        marginTop: -17,
        fontSize: 10,
        color: '#979797'
    }
    
  
});