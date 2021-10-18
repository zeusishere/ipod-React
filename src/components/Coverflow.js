import React from "react";

class Coverflow extends React.Component {
   render()
   {
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