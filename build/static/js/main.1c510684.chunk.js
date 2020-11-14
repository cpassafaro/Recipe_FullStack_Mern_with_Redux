(this["webpackJsonpfront-end-of-json-api-project"]=this["webpackJsonpfront-end-of-json-api-project"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(0),s=a(9),c=a.n(s),r=a(27),o=a(13),l=a(14),u=a(16),h=a(15),d=a(20),j=a.n(d),p=a(142),m=a(146),b=a(161),g=a(147),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).postInput=function(t){t.preventDefault();var a={title:e.state.title,summary:e.state.summary,servings:e.state.servings,cuisines:e.state.cuisines,ingredients:{aisle:"Produce",amount:1,consistency:"solid",id:9037,image:"avocado.jpg",measures:{},meta:[],metaInformation:[],name:"avocado",original:e.state.ingredients,originalName:"large avocado",originalString:"1 medium/large avocado",unit:"medium"},instructions:{name:"",steps:[{number:1,step:[e.state.instructions]}]}};j.a.post("https://bombrecipeapi.herokuapp.com/new",a).then((function(t){null!=t.data?(console.log(e.props.history),e.props.history.push("/success"),window.location.reload(!1),console.log(t.data)):(t.data,e.props.history.push("/fail"))}))},e.pushTitleToState=function(t){var a=t.target.value;e.setState({title:a})},e.pushSummaryToState=function(t){var a=t.target.value;e.setState({summary:a})},e.pushCuisinesToState=function(t){var a=t.target.value,i=[];i.push(a),e.setState({cuisines:i})},e.pushServingsToState=function(t){var a=t.target.value;e.setState({servings:a})},e.pushIngredientsToState=function(t){var a=t.target.value,i=[];i.push(a),e.setState({ingredients:i})},e.pushInstructionsToState=function(t){var a=t.target.value,i=[];i.push(a),e.setState({instructions:i})},e.state={title:"",summary:"",cuisines:[],ingredients:[],instructions:[],servings:Number},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsxs)(p.a,{children:[Object(i.jsxs)(m.a,{style:{color:"secondary",display:"flex",flexDirection:"column"},children:[Object(i.jsx)("div",{children:"Create your new recipe below"}),Object(i.jsx)(b.a,{type:"text",variant:"outlined",placeholder:"Recipe Name",onChange:this.pushTitleToState}),Object(i.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Summary",onChange:this.pushSummaryToState}),Object(i.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Style of Cuisine must be one of the title names from homepage ex. Mexican or Thai",onChange:this.pushCuisinesToState}),Object(i.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Servings",onChange:this.pushServingsToState}),Object(i.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Ingredients",onChange:this.pushIngredientsToState}),Object(i.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Instructions",onChange:this.pushInstructionsToState})]}),Object(i.jsx)(g.a,{color:"primary",variant:"outlined",type:"submit",onClick:this.postInput,children:"Submit"})]})}}]),a}(n.Component),O=(a(100),a(149)),v=a(150),f=a(151),y=a(152),S=a(148),C=Object(S.a)({buttonStyle:{color:"white",display:"flex",justifyContent:"space-around",textDecoration:"underline"},recipesStyle:{display:"flex",justifyContent:"flex-start",width:"300px",color:"white",textDecoration:"underline"},container:{maxWidth:"300px",textDecoration:"none"}});function w(){var e=C();return Object(i.jsx)(O.a,{position:"static",children:Object(i.jsxs)(v.a,{children:[Object(i.jsx)(f.a,{edge:"start",color:"primary","aria-label":"menu"}),Object(i.jsx)("div",{className:e.container,children:Object(i.jsx)(y.a,{to:"/",children:Object(i.jsx)(m.a,{variant:"h6",className:e.recipesStyle,children:"\ud83d\udca3 Recipes"})})}),Object(i.jsx)(y.a,{to:"/update",children:Object(i.jsx)(g.a,{className:e.buttonStyle,children:"Update Recipe"})}),Object(i.jsx)(y.a,{to:"/delete",children:Object(i.jsx)(g.a,{className:e.buttonStyle,children:"Delete Recipe"})}),Object(i.jsx)(y.a,{to:"/new",children:Object(i.jsx)(g.a,{className:e.buttonStyle,children:"Create Recipe"})})]})})}var T=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).deleteRecipe=function(e){e.preventDefault(),j.a.delete("https://bombrecipeapi.herokuapp.com/remove/".concat(i.state.title)).then((function(e){null!=e.data?(console.log(i.props.history),i.props.history.push("/success"),window.location.reload(!1),console.log(e.data)):(e.data,i.props.history.push("/fail"))}))},i.pushTitleToState=function(e){var t=e.target.value;i.setState({title:t})},i.capitalizeFirstLetter=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},console.log(e),i.state={data:e.data.data,title:""},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsxs)(p.a,{children:[Object(i.jsxs)(m.a,{style:{display:"flex",flexDirection:"column"},children:[Object(i.jsx)("div",{children:"Place name of recipe you would like to delete below"}),Object(i.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Search By Title",onChange:this.pushTitleToState})]}),Object(i.jsx)(g.a,{variant:"outlined",color:"secondary",type:"submit",onClick:this.deleteRecipe,children:"Submit"})]})}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).updateRecipe=function(e){e.preventDefault();var t={title:i.state.title,summary:i.state.summary,ingredients:{aisle:"Produce",amount:1,consistency:"solid",id:9037,image:"avocado.jpg",measures:{},meta:[],metaInformation:[],name:"avocado",original:i.state.ingredients,originalName:"large avocado",originalString:"1 medium/large avocado",unit:"medium"},instructions:{name:"",steps:[{number:1,step:[i.state.instructions]}]}};j.a.put("https://bombrecipeapi.herokuapp.com/recipe/".concat(i.state.title),t).then((function(e){null!=e.data?(console.log(i.props.history),i.props.history.push("/success"),window.location.reload(!1),console.log(e.data)):(e.data,i.props.history.push("/fail"))}))},i.pushTitleToState=function(e){var t=e.target.value;i.setState({title:t})},i.pushSummaryToState=function(e){var t=e.target.value;i.setState({summary:t})},i.pushIngredientsToState=function(e){var t=e.target.value,a=[];a.push(t),i.setState({ingredients:a})},i.pushInstructionsToState=function(e){var t=e.target.value,a=[];a.push(t),i.setState({instructions:a})},i.state={title:"",summary:"",ingredients:[],instructions:[]},i}return Object(l.a)(a,[{key:"render",value:function(){return Object(i.jsxs)(p.a,{children:[Object(i.jsxs)(m.a,{style:{color:"secondary",display:"flex",flexDirection:"column"},children:[Object(i.jsx)("div",{children:"Place the name of the recipe you would like to change below in 'Recipe Name' box and then make changes below."}),Object(i.jsx)(b.a,{type:"text",placeholder:"Recipe Name You Would Like to Change",variant:"outlined",onChange:this.pushTitleToState}),Object(i.jsx)(b.a,{type:"text",placeholder:"Summary",variant:"outlined",onChange:this.pushSummaryToState}),Object(i.jsx)(b.a,{type:"text",variant:"outlined",placeholder:"Ingredients",onChange:this.pushIngredientsToState}),Object(i.jsx)(b.a,{type:"text",placeholder:"Instructions",variant:"outlined",onChange:this.pushInstructionsToState})]}),Object(i.jsx)(g.a,{variant:"outlined",color:"primary",type:"submit",onClick:this.updateRecipe,children:"Submit"})]})}}]),a}(n.Component),I=a(158),N=a(6),D=a(153),E=a(154),R=a(157),L=a(156),M=a(155),F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={data:e.data,image:e.image,title:e.title},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(i.jsxs)(D.a,{className:e.root,children:[Object(i.jsxs)(E.a,{children:[Object(i.jsx)(M.a,{className:e.media,image:this.props.image}),Object(i.jsx)(L.a,{children:Object(i.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:this.state.title})})]}),Object(i.jsx)(R.a,{children:Object(i.jsx)(y.a,{to:{pathname:"/recipe/".concat(this.state.title),state:{data:this.props.data}},children:Object(i.jsx)(g.a,{size:"small",color:"primary",children:"Click here for more recipes"})})})]})}}]),a}(n.Component),A=Object(N.a)((function(e){return{root:{maxWidth:345},media:{height:140}}}))(F),J=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).findAmerican=function(){var e=i.state.data,t=[],a=[],n=[],s=[],c=[],r=[],o=[],l=[],u=[],h=[],d=[],j=[],p=[],m=[],b=[],g=[],x=[],O=[];e.map((function(e){return e.cuisines.includes("Nordic")?t.push(e):e.cuisines.includes("French")?a.push(e):e.cuisines.includes("Italian")?n.push(e):e.cuisines.includes("Spanish")?s.push(e):e.cuisines.includes("Thai")?c.push(e):e.cuisines.includes("Korean")?r.push(e):e.cuisines.includes("Indian")?o.push(e):e.cuisines.includes("Jewish")?l.push(e):e.cuisines.includes("Southern")?u.push(e):e.cuisines.includes("African")?h.push(e):e.cuisines.includes("Cajun")?d.push(e):e.cuisines.includes("Chinese")?j.push(e):e.cuisines.includes("Caribbean")?p.push(e):e.cuisines.includes("German")?m.push(e):e.cuisines.includes("Irish")?b.push(e):e.cuisines.includes("Japanese")?g.push(e):e.cuisines.includes("Mexican")?x.push(e):e.cuisines.includes("Middle Eastern")&&O.push(e),O})),console.log(t,a,n,s,c,r,o,l,u,h,d,j,p,m,g,x,O),i.setState({nordic:t,french:a,italian:n,spanish:s,thai:c,korean:r,indian:o,jewish:l,southern:u,african:h,cajun:d,chinese:j,caribbean:p,german:m,irish:b,japanese:g,mexican:x,middleEastern:O})},i.state={data:e.data.data,nordic:"",french:"",italian:"",spanish:"",thai:"",korean:"",indian:"",jewish:"",southern:"",african:"",cajun:"",chinese:"",caribbean:"",german:"",irish:"",japanese:"",mexican:"",middleEastern:"",isLoading:!0},i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1}),this.findAmerican()}},{key:"render",value:function(){return 1==this.state.isLoading?Object(i.jsx)("div",{className:"App",children:"Loading..."}):Object(i.jsxs)(m.a,{children:[Object(i.jsxs)(I.a,{container:!0,direction:"row",justify:"space-around",children:[Object(i.jsx)(A,{title:"Nordic Cuisine",image:this.state.nordic[0].image,data:this.state.nordic}),Object(i.jsx)(A,{title:"French Cuisine",image:this.state.french[0].image,data:this.state.french}),Object(i.jsx)(A,{title:"Italian Cuisine",image:this.state.italian[0].image,data:this.state.italian})]}),Object(i.jsxs)(I.a,{container:!0,direction:"row",justify:"space-around",children:[Object(i.jsx)(A,{title:"Spanish Cuisine",image:this.state.spanish[0].image,data:this.state.spanish}),Object(i.jsx)(A,{title:"Thai Cuisine",image:this.state.thai[1].image,data:this.state.thai}),Object(i.jsx)(A,{title:"Korean Cuisine",image:this.state.korean[0].image,data:this.state.korean})]}),Object(i.jsxs)(I.a,{container:!0,direction:"row",justify:"space-around",children:[Object(i.jsx)(A,{title:"Indian Cuisine",image:this.state.indian[0].image,data:this.state.indian}),Object(i.jsx)(A,{title:"Jewish Cuisine",image:this.state.jewish[0].image,data:this.state.jewish}),Object(i.jsx)(A,{title:"Southern Cuisine",image:this.state.southern[0].image,data:this.state.southern})]}),Object(i.jsxs)(I.a,{container:!0,direction:"row",justify:"space-around",children:[Object(i.jsx)(A,{title:"African Cuisine",image:this.state.african[0].image,data:this.state.african}),Object(i.jsx)(A,{title:"Cajun Cuisine",image:this.state.cajun[0].image,data:this.state.cajun}),Object(i.jsx)(A,{title:"Chinese Cuisine",image:this.state.chinese[0].image,data:this.state.chinese})]}),Object(i.jsxs)(I.a,{container:!0,direction:"row",justify:"space-around",children:[Object(i.jsx)(A,{title:"Caribbean Cuisine",image:this.state.caribbean[0].image,data:this.state.caribbean}),Object(i.jsx)(A,{title:"German Cuisine",image:this.state.german[1].image,data:this.state.german}),Object(i.jsx)(A,{title:"Irish Cuisine",image:this.state.irish[0].image,data:this.state.irish})]}),Object(i.jsxs)(I.a,{container:!0,direction:"row",justify:"space-around",children:[Object(i.jsx)(A,{title:"Japanese Cuisine",image:this.state.japanese[0].image,data:this.state.japanese}),Object(i.jsx)(A,{title:"Mexican Cuisine",image:this.state.mexican[0].image,data:this.state.mexican}),Object(i.jsx)(A,{title:"Mid-Eastern Cuisine",image:this.state.middleEastern[0].image,data:this.state.middleEastern})]})]})}}]),a}(n.Component),P=(a(101),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).createElements=function(){var e=n.state.data;console.log(e);var t=[];e.forEach((function(e){var a=[],n=e.instructions[0].steps,s=[];e.ingredients.length>0?e.ingredients.forEach((function(e){var t=Object(i.jsx)("div",{children:e.original});return a.push(t),a})):console.log(e),n.length>0?(console.log(e),n.forEach((function(e){if(null!=e){var t=Object(i.jsx)("div",{children:e.step});return s.push(t),s}}))):console.log(e),console.log(e);var c=Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"title",children:e.title}),Object(i.jsxs)("div",{className:"img-area",children:[Object(i.jsx)("img",{src:e.image,className:"image",maxWidth:"200px"}),Object(i.jsxs)("div",{className:"ingredients-area",children:[Object(i.jsxs)("div",{children:["Number of Servings: ",e.servings]}),Object(i.jsxs)("div",{children:["Ingredients: ",a]})]})]}),Object(i.jsxs)("div",{className:"information",children:[Object(i.jsx)("div",{className:"steps-title",children:"---Steps---"}),Object(i.jsx)("div",{children:s})]})]});t.push(c),console.log(t)})),n.setState({elements:t})},console.log(e.location.state),n.state={data:e.location.state.data,elements:[],newElements:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.createElements()}},{key:"render",value:function(){return console.log(this.state.data),console.log(this.state.elements),Object(i.jsx)("div",{children:this.state.elements})}}]),a}(n.Component)),B=a(162),W=Object(S.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function z(){var e=W();return Object(i.jsx)("div",{className:e.root,children:Object(i.jsx)(B.a,{variant:"filled",severity:"success",children:"Success! Click Recipes to continue"})})}var G=Object(S.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function K(){var e=G();return Object(i.jsx)("div",{className:e.root,children:Object(i.jsx)(B.a,{variant:"filled",severity:"error",children:"Error! The title you entered was not found, please type in the title exactly as you see it!"})})}a(102);var U=a(159),Y=a(163),q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={data:"",isLoading:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted");j.a.get("https://bombrecipeapi.herokuapp.com/").then((function(e){return e})).then((function(t){e.setState({data:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return 1==this.state.isLoading?Object(i.jsx)(U.a,{color:"secondary",display:"flex",justify:"center",alignItems:"center"}):Object(i.jsxs)("div",{children:[Object(i.jsxs)("nav",{children:[Object(i.jsx)(y.a,{exact:!0,to:"/"}),Object(i.jsx)(y.a,{to:"/new"}),Object(i.jsx)(y.a,{to:"/delete"}),Object(i.jsx)(y.a,{to:"/update"})]}),Object(i.jsxs)("main",{children:[Object(i.jsx)(w,{}),Object(i.jsx)(Y.a,{exact:!0,path:"/",render:function(t){return Object(i.jsx)(J,Object(r.a)(Object(r.a)({},t),{},{data:e.state.data}))}}),Object(i.jsx)(Y.a,{path:"/new",component:x}),Object(i.jsx)(Y.a,{path:"/delete",render:function(t){return Object(i.jsx)(T,Object(r.a)(Object(r.a)({},t),{},{data:e.state.data}))}}),Object(i.jsx)(Y.a,{path:"/update",render:function(t){return Object(i.jsx)(k,Object(r.a)(Object(r.a)({},t),{},{data:e.state.data}))}}),Object(i.jsx)(Y.a,{path:"/recipe/:title",component:P}),Object(i.jsx)(Y.a,{path:"/success",component:z}),Object(i.jsx)(Y.a,{path:"/fail",component:K})]})]})}}]),a}(n.Component),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,165)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))},Q=a(164),V=a(160),X=a(68),Z=a(66),$=a.n(Z),_=a(67),ee=a.n(_),te=Object(X.a)({palette:{primary:$.a,secondary:ee.a}});c.a.render(Object(i.jsx)(Q.a,{children:Object(i.jsx)(V.a,{theme:te,children:Object(i.jsx)(q,{})})}),document.getElementById("root")),H()}},[[104,1,2]]]);
//# sourceMappingURL=main.1c510684.chunk.js.map