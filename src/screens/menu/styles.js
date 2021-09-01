import { StyleSheet } from 'react-native';

/*Posso usar const styles e exportar a variável igual exportei o StyleSheet, ou fazer como no exemplo a seguir que exporta o styles como um objeto e importa o StyleSheet*/ 
export default styles = StyleSheet.create({
  menu: {
    header:'null',
  },
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:30,
    marginBottom:50,
    color:'#fff',
  },
  button:{
    marginTop: '5%',
    backgroundColor:'#8B0000',
    width:'80%',
    height:45,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center'
  },
  textButton: {
    fontSize:20,
    color:'#fff',
  },
  
});