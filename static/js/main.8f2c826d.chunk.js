(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(13),function(){return r.a.createElement("h2",null,"Expense Tracker")}),o=n(2),s=n(7),m=n(3),i=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(m.a)(Object(m.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(m.a)(Object(m.a)({},e),{},{transactions:[t.payload].concat(Object(s.a)(e.transactions))});default:return e}},E={transactions:[]},d=Object(a.createContext)(E),p=function(e){var t=e.children,n=Object(a.useReducer)(i,E),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(d.Provider,{value:{state:l,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},f=function(){var e=Object(a.useContext)(d).state.transactions.reduce((function(e,t){return e+t.amount}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Your Balance"),r.a.createElement("h1",null,"$",e))},b=function(){var e=Object(a.useContext)(d).state.transactions,t=e.filter((function(e){return e.amount>0})).reduce((function(e,t){return e+t.amount}),0).toFixed(2),n=e.filter((function(e){return e.amount<0})).reduce((function(e,t){return e+t.amount}),0).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},Math.abs(n))))},v=function(e){var t=e.transaction,n=Object(a.useContext)(d).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text,r.a.createElement("span",null,c,"$",Math.abs(t.amount)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return n(t.id)}},"x"))},h=function(){var e=Object(a.useContext)(d).state.transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),e.length>0&&r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},x=n(16),O=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),u=Object(o.a)(l,2),s=u[0],m=u[1],i=Object(a.useContext)(d).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:x.a(),text:n,amount:+s};i(t),c(""),m(0)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:s,onChange:function(e){return m(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add Transaction")))};var N=function(){return r.a.createElement(p,null,r.a.createElement("header",{className:"App-header"},r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(h,null),r.a.createElement(O,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8f2c826d.chunk.js.map