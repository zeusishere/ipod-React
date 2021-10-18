import React from "react";
import Dice_Picture from "./Dice_Picture.png"
class Games extends React.Component {
   render()
   {
    console.log("props inside of settings ", this.props);
    return(
        <div style = { styles } >
            <img src={Dice_Picture}></img>
        </div>
    );
    }
}

const styles = {
    width: "100%",
    backgroundColor: "white",
    height: "100%",
    // paddingTop: "16px",
    boxSizing: "border-box",
    paddingBottom: "16px",
}
const liStyle= {
    paddingLeft:"20px" 
}

export default Games;