(this.webpackJsonpgpa=this.webpackJsonpgpa||[]).push([[0],{28:function(e,t,a){e.exports=a(42)},33:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(10),s=a.n(o),r=(a(33),a(26)),c=a(20),i=a(17),u=a(18),d=a(5),h=a(21),p=a(19),m=a(57),v=a(25),f=a.n(v),E=(a(34),a(35),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).logCourseInfo=n.logCourseInfo.bind(Object(d.a)(n)),n.applyGrades=n.applyGrades.bind(Object(d.a)(n)),n.calculateGPA=n.calculateGPA.bind(Object(d.a)(n)),n.addNewCourse=n.addNewCourse.bind(Object(d.a)(n)),n.state={courses:[l.a.createElement(C,{onChange:n.logCourseInfo,key:"course-0",id:0})],courseInfo:[]},n.state=Object(c.a)(Object(c.a)({},n.state),{},{totalPoints:null,totalCredits:null,totalGPA:null}),n}return Object(u.a)(a,[{key:"logCourseInfo",value:function(e,t,a){var n=this,l=this.state.courseInfo;l[a]=[e,t],this.setState({courseInfo:l},(function(){return n.applyGrades()}))}},{key:"applyGrades",value:function(){for(var e=this,t=0,a=0,n=0;n<this.state.courseInfo.length;n++)void 0!==this.state.courseInfo[n]&&(t+=this.state.courseInfo[n][0],a+=this.state.courseInfo[n][1]);console.log(t,a),this.setState({totalPoints:t,totalCredits:a},(function(){return e.calculateGPA()}))}},{key:"calculateGPA",value:function(){var e=this.state.totalPoints/this.state.totalCredits;this.setState({GPA:e.toFixed(3)})}},{key:"addNewCourse",value:function(){var e=this;this.setState((function(t){var a=l.a.createElement(C,{onChange:e.logCourseInfo,key:"course-"+t.courses.length,id:t.courses.length});return{courses:[].concat(Object(r.a)(t.courses),[a])}}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"TSA Unofficial GPA Calculator"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("table",{className:"center"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Course Name"),l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Credits"),l.a.createElement("th",null,"Type"))),l.a.createElement("tbody",null,this.state.courses)),l.a.createElement(m.a,{variant:"contained",color:"secondary",startIcon:l.a.createElement(f.a,null),onClick:this.addNewCourse},"Add Course")),l.a.createElement("div",{className:"col"},l.a.createElement("div",{id:"gpa-results"},l.a.createElement("h3",null,"Your GPA is"),l.a.createElement("div",{className:"card"},l.a.createElement("h1",null,this.state.GPA)))))))}}]),a}(l.a.Component)),C=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={points:null,credits:null,type:null},n.handleGradeChange=n.handleGradeChange.bind(Object(d.a)(n)),n.handleCreditChange=n.handleCreditChange.bind(Object(d.a)(n)),n.handleTypeChange=n.handleTypeChange.bind(Object(d.a)(n)),n.passInfo=n.passInfo.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"passInfo",value:function(){if(null!=this.state.points&&!isNaN(this.state.credits)&&0!==this.state.credits&&null!==this.state.credits&&null!=this.state.type){var e=this.state.points,t=this.state.credits,a=this.state.type;if(e<=1.3)e+=0;else switch(a){default:case"Regular":break;case"Honors":e+=.7;break;case"CCP":4.3===e?e=5:e+=1}console.log(e);var n=e*t;this.props.onChange(n,this.state.credits,this.props.id)}}},{key:"handleGradeChange",value:function(e){var t=this;this.setState({points:parseFloat(e.target.value)},(function(){return t.passInfo()}))}},{key:"handleCreditChange",value:function(e){var t=this,a=parseFloat(e.target.value);this.setState({credits:a},(function(){return t.passInfo()}))}},{key:"handleTypeChange",value:function(e){var t=this;this.setState({type:e.target.value},(function(){return t.passInfo()}))}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text"})),l.a.createElement("td",null,l.a.createElement("select",{onInput:this.handleGradeChange,defaultValue:""},l.a.createElement("option",{disabled:!0,hidden:!0,style:{display:"none"},value:""}),l.a.createElement("option",{value:"4.3"},"A+"),l.a.createElement("option",{value:"4.0"},"A"),l.a.createElement("option",{value:"3.7"},"A-"),l.a.createElement("option",{value:"3.3"},"B+"),l.a.createElement("option",{value:"3"},"B"),l.a.createElement("option",{value:"2.7"},"B-"),l.a.createElement("option",{value:"2.3"},"C+"),l.a.createElement("option",{value:"2"},"C"),l.a.createElement("option",{value:"1.7"},"C-"),l.a.createElement("option",{value:"1.3"},"D+"),l.a.createElement("option",{value:"1"},"D"),l.a.createElement("option",{value:"0.7"},"D-"),l.a.createElement("option",{value:"0"},"F"))),l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.handleCreditChange})),l.a.createElement("td",null,l.a.createElement("select",{onInput:this.handleTypeChange,defaultValue:""},l.a.createElement("option",{disabled:!0,hidden:!0,style:{display:"none"},value:""}),l.a.createElement("option",{value:"Regular"},"Regular"),l.a.createElement("option",{value:"Honors"},"Honors"),l.a.createElement("option",{value:"CCP"},"CCP"))))}}]),a}(l.a.Component),g=E;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.619f8335.chunk.js.map