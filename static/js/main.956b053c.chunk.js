(this.webpackJsonpipod=this.webpackJsonpipod||[]).push([[0],{138:function(t,e,i){},139:function(t,e,i){},444:function(t,e,i){"use strict";i.r(e);var s=i(2),n=i.n(s),r=i(21),o=i.n(r),c=(i(138),i(4)),a=i(5),l=i(47),u=i(7),d=i(6),p=(i(139),i.p+"static/media/ff1.22a5e050.svg"),b=i.p+"static/media/pp.516d9cfc.png",h=i(132),j=i.n(h),g=(i(141),i(1)),m=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"componentDidMount",value:function(){var t=this.props.moveCursor,e=document.getElementById("controller"),i=new j.a.Region(e),s=0,n=0;i.bind(e,"rotate",(function(e){(s=e.detail.angle)-n>15?(n=s,t(1)):s-n<-15&&(n=s,t(-1))}))}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var t=this;return Object(g.jsxs)(n.a.Fragment,{children:[Object(g.jsx)("div",{style:x,id:"controller"}),Object(g.jsx)("div",{style:v,id:"circularDisc",className:"pressed",onClick:function(){t.props.setListToDisplay("music")}}),Object(g.jsx)("div",{style:y,onClick:function(){t.props.setVisible("menu")},children:"Menu"}),Object(g.jsx)("div",{style:O,children:Object(g.jsx)("img",{src:p,style:L,alt:"fw"})}),Object(g.jsx)("div",{style:f,children:Object(g.jsx)("img",{src:b,style:P,alt:"ff"})}),Object(g.jsx)("div",{style:C,children:Object(g.jsx)("img",{src:p,style:k,alt:"ff"})})]})}}]),i}(n.a.Component),x={height:200,width:200,backgroundColor:"white",marginLeft:"auto",marginRight:"auto",borderRadius:"50%",position:"relative",boxShadow:"0px 0px 20px 3px  rgba(0,0,0,0.7)"},v={height:80,width:80,borderRadius:"50%",position:"absolute",top:"74%",left:"50%",transform:"translate(-50%,-50%)",backgroundColor:"gray",cursor:"pointer"},y={color:"gray",position:"absolute",left:"50%",top:"55%",transform:"translateX(-50%)",fontSize:"20px",marginTop:20,fontWeight:"bolder",cursor:"pointer"},f={position:"absolute",bottom:"7.5%",left:"50%",transform:"translate(-50%,-50%)",cursor:"pointer"},O={position:"absolute",left:"25%",top:"74%",transform:"translate(-25%,-50%)",cursor:"pointer"},C={position:"absolute",right:"25%",top:"74%",transform:"translate(25%,-50%)",cursor:"pointer"},k={width:"40px"},L={width:"40px",transform:"rotate(180deg)"},P={width:"25px"},S=m,w=i.p+"static/media/bg.ed10788c.jpg",T={width:"48%",backgroundColor:"white",height:"100%",paddingTop:"16px",boxSizing:"border-box",paddingLeft:"8px",paddingRight:"8px",animation:"appear .3s linear "},D={paddingLeft:"20px",paddingTop:"3px",paddingBottom:"3px"},M=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"componentDidMount",value:function(){document.querySelector("#item".concat(this.props.state.currentPositionCursor)).classList.add("active")}},{key:"componentDidUpdate",value:function(t){var e=document.querySelector("#item".concat(this.props.state.currentPositionCursor));document.querySelector("#item".concat(t.state.currentPositionCursor)).classList.remove("active"),e.classList.add("active")}},{key:"render",value:function(){var t=this;return Object(g.jsxs)("div",{style:T,children:[Object(g.jsx)("h1",{children:"iPod.js"}),Object(g.jsxs)("ul",{id:"list",style:{listStyleType:"none",paddingLeft:"0px"},children:[Object(g.jsx)("li",{id:"item1",style:D,"data-active":"music",children:"CV"}),Object(g.jsx)("li",{id:"item2",style:D,onClick:function(){t.props.setListToDisplay("music")},children:"Music"}),Object(g.jsx)("li",{id:"item3",style:D,onClick:function(){t.props.setListToDisplay("games")},children:"games"}),Object(g.jsx)("li",{id:"item4",style:D,onClick:function(){t.props.setListToDisplay("setting")},children:"setting"})]})]})}}]),i}(n.a.Component),B=M,R=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"componentDidMount",value:function(){var t=document.querySelector("#item".concat(this.props.state.currentPositionCursor));console.log(t),t.classList.add("active")}},{key:"componentDidUpdate",value:function(t){var e=document.querySelector("#item".concat(this.props.state.currentPositionCursor));document.querySelector("#item".concat(t.state.currentPositionCursor)).classList.remove("active"),e.classList.add("active")}},{key:"render",value:function(){return Object(g.jsxs)("div",{style:V,children:[Object(g.jsx)("h1",{children:"Settings"}),Object(g.jsxs)("ul",{style:{listStyleType:"none",paddingLeft:"0px"},children:[Object(g.jsx)("li",{id:"item1",style:q,children:"Theme"}),Object(g.jsx)("li",{id:"item2",style:q,children:"Brightness"}),Object(g.jsx)("li",{id:"item3",style:q,children:"Volume"}),Object(g.jsx)("li",{id:"item4",style:q,children:"About"})]})]})}}]),i}(n.a.Component),V={width:"48%",backgroundColor:"white",height:"100%",paddingTop:"16px",boxSizing:"border-box",paddingLeft:"8px",paddingRight:"8px",animation:"appear .3s linear "},q={paddingLeft:"20px",paddingTop:"3px",paddingBottom:"3px"},z=R,F=i.p+"static/media/Dice_Picture.cc3e571c.png",I=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return Object(g.jsx)("div",{style:U,children:Object(g.jsx)("img",{src:F})})}}]),i}(n.a.Component),U={width:"100%",backgroundColor:"white",height:"100%",boxSizing:"border-box",paddingBottom:"16px"},A=I,E=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return Object(g.jsx)("div",{style:J,children:Object(g.jsx)("div",{style:{paddingTop:"35%",fontWeight:"bolder"},children:"CoverFlow"})})}}]),i}(n.a.Component),J={height:"100%",backgroundColor:"white",textAlign:"center"},W=E,N=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"componentDidMount",value:function(){document.querySelector("#item".concat(this.props.state.currentPositionCursor)).classList.add("active")}},{key:"componentDidUpdate",value:function(t){var e=document.querySelector("#item".concat(this.props.state.currentPositionCursor));document.querySelector("#item".concat(t.state.currentPositionCursor)).classList.remove("active"),e.classList.add("active")}},{key:"render",value:function(){return Object(g.jsxs)("div",{style:X,children:[Object(g.jsx)("h1",{children:"Music"}),Object(g.jsxs)("ul",{style:{listStyleType:"none",paddingLeft:"0px"},children:[Object(g.jsx)("li",{id:"item1",style:_,children:"Music player"}),Object(g.jsx)("li",{id:"item2",style:_,children:"Songs"}),Object(g.jsx)("li",{id:"item3",style:_,children:"Playlists"}),Object(g.jsx)("li",{id:"item4",style:_,children:"Artists"})]})]})}}]),i}(n.a.Component),X={width:"48%",backgroundColor:"white",height:"100%",paddingTop:"16px",boxSizing:"border-box",paddingLeft:"8px",paddingRight:"8px",animation:"appear .3s linear "},_={paddingLeft:"20px",paddingTop:"3px",paddingBottom:"3px"},G=N,H=i.p+"static/media/mp.54bdd804.png",K=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return Object(g.jsx)("div",{style:Q})}}]),i}(n.a.Component),Q={width:"100%",backgroundColor:"white",height:"100%",boxSizing:"border-box",paddingBottom:"16px",backgroundImage:"url(".concat(H,")"),backgroundSize:"cover"},Y=K,Z=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return"menu"===this.props.state.visible?Object(g.jsx)("div",{style:$,children:Object(g.jsx)(B,{state:this.props.state,setListToDisplay:this.props.setListToDisplay})}):"music"==this.props.state.visible?Object(g.jsx)("div",{style:$,children:Object(g.jsx)(G,{state:this.props.state,setListToDisplay:this.props.setListToDisplay})}):"setting"==this.props.state.visible?Object(g.jsx)("div",{style:$,children:Object(g.jsx)(z,{state:this.props.state,setListToDisplay:this.props.setListToDisplay})}):"games"==this.props.state.visible?Object(g.jsx)("div",{style:$,children:Object(g.jsx)(A,{state:this.props.state,setListToDisplay:this.props.setListToDisplay})}):"coverflow"==this.props.state.visible?Object(g.jsx)("div",{style:$,children:Object(g.jsx)(W,{})}):"musicPlayer"==this.props.state.visible||"artist"==this.props.state.visible||"playList"==this.props.state.visible||"songs"==this.props.state.visible?Object(g.jsx)("div",{style:$,children:Object(g.jsx)(Y,{})}):Object(g.jsx)("div",{style:$})}}]),i}(n.a.Component),$={height:"225px",backgroundColor:"white",border:"2px solid black",borderRadius:"10px",overflow:"hidden",marginBottom:30,backgroundImage:"url(".concat(w,")"),backgroundSize:"cover",backgroundPosition:"center"},tt=Z,et=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){var t;return Object(c.a)(this,i),(t=e.call(this)).moveCursor=function(e){e<0?t.setState((function(t){return{currentPositionCursor:4==t.currentPositionCursor?1:t.currentPositionCursor+1}})):t.setState((function(t){return{currentPositionCursor:1==t.currentPositionCursor?4:t.currentPositionCursor-1}}))},t.state={visible:"",currentPositionCursor:3,previousPositionCursor:1,menu:["","coverflow","music","games","setting"],music:["","musicPlayer","songs","playList","artist"]},t.changeMenuVisibility=t.changeMenuVisibility.bind(Object(l.a)(t)),t.changeList=t.changeList.bind(Object(l.a)(t)),t}return Object(a.a)(i,[{key:"changeMenuVisibility",value:function(t){"menu"===this.state.visible||""===this.state.visible?this.setState((function(t){return{visible:""==t.visible?"menu":"",currentPositionCursor:1}})):"musicPlayer"==this.state.visible||"artist"==this.state.visible||"playList"==this.state.visible||"songs"==this.state.visible?this.setState((function(t){return{visible:"music"}})):this.setState((function(t){return{visible:"menu",currentPositionCursor:t.previousPositionCursor}}))}},{key:"changeList",value:function(t){var e=this;"menu"==this.state.visible&&this.setState((function(t){return{visible:t.menu[e.state.currentPositionCursor],previousPositionCursor:t.currentPositionCursor,currentPositionCursor:1}})),"music"==this.state.visible&&this.setState((function(t){return{visible:t.music[e.state.currentPositionCursor]}}))}},{key:"render",value:function(){return Object(g.jsxs)("div",{style:it,children:[Object(g.jsx)(tt,{state:this.state,setVisible:this.changeMenuVisibility,setListToDisplay:this.changeList}),Object(g.jsx)(S,{state:this.state,setVisible:this.changeMenuVisibility,setListToDisplay:this.changeList,moveCursor:this.moveCursor})]})}}]),i}(n.a.Component),it={width:"300px",height:500,position:"fixed",left:"50%",top:"50%",transform:"translate(-50%,-50%)",backgroundColor:"#C1C1C1",backgroundSize:"161%",paddingLeft:"15px",paddingRight:"15px",paddingTop:"30px",borderRadius:"35px",boxShadow:"0px 0px 20px 1px inset rgba(0,0,0,0.6)","-webkit-box-reflect":"below 4px linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.4))"},st=et,nt=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,445)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,r=e.getLCP,o=e.getTTFB;i(t),s(t),n(t),r(t),o(t)}))};o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(st,{})}),document.getElementById("root")),nt()}},[[444,1,2]]]);
//# sourceMappingURL=main.956b053c.chunk.js.map