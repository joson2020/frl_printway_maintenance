(this.webpackJsonppgc_admin_dev=this.webpackJsonppgc_admin_dev||[]).push([[23],{543:function(e,t,a){e.exports={logo:"logo--EgRgz","fade-in":"fade-in--1EHGs",header:"header--2jVd3",link:"link--eQI7R"}},544:function(e,t,a){e.exports={menu:"menu--1Dgix",right:"right--28OKP",action:"action--qCY2d",search:"search--2x0NT",account:"account--3hQif",avatar:"avatar--1tsB9",name:"name--20lmq",dark:"dark--3GbhV",notificationBox:"notificationBox--2qWA3",count:"count--14rjh",notificationItem:"notificationItem--3Ufro"}},547:function(e,t){},603:function(e,t,a){e.exports={container:"container--2mm71"}},604:function(e,t,a){e.exports=a.p+"static/media/avatar.286b34c5.png"},755:function(e,t,a){"use strict";a.r(t);var n=a(79),r=a(80),c=a(82),o=a(81),i=(a(519),a(520)),s=a(0),l=a.n(s),u=a(543),m=a.n(u),p=(a(207),a(136)),f=(a(601),a(728)),h=(a(542),a(110)),d=a(534),v=a(768),g=a(12),E=(a(280),a(138)),b=a(742),y=a(3),N=a.n(y),O=a(603),w=a.n(O),j=function(e){var t=e.cls,a=Object(b.a)(e,["cls"]);return l.a.createElement(E.a,Object.assign({overlayClassName:N()(w.a.container,t)},a))},I=a(604),k=a.n(I),x=a(544),C=a.n(x),D=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).onMenuClick=function(t){var a=t.key,n=e.props.signOut;if("logout"===a)return n();e.props.history.push("/".concat(a))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.menu,a=e.userInfo,n=g.get(a,"firstName","- No data -"),r=g.get(a,"lastName",""),c=l.a.createElement(h.a,{className:C.a.menu,selectedKeys:[],onClick:this.onMenuClick},t&&l.a.createElement(h.a.Item,{key:"profile",style:{fontWeight:"600"}},l.a.createElement(d.a,null),"Account"),t&&l.a.createElement(h.a.Divider,null),l.a.createElement(h.a.Item,{key:"logout"},l.a.createElement(v.a,null),"Logout"));return n||r?l.a.createElement(j,{overlay:c},l.a.createElement("span",{className:"".concat(C.a.action," ").concat(C.a.account)},l.a.createElement(f.a,{icon:l.a.createElement(d.a,null),size:"default",className:C.a.avatar,src:k.a,alt:"avatar"}),l.a.createElement("div",{className:C.a.name},l.a.createElement("p",null,"".concat(n," ").concat(r))))):l.a.createElement("span",{className:"".concat(C.a.action," ").concat(C.a.account)},l.a.createElement(p.a,{size:"small",style:{marginLeft:8,marginRight:8}}))}}]),a}(l.a.Component),T=(a(605),a(741)),S=a(767),z=a(587),B=a(545),M=a.n(B),A=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.listTopNews,a=e.history,n=l.a.createElement(T.b,{footer:l.a.createElement("div",{style:{padding:"0 20px 10px 20px"}},l.a.createElement("a",{onClick:function(){return a.push("/news")},style:{fontStyle:"italic",color:"#1890ff"}},l.a.createElement(S.a,null),"View all")),size:"small",itemLayout:"horizontal",dataSource:t.news,renderItem:function(e){return l.a.createElement(T.b.Item,null,l.a.createElement(T.b.Item.Meta,{title:l.a.createElement("span",{style:{fontWeight:"500"}},e.title),description:l.a.createElement("div",{className:C.a.notificationItem},e.shortDescription&&M()(e.shortDescription.length>90?e.shortDescription.substring(0,90)+" ...":e.shortDescription),e.createdDate&&l.a.createElement("span",null,new Date(e.createdDate).toLocaleDateString("en-GB")))}))}});return l.a.createElement(E.a,{overlay:n},l.a.createElement("div",{className:C.a.notificationBox},l.a.createElement(z.a,{style:{fontSize:"1.2rem"}}),t.news.length>0&&l.a.createElement("span",{className:C.a.count},t.news.length)))}}]),a}(l.a.Component),J=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={visible:!1},e.showModal=function(){e.setState({visible:!0})},e.handleCancel=function(){e.setState({visible:!1})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.userInfo,a=e.balance,n=e.history,r=e.listTopNews;return l.a.createElement("div",{className:C.a.right},l.a.createElement(A,{history:n,listTopNews:r}),l.a.createElement(D,{history:n,menu:!0,signOut:this.props.signOut,userInfo:t,balance:a}))}}]),a}(s.Component),L=a(192),U=a(269),_=i.a.Header,q=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUserInfo(),this.props.fetchTopNews()}},{key:"render",value:function(){return l.a.createElement(_,{className:m.a.header},l.a.createElement(J,{history:this.props.history,signOut:this.props.signOut,userInfo:this.props.userInfo,listTopNews:this.props.listTopNews}))}}]),a}(s.Component);t.default=Object(L.b)((function(e){return{userInfo:e.toJS().auth.userInfo.data,listTopNews:e.toJS().news.listTopNews}}),(function(e){return{fetchUserInfo:function(){return e(U.a.fetchUserInfo())},fetchTopNews:function(){return e(U.g.fetchTopNews())}}}))(q)}}]);
//# sourceMappingURL=23.89fea190.chunk.js.map