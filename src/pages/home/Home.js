import { View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import { Icon } from 'react-native-elements';
import BigCarousel from '../../components/BigCarousel';
import SmallCarousel from '../../components/SmallCarousel';

// import BigCarousel from '../../components/BigCarousel';

export default function Home() {
  return (
    <View style={styles.view}>
      <header style={styles.container}>
        <div style={styles.headerContainer}>
          <div style={styles.circleHamburguer}>
            <Icon
                name='menu'
                type='material'
                color='#000'
                containerStyle={styles.iconContainer}
                underlayColor='transparent'
            />
            <Image
                style={styles.circleHamb}
            />
          </div>
          
          <Image
              style={styles.circleImage}
              source={{
              uri: 'https://www.bv.com.br/site/resources/images/tipos-de-carro.jpg',
              }}
          />
          <Image
              style={styles.circleImage}
              source={{
              uri: 'https://www.bv.com.br/site/resources/images/tipos-de-carro.jpg',
              }}
          />
        </div>     
      </header>
      <div style={styles.search}>
        <div style={styles.inputIconDiv}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
          />
          <TouchableOpacity
            /* funcao disparada onPress={handlePress} */
            style={styles.searchIcon}
          >
            <Icon style={styles.iconLupa} name="search" size={20} color="#000"/>
          </TouchableOpacity>
        </div>
      </div>
      <div style={styles.filmStatus}>
        <button style={styles.filmStatusBtn}>Em cartaz</button>
        <button style={styles.filmStatusBtn}>Populares</button>
        <button style={styles.filmStatusBtn}>Estreias</button>
        <button style={styles.filmStatusBtn}>Em breve</button>
      </div>  
      <BigCarousel />
      <h3>Nossas sugestões</h3>
      <SmallCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    width: '100%',
    backgroundColor: '#E6E6E6',
  },
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    
  },
  headerContainer:{
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  circleImage:{
    marginBottom: 10,
    marginTop: 5,
    marginRight: 5,
    width: 30,
    height: 30,
    borderRadius: 50,
  },

  circleHamburguer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 30,
    height: 30,
    marginBottom: 5,
    marginLeft: 5,
  },
  /* circleHamb:{ 
  },
  iconContainer:{ 
  },
  */
  search:{
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  inputIconDiv:{
    backgroundColor: 'green',
    width: 310,
    height: 30,
    borderRadius: 35,
    padding: 8,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searchInput:{
    color: 'white',
   
  },
  searchIcon:{
    backgroundColor: '#fff',
  },
  iconLupa:{
    width: 30,
    height: 30
  },
  filmStatus:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  filmStatusBtn:{
    backgroundColor: '#E6E6E6',
    border: 'none',
  }

});