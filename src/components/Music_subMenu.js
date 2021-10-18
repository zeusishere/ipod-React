import React from "react";

class Music_subMenu extends React.Component {
    componentDidMount() {
        console.log("Music subMenu",this.props)
        let activeElement = document.querySelector(`#item${this.props.state.currentPositionCursor}`);
        console.log(activeElement);
        activeElement.classList.add("active");
    }
    componentDidUpdate(prevProps) {
        // console.log(this.props.state.currentPositionCursor) ;
        let activeElement = document.querySelector(`#item${this.props.state.currentPositionCursor}`);
        document.querySelector(`#item${prevProps.state.currentPositionCursor}`).classList.remove("active")
        activeElement.classList.add("active");

    }
   render()
   {
    console.log("props inside of MM ", this.props);
    return(
        <div style = { styles } >
            <h1>Music</h1>
                    <ul style={ {listStyleType:'none',
                                paddingLeft:"0px" }}>
                        <li id="item1" style={liStyle}>Music player</li>
                        <li id="item2" style={liStyle}>Songs</li>
                        <li id="item3"style={liStyle}>Playlists</li>
                        <li id="item4" style={liStyle}>Artists</li>
                    </ul>
        </div>
    );
    }
}

// const styles = {
//     width: "48%",
//     backgroundColor: "white",
//     height: "100%",
//     paddingTop: "16px",
//     boxSizing: "border-box",
//     paddingBottom: "16px",
// }
// const liStyle= {
//     paddingLeft:"20px" 
// }
const styles ={
    width:"48%" ,
    backgroundColor:"white",
    height:"100%",
    paddingTop:"16px",
    boxSizing:"border-box",
    paddingLeft: "8px" ,
    paddingRight : "8px",
    animation : "appear .3s linear "
}
const liStyle= {
    paddingLeft:"20px" ,
    paddingTop: "3px" ,
    paddingBottom: "3px"
} ;

export default Music_subMenu;