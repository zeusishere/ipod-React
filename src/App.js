import logo from './logo.svg';
import './App.css';
import Controls from './components/Controls';
import Screen from './components/Screen'
import React from "react";
import reflection from "./reflection.png"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: "",
      currentPositionCursor :3 ,
      previousPositionCursor :1 ,
      listLength :0 ,
      active : "",
      menu : ["","coverflow","music","games","setting" ] ,
      music :["","musicPlayer","songs","playList","artist"]
    }
  
    this.changeMenuVisibility = this.changeMenuVisibility.bind(this);
    this.changeList = this.changeList.bind(this) ;
  }

//

// this function controls if menu is visible on screen and also move from sub-list to main list
changeMenuVisibility(elementToDisplay)
{
  console.log("inside change menu visibility ", this.state.visible, elementToDisplay) ;

  if (this.state.visible === "menu" || this.state.visible === "")
      this.setState((prevState) => {
        return {  visible: ("" == prevState.visible) ? "menu" : "" ,
        currentPositionCursor:1}
      });
  else if (this.state.visible=="musicPlayer" ||this.state.visible =="artist" ||this.state.visible =="playList" ||this.state.visible =="songs" )  
  {
    this.setState((prevState) => {
      return {  visible:"music" ,
        currentPositionCursor:prevState.previousPositionCursor
    }
    });
  }  
  else
  {
      this.setState((prevState) => {
      return { visible: "menu" , currentPositionCursor:prevState.previousPositionCursor }
    });
  }   
}
//  open sublists from current list
changeList (elementToDisplay )
{
  console.log("inside changeList ",this.state.menu,this.state.currentPositionCursor)
  
  if (this.state.visible == "menu")
  this.setState((prevState) => {
    
    return { visible:prevState.menu[this.state.currentPositionCursor] ,
             previousPositionCursor: prevState.currentPositionCursor ,
             currentPositionCursor : 1
    } 
  });
  if  (this.state.visible == "music")
  {
    this.setState((prevState) => {
    
      return { visible:prevState.music[this.state.currentPositionCursor] ,
               previousPositionCursor: prevState.currentPositionCursor ,
      } 
    });
  }
  // else{
  //   this.setState((prevState) => {
    
  //     return { visible:prevState.music[this.state.currentPositionCursor] ,
  //              previousPositionCursor: prevState.currentPositionCursor ,
  //     } 
  //   });

  // }
}
//  move the cursor up and down in the current list
moveCursor = (direction) =>
{
  // move the cursor 1 position down the list
  if(direction < 0)
  {
    this.setState( (prevState) => {
      return { currentPositionCursor : (prevState.currentPositionCursor==4)?1:prevState.currentPositionCursor+1}
    });
  }
  else
  {
    this.setState((prevState) => {
      // return { menuVisible :!prevState.menuVisible , visible:elementToDisplay }
      return { currentPositionCursor : (prevState.currentPositionCursor==1)?4:prevState.currentPositionCursor-1} ;
    }) ;
}
}

render()
{
  return (
    <div style={stylesObj}>
      <Screen state={this.state} setVisible={this.changeMenuVisibility} setListToDisplay={this.changeList}  />
      <Controls state={this.state} setVisible={this.changeMenuVisibility} setListToDisplay={this.changeList} moveCursor={this.moveCursor}  />
      {/* <img src={reflection} style={imgStyles}></img> */}
    </div>
  );
}
  }
const stylesObj = {
  width: "300px",
  height: 500,
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#C1C1C1",
  // backgroundImage :`url(${texture})`,
  backgroundSize:"161%",
  paddingLeft: "15px",
  paddingRight: "15px",
  paddingTop: "30px",
  borderRadius: "35px",
  boxShadow: "0px 0px 20px 1px inset rgba(0,0,0,0.6)",
  "-webkit-box-reflect": "below 0px linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.4))"

}
// let imgStyles = {
//   transform:"rotate(180deg)",
//   width:"340px",
//   position : "relative",
//   left :
// }
export default App;
