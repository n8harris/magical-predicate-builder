(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(34)},26:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),l=(t(26),t(16)),c=t(14),u=t(4),s=t(6),d=t(7),f=t(9),m=t(8),p=t(10),b=t(1),h=t(2),v=t(3),g="#14abe0",y="#ffffff",E="1.25rem";function O(){var e=Object(b.a)(["\n  display: flex;\n  margin-left: 0.4rem;\n  animation: spin infinite 2s linear;\n  color: ",";\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(b.a)(["\n  font-size: ",";\n  padding: 0.75em 1em;\n  font-weight: 800;\n  text-align: center;\n  letter-spacing: -0.04em;\n  text-transform: uppercase;\n  box-shadow: none;\n  background-image: 'none';\n  outline: none;\n  background-color: ",";\n  color: ",";\n  border: none;\n  cursor: pointer;\n\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n    border: none;\n  }\n"]);return j=function(){return e},e}function x(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n"]);return x=function(){return e},e}function C(){var e=Object(b.a)(["\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  align-items: center;\n"]);return C=function(){return e},e}function k(){var e=Object(b.a)(["\n  visibility: ",";\n"]);return k=function(){return e},e}function L(){var e=Object(b.a)(["\n  margin-left: 0.5em;\n  margin-right: 0.5em;\n"]);return L=function(){return e},e}var w=h.a.div(L()),F=function(e,n){return e.disabled||e.isLoading?"#cfcfcf":n},T=h.a.span(k(),function(e){return function(e){var n="hidden";return e.isLoading&&e.submitType&&(n="visible"),n}(e)}),N=h.a.span(C()),D=h.a.span(x()),P=h.a.button(j(),"1rem",function(e){return F(e,g)},y,function(e){return F(e,g)},y,function(e){return F(e,"#52bfed")},y),V=Object(h.a)(v.a)(O(),"#4a4a4a");function I(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return I=function(){return e},e}var _=h.a.div(I()),S=void 0,z=function(e){return a.a.createElement(w,null,e.isLoading&&e.submitType?"Loading":e.children)};z.defaultProps={isLoading:!1};var U=function(e){var n=e.isLoading,t=e.submitType;return a.a.createElement("div",null,n&&t&&a.a.createElement(V,null))};U.defaultProps={isLoading:!1};var A=function(e){return a.a.createElement(_,null,a.a.createElement(P,Object.assign({type:e.submitType?"submit":"button",disabled:e.isDisabled,isLoading:e.isLoading,onClick:function(e){S.props.isLoading||S.props.isDisabled?e.preventDefault():S.props.onClick(e)}.bind(e)},e),a.a.createElement(D,null,a.a.createElement(N,null,e.children?a.a.createElement(z,{isLoading:e.isLoading,submitType:e.submitType},e.children):null),a.a.createElement(T,{isLoading:e.isLoading,submitType:e.submitType},a.a.createElement(U,{isLoading:e.isLoading,submitType:e.submitType})))))};A.defaultProps={children:null,isDisabled:!1,isLoading:!1,onClick:function(){},submitType:!1};var B=A;function R(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n\n  > * {\n    width: 100%;\n    flex: 1 1 auto;\n    margin: 0 0.5rem 2rem;\n  }\n\n  > *:first-child {\n    margin-left: 0;\n  }\n\n  > *:last-child {\n    margin-right: 0;\n  }\n"]);return R=function(){return e},e}var q=h.a.div(R());function M(){var e=Object(b.a)(["\n  font-family: Brandon, sans-serif;\n  height: 3.125rem;\n  background: ",' url("','") no-repeat right 0.75rem center;\n  background-size: 0.75rem;\n  border: solid;\n  border-width: 0.125rem;\n  border-color: ',";\n  border-radius: 0;\n  appearance: none;\n  box-sizing: border-box;\n  outline: none;\n  width: 100%;\n  padding: 0.625rem;\n  font-size: ",";\n  color: ",";\n\n  &:disabled {\n    cursor: not-allowed;\n    border-color: ",";\n  }\n\n  &:enabled:focus {\n    border-color: ",";\n  }\n\n  &:enabled:active {\n    box-shadow: inset 0 0 0.2rem 0;\n    border-color: ",";\n  }\n\n  &:enabled:hover {\n    border-color: ",";\n  }\n"]);return M=function(){return e},e}var J=h.a.select(M(),y,"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E",g,"1rem","#1f1f1f","#cfcfcf",g,g,g),Q=function(e){function n(e){return Object(s.a)(this,n),Object(f.a)(this,Object(m.a)(n).call(this,e))}return Object(p.a)(n,e),Object(d.a)(n,[{key:"componentWillReceiveProps",value:function(e){e.options!==this.props.options&&this.props.onChange(e.name,e.options[0].title)}},{key:"render",value:function(){var e=this;return a.a.createElement(_,null,a.a.createElement(J,{name:this.props.name,onChange:function(n){return e.props.onChange(n.target.name,n.target.value)},value:this.props.value||this.props.options[0].title,disabled:this.props.disabled},this.props.options.map(function(e){return a.a.createElement("option",{key:e.title,value:e.title},e.title)})))}}]),n}(a.a.Component);Q.defaultProps={name:"selectfield",value:void 0,disabled:!1,onChange:function(){return null}};var Y=Q;function W(){var e=Object(b.a)(["\n  height: 3.125rem;\n  border: solid;\n  border-width: 0.125rem;\n  border-color: ",";\n  border-radius: 0;\n  box-sizing: border-box;\n  outline: none;\n  width: 100%;\n  padding: 0.625rem;\n  font-size: ",";\n  color: ",";\n  background-color: ",";\n  cursor: text;\n\n  &:disabled {\n    cursor: not-allowed;\n    border-color: ",";\n  }\n\n  &:enabled:focus {\n    border-color: ",";\n  }\n\n  &:enabled:hover {\n    border-color: ",";\n  }\n\n  &:enabled:active {\n    box-shadow: inset 0 0 0.2rem 0 ",";\n  }\n"]);return W=function(){return e},e}var G=h.a.input(W(),g,"1rem","#1f1f1f",y,"#cfcfcf",g,g,g),H=function(e){return a.a.createElement(_,null,a.a.createElement(G,{name:e.name,onChange:function(n){return e.onChange(n.target.name,n.target.value)},disabled:e.disabled}))};H.defaultProps={name:"textfield",disabled:!1,onChange:function(){return null}};var K=H;function X(){var e=Object(b.a)(["\n  max-width: 5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return X=function(){return e},e}function Z(){var e=Object(b.a)(["\n  height: 3.125rem;\n  max-width: 5rem;\n  text-align: center;\n  padding: 1rem;\n  background: ",";\n  color: ",";\n"]);return Z=function(){return e},e}var $=h.a.div(Z(),"#cfcfcf","#4a4a4a"),ee=h.a.div(X()),ne=function(e){return a.a.createElement(ee,null,a.a.createElement($,null,e.separator))};ne.defaultProps={separator:"AND"};var te=ne,re=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,{name:"value",onChange:function(n,t){return e.multiValueOnChange(n,t,0)},disabled:e.disabled}),a.a.createElement(te,null),a.a.createElement(K,{name:"value",onChange:function(n,t){return e.multiValueOnChange(n,t,1)},disabled:e.disabled}))};function ae(){var e=Object(b.a)(["\n  max-width: 5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return ae=function(){return e},e}function ie(){var e=Object(b.a)(["\n  color: ",";\n  font-size: ",";\n  cursor: pointer;\n  display: flex;\n"]);return ie=function(){return e},e}var oe=Object(h.a)(v.b)(ie(),function(e){return e.disabled?"#4a4a4a":"#ab1212"},E),le=h.a.div(ae()),ce=function(e){return a.a.createElement(le,null,a.a.createElement(oe,{onClick:function(){return!e.disabled&&e.onClick()},disabled:e.disabled}))};ce.defaultProps={disabled:!1};var ue=ce,se=function(e){return a.a.createElement(q,null,a.a.createElement(Y,{name:"predicate",options:e.predicates,onChange:e.onChange,value:e.predicateValue,disabled:e.disabled}),a.a.createElement(Y,{name:"operator",options:e.operators,onChange:e.onChange,value:e.operatorValue,disabled:e.disabled}),e.multiValue?a.a.createElement(re,{multiValueOnChange:e.multiValueOnChange}):a.a.createElement(K,{name:"value",onChange:e.onChange,disabled:e.disabled}),a.a.createElement(ue,{onClick:e.removeFilter,disabled:e.disabled}))};se.defaultProps={onChange:function(){},multiValue:!1,disabled:!1};var de=se;function fe(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 70rem;\n  padding: 1rem 1rem 0;\n  margin: 0 auto;\n"]);return fe=function(){return e},e}var me=h.a.div(fe());function pe(){var e=Object(b.a)(["\n  font-size: 1.2rem;\n  color: ",";\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  cursor: pointer;\n"]);return pe=function(){return e},e}function be(){var e=Object(b.a)(["\n  position: relative;\n  width: 24rem;\n  color: ",";\n  background: ",";\n  border-radius: 1rem;\n  padding: 1rem 3rem 1rem 1rem;\n  margin: 1rem 0 1rem;\n"]);return be=function(){return e},e}function he(){var e=Object(b.a)(["\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n"]);return he=function(){return e},e}var ve=h.a.div(he()),ge=h.a.div(be(),y,"#ab1212"),ye=Object(h.a)(v.c)(pe(),y),Ee=function(e){return a.a.createElement(ge,null,e.error,a.a.createElement(ye,{onClick:e.dismissError}))};function Oe(){var e=Object(b.a)(["\n  display: flex;\n  animation: spin infinite 2s linear;\n  color: ",";\n\n  @keyframes spin {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n  }\n"]);return Oe=function(){return e},e}function je(){var e=Object(b.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  font-family: Brandon, sans-serif;\n  font-size: 10vw;\n"]);return je=function(){return e},e}var xe=h.a.div(je(),y),Ce=Object(h.a)(v.a)(Oe(),g),ke=function(){return a.a.createElement(xe,null,a.a.createElement(Ce,null))},Le={BUILD_CONTENT_ENDPOINT:"https://localhost:8081/content",BUILD_QUERY_ENDPOINT:"https://localhost:8081/query"};Object({NODE_ENV:"production",PUBLIC_URL:"/magical-predicate-builder"}).REACT_APP_CLOUD&&(Le={BUILD_CONTENT_ENDPOINT:"https://us-central1-ethereal-anvil-225013.cloudfunctions.net/content",BUILD_QUERY_ENDPOINT:"https://us-central1-ethereal-anvil-225013.cloudfunctions.net/query"});var we=Le;function Fe(){var e=Object(b.a)(["\n  width: 100%;\n  padding: 1.5rem;\n  margin: 1rem 0 0;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 1rem;\n"]);return Fe=function(){return e},e}var Te=h.a.div(Fe(),"#cfcfcf","#4a4a4a"),Ne=function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(f.a)(this,Object(m.a)(n).call(this))).state={filters:[],errors:[]},e}return Object(p.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isFetching:!0}),fetch(we.BUILD_CONTENT_ENDPOINT).then(function(n){n.json().then(function(n){Object.keys(n).forEach(function(t){e.setState(function(){return Object(u.a)({},t,n[t])})}),e.setState({isFetching:!1}),e.addFilter()})})}},{key:"addFilter",value:function(){this.setState({filters:this.state.filters.concat([this.getInitialFilter()])})}},{key:"dismissError",value:function(e){this.setState({errors:this.state.errors.filter(function(n,t){return t!==e})})}},{key:"updateFilter",value:function(e,n,t){this.setState(function(r){var a=Object(c.a)(r.filters);return a[e]=Object(l.a)({},a[e],Object(u.a)({},n,t)),{filters:a}})}},{key:"updateMultiValueFilter",value:function(e,n,t,r){var a=Object(c.a)(this.state.filters[e][n]||[]);a[r]=t,this.updateFilter(e,n,a)}},{key:"getActiveOperators",value:function(e){var n=this;return this.state.operators[this.state.predicates.filter(function(t){return n.state.filters[e].predicate===t.title})[0].type]}},{key:"getFullOperator",value:function(e){var n=this;return this.getActiveOperators(e).filter(function(t){return t.title===n.state.filters[e].operator})[0]||{}}},{key:"getInitialFilter",value:function(){return{predicate:this.state.predicates[0].title,operator:this.state.operators[this.state.predicates[0].type][0].title}}},{key:"removeFilter",value:function(e){this.setState({filters:this.state.filters.filter(function(n,t){return e!==t})})}},{key:"submitForm",value:function(e){var n=this;e.preventDefault(),e.stopPropagation(),this.validateForm()&&(this.setState({isLoading:!0}),fetch(we.BUILD_QUERY_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filters:this.state.filters})}).then(function(e){e.json().then(function(e){n.setState({isLoading:!1}),n.setState({query:e.query})})}))}},{key:"validateForm",value:function(){var e=this,n=this.state.filters.reduce(function(n,t,r){if(!t.value)return n.concat(['Filter "'.concat(t.predicate," -> ").concat(t.operator,'" must have a value')]);if(e.getFullOperator(r).multiValue&&!Array.isArray(t.value))return n.concat(['Filter "'.concat(t.predicate," -> ").concat(t.operator,'" must have multiple values')]);var a=new RegExp(e.getFullOperator(r).validPattern);if(Array.isArray(t.value)){var i=t.value.reduce(function(e,n,r){return a.test(n)?e:e.concat(["Value ".concat(r+1,' ("').concat(n,'") for filter "').concat(t.predicate," -> ").concat(t.operator,'" is not valid')])},[]);return t.value.length<=1?i.concat(['Filter "'.concat(t.predicate," -> ").concat(t.operator,'" must have all values filled out')]):n.concat(i)}return a.test(t.value)?n:n.concat(['Value "'.concat(t.value,'" for filter "').concat(t.predicate," -> ").concat(t.operator,'" is not valid')])},[]);return this.setState({errors:n}),0===n.length}},{key:"render",value:function(){var e=this;return console.log(this.state),a.a.createElement(me,null,this.state.isFetching?a.a.createElement(ke,null):a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:function(n){return e.submitForm(n)}},this.state.filters.map(function(n,t){return a.a.createElement(de,{key:"filter-".concat(t),predicates:e.state.predicates,operators:e.getActiveOperators(t),onChange:function(n,r){return e.updateFilter(t,n,r)},multiValueOnChange:function(n,r,a){return e.updateMultiValueFilter(t,n,r,a)},predicateValue:n.predicate,operatorValue:n.operator,multiValue:e.getFullOperator(t).multiValue,disabled:e.state.isLoading,removeFilter:function(){return e.removeFilter(t)}})}),a.a.createElement(q,null,a.a.createElement(B,{onClick:function(){return e.addFilter()},disabled:this.state.isLoading,isLoading:this.state.isLoading},"Add Filter"),a.a.createElement(B,{disabled:this.state.isLoading,isLoading:this.state.isLoading,submitType:!0},"Submit"))),a.a.createElement(ve,null,this.state.errors.map(function(n,t){return a.a.createElement(Ee,{key:"error-".concat(t),error:n,dismissError:function(){return e.dismissError(t)}})})),this.state.query&&a.a.createElement(Te,null,a.a.createElement("pre",null,this.state.query))))}}]),n}(r.Component);o.a.render(a.a.createElement(Ne,null),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.e75c4e80.chunk.js.map