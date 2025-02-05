"use strict";(self.webpackChunkporto=self.webpackChunkporto||[]).push([[249],{7769:(e,t,a)=>{a.d(t,{A:()=>h});var l=a(7953),r=a(8835),n=a(6210),s=a(7070);const i="sidebar_hb1d",m="sidebarItemTitle_QwVI",o="sidebarItemList_er-i",c="sidebarItem_F1np",g="sidebarItemLink_+zEA",d="sidebarItemLinkActive_XGey";var p=a(7524);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.A)(i,"thin-scrollbar"),"aria-label":(0,p.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.A)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.A,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))))))}var E=a(7012);const h=function(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0;return l.createElement(n.A,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,r.A)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},l.createElement(E.A,{toc:a})))))}},5213:(e,t,a)=>{a.d(t,{A:()=>_});var l=a(7953),r=a(8835),n=a(8860),s=a(7524),i=a(7070),m=a(2042),o=a(3758),c=a(7116),g=a(417);const d="blogPostTitle_NgiZ",p="blogPostData_1tAI",u="blogPostDetailsFull_uR3B";var E=a(3803);const h="image_FpLe";const b=function(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(i.A,{className:"avatar__photo-link avatar__photo",href:n},l.createElement("img",{className:h,src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i.A,{href:n,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},v="authorCol_gWf-";function N(e){let{authors:t,assets:a}=e;return 0===t.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>l.createElement("div",{className:(0,r.A)("col col--6",v),key:t},l.createElement(b,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const _=function(e){const t=function(){const{selectMessage:e}=(0,o.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.h)(),{children:h,frontMatter:b,assets:v,metadata:_,truncated:A,isBlogPostPage:f=!1}=e,{date:P,formattedDate:k,permalink:T,tags:w,readingTime:y,title:I,editUrl:L,authors:x}=_,B=v.image??b.image;return l.createElement("article",{className:f?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=f?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:d,itemProp:"headline"},f?I:l.createElement(i.A,{itemProp:"url",to:T},I)),l.createElement("div",{className:(0,r.A)(p,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},k),void 0!==y&&l.createElement(l.Fragment,null," \xb7 ",t(y))),l.createElement(N,{authors:x,assets:v}))})(),B&&l.createElement("meta",{itemProp:"image",content:a(B,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(n.xA,{components:c.A},h)),(w.length>0||A)&&l.createElement("footer",{className:(0,r.A)("row docusaurus-mt-lg",{[u]:f})},w.length>0&&l.createElement("div",{className:(0,r.A)("col",{"col--9":!f})},l.createElement(E.A,{tags:w})),f&&L&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.A,{editUrl:L})),!f&&A&&l.createElement("div",{className:"col col--3 text--right"},l.createElement(i.A,{to:_.permalink,"aria-label":`Read more about ${I}`},l.createElement("b",null,l.createElement(s.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4744:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(7953),r=a(2749),n=a(7769),s=a(5213),i=a(7524),m=a(7070);const o=function(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.A,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.A,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(3758);const g=function(e){const{content:t,sidebar:a}=e,{frontMatter:i,assets:m,metadata:g}=t,{title:d,description:p,nextItem:u,prevItem:E,date:h,tags:b,authors:v}=g,{hide_table_of_contents:N,keywords:_}=i,A=m.image??i.image;return l.createElement(n.A,{wrapperClassName:c.GN.wrapper.blogPages,pageClassName:c.GN.page.blogPostPage,sidebar:a,toc:!N&&t.toc?t.toc:void 0},l.createElement(r.A,{title:d,description:p,keywords:_,image:A},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:h}),v.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:v.map((e=>e.url)).filter(Boolean).join(",")}),b.length>0&&l.createElement("meta",{property:"article:tag",content:b.map((e=>e.label)).join(",")})),l.createElement(s.A,{frontMatter:i,assets:m,metadata:g,isBlogPostPage:!0},l.createElement(t,null)),(u||E)&&l.createElement(o,{nextItem:u,prevItem:E}))}},417:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(7953),r=a(7524),n=a(8311),s=a(8835);const i="iconEdit_lcr0",m=e=>{let{className:t,...a}=e;return l.createElement("svg",(0,n.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var o=a(3758);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.GN.common.editThisPage},l.createElement(m,null),l.createElement(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},3803:(e,t,a)=>{a.d(t,{A:()=>m});var l=a(7953),r=a(8835),n=a(7524),s=a(4359);const i={tags:"tags_zUz3",tag:"tag_UNFv"};function m(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.A)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:i.tag},l.createElement(s.A,{name:t,permalink:a}))}))))}}}]);