import React from "react";
import mp from "./mp.png"
class MusicPlayer extends React.Component {
   render()
   {
    console.log("props inside of MusicPLAYER ", this.props);
    return(
        <div style = { styles } >
            
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
    backgroundImage :`url(${mp})` ,
    backgroundSize:"cover"

}
// const liStyle= {
//     paddingLeft:"20px" 
// }


export default MusicPlayer;