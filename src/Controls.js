import ff1 from "./ff1.svg"
import pp from "./pp.png"
function Controls(props) {
    return <div style={styles} >
        <div style={circularDisc}>
        </div>
        <div style={top}>Menu</div>
        <div style={left}>
        <img src={ff1} style={imgLeft} alt="fw"></img>
        </div>
        <div style={bottom}>
        <img src={pp} style={imgTop} alt="ff"></img>
        </div>
        <div style={right}>
        <img src={ff1} style={imgRight} alt="ff"></img>
        </div>
    </div>;
}
const styles = {
    height: 200,
    width: 200,
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50%",
    position: "relative",
}
const circularDisc = {
    height: 80,
    width: 80,
    borderRadius: "50%" ,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "gray"
}
const top ={
    color:"gray",
    position:"absolute",
    left:"50%",
    transform: "translateX(-50%)",
    fontSize:"20px",
    marginTop :20,
    fontWeight :"bolder"
}
const bottom = {
    position:"absolute",
    bottom:"0%",
    left:"50%",
    transform: "translate(-50%,-50%)",
}
const left ={
    position:"absolute",
    left:"10%",
    top:"50%",
    transform: "translate(-25%,-50%)",
}
const right ={
    position:"absolute",
    right:"10%",
    top:"50%",
    transform: "translate(25%,-50%)",
}

const imgRight = {
    width:"40px",
    
}
const imgLeft = 
{
    width:"40px",
    transform: "rotate(180deg)",
    
}
const imgTop ={
    width:"25px",
    
}

export default Controls;