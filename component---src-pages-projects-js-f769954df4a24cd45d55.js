(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{232:function(t,e,i){"use strict";i.r(e),i.d(e,"query",function(){return y});var a=i(1),n=i.n(a),o=i(75),c=i(81),l=i(79),g=i(91),r=i(90);e.default=function(t){var e=t.pageContext.locale,i=t.data;return n.a.createElement(c.b,{locale:e,path:"/projects"},n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(g.a,null,i.file.childProjectsJson.title),n.a.createElement(r.a,null,i.file.childProjectsJson.description)),n.a.createElement(u,null,i.allMarkdownRemark.edges.map(function(t){var e=t.node;return n.a.createElement(I,{image:e.frontmatter.image.publicURL,title:e.frontmatter.title,url:e.frontmatter.url,description:e.excerpt})}))))};var A=Object(o.c)(l.a).withConfig({displayName:"projects__StyledA"})(["opacity:0.95;&:hover{opacity:1;}"]),u=o.c.div.withConfig({displayName:"projects__ProjectsContainer"})(["margin-top:40px;"]),I=Object(o.c)(function(t){return n.a.createElement(A,{href:t.url},n.a.createElement("div",{className:t.className},n.a.createElement(d,{src:t.image,alt:""}),n.a.createElement(M,null,n.a.createElement(m,null,t.title),n.a.createElement(j,null,t.description))))}).withConfig({displayName:"projects__StyledProject"})(["display:flex;padding-left:30px;justify-content:flex-end;margin-bottom:25px;"]),d=o.c.img.withConfig({displayName:"projects__ProjectThumbnail"})(["margin-right:30px;width:300px;height:auto;"]),M=o.c.div.withConfig({displayName:"projects__ProjectInformation"})(["width:50%;"]),m=o.c.h3.withConfig({displayName:"projects__ProjectTitle"})(["width:100%;margin-top:10px;margin-bottom:15px;"]),j=o.c.p.withConfig({displayName:"projects__ProjectDescription"})(["box-sizing:border-box;width:100%;padding-right:30px;"]),y="2122649140"},76:function(t,e,i){"use strict";var a=i(1),n=i.n(a),o=i(0),c=i.n(o),l=i(74),g=i.n(l);i.d(e,"a",function(){return g.a}),i(78),n.a.createContext({}),c.a.object,c.a.string.isRequired,c.a.func,c.a.func},77:function(t,e){t.exports={en:{path:"en",name:"English",default:!0},es:{path:"es",name:"Español"}}},78:function(t,e,i){var a;t.exports=(a=i(88))&&a.default||a},79:function(t,e,i){"use strict";var a=i(75).c.a.withConfig({displayName:"A"})(["color:black;text-decoration:none;outline:none;&:hover{text-decoration:none;}"]);e.a=a},81:function(t,e,i){"use strict";var a=i(93),n=i.n(a),o=(i(92),i(66),i(58),i(80),i(1)),c=i.n(o),l=i(76),g=i(75),r=(i(59),i(89)),A=i.n(r),u=i(77),I=i.n(u),d=i(87),M=i(86),m={desktop:960,tablet:640,mobile:320},j=Object.keys(m).reduce(function(t,e){var i=m[e]/16;return t[e]=function(){return Object(g.b)(["@media (min-width:","em){",";}"],i,g.b.apply(void 0,arguments))},t},{}),y=i(85),p=i.n(y),C=(i(84),i(83)),N=i.n(C),L=i(82),s=i.n(L),b=i(79);function h(){var t=n()(["\n    width: 960px; \n    margin-left: auto;\n    margin-right: auto;\n  "]);return h=function(){return t},t}function x(){var t=n()(["\n    width: 960px; \n    margin-left: auto;\n    margin-right: auto;\n  "]);return x=function(){return t},t}function D(){var t=n()(["\n    width: 960px; \n    margin-left: auto;\n    margin-right: auto;\n  "]);return D=function(){return t},t}function w(){var t=n()(["\n    width: 960px; \n    margin-left: auto;\n    margin-right: auto;\n  "]);return w=function(){return t},t}function z(){var t=n()(["\n    margin-left: auto;\n    margin-right: auto;\n  "]);return z=function(){return t},t}function f(){var t=n()(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  opacity: 0.6;\n  &:hover {\n    opacity: 1;\n  }\n"]);return f=function(){return t},t}function v(){var t=n()(["\n  opacity: 0.6;\n  &:hover {\n    opacity: 1;\n  }\n"]);return v=function(){return t},t}i.d(e,"a",function(){return Y});var S={en:d,es:M},E={colors:{primary:"#a6b575",primary_dark:"#7f8c55",secondary:"#eee7cb",secondary_dark:"#ebe2c5",secondary_darker:"#c5bda4"}},T=c.a.createContext(),Z=T.Provider,Y=T.Consumer,O=(e.b=function(t){var e=t.children,i=(t.data,t.locale),a=t.path;return c.a.createElement(Z,{value:i},c.a.createElement(g.a,{theme:E},c.a.createElement(B,null,i&&c.a.createElement(H,null,c.a.createElement(U,null,Object.keys(I.a).map(function(t){return c.a.createElement(k,{to:I.a[t].default?a:"/"+I.a[t].path+a},c.a.createElement(Q,{active:t===i,key:t},I.a[t].name))}))),c.a.createElement(R,null,c.a.createElement(_,null,c.a.createElement(J,null,c.a.createElement("div",{style:{height:"100%"}},c.a.createElement(P,{to:"/"},c.a.createElement(V,{src:p.a})))),c.a.createElement(F,null,c.a.createElement(K,null,c.a.createElement(O,{to:"/projects/"},S[i].projects),c.a.createElement(O,{to:"/blog/"},S[i].blog),c.a.createElement(O,{to:"/about/"},S[i].about))))),c.a.createElement($,null,c.a.createElement(tt,null,e)),c.a.createElement(et,null,c.a.createElement(it,null,c.a.createElement(at,null,c.a.createElement(X,{href:"https://www.github.com/idest"},c.a.createElement(nt,null,c.a.createElement(ot,{src:N.a}),c.a.createElement(ct,null,"idest"))),c.a.createElement(X,{href:"mailto:ie@idest.io"},c.a.createElement(nt,null,c.a.createElement(ot,{src:s.a}),c.a.createElement(ct,null," ie@idest.io ")))),c.a.createElement("span",null,"© 2018 Iñigo Echeverría"))))))},function(t){return c.a.createElement(q,null,c.a.createElement(W,{to:t.to},c.a.createElement("h3",null,t.children)))}),k=Object(g.c)(l.a).withConfig({displayName:"Layout__StyledLink"})(["color:black;text-decoration:none;outline:none;&:hover{text-decoration:none;}"]),G=Object(g.c)(function(t){var e=t.to,i=A()(t,["to"]);return c.a.createElement(Y,null,function(t){var a=I.a[t].default?e:"/"+I.a[t].path+e;return c.a.createElement(l.a,Object.assign({to:a},i))})}).withConfig({displayName:"Layout__StyledLocalizedLink"})(["color:black;text-decoration:none;outline:none;&:hover{text-decoration:none;font-weight:bold;}"]),W=G.extend(v()),P=G.extend(f()),X=Object(g.c)(b.a).withConfig({displayName:"Layout__StyledA"})(["opacity:0.75;&:hover{opacity:1;font-weight:bold;}"]),B=g.c.div.withConfig({displayName:"Layout__Container"})(["box-sizing:border-box;display:flex;flex-direction:column;width:100%;min-height:100vh;",";"],j.desktop(z())),H=g.c.div.withConfig({displayName:"Layout__TopBarSection"})(["width:100%;background-color:#424242;"]),U=g.c.div.withConfig({displayName:"Layout__TopBar"})(["height:25px;display:flex;justify-content:right;align-items:center;padding-right:80px;",";"],j.desktop(w())),Q=g.c.span.withConfig({displayName:"Layout__LangSpan"})(["font-size:0.8em;margin-left:10px;color:",";"],function(t){return t.active?t.theme.colors.secondary_dark:t.theme.colors.secondary_darker}),R=g.c.div.withConfig({displayName:"Layout__HeaderSection"})(["width:100%;background-color:",";"],function(t){return t.theme.colors.primary}),_=g.c.header.withConfig({displayName:"Layout__Header"})(["box-sizing:border-box;display:flex;flex-wrap:wrap;height:80px;width:100%;",";"],j.desktop(D())),J=g.c.div.withConfig({displayName:"Layout__HeaderTitle"})(["box-sizing:border-box;display:flex;width:30%;height:100%;padding-left:80px;align-items:center;"]),V=g.c.img.withConfig({displayName:"Layout__Logo"})(["box-sizing:border-box;height:85%;width:auto;margin:0;padding:10px;"]),F=g.c.nav.withConfig({displayName:"Layout__Nav"})(["box-sizing:border-box;display:flex;width:70%;height:100%;justify-content:flex-end;align-items:flex-end;padding-right:80px;padding-bottom:10px;"]),K=g.c.ul.withConfig({displayName:"Layout__LinksList"})(["margin:0;"]),q=g.c.li.withConfig({displayName:"Layout__LinkItem"})(["display:inline-block;margin:0;margin-left:1rem;"]),$=g.c.div.withConfig({displayName:"Layout__MainSection"})(["flex:1;width:100%;background-color:",";"],function(t){return t.theme.colors.secondary}),tt=g.c.div.withConfig({displayName:"Layout__Main"})(["box-sizing:border-box;width:100%;height:100%;padding:20px;padding-left:120px;padding-right:120px;",";"],j.desktop(x())),et=g.c.div.withConfig({displayName:"Layout__FooterSection"})(["flex-shrink:0;width:100%;background-color:",";"],function(t){return t.theme.colors.primary_dark}),it=g.c.footer.withConfig({displayName:"Layout__Footer"})(["display:flex;height:100px;width:100%;padding:15px;padding-left:80px;padding-right:80px;justify-content:space-between;align-items:center;",";"],j.desktop(h())),at=g.c.div.withConfig({displayName:"Layout__FooterLinks"})(["display:flex;flex-direction:column;height:100%;padding:15px;justify-content:space-between;"]),nt=g.c.div.withConfig({displayName:"Layout__SocialLink"})(["display:flex;"]),ot=g.c.img.withConfig({displayName:"Layout__SocialIcon"})(["margin-bottom:0;width:20px;height:auto;"]),ct=g.c.span.withConfig({displayName:"Layout__SocialSpan"})(["padding-left:10px;"])},82:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTAuMTEwNDE3bW0iCiAgIGhlaWdodD0iNy40NjQ1ODAxbW0iCiAgIHZpZXdCb3g9IjAgMCAxMC4xMTA0MTcgNy40NjQ1OCIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnOCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4yIDVjM2U4MGQsIDIwMTctMDgtMDYiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im1haWwuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iOCIKICAgICBpbmtzY2FwZTpjeD0iOC41Nzk3MzUxIgogICAgIGlua3NjYXBlOmN5PSI4LjY3MjIwMDUiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzUxIgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIxIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6c25hcC10ZXh0LWJhc2VsaW5lPSJmYWxzZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgaWQ9ImdyaWQxOCIKICAgICAgIG9yaWdpbng9Ii0xNi43NzI5MTYiCiAgICAgICBvcmlnaW55PSItMjc0Ljc0MTY4IiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNi43NzI5MTYsLTE0Ljc5MzczOSkiPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoNDU1NSIKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuODQ5OTk5OTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiCiAgICAgICBkPSJtIDE3LjE5NzkxNiwxNi4wMTI0OTggNC4yMzMzMzQsMy4xNzUgaCAwLjc5Mzc1MSBsIDQuMjMzMzMzLC0zLjE3NSBtIC03LjkzNzUwMSwtMC43OTM3NDEgYyAtMS4zMzMwMDYsMCAtMS4zMjI5MTYsLTAuMDEwMDkgLTEuMzIyOTE2LDEuMzIyOTE3IHYgMy45Njg3NSBjIDAsMS4zMjI5MTcgLTFlLTYsMS4zMjI5MTYgMS4zMjI5MTYsMS4zMjI5MTYgaCA2LjYxNDU4NCBjIDEuMzIxMzE0LDAgMS4zMjI5MTYsLTAuMDAxNiAxLjMyMjkxNiwtMS4zMjI5MTYgdiAtMy45Njg3NSBjIDAsLTEuMzIxMzE0IDAuMDA0MiwtMS4zMjI5MTcgLTEuMzIyOTE2LC0xLjMyMjkxNyB6IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjYyIKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTguNDUyNDU2OWUtNikiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteGRwaT0iOTYiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iOTYiIC8+CiAgPC9nPgo8L3N2Zz4K"},83:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLWdpdGh1Yi1pY29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGUgaWQ9InNpbXBsZWljb25zLWdpdGh1Yi1pY29uIj5HaXRIdWIgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPjwvc3ZnPg=="},84:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLXR3aXR0ZXItaWNvbiIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlIGlkPSJzaW1wbGVpY29ucy10d2l0dGVyLWljb24iPlR3aXR0ZXIgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk1NCA0LjU2OWMtLjg4NS4zODktMS44My42NTQtMi44MjUuNzc1IDEuMDE0LS42MTEgMS43OTQtMS41NzQgMi4xNjMtMi43MjMtLjk1MS41NTUtMi4wMDUuOTU5LTMuMTI3IDEuMTg0LS44OTYtLjk1OS0yLjE3My0xLjU1OS0zLjU5MS0xLjU1OS0yLjcxNyAwLTQuOTIgMi4yMDMtNC45MiA0LjkxNyAwIC4zOS4wNDUuNzY1LjEyNyAxLjEyNEM3LjY5MSA4LjA5NCA0LjA2NiA2LjEzIDEuNjQgMy4xNjFjLS40MjcuNzIyLS42NjYgMS41NjEtLjY2NiAyLjQ3NSAwIDEuNzEuODcgMy4yMTMgMi4xODggNC4wOTYtLjgwNy0uMDI2LTEuNTY2LS4yNDgtMi4yMjgtLjYxNnYuMDYxYzAgMi4zODUgMS42OTMgNC4zNzQgMy45NDYgNC44MjctLjQxMy4xMTEtLjg0OS4xNzEtMS4yOTYuMTcxLS4zMTQgMC0uNjE1LS4wMy0uOTE2LS4wODYuNjMxIDEuOTUzIDIuNDQ1IDMuMzc3IDQuNjA0IDMuNDE3LTEuNjggMS4zMTktMy44MDkgMi4xMDUtNi4xMDIgMi4xMDUtLjM5IDAtLjc3OS0uMDIzLTEuMTctLjA2NyAyLjE4OSAxLjM5NCA0Ljc2OCAyLjIwOSA3LjU1NyAyLjIwOSA5LjA1NCAwIDEzLjk5OS03LjQ5NiAxMy45OTktMTMuOTg2IDAtLjIwOSAwLS40Mi0uMDE1LS42My45NjEtLjY4OSAxLjgtMS41NiAyLjQ2LTIuNTQ4bC0uMDQ3LS4wMnoiLz48L3N2Zz4="},85:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAEwklEQVR4nO3SwZFYMQhEwc0/aTuCPTEW80131buDxM8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHzVH+k/6pztB5eSnbP94FKyc7YfXEp2zvaDS8nO2X5wKdk52w8uJTtn+8GlZOdsP7iU7JztB5eSnbP94FKyc7YfXEp2zvaDS8nO2X5wKdk52w8uJTtn+8GlZOdsP7iU7JztB5eSnbP94FKyc7YfXEp2TvsDts/HjP8dan/A9vmY8b9D7Q/YPh8z/neo/QHb52PG/w61P2D7fMz436H2B2yfjxn/O9T+gO3zMeN/h9ofsH0+ZvzvUPsDts/HjP8dan/A9vmY8b9D7Q/YPh8z/neo/QHb52PG/w61P2D7fMz436H2B2yfjxn/O9T+gO3zMeN/h9ofsH0+ZvzvUPsDts/HjP8dan/A9vmY8b9D7Q/YPh8z/neo/QHb52PG/w6lH7C9tO19vN+/na/e9kE4wG+V1j5fve2DcIDfKq19vnrbB+EAv1Va+3z1tg/CAX6rtPb56m0fhAP8Vmnt89XbPggH+K3S2uert30QDvBbpbXPV2/7IBzgt0prn6/e9kE4wG+V1j5fve2DcIDfKq19vnrbB+EAv1Va+3z1tg/CAX6rtPb56m0fhAP8Vmnt89XbPggH+K3S2uert30QDvBbpbXPV2/7IBzgt0prn6/e9kE4wG+V1j5fve2DcIDfKq19vnrbB+EAv1Va+3z1PCCb3N+QB2ST+xvygGxyf0MekE3ub8gDssn9DXlANrm/IQ/IJvc35AHZ5P6GPCCb3N+QB2ST+xvygGxyf0MekE3ub8gDssn9DXlANrm/IQ/IJvc35AHZ5P6GPCCb3N+QB2ST+xvygGxyf0MekE3n7i+9cPsDXptPXcVtL/R64Wvzqau47YVeL3xtPnUVt73Q64Wvzaeu4rYXer3wtfnUVdz2Qq8XvjafuorbXuj1wtfmU1dx2wu9XvjafOoqbnuh1wtfm09dxW0v9Hrha/Opq7jthV4vfG0+dRW3vdDrha/Np67ithd6vfC1+dRV3PZCrxe+Np+6itte6PXC1+ZTV3HbC71e+Np86ipue6HXC1+bT13FbS/0euFr86mruO2FXi98bT51Fbe90OuFr82nruLqBwy7ti8z9fdSP2DYtX2Zqb+X+gHDru3LTP291A8Ydm1fZurvpX7AsGv7MlN/L/UDhl3bl5n6e6kfMOzavszU30v9gGHX9mWm/l7qBwy7ti8z9fdSP2DYtX2Zqb+X+gHDru3LTP291A8Ydm1fZurvpX7AsGv7MlN/L/UDhl3bl5n6e6kfMOzavszU30v9gGHX9mWm/l7qBwy7ti8z9fdSP2DYtX2Zqb+X+gHDru3LTP291A8Ydm1fZurvJT2gpN+L215IulTc9kLSpeK2F5IuFbe9kHSpuO2FpEvFbS8kXSpueyHpUnHbC0mXitteSLpU3PZC0qXitheSLhW3vZB0qbjthaRLxW0vJF0qbnsh6VJx2wtJl4rbXki6VNz2QtKl4rYXki4FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8Bcahfz2uvPHsAAAAAElFTkSuQmCC"},86:function(t){t.exports={projects:"Proyectos",blog:"Blog",about:"Info"}},87:function(t){t.exports={projects:"Projects",blog:"Blog",about:"About"}},88:function(t,e,i){"use strict";i.r(e);var a=i(1),n=i.n(a),o=i(0),c=i.n(o),l=i(41),g=i(3),r=function(t){var e=t.location,i=g.a.getResourcesForPathname(e.pathname);return n.a.createElement(l.a,{location:e,pageResources:i})};r.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=r},90:function(t,e,i){"use strict";var a=i(75).c.p.withConfig({displayName:"Description"})(["text-align:center;"]);e.a=a},91:function(t,e,i){"use strict";var a=i(75).c.h1.withConfig({displayName:"Title"})(["text-align:center;"]);e.a=a}}]);
//# sourceMappingURL=component---src-pages-projects-js-f769954df4a24cd45d55.js.map