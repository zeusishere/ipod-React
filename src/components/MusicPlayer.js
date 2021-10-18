import React from "react";
import mp from "./mp.png"
class MusicPlayer extends React.Component {
   render()
   {
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
    boxSizing: "border-box",
    paddingBottom: "16px",
    backgroundImage :`url(${mp})` ,
    backgroundSize:"cover"

}



export default MusicPlayer;