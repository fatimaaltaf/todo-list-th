(this["webpackJsonptodo-list-th"]=this["webpackJsonptodo-list-th"]||[]).push([[0],{28:function(e,t,a){e.exports=a(68)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),o=a.n(l),s=(a(33),a(9)),r=a(5),i=(a(34),a(35),a(26)),m=a.n(i);function u(e){var t=e.addTask,a=["Chores","Groceries","Outing","School","Shopping","Work","None"],l=Object(n.useState)(""),o=Object(r.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(""),p=Object(r.a)(u,2),d=p[0],k=p[1],h=Object(n.useState)(new Date),E=Object(r.a)(h,2),g=E[0],v=E[1],f=Object(n.useState)(a[0]),b=Object(r.a)(f,2),N=b[0],y=b[1];return c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),s&&g?(t(s,d,N,g),i(""),k(""),v(new Date)):alert("Please fill out Title and Date")}},c.a.createElement("span",null,"Title:"),c.a.createElement("input",{type:"text",value:s,name:"Title",onChange:function(e){return i(e.target.value)}}),c.a.createElement("span",null,"Description:"),c.a.createElement("input",{type:"text",value:d,name:"Description",onChange:function(e){return k(e.target.value)}}),c.a.createElement("div",{className:"form-category"},c.a.createElement("label",null,"Pick a category:\xa0",c.a.createElement("select",{onChange:function(e){return y(e.target.value)}},a.map((function(e){return c.a.createElement("option",{value:e},e)})),c.a.createElement("option",{value:""},"None")))),c.a.createElement("span",null,"Due By:\xa0"),c.a.createElement(m.a,{value:g,onChange:function(e){return v(e)}}),c.a.createElement("button",{className:"add-task",type:"submit"},"Add Task"))}var p=a(27),d=a.n(p);a(66);var k=function(e){var t=e.task,a=e.index,n=e.completeTask,l=e.incompleteTask,o=e.deleteTask;return c.a.createElement("div",null,c.a.createElement("div",{className:"task"},c.a.createElement("div",{className:"pending-complete"},t.isCompleted?c.a.createElement("p",{className:"completed"},c.a.createElement("img",{alt:"checkmark-icon",src:"https://img.icons8.com/cotton/35/000000/checkmark.png"})):c.a.createElement("p",{className:"pending"},c.a.createElement("img",{alt:"high-importance-icon",src:"https://img.icons8.com/officel/35/000000/high-importance.png"}))),c.a.createElement("div",{className:"task-title-desc",style:{textDecoration:t.isCompleted?"line-through":""}},c.a.createElement("p",null,"Task:\xa0",t.title)),c.a.createElement("p",{style:{display:t.description?"block":"none"}},"Description:\xa0",t.description),c.a.createElement("p",{className:"task-category",style:{display:t.category?"block":"none"}},t.category),c.a.createElement("div",{className:"dueBy"},"Due By:\xa0",d()(t.startDate).format("MMM Do YYYY")),c.a.createElement("div",{className:"complete-delete"},t.isCompleted?c.a.createElement("button",{className:"complete",onClick:function(){return l(a)}},"Incomplete"):c.a.createElement("button",{className:"complete",onClick:function(){return n(a)}},"Complete"),c.a.createElement("button",{className:"delete",onClick:function(){return o(a)}},"Delete"))))};a(67);var h=function(){var e=Object(n.useState)([{title:"Interview Fatima A",description:"Junior Developer with a passion for changing lives through tech",category:"Work",startDate:new Date,isCompleted:!1}]),t=Object(r.a)(e,2),a=t[0],l=t[1],o=function(e){var t=Object(s.a)(a);t[e].isCompleted=!0,l(t)},i=function(e){var t=Object(s.a)(a);t[e].isCompleted=!1,l(t)},m=function(e){var t=Object(s.a)(a);t.splice(e,1),l(t)};return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"todo-title"},c.a.createElement("img",{alt:"to do list with heart",src:"https://img.icons8.com/plasticine/80/000000/wish-list.png"}),"To Do List"),c.a.createElement("div",{className:"task-list-section"},c.a.createElement(u,{addTask:function(e,t,n,c){var o=[].concat(Object(s.a)(a),[{title:e,description:t,category:n,startDate:c}]);l(o)}})),c.a.createElement("div",{className:"task-list"},c.a.createElement("h3",{className:"tasks-card-title"},"Tasks"),a.length?a.map((function(e,t){return c.a.createElement(k,{key:t,index:t,task:e,completeTask:o,incompleteTask:i,deleteTask:m})})):c.a.createElement("p",{className:"clear-task-message"},"Please add a task")),c.a.createElement("button",{className:"clear-task",onClick:function(){l([])}},"Clear All Tasks"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.a2a674d7.chunk.js.map