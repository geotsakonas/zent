(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{870:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return R});var t=s(34),p=s.n(t),e=s(35),o=s.n(e),c=s(36),l=s.n(c),u=s(37),i=s.n(u),k=s(46),r=s.n(k),m=s(38),d=s.n(m),g=s(39),h=s.n(g),b=s(771),v=s.n(b),y=s(0),f=s.n(y),E=s(199),C=s(139),w=function(){return f.a.createElement("div",{className:"disabled-component-demo"},f.a.createElement(C.v,null,f.a.createElement(C.c,null),f.a.createElement(C.i,{type:"primary"},"Disabled"),f.a.createElement(C.W,{href:"https://www.youzan.com/",target:"_blank"},"www.youzan.com"),f.a.createElement(C.m,null,"Checkbox"),f.a.createElement(C.R,null),f.a.createElement(C.R,{type:"textarea"}),f.a.createElement(C.eb,null),f.a.createElement(C.nb.Group,null,f.a.createElement(C.nb,{value:"A"},"A"),f.a.createElement(C.nb,{value:"B"},"B"),f.a.createElement(C.nb.Button,{value:"C"},"C")),f.a.createElement(C.pb,null),f.a.createElement(C.qb,null),f.a.createElement(C.rb,null),f.a.createElement(C.xb,null),f.a.createElement(C.tb,null,"SplitButton"),f.a.createElement(C.o,null,f.a.createElement(C.o.Panel,{title:"Collapse 1",key:"1"},"Collapse 1"),f.a.createElement(C.o.Panel,{title:"Collapse 1",key:"2"},"Collapse 2"),f.a.createElement(C.o.Panel,{title:"Collapse 1",key:"3",disabled:!0},"Collapse 3"))),f.a.createElement(C.i,{type:"primary"},"Not Disabled"))},B=function(){return f.a.createElement(C.v,null,f.a.createElement(C.i,{type:"primary",disabled:!1},"Button"))};function D(n){return f.a.createElement(n.tag,v()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function N(n){return f.a.createElement(D,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function z(n){return f.a.createElement(D,{tag:"style",html:n.style})}var _=function(n){function a(){var n,s;p()(this,a);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return s=l()(this,(n=i()(a)).call.apply(n,[this].concat(e))),h()(r()(s),"state",{showCode:!1}),h()(r()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return d()(a,n),o()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return f.a.createElement("div",{className:"zandoc-react-demo"},f.a.createElement("div",{className:"zandoc-react-demo__preview"},p),f.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},f.a.createElement("div",{className:"zandoc-react-demo__title"},f.a.createElement("p",null,s||"")),f.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&f.a.createElement("pre",{className:"zandoc-react-demo__code"},f.a.createElement(D,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),R=function(n){function a(){return p()(this,a),l()(this,i()(a).apply(this,arguments))}return d()(a,n),o()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(E.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return f.a.createElement("div",{className:"zandoc-react-container",key:null},f.a.createElement(z,{style:".disabled-component-demo {\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n\t-ms-flex-direction: column;\n\t    flex-direction: column;\n}\n\n.disabled-component-demo > * {\n\tmargin-bottom: 10px;\n}"}),f.a.createElement(N,{html:'<h2 class="anchor-heading"><a href="#disabled">¶</a><a href="javascript:void(0)" id="disabled" class="anchor-point"></a>Disabled</h2>\n<p>Child Zent components will be disabled. The <code>disabled</code> property of component itself has a higher priority.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),f.a.createElement(_,{title:"Basic Usage",id:"Demo1",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  AutoComplete<span class="token punctuation">,</span>\n  Disabled<span class="token punctuation">,</span>\n  Button<span class="token punctuation">,</span>\n  Link<span class="token punctuation">,</span>\n  Checkbox<span class="token punctuation">,</span>\n  Collapse<span class="token punctuation">,</span>\n  Input<span class="token punctuation">,</span>\n  NumberInput<span class="token punctuation">,</span>\n  Radio<span class="token punctuation">,</span>\n  Rate<span class="token punctuation">,</span>\n  Select<span class="token punctuation">,</span>\n  Slider<span class="token punctuation">,</span>\n  Switch<span class="token punctuation">,</span>\n  SplitButton<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled-component-demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disabled</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoComplete</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.youzan.com/<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>www<span class="token punctuation">.</span>youzan<span class="token punctuation">.</span>com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span><span class="token punctuation">></span></span>Checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberInput</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio.Group</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Radio.Button</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio.Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Radio.Group</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span><span class="token punctuation">></span></span>SplitButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse.Panel</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Collapse 1<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          Collapse <span class="token number">1</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse.Panel</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse.Panel</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Collapse 1<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          Collapse <span class="token number">2</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse.Panel</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse.Panel</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Collapse 1<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n          Collapse <span class="token number">3</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse.Panel</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disabled</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Not Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},f.a.createElement(w)),f.a.createElement(_,{title:"Priority",id:"Demo2",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Disabled<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Disabled</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Button\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Disabled</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},f.a.createElement(B)),f.a.createElement(N,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Required</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td></td>\n<td>bool</td>\n<td>No</td>\n<td>true</td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(y.Component)}}]);