(this.webpackJsonpsmashblocks=this.webpackJsonpsmashblocks||[]).push([[0],{223:function(e,t,n){e.exports=n(668)},668:function(e,t,n){"use strict";n.r(t);var a,o,i,r=n(56),s=n(43),l=n(44),c=n(46),d=n(45),u=n(10),g=n(33),p=n(0),m=n.n(p),h=n(53),f=n.n(h),b=n(73),O=n(34),E={tasks:{"task-1":{id:"task-1",content:"x"},"task-2":{id:"task-2",content:"x"},"task-3":{id:"task-3",content:"55"},"task-4":{id:"task-4",content:"5"},"task-5":{id:"task-5",content:"+"},"task-6":{id:"task-6",content:"+"},"task-7":{id:"task-7",content:"="},"task-8":{id:"task-8",content:"-"}},columns:{"column-1":{id:"column-1",taskIds:[]},"column-2":{id:"column-2",taskIds:["task-1","task-2","task-3","task-4","task-5","task-6","task-7","task-8"]}},columnOrder:["column-1","column-2"],isEqSolutionCorrect:!1,isEqSyntaxCorrect:!1,areaSpace:20,isInserting:!1,initialState:null,varTasks:{"task-1":{id:"task-1",content:"x"},"task-2":{id:"task-2",content:"x"}}},I=O.a.div(a||(a=Object(g.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    box-sizing: border-box; /* includes the padding and border in an element's total width and height.*/\n\n    width: 40px;\n    height: 40px;\n  \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n    margin-right: 10px;\n      /*  distance to next item */\n        /* \n     align items vertically\n     align items horizontally */\n\n    background-color: ",";\n\n    font-size: 1rem;\n"])),(function(e){return e.isDragging?"azure":"white"})),k=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return m.a.createElement(b.b,{draggableId:this.props.task.id,index:this.props.index},(function(t,n){return m.a.createElement(I,Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{isDragging:n.isDragging}),e.props.task.content)}))}}]),n}(m.a.Component),S=O.a.div(o||(o=Object(g.a)(["\n border: 1px solid grey;\n  border-radius: 2px;  \n\n  box-sizing: border-box; /* includes the padding and border in an element's total width and height.*/\n\n\n \n\n\n  /** for horizontal direction (of tasks within a column) */\n  /** NOT NEEDED, What is it for?\n   \n    flex-direction: column;\n  */\n\n  /** ? for horizontal direction (of tasks within a column)? */\n  display: flex;\n  align-items: center; /* align items vertically (within the container) */\n  justify-content: left; /* start items from left; not needed / is default */\n\n\n  padding-left: 10px; /* start first content (item) with some distance to container */\n\n  /** NOT USED YET flex-grow: 1; */\n\n  min-height: 60px;\n  /*      min-width: 365px; transition: background-color 0.2s ease; ... use all space (minus 10px from padding-left) from super container draggablecontext in index.js */\n  \n\n  background-color: ",";\n \n\n/* flex-wrap: wrap; ... replaced by: flex-direction: column; ... wraps areas to next line (if not enough space) */\n    /*  WORKS, NOT NEED IF flex 0 1 auto is used? (bottom) alignment along main axis; items are packed toward the end of the flex-direction. */\n  /* justify-content: flex-end; \n  align-content: flex-end; (right) how flex items are laid out along the cross axis !! DOES NOT WORK IF is wrapped !!!  */\n\n\n"])),(function(e){return e.isDraggingOver?"grey":"lightgrey"})),x=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return m.a.createElement(b.c,{droppableId:this.props.column.id,direction:"horizontal"},(function(t,n){return m.a.createElement(S,Object.assign({ref:t.innerRef},t.droppableProps,{isDraggingOver:n.isDraggingOver}),e.props.tasks.map((function(e,t){return m.a.createElement(k,{key:e.id,task:e,index:t})})),t.placeholder)}))}}]),n}(m.a.Component),v=(n(232),n(233)),y=function(e){var t=e,n="",a=v.solveEquation(t);return console.log("VALIDATION: --- SOLVEEQUATION ---: equation: "+t),a.forEach((function(e){console.log(e.newEquation.ascii()+"            | operation: "+e.changeType),n=e.newEquation.ascii()})),n},j=n(219),N=n(682),C=n(683);function T(e){var t=e.values,n=e.isInserting,a=e.onSliderChange,o=e.onSliderChangeCommited,i=m.a.useState(t.areaSpace),r=Object(j.a)(i,2),s=r[0],l=r[1];if(!n)return console.log("INSERTSLIDER: not executing: prop isInserting: "+n),null;console.log("INSERTSLIDER: executing: prop isInserting: "+n);return m.a.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"}},m.a.createElement(N.a,{value:s,margin:"dense",onChange:function(e){l(""===e.target.value?"":Number(e.target.value)),console.log("InsertSlider | LOG IS: handleInputChange: setValue(event.target.value): "+e.target.value)},onBlur:function(){s<0?(l(0),console.log("INSERTSLIDER LOG IS: handleBlur (0)")):s>100&&(l(100),console.log("INSERTSLIDER LOG IS: handleBlur (100)"))},inputProps:{step:1,min:0,max:800,type:"number","aria-labelledby":"input-slider"}}),m.a.createElement(C.a,{style:{marginTop:"20px"},value:"number"===typeof s?s:0,onChange:function(e,t){l(t),console.log("INSERTSLIDER | handleSliderChange: setValue(newValue): "+t),a(t)},"aria-labelledby":"input-slider",step:1,min:0,max:55,onChangeCommitted:function(){o()}}))}var w,D,R,A,X=O.a.button(i||(i=Object(g.a)(["\n  background-color: grey;\n  font-size: 1rem;\n  color: white;\n  \n  height: 40px;\n  align-content: center;\n  min-width: 80px;      /* override width, to give button a minimum size */\n  width: fit-content;   /* fit button width to text amount*/\n"]))),L=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleClick=function(t){console.log("INSERTBUTTON: handleClick() - isInserting before: "+e.props.isInserting);var n=e.props.isInserting;console.log("INSERTBUTTON: handleClick() - isInserting after: "+n),e.props.onInsertChange(n)},e}return Object(l.a)(n,[{key:"render",value:function(){return console.log("INSERTBUTTON: render(): this.props: isInserting: "+this.props.isInserting),m.a.createElement(X,{type:"button",onClick:this.handleClick},"Pr\xfcfen")}}]),n}(m.a.Component);console.data=function(e){console.log(" % c % s % s % s","color: yellow; background - color: black;","\u2013",e,"\u2013")},console.important=function(e){console.log(" % c % s % s % s","color: brown; font - weight: bold; text - decoration: underline;","\u2013",e,"\u2013")},window.addEventListener("touchmove",(function(e){e.preventDefault()}),{passive:!1});var z=O.a.div(w||(w=Object(g.a)(["\n  /* align-content: flex-end; (right) how flex items are laid out along the cross axis !! DOES NOT WORK IF is wrapped !!!  */\n  /* max-width: 375px; ... forces wrap (on wide screens, by limiting width */\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  height: 100%;\n  width: 100%;\n  max-width: 640px; /* TODO: define for Desktop */\n\n  background-color: white;\n\n  /* POSITION AT BOTTOM (of screen) (fills remaining space) */\n  /* (top->bottom), main-axis,  direction of flex items placement in flex container */\n  /*  WORKS, NOT NEED IF flex 0 1 auto is used? (bottom) alignment along main axis; items are packed toward the end of the flex-direction. */\n"]))),q=O.a.div(D||(D=Object(g.a)(["\n  flex: 10 1 auto; /* (fills remaining space) ...  */\n  padding: 20px;\n\n  font-size: 1rem;\n"]))),B=O.a.div(R||(R=Object(g.a)(["\n  flex: 1 1 auto; /* (fills remaining space) ...  */\n  /*  TRY: color: rgba(0, 0, 0, 0.5) */\n  background-color: ",";\n  padding: 20px;\n  font-size: 1rem;\n"])),(function(e){return e.bgColor?"#F1FDE3":"white"})),J=O.a.div(A||(A=Object(g.a)(["\n  flex: 1 0 auto; /* dont grow, dont shrink, sized to content ... had it at: 0 1 200px; then 0 1 auto */\n\n  /* background-color: lightblue; */\n"])));function P(e){var t=e.columns["column-1"].taskIds.map((function(t){return e.tasks[t].content})).join("");console.log("INDEX: validateNow(): PRINT STATE: current equation: tasks: "+JSON.stringify(t));var n=y(t);console.log("INDEX: validateNow(): validate() result: msResult: "+n);var a=""!==n;console.log("INDEX: validateNow(): isSyntaxCorrect: "+a.toString());var o=!1;return"x = 25"===n&&(o=!0),"x = 30"===n&&(o=!0),console.log("INDEX: validateNow(): isSolutionCorrect: "+o.toString()),Object(u.a)(Object(u.a)({},e),{},{columns:Object(u.a)({},e.columns),isEqSolutionCorrect:o,isEqSyntaxCorrect:a})}function K(e){console.log("INDEX: ValidationFeedback: props.isSolutionCorrect: "+e.isSolutionCorrect);var t="\u2753";return e.isSyntaxCorrect&&(t="\ud83c\udf31"),e.isSolutionCorrect&&(t="\ud83d\ude0d"),console.log("INDEX: ValidationFeedback: validation_feedback: "+t),t}var V=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return m.a.createElement(K,{isSolutionCorrect:this.props.isSolutionCorrect,isSyntaxCorrect:this.props.isSyntaxCorrect},"test ",this.validation_feedback)}}]),n}(p.Component),F=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state=E,e.onDragEnd=function(t){var n;console.log("INDEX: onDragEnd(): --------- dragging ------------"),document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var a=t.destination,o=t.source,i=t.draggableId;if(a&&(a.droppableId!==o.droppableId||a.index!==o.index)){var s=e.state.columns[o.droppableId],l=e.state.columns[a.droppableId];if(s===l){var c=Array.from(s.taskIds);c.splice(o.index,1),c.splice(a.index,0,i);var d=Object(u.a)(Object(u.a)({},l),{},{taskIds:c}),g=Object(u.a)(Object(u.a)({},e.state),{},{columns:Object(u.a)(Object(u.a)({},e.state.columns),{},Object(r.a)({},d.id,d))});e.setState(g);var p=P(g);return e.setState(p),void console.log("INDEX: onDragEnd(): --------- finished dragging (within row) ------------")}var m=Array.from(s.taskIds);m.splice(o.index,1);var h=Object(u.a)(Object(u.a)({},s),{},{taskIds:m}),f=Array.from(l.taskIds);f.splice(a.index,0,i);var b=Object(u.a)(Object(u.a)({},l),{},{taskIds:f}),O=Object(u.a)(Object(u.a)({},e.state),{},{columns:Object(u.a)(Object(u.a)({},e.state.columns),{},(n={},Object(r.a)(n,h.id,h),Object(r.a)(n,b.id,b),n))});e.setState(O);var E=P(O);e.setState(E),console.log("INDEX: onDragEnd(): --------- finished dragging (to other row) ------------")}},e.handleSliderChange=function(t){console.log("INDEX: handleSliderChange(): sliderValue: "+t);e.state.initialState;var n=e.state,a=n.columns["column-1"];console.log("--- COLUMN1: "+JSON.stringify(a));var o=a.taskIds;console.log("--- TASKIDS: "+JSON.stringify(o)),o.map((function(e){return console.log("--- DEBUG TASKid: "+e),e})),console.table(o),o.map((function(t){var n=e.state.tasks[t].content;return console.log("+++ DEBUG TASKTEMPCONTENT: "+JSON.stringify(n)),t}));var i=null;e.state.varTasks;o.map((function(a){var o=e.state.tasks[a].content;if(console.log("+++ cur TASKCONTENT: "+JSON.stringify(o)),"task-1"===a||"task-2"===a){var s=Object(u.a)(Object(u.a)({},n.tasks[a]),{},{content:JSON.stringify(t,null,2)});console.log("+++ found x! NEWTASK: "+JSON.stringify(s)),i=Object(u.a)(Object(u.a)({},e.state),{},{tasks:Object(u.a)(Object(u.a)({},e.state.tasks),{},Object(r.a)({},a,s))}),console.log("+++ NEWSTATE: "+JSON.stringify(i,null,2))}else console.log("INDEX REPLACE: else: did not replace: "+a),i=e.state;return e.setState(i),a}))},e.handleInsertChange=function(t){console.log("INDEX: handleInsertChange(): before isInserting: "+t),t=!t,console.log("INDEX: handleInsertChange(): after isInserting: "+t),console.log("INDEX: handleInsertChange(): before setState() isInserting: "+e.state.isInserting),e.setState((function(e,t){return{isInserting:!e.isInserting}})),console.log("INDEX: handleInsertChange(): state.isInserting: "+e.state.isInserting),t&&(e.setState((function(e){return{initialState:e}})),console.log("+++ this.state: "+JSON.stringify(e.state,null,2)),console.log("SAVED INITIALSTATE SNAPSHOT"))},e.handleSliderChangeCommitted=function(t){var n=e.state,a=n.columns["column-1"].taskIds,o=null;a.map((function(t){if("task-1"===t||"task-2"===t){var a=Object(u.a)(Object(u.a)({},n.tasks[t]),{},{content:"x"});o=Object(u.a)(Object(u.a)({},e.state),{},{tasks:Object(u.a)(Object(u.a)({},e.state.tasks),{},Object(r.a)({},t,a))})}else console.log("INDEX REPLACE: else: did not replace: "+t),o=e.state;return e.setState(o),t}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;console.log("INDEX: render(): ------- RENDER-START ------------- ");var t=this.state,n=t.propertyType,a=t.areaSpace,o=t.designStyle;console.log("INDEX: render(): this.state default: areaSpace: "+a);var i={propertyType:n,areaSpace:a,designStyle:o};return console.log("INDEX: render(): this.state default: isInserting: "+this.state.isInserting),m.a.createElement(b.a,{onDragEnd:this.onDragEnd},m.a.createElement(z,null,m.a.createElement(q,null,"Die Hunde Sammy und Carla wiegen zusammen 55kg. Carla wiegt um 5kg mehr als Sammy.",m.a.createElement("br",null),m.a.createElement("br",null)," Wie schwer sind die Hunde?"),m.a.createElement(B,{bgColor:this.state.isEqSolutionCorrect},"Korrekte L\xf6sung:"," ",m.a.createElement(V,{isSolutionCorrect:this.state.isEqSolutionCorrect,isSyntaxCorrect:this.state.isEqSyntaxCorrect})),m.a.createElement(L,{isInserting:this.state.isInserting,onInsertChange:this.handleInsertChange}),m.a.createElement(J,null,this.state.columnOrder.map((function(t){var n=e.state.columns[t],a=n.taskIds.map((function(t){return e.state.tasks[t]}));return m.a.createElement(x,{key:n.id,column:n,tasks:a})}))),m.a.createElement(T,{values:i,onSliderChange:this.handleSliderChange,onSliderChangeCommited:this.handleSliderChangeCommitted,style:{marginTop:"20px",marginBottom:"20px"},isInserting:this.state.isInserting})))}}]),n}(p.Component);f.a.render(m.a.createElement(F,null),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.d007613b.chunk.js.map