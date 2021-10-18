import React from "react";

class Coverflow extends React.Component {
   render()
   {
    console.log("props inside of settings ", this.props);
    return(
        <div style = { styles } >
            <div style={{paddingTop:"35%", fontWeight:"bolder"}}>CoverFlow</div>
        </div>
    );
    }
}
const styles ={ 
    height:"100%" ,
    backgroundColor:"white" ,
    textAlign : "center"   
}
export default  Coverflow ;