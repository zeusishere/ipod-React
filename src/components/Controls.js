import ff1 from "./ff1.svg";
import pp from "./pp.png";
import zingTouch from "zingtouch";
import React from "react";
import { render } from "@testing-library/react";
class Controls extends React.Component {
    componentDidMount() {
        // set the initial position of cursor
        let { moveCursor } = this.props;
        let controller = document.getElementById("controller");
        var controllerRegion = new zingTouch.Region(controller);
        let currentAngPos = 0;
        let previousAngPos = 0;

        controllerRegion.bind(controller, "rotate", function (e) {

            // console.log("rotated in",e.detail.angle)
            currentAngPos = e.detail.angle;
            if (currentAngPos - previousAngPos > 15) {
                console.log(previousAngPos, "rotated", currentAngPos)
                previousAngPos = currentAngPos;

                //    changeState       
                moveCursor(1);
            }
            else if (currentAngPos - previousAngPos < -15) {
                previousAngPos = currentAngPos;
                // changeState
                moveCursor(-1);

            }
        })
        let circularDisc = document.getElementById("circularDisc");

        console.log(circularDisc)
        controllerRegion.unbind(circularDisc)



    }
    componentDidUpdate() {

    }
    render() {
        console.log("props in controller", this.props);
        return <React.Fragment>
            <div style={styles} id="controller" >
            </div>
            <div style={circularDisc} id="circularDisc"
                className="pressed"
                onClick={() => {
                    this.props.setListToDisplay("music")
                }} >
            </div>
            <div style={top}
                onClick={() => {
                    this.props.setVisible("menu")
                }}
            >Menu</div>
            <div style={left}>
                <img src={ff1} style={imgLeft} alt="fw"></img>
            </div>
            <div style={bottom}>
                <img src={pp} style={imgTop} alt="ff"></img>
            </div>
            <div style={right}>
                <img src={ff1} style={imgRight} alt="ff"></img>
            </div>
        </React.Fragment>
    }
}
const styles = {
    height: 200,
    width: 200,
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50%",
    position: "relative",
    boxShadow: "0px 0px 20px 3px  rgba(0,0,0,0.7)",

}
let circularDisc = {
    height: 80,
    width: 80,
    borderRadius: "50%",
    position: "absolute",
    top: "74%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "gray",
    cursor: "pointer"
}
const top = {
    color: "gray",
    position: "absolute",
    left: "50%",
    top:"55%" ,
    transform: "translateX(-50%)",
    fontSize: "20px",
    marginTop: 20,
    fontWeight: "bolder",
    cursor: "pointer"
}
const bottom = {
    position: "absolute",
    bottom: "7.5%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    cursor: "pointer"
}
const left = {
    position: "absolute",
    left: "25%",
    top: "74%",
    transform: "translate(-25%,-50%)",
    cursor: "pointer"
}
const right = {
    position: "absolute",
    right: "25%",
    top: "74%",
    transform: "translate(25%,-50%)",
    cursor: "pointer"
}

const imgRight = {
    width: "40px",

}
const imgLeft =
{
    width: "40px",
    transform: "rotate(180deg)",

}
const imgTop = {
    width: "25px",

}

export default Controls;