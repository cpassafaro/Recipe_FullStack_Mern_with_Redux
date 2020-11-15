(this["webpackJsonpfront-end-of-json-api-project"]=this["webpackJsonpfront-end-of-json-api-project"]||[]).push([[0],{100:function(e,i,s){},101:function(e,i,s){},102:function(e,i,s){},104:function(e,i,s){"use strict";s.r(i);var n=s(2),t=s(0),a=s(9),c=s.n(a),u=s(45),r=s(14),l=s(15),o=s(17),d=s(16),h=s(20),j=s.n(h),p=s(142),m=s(146),b=s(161),g=s(147),x=function(e){Object(o.a)(s,e);var i=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=i.call(this)).postInput=function(i){i.preventDefault();var s={title:e.state.title,summary:e.state.summary,servings:e.state.servings,cuisines:e.state.cuisines,ingredients:{aisle:"Produce",amount:1,consistency:"solid",id:9037,image:"avocado.jpg",measures:{},meta:[],metaInformation:[],name:"avocado",original:e.state.ingredients,originalName:"large avocado",originalString:"1 medium/large avocado",unit:"medium"},instructions:{name:"",steps:[{number:1,step:[e.state.instructions]}]}};j.a.post("https://bombrecipeapi.herokuapp.com/new",s).then((function(i){null!=i.data?(console.log(e.props.history),e.props.history.push("/success"),window.location.reload(!1),console.log(i.data)):(i.data,e.props.history.push("/fail"))}))},e.checkInputFields=function(i){var s=e.state.cuisines,n=e.state.title;""!=n&&s.includes("Nordic")||s.includes("nordic")||s.includes("Nordic Cuisine")||s.includes("nordic cuisine")||s.includes("french")||s.includes("French")||s.includes("French Cuisine")||s.includes("french cuisine")||s.includes("italian")||s.includes("Italian")||s.includes("Italian Cuisine")||s.includes("italian cuisine")||s.includes("spanish")||s.includes("Spanish")||s.includes("Spanish Cuisine")||s.includes("spanish cuisine")||s.includes("thai")||s.includes("Thai")||s.includes("Thai Cuisine")||s.includes("thai cuisine")||s.includes("korean")||s.includes("Korean")||s.includes("Korean Cuisine")||s.includes("korean cuisine")||s.includes("indian")||s.includes("Indian")||s.includes("indian cuisine")||s.includes("Indian Cuisine")||s.includes("jewish")||s.includes("Jewish")||s.includes("Jewish Cuisine")||s.includes("jewish cuisine")||s.includes("southern")||s.includes("Southern")||s.includes("Southern Cuisine")||s.includes("African")||s.includes("african")||s.includes("African Cuisine")||s.includes("african cuisine")||s.includes("cajun")||s.includes("Cajun")||s.includes("cajun cuisine")||s.includes("Cajun Cuisine")||s.includes("chinese")||s.includes("Chinese")||s.includes("chinese cuisine")||s.includes("Chinese Cuisine")||s.includes("caribbean")||s.includes("Caribbean")||s.includes("caribbean cuisine")||s.includes("Caribbean Cuisine")||s.includes("german")||s.includes("German")||s.includes("german cuisine")||s.includes("German Cuisine")||s.includes("irish")||s.includes("Irish")||s.includes("irish cuisine")||s.includes("Irish Cuisine")||s.includes("japanese")||s.includes("Japanese")||s.includes("japanese cuisine")||s.includes("Japanese Cuisine")||s.includes("mexican")||s.includes("Mexican")||s.includes("mexican cuisine")||s.includes("Mexican Cuisine")||s.includes("Middle Eastern")||s.includes("middle eastern")||s.includes("Middle Eastern Cuisine")||s.includes("middle eastern cuisine")||s.includes("mid-eastern cuisine")||s.includes("Mid-Eastern cuisine")||s.includes("Mid-Eastern")||s.includes("mid-eastern")?e.postInput(i):""==n?alert("Please Enter a Title"):alert("Please enter valid cuisine style. Ex. 'Nordic'")},e.pushTitleToState=function(i){var s=i.target.value;e.setState({title:s})},e.pushSummaryToState=function(i){var s=i.target.value;e.setState({summary:s})},e.pushCuisinesToState=function(i){var s=i.target.value,n=[];n.push(s),e.setState({cuisines:n})},e.pushServingsToState=function(i){var s=i.target.value;e.setState({servings:s})},e.pushIngredientsToState=function(i){var s=i.target.value,n=[];n.push(s),e.setState({ingredients:n})},e.pushInstructionsToState=function(i){var s=i.target.value,n=[];n.push(s),e.setState({instructions:n})},e.state={title:"",summary:"",cuisines:[],ingredients:[],instructions:[],servings:Number},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(m.a,{style:{color:"secondary",display:"flex",flexDirection:"column"},children:[Object(n.jsx)("div",{children:"Create your new recipe below"}),Object(n.jsx)(b.a,{type:"text",variant:"outlined",placeholder:"Recipe Name",onChange:this.pushTitleToState}),Object(n.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Summary",onChange:this.pushSummaryToState}),Object(n.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Style of Cuisine must be one of the title names from homepage ex. Mexican or Thai",onChange:this.pushCuisinesToState}),Object(n.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Servings",onChange:this.pushServingsToState}),Object(n.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Ingredients",onChange:this.pushIngredientsToState}),Object(n.jsx)(b.a,{variant:"outlined",type:"text",placeholder:"Instructions",onChange:this.pushInstructionsToState})]}),Object(n.jsx)(g.a,{color:"primary",variant:"outlined",type:"submit",onClick:this.checkInputFields,children:"Submit"})]})}}]),s}(t.Component),v=(s(100),s(149)),f=s(150),O=s(151),C=s(152),y=s(148),S=Object(y.a)({buttonStyle:{color:"white",display:"flex",justifyContent:"space-around",textDecoration:"underline"},recipesStyle:{display:"flex",justifyContent:"flex-start",width:"300px",color:"white",textDecoration:"underline"},container:{maxWidth:"300px",textDecoration:"none"}});function w(){var e=S();return Object(n.jsx)(v.a,{position:"static",children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(O.a,{edge:"start",color:"primary","aria-label":"menu"}),Object(n.jsx)("div",{className:e.container,children:Object(n.jsx)(C.a,{to:"/",children:Object(n.jsx)(m.a,{variant:"h6",className:e.recipesStyle,children:"\ud83d\udca3 Recipes"})})}),Object(n.jsx)(C.a,{to:"/new",children:Object(n.jsx)(g.a,{className:e.buttonStyle,children:"Create Recipe"})})]})})}var I=s(153),T=function(e){Object(o.a)(s,e);var i=Object(d.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=i.call(this,e)).updateRecipe=function(e){e.preventDefault();var i={title:n.state.title,servings:n.state.servings,ingredients:{aisle:"Produce",amount:1,consistency:"solid",id:9037,image:"avocado.jpg",measures:{},meta:[],metaInformation:[],name:"avocado",original:n.state.ingredients,originalName:"large avocado",originalString:"1 medium/large avocado",unit:"medium"},instructions:{name:"",steps:[{number:1,step:[n.state.instructions]}]}};j.a.put("https://bombrecipeapi.herokuapp.com/recipe/".concat(n.state.title),i).then((function(e){null!=e.data?(console.log(n.props.history),n.props.history.push("/success"),window.location.reload(!1),console.log(e.data)):(e.data,n.props.history.push("/fail"))}))},n.pushTitleToState=function(e){var i=e.target.value;n.setState({title:i})},n.pushServingsToState=function(e){var i=e.target.value;n.setState({servings:i})},n.pushIngredientsToState=function(e){var i=e.target.value,s=[];s.push(i),n.setState({ingredients:s})},n.pushInstructionsToState=function(e){var i=e.target.value,s=[];s.push(i),n.setState({instructions:s})},console.log(e.location.params.data),n.state={title:"",servings:"",ingredients:[],instructions:[],isLoading:!0},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.location.params.data.servings.toString(),i=[];this.props.location.params.data.ingredients.forEach((function(e){return i.push(e.original)}));var s=i.toString(),n=[];this.props.location.params.data.instructions[0].steps.forEach((function(e){return n.push(e.step)}));var t=n.toString();this.setState({title:this.props.location.params.data.title,servings:e,ingredients:s,instructions:t,isLoading:!1})}},{key:"render",value:function(){return 1==this.state.isLoading?Object(n.jsx)(I.a,{color:"secondary",display:"flex",justify:"center",alignItems:"center"}):Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(m.a,{style:{color:"secondary",display:"flex",flexDirection:"column"},children:[Object(n.jsxs)("div",{children:["You are making changes to : ",this.state.title]}),Object(n.jsx)(b.a,{value:this.state.servings,type:"text",placeholder:"Summary",variant:"outlined",onChange:this.pushServingsToState}),Object(n.jsx)(b.a,{value:this.state.ingredients,type:"text",variant:"outlined",placeholder:"Ingredients",onChange:this.pushIngredientsToState}),Object(n.jsx)(b.a,{value:this.state.instructions,type:"text",placeholder:"Instructions",variant:"outlined",onChange:this.pushInstructionsToState})]}),Object(n.jsx)(g.a,{variant:"outlined",color:"primary",type:"submit",onClick:this.updateRecipe,children:"Submit"})]})}}]),s}(t.Component),k=s(159),E=s(6),N=s(154),M=s(155),D=s(158),J=s(157),L=s(156),F=function(e){Object(o.a)(s,e);var i=Object(d.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=i.call(this,e)).state={data:e.data,image:e.image,title:e.title},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props.classes;return Object(n.jsxs)(N.a,{className:e.root,style:{maxWidth:"228px"},children:[Object(n.jsxs)(M.a,{children:[Object(n.jsx)(L.a,{className:e.media,image:this.props.image}),Object(n.jsx)(J.a,{children:Object(n.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:this.state.title})})]}),Object(n.jsx)(D.a,{children:Object(n.jsx)(C.a,{to:{pathname:"/recipe/".concat(this.state.title),state:{data:this.props.data}},children:Object(n.jsx)(g.a,{size:"small",color:"primary",children:"Click here for more recipes"})})})]})}}]),s}(t.Component),A=Object(E.a)((function(e){return{root:{maxWidth:345},media:{height:140}}}))(F),R=function(e){Object(o.a)(s,e);var i=Object(d.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=i.call(this,e)).findAmerican=function(){var e=n.state.data,i=[],s=[],t=[],a=[],c=[],u=[],r=[],l=[],o=[],d=[],h=[],j=[],p=[],m=[],b=[],g=[],x=[],v=[];e.map((function(e){return e.cuisines.includes("Nordic")||e.cuisines.includes("nordic")||e.cuisines.includes("Nordic Cuisine")||e.cuisines.includes("nordic cuisine")?i.push(e):e.cuisines.includes("French")||e.cuisines.includes("french")||e.cuisines.includes("french cuisine")||e.cuisines.includes("French Cuisine")?s.push(e):e.cuisines.includes("Italian")||e.cuisines.includes("Italian Cuisine")||e.cuisines.includes("italian")||e.cuisines.includes("italian cuisine")?t.push(e):e.cuisines.includes("Spanish")||e.cuisines.includes("spanish")||e.cuisines.includes("spanish cuisine")||e.cuisines.includes("Spanish Cuisine")?a.push(e):e.cuisines.includes("Thai")||e.cuisines.includes("thai")||e.cuisines.includes("thai cuisine")||e.cuisines.includes("Thai Cuisine")?c.push(e):e.cuisines.includes("Korean")||e.cuisines.includes("korean")||e.cuisines.includes("korean cuisine")||e.cuisines.includes("Korean Cuisine")?u.push(e):e.cuisines.includes("Indian")||e.cuisines.includes("indian")||e.cuisines.includes("indian cuisine")||e.cuisines.includes("Indian Cuisine")?r.push(e):e.cuisines.includes("Jewish")||e.cuisines.includes("jewish")||e.cuisines.includes("jewish cuisine")||e.cuisines.includes("Jewish Cuisine")?l.push(e):e.cuisines.includes("Southern")||e.cuisines.includes("southern")||e.cuisines.includes("southern cuisine")||e.cuisines.includes("Southern Cuisine")?o.push(e):e.cuisines.includes("African")||e.cuisines.includes("african")||e.cuisines.includes("african cuisine")||e.cuisines.includes("Afican Cuisine")?d.push(e):e.cuisines.includes("Cajun")||e.cuisines.includes("cajun")||e.cuisines.includes("cajun cuisine")||e.cuisines.includes("Cajun Cuisine")?h.push(e):e.cuisines.includes("Chinese")||e.cuisines.includes("chinese")||e.cuisines.includes("chinese cuisine")||e.cuisines.includes("Chinese Cuisine")?j.push(e):e.cuisines.includes("Caribbean")||e.cuisines.includes("caribbean")||e.cuisines.includes("caribbean cuisine")||e.cuisines.includes("Caribbean Cuisine")?p.push(e):e.cuisines.includes("German")||e.cuisines.includes("german")||e.cuisines.includes("german cuisine")||e.cuisines.includes("German Cuisine")?m.push(e):e.cuisines.includes("Irish")||e.cuisines.includes("irish")||e.cuisines.includes("irish cuisine")||e.cuisines.includes("Irish Cuisine")?b.push(e):e.cuisines.includes("Japanese")||e.cuisines.includes("japanese")||e.cuisines.includes("japanese cuisine")||e.cuisines.includes("Japanese Cuisine")?g.push(e):e.cuisines.includes("Mexican")||e.cuisines.includes("mexican")||e.cuisines.includes("mexican cuisine")||e.cuisines.includes("Mexican Cuisine")?x.push(e):(e.cuisines.includes("Middle Eastern")||e.cuisines.includes("middle eastern")||e.cuisines.includes("Middle Eastern Cuisine")||e.cuisines.includes("middle eastern cuisine")||e.cuisines.includes("mid-eastern cuisine")||e.cuisines.includes("Mid-Eastern")||e.cuisines.includes("Mid-Eastern Cuisine")||e.cuisines.includes("mid-eastern cuisine"))&&v.push(e),v})),console.log(i,s,t,a,c,u,r,l,o,d,h,j,p,m,g,x,v),n.setState({nordic:i,french:s,italian:t,spanish:a,thai:c,korean:u,indian:r,jewish:l,southern:o,african:d,cajun:h,chinese:j,caribbean:p,german:m,irish:b,japanese:g,mexican:x,middleEastern:v})},n.state={data:e.data.data,nordic:"",french:"",italian:"",spanish:"",thai:"",korean:"",indian:"",jewish:"",southern:"",african:"",cajun:"",chinese:"",caribbean:"",german:"",irish:"",japanese:"",mexican:"",middleEastern:"",isLoading:!0},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1}),this.findAmerican()}},{key:"render",value:function(){return 1==this.state.isLoading?Object(n.jsx)("div",{className:"App",children:"Loading..."}):Object(n.jsxs)(m.a,{children:[Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(A,{title:"Nordic Cuisine",image:this.state.nordic[0].image,data:this.state.nordic}),Object(n.jsx)(A,{title:"French Cuisine",image:this.state.french[0].image,data:this.state.french}),Object(n.jsx)(A,{title:"Italian Cuisine",image:this.state.italian[0].image,data:this.state.italian})]}),Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(A,{title:"Spanish Cuisine",image:this.state.spanish[0].image,data:this.state.spanish}),Object(n.jsx)(A,{title:"Thai Cuisine",image:this.state.thai[1].image,data:this.state.thai}),Object(n.jsx)(A,{title:"Korean Cuisine",image:this.state.korean[0].image,data:this.state.korean})]}),Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(A,{title:"Indian Cuisine",image:this.state.indian[0].image,data:this.state.indian}),Object(n.jsx)(A,{title:"Jewish Cuisine",image:this.state.jewish[0].image,data:this.state.jewish}),Object(n.jsx)(A,{title:"Southern Cuisine",image:this.state.southern[0].image,data:this.state.southern})]}),Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(A,{title:"African Cuisine",image:this.state.african[0].image,data:this.state.african}),Object(n.jsx)(A,{title:"Cajun Cuisine",image:this.state.cajun[0].image,data:this.state.cajun}),Object(n.jsx)(A,{title:"Chinese Cuisine",image:this.state.chinese[0].image,data:this.state.chinese})]}),Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(A,{title:"Caribbean Cuisine",image:this.state.caribbean[0].image,data:this.state.caribbean}),Object(n.jsx)(A,{title:"German Cuisine",image:this.state.german[1].image,data:this.state.german}),Object(n.jsx)(A,{title:"Irish Cuisine",image:this.state.irish[0].image,data:this.state.irish})]}),Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-around",children:[Object(n.jsx)(A,{title:"Japanese Cuisine",image:this.state.japanese[0].image,data:this.state.japanese}),Object(n.jsx)(A,{title:"Mexican Cuisine",image:this.state.mexican[0].image,data:this.state.mexican}),Object(n.jsx)(A,{title:"Mid-Eastern Cuisine",image:this.state.middleEastern[0].image,data:this.state.middleEastern})]})]})}}]),s}(t.Component),P=(s(101),function(e){Object(o.a)(s,e);var i=Object(d.a)(s);function s(e){var t;return Object(r.a)(this,s),(t=i.call(this,e)).createElements=function(){var e=t.state.data;console.log(e);var i=[];e.forEach((function(e){var s=[];e.ingredients.length>0?e.ingredients.forEach((function(e){var i=Object(n.jsx)("div",{children:e.original});return s.push(i),s})):console.log(e);var a=e.instructions[0].steps,c=[];a.length>0?a.forEach((function(e){if(null!=e){var i=Object(n.jsx)("div",{children:e.step});return c.push(i),c}})):console.log(e);var u=Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"title",children:e.title}),Object(n.jsxs)("div",{className:"img-area",children:[Object(n.jsx)("img",{src:e.image,className:"image",maxWidth:"200px"}),Object(n.jsxs)("div",{className:"ingredients-area",children:[Object(n.jsxs)("div",{children:["Number of Servings: ",e.servings]}),Object(n.jsxs)("div",{children:["Ingredients: ",s]})]})]}),Object(n.jsxs)("div",{className:"information",children:[Object(n.jsx)("div",{className:"steps-title",children:"---Steps---"}),Object(n.jsx)("div",{children:c})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"button",onClick:t.deleteElement,children:"Delete Recipe"}),Object(n.jsx)(C.a,{to:{pathname:"/update",params:{data:e}},children:Object(n.jsx)("button",{className:"button",children:"Edit Recipe"})})]})]});i.push(u)})),t.setState({elements:i})},t.deleteElement=function(e){var i=e.target.parentElement.parentElement.firstElementChild.textContent;j.a.delete("https://bombrecipeapi.herokuapp.com/remove/".concat(i)).then((function(e){null!=e.data?(console.log(t.props.history),t.props.history.push("/success"),window.location.reload(!1),console.log(e.data)):(e.data,t.props.history.push("/fail"))}))},console.log(e.location.state),t.state={data:e.location.state.data,elements:[],newElements:[]},t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.createElements()}},{key:"render",value:function(){return console.log(this.state.data),console.log(this.state.elements),Object(n.jsx)("div",{children:this.state.elements})}}]),s}(t.Component)),G=s(162),K=Object(y.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function W(){var e=K();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(G.a,{variant:"filled",severity:"success",children:"Success! Click Recipes to continue"})})}var B=Object(y.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function z(){var e=B();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(G.a,{variant:"filled",severity:"error",children:"Error! The title you entered was not found, please type in the title exactly as you see it!"})})}s(102);var Y=s(163),q=function(e){Object(o.a)(s,e);var i=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=i.call(this)).state={data:"",isLoading:!0},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted");j.a.get("https://bombrecipeapi.herokuapp.com/").then((function(e){return e})).then((function(i){e.setState({data:i,isLoading:!1})}))}},{key:"render",value:function(){var e=this;return 1==this.state.isLoading?Object(n.jsx)(I.a,{color:"secondary",display:"flex",justify:"center",alignItems:"center"}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{children:[Object(n.jsx)(C.a,{exact:!0,to:"/"}),Object(n.jsx)(C.a,{to:"/new"}),Object(n.jsx)(C.a,{to:"/delete"}),Object(n.jsx)(C.a,{to:"/update"})]}),Object(n.jsxs)("main",{children:[Object(n.jsx)(w,{}),Object(n.jsx)(Y.a,{exact:!0,path:"/",render:function(i){return Object(n.jsx)(R,Object(u.a)(Object(u.a)({},i),{},{data:e.state.data}))}}),Object(n.jsx)(Y.a,{path:"/new",component:x}),Object(n.jsx)(Y.a,{path:"/update",render:function(e){return Object(n.jsx)(T,Object(u.a)({},e))}}),Object(n.jsx)(Y.a,{path:"/recipe/:title",component:P}),Object(n.jsx)(Y.a,{path:"/success",component:W}),Object(n.jsx)(Y.a,{path:"/fail",component:z})]})]})}}]),s}(t.Component),H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,165)).then((function(i){var s=i.getCLS,n=i.getFID,t=i.getFCP,a=i.getLCP,c=i.getTTFB;s(e),n(e),t(e),a(e),c(e)}))},Q=s(164),U=s(160),V=s(68),X=s(66),Z=s.n(X),$=s(67),_=s.n($),ee=Object(V.a)({palette:{primary:Z.a,secondary:_.a}});c.a.render(Object(n.jsx)(Q.a,{children:Object(n.jsx)(U.a,{theme:ee,children:Object(n.jsx)(q,{})})}),document.getElementById("root")),H()}},[[104,1,2]]]);
//# sourceMappingURL=main.53b28980.chunk.js.map