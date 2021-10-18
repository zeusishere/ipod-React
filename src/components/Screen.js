import React from "react";
import bg from "./bg.jpg";
import Menu from "./Menu";
import Setting from "./settings"
import Games from "./games"
import Coverflow from "./Coverflow";

import Music_subMenu from "./Music_subMenu";
import MusicPlayer from "./MusicPlayer";
// function Screen(props) {


// }


class Screen extends React.Component {
    render() {
        console.log("props is screen is ", this.props)
        if (this.props.state.visible === "menu") {
            return (<div style={styles}>
                <Menu state={this.props.state} setListToDisplay={this.props.setListToDisplay} />
            </div>);
        }
        else if (this.props.state.visible == "music") {
            return (<div style={styles}>
                <Music_subMenu state={this.props.state} setListToDisplay={this.props.setListToDisplay} />
            </div>);
        }
        else if (this.props.state.visible == "setting") {
            return (<div style={styles}>
                <Setting state={this.props.state} setListToDisplay={this.props.setListToDisplay} />
            </div>);
        }
        else if (this.props.state.visible == "games") {
            return (<div style={styles}>
                <Games state={this.props.state} setListToDisplay={this.props.setListToDisplay} />
            </div>);
        }
        else if (this.props.state.visible == "coverflow") {
            return (<div style={styles}>
                <Coverflow   />
            </div>);
        }
        else if (this.props.state.visible == "musicPlayer" ||this.props.state.visible =="artist" ||this.props.state.visible =="playList" ||this.props.state.visible =="songs") {
            console.log("Music player rendered")
            return (<div style={styles}>
                <MusicPlayer   />
            </div>);
        }
        else return (<div style={styles}>

        </div>);
    }
}
const styles = {
    height: "225px",
    backgroundColor: "white",
    border: "2px solid black",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: 30,
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}


export default Screen;