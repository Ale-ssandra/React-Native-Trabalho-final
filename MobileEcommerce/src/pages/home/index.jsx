import { Text, StatusBar, StyleSheet, ScrollView, View, Image, FlatList, SafeAreaView, ImageBackground } from "react-native"
import React from "react"
import CardHome from "../../components/CardHome/cardHome"
import { CardCategoria } from "../../components/CardCategoria"
import Icon from 'react-native-vector-icons/MaterialIcons';

// import {useState, useEffect} from 'react';

// import {getTasks} from '../../services/tasksProduto';
// import Card from '../../components/Card';

//     const [tasks, setTasks] = useState([]);
//     const fetchData = async () => {
//         const taskList = await getTasks();
//         setTasks(taskList);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

export const Home = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>Home</Text>
                <Text style={styles.texto}>Logo</Text>
                <Text style={styles.texto}>Loja</Text>
            </View>

            <ImageBackground
                imageStyle={{opacity: 0.08}}
                source={require('../../images/texturaFundo.png')}
                style={styles.imageBackground}>
                
                <View style={styles.banner}>
                    <View style={{flexDirection: 'column', justifyContent: 'center', padding:12}}>
                        <Text style={styles.textoBanner}>Ganhe</Text>
                        <Text style={styles.textoBanner}>até 20% off</Text>
                    </View>
                    <Image style={{width: 120, height:120}}source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigbXuQd0qPA4daOcE_WJmFSVY_56PqygHX-mDkgrwRTZJT0rxmjg9fq912j_Bgp-cM8A&usqp=CAU'}}/>
                </View>
            
            <View>
                <CardCategoria/>
            </View>
            <View style={styles.containerCards}>
                <View style={styles.card}>
                    <Image style={styles.imagem}source={{uri:'https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger-thumbnail.png'}}/>
                    <Text style={styles.textoNome}>Nome Produto</Text>
                    <View style={{flexDirection: 'row', justifyContent:'space-around', padding:10}}>
                        <Text style={styles.textoValor}>R$15,00</Text>
                        <Icon name='shopping-cart' size={30} color={'#EE6B22'}/> 
                    </View>
                </View>
            </View>




            </ImageBackground>
        </View>

    )
    }


    //         <ScrollView style={styles.container}>
               

    //             <SafeAreaView style={{marginBottom: 10}}>
    //                 <FlatList
    //                     data={data}
    //                     keyExtractor={(item) => String(item)}
    //                     showsHorizontalScrollIndicator ={false}
    //                     horizontal
    //                     renderItem={({item}) => (
    //                         <View style={styles.categoria}>
    //                         <Text style={styles.textoCategoria}>{item.nome}</Text>
    //                         </View>
    //                      )}
    //                     />
    //             </SafeAreaView>

    //             <View style={styles.containerCards}>
    
    //                 <View style={styles.card}> 
    //                      {/* <FlatList 
    //                         data={tasks} 
    //                         keyExtractor={item => item.id} 
    //                         renderItem={({item}) => <CardHome item={item}/>} 
    //                     /> */}
    
    //                     <CardHome/>
    //                 {/* </View>  */}
    //                 </View>
    //             </View>

    //         </ScrollView>

    //     </View>
            
    // )

    const styles = StyleSheet.create({
        imageBackground: {
            flex: 1,
        },

        container: {
            flex: 1,
            backgroundColor: '#1C1B1F',
            
        },
        header: {
            backgroundColor: '#272626',
            flexDirection: 'row',    
            justifyContent: 'space-between',
            alignItems:'center',
            alignItems: 'flex-end',
            width: '100%',
            height: '12%',        
                },
        banner:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor:'#FFFBFE',
            width: '76%',
            height: 168,
            marginStart: '14%',
            marginVertical: 15,
            borderRadius:15
        },
        texto: {
            padding: 6,
            color: '#ffff',
            fontSize: 26,
            fontWeight: '400',
            textShadowColor: 'rgba(0, 0, 0, 0.8)',
            textShadowOffset: {width: 6, height: 5},
            textShadowRadius: 4,
          },
        textoBanner: {
            padding: 6,
            color: '#000000',
            fontSize: 26,
            fontWeight: '800',
            textShadowColor: 'lightgrey',
            textShadowOffset: {width: 6, height: 5},
            textShadowRadius: 4,
          },
        textoNome:{
            color: '#000000',
            fontSize: 18,
            fontWeight: "700",
            textAlign: 'center'
        },
        textoValor:{
            color: '#000000',
            fontSize: 22,
            fontWeight: "900",
            
        },
        containerCards: {
        flexDirection: 'column',
        //   backgroundColor: '#1C1B1F',
          marginBottom:15,
          justifyContent: 'center'
        },
        imagem: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100,
            marginHorizontal: '12%'
        },
        card:{
            
            width: '35%',
            height: 200,
            backgroundColor: '#FFFBFE',
            borderRadius: 15,
            marginStart: '10%',
            shadowColor: "#fff",
        },

    })
    