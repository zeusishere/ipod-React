import logo from './logo.svg';
import './App.css';
import Controls from './Controls' ;
import Screen from './Screen'
function App() {
  return (
    <div style={stylesObj}>
      <Screen  ></Screen>
      <Controls/>
    </div>
  );
}
const stylesObj ={
  width: "300px",
  height: 500 ,
  position:"fixed",
  left: "50%",
  top :"50%",
  transform:"translate(-50%,-50%)" ,
  backgroundColor:"gray",
  paddingLeft :"15px",
  paddingRight :"15px",
  paddingTop : "30px",
  borderRadius : "35px"

}
export default App;
