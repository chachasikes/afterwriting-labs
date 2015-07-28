/*
 RequireJS 2.1.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/

/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/

/*!
 * js-logger - http://github.com/jonnyreeves/js-logger 
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license. 
 */

/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

/*! jQuery-Impromptu - v6.0.0 - 2014-12-27
* http://trentrichardson.com/Impromptu
* Copyright (c) 2014 Trent Richardson; Licensed MIT */

/*! jsTree - v3.0.9 - 2015-01-05 - (MIT) */

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

// CodeMirror, copyright (c) by Marijn Haverbeke and others

// Distributed under an MIT license: http://codemirror.net/LICENSE

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

   Generated on 21/8/2014 with http://codemirror.net/doc/compress.html
   Version: HEAD

   CodeMirror Library:
   - codemirror.js
 */

!function(a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else{if("function"==typeof define&&define.amd)return define('libs/codemirror/lib/codemirror',[],a);this.CodeMirror=a()}}(function(){"use strict";function w(a,b){if(!(this instanceof w))return new w(a,b);this.options=b=b||{},Pg(je,b,!1),K(b);var c=b.value;"string"==typeof c&&(c=new Kf(c,b.mode)),this.doc=c;var f=this.display=new x(a,c);f.wrapper.CodeMirror=this,G(this),E(this),b.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),b.autofocus&&!o&&ad(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,draggingText:!1,highlight:new Fg},d&&11>e&&setTimeout(Qg(_c,this,!0),20),dd(this),hh();var g=this;Kc(this,function(){g.curOp.forceUpdate=!0,Of(g,c),b.autofocus&&!o||ah()==f.input?setTimeout(Qg(Hd,g),20):Id(g);for(var a in ke)ke.hasOwnProperty(a)&&ke[a](g,b[a],me);Q(g);for(var d=0;d<qe.length;++d)qe[d](g)})}function x(a,b){var c=this,g=c.input=Xg("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none");f?g.style.width="1000px":g.setAttribute("wrap","off"),n&&(g.style.border="1px solid black"),g.setAttribute("autocorrect","off"),g.setAttribute("autocapitalize","off"),g.setAttribute("spellcheck","false"),c.inputDiv=Xg("div",[g],null,"overflow: hidden; position: relative; width: 3px; height: 0px;"),c.scrollbarH=Xg("div",[Xg("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar"),c.scrollbarV=Xg("div",[Xg("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),c.scrollbarFiller=Xg("div",null,"CodeMirror-scrollbar-filler"),c.gutterFiller=Xg("div",null,"CodeMirror-gutter-filler"),c.lineDiv=Xg("div",null,"CodeMirror-code"),c.selectionDiv=Xg("div",null,null,"position: relative; z-index: 1"),c.cursorDiv=Xg("div",null,"CodeMirror-cursors"),c.measure=Xg("div",null,"CodeMirror-measure"),c.lineMeasure=Xg("div",null,"CodeMirror-measure"),c.lineSpace=Xg("div",[c.measure,c.lineMeasure,c.selectionDiv,c.cursorDiv,c.lineDiv],null,"position: relative; outline: none"),c.mover=Xg("div",[Xg("div",[c.lineSpace],"CodeMirror-lines")],null,"position: relative"),c.sizer=Xg("div",[c.mover],"CodeMirror-sizer"),c.heightForcer=Xg("div",null,null,"position: absolute; height: "+Ag+"px; width: 1px;"),c.gutters=Xg("div",null,"CodeMirror-gutters"),c.lineGutter=null,c.scroller=Xg("div",[c.sizer,c.heightForcer,c.gutters],"CodeMirror-scroll"),c.scroller.setAttribute("tabIndex","-1"),c.wrapper=Xg("div",[c.inputDiv,c.scrollbarH,c.scrollbarV,c.scrollbarFiller,c.gutterFiller,c.scroller],"CodeMirror"),d&&8>e&&(c.gutters.style.zIndex=-1,c.scroller.style.paddingRight=0),n&&(g.style.width="0px"),f||(c.scroller.draggable=!0),k&&(c.inputDiv.style.height="1px",c.inputDiv.style.position="absolute"),d&&8>e&&(c.scrollbarH.style.minHeight=c.scrollbarV.style.minWidth="18px"),a.appendChild?a.appendChild(c.wrapper):a(c.wrapper),c.viewFrom=c.viewTo=b.first,c.view=[],c.externalMeasured=null,c.viewOffset=0,c.lastSizeC=0,c.updateLineNumbers=null,c.lineNumWidth=c.lineNumInnerWidth=c.lineNumChars=null,c.prevInput="",c.alignWidgets=!1,c.pollingFast=!1,c.poll=new Fg,c.cachedCharWidth=c.cachedTextHeight=c.cachedPaddingH=null,c.inaccurateSelection=!1,c.maxLine=null,c.maxLineLength=0,c.maxLineChanged=!1,c.wheelDX=c.wheelDY=c.wheelStartX=c.wheelStartY=null,c.shift=!1,c.selForContextMenu=null}function y(a){a.doc.mode=w.getMode(a.options,a.doc.modeOption),z(a)}function z(a){a.doc.iter(function(a){a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null)}),a.doc.frontier=a.doc.first,Ub(a,100),a.state.modeGen++,a.curOp&&Qc(a)}function A(a){a.options.lineWrapping?(dh(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth=""):(ch(a.display.wrapper,"CodeMirror-wrap"),J(a)),C(a),Qc(a),lc(a),setTimeout(function(){N(a)},100)}function B(a){var b=xc(a.display),c=a.options.lineWrapping,d=c&&Math.max(5,a.display.scroller.clientWidth/yc(a.display)-3);return function(e){if(ef(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);return c?f+(Math.ceil(e.text.length/d)||1)*b:f+b}}function C(a){var b=a.doc,c=B(a);b.iter(function(a){var b=c(a);b!=a.height&&Sf(a,b)})}function D(a){var b=ve[a.options.keyMap],c=b.style;a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-keymap-\S+/g,"")+(c?" cm-keymap-"+c:"")}function E(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-"),lc(a)}function F(a){G(a),Qc(a),setTimeout(function(){P(a)},20)}function G(a){var b=a.display.gutters,c=a.options.gutters;Zg(b);for(var d=0;d<c.length;++d){var e=c[d],f=b.appendChild(Xg("div",null,"CodeMirror-gutter "+e));"CodeMirror-linenumbers"==e&&(a.display.lineGutter=f,f.style.width=(a.display.lineNumWidth||1)+"px")}b.style.display=d?"":"none",H(a)}function H(a){var b=a.display.gutters.offsetWidth;a.display.sizer.style.marginLeft=b+"px",a.display.scrollbarH.style.left=a.options.fixedGutter?b+"px":0}function I(a){if(0==a.height)return 0;for(var c,b=a.text.length,d=a;c=Ze(d);){var e=c.find(0,!0);d=e.from.line,b+=e.from.ch-e.to.ch}for(d=a;c=$e(d);){var e=c.find(0,!0);b-=d.text.length-e.from.ch,d=e.to.line,b+=d.text.length-e.to.ch}return b}function J(a){var b=a.display,c=a.doc;b.maxLine=Pf(c,c.first),b.maxLineLength=I(b.maxLine),b.maxLineChanged=!0,c.iter(function(a){var c=I(a);c>b.maxLineLength&&(b.maxLineLength=c,b.maxLine=a)})}function K(a){var b=Mg(a.gutters,"CodeMirror-linenumbers");-1==b&&a.lineNumbers?a.gutters=a.gutters.concat(["CodeMirror-linenumbers"]):b>-1&&!a.lineNumbers&&(a.gutters=a.gutters.slice(0),a.gutters.splice(b,1))}function L(a){return a.display.scroller.clientHeight-a.display.wrapper.clientHeight<Ag-3}function M(a){var b=a.display.scroller;return{clientHeight:b.clientHeight,barHeight:a.display.scrollbarV.clientHeight,scrollWidth:b.scrollWidth,clientWidth:b.clientWidth,hScrollbarTakesSpace:L(a),barWidth:a.display.scrollbarH.clientWidth,docHeight:Math.round(a.doc.height+Zb(a.display))}}function N(a,b){b||(b=M(a));var c=a.display,d=lh(c.measure),e=b.docHeight+Ag,f=b.scrollWidth>b.clientWidth;f&&b.scrollWidth<=b.clientWidth+1&&d>0&&!b.hScrollbarTakesSpace&&(f=!1);var g=e>b.clientHeight;if(g?(c.scrollbarV.style.display="block",c.scrollbarV.style.bottom=f?d+"px":"0",c.scrollbarV.firstChild.style.height=Math.max(0,e-b.clientHeight+(b.barHeight||c.scrollbarV.clientHeight))+"px"):(c.scrollbarV.style.display="",c.scrollbarV.firstChild.style.height="0"),f?(c.scrollbarH.style.display="block",c.scrollbarH.style.right=g?d+"px":"0",c.scrollbarH.firstChild.style.width=b.scrollWidth-b.clientWidth+(b.barWidth||c.scrollbarH.clientWidth)+"px"):(c.scrollbarH.style.display="",c.scrollbarH.firstChild.style.width="0"),f&&g?(c.scrollbarFiller.style.display="block",c.scrollbarFiller.style.height=c.scrollbarFiller.style.width=d+"px"):c.scrollbarFiller.style.display="",f&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(c.gutterFiller.style.display="block",c.gutterFiller.style.height=d+"px",c.gutterFiller.style.width=c.gutters.offsetWidth+"px"):c.gutterFiller.style.display="",!a.state.checkedOverlayScrollbar&&b.clientHeight>0){if(0===d){var h=p&&!l?"12px":"18px";c.scrollbarV.style.minWidth=c.scrollbarH.style.minHeight=h;var i=function(b){og(b)!=c.scrollbarV&&og(b)!=c.scrollbarH&&Lc(a,hd)(b)};qg(c.scrollbarV,"mousedown",i),qg(c.scrollbarH,"mousedown",i)}a.state.checkedOverlayScrollbar=!0}}function O(a,b,c){var d=c&&null!=c.top?Math.max(0,c.top):a.scroller.scrollTop;d=Math.floor(d-Yb(a));var e=c&&null!=c.bottom?c.bottom:d+a.wrapper.clientHeight,f=Uf(b,d),g=Uf(b,e);if(c&&c.ensure){var h=c.ensure.from.line,i=c.ensure.to.line;if(f>h)return{from:h,to:Uf(b,Vf(Pf(b,h))+a.wrapper.clientHeight)};if(Math.min(i,b.lastLine())>=g)return{from:Uf(b,Vf(Pf(b,i))-a.wrapper.clientHeight),to:i}}return{from:f,to:Math.max(g,f+1)}}function P(a){var b=a.display,c=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var d=S(b)-b.scroller.scrollLeft+a.doc.scrollLeft,e=b.gutters.offsetWidth,f=d+"px",g=0;g<c.length;g++)if(!c[g].hidden){a.options.fixedGutter&&c[g].gutter&&(c[g].gutter.style.left=f);var h=c[g].alignable;if(h)for(var i=0;i<h.length;i++)h[i].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=d+e+"px")}}function Q(a){if(!a.options.lineNumbers)return!1;var b=a.doc,c=R(a.options,b.first+b.size-1),d=a.display;if(c.length!=d.lineNumChars){var e=d.measure.appendChild(Xg("div",[Xg("div",c)],"CodeMirror-linenumber CodeMirror-gutter-elt")),f=e.firstChild.offsetWidth,g=e.offsetWidth-f;return d.lineGutter.style.width="",d.lineNumInnerWidth=Math.max(f,d.lineGutter.offsetWidth-g),d.lineNumWidth=d.lineNumInnerWidth+g,d.lineNumChars=d.lineNumInnerWidth?c.length:-1,d.lineGutter.style.width=d.lineNumWidth+"px",H(a),!0}return!1}function R(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function S(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function T(a,b,c){var d=a.display;this.viewport=b,this.visible=O(d,a.doc,b),this.editorIsHidden=!d.wrapper.offsetWidth,this.wrapperHeight=d.wrapper.clientHeight,this.oldViewFrom=d.viewFrom,this.oldViewTo=d.viewTo,this.oldScrollerWidth=d.scroller.clientWidth,this.force=c,this.dims=_(a)}function U(a,b){var c=a.display,d=a.doc;if(b.editorIsHidden)return Sc(a),!1;if(!b.force&&b.visible.from>=c.viewFrom&&b.visible.to<=c.viewTo&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo)&&0==Wc(a))return!1;Q(a)&&(Sc(a),b.dims=_(a));var e=d.first+d.size,f=Math.max(b.visible.from-a.options.viewportMargin,d.first),g=Math.min(e,b.visible.to+a.options.viewportMargin);c.viewFrom<f&&f-c.viewFrom<20&&(f=Math.max(d.first,c.viewFrom)),c.viewTo>g&&c.viewTo-g<20&&(g=Math.min(e,c.viewTo)),v&&(f=cf(a.doc,f),g=df(a.doc,g));var h=f!=c.viewFrom||g!=c.viewTo||c.lastSizeC!=b.wrapperHeight;Vc(a,f,g),c.viewOffset=Vf(Pf(a.doc,c.viewFrom)),a.display.mover.style.top=c.viewOffset+"px";var i=Wc(a);if(!h&&0==i&&!b.force&&(null==c.updateLineNumbers||c.updateLineNumbers>=c.viewTo))return!1;var j=ah();return i>4&&(c.lineDiv.style.display="none"),ab(a,c.updateLineNumbers,b.dims),i>4&&(c.lineDiv.style.display=""),j&&ah()!=j&&j.offsetHeight&&j.focus(),Zg(c.cursorDiv),Zg(c.selectionDiv),h&&(c.lastSizeC=b.wrapperHeight,Ub(a,400)),c.updateLineNumbers=null,!0}function V(a,b){for(var c=b.force,d=b.viewport,e=!0;;e=!1){if(e&&a.options.lineWrapping&&b.oldScrollerWidth!=a.display.scroller.clientWidth)c=!0;else if(c=!1,d&&null!=d.top&&(d={top:Math.min(a.doc.height+Zb(a.display)-Ag-a.display.scroller.clientHeight,d.top)}),b.visible=O(a.display,a.doc,d),b.visible.from>=a.display.viewFrom&&b.visible.to<=a.display.viewTo)break;if(!U(a,b))break;Z(a);var f=M(a);Qb(a),X(a,f),N(a,f)}ug(a,"update",a),(a.display.viewFrom!=b.oldViewFrom||a.display.viewTo!=b.oldViewTo)&&ug(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo)}function W(a,b){var c=new T(a,b);if(U(a,c)){Z(a),V(a,c);var d=M(a);Qb(a),X(a,d),N(a,d)}}function X(a,b){a.display.sizer.style.minHeight=a.display.heightForcer.style.top=b.docHeight+"px",a.display.gutters.style.height=Math.max(b.docHeight,b.clientHeight-Ag)+"px"}function Y(a,b){a.display.sizer.offsetWidth+a.display.gutters.offsetWidth<a.display.scroller.clientWidth-1&&(a.display.sizer.style.minHeight=a.display.heightForcer.style.top="0px",a.display.gutters.style.height=b.docHeight+"px")}function Z(a){for(var b=a.display,c=b.lineDiv.offsetTop,f=0;f<b.view.length;f++){var h,g=b.view[f];if(!g.hidden){if(d&&8>e){var i=g.node.offsetTop+g.node.offsetHeight;h=i-c,c=i}else{var j=g.node.getBoundingClientRect();h=j.bottom-j.top}var k=g.line.height-h;if(2>h&&(h=xc(b)),(k>.001||-.001>k)&&(Sf(g.line,h),$(g.line),g.rest))for(var l=0;l<g.rest.length;l++)$(g.rest[l])}}}function $(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b)a.widgets[b].height=a.widgets[b].node.offsetHeight}function _(a){for(var b=a.display,c={},d={},e=b.gutters.firstChild,f=0;e;e=e.nextSibling,++f)c[a.options.gutters[f]]=e.offsetLeft,d[a.options.gutters[f]]=e.offsetWidth;return{fixedPos:S(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:c,gutterWidth:d,wrapperWidth:b.wrapper.clientWidth}}function ab(a,b,c){function i(b){var c=b.nextSibling;return f&&p&&a.display.currentWheelTarget==b?b.style.display="none":b.parentNode.removeChild(b),c}for(var d=a.display,e=a.options.lineNumbers,g=d.lineDiv,h=g.firstChild,j=d.view,k=d.viewFrom,l=0;l<j.length;l++){var m=j[l];if(m.hidden);else if(m.node){for(;h!=m.node;)h=i(h);var o=e&&null!=b&&k>=b&&m.lineNumber;m.changes&&(Mg(m.changes,"gutter")>-1&&(o=!1),bb(a,m,k,c)),o&&(Zg(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(R(a.options,k)))),h=m.node.nextSibling}else{var n=jb(a,m,k,c);g.insertBefore(n,h)}k+=m.size}for(;h;)h=i(h)}function bb(a,b,c,d){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];"text"==f?fb(a,b):"gutter"==f?hb(a,b,c,d):"class"==f?gb(b):"widget"==f&&ib(b,d)}b.changes=null}function cb(a){return a.node==a.text&&(a.node=Xg("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),d&&8>e&&(a.node.style.zIndex=2)),a.node}function db(a){var b=a.bgClass?a.bgClass+" "+(a.line.bgClass||""):a.line.bgClass;if(b&&(b+=" CodeMirror-linebackground"),a.background)b?a.background.className=b:(a.background.parentNode.removeChild(a.background),a.background=null);else if(b){var c=cb(a);a.background=c.insertBefore(Xg("div",null,b),c.firstChild)}}function eb(a,b){var c=a.display.externalMeasured;return c&&c.line==b.line?(a.display.externalMeasured=null,b.measure=c.measure,c.built):yf(a,b)}function fb(a,b){var c=b.text.className,d=eb(a,b);b.text==b.node&&(b.node=d.pre),b.text.parentNode.replaceChild(d.pre,b.text),b.text=d.pre,d.bgClass!=b.bgClass||d.textClass!=b.textClass?(b.bgClass=d.bgClass,b.textClass=d.textClass,gb(b)):c&&(b.text.className=c)}function gb(a){db(a),a.line.wrapClass?cb(a).className=a.line.wrapClass:a.node!=a.text&&(a.node.className="");var b=a.textClass?a.textClass+" "+(a.line.textClass||""):a.line.textClass;a.text.className=b||""}function hb(a,b,c,d){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);var e=b.line.gutterMarkers;if(a.options.lineNumbers||e){var f=cb(b),g=b.gutter=f.insertBefore(Xg("div",null,"CodeMirror-gutter-wrapper","position: absolute; left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px"),b.text);if(!a.options.lineNumbers||e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(Xg("div",R(a.options,c),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+d.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+a.display.lineNumInnerWidth+"px"))),e)for(var h=0;h<a.options.gutters.length;++h){var i=a.options.gutters[h],j=e.hasOwnProperty(i)&&e[i];j&&g.appendChild(Xg("div",[j],"CodeMirror-gutter-elt","left: "+d.gutterLeft[i]+"px; width: "+d.gutterWidth[i]+"px"))}}}function ib(a,b){a.alignable&&(a.alignable=null);for(var d,c=a.node.firstChild;c;c=d){var d=c.nextSibling;"CodeMirror-linewidget"==c.className&&a.node.removeChild(c)}kb(a,b)}function jb(a,b,c,d){var e=eb(a,b);return b.text=b.node=e.pre,e.bgClass&&(b.bgClass=e.bgClass),e.textClass&&(b.textClass=e.textClass),gb(b),hb(a,b,c,d),kb(b,d),b.node}function kb(a,b){if(lb(a.line,a,b,!0),a.rest)for(var c=0;c<a.rest.length;c++)lb(a.rest[c],a,b,!1)}function lb(a,b,c,d){if(a.widgets)for(var e=cb(b),f=0,g=a.widgets;f<g.length;++f){var h=g[f],i=Xg("div",[h.node],"CodeMirror-linewidget");h.handleMouseEvents||(i.ignoreEvents=!0),mb(h,i,b,c),d&&h.above?e.insertBefore(i,b.gutter||b.text):e.appendChild(i),ug(h,"redraw")}}function mb(a,b,c,d){if(a.noHScroll){(c.alignable||(c.alignable=[])).push(b);var e=d.wrapperWidth;b.style.left=d.fixedPos+"px",a.coverGutter||(e-=d.gutterTotalWidth,b.style.paddingLeft=d.gutterTotalWidth+"px"),b.style.width=e+"px"}a.coverGutter&&(b.style.zIndex=5,b.style.position="relative",a.noHScroll||(b.style.marginLeft=-d.gutterTotalWidth+"px"))}function pb(a){return nb(a.line,a.ch)}function qb(a,b){return ob(a,b)<0?b:a}function rb(a,b){return ob(a,b)<0?a:b}function sb(a,b){this.ranges=a,this.primIndex=b}function tb(a,b){this.anchor=a,this.head=b}function ub(a,b){var c=a[b];a.sort(function(a,b){return ob(a.from(),b.from())}),b=Mg(a,c);for(var d=1;d<a.length;d++){var e=a[d],f=a[d-1];if(ob(f.to(),e.from())>=0){var g=rb(f.from(),e.from()),h=qb(f.to(),e.to()),i=f.empty()?e.from()==e.head:f.from()==f.head;b>=d&&--b,a.splice(--d,2,new tb(i?h:g,i?g:h))}}return new sb(a,b)}function vb(a,b){return new sb([new tb(a,b||a)],0)}function wb(a,b){return Math.max(a.first,Math.min(b,a.first+a.size-1))}function xb(a,b){if(b.line<a.first)return nb(a.first,0);var c=a.first+a.size-1;return b.line>c?nb(c,Pf(a,c).text.length):yb(b,Pf(a,b.line).text.length)}function yb(a,b){var c=a.ch;return null==c||c>b?nb(a.line,b):0>c?nb(a.line,0):a}function zb(a,b){return b>=a.first&&b<a.first+a.size}function Ab(a,b){for(var c=[],d=0;d<b.length;d++)c[d]=xb(a,b[d]);return c}function Bb(a,b,c,d){if(a.cm&&a.cm.display.shift||a.extend){var e=b.anchor;if(d){var f=ob(c,e)<0;f!=ob(d,e)<0?(e=c,c=d):f!=ob(c,d)<0&&(c=d)}return new tb(e,c)}return new tb(d||c,c)}function Cb(a,b,c,d){Ib(a,new sb([Bb(a,a.sel.primary(),b,c)],0),d)}function Db(a,b,c){for(var d=[],e=0;e<a.sel.ranges.length;e++)d[e]=Bb(a,a.sel.ranges[e],b[e],null);var f=ub(d,a.sel.primIndex);Ib(a,f,c)}function Eb(a,b,c,d){var e=a.sel.ranges.slice(0);e[b]=c,Ib(a,ub(e,a.sel.primIndex),d)}function Fb(a,b,c,d){Ib(a,vb(b,c),d)}function Gb(a,b){var c={ranges:b.ranges,update:function(b){this.ranges=[];for(var c=0;c<b.length;c++)this.ranges[c]=new tb(xb(a,b[c].anchor),xb(a,b[c].head))}};return sg(a,"beforeSelectionChange",a,c),a.cm&&sg(a.cm,"beforeSelectionChange",a.cm,c),c.ranges!=b.ranges?ub(c.ranges,c.ranges.length-1):b}function Hb(a,b,c){var d=a.history.done,e=Kg(d);e&&e.ranges?(d[d.length-1]=b,Jb(a,b,c)):Ib(a,b,c)}function Ib(a,b,c){Jb(a,b,c),bg(a,a.sel,a.cm?a.cm.curOp.id:0/0,c)}function Jb(a,b,c){(yg(a,"beforeSelectionChange")||a.cm&&yg(a.cm,"beforeSelectionChange"))&&(b=Gb(a,b));var d=c&&c.bias||(ob(b.primary().head,a.sel.primary().head)<0?-1:1);Kb(a,Mb(a,b,d,!0)),c&&c.scroll===!1||!a.cm||be(a.cm)}function Kb(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=a.cm.curOp.selectionChanged=!0,xg(a.cm)),ug(a,"cursorActivity",a))}function Lb(a){Kb(a,Mb(a,a.sel,null,!1),Cg)}function Mb(a,b,c,d){for(var e,f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=Nb(a,g.anchor,c,d),i=Nb(a,g.head,c,d);(e||h!=g.anchor||i!=g.head)&&(e||(e=b.ranges.slice(0,f)),e[f]=new tb(h,i))}return e?ub(e,b.primIndex):b}function Nb(a,b,c,d){var e=!1,f=b,g=c||1;a.cantEdit=!1;a:for(;;){var h=Pf(a,f.line);if(h.markedSpans)for(var i=0;i<h.markedSpans.length;++i){var j=h.markedSpans[i],k=j.marker;if((null==j.from||(k.inclusiveLeft?j.from<=f.ch:j.from<f.ch))&&(null==j.to||(k.inclusiveRight?j.to>=f.ch:j.to>f.ch))){if(d&&(sg(k,"beforeCursorEnter"),k.explicitlyCleared)){if(h.markedSpans){--i;continue}break}if(!k.atomic)continue;var l=k.find(0>g?-1:1);if(0==ob(l,f)&&(l.ch+=g,l.ch<0?l=l.line>a.first?xb(a,nb(l.line-1)):null:l.ch>h.text.length&&(l=l.line<a.first+a.size-1?nb(l.line+1,0):null),!l)){if(e)return d?(a.cantEdit=!0,nb(a.first,0)):Nb(a,b,c,!0);e=!0,l=b,g=-g}f=l;continue a}}return f}}function Ob(a){for(var b=a.display,c=a.doc,d={},e=d.cursors=document.createDocumentFragment(),f=d.selection=document.createDocumentFragment(),g=0;g<c.sel.ranges.length;g++){var h=c.sel.ranges[g],i=h.empty();(i||a.options.showCursorWhenSelecting)&&Rb(a,h,e),i||Sb(a,h,f)}if(a.options.moveInputWithCursor){var j=rc(a,c.sel.primary().head,"div"),k=b.wrapper.getBoundingClientRect(),l=b.lineDiv.getBoundingClientRect();d.teTop=Math.max(0,Math.min(b.wrapper.clientHeight-10,j.top+l.top-k.top)),d.teLeft=Math.max(0,Math.min(b.wrapper.clientWidth-10,j.left+l.left-k.left))}return d}function Pb(a,b){$g(a.display.cursorDiv,b.cursors),$g(a.display.selectionDiv,b.selection),null!=b.teTop&&(a.display.inputDiv.style.top=b.teTop+"px",a.display.inputDiv.style.left=b.teLeft+"px")}function Qb(a){Pb(a,Ob(a))}function Rb(a,b,c){var d=rc(a,b.head,"div",null,null,!a.options.singleCursorHeightPerLine),e=c.appendChild(Xg("div","\xa0","CodeMirror-cursor"));if(e.style.left=d.left+"px",e.style.top=d.top+"px",e.style.height=Math.max(0,d.bottom-d.top)*a.options.cursorHeight+"px",d.other){var f=c.appendChild(Xg("div","\xa0","CodeMirror-cursor CodeMirror-secondarycursor"));f.style.display="",f.style.left=d.other.left+"px",f.style.top=d.other.top+"px",f.style.height=.85*(d.other.bottom-d.other.top)+"px"}}function Sb(a,b,c){function j(a,b,c,d){0>b&&(b=0),b=Math.round(b),d=Math.round(d),f.appendChild(Xg("div",null,"CodeMirror-selected","position: absolute; left: "+a+"px; top: "+b+"px; width: "+(null==c?i-a:c)+"px; height: "+(d-b)+"px"))}function k(b,c,d){function m(c,d){return qc(a,nb(b,c),"div",f,d)}var k,l,f=Pf(e,b),g=f.text.length;return wh(Wf(f),c||0,null==d?g:d,function(a,b,e){var n,o,p,f=m(a,"left");if(a==b)n=f,o=p=f.left;else{if(n=m(b-1,"right"),"rtl"==e){var q=f;f=n,n=q}o=f.left,p=n.right}null==c&&0==a&&(o=h),n.top-f.top>3&&(j(o,f.top,null,f.bottom),o=h,f.bottom<n.top&&j(o,f.bottom,null,n.top)),null==d&&b==g&&(p=i),(!k||f.top<k.top||f.top==k.top&&f.left<k.left)&&(k=f),(!l||n.bottom>l.bottom||n.bottom==l.bottom&&n.right>l.right)&&(l=n),h+1>o&&(o=h),j(o,n.top,p-o,n.bottom)}),{start:k,end:l}}var d=a.display,e=a.doc,f=document.createDocumentFragment(),g=$b(a.display),h=g.left,i=d.lineSpace.offsetWidth-g.right,l=b.from(),m=b.to();if(l.line==m.line)k(l.line,l.ch,m.ch);else{var n=Pf(e,l.line),o=Pf(e,m.line),p=af(n)==af(o),q=k(l.line,l.ch,p?n.text.length+1:null).end,r=k(m.line,p?0:null,m.ch).start;p&&(q.top<r.top-2?(j(q.right,q.top,null,q.bottom),j(h,r.top,r.left,r.bottom)):j(q.right,q.top,r.left-q.right,q.bottom)),q.bottom<r.top&&j(h,q.bottom,null,r.top)}c.appendChild(f)}function Tb(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var c=!0;b.cursorDiv.style.visibility="",a.options.cursorBlinkRate>0?b.blinker=setInterval(function(){b.cursorDiv.style.visibility=(c=!c)?"":"hidden"},a.options.cursorBlinkRate):a.options.cursorBlinkRate<0&&(b.cursorDiv.style.visibility="hidden")}}function Ub(a,b){a.doc.mode.startState&&a.doc.frontier<a.display.viewTo&&a.state.highlight.set(b,Qg(Vb,a))}function Vb(a){var b=a.doc;if(b.frontier<b.first&&(b.frontier=b.first),!(b.frontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,d=se(b.mode,Xb(a,b.frontier)),e=[];b.iter(b.frontier,Math.min(b.first+b.size,a.display.viewTo+500),function(f){if(b.frontier>=a.display.viewFrom){var g=f.styles,h=sf(a,f,d,!0);f.styles=h.styles;var i=f.styleClasses,j=h.classes;j?f.styleClasses=j:i&&(f.styleClasses=null);for(var k=!g||g.length!=f.styles.length||i!=j&&(!i||!j||i.bgClass!=j.bgClass||i.textClass!=j.textClass),l=0;!k&&l<g.length;++l)k=g[l]!=f.styles[l];k&&e.push(b.frontier),f.stateAfter=se(b.mode,d)}else uf(a,f.text,d),f.stateAfter=0==b.frontier%5?se(b.mode,d):null;return++b.frontier,+new Date>c?(Ub(a,a.options.workDelay),!0):void 0}),e.length&&Kc(a,function(){for(var b=0;b<e.length;b++)Rc(a,e[b],"text")})}}function Wb(a,b,c){for(var d,e,f=a.doc,g=c?-1:b-(a.doc.mode.innerMode?1e3:100),h=b;h>g;--h){if(h<=f.first)return f.first;var i=Pf(f,h-1);if(i.stateAfter&&(!c||h<=f.frontier))return h;var j=Gg(i.text,null,a.options.tabSize);(null==e||d>j)&&(e=h-1,d=j)}return e}function Xb(a,b,c){var d=a.doc,e=a.display;if(!d.mode.startState)return!0;var f=Wb(a,b,c),g=f>d.first&&Pf(d,f-1).stateAfter;return g=g?se(d.mode,g):te(d.mode),d.iter(f,b,function(c){uf(a,c.text,g);var h=f==b-1||0==f%5||f>=e.viewFrom&&f<e.viewTo;c.stateAfter=h?se(d.mode,g):null,++f}),c&&(d.frontier=f),g}function Yb(a){return a.lineSpace.offsetTop}function Zb(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function $b(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=$g(a.measure,Xg("pre","x")),c=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle,d={left:parseInt(c.paddingLeft),right:parseInt(c.paddingRight)};return isNaN(d.left)||isNaN(d.right)||(a.cachedPaddingH=d),d}function _b(a,b,c){var d=a.options.lineWrapping,e=d&&a.display.scroller.clientWidth;if(!b.measure.heights||d&&b.measure.width!=e){var f=b.measure.heights=[];if(d){b.measure.width=e;for(var g=b.text.firstChild.getClientRects(),h=0;h<g.length-1;h++){var i=g[h],j=g[h+1];Math.abs(i.bottom-j.bottom)>2&&f.push((i.bottom+j.top)/2-c.top)}}f.push(c.bottom-c.top)}}function ac(a,b,c){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};for(var d=0;d<a.rest.length;d++)if(a.rest[d]==b)return{map:a.measure.maps[d],cache:a.measure.caches[d]};for(var d=0;d<a.rest.length;d++)if(Tf(a.rest[d])>c)return{map:a.measure.maps[d],cache:a.measure.caches[d],before:!0}}function bc(a,b){b=af(b);var c=Tf(b),d=a.display.externalMeasured=new Oc(a.doc,b,c);d.lineN=c;var e=d.built=yf(a,d);return d.text=e.pre,$g(a.display.lineMeasure,e.pre),d}function cc(a,b,c,d){return fc(a,ec(a,b),c,d)}function dc(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[Tc(a,b)];var c=a.display.externalMeasured;return c&&b>=c.lineN&&b<c.lineN+c.size?c:void 0}function ec(a,b){var c=Tf(b),d=dc(a,c);d&&!d.text?d=null:d&&d.changes&&bb(a,d,c,_(a)),d||(d=bc(a,b));var e=ac(d,b,c);return{line:b,view:d,rect:null,map:e.map,cache:e.cache,before:e.before,hasHeights:!1}}function fc(a,b,c,d,e){b.before&&(c=-1);var g,f=c+(d||"");return b.cache.hasOwnProperty(f)?g=b.cache[f]:(b.rect||(b.rect=b.view.text.getBoundingClientRect()),b.hasHeights||(_b(a,b.view,b.rect),b.hasHeights=!0),g=hc(a,b,c,d),g.bogus||(b.cache[f]=g)),{left:g.left,right:g.right,top:e?g.rtop:g.top,bottom:e?g.rbottom:g.bottom}}function hc(a,b,c,f){for(var h,i,j,k,g=b.map,l=0;l<g.length;l+=3){var m=g[l],n=g[l+1];if(m>c?(i=0,j=1,k="left"):n>c?(i=c-m,j=i+1):(l==g.length-3||c==n&&g[l+3]>c)&&(j=n-m,i=j-1,c>=n&&(k="right")),null!=i){if(h=g[l+2],m==n&&f==(h.insertLeft?"left":"right")&&(k=f),"left"==f&&0==i)for(;l&&g[l-2]==g[l-3]&&g[l-1].insertLeft;)h=g[(l-=3)+2],k="left";if("right"==f&&i==n-m)for(;l<g.length-3&&g[l+3]==g[l+4]&&!g[l+5].insertLeft;)h=g[(l+=3)+2],k="right";break}}var o;if(3==h.nodeType)for(;;){for(;i&&Wg(b.line.text.charAt(m+i));)--i;for(;n>m+j&&Wg(b.line.text.charAt(m+j));)++j;if(d&&9>e&&0==i&&j==n-m)o=h.parentNode.getBoundingClientRect();else if(d&&a.options.lineWrapping){var p=Yg(h,i,j).getClientRects();o=p.length?p["right"==f?p.length-1:0]:gc}else o=Yg(h,i,j).getBoundingClientRect()||gc;if(o.left||o.right||0==i)break;j=i,i-=1,k="right"}else{i>0&&(k=f="right");var p;o=a.options.lineWrapping&&(p=h.getClientRects()).length>1?p["right"==f?p.length-1:0]:h.getBoundingClientRect()}if(d&&9>e&&!i&&(!o||!o.left&&!o.right)){var q=h.parentNode.getClientRects()[0];o=q?{left:q.left,right:q.left+yc(a.display),top:q.top,bottom:q.bottom}:gc}d&&11>e&&(o=ic(a.display.measure,o));for(var r=o.top-b.rect.top,s=o.bottom-b.rect.top,t=(r+s)/2,u=b.view.measure.heights,l=0;l<u.length-1&&!(t<u[l]);l++);var v=l?u[l-1]:0,w=u[l],x={left:("right"==k?o.right:o.left)-b.rect.left,right:("left"==k?o.left:o.right)-b.rect.left,top:v,bottom:w};return o.left||o.right||(x.bogus=!0),a.options.singleCursorHeightPerLine||(x.rtop=r,x.rbottom=s),x}function ic(a,b){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!uh(a))return b;var c=screen.logicalXDPI/screen.deviceXDPI,d=screen.logicalYDPI/screen.deviceYDPI;return{left:b.left*c,right:b.right*c,top:b.top*d,bottom:b.bottom*d}}function jc(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]={}}function kc(a){a.display.externalMeasure=null,Zg(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)jc(a.display.view[b])}function lc(a){kc(a),a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null,a.options.lineWrapping||(a.display.maxLineChanged=!0),a.display.lineNumChars=null}function mc(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function nc(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function oc(a,b,c,d){if(b.widgets)for(var e=0;e<b.widgets.length;++e)if(b.widgets[e].above){var f=jf(b.widgets[e]);c.top+=f,c.bottom+=f}if("line"==d)return c;d||(d="local");var g=Vf(b);if("local"==d?g+=Yb(a.display):g-=a.display.viewOffset,"page"==d||"window"==d){var h=a.display.lineSpace.getBoundingClientRect();g+=h.top+("window"==d?0:nc());var i=h.left+("window"==d?0:mc());c.left+=i,c.right+=i}return c.top+=g,c.bottom+=g,c}function pc(a,b,c){if("div"==c)return b;var d=b.left,e=b.top;if("page"==c)d-=mc(),e-=nc();else if("local"==c||!c){var f=a.display.sizer.getBoundingClientRect();d+=f.left,e+=f.top}var g=a.display.lineSpace.getBoundingClientRect();return{left:d-g.left,top:e-g.top}}function qc(a,b,c,d,e){return d||(d=Pf(a.doc,b.line)),oc(a,d,cc(a,d,b.ch,e),c)}function rc(a,b,c,d,e,f){function g(b,g){var h=fc(a,e,b,g?"right":"left",f);return g?h.left=h.right:h.right=h.left,oc(a,d,h,c)}function h(a,b){var c=i[b],d=c.level%2;return a==xh(c)&&b&&c.level<i[b-1].level?(c=i[--b],a=yh(c)-(c.level%2?0:1),d=!0):a==yh(c)&&b<i.length-1&&c.level<i[b+1].level&&(c=i[++b],a=xh(c)-c.level%2,d=!1),d&&a==c.to&&a>c.from?g(a-1):g(a,d)}d=d||Pf(a.doc,b.line),e||(e=ec(a,d));var i=Wf(d),j=b.ch;if(!i)return g(j);var k=Gh(i,j),l=h(j,k);return null!=Fh&&(l.other=h(j,Fh)),l}function sc(a,b){var c=0,b=xb(a.doc,b);a.options.lineWrapping||(c=yc(a.display)*b.ch);var d=Pf(a.doc,b.line),e=Vf(d)+Yb(a.display);return{left:c,right:c,top:e,bottom:e+d.height}}function tc(a,b,c,d){var e=nb(a,b);return e.xRel=d,c&&(e.outside=!0),e}function uc(a,b,c){var d=a.doc;if(c+=a.display.viewOffset,0>c)return tc(d.first,0,!0,-1);var e=Uf(d,c),f=d.first+d.size-1;if(e>f)return tc(d.first+d.size-1,Pf(d,f).text.length,!0,1);0>b&&(b=0);for(var g=Pf(d,e);;){var h=vc(a,g,e,b,c),i=$e(g),j=i&&i.find(0,!0);if(!i||!(h.ch>j.from.ch||h.ch==j.from.ch&&h.xRel>0))return h;e=Tf(g=j.to.line)}}function vc(a,b,c,d,e){function j(d){var e=rc(a,nb(c,d),"line",b,i);return g=!0,f>e.bottom?e.left-h:f<e.top?e.left+h:(g=!1,e.left)}var f=e-Vf(b),g=!1,h=2*a.display.wrapper.clientWidth,i=ec(a,b),k=Wf(b),l=b.text.length,m=zh(b),n=Ah(b),o=j(m),p=g,q=j(n),r=g;if(d>q)return tc(c,n,r,1);for(;;){if(k?n==m||n==Ih(b,m,1):1>=n-m){for(var s=o>d||q-d>=d-o?m:n,t=d-(s==m?o:q);Wg(b.text.charAt(s));)++s;var u=tc(c,s,s==m?p:r,-1>t?-1:t>1?1:0);return u}var v=Math.ceil(l/2),w=m+v;if(k){w=m;for(var x=0;v>x;++x)w=Ih(b,w,1)}var y=j(w);y>d?(n=w,q=y,(r=g)&&(q+=1e3),l=v):(m=w,o=y,p=g,l-=v)}}function xc(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==wc){wc=Xg("pre");for(var b=0;49>b;++b)wc.appendChild(document.createTextNode("x")),wc.appendChild(Xg("br"));wc.appendChild(document.createTextNode("x"))}$g(a.measure,wc);var c=wc.offsetHeight/50;return c>3&&(a.cachedTextHeight=c),Zg(a.measure),c||1}function yc(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=Xg("span","xxxxxxxxxx"),c=Xg("pre",[b]);$g(a.measure,c);var d=b.getBoundingClientRect(),e=(d.right-d.left)/10;return e>2&&(a.cachedCharWidth=e),e||10}function Bc(a){a.curOp={cm:a,viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,id:++Ac},zc?zc.ops.push(a.curOp):a.curOp.ownsGroup=zc={ops:[a.curOp],delayedCallbacks:[]}}function Cc(a){var b=a.delayedCallbacks,c=0;do{for(;c<b.length;c++)b[c]();for(var d=0;d<a.ops.length;d++){var e=a.ops[d];if(e.cursorActivityHandlers)for(;e.cursorActivityCalled<e.cursorActivityHandlers.length;)e.cursorActivityHandlers[e.cursorActivityCalled++](e.cm)}}while(c<b.length)}function Dc(a){var b=a.curOp,c=b.ownsGroup;if(c)try{Cc(c)}finally{zc=null;for(var d=0;d<c.ops.length;d++)c.ops[d].cm.curOp=null;Ec(c)}}function Ec(a){for(var b=a.ops,c=0;c<b.length;c++)Fc(b[c]);for(var c=0;c<b.length;c++)Gc(b[c]);for(var c=0;c<b.length;c++)Hc(b[c]);for(var c=0;c<b.length;c++)Ic(b[c]);for(var c=0;c<b.length;c++)Jc(b[c])}function Fc(a){var b=a.cm,c=b.display;
a.updateMaxLine&&J(b),a.mustUpdate=a.viewChanged||a.forceUpdate||null!=a.scrollTop||a.scrollToPos&&(a.scrollToPos.from.line<c.viewFrom||a.scrollToPos.to.line>=c.viewTo)||c.maxLineChanged&&b.options.lineWrapping,a.update=a.mustUpdate&&new T(b,a.mustUpdate&&{top:a.scrollTop,ensure:a.scrollToPos},a.forceUpdate)}function Gc(a){a.updatedDisplay=a.mustUpdate&&U(a.cm,a.update)}function Hc(a){var b=a.cm,c=b.display;a.updatedDisplay&&Z(b),a.barMeasure=M(b),c.maxLineChanged&&!b.options.lineWrapping&&(a.adjustWidthTo=cc(b,c.maxLine,c.maxLine.text.length).left+3,a.maxScrollLeft=Math.max(0,c.sizer.offsetLeft+a.adjustWidthTo+Ag-c.scroller.clientWidth)),(a.updatedDisplay||a.selectionChanged)&&(a.newSelectionNodes=Ob(b))}function Ic(a){var b=a.cm;null!=a.adjustWidthTo&&(b.display.sizer.style.minWidth=a.adjustWidthTo+"px",a.maxScrollLeft<b.doc.scrollLeft&&td(b,Math.min(b.display.scroller.scrollLeft,a.maxScrollLeft),!0),b.display.maxLineChanged=!1),a.newSelectionNodes&&Pb(b,a.newSelectionNodes),a.updatedDisplay&&X(b,a.barMeasure),(a.updatedDisplay||a.startHeight!=b.doc.height)&&N(b,a.barMeasure),a.selectionChanged&&Tb(b),b.state.focused&&a.updateInput&&_c(b,a.typing)}function Jc(a){var b=a.cm,c=b.display,d=b.doc;if(null!=a.adjustWidthTo&&Math.abs(a.barMeasure.scrollWidth-b.display.scroller.scrollWidth)>1&&N(b),a.updatedDisplay&&V(b,a.update),null==c.wheelStartX||null==a.scrollTop&&null==a.scrollLeft&&!a.scrollToPos||(c.wheelStartX=c.wheelStartY=null),null!=a.scrollTop&&c.scroller.scrollTop!=a.scrollTop){var e=Math.max(0,Math.min(c.scroller.scrollHeight-c.scroller.clientHeight,a.scrollTop));c.scroller.scrollTop=c.scrollbarV.scrollTop=d.scrollTop=e}if(null!=a.scrollLeft&&c.scroller.scrollLeft!=a.scrollLeft){var g=Math.max(0,Math.min(c.scroller.scrollWidth-c.scroller.clientWidth,a.scrollLeft));c.scroller.scrollLeft=c.scrollbarH.scrollLeft=d.scrollLeft=g,P(b)}if(a.scrollToPos){var h=Zd(b,xb(d,a.scrollToPos.from),xb(d,a.scrollToPos.to),a.scrollToPos.margin);a.scrollToPos.isCursor&&b.state.focused&&Yd(b,h)}var i=a.maybeHiddenMarkers,j=a.maybeUnhiddenMarkers;if(i)for(var k=0;k<i.length;++k)i[k].lines.length||sg(i[k],"hide");if(j)for(var k=0;k<j.length;++k)j[k].lines.length&&sg(j[k],"unhide");c.wrapper.offsetHeight&&(d.scrollTop=b.display.scroller.scrollTop),a.updatedDisplay&&f&&(b.options.lineWrapping&&Y(b,a.barMeasure),a.barMeasure.scrollWidth>a.barMeasure.clientWidth&&a.barMeasure.scrollWidth<a.barMeasure.clientWidth+1&&!L(b)&&N(b)),a.changeObjs&&sg(b,"changes",b,a.changeObjs)}function Kc(a,b){if(a.curOp)return b();Bc(a);try{return b()}finally{Dc(a)}}function Lc(a,b){return function(){if(a.curOp)return b.apply(a,arguments);Bc(a);try{return b.apply(a,arguments)}finally{Dc(a)}}}function Mc(a){return function(){if(this.curOp)return a.apply(this,arguments);Bc(this);try{return a.apply(this,arguments)}finally{Dc(this)}}}function Nc(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,arguments);Bc(b);try{return a.apply(this,arguments)}finally{Dc(b)}}}function Oc(a,b,c){this.line=b,this.rest=bf(b),this.size=this.rest?Tf(Kg(this.rest))-c+1:1,this.node=this.text=null,this.hidden=ef(a,b)}function Pc(a,b,c){for(var e,d=[],f=b;c>f;f=e){var g=new Oc(a.doc,Pf(a.doc,f),f);e=f+g.size,d.push(g)}return d}function Qc(a,b,c,d){null==b&&(b=a.doc.first),null==c&&(c=a.doc.first+a.doc.size),d||(d=0);var e=a.display;if(d&&c<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b),a.curOp.viewChanged=!0,b>=e.viewTo)v&&cf(a.doc,b)<e.viewTo&&Sc(a);else if(c<=e.viewFrom)v&&df(a.doc,c+d)>e.viewFrom?Sc(a):(e.viewFrom+=d,e.viewTo+=d);else if(b<=e.viewFrom&&c>=e.viewTo)Sc(a);else if(b<=e.viewFrom){var f=Uc(a,c,c+d,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=d):Sc(a)}else if(c>=e.viewTo){var f=Uc(a,b,b,-1);f?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):Sc(a)}else{var g=Uc(a,b,b,-1),h=Uc(a,c,c+d,1);g&&h?(e.view=e.view.slice(0,g.index).concat(Pc(a,g.lineN,h.lineN)).concat(e.view.slice(h.index)),e.viewTo+=d):Sc(a)}var i=e.externalMeasured;i&&(c<i.lineN?i.lineN+=d:b<i.lineN+i.size&&(e.externalMeasured=null))}function Rc(a,b,c){a.curOp.viewChanged=!0;var d=a.display,e=a.display.externalMeasured;if(e&&b>=e.lineN&&b<e.lineN+e.size&&(d.externalMeasured=null),!(b<d.viewFrom||b>=d.viewTo)){var f=d.view[Tc(a,b)];if(null!=f.node){var g=f.changes||(f.changes=[]);-1==Mg(g,c)&&g.push(c)}}}function Sc(a){a.display.viewFrom=a.display.viewTo=a.doc.first,a.display.view=[],a.display.viewOffset=0}function Tc(a,b){if(b>=a.display.viewTo)return null;if(b-=a.display.viewFrom,0>b)return null;for(var c=a.display.view,d=0;d<c.length;d++)if(b-=c[d].size,0>b)return d}function Uc(a,b,c,d){var f,e=Tc(a,b),g=a.display.view;if(!v||c==a.doc.first+a.doc.size)return{index:e,lineN:c};for(var h=0,i=a.display.viewFrom;e>h;h++)i+=g[h].size;if(i!=b){if(d>0){if(e==g.length-1)return null;f=i+g[e].size-b,e++}else f=i-b;b+=f,c+=f}for(;cf(a.doc,c)!=c;){if(e==(0>d?0:g.length-1))return null;c+=d*g[e-(0>d?1:0)].size,e+=d}return{index:e,lineN:c}}function Vc(a,b,c){var d=a.display,e=d.view;0==e.length||b>=d.viewTo||c<=d.viewFrom?(d.view=Pc(a,b,c),d.viewFrom=b):(d.viewFrom>b?d.view=Pc(a,b,d.viewFrom).concat(d.view):d.viewFrom<b&&(d.view=d.view.slice(Tc(a,b))),d.viewFrom=b,d.viewTo<c?d.view=d.view.concat(Pc(a,d.viewTo,c)):d.viewTo>c&&(d.view=d.view.slice(0,Tc(a,c)))),d.viewTo=c}function Wc(a){for(var b=a.display.view,c=0,d=0;d<b.length;d++){var e=b[d];e.hidden||e.node&&!e.changes||++c}return c}function Xc(a){a.display.pollingFast||a.display.poll.set(a.options.pollInterval,function(){$c(a),a.state.focused&&Xc(a)})}function Yc(a){function c(){var d=$c(a);d||b?(a.display.pollingFast=!1,Xc(a)):(b=!0,a.display.poll.set(60,c))}var b=!1;a.display.pollingFast=!0,a.display.poll.set(20,c)}function $c(a){var b=a.display.input,c=a.display.prevInput,f=a.doc;if(!a.state.focused||rh(b)&&!c||cd(a)||a.options.disableInput)return!1;a.state.pasteIncoming&&a.state.fakedLastChar&&(b.value=b.value.substring(0,b.value.length-1),a.state.fakedLastChar=!1);var g=b.value;if(g==c&&!a.somethingSelected())return!1;if(d&&e>=9&&a.display.inputHasSelection===g||p&&/[\uf700-\uf7ff]/.test(g))return _c(a),!1;var h=!a.curOp;h&&Bc(a),a.display.shift=!1,8203!=g.charCodeAt(0)||f.sel!=a.display.selForContextMenu||c||(c="\u200b");for(var i=0,j=Math.min(c.length,g.length);j>i&&c.charCodeAt(i)==g.charCodeAt(i);)++i;var k=g.slice(i),l=qh(k),m=null;a.state.pasteIncoming&&f.sel.ranges.length>1&&(Zc&&Zc.join("\n")==k?m=0==f.sel.ranges.length%Zc.length&&Ng(Zc,qh):l.length==f.sel.ranges.length&&(m=Ng(l,function(a){return[a]})));for(var n=f.sel.ranges.length-1;n>=0;n--){var o=f.sel.ranges[n],q=o.from(),r=o.to();i<c.length?q=nb(q.line,q.ch-(c.length-i)):a.state.overwrite&&o.empty()&&!a.state.pasteIncoming&&(r=nb(r.line,Math.min(Pf(f,r.line).text.length,r.ch+Kg(l).length)));var s=a.curOp.updateInput,t={from:q,to:r,text:m?m[n%m.length]:l,origin:a.state.pasteIncoming?"paste":a.state.cutIncoming?"cut":"+input"};if(Rd(a.doc,t),ug(a,"inputRead",a,t),k&&!a.state.pasteIncoming&&a.options.electricChars&&a.options.smartIndent&&o.head.ch<100&&(!n||f.sel.ranges[n-1].head.line!=o.head.line)){var u=a.getModeAt(o.head);if(u.electricChars){for(var v=0;v<u.electricChars.length;v++)if(k.indexOf(u.electricChars.charAt(v))>-1){de(a,o.head.line,"smart");break}}else if(u.electricInput){var w=Ld(t);u.electricInput.test(Pf(f,w.line).text.slice(0,w.ch))&&de(a,o.head.line,"smart")}}}return be(a),a.curOp.updateInput=s,a.curOp.typing=!0,g.length>1e3||g.indexOf("\n")>-1?b.value=a.display.prevInput="":a.display.prevInput=g,h&&Dc(a),a.state.pasteIncoming=a.state.cutIncoming=!1,!0}function _c(a,b){var c,f,g=a.doc;if(a.somethingSelected()){a.display.prevInput="";var h=g.sel.primary();c=sh&&(h.to().line-h.from().line>100||(f=a.getSelection()).length>1e3);var i=c?"-":f||a.getSelection();a.display.input.value=i,a.state.focused&&Lg(a.display.input),d&&e>=9&&(a.display.inputHasSelection=i)}else b||(a.display.prevInput=a.display.input.value="",d&&e>=9&&(a.display.inputHasSelection=null));a.display.inaccurateSelection=c}function ad(a){"nocursor"==a.options.readOnly||o&&ah()==a.display.input||a.display.input.focus()}function bd(a){a.state.focused||(ad(a),Hd(a))}function cd(a){return a.options.readOnly||a.doc.cantEdit}function dd(a){function c(){a.state.focused&&setTimeout(Qg(ad,a),0)}function g(b){wg(a,b)||ng(b)}function h(c){if(a.somethingSelected())Zc=a.getSelections(),b.inaccurateSelection&&(b.prevInput="",b.inaccurateSelection=!1,b.input.value=Zc.join("\n"),Lg(b.input));else{for(var d=[],e=[],f=0;f<a.doc.sel.ranges.length;f++){var g=a.doc.sel.ranges[f].head.line,h={anchor:nb(g,0),head:nb(g+1,0)};e.push(h),d.push(a.getRange(h.anchor,h.head))}"cut"==c.type?a.setSelections(e,null,Cg):(b.prevInput="",b.input.value=d.join("\n"),Lg(b.input)),Zc=d}"cut"==c.type&&(a.state.cutIncoming=!0)}var b=a.display;qg(b.scroller,"mousedown",Lc(a,hd)),d&&11>e?qg(b.scroller,"dblclick",Lc(a,function(b){if(!wg(a,b)){var c=gd(a,b);if(c&&!od(a,b)&&!fd(a.display,b)){kg(b);var d=ie(a,c);Cb(a.doc,d.anchor,d.head)}}})):qg(b.scroller,"dblclick",function(b){wg(a,b)||kg(b)}),qg(b.lineSpace,"selectstart",function(a){fd(b,a)||kg(a)}),t||qg(b.scroller,"contextmenu",function(b){Jd(a,b)}),qg(b.scroller,"scroll",function(){b.scroller.clientHeight&&(sd(a,b.scroller.scrollTop),td(a,b.scroller.scrollLeft,!0),sg(a,"scroll",a))}),qg(b.scrollbarV,"scroll",function(){b.scroller.clientHeight&&sd(a,b.scrollbarV.scrollTop)}),qg(b.scrollbarH,"scroll",function(){b.scroller.clientHeight&&td(a,b.scrollbarH.scrollLeft)}),qg(b.scroller,"mousewheel",function(b){wd(a,b)}),qg(b.scroller,"DOMMouseScroll",function(b){wd(a,b)}),qg(b.scrollbarH,"mousedown",c),qg(b.scrollbarV,"mousedown",c),qg(b.wrapper,"scroll",function(){b.wrapper.scrollTop=b.wrapper.scrollLeft=0}),qg(b.input,"keyup",function(b){Fd.call(a,b)}),qg(b.input,"input",function(){d&&e>=9&&a.display.inputHasSelection&&(a.display.inputHasSelection=null),Yc(a)}),qg(b.input,"keydown",Lc(a,Dd)),qg(b.input,"keypress",Lc(a,Gd)),qg(b.input,"focus",Qg(Hd,a)),qg(b.input,"blur",Qg(Id,a)),a.options.dragDrop&&(qg(b.scroller,"dragstart",function(b){rd(a,b)}),qg(b.scroller,"dragenter",g),qg(b.scroller,"dragover",g),qg(b.scroller,"drop",Lc(a,qd))),qg(b.scroller,"paste",function(c){fd(b,c)||(a.state.pasteIncoming=!0,ad(a),Yc(a))}),qg(b.input,"paste",function(){if(f&&!a.state.fakedLastChar&&!(new Date-a.state.lastMiddleDown<200)){var c=b.input.selectionStart,d=b.input.selectionEnd;b.input.value+="$",b.input.selectionEnd=d,b.input.selectionStart=c,a.state.fakedLastChar=!0}a.state.pasteIncoming=!0,Yc(a)}),qg(b.input,"cut",h),qg(b.input,"copy",h),k&&qg(b.sizer,"mouseup",function(){ah()==b.input&&b.input.blur(),ad(a)})}function ed(a){var b=a.display;b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null,a.setSize()}function fd(a,b){for(var c=og(b);c!=a.wrapper;c=c.parentNode)if(!c||c.ignoreEvents||c.parentNode==a.sizer&&c!=a.mover)return!0}function gd(a,b,c,d){var e=a.display;if(!c){var f=og(b);if(f==e.scrollbarH||f==e.scrollbarV||f==e.scrollbarFiller||f==e.gutterFiller)return null}var g,h,i=e.lineSpace.getBoundingClientRect();try{g=b.clientX-i.left,h=b.clientY-i.top}catch(b){return null}var k,j=uc(a,g,h);if(d&&1==j.xRel&&(k=Pf(a.doc,j.line).text).length==j.ch){var l=Gg(k,k.length,a.options.tabSize)-k.length;j=nb(j.line,Math.max(0,Math.round((g-$b(a.display).left)/yc(a.display))-l))}return j}function hd(a){if(!wg(this,a)){var b=this,c=b.display;if(c.shift=a.shiftKey,fd(c,a))return f||(c.scroller.draggable=!1,setTimeout(function(){c.scroller.draggable=!0},100)),void 0;if(!od(b,a)){var d=gd(b,a);switch(window.focus(),pg(a)){case 1:d?kd(b,a,d):og(a)==c.scroller&&kg(a);break;case 2:f&&(b.state.lastMiddleDown=+new Date),d&&Cb(b.doc,d),setTimeout(Qg(ad,b),20),kg(a);break;case 3:t&&Jd(b,a)}}}}function kd(a,b,c){setTimeout(Qg(bd,a),0);var e,d=+new Date;jd&&jd.time>d-400&&0==ob(jd.pos,c)?e="triple":id&&id.time>d-400&&0==ob(id.pos,c)?(e="double",jd={time:d,pos:c}):(e="single",id={time:d,pos:c});var f=a.doc.sel,g=p?b.metaKey:b.ctrlKey;a.options.dragDrop&&jh&&!cd(a)&&"single"==e&&f.contains(c)>-1&&f.somethingSelected()?ld(a,b,c,g):md(a,b,c,e,g)}function ld(a,b,c,g){var h=a.display,i=Lc(a,function(j){f&&(h.scroller.draggable=!1),a.state.draggingText=!1,rg(document,"mouseup",i),rg(h.scroller,"drop",i),Math.abs(b.clientX-j.clientX)+Math.abs(b.clientY-j.clientY)<10&&(kg(j),g||Cb(a.doc,c),ad(a),d&&9==e&&setTimeout(function(){document.body.focus(),ad(a)},20))});f&&(h.scroller.draggable=!0),a.state.draggingText=i,h.scroller.dragDrop&&h.scroller.dragDrop(),qg(document,"mouseup",i),qg(h.scroller,"drop",i)}function md(a,b,c,d,e){function n(b){if(0!=ob(m,b))if(m=b,"rect"==d){for(var e=[],f=a.options.tabSize,k=Gg(Pf(g,c.line).text,c.ch,f),l=Gg(Pf(g,b.line).text,b.ch,f),n=Math.min(k,l),o=Math.max(k,l),p=Math.min(c.line,b.line),q=Math.min(a.lastLine(),Math.max(c.line,b.line));q>=p;p++){var r=Pf(g,p).text,s=Hg(r,n,f);n==o?e.push(new tb(nb(p,s),nb(p,s))):r.length>s&&e.push(new tb(nb(p,s),nb(p,Hg(r,o,f))))}e.length||e.push(new tb(c,c)),Ib(g,ub(j.ranges.slice(0,i).concat(e),i),{origin:"*mouse",scroll:!1}),a.scrollIntoView(b)}else{var t=h,u=t.anchor,v=b;if("single"!=d){if("double"==d)var w=ie(a,b);else var w=new tb(nb(b.line,0),xb(g,nb(b.line+1,0)));ob(w.anchor,u)>0?(v=w.head,u=rb(t.from(),w.anchor)):(v=w.anchor,u=qb(t.to(),w.head))}var e=j.ranges.slice(0);e[i]=new tb(xb(g,u),v),Ib(g,ub(e,i),Dg)}}function q(b){var c=++p,e=gd(a,b,!0,"rect"==d);if(e)if(0!=ob(e,m)){bd(a),n(e);var h=O(f,g);(e.line>=h.to||e.line<h.from)&&setTimeout(Lc(a,function(){p==c&&q(b)}),150)}else{var i=b.clientY<o.top?-20:b.clientY>o.bottom?20:0;i&&setTimeout(Lc(a,function(){p==c&&(f.scroller.scrollTop+=i,q(b))}),50)}}function r(b){p=1/0,kg(b),ad(a),rg(document,"mousemove",s),rg(document,"mouseup",t),g.history.lastSelOrigin=null}var f=a.display,g=a.doc;kg(b);var h,i,j=g.sel;if(e&&!b.shiftKey?(i=g.sel.contains(c),h=i>-1?g.sel.ranges[i]:new tb(c,c)):h=g.sel.primary(),b.altKey)d="rect",e||(h=new tb(c,c)),c=gd(a,b,!0,!0),i=-1;else if("double"==d){var k=ie(a,c);h=a.display.shift||g.extend?Bb(g,h,k.anchor,k.head):k}else if("triple"==d){var l=new tb(nb(c.line,0),xb(g,nb(c.line+1,0)));h=a.display.shift||g.extend?Bb(g,h,l.anchor,l.head):l}else h=Bb(g,h,c);e?i>-1?Eb(g,i,h,Dg):(i=g.sel.ranges.length,Ib(g,ub(g.sel.ranges.concat([h]),i),{scroll:!1,origin:"*mouse"})):(i=0,Ib(g,new sb([h],0),Dg),j=g.sel);var m=c,o=f.wrapper.getBoundingClientRect(),p=0,s=Lc(a,function(a){pg(a)?q(a):r(a)}),t=Lc(a,r);qg(document,"mousemove",s),qg(document,"mouseup",t)}function nd(a,b,c,d,e){try{var f=b.clientX,g=b.clientY}catch(b){return!1}if(f>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;d&&kg(b);var h=a.display,i=h.lineDiv.getBoundingClientRect();if(g>i.bottom||!yg(a,c))return mg(b);g-=i.top-h.viewOffset;for(var j=0;j<a.options.gutters.length;++j){var k=h.gutters.childNodes[j];if(k&&k.getBoundingClientRect().right>=f){var l=Uf(a.doc,g),m=a.options.gutters[j];return e(a,c,a,l,m,b),mg(b)}}}function od(a,b){return nd(a,b,"gutterClick",!0,ug)}function qd(a){var b=this;if(!wg(b,a)&&!fd(b.display,a)){kg(a),d&&(pd=+new Date);var c=gd(b,a,!0),e=a.dataTransfer.files;if(c&&!cd(b))if(e&&e.length&&window.FileReader&&window.File)for(var f=e.length,g=Array(f),h=0,i=function(a,d){var e=new FileReader;e.onload=Lc(b,function(){if(g[d]=e.result,++h==f){c=xb(b.doc,c);var a={from:c,to:c,text:qh(g.join("\n")),origin:"paste"};Rd(b.doc,a),Hb(b.doc,vb(c,Ld(a)))}}),e.readAsText(a)},j=0;f>j;++j)i(e[j],j);else{if(b.state.draggingText&&b.doc.sel.contains(c)>-1)return b.state.draggingText(a),setTimeout(Qg(ad,b),20),void 0;try{var g=a.dataTransfer.getData("Text");if(g){if(b.state.draggingText&&!(p?a.metaKey:a.ctrlKey))var k=b.listSelections();if(Jb(b.doc,vb(c,c)),k)for(var j=0;j<k.length;++j)Xd(b.doc,"",k[j].anchor,k[j].head,"drag");b.replaceSelection(g,"around","paste"),ad(b)}}catch(a){}}}}function rd(a,b){if(d&&(!a.state.draggingText||+new Date-pd<100))return ng(b),void 0;if(!wg(a,b)&&!fd(a.display,b)&&(b.dataTransfer.setData("Text",a.getSelection()),b.dataTransfer.setDragImage&&!j)){var c=Xg("img",null,null,"position: fixed; left: 0; top: 0;");c.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i&&(c.width=c.height=1,a.display.wrapper.appendChild(c),c._top=c.offsetTop),b.dataTransfer.setDragImage(c,0,0),i&&c.parentNode.removeChild(c)}}function sd(b,c){Math.abs(b.doc.scrollTop-c)<2||(b.doc.scrollTop=c,a||W(b,{top:c}),b.display.scroller.scrollTop!=c&&(b.display.scroller.scrollTop=c),b.display.scrollbarV.scrollTop!=c&&(b.display.scrollbarV.scrollTop=c),a&&W(b),Ub(b,100))}function td(a,b,c){(c?b==a.doc.scrollLeft:Math.abs(a.doc.scrollLeft-b)<2)||(b=Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth),a.doc.scrollLeft=b,P(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbarH.scrollLeft!=b&&(a.display.scrollbarH.scrollLeft=b))}function wd(b,c){var d=c.wheelDeltaX,e=c.wheelDeltaY;null==d&&c.detail&&c.axis==c.HORIZONTAL_AXIS&&(d=c.detail),null==e&&c.detail&&c.axis==c.VERTICAL_AXIS?e=c.detail:null==e&&(e=c.wheelDelta);var g=b.display,h=g.scroller;if(d&&h.scrollWidth>h.clientWidth||e&&h.scrollHeight>h.clientHeight){if(e&&p&&f)a:for(var j=c.target,k=g.view;j!=h;j=j.parentNode)for(var l=0;l<k.length;l++)if(k[l].node==j){b.display.currentWheelTarget=j;break a}if(d&&!a&&!i&&null!=vd)return e&&sd(b,Math.max(0,Math.min(h.scrollTop+e*vd,h.scrollHeight-h.clientHeight))),td(b,Math.max(0,Math.min(h.scrollLeft+d*vd,h.scrollWidth-h.clientWidth))),kg(c),g.wheelStartX=null,void 0;if(e&&null!=vd){var m=e*vd,n=b.doc.scrollTop,o=n+g.wrapper.clientHeight;0>m?n=Math.max(0,n+m-50):o=Math.min(b.doc.height,o+m+50),W(b,{top:n,bottom:o})}20>ud&&(null==g.wheelStartX?(g.wheelStartX=h.scrollLeft,g.wheelStartY=h.scrollTop,g.wheelDX=d,g.wheelDY=e,setTimeout(function(){if(null!=g.wheelStartX){var a=h.scrollLeft-g.wheelStartX,b=h.scrollTop-g.wheelStartY,c=b&&g.wheelDY&&b/g.wheelDY||a&&g.wheelDX&&a/g.wheelDX;g.wheelStartX=g.wheelStartY=null,c&&(vd=(vd*ud+c)/(ud+1),++ud)}},200)):(g.wheelDX+=d,g.wheelDY+=e))}}function xd(a,b,c){if("string"==typeof b&&(b=ue[b],!b))return!1;a.display.pollingFast&&$c(a)&&(a.display.pollingFast=!1);var d=a.display.shift,e=!1;try{cd(a)&&(a.state.suppressEdits=!0),c&&(a.display.shift=!1),e=b(a)!=Bg}finally{a.display.shift=d,a.state.suppressEdits=!1}return e}function yd(a){var b=a.state.keyMaps.slice(0);return a.options.extraKeys&&b.push(a.options.extraKeys),b.push(a.options.keyMap),b}function Ad(a,b){var c=we(a.options.keyMap),d=c.auto;clearTimeout(zd),d&&!ye(b)&&(zd=setTimeout(function(){we(a.options.keyMap)==c&&(a.options.keyMap=d.call?d.call(null,a):d,D(a))},50));var e=ze(b,!0),f=!1;if(!e)return!1;var g=yd(a);return f=b.shiftKey?xe("Shift-"+e,g,function(b){return xd(a,b,!0)})||xe(e,g,function(b){return("string"==typeof b?/^go[A-Z]/.test(b):b.motion)?xd(a,b):void 0}):xe(e,g,function(b){return xd(a,b)}),f&&(kg(b),Tb(a),ug(a,"keyHandled",a,e,b)),f}function Bd(a,b,c){var d=xe("'"+c+"'",yd(a),function(b){return xd(a,b,!0)});return d&&(kg(b),Tb(a),ug(a,"keyHandled",a,"'"+c+"'",b)),d}function Dd(a){var b=this;if(bd(b),!wg(b,a)){d&&11>e&&27==a.keyCode&&(a.returnValue=!1);var c=a.keyCode;b.display.shift=16==c||a.shiftKey;var f=Ad(b,a);i&&(Cd=f?c:null,!f&&88==c&&!sh&&(p?a.metaKey:a.ctrlKey)&&b.replaceSelection("",null,"cut")),18!=c||/\bCodeMirror-crosshair\b/.test(b.display.lineDiv.className)||Ed(b)}}function Ed(a){function c(a){18!=a.keyCode&&a.altKey||(ch(b,"CodeMirror-crosshair"),rg(document,"keyup",c),rg(document,"mouseover",c))}var b=a.display.lineDiv;dh(b,"CodeMirror-crosshair"),qg(document,"keyup",c),qg(document,"mouseover",c)}function Fd(a){16==a.keyCode&&(this.doc.sel.shift=!1),wg(this,a)}function Gd(a){var b=this;if(!(wg(b,a)||a.ctrlKey&&!a.altKey||p&&a.metaKey)){var c=a.keyCode,f=a.charCode;if(i&&c==Cd)return Cd=null,kg(a),void 0;if(!(i&&(!a.which||a.which<10)||k)||!Ad(b,a)){var g=String.fromCharCode(null==f?c:f);Bd(b,a,g)||(d&&e>=9&&(b.display.inputHasSelection=null),Yc(b))}}}function Hd(a){"nocursor"!=a.options.readOnly&&(a.state.focused||(sg(a,"focus",a),a.state.focused=!0,dh(a.display.wrapper,"CodeMirror-focused"),a.curOp||a.display.selForContextMenu==a.doc.sel||(_c(a),f&&setTimeout(Qg(_c,a,!0),0))),Xc(a),Tb(a))}function Id(a){a.state.focused&&(sg(a,"blur",a),a.state.focused=!1,ch(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150)}function Jd(a,b){function m(){if(null!=c.input.selectionStart){var b=a.somethingSelected(),d=c.input.value="\u200b"+(b?c.input.value:"");c.prevInput=b?"":"\u200b",c.input.selectionStart=1,c.input.selectionEnd=d.length,c.selForContextMenu=a.doc.sel}}function n(){if(c.inputDiv.style.position="relative",c.input.style.cssText=k,d&&9>e&&(c.scrollbarV.scrollTop=c.scroller.scrollTop=h),Xc(a),null!=c.input.selectionStart){(!d||d&&9>e)&&m();var b=0,f=function(){c.selForContextMenu==a.doc.sel&&0==c.input.selectionStart?Lc(a,ue.selectAll)(a):b++<10?c.detectingSelectAll=setTimeout(f,500):_c(a)};c.detectingSelectAll=setTimeout(f,200)}}if(!wg(a,b,"contextmenu")){var c=a.display;if(!fd(c,b)&&!Kd(a,b)){var g=gd(a,b),h=c.scroller.scrollTop;if(g&&!i){var j=a.options.resetSelectionOnContextMenu;j&&-1==a.doc.sel.contains(g)&&Lc(a,Ib)(a.doc,vb(g),Cg);var k=c.input.style.cssText;if(c.inputDiv.style.position="absolute",c.input.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(b.clientY-5)+"px; left: "+(b.clientX-5)+"px; z-index: 1000; background: "+(d?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",f)var l=window.scrollY;if(ad(a),f&&window.scrollTo(null,l),_c(a),a.somethingSelected()||(c.input.value=c.prevInput=" "),c.selForContextMenu=a.doc.sel,clearTimeout(c.detectingSelectAll),d&&e>=9&&m(),t){ng(b);var o=function(){rg(window,"mouseup",o),setTimeout(n,20)};qg(window,"mouseup",o)}else setTimeout(n,50)}}}}function Kd(a,b){return yg(a,"gutterContextMenu")?nd(a,b,"gutterContextMenu",!1,sg):!1}function Md(a,b){if(ob(a,b.from)<0)return a;if(ob(a,b.to)<=0)return Ld(b);var c=a.line+b.text.length-(b.to.line-b.from.line)-1,d=a.ch;return a.line==b.to.line&&(d+=Ld(b).ch-b.to.ch),nb(c,d)}function Nd(a,b){for(var c=[],d=0;d<a.sel.ranges.length;d++){var e=a.sel.ranges[d];c.push(new tb(Md(e.anchor,b),Md(e.head,b)))}return ub(c,a.sel.primIndex)}function Od(a,b,c){return a.line==b.line?nb(c.line,a.ch-b.ch+c.ch):nb(c.line+(a.line-b.line),a.ch)}function Pd(a,b,c){for(var d=[],e=nb(a.first,0),f=e,g=0;g<b.length;g++){var h=b[g],i=Od(h.from,e,f),j=Od(Ld(h),e,f);if(e=h.to,f=j,"around"==c){var k=a.sel.ranges[g],l=ob(k.head,k.anchor)<0;d[g]=new tb(l?j:i,l?i:j)}else d[g]=new tb(i,i)}return new sb(d,a.sel.primIndex)}function Qd(a,b,c){var d={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){this.canceled=!0}};return c&&(d.update=function(b,c,d,e){b&&(this.from=xb(a,b)),c&&(this.to=xb(a,c)),d&&(this.text=d),void 0!==e&&(this.origin=e)}),sg(a,"beforeChange",a,d),a.cm&&sg(a.cm,"beforeChange",a.cm,d),d.canceled?null:{from:d.from,to:d.to,text:d.text,origin:d.origin}}function Rd(a,b,c){if(a.cm){if(!a.cm.curOp)return Lc(a.cm,Rd)(a,b,c);if(a.cm.state.suppressEdits)return}if(!(yg(a,"beforeChange")||a.cm&&yg(a.cm,"beforeChange"))||(b=Qd(a,b,!0))){var d=u&&!c&&Se(a,b.from,b.to);if(d)for(var e=d.length-1;e>=0;--e)Sd(a,{from:d[e].from,to:d[e].to,text:e?[""]:b.text});else Sd(a,b)}}function Sd(a,b){if(1!=b.text.length||""!=b.text[0]||0!=ob(b.from,b.to)){var c=Nd(a,b);_f(a,b,c,a.cm?a.cm.curOp.id:0/0),Vd(a,b,c,Pe(a,b));var d=[];Nf(a,function(a,c){c||-1!=Mg(d,a.history)||(jg(a.history,b),d.push(a.history)),Vd(a,b,null,Pe(a,b))})}}function Td(a,b,c){if(!a.cm||!a.cm.state.suppressEdits){for(var e,d=a.history,f=a.sel,g="undo"==b?d.done:d.undone,h="undo"==b?d.undone:d.done,i=0;i<g.length&&(e=g[i],c?!e.ranges||e.equals(a.sel):e.ranges);i++);if(i!=g.length){for(d.lastOrigin=d.lastSelOrigin=null;e=g.pop(),e.ranges;){if(cg(e,h),c&&!e.equals(a.sel))return Ib(a,e,{clearRedo:!1}),void 0;f=e}var j=[];cg(f,h),h.push({changes:j,generation:d.generation}),d.generation=e.generation||++d.maxGeneration;for(var k=yg(a,"beforeChange")||a.cm&&yg(a.cm,"beforeChange"),i=e.changes.length-1;i>=0;--i){var l=e.changes[i];if(l.origin=b,k&&!Qd(a,l,!1))return g.length=0,void 0;j.push(Yf(a,l));var m=i?Nd(a,l):Kg(g);Vd(a,l,m,Re(a,l)),!i&&a.cm&&a.cm.scrollIntoView({from:l.from,to:Ld(l)});var n=[];Nf(a,function(a,b){b||-1!=Mg(n,a.history)||(jg(a.history,l),n.push(a.history)),Vd(a,l,null,Re(a,l))})}}}}function Ud(a,b){if(0!=b&&(a.first+=b,a.sel=new sb(Ng(a.sel.ranges,function(a){return new tb(nb(a.anchor.line+b,a.anchor.ch),nb(a.head.line+b,a.head.ch))}),a.sel.primIndex),a.cm)){Qc(a.cm,a.first,a.first-b,b);for(var c=a.cm.display,d=c.viewFrom;d<c.viewTo;d++)Rc(a.cm,d,"gutter")}}function Vd(a,b,c,d){if(a.cm&&!a.cm.curOp)return Lc(a.cm,Vd)(a,b,c,d);if(b.to.line<a.first)return Ud(a,b.text.length-1-(b.to.line-b.from.line)),void 0;if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);Ud(a,e),b={from:nb(a.first,0),to:nb(b.to.line+e,b.to.ch),text:[Kg(b.text)],origin:b.origin}}var f=a.lastLine();b.to.line>f&&(b={from:b.from,to:nb(f,Pf(a,f).text.length),text:[b.text[0]],origin:b.origin}),b.removed=Qf(a,b.from,b.to),c||(c=Nd(a,b)),a.cm?Wd(a.cm,b,d):Gf(a,b,d),Jb(a,c,Cg)}}function Wd(a,b,c){var d=a.doc,e=a.display,f=b.from,g=b.to,h=!1,i=f.line;a.options.lineWrapping||(i=Tf(af(Pf(d,f.line))),d.iter(i,g.line+1,function(a){return a==e.maxLine?(h=!0,!0):void 0})),d.sel.contains(b.from,b.to)>-1&&xg(a),Gf(d,b,c,B(a)),a.options.lineWrapping||(d.iter(i,f.line+b.text.length,function(a){var b=I(a);b>e.maxLineLength&&(e.maxLine=a,e.maxLineLength=b,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0)),d.frontier=Math.min(d.frontier,f.line),Ub(a,400);var j=b.text.length-(g.line-f.line)-1;f.line!=g.line||1!=b.text.length||Ff(a.doc,b)?Qc(a,f.line,g.line+1,j):Rc(a,f.line,"text");var k=yg(a,"changes"),l=yg(a,"change");if(l||k){var m={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin};l&&ug(a,"change",a,m),k&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(m)}a.display.selForContextMenu=null}function Xd(a,b,c,d,e){if(d||(d=c),ob(d,c)<0){var f=d;d=c,c=f}"string"==typeof b&&(b=qh(b)),Rd(a,{from:c,to:d,text:b,origin:e})}function Yd(a,b){var c=a.display,d=c.sizer.getBoundingClientRect(),e=null;if(b.top+d.top<0?e=!0:b.bottom+d.top>(window.innerHeight||document.documentElement.clientHeight)&&(e=!1),null!=e&&!m){var f=Xg("div","\u200b",null,"position: absolute; top: "+(b.top-c.viewOffset-Yb(a.display))+"px; height: "+(b.bottom-b.top+Ag)+"px; left: "+b.left+"px; width: 2px;");a.display.lineSpace.appendChild(f),f.scrollIntoView(e),a.display.lineSpace.removeChild(f)}}function Zd(a,b,c,d){for(null==d&&(d=0);;){var e=!1,f=rc(a,b),g=c&&c!=b?rc(a,c):f,h=_d(a,Math.min(f.left,g.left),Math.min(f.top,g.top)-d,Math.max(f.left,g.left),Math.max(f.bottom,g.bottom)+d),i=a.doc.scrollTop,j=a.doc.scrollLeft;if(null!=h.scrollTop&&(sd(a,h.scrollTop),Math.abs(a.doc.scrollTop-i)>1&&(e=!0)),null!=h.scrollLeft&&(td(a,h.scrollLeft),Math.abs(a.doc.scrollLeft-j)>1&&(e=!0)),!e)return f}}function $d(a,b,c,d,e){var f=_d(a,b,c,d,e);null!=f.scrollTop&&sd(a,f.scrollTop),null!=f.scrollLeft&&td(a,f.scrollLeft)}function _d(a,b,c,d,e){var f=a.display,g=xc(a.display);0>c&&(c=0);var h=a.curOp&&null!=a.curOp.scrollTop?a.curOp.scrollTop:f.scroller.scrollTop,i=f.scroller.clientHeight-Ag,j={};e-c>i&&(e=c+i);var k=a.doc.height+Zb(f),l=g>c,m=e>k-g;if(h>c)j.scrollTop=l?0:c;else if(e>h+i){var n=Math.min(c,(m?k:e)-i);n!=h&&(j.scrollTop=n)}var o=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:f.scroller.scrollLeft,p=f.scroller.clientWidth-Ag-f.gutters.offsetWidth,q=d-b>p;return q&&(d=c+i),10>b?j.scrollLeft=0:o>b?j.scrollLeft=Math.max(0,b-(q?0:10)):d>p+o-3&&(j.scrollLeft=d+(q?0:10)-p),j}function ae(a,b,c){(null!=b||null!=c)&&ce(a),null!=b&&(a.curOp.scrollLeft=(null==a.curOp.scrollLeft?a.doc.scrollLeft:a.curOp.scrollLeft)+b),null!=c&&(a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+c)}function be(a){ce(a);var b=a.getCursor(),c=b,d=b;a.options.lineWrapping||(c=b.ch?nb(b.line,b.ch-1):b,d=nb(b.line,b.ch+1)),a.curOp.scrollToPos={from:c,to:d,margin:a.options.cursorScrollMargin,isCursor:!0}}function ce(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var c=sc(a,b.from),d=sc(a,b.to),e=_d(a,Math.min(c.left,d.left),Math.min(c.top,d.top)-b.margin,Math.max(c.right,d.right),Math.max(c.bottom,d.bottom)+b.margin);a.scrollTo(e.scrollLeft,e.scrollTop)}}function de(a,b,c,d){var f,e=a.doc;null==c&&(c="add"),"smart"==c&&(e.mode.indent?f=Xb(a,b):c="prev");var g=a.options.tabSize,h=Pf(e,b),i=Gg(h.text,null,g);h.stateAfter&&(h.stateAfter=null);var k,j=h.text.match(/^\s*/)[0];if(d||/\S/.test(h.text)){if("smart"==c&&(k=e.mode.indent(f,h.text.slice(j.length),h.text),k==Bg||k>150)){if(!d)return;c="prev"}}else k=0,c="not";"prev"==c?k=b>e.first?Gg(Pf(e,b-1).text,null,g):0:"add"==c?k=i+a.options.indentUnit:"subtract"==c?k=i-a.options.indentUnit:"number"==typeof c&&(k=i+c),k=Math.max(0,k);var l="",m=0;if(a.options.indentWithTabs)for(var n=Math.floor(k/g);n;--n)m+=g,l+="	";if(k>m&&(l+=Jg(k-m)),l!=j)Xd(e,l,nb(b,0),nb(b,j.length),"+input");else for(var n=0;n<e.sel.ranges.length;n++){var o=e.sel.ranges[n];if(o.head.line==b&&o.head.ch<j.length){var m=nb(b,j.length);Eb(e,n,new tb(m,m));break}}h.stateAfter=null}function ee(a,b,c,d){var e=b,f=b;return"number"==typeof b?f=Pf(a,wb(a,b)):e=Tf(b),null==e?null:(d(f,e)&&a.cm&&Rc(a.cm,e,c),f)}function fe(a,b){for(var c=a.doc.sel.ranges,d=[],e=0;e<c.length;e++){for(var f=b(c[e]);d.length&&ob(f.from,Kg(d).to)<=0;){var g=d.pop();if(ob(g.from,f.from)<0){f.from=g.from;break}}d.push(f)}Kc(a,function(){for(var b=d.length-1;b>=0;b--)Xd(a.doc,"",d[b].from,d[b].to,"+delete");be(a)})}function ge(a,b,c,d,e){function k(){var b=f+c;return b<a.first||b>=a.first+a.size?j=!1:(f=b,i=Pf(a,b))}function l(a){var b=(e?Ih:Jh)(i,g,c,!0);if(null==b){if(a||!k())return j=!1;g=e?(0>c?Ah:zh)(i):0>c?i.text.length:0}else g=b;return!0}var f=b.line,g=b.ch,h=c,i=Pf(a,f),j=!0;if("char"==d)l();else if("column"==d)l(!0);else if("word"==d||"group"==d)for(var m=null,n="group"==d,o=a.cm&&a.cm.getHelper(b,"wordChars"),p=!0;!(0>c)||l(!p);p=!1){var q=i.text.charAt(g)||"\n",r=Tg(q,o)?"w":n&&"\n"==q?"n":!n||/\s/.test(q)?null:"p";if(!n||p||r||(r="s"),m&&m!=r){0>c&&(c=1,l());break}if(r&&(m=r),c>0&&!l(!p))break}var s=Nb(a,nb(f,g),h,!0);return j||(s.hitSide=!0),s}function he(a,b,c,d){var g,e=a.doc,f=b.left;if("page"==d){var h=Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);g=b.top+c*(h-(0>c?1.5:.5)*xc(a.display))}else"line"==d&&(g=c>0?b.bottom+3:b.top-3);for(;;){var i=uc(a,f,g);if(!i.outside)break;if(0>c?0>=g:g>=e.height){i.hitSide=!0;break}g+=5*c}return i}function ie(a,b){var c=a.doc,d=Pf(c,b.line).text,e=b.ch,f=b.ch;if(d){var g=a.getHelper(b,"wordChars");(b.xRel<0||f==d.length)&&e?--e:++f;for(var h=d.charAt(e),i=Tg(h,g)?function(a){return Tg(a,g)}:/\s/.test(h)?function(a){return/\s/.test(a)}:function(a){return!/\s/.test(a)&&!Tg(a)};e>0&&i(d.charAt(e-1));)--e;for(;f<d.length&&i(d.charAt(f));)++f}return new tb(nb(b.line,e),nb(b.line,f))}function le(a,b,c,d){w.defaults[a]=b,c&&(ke[a]=d?function(a,b,d){d!=me&&c(a,b,d)}:c)}function we(a){return"string"==typeof a?ve[a]:a}function De(a,b,c,d,e){if(d&&d.shared)return Fe(a,b,c,d,e);if(a.cm&&!a.cm.curOp)return Lc(a.cm,De)(a,b,c,d,e);var f=new Be(a,e),g=ob(b,c);if(d&&Pg(d,f,!1),g>0||0==g&&f.clearWhenEmpty!==!1)return f;if(f.replacedWith&&(f.collapsed=!0,f.widgetNode=Xg("span",[f.replacedWith],"CodeMirror-widget"),d.handleMouseEvents||(f.widgetNode.ignoreEvents=!0),d.insertLeft&&(f.widgetNode.insertLeft=!0)),f.collapsed){if(_e(a,b.line,b,c,f)||b.line!=c.line&&_e(a,c.line,b,c,f))throw new Error("Inserting collapsed marker partially overlapping an existing one");v=!0}f.addToHistory&&_f(a,{from:b,to:c,origin:"markText"},a.sel,0/0);
var j,h=b.line,i=a.cm;if(a.iter(h,c.line+1,function(a){i&&f.collapsed&&!i.options.lineWrapping&&af(a)==i.display.maxLine&&(j=!0),f.collapsed&&h!=b.line&&Sf(a,0),Me(a,new Je(f,h==b.line?b.ch:null,h==c.line?c.ch:null)),++h}),f.collapsed&&a.iter(b.line,c.line+1,function(b){ef(a,b)&&Sf(b,0)}),f.clearOnEnter&&qg(f,"beforeCursorEnter",function(){f.clear()}),f.readOnly&&(u=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory()),f.collapsed&&(f.id=++Ce,f.atomic=!0),i){if(j&&(i.curOp.updateMaxLine=!0),f.collapsed)Qc(i,b.line,c.line+1);else if(f.className||f.title||f.startStyle||f.endStyle)for(var k=b.line;k<=c.line;k++)Rc(i,k,"text");f.atomic&&Lb(i.doc),ug(i,"markerAdded",i,f)}return f}function Fe(a,b,c,d,e){d=Pg(d),d.shared=!1;var f=[De(a,b,c,d,e)],g=f[0],h=d.widgetNode;return Nf(a,function(a){h&&(d.widgetNode=h.cloneNode(!0)),f.push(De(a,xb(a,b),xb(a,c),d,e));for(var i=0;i<a.linked.length;++i)if(a.linked[i].isParent)return;g=Kg(f)}),new Ee(f,g)}function Ge(a){return a.findMarks(nb(a.first,0),a.clipPos(nb(a.lastLine())),function(a){return a.parent})}function He(a,b){for(var c=0;c<b.length;c++){var d=b[c],e=d.find(),f=a.clipPos(e.from),g=a.clipPos(e.to);if(ob(f,g)){var h=De(a,f,g,d.primary,d.primary.type);d.markers.push(h),h.parent=d}}}function Ie(a){for(var b=0;b<a.length;b++){var c=a[b],d=[c.primary.doc];Nf(c.primary.doc,function(a){d.push(a)});for(var e=0;e<c.markers.length;e++){var f=c.markers[e];-1==Mg(d,f.doc)&&(f.parent=null,c.markers.splice(e--,1))}}}function Je(a,b,c){this.marker=a,this.from=b,this.to=c}function Ke(a,b){if(a)for(var c=0;c<a.length;++c){var d=a[c];if(d.marker==b)return d}}function Le(a,b){for(var c,d=0;d<a.length;++d)a[d]!=b&&(c||(c=[])).push(a[d]);return c}function Me(a,b){a.markedSpans=a.markedSpans?a.markedSpans.concat([b]):[b],b.marker.attachLine(a)}function Ne(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);if(h||f.from==b&&"bookmark"==g.type&&(!c||!f.marker.insertLeft)){var i=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);(e||(e=[])).push(new Je(g,f.from,i?null:f.to))}}return e}function Oe(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);if(h||f.from==b&&"bookmark"==g.type&&(!c||f.marker.insertLeft)){var i=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);(e||(e=[])).push(new Je(g,i?null:f.from-b,null==f.to?null:f.to-b))}}return e}function Pe(a,b){var c=zb(a,b.from.line)&&Pf(a,b.from.line).markedSpans,d=zb(a,b.to.line)&&Pf(a,b.to.line).markedSpans;if(!c&&!d)return null;var e=b.from.ch,f=b.to.ch,g=0==ob(b.from,b.to),h=Ne(c,e,g),i=Oe(d,f,g),j=1==b.text.length,k=Kg(b.text).length+(j?e:0);if(h)for(var l=0;l<h.length;++l){var m=h[l];if(null==m.to){var n=Ke(i,m.marker);n?j&&(m.to=null==n.to?null:n.to+k):m.to=e}}if(i)for(var l=0;l<i.length;++l){var m=i[l];if(null!=m.to&&(m.to+=k),null==m.from){var n=Ke(h,m.marker);n||(m.from=k,j&&(h||(h=[])).push(m))}else m.from+=k,j&&(h||(h=[])).push(m)}h&&(h=Qe(h)),i&&i!=h&&(i=Qe(i));var o=[h];if(!j){var q,p=b.text.length-2;if(p>0&&h)for(var l=0;l<h.length;++l)null==h[l].to&&(q||(q=[])).push(new Je(h[l].marker,null,null));for(var l=0;p>l;++l)o.push(q);o.push(i)}return o}function Qe(a){for(var b=0;b<a.length;++b){var c=a[b];null!=c.from&&c.from==c.to&&c.marker.clearWhenEmpty!==!1&&a.splice(b--,1)}return a.length?a:null}function Re(a,b){var c=fg(a,b),d=Pe(a,b);if(!c)return d;if(!d)return c;for(var e=0;e<c.length;++e){var f=c[e],g=d[e];if(f&&g)a:for(var h=0;h<g.length;++h){for(var i=g[h],j=0;j<f.length;++j)if(f[j].marker==i.marker)continue a;f.push(i)}else g&&(c[e]=g)}return c}function Se(a,b,c){var d=null;if(a.iter(b.line,c.line+1,function(a){if(a.markedSpans)for(var b=0;b<a.markedSpans.length;++b){var c=a.markedSpans[b].marker;!c.readOnly||d&&-1!=Mg(d,c)||(d||(d=[])).push(c)}}),!d)return null;for(var e=[{from:b,to:c}],f=0;f<d.length;++f)for(var g=d[f],h=g.find(0),i=0;i<e.length;++i){var j=e[i];if(!(ob(j.to,h.from)<0||ob(j.from,h.to)>0)){var k=[i,1],l=ob(j.from,h.from),m=ob(j.to,h.to);(0>l||!g.inclusiveLeft&&!l)&&k.push({from:j.from,to:h.from}),(m>0||!g.inclusiveRight&&!m)&&k.push({from:h.to,to:j.to}),e.splice.apply(e,k),i+=k.length-1}}return e}function Te(a){var b=a.markedSpans;if(b){for(var c=0;c<b.length;++c)b[c].marker.detachLine(a);a.markedSpans=null}}function Ue(a,b){if(b){for(var c=0;c<b.length;++c)b[c].marker.attachLine(a);a.markedSpans=b}}function Ve(a){return a.inclusiveLeft?-1:0}function We(a){return a.inclusiveRight?1:0}function Xe(a,b){var c=a.lines.length-b.lines.length;if(0!=c)return c;var d=a.find(),e=b.find(),f=ob(d.from,e.from)||Ve(a)-Ve(b);if(f)return-f;var g=ob(d.to,e.to)||We(a)-We(b);return g?g:b.id-a.id}function Ye(a,b){var d,c=v&&a.markedSpans;if(c)for(var e,f=0;f<c.length;++f)e=c[f],e.marker.collapsed&&null==(b?e.from:e.to)&&(!d||Xe(d,e.marker)<0)&&(d=e.marker);return d}function Ze(a){return Ye(a,!0)}function $e(a){return Ye(a,!1)}function _e(a,b,c,d,e){var f=Pf(a,b),g=v&&f.markedSpans;if(g)for(var h=0;h<g.length;++h){var i=g[h];if(i.marker.collapsed){var j=i.marker.find(0),k=ob(j.from,c)||Ve(i.marker)-Ve(e),l=ob(j.to,d)||We(i.marker)-We(e);if(!(k>=0&&0>=l||0>=k&&l>=0)&&(0>=k&&(ob(j.to,c)>0||i.marker.inclusiveRight&&e.inclusiveLeft)||k>=0&&(ob(j.from,d)<0||i.marker.inclusiveLeft&&e.inclusiveRight)))return!0}}}function af(a){for(var b;b=Ze(a);)a=b.find(-1,!0).line;return a}function bf(a){for(var b,c;b=$e(a);)a=b.find(1,!0).line,(c||(c=[])).push(a);return c}function cf(a,b){var c=Pf(a,b),d=af(c);return c==d?b:Tf(d)}function df(a,b){if(b>a.lastLine())return b;var d,c=Pf(a,b);if(!ef(a,c))return b;for(;d=$e(c);)c=d.find(1,!0).line;return Tf(c)+1}function ef(a,b){var c=v&&b.markedSpans;if(c)for(var d,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed){if(null==d.from)return!0;if(!d.marker.widgetNode&&0==d.from&&d.marker.inclusiveLeft&&ff(a,b,d))return!0}}function ff(a,b,c){if(null==c.to){var d=c.marker.find(1,!0);return ff(a,d.line,Ke(d.line.markedSpans,c.marker))}if(c.marker.inclusiveRight&&c.to==b.text.length)return!0;for(var e,f=0;f<b.markedSpans.length;++f)if(e=b.markedSpans[f],e.marker.collapsed&&!e.marker.widgetNode&&e.from==c.to&&(null==e.to||e.to!=c.from)&&(e.marker.inclusiveLeft||c.marker.inclusiveRight)&&ff(a,b,e))return!0}function hf(a,b,c){Vf(b)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&ae(a,null,c)}function jf(a){if(null!=a.height)return a.height;if(!_g(document.body,a.node)){var b="position: relative;";a.coverGutter&&(b+="margin-left: -"+a.cm.getGutterElement().offsetWidth+"px;"),$g(a.cm.display.measure,Xg("div",[a.node],null,b))}return a.height=a.node.offsetHeight}function kf(a,b,c,d){var e=new gf(a,c,d);return e.noHScroll&&(a.display.alignWidgets=!0),ee(a.doc,b,"widget",function(b){var c=b.widgets||(b.widgets=[]);if(null==e.insertAt?c.push(e):c.splice(Math.min(c.length-1,Math.max(0,e.insertAt)),0,e),e.line=b,!ef(a.doc,b)){var d=Vf(b)<a.doc.scrollTop;Sf(b,b.height+jf(e)),d&&ae(a,null,e.height),a.curOp.forceUpdate=!0}return!0}),e}function mf(a,b,c,d){a.text=b,a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null),null!=a.order&&(a.order=null),Te(a),Ue(a,c);var e=d?d(a):1;e!=a.height&&Sf(a,e)}function nf(a){a.parent=null,Te(a)}function of(a,b){if(a)for(;;){var c=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!c)break;a=a.slice(0,c.index)+a.slice(c.index+c[0].length);var d=c[1]?"bgClass":"textClass";null==b[d]?b[d]=c[2]:new RegExp("(?:^|s)"+c[2]+"(?:$|s)").test(b[d])||(b[d]+=" "+c[2])}return a}function pf(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode){var c=w.innerMode(a,b);return c.mode.blankLine?c.mode.blankLine(c.state):void 0}}function qf(a,b,c){for(var d=0;10>d;d++){var e=a.token(b,c);if(b.pos>b.start)return e}throw new Error("Mode "+a.name+" failed to advance stream.")}function rf(a,b,c,d,e,f,g){var h=c.flattenSpans;null==h&&(h=a.options.flattenSpans);var l,i=0,j=null,k=new Ae(b,a.options.tabSize);for(""==b&&of(pf(c,d),f);!k.eol();){if(k.pos>a.options.maxHighlightLength?(h=!1,g&&uf(a,b,d,k.pos),k.pos=b.length,l=null):l=of(qf(c,k,d),f),a.options.addModeClass){var m=w.innerMode(c,d).mode.name;m&&(l="m-"+(l?m+" "+l:m))}h&&j==l||(i<k.start&&e(k.start,j),i=k.start,j=l),k.start=k.pos}for(;i<k.pos;){var n=Math.min(k.pos,i+5e4);e(n,j),i=n}}function sf(a,b,c,d){var e=[a.state.modeGen],f={};rf(a,b.text,a.doc.mode,c,function(a,b){e.push(a,b)},f,d);for(var g=0;g<a.state.overlays.length;++g){var h=a.state.overlays[g],i=1,j=0;rf(a,b.text,h.mode,!0,function(a,b){for(var c=i;a>j;){var d=e[i];d>a&&e.splice(i,1,a,e[i+1],d),i+=2,j=Math.min(a,d)}if(b)if(h.opaque)e.splice(c,i-c,a,"cm-overlay "+b),i=c+2;else for(;i>c;c+=2){var f=e[c+1];e[c+1]=(f?f+" ":"")+"cm-overlay "+b}},f)}return{styles:e,classes:f.bgClass||f.textClass?f:null}}function tf(a,b){if(!b.styles||b.styles[0]!=a.state.modeGen){var c=sf(a,b,b.stateAfter=Xb(a,Tf(b)));b.styles=c.styles,c.classes?b.styleClasses=c.classes:b.styleClasses&&(b.styleClasses=null)}return b.styles}function uf(a,b,c,d){var e=a.doc.mode,f=new Ae(b,a.options.tabSize);for(f.start=f.pos=d||0,""==b&&pf(e,c);!f.eol()&&f.pos<=a.options.maxHighlightLength;)qf(e,f,c),f.start=f.pos}function xf(a,b){if(!a||/^\s*$/.test(a))return null;var c=b.addModeClass?wf:vf;return c[a]||(c[a]=a.replace(/\S+/g,"cm-$&"))}function yf(a,b){var c=Xg("span",null,null,f?"padding-right: .1px":null),e={pre:Xg("pre",[c]),content:c,col:0,pos:0,cm:a};b.measure={};for(var g=0;g<=(b.rest?b.rest.length:0);g++){var i,h=g?b.rest[g-1]:b.line;e.pos=0,e.addToken=Af,(d||f)&&a.getOption("lineWrapping")&&(e.addToken=Bf(e.addToken)),ph(a.display.measure)&&(i=Wf(h))&&(e.addToken=Cf(e.addToken,i)),e.map=[],Ef(h,e,tf(a,h)),h.styleClasses&&(h.styleClasses.bgClass&&(e.bgClass=eh(h.styleClasses.bgClass,e.bgClass||"")),h.styleClasses.textClass&&(e.textClass=eh(h.styleClasses.textClass,e.textClass||""))),0==e.map.length&&e.map.push(0,0,e.content.appendChild(nh(a.display.measure))),0==g?(b.measure.map=e.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(e.map),(b.measure.caches||(b.measure.caches=[])).push({}))}return sg(a,"renderLine",a,b.line,e.pre),e.pre.className&&(e.textClass=eh(e.pre.className,e.textClass||"")),e}function zf(a){var b=Xg("span","\u2022","cm-invalidchar");return b.title="\\u"+a.charCodeAt(0).toString(16),b}function Af(a,b,c,f,g,h){if(b){var i=a.cm.options.specialChars,j=!1;if(i.test(b))for(var k=document.createDocumentFragment(),l=0;;){i.lastIndex=l;var m=i.exec(b),n=m?m.index-l:b.length-l;if(n){var o=document.createTextNode(b.slice(l,l+n));d&&9>e?k.appendChild(Xg("span",[o])):k.appendChild(o),a.map.push(a.pos,a.pos+n,o),a.col+=n,a.pos+=n}if(!m)break;if(l+=n+1,"	"==m[0]){var p=a.cm.options.tabSize,q=p-a.col%p,o=k.appendChild(Xg("span",Jg(q),"cm-tab"));a.col+=q}else{var o=a.cm.options.specialCharPlaceholder(m[0]);d&&9>e?k.appendChild(Xg("span",[o])):k.appendChild(o),a.col+=1}a.map.push(a.pos,a.pos+1,o),a.pos++}else{a.col+=b.length;var k=document.createTextNode(b);a.map.push(a.pos,a.pos+b.length,k),d&&9>e&&(j=!0),a.pos+=b.length}if(c||f||g||j){var r=c||"";f&&(r+=f),g&&(r+=g);var s=Xg("span",[k],r);return h&&(s.title=h),a.content.appendChild(s)}a.content.appendChild(k)}}function Bf(a){function b(a){for(var b=" ",c=0;c<a.length-2;++c)b+=c%2?" ":"\xa0";return b+=" "}return function(c,d,e,f,g,h){a(c,d.replace(/ {3,}/g,b),e,f,g,h)}}function Cf(a,b){return function(c,d,e,f,g,h){e=e?e+" cm-force-border":"cm-force-border";for(var i=c.pos,j=i+d.length;;){for(var k=0;k<b.length;k++){var l=b[k];if(l.to>i&&l.from<=i)break}if(l.to>=j)return a(c,d,e,f,g,h);a(c,d.slice(0,l.to-i),e,f,null,h),f=null,d=d.slice(l.to-i),i=l.to}}}function Df(a,b,c,d){var e=!d&&c.widgetNode;e&&(a.map.push(a.pos,a.pos+b,e),a.content.appendChild(e)),a.pos+=b}function Ef(a,b,c){var d=a.markedSpans,e=a.text,f=0;if(d)for(var k,m,n,o,p,q,h=e.length,i=0,g=1,j="",l=0;;){if(l==i){m=n=o=p="",q=null,l=1/0;for(var r=[],s=0;s<d.length;++s){var t=d[s],u=t.marker;t.from<=i&&(null==t.to||t.to>i)?(null!=t.to&&l>t.to&&(l=t.to,n=""),u.className&&(m+=" "+u.className),u.startStyle&&t.from==i&&(o+=" "+u.startStyle),u.endStyle&&t.to==l&&(n+=" "+u.endStyle),u.title&&!p&&(p=u.title),u.collapsed&&(!q||Xe(q.marker,u)<0)&&(q=t)):t.from>i&&l>t.from&&(l=t.from),"bookmark"==u.type&&t.from==i&&u.widgetNode&&r.push(u)}if(q&&(q.from||0)==i&&(Df(b,(null==q.to?h+1:q.to)-i,q.marker,null==q.from),null==q.to))return;if(!q&&r.length)for(var s=0;s<r.length;++s)Df(b,0,r[s])}if(i>=h)break;for(var v=Math.min(h,l);;){if(j){var w=i+j.length;if(!q){var x=w>v?j.slice(0,v-i):j;b.addToken(b,x,k?k+m:m,o,i+x.length==l?n:"",p)}if(w>=v){j=j.slice(v-i),i=v;break}i=w,o=""}j=e.slice(f,f=c[g++]),k=xf(c[g++],b.cm.options)}}else for(var g=1;g<c.length;g+=2)b.addToken(b,e.slice(f,f=c[g]),xf(c[g+1],b.cm.options))}function Ff(a,b){return 0==b.from.ch&&0==b.to.ch&&""==Kg(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function Gf(a,b,c,d){function e(a){return c?c[a]:null}function f(a,c,e){mf(a,c,e,d),ug(a,"change",a,b)}var g=b.from,h=b.to,i=b.text,j=Pf(a,g.line),k=Pf(a,h.line),l=Kg(i),m=e(i.length-1),n=h.line-g.line;if(Ff(a,b)){for(var o=0,p=[];o<i.length-1;++o)p.push(new lf(i[o],e(o),d));f(k,k.text,m),n&&a.remove(g.line,n),p.length&&a.insert(g.line,p)}else if(j==k)if(1==i.length)f(j,j.text.slice(0,g.ch)+l+j.text.slice(h.ch),m);else{for(var p=[],o=1;o<i.length-1;++o)p.push(new lf(i[o],e(o),d));p.push(new lf(l+j.text.slice(h.ch),m,d)),f(j,j.text.slice(0,g.ch)+i[0],e(0)),a.insert(g.line+1,p)}else if(1==i.length)f(j,j.text.slice(0,g.ch)+i[0]+k.text.slice(h.ch),e(0)),a.remove(g.line+1,n);else{f(j,j.text.slice(0,g.ch)+i[0],e(0)),f(k,l+k.text.slice(h.ch),m);for(var o=1,p=[];o<i.length-1;++o)p.push(new lf(i[o],e(o),d));n>1&&a.remove(g.line+1,n-1),a.insert(g.line+1,p)}ug(a,"change",a,b)}function Hf(a){this.lines=a,this.parent=null;for(var b=0,c=0;b<a.length;++b)a[b].parent=this,c+=a[b].height;this.height=c}function If(a){this.children=a;for(var b=0,c=0,d=0;d<a.length;++d){var e=a[d];b+=e.chunkSize(),c+=e.height,e.parent=this}this.size=b,this.height=c,this.parent=null}function Nf(a,b,c){function d(a,e,f){if(a.linked)for(var g=0;g<a.linked.length;++g){var h=a.linked[g];if(h.doc!=e){var i=f&&h.sharedHist;(!c||i)&&(b(h.doc,i),d(h.doc,a,i))}}}d(a,null,!0)}function Of(a,b){if(b.cm)throw new Error("This document is already in use.");a.doc=b,b.cm=a,C(a),y(a),a.options.lineWrapping||J(a),a.options.mode=b.modeOption,Qc(a)}function Pf(a,b){if(b-=a.first,0>b||b>=a.size)throw new Error("There is no line "+(b+a.first)+" in the document.");for(var c=a;!c.lines;)for(var d=0;;++d){var e=c.children[d],f=e.chunkSize();if(f>b){c=e;break}b-=f}return c.lines[b]}function Qf(a,b,c){var d=[],e=b.line;return a.iter(b.line,c.line+1,function(a){var f=a.text;e==c.line&&(f=f.slice(0,c.ch)),e==b.line&&(f=f.slice(b.ch)),d.push(f),++e}),d}function Rf(a,b,c){var d=[];return a.iter(b,c,function(a){d.push(a.text)}),d}function Sf(a,b){var c=b-a.height;if(c)for(var d=a;d;d=d.parent)d.height+=c}function Tf(a){if(null==a.parent)return null;for(var b=a.parent,c=Mg(b.lines,a),d=b.parent;d;b=d,d=d.parent)for(var e=0;d.children[e]!=b;++e)c+=d.children[e].chunkSize();return c+b.first}function Uf(a,b){var c=a.first;a:do{for(var d=0;d<a.children.length;++d){var e=a.children[d],f=e.height;if(f>b){a=e;continue a}b-=f,c+=e.chunkSize()}return c}while(!a.lines);for(var d=0;d<a.lines.length;++d){var g=a.lines[d],h=g.height;if(h>b)break;b-=h}return c+d}function Vf(a){a=af(a);for(var b=0,c=a.parent,d=0;d<c.lines.length;++d){var e=c.lines[d];if(e==a)break;b+=e.height}for(var f=c.parent;f;c=f,f=c.parent)for(var d=0;d<f.children.length;++d){var g=f.children[d];if(g==c)break;b+=g.height}return b}function Wf(a){var b=a.order;return null==b&&(b=a.order=Kh(a.text)),b}function Xf(a){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=a||1}function Yf(a,b){var c={from:pb(b.from),to:Ld(b),text:Qf(a,b.from,b.to)};return dg(a,c,b.from.line,b.to.line+1),Nf(a,function(a){dg(a,c,b.from.line,b.to.line+1)},!0),c}function Zf(a){for(;a.length;){var b=Kg(a);if(!b.ranges)break;a.pop()}}function $f(a,b){return b?(Zf(a.done),Kg(a.done)):a.done.length&&!Kg(a.done).ranges?Kg(a.done):a.done.length>1&&!a.done[a.done.length-2].ranges?(a.done.pop(),Kg(a.done)):void 0}function _f(a,b,c,d){var e=a.history;e.undone.length=0;var g,f=+new Date;if((e.lastOp==d||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&a.cm&&e.lastModTime>f-a.cm.options.historyEventDelay||"*"==b.origin.charAt(0)))&&(g=$f(e,e.lastOp==d))){var h=Kg(g.changes);0==ob(b.from,b.to)&&0==ob(b.from,h.to)?h.to=Ld(b):g.changes.push(Yf(a,b))}else{var i=Kg(e.done);for(i&&i.ranges||cg(a.sel,e.done),g={changes:[Yf(a,b)],generation:e.generation},e.done.push(g);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift()}e.done.push(c),e.generation=++e.maxGeneration,e.lastModTime=e.lastSelTime=f,e.lastOp=e.lastSelOp=d,e.lastOrigin=e.lastSelOrigin=b.origin,h||sg(a,"historyAdded")}function ag(a,b,c,d){var e=b.charAt(0);return"*"==e||"+"==e&&c.ranges.length==d.ranges.length&&c.somethingSelected()==d.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}function bg(a,b,c,d){var e=a.history,f=d&&d.origin;c==e.lastSelOp||f&&e.lastSelOrigin==f&&(e.lastModTime==e.lastSelTime&&e.lastOrigin==f||ag(a,f,Kg(e.done),b))?e.done[e.done.length-1]=b:cg(b,e.done),e.lastSelTime=+new Date,e.lastSelOrigin=f,e.lastSelOp=c,d&&d.clearRedo!==!1&&Zf(e.undone)}function cg(a,b){var c=Kg(b);c&&c.ranges&&c.equals(a)||b.push(a)}function dg(a,b,c,d){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,c),Math.min(a.first+a.size,d),function(c){c.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=c.markedSpans),++f})}function eg(a){if(!a)return null;for(var c,b=0;b<a.length;++b)a[b].marker.explicitlyCleared?c||(c=a.slice(0,b)):c&&c.push(a[b]);return c?c.length?c:null:a}function fg(a,b){var c=b["spans_"+a.id];if(!c)return null;for(var d=0,e=[];d<b.text.length;++d)e.push(eg(c[d]));return e}function gg(a,b,c){for(var d=0,e=[];d<a.length;++d){var f=a[d];if(f.ranges)e.push(c?sb.prototype.deepCopy.call(f):f);else{var g=f.changes,h=[];e.push({changes:h});for(var i=0;i<g.length;++i){var k,j=g[i];if(h.push({from:j.from,to:j.to,text:j.text}),b)for(var l in j)(k=l.match(/^spans_(\d+)$/))&&Mg(b,Number(k[1]))>-1&&(Kg(h)[l]=j[l],delete j[l])}}}return e}function hg(a,b,c,d){c<a.line?a.line+=d:b<a.line&&(a.line=b,a.ch=0)}function ig(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges){f.copied||(f=a[e]=f.deepCopy(),f.copied=!0);for(var h=0;h<f.ranges.length;h++)hg(f.ranges[h].anchor,b,c,d),hg(f.ranges[h].head,b,c,d)}else{for(var h=0;h<f.changes.length;++h){var i=f.changes[h];if(c<i.from.line)i.from=nb(i.from.line+d,i.from.ch),i.to=nb(i.to.line+d,i.to.ch);else if(b<=i.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function jg(a,b){var c=b.from.line,d=b.to.line,e=b.text.length-(d-c)-1;ig(a.done,c,d,e),ig(a.undone,c,d,e)}function mg(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function og(a){return a.target||a.srcElement}function pg(a){var b=a.which;return null==b&&(1&a.button?b=1:2&a.button?b=3:4&a.button&&(b=2)),p&&a.ctrlKey&&1==b&&(b=3),b}function ug(a,b){function f(a){return function(){a.apply(null,d)}}var c=a._handlers&&a._handlers[b];if(c){var e,d=Array.prototype.slice.call(arguments,2);zc?e=zc.delayedCallbacks:tg?e=tg:(e=tg=[],setTimeout(vg,0));for(var g=0;g<c.length;++g)e.push(f(c[g]))}}function vg(){var a=tg;tg=null;for(var b=0;b<a.length;++b)a[b]()}function wg(a,b,c){return sg(a,c||b.type,a,b),mg(b)||b.codemirrorIgnore}function xg(a){var b=a._handlers&&a._handlers.cursorActivity;if(b)for(var c=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]),d=0;d<b.length;++d)-1==Mg(c,b[d])&&c.push(b[d])}function yg(a,b){var c=a._handlers&&a._handlers[b];return c&&c.length>0}function zg(a){a.prototype.on=function(a,b){qg(this,a,b)},a.prototype.off=function(a,b){rg(this,a,b)}}function Fg(){this.id=null}function Hg(a,b,c){for(var d=0,e=0;;){var f=a.indexOf("	",d);-1==f&&(f=a.length);var g=f-d;if(f==a.length||e+g>=b)return d+Math.min(g,b-e);if(e+=f-d,e+=c-e%c,d=f+1,e>=b)return d}}function Jg(a){for(;Ig.length<=a;)Ig.push(Kg(Ig)+" ");return Ig[a]}function Kg(a){return a[a.length-1]}function Mg(a,b){for(var c=0;c<a.length;++c)if(a[c]==b)return c;return-1}function Ng(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d);return c}function Og(a,b){var c;if(Object.create)c=Object.create(a);else{var d=function(){};d.prototype=a,c=new d}return b&&Pg(b,c),c}function Pg(a,b,c){b||(b={});for(var d in a)!a.hasOwnProperty(d)||c===!1&&b.hasOwnProperty(d)||(b[d]=a[d]);return b}function Qg(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function Tg(a,b){return b?b.source.indexOf("\\w")>-1&&Sg(a)?!0:b.test(a):Sg(a)}function Ug(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function Wg(a){return a.charCodeAt(0)>=768&&Vg.test(a)}function Xg(a,b,c,d){var e=document.createElement(a);if(c&&(e.className=c),d&&(e.style.cssText=d),"string"==typeof b)e.appendChild(document.createTextNode(b));else if(b)for(var f=0;f<b.length;++f)e.appendChild(b[f]);return e}function Zg(a){for(var b=a.childNodes.length;b>0;--b)a.removeChild(a.firstChild);return a}function $g(a,b){return Zg(a).appendChild(b)}function _g(a,b){if(a.contains)return a.contains(b);for(;b=b.parentNode;)if(b==a)return!0}function ah(){return document.activeElement}function bh(a){return new RegExp("\\b"+a+"\\b\\s*")}function ch(a,b){var c=bh(b);c.test(a.className)&&(a.className=a.className.replace(c,""))}function dh(a,b){bh(b).test(a.className)||(a.className+=" "+b)}function eh(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)c[d]&&!bh(c[d]).test(b)&&(b+=" "+c[d]);return b}function fh(a){if(document.body.getElementsByClassName)for(var b=document.body.getElementsByClassName("CodeMirror"),c=0;c<b.length;c++){var d=b[c].CodeMirror;d&&a(d)}}function hh(){gh||(ih(),gh=!0)}function ih(){var a;qg(window,"resize",function(){null==a&&(a=setTimeout(function(){a=null,kh=null,fh(ed)},100))}),qg(window,"blur",function(){fh(Id)})}function lh(a){if(null!=kh)return kh;var b=Xg("div",null,null,"width: 50px; height: 50px; overflow-x: scroll");return $g(a,b),b.offsetWidth&&(kh=b.offsetHeight-b.clientHeight),kh||0}function nh(a){if(null==mh){var b=Xg("span","\u200b");$g(a,Xg("span",[b,document.createTextNode("x")])),0!=a.firstChild.offsetHeight&&(mh=b.offsetWidth<=1&&b.offsetHeight>2&&!(d&&8>e))}return mh?Xg("span","\u200b"):Xg("span","\xa0",null,"display: inline-block; width: 1px; margin-right: -1px")}function ph(a){if(null!=oh)return oh;var b=$g(a,document.createTextNode("A\u062eA")),c=Yg(b,0,1).getBoundingClientRect();if(c.left==c.right)return!1;var d=Yg(b,1,2).getBoundingClientRect();return oh=d.right-c.right<3}function uh(a){if(null!=th)return th;var b=$g(a,Xg("span","x")),c=b.getBoundingClientRect(),d=Yg(b,0,1).getBoundingClientRect();return th=Math.abs(c.left-d.left)>1}function wh(a,b,c,d){if(!a)return d(b,c,"ltr");for(var e=!1,f=0;f<a.length;++f){var g=a[f];(g.from<c&&g.to>b||b==c&&g.to==b)&&(d(Math.max(g.from,b),Math.min(g.to,c),1==g.level?"rtl":"ltr"),e=!0)}e||d(b,c,"ltr")}function xh(a){return a.level%2?a.to:a.from}function yh(a){return a.level%2?a.from:a.to}function zh(a){var b=Wf(a);return b?xh(b[0]):0}function Ah(a){var b=Wf(a);return b?yh(Kg(b)):a.text.length}function Bh(a,b){var c=Pf(a.doc,b),d=af(c);d!=c&&(b=Tf(d));var e=Wf(d),f=e?e[0].level%2?Ah(d):zh(d):0;return nb(b,f)}function Ch(a,b){for(var c,d=Pf(a.doc,b);c=$e(d);)d=c.find(1,!0).line,b=null;var e=Wf(d),f=e?e[0].level%2?zh(d):Ah(d):d.text.length;return nb(null==b?Tf(d):b,f)}function Dh(a,b){var c=Bh(a,b.line),d=Pf(a.doc,c.line),e=Wf(d);if(!e||0==e[0].level){var f=Math.max(0,d.text.search(/\S/)),g=b.line==c.line&&b.ch<=f&&b.ch;return nb(c.line,g?0:f)}return c}function Eh(a,b,c){var d=a[0].level;return b==d?!0:c==d?!1:c>b}function Gh(a,b){Fh=null;for(var d,c=0;c<a.length;++c){var e=a[c];if(e.from<b&&e.to>b)return c;if(e.from==b||e.to==b){if(null!=d)return Eh(a,e.level,a[d].level)?(e.from!=e.to&&(Fh=d),c):(e.from!=e.to&&(Fh=c),d);d=c}}return d}function Hh(a,b,c,d){if(!d)return b+c;do b+=c;while(b>0&&Wg(a.text.charAt(b)));return b}function Ih(a,b,c,d){var e=Wf(a);if(!e)return Jh(a,b,c,d);for(var f=Gh(e,b),g=e[f],h=Hh(a,b,g.level%2?-c:c,d);;){if(h>g.from&&h<g.to)return h;if(h==g.from||h==g.to)return Gh(e,h)==f?h:(g=e[f+=c],c>0==g.level%2?g.to:g.from);if(g=e[f+=c],!g)return null;h=c>0==g.level%2?Hh(a,g.to,-1,d):Hh(a,g.from,1,d)}}function Jh(a,b,c,d){var e=b+c;if(d)for(;e>0&&Wg(a.text.charAt(e));)e+=c;return 0>e||e>a.text.length?null:e}var a=/gecko\/\d/i.test(navigator.userAgent),b=/MSIE \d/.test(navigator.userAgent),c=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),d=b||c,e=d&&(b?document.documentMode||6:c[1]),f=/WebKit\//.test(navigator.userAgent),g=f&&/Qt\/\d+\.\d+/.test(navigator.userAgent),h=/Chrome\//.test(navigator.userAgent),i=/Opera\//.test(navigator.userAgent),j=/Apple Computer/.test(navigator.vendor),k=/KHTML\//.test(navigator.userAgent),l=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),m=/PhantomJS/.test(navigator.userAgent),n=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),o=n||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),p=n||/Mac/.test(navigator.platform),q=/win/i.test(navigator.platform),r=i&&navigator.userAgent.match(/Version\/(\d*\.\d*)/);r&&(r=Number(r[1])),r&&r>=15&&(i=!1,f=!0);var s=p&&(g||i&&(null==r||12.11>r)),t=a||d&&e>=9,u=!1,v=!1,nb=w.Pos=function(a,b){return this instanceof nb?(this.line=a,this.ch=b,void 0):new nb(a,b)},ob=w.cmpPos=function(a,b){return a.line-b.line||a.ch-b.ch};sb.prototype={primary:function(){return this.ranges[this.primIndex]},equals:function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var c=this.ranges[b],d=a.ranges[b];if(0!=ob(c.anchor,d.anchor)||0!=ob(c.head,d.head))return!1}return!0},deepCopy:function(){for(var a=[],b=0;b<this.ranges.length;b++)a[b]=new tb(pb(this.ranges[b].anchor),pb(this.ranges[b].head));return new sb(a,this.primIndex)},somethingSelected:function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1},contains:function(a,b){b||(b=a);for(var c=0;c<this.ranges.length;c++){var d=this.ranges[c];if(ob(b,d.from())>=0&&ob(a,d.to())<=0)return c}return-1}},tb.prototype={from:function(){return rb(this.anchor,this.head)},to:function(){return qb(this.anchor,this.head)},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}};var wc,id,jd,gc={left:0,right:0,top:0,bottom:0},zc=null,Ac=0,Zc=null,pd=0,ud=0,vd=null;d?vd=-.53:a?vd=15:h?vd=-.7:j&&(vd=-1/3);var zd,Cd=null,Ld=w.changeEnd=function(a){return a.text?nb(a.from.line+a.text.length-1,Kg(a.text).length+(1==a.text.length?a.from.ch:0)):a.to};w.prototype={constructor:w,focus:function(){window.focus(),ad(this),Yc(this)},setOption:function(a,b){var c=this.options,d=c[a];(c[a]!=b||"mode"==a)&&(c[a]=b,ke.hasOwnProperty(a)&&Lc(this,ke[a])(this,b,d))},getOption:function(a){return this.options[a]},getDoc:function(){return this.doc},addKeyMap:function(a,b){this.state.keyMaps[b?"push":"unshift"](a)},removeKeyMap:function(a){for(var b=this.state.keyMaps,c=0;c<b.length;++c)if(b[c]==a||"string"!=typeof b[c]&&b[c].name==a)return b.splice(c,1),!0},addOverlay:Mc(function(a,b){var c=a.token?a:w.getMode(this.options,a);if(c.startState)throw new Error("Overlays may not be stateful.");this.state.overlays.push({mode:c,modeSpec:a,opaque:b&&b.opaque}),this.state.modeGen++,Qc(this)}),removeOverlay:Mc(function(a){for(var b=this.state.overlays,c=0;c<b.length;++c){var d=b[c].modeSpec;if(d==a||"string"==typeof a&&d.name==a)return b.splice(c,1),this.state.modeGen++,Qc(this),void 0}}),indentLine:Mc(function(a,b,c){"string"!=typeof b&&"number"!=typeof b&&(b=null==b?this.options.smartIndent?"smart":"prev":b?"add":"subtract"),zb(this.doc,a)&&de(this,a,b,c)}),indentSelection:Mc(function(a){for(var b=this.doc.sel.ranges,c=-1,d=0;d<b.length;d++){var e=b[d];if(e.empty())e.head.line>c&&(de(this,e.head.line,a,!0),c=e.head.line,d==this.doc.sel.primIndex&&be(this));else{var f=e.from(),g=e.to(),h=Math.max(c,f.line);c=Math.min(this.lastLine(),g.line-(g.ch?0:1))+1;for(var i=h;c>i;++i)de(this,i,a);var j=this.doc.sel.ranges;0==f.ch&&b.length==j.length&&j[d].from().ch>0&&Eb(this.doc,d,new tb(f,j[d].to()),Cg)}}}),getTokenAt:function(a,b){var c=this.doc;a=xb(c,a);for(var d=Xb(this,a.line,b),e=this.doc.mode,f=Pf(c,a.line),g=new Ae(f.text,this.options.tabSize);g.pos<a.ch&&!g.eol();){g.start=g.pos;var h=qf(e,g,d)}return{start:g.start,end:g.pos,string:g.current(),type:h||null,state:d}},getTokenTypeAt:function(a){a=xb(this.doc,a);var f,b=tf(this,Pf(this.doc,a.line)),c=0,d=(b.length-1)/2,e=a.ch;if(0==e)f=b[2];else for(;;){var g=c+d>>1;if((g?b[2*g-1]:0)>=e)d=g;else{if(!(b[2*g+1]<e)){f=b[2*g+2];break}c=g+1}}var h=f?f.indexOf("cm-overlay "):-1;return 0>h?f:0==h?null:f.slice(0,h-1)},getModeAt:function(a){var b=this.doc.mode;return b.innerMode?w.innerMode(b,this.getTokenAt(a).state).mode:b},getHelper:function(a,b){return this.getHelpers(a,b)[0]},getHelpers:function(a,b){var c=[];if(!re.hasOwnProperty(b))return re;var d=re[b],e=this.getModeAt(a);if("string"==typeof e[b])d[e[b]]&&c.push(d[e[b]]);else if(e[b])for(var f=0;f<e[b].length;f++){var g=d[e[b][f]];g&&c.push(g)}else e.helperType&&d[e.helperType]?c.push(d[e.helperType]):d[e.name]&&c.push(d[e.name]);for(var f=0;f<d._global.length;f++){var h=d._global[f];h.pred(e,this)&&-1==Mg(c,h.val)&&c.push(h.val)}return c},getStateAfter:function(a,b){var c=this.doc;return a=wb(c,null==a?c.first+c.size-1:a),Xb(this,a+1,b)},cursorCoords:function(a,b){var c,d=this.doc.sel.primary();return c=null==a?d.head:"object"==typeof a?xb(this.doc,a):a?d.from():d.to(),rc(this,c,b||"page")},charCoords:function(a,b){return qc(this,xb(this.doc,a),b||"page")},coordsChar:function(a,b){return a=pc(this,a,b||"page"),uc(this,a.left,a.top)},lineAtHeight:function(a,b){return a=pc(this,{top:a,left:0},b||"page").top,Uf(this.doc,a+this.display.viewOffset)},heightAtLine:function(a,b){var c=!1,d=this.doc.first+this.doc.size-1;a<this.doc.first?a=this.doc.first:a>d&&(a=d,c=!0);var e=Pf(this.doc,a);return oc(this,e,{top:0,left:0},b||"page").top+(c?this.doc.height-Vf(e):0)},defaultTextHeight:function(){return xc(this.display)},defaultCharWidth:function(){return yc(this.display)},setGutterMarker:Mc(function(a,b,c){return ee(this.doc,a,"gutter",function(a){var d=a.gutterMarkers||(a.gutterMarkers={});return d[b]=c,!c&&Ug(d)&&(a.gutterMarkers=null),!0})}),clearGutter:Mc(function(a){var b=this,c=b.doc,d=c.first;c.iter(function(c){c.gutterMarkers&&c.gutterMarkers[a]&&(c.gutterMarkers[a]=null,Rc(b,d,"gutter"),Ug(c.gutterMarkers)&&(c.gutterMarkers=null)),++d})}),addLineWidget:Mc(function(a,b,c){return kf(this,a,b,c)}),removeLineWidget:function(a){a.clear()},lineInfo:function(a){if("number"==typeof a){if(!zb(this.doc,a))return null;var b=a;if(a=Pf(this.doc,a),!a)return null}else{var b=Tf(a);if(null==b)return null}return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(a,b,c,d,e){var f=this.display;a=rc(this,xb(this.doc,a));var g=a.bottom,h=a.left;if(b.style.position="absolute",f.sizer.appendChild(b),"over"==d)g=a.top;else if("above"==d||"near"==d){var i=Math.max(f.wrapper.clientHeight,this.doc.height),j=Math.max(f.sizer.clientWidth,f.lineSpace.clientWidth);("above"==d||a.bottom+b.offsetHeight>i)&&a.top>b.offsetHeight?g=a.top-b.offsetHeight:a.bottom+b.offsetHeight<=i&&(g=a.bottom),h+b.offsetWidth>j&&(h=j-b.offsetWidth)}b.style.top=g+"px",b.style.left=b.style.right="","right"==e?(h=f.sizer.clientWidth-b.offsetWidth,b.style.right="0px"):("left"==e?h=0:"middle"==e&&(h=(f.sizer.clientWidth-b.offsetWidth)/2),b.style.left=h+"px"),c&&$d(this,h,g,h+b.offsetWidth,g+b.offsetHeight)
},triggerOnKeyDown:Mc(Dd),triggerOnKeyPress:Mc(Gd),triggerOnKeyUp:Fd,execCommand:function(a){return ue.hasOwnProperty(a)?ue[a](this):void 0},findPosH:function(a,b,c,d){var e=1;0>b&&(e=-1,b=-b);for(var f=0,g=xb(this.doc,a);b>f&&(g=ge(this.doc,g,e,c,d),!g.hitSide);++f);return g},moveH:Mc(function(a,b){var c=this;c.extendSelectionsBy(function(d){return c.display.shift||c.doc.extend||d.empty()?ge(c.doc,d.head,a,b,c.options.rtlMoveVisually):0>a?d.from():d.to()},Eg)}),deleteH:Mc(function(a,b){var c=this.doc.sel,d=this.doc;c.somethingSelected()?d.replaceSelection("",null,"+delete"):fe(this,function(c){var e=ge(d,c.head,a,b,!1);return 0>a?{from:e,to:c.head}:{from:c.head,to:e}})}),findPosV:function(a,b,c,d){var e=1,f=d;0>b&&(e=-1,b=-b);for(var g=0,h=xb(this.doc,a);b>g;++g){var i=rc(this,h,"div");if(null==f?f=i.left:i.left=f,h=he(this,i,e,c),h.hitSide)break}return h},moveV:Mc(function(a,b){var c=this,d=this.doc,e=[],f=!c.display.shift&&!d.extend&&d.sel.somethingSelected();if(d.extendSelectionsBy(function(g){if(f)return 0>a?g.from():g.to();var h=rc(c,g.head,"div");null!=g.goalColumn&&(h.left=g.goalColumn),e.push(h.left);var i=he(c,h,a,b);return"page"==b&&g==d.sel.primary()&&ae(c,null,qc(c,i,"div").top-h.top),i},Eg),e.length)for(var g=0;g<d.sel.ranges.length;g++)d.sel.ranges[g].goalColumn=e[g]}),toggleOverwrite:function(a){(null==a||a!=this.state.overwrite)&&((this.state.overwrite=!this.state.overwrite)?dh(this.display.cursorDiv,"CodeMirror-overwrite"):ch(this.display.cursorDiv,"CodeMirror-overwrite"),sg(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return ah()==this.display.input},scrollTo:Mc(function(a,b){(null!=a||null!=b)&&ce(this),null!=a&&(this.curOp.scrollLeft=a),null!=b&&(this.curOp.scrollTop=b)}),getScrollInfo:function(){var a=this.display.scroller,b=Ag;return{left:a.scrollLeft,top:a.scrollTop,height:a.scrollHeight-b,width:a.scrollWidth-b,clientHeight:a.clientHeight-b,clientWidth:a.clientWidth-b}},scrollIntoView:Mc(function(a,b){if(null==a?(a={from:this.doc.sel.primary().head,to:null},null==b&&(b=this.options.cursorScrollMargin)):"number"==typeof a?a={from:nb(a,0),to:null}:null==a.from&&(a={from:a,to:null}),a.to||(a.to=a.from),a.margin=b||0,null!=a.from.line)ce(this),this.curOp.scrollToPos=a;else{var c=_d(this,Math.min(a.from.left,a.to.left),Math.min(a.from.top,a.to.top)-a.margin,Math.max(a.from.right,a.to.right),Math.max(a.from.bottom,a.to.bottom)+a.margin);this.scrollTo(c.scrollLeft,c.scrollTop)}}),setSize:Mc(function(a,b){function d(a){return"number"==typeof a||/^\d+$/.test(String(a))?a+"px":a}var c=this;null!=a&&(c.display.wrapper.style.width=d(a)),null!=b&&(c.display.wrapper.style.height=d(b)),c.options.lineWrapping&&kc(this);var e=c.display.viewFrom;c.doc.iter(e,c.display.viewTo,function(a){if(a.widgets)for(var b=0;b<a.widgets.length;b++)if(a.widgets[b].noHScroll){Rc(c,e,"widget");break}++e}),c.curOp.forceUpdate=!0,sg(c,"refresh",this)}),operation:function(a){return Kc(this,a)},refresh:Mc(function(){var a=this.display.cachedTextHeight;Qc(this),this.curOp.forceUpdate=!0,lc(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),H(this),(null==a||Math.abs(a-xc(this.display))>.5)&&C(this),sg(this,"refresh",this)}),swapDoc:Mc(function(a){var b=this.doc;return b.cm=null,Of(this,a),lc(this),_c(this),this.scrollTo(a.scrollLeft,a.scrollTop),ug(this,"swapDoc",this,b),b}),getInputField:function(){return this.display.input},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},zg(w);var je=w.defaults={},ke=w.optionHandlers={},me=w.Init={toString:function(){return"CodeMirror.Init"}};le("value","",function(a,b){a.setValue(b)},!0),le("mode",null,function(a,b){a.doc.modeOption=b,y(a)},!0),le("indentUnit",2,y,!0),le("indentWithTabs",!1),le("smartIndent",!0),le("tabSize",4,function(a){z(a),lc(a),Qc(a)},!0),le("specialChars",/[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(a,b){a.options.specialChars=new RegExp(b.source+(b.test("	")?"":"|	"),"g"),a.refresh()},!0),le("specialCharPlaceholder",zf,function(a){a.refresh()},!0),le("electricChars",!0),le("rtlMoveVisually",!q),le("wholeLineUpdateBefore",!0),le("theme","default",function(a){E(a),F(a)},!0),le("keyMap","default",D),le("extraKeys",null),le("lineWrapping",!1,A,!0),le("gutters",[],function(a){K(a.options),F(a)},!0),le("fixedGutter",!0,function(a,b){a.display.gutters.style.left=b?S(a.display)+"px":"0",a.refresh()},!0),le("coverGutterNextToScrollbar",!1,N,!0),le("lineNumbers",!1,function(a){K(a.options),F(a)},!0),le("firstLineNumber",1,F,!0),le("lineNumberFormatter",function(a){return a},F,!0),le("showCursorWhenSelecting",!1,Qb,!0),le("resetSelectionOnContextMenu",!0),le("readOnly",!1,function(a,b){"nocursor"==b?(Id(a),a.display.input.blur(),a.display.disabled=!0):(a.display.disabled=!1,b||_c(a))}),le("disableInput",!1,function(a,b){b||_c(a)},!0),le("dragDrop",!0),le("cursorBlinkRate",530),le("cursorScrollMargin",0),le("cursorHeight",1,Qb,!0),le("singleCursorHeightPerLine",!0,Qb,!0),le("workTime",100),le("workDelay",100),le("flattenSpans",!0,z,!0),le("addModeClass",!1,z,!0),le("pollInterval",100),le("undoDepth",200,function(a,b){a.doc.history.undoDepth=b}),le("historyEventDelay",1250),le("viewportMargin",10,function(a){a.refresh()},!0),le("maxHighlightLength",1e4,z,!0),le("moveInputWithCursor",!0,function(a,b){b||(a.display.inputDiv.style.top=a.display.inputDiv.style.left=0)}),le("tabindex",null,function(a,b){a.display.input.tabIndex=b||""}),le("autofocus",null);var ne=w.modes={},oe=w.mimeModes={};w.defineMode=function(a,b){if(w.defaults.mode||"null"==a||(w.defaults.mode=a),arguments.length>2){b.dependencies=[];for(var c=2;c<arguments.length;++c)b.dependencies.push(arguments[c])}ne[a]=b},w.defineMIME=function(a,b){oe[a]=b},w.resolveMode=function(a){if("string"==typeof a&&oe.hasOwnProperty(a))a=oe[a];else if(a&&"string"==typeof a.name&&oe.hasOwnProperty(a.name)){var b=oe[a.name];"string"==typeof b&&(b={name:b}),a=Og(b,a),a.name=b.name}else if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return w.resolveMode("application/xml");return"string"==typeof a?{name:a}:a||{name:"null"}},w.getMode=function(a,b){var b=w.resolveMode(b),c=ne[b.name];if(!c)return w.getMode(a,"text/plain");var d=c(a,b);if(pe.hasOwnProperty(b.name)){var e=pe[b.name];for(var f in e)e.hasOwnProperty(f)&&(d.hasOwnProperty(f)&&(d["_"+f]=d[f]),d[f]=e[f])}if(d.name=b.name,b.helperType&&(d.helperType=b.helperType),b.modeProps)for(var f in b.modeProps)d[f]=b.modeProps[f];return d},w.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}}),w.defineMIME("text/plain","null");var pe=w.modeExtensions={};w.extendMode=function(a,b){var c=pe.hasOwnProperty(a)?pe[a]:pe[a]={};Pg(b,c)},w.defineExtension=function(a,b){w.prototype[a]=b},w.defineDocExtension=function(a,b){Kf.prototype[a]=b},w.defineOption=le;var qe=[];w.defineInitHook=function(a){qe.push(a)};var re=w.helpers={};w.registerHelper=function(a,b,c){re.hasOwnProperty(a)||(re[a]=w[a]={_global:[]}),re[a][b]=c},w.registerGlobalHelper=function(a,b,c,d){w.registerHelper(a,b,d),re[a]._global.push({pred:c,val:d})};var se=w.copyState=function(a,b){if(b===!0)return b;if(a.copyState)return a.copyState(b);var c={};for(var d in b){var e=b[d];e instanceof Array&&(e=e.concat([])),c[d]=e}return c},te=w.startState=function(a,b,c){return a.startState?a.startState(b,c):!0};w.innerMode=function(a,b){for(;a.innerMode;){var c=a.innerMode(b);if(!c||c.mode==a)break;b=c.state,a=c.mode}return c||{mode:a,state:b}};var ue=w.commands={selectAll:function(a){a.setSelection(nb(a.firstLine(),0),nb(a.lastLine()),Cg)},singleSelection:function(a){a.setSelection(a.getCursor("anchor"),a.getCursor("head"),Cg)},killLine:function(a){fe(a,function(b){if(b.empty()){var c=Pf(a.doc,b.head.line).text.length;return b.head.ch==c&&b.head.line<a.lastLine()?{from:b.head,to:nb(b.head.line+1,0)}:{from:b.head,to:nb(b.head.line,c)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){fe(a,function(b){return{from:nb(b.from().line,0),to:xb(a.doc,nb(b.to().line+1,0))}})},delLineLeft:function(a){fe(a,function(a){return{from:nb(a.from().line,0),to:a.from()}})},delWrappedLineLeft:function(a){fe(a,function(b){var c=a.charCoords(b.head,"div").top+5,d=a.coordsChar({left:0,top:c},"div");return{from:d,to:b.from()}})},delWrappedLineRight:function(a){fe(a,function(b){var c=a.charCoords(b.head,"div").top+5,d=a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div");return{from:b.from(),to:d}})},undo:function(a){a.undo()},redo:function(a){a.redo()},undoSelection:function(a){a.undoSelection()},redoSelection:function(a){a.redoSelection()},goDocStart:function(a){a.extendSelection(nb(a.firstLine(),0))},goDocEnd:function(a){a.extendSelection(nb(a.lastLine()))},goLineStart:function(a){a.extendSelectionsBy(function(b){return Bh(a,b.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(a){a.extendSelectionsBy(function(b){return Dh(a,b.head)},{origin:"+move",bias:1})},goLineEnd:function(a){a.extendSelectionsBy(function(b){return Ch(a,b.head.line)},{origin:"+move",bias:-1})},goLineRight:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div")},Eg)},goLineLeft:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:c},"div")},Eg)},goLineLeftSmart:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5,d=a.coordsChar({left:0,top:c},"div");return d.ch<a.getLine(d.line).search(/\S/)?Dh(a,b.head):d},Eg)},goLineUp:function(a){a.moveV(-1,"line")},goLineDown:function(a){a.moveV(1,"line")},goPageUp:function(a){a.moveV(-1,"page")},goPageDown:function(a){a.moveV(1,"page")},goCharLeft:function(a){a.moveH(-1,"char")},goCharRight:function(a){a.moveH(1,"char")},goColumnLeft:function(a){a.moveH(-1,"column")},goColumnRight:function(a){a.moveH(1,"column")},goWordLeft:function(a){a.moveH(-1,"word")},goGroupRight:function(a){a.moveH(1,"group")},goGroupLeft:function(a){a.moveH(-1,"group")},goWordRight:function(a){a.moveH(1,"word")},delCharBefore:function(a){a.deleteH(-1,"char")},delCharAfter:function(a){a.deleteH(1,"char")},delWordBefore:function(a){a.deleteH(-1,"word")},delWordAfter:function(a){a.deleteH(1,"word")},delGroupBefore:function(a){a.deleteH(-1,"group")},delGroupAfter:function(a){a.deleteH(1,"group")},indentAuto:function(a){a.indentSelection("smart")},indentMore:function(a){a.indentSelection("add")},indentLess:function(a){a.indentSelection("subtract")},insertTab:function(a){a.replaceSelection("	")},insertSoftTab:function(a){for(var b=[],c=a.listSelections(),d=a.options.tabSize,e=0;e<c.length;e++){var f=c[e].from(),g=Gg(a.getLine(f.line),f.ch,d);b.push(new Array(d-g%d+1).join(" "))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){Kc(a,function(){for(var b=a.listSelections(),c=[],d=0;d<b.length;d++){var e=b[d].head,f=Pf(a.doc,e.line).text;if(f)if(e.ch==f.length&&(e=new nb(e.line,e.ch-1)),e.ch>0)e=new nb(e.line,e.ch+1),a.replaceRange(f.charAt(e.ch-1)+f.charAt(e.ch-2),nb(e.line,e.ch-2),e,"+transpose");else if(e.line>a.doc.first){var g=Pf(a.doc,e.line-1).text;g&&a.replaceRange(f.charAt(0)+"\n"+g.charAt(g.length-1),nb(e.line-1,g.length-1),nb(e.line,1),"+transpose")}c.push(new tb(e,e))}a.setSelections(c)})},newlineAndIndent:function(a){Kc(a,function(){for(var b=a.listSelections().length,c=0;b>c;c++){var d=a.listSelections()[c];a.replaceRange("\n",d.anchor,d.head,"+input"),a.indentLine(d.from().line+1,null,!0),be(a)}})},toggleOverwrite:function(a){a.toggleOverwrite()}},ve=w.keyMap={};ve.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},ve.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-Up":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Down":"goDocEnd","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},ve.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection",fallthrough:["basic","emacsy"]},ve.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"},ve["default"]=p?ve.macDefault:ve.pcDefault;var xe=w.lookupKey=function(a,b,c){function d(b){b=we(b);var e=b[a];if(e===!1)return"stop";if(null!=e&&c(e))return!0;if(b.nofallthrough)return"stop";var f=b.fallthrough;if(null==f)return!1;if("[object Array]"!=Object.prototype.toString.call(f))return d(f);for(var g=0;g<f.length;++g){var h=d(f[g]);if(h)return h}return!1}for(var e=0;e<b.length;++e){var f=d(b[e]);if(f)return"stop"!=f}},ye=w.isModifierKey=function(a){var b=vh[a.keyCode];return"Ctrl"==b||"Alt"==b||"Shift"==b||"Mod"==b},ze=w.keyName=function(a,b){if(i&&34==a.keyCode&&a["char"])return!1;var c=vh[a.keyCode];return null==c||a.altGraphKey?!1:(a.altKey&&(c="Alt-"+c),(s?a.metaKey:a.ctrlKey)&&(c="Ctrl-"+c),(s?a.ctrlKey:a.metaKey)&&(c="Cmd-"+c),!b&&a.shiftKey&&(c="Shift-"+c),c)};w.fromTextArea=function(a,b){function d(){a.value=i.getValue()}if(b||(b={}),b.value=a.value,!b.tabindex&&a.tabindex&&(b.tabindex=a.tabindex),!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder),null==b.autofocus){var c=ah();b.autofocus=c==a||null!=a.getAttribute("autofocus")&&c==document.body}if(a.form&&(qg(a.form,"submit",d),!b.leaveSubmitMethodAlone)){var e=a.form,f=e.submit;try{var g=e.submit=function(){d(),e.submit=f,e.submit(),e.submit=g}}catch(h){}}a.style.display="none";var i=w(function(b){a.parentNode.insertBefore(b,a.nextSibling)},b);return i.save=d,i.getTextArea=function(){return a},i.toTextArea=function(){d(),a.parentNode.removeChild(i.getWrapperElement()),a.style.display="",a.form&&(rg(a.form,"submit",d),"function"==typeof a.form.submit&&(a.form.submit=f))},i};var Ae=w.StringStream=function(a,b){this.pos=this.start=0,this.string=a,this.tabSize=b||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0};Ae.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(a){var b=this.string.charAt(this.pos);if("string"==typeof a)var c=b==a;else var c=b&&(a.test?a.test(b):a(b));return c?(++this.pos,b):void 0},eatWhile:function(a){for(var b=this.pos;this.eat(a););return this.pos>b},eatSpace:function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){var b=this.string.indexOf(a,this.pos);return b>-1?(this.pos=b,!0):void 0},backUp:function(a){this.pos-=a},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Gg(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Gg(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return Gg(this.string,null,this.tabSize)-(this.lineStart?Gg(this.string,this.lineStart,this.tabSize):0)},match:function(a,b,c){if("string"!=typeof a){var f=this.string.slice(this.pos).match(a);return f&&f.index>0?null:(f&&b!==!1&&(this.pos+=f[0].length),f)}var d=function(a){return c?a.toLowerCase():a},e=this.string.substr(this.pos,a.length);return d(e)==d(a)?(b!==!1&&(this.pos+=a.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}}};var Be=w.TextMarker=function(a,b){this.lines=[],this.type=b,this.doc=a};zg(Be),Be.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;if(b&&Bc(a),yg(this,"clear")){var c=this.find();c&&ug(this,"clear",c.from,c.to)}for(var d=null,e=null,f=0;f<this.lines.length;++f){var g=this.lines[f],h=Ke(g.markedSpans,this);a&&!this.collapsed?Rc(a,Tf(g),"text"):a&&(null!=h.to&&(e=Tf(g)),null!=h.from&&(d=Tf(g))),g.markedSpans=Le(g.markedSpans,h),null==h.from&&this.collapsed&&!ef(this.doc,g)&&a&&Sf(g,xc(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(var f=0;f<this.lines.length;++f){var i=af(this.lines[f]),j=I(i);j>a.display.maxLineLength&&(a.display.maxLine=i,a.display.maxLineLength=j,a.display.maxLineChanged=!0)}null!=d&&a&&this.collapsed&&Qc(a,d,e+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&Lb(a.doc)),a&&ug(a,"markerCleared",a,this),b&&Dc(a),this.parent&&this.parent.clear()}},Be.prototype.find=function(a,b){null==a&&"bookmark"==this.type&&(a=1);for(var c,d,e=0;e<this.lines.length;++e){var f=this.lines[e],g=Ke(f.markedSpans,this);if(null!=g.from&&(c=nb(b?f:Tf(f),g.from),-1==a))return c;if(null!=g.to&&(d=nb(b?f:Tf(f),g.to),1==a))return d}return c&&{from:c,to:d}},Be.prototype.changed=function(){var a=this.find(-1,!0),b=this,c=this.doc.cm;a&&c&&Kc(c,function(){var d=a.line,e=Tf(a.line),f=dc(c,e);if(f&&(jc(f),c.curOp.selectionChanged=c.curOp.forceUpdate=!0),c.curOp.updateMaxLine=!0,!ef(b.doc,d)&&null!=b.height){var g=b.height;b.height=null;var h=jf(b)-g;h&&Sf(d,d.height+h)}})},Be.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=Mg(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)},Be.prototype.detachLine=function(a){if(this.lines.splice(Mg(this.lines,a),1),!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;(b.maybeHiddenMarkers||(b.maybeHiddenMarkers=[])).push(this)}};var Ce=0,Ee=w.SharedTextMarker=function(a,b){this.markers=a,this.primary=b;for(var c=0;c<a.length;++c)a[c].parent=this};zg(Ee),Ee.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();ug(this,"clear")}},Ee.prototype.find=function(a,b){return this.primary.find(a,b)};var gf=w.LineWidget=function(a,b,c){if(c)for(var d in c)c.hasOwnProperty(d)&&(this[d]=c[d]);this.cm=a,this.node=b};zg(gf),gf.prototype.clear=function(){var a=this.cm,b=this.line.widgets,c=this.line,d=Tf(c);if(null!=d&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||(c.widgets=null);var f=jf(this);Kc(a,function(){hf(a,c,-f),Rc(a,d,"widget"),Sf(c,Math.max(0,c.height-f))})}},gf.prototype.changed=function(){var a=this.height,b=this.cm,c=this.line;this.height=null;var d=jf(this)-a;d&&Kc(b,function(){b.curOp.forceUpdate=!0,hf(b,c,d),Sf(c,c.height+d)})};var lf=w.Line=function(a,b,c){this.text=a,Ue(this,b),this.height=c?c(this):1};zg(lf),lf.prototype.lineNo=function(){return Tf(this)};var vf={},wf={};Hf.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var c=a,d=a+b;d>c;++c){var e=this.lines[c];this.height-=e.height,nf(e),ug(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,this.lines)},insertInner:function(a,b,c){this.height+=c,this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(var d=0;d<b.length;++d)b[d].parent=this},iterN:function(a,b,c){for(var d=a+b;d>a;++a)if(c(this.lines[a]))return!0}},If.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var c=0;c<this.children.length;++c){var d=this.children[c],e=d.chunkSize();if(e>a){var f=Math.min(b,e-a),g=d.height;if(d.removeInner(a,f),this.height-=g-d.height,e==f&&(this.children.splice(c--,1),d.parent=null),0==(b-=f))break;a=0}else a-=e}if(this.size-b<25&&(this.children.length>1||!(this.children[0]instanceof Hf))){var h=[];this.collapse(h),this.children=[new Hf(h)],this.children[0].parent=this}},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,c){this.size+=b.length,this.height+=c;for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(f>=a){if(e.insertInner(a,b,c),e.lines&&e.lines.length>50){for(;e.lines.length>50;){var g=e.lines.splice(e.lines.length-25,25),h=new Hf(g);e.height-=h.height,this.children.splice(d+1,0,h),h.parent=this}this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(this.children.length<=10)){var a=this;do{var b=a.children.splice(a.children.length-5,5),c=new If(b);if(a.parent){a.size-=c.size,a.height-=c.height;var e=Mg(a.parent.children,a);a.parent.children.splice(e+1,0,c)}else{var d=new If(a.children);d.parent=a,a.children=[d,c],a=d}c.parent=a.parent}while(a.children.length>10);a.parent.maybeSpill()}},iterN:function(a,b,c){for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(f>a){var g=Math.min(b,f-a);if(e.iterN(a,g,c))return!0;if(0==(b-=g))break;a=0}else a-=f}}};var Jf=0,Kf=w.Doc=function(a,b,c){if(!(this instanceof Kf))return new Kf(a,b,c);null==c&&(c=0),If.call(this,[new Hf([new lf("",null)])]),this.first=c,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=c;var d=nb(c,0);this.sel=vb(d),this.history=new Xf(null),this.id=++Jf,this.modeOption=b,"string"==typeof a&&(a=qh(a)),Gf(this,{from:d,to:d,text:a}),Ib(this,vb(d),Cg)};Kf.prototype=Og(If.prototype,{constructor:Kf,iter:function(a,b,c){c?this.iterN(a-this.first,b-a,c):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var c=0,d=0;d<b.length;++d)c+=b[d].height;this.insertInner(a-this.first,b,c)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=Rf(this,this.first,this.first+this.size);return a===!1?b:b.join(a||"\n")},setValue:Nc(function(a){var b=nb(this.first,0),c=this.first+this.size-1;Rd(this,{from:b,to:nb(c,Pf(this,c).text.length),text:qh(a),origin:"setValue"},!0),Ib(this,vb(b))}),replaceRange:function(a,b,c,d){b=xb(this,b),c=c?xb(this,c):b,Xd(this,a,b,c,d)},getRange:function(a,b,c){var d=Qf(this,xb(this,a),xb(this,b));return c===!1?d:d.join(c||"\n")},getLine:function(a){var b=this.getLineHandle(a);return b&&b.text},getLineHandle:function(a){return zb(this,a)?Pf(this,a):void 0},getLineNumber:function(a){return Tf(a)},getLineHandleVisualStart:function(a){return"number"==typeof a&&(a=Pf(this,a)),af(a)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(a){return xb(this,a)},getCursor:function(a){var c,b=this.sel.primary();return c=null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||a===!1?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:Nc(function(a,b,c){Fb(this,xb(this,"number"==typeof a?nb(a,b||0):a),null,c)}),setSelection:Nc(function(a,b,c){Fb(this,xb(this,a),xb(this,b||a),c)}),extendSelection:Nc(function(a,b,c){Cb(this,xb(this,a),b&&xb(this,b),c)}),extendSelections:Nc(function(a,b){Db(this,Ab(this,a,b))}),extendSelectionsBy:Nc(function(a,b){Db(this,Ng(this.sel.ranges,a),b)}),setSelections:Nc(function(a,b,c){if(a.length){for(var d=0,e=[];d<a.length;d++)e[d]=new tb(xb(this,a[d].anchor),xb(this,a[d].head));null==b&&(b=Math.min(a.length-1,this.sel.primIndex)),Ib(this,ub(e,b),c)}}),addSelection:Nc(function(a,b,c){var d=this.sel.ranges.slice(0);d.push(new tb(xb(this,a),xb(this,b||a))),Ib(this,ub(d,d.length-1),c)}),getSelection:function(a){for(var c,b=this.sel.ranges,d=0;d<b.length;d++){var e=Qf(this,b[d].from(),b[d].to());c=c?c.concat(e):e}return a===!1?c:c.join(a||"\n")},getSelections:function(a){for(var b=[],c=this.sel.ranges,d=0;d<c.length;d++){var e=Qf(this,c[d].from(),c[d].to());a!==!1&&(e=e.join(a||"\n")),b[d]=e}return b},replaceSelection:function(a,b,c){for(var d=[],e=0;e<this.sel.ranges.length;e++)d[e]=a;this.replaceSelections(d,b,c||"+input")},replaceSelections:Nc(function(a,b,c){for(var d=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];d[f]={from:g.from(),to:g.to(),text:qh(a[f]),origin:c}}for(var h=b&&"end"!=b&&Pd(this,d,b),f=d.length-1;f>=0;f--)Rd(this,d[f]);h?Hb(this,h):this.cm&&be(this.cm)}),undo:Nc(function(){Td(this,"undo")}),redo:Nc(function(){Td(this,"redo")}),undoSelection:Nc(function(){Td(this,"undo",!0)}),redoSelection:Nc(function(){Td(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,c=0,d=0;d<a.done.length;d++)a.done[d].ranges||++b;for(var d=0;d<a.undone.length;d++)a.undone[d].ranges||++c;return{undo:b,redo:c}},clearHistory:function(){this.history=new Xf(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){return a&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:gg(this.history.done),undone:gg(this.history.undone)}},setHistory:function(a){var b=this.history=new Xf(this.history.maxGeneration);b.done=gg(a.done.slice(0),null,!0),b.undone=gg(a.undone.slice(0),null,!0)},addLineClass:Nc(function(a,b,c){return ee(this,a,"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"wrapClass";if(a[d]){if(new RegExp("(?:^|\\s)"+c+"(?:$|\\s)").test(a[d]))return!1;a[d]+=" "+c}else a[d]=c;return!0})}),removeLineClass:Nc(function(a,b,c){return ee(this,a,"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"wrapClass",e=a[d];if(!e)return!1;if(null==c)a[d]=null;else{var f=e.match(new RegExp("(?:^|\\s+)"+c+"(?:$|\\s+)"));if(!f)return!1;var g=f.index+f[0].length;a[d]=e.slice(0,f.index)+(f.index&&g!=e.length?" ":"")+e.slice(g)||null}return!0})}),markText:function(a,b,c){return De(this,xb(this,a),xb(this,b),c,"range")},setBookmark:function(a,b){var c={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared};return a=xb(this,a),De(this,a,a,c,"bookmark")},findMarksAt:function(a){a=xb(this,a);var b=[],c=Pf(this,a.line).markedSpans;if(c)for(var d=0;d<c.length;++d){var e=c[d];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||e.marker)}return b},findMarks:function(a,b,c){a=xb(this,a),b=xb(this,b);var d=[],e=a.line;return this.iter(a.line,b.line+1,function(f){var g=f.markedSpans;if(g)for(var h=0;h<g.length;h++){var i=g[h];e==a.line&&a.ch>i.to||null==i.from&&e!=a.line||e==b.line&&i.from>b.ch||c&&!c(i.marker)||d.push(i.marker.parent||i.marker)}++e}),d},getAllMarks:function(){var a=[];return this.iter(function(b){var c=b.markedSpans;if(c)for(var d=0;d<c.length;++d)null!=c[d].from&&a.push(c[d].marker)}),a},posFromIndex:function(a){var b,c=this.first;return this.iter(function(d){var e=d.text.length+1;return e>a?(b=a,!0):(a-=e,++c,void 0)}),xb(this,nb(c,b))},indexFromPos:function(a){a=xb(this,a);var b=a.ch;return a.line<this.first||a.ch<0?0:(this.iter(this.first,a.line,function(a){b+=a.text.length+1}),b)},copy:function(a){var b=new Kf(Rf(this,this.first,this.first+this.size),this.modeOption,this.first);return b.scrollTop=this.scrollTop,b.scrollLeft=this.scrollLeft,b.sel=this.sel,b.extend=!1,a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory())),b},linkedDoc:function(a){a||(a={});var b=this.first,c=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from),null!=a.to&&a.to<c&&(c=a.to);var d=new Kf(Rf(this,b,c),a.mode||this.modeOption,b);return a.sharedHist&&(d.history=this.history),(this.linked||(this.linked=[])).push({doc:d,sharedHist:a.sharedHist}),d.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}],He(d,Ge(this)),d},unlinkDoc:function(a){if(a instanceof w&&(a=a.doc),this.linked)for(var b=0;b<this.linked.length;++b){var c=this.linked[b];if(c.doc==a){this.linked.splice(b,1),a.unlinkDoc(this),Ie(Ge(this));break}}if(a.history==this.history){var d=[a.id];Nf(a,function(a){d.push(a.id)},!0),a.history=new Xf(null),a.history.done=gg(this.history.done,d),a.history.undone=gg(this.history.undone,d)}},iterLinkedDocs:function(a){Nf(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm}}),Kf.prototype.eachLine=Kf.prototype.iter;var Lf="iter insert remove copy getEditor".split(" ");for(var Mf in Kf.prototype)Kf.prototype.hasOwnProperty(Mf)&&Mg(Lf,Mf)<0&&(w.prototype[Mf]=function(a){return function(){return a.apply(this.doc,arguments)}}(Kf.prototype[Mf]));zg(Kf);var kg=w.e_preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},lg=w.e_stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},ng=w.e_stop=function(a){kg(a),lg(a)},qg=w.on=function(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var d=a._handlers||(a._handlers={}),e=d[b]||(d[b]=[]);e.push(c)}},rg=w.off=function(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,!1);else if(a.detachEvent)a.detachEvent("on"+b,c);else{var d=a._handlers&&a._handlers[b];if(!d)return;for(var e=0;e<d.length;++e)if(d[e]==c){d.splice(e,1);break}}},sg=w.signal=function(a,b){var c=a._handlers&&a._handlers[b];if(c)for(var d=Array.prototype.slice.call(arguments,2),e=0;e<c.length;++e)c[e].apply(null,d)},tg=null,Ag=30,Bg=w.Pass={toString:function(){return"CodeMirror.Pass"}},Cg={scroll:!1},Dg={origin:"*mouse"},Eg={origin:"+move"};Fg.prototype.set=function(a,b){clearTimeout(this.id),this.id=setTimeout(b,a)};var Gg=w.countColumn=function(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));for(var f=d||0,g=e||0;;){var h=a.indexOf("	",f);if(0>h||h>=b)return g+(b-f);g+=h-f,g+=c-g%c,f=h+1}},Ig=[""],Lg=function(a){a.select()};n?Lg=function(a){a.selectionStart=0,a.selectionEnd=a.value.length}:d&&(Lg=function(a){try{a.select()}catch(b){}}),[].indexOf&&(Mg=function(a,b){return a.indexOf(b)}),[].map&&(Ng=function(a,b){return a.map(b)});var Yg,Rg=/[\u00df\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Sg=w.isWordChar=function(a){return/\w/.test(a)||a>"\x80"&&(a.toUpperCase()!=a.toLowerCase()||Rg.test(a))},Vg=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
Yg=document.createRange?function(a,b,c){var d=document.createRange();return d.setEnd(a,c),d.setStart(a,b),d}:function(a,b,c){var d=document.body.createTextRange();return d.moveToElementText(a.parentNode),d.collapse(!0),d.moveEnd("character",c),d.moveStart("character",b),d},d&&11>e&&(ah=function(){try{return document.activeElement}catch(a){return document.body}});var kh,mh,oh,gh=!1,jh=function(){if(d&&9>e)return!1;var a=Xg("div");return"draggable"in a||"dragDrop"in a}(),qh=w.splitLines=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,c=[],d=a.length;d>=b;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");-1!=g?(c.push(f.slice(0,g)),b+=g+1):(c.push(f),b=e+1)}return c}:function(a){return a.split(/\r\n?|\n/)},rh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(c){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},sh=function(){var a=Xg("div");return"oncopy"in a?!0:(a.setAttribute("oncopy","return;"),"function"==typeof a.oncopy)}(),th=null,vh={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};w.keyNames=vh,function(){for(var a=0;10>a;a++)vh[a+48]=vh[a+96]=String(a);for(var a=65;90>=a;a++)vh[a]=String.fromCharCode(a);for(var a=1;12>=a;a++)vh[a+111]=vh[a+63235]="F"+a}();var Fh,Kh=function(){function c(c){return 247>=c?a.charAt(c):c>=1424&&1524>=c?"R":c>=1536&&1773>=c?b.charAt(c-1536):c>=1774&&2220>=c?"r":c>=8192&&8203>=c?"w":8204==c?"b":"L"}function j(a,b,c){this.level=a,this.from=b,this.to=c}var a="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",b="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",d=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,e=/[stwN]/,f=/[LRr]/,g=/[Lb1n]/,h=/[1n]/,i="L";return function(a){if(!d.test(a))return!1;for(var m,b=a.length,k=[],l=0;b>l;++l)k.push(m=c(a.charCodeAt(l)));for(var l=0,n=i;b>l;++l){var m=k[l];"m"==m?k[l]=n:n=m}for(var l=0,o=i;b>l;++l){var m=k[l];"1"==m&&"r"==o?k[l]="n":f.test(m)&&(o=m,"r"==m&&(k[l]="R"))}for(var l=1,n=k[0];b-1>l;++l){var m=k[l];"+"==m&&"1"==n&&"1"==k[l+1]?k[l]="1":","!=m||n!=k[l+1]||"1"!=n&&"n"!=n||(k[l]=n),n=m}for(var l=0;b>l;++l){var m=k[l];if(","==m)k[l]="N";else if("%"==m){for(var p=l+1;b>p&&"%"==k[p];++p);for(var q=l&&"!"==k[l-1]||b>p&&"1"==k[p]?"1":"N",r=l;p>r;++r)k[r]=q;l=p-1}}for(var l=0,o=i;b>l;++l){var m=k[l];"L"==o&&"1"==m?k[l]="L":f.test(m)&&(o=m)}for(var l=0;b>l;++l)if(e.test(k[l])){for(var p=l+1;b>p&&e.test(k[p]);++p);for(var s="L"==(l?k[l-1]:i),t="L"==(b>p?k[p]:i),q=s||t?"L":"R",r=l;p>r;++r)k[r]=q;l=p-1}for(var v,u=[],l=0;b>l;)if(g.test(k[l])){var w=l;for(++l;b>l&&g.test(k[l]);++l);u.push(new j(0,w,l))}else{var x=l,y=u.length;for(++l;b>l&&"L"!=k[l];++l);for(var r=x;l>r;)if(h.test(k[r])){r>x&&u.splice(y,0,new j(1,x,r));var z=r;for(++r;l>r&&h.test(k[r]);++r);u.splice(y,0,new j(2,z,r)),x=r}else++r;l>x&&u.splice(y,0,new j(1,x,l))}return 1==u[0].level&&(v=a.match(/^\s+/))&&(u[0].from=v[0].length,u.unshift(new j(0,0,v[0].length))),1==Kg(u).level&&(v=a.match(/\s+$/))&&(Kg(u).to-=v[0].length,u.push(new j(0,b-v[0].length,b))),u[0].level!=Kg(u).level&&u.push(new j(u[0].level,b,b)),u}}();return w.version="4.5.1",w});;!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define('pdfkit',[],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.PDFDocument=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Data;

Data = (function() {
  function Data(data) {
    this.data = data != null ? data : [];
    this.pos = 0;
    this.length = this.data.length;
  }

  Data.prototype.readByte = function() {
    return this.data[this.pos++];
  };

  Data.prototype.writeByte = function(byte) {
    return this.data[this.pos++] = byte;
  };

  Data.prototype.byteAt = function(index) {
    return this.data[index];
  };

  Data.prototype.readBool = function() {
    return !!this.readByte();
  };

  Data.prototype.writeBool = function(val) {
    return this.writeByte(val ? 1 : 0);
  };

  Data.prototype.readUInt32 = function() {
    var b1, b2, b3, b4;
    b1 = this.readByte() * 0x1000000;
    b2 = this.readByte() << 16;
    b3 = this.readByte() << 8;
    b4 = this.readByte();
    return b1 + b2 + b3 + b4;
  };

  Data.prototype.writeUInt32 = function(val) {
    this.writeByte((val >>> 24) & 0xff);
    this.writeByte((val >> 16) & 0xff);
    this.writeByte((val >> 8) & 0xff);
    return this.writeByte(val & 0xff);
  };

  Data.prototype.readInt32 = function() {
    var int;
    int = this.readUInt32();
    if (int >= 0x80000000) {
      return int - 0x100000000;
    } else {
      return int;
    }
  };

  Data.prototype.writeInt32 = function(val) {
    if (val < 0) {
      val += 0x100000000;
    }
    return this.writeUInt32(val);
  };

  Data.prototype.readUInt16 = function() {
    var b1, b2;
    b1 = this.readByte() << 8;
    b2 = this.readByte();
    return b1 | b2;
  };

  Data.prototype.writeUInt16 = function(val) {
    this.writeByte((val >> 8) & 0xff);
    return this.writeByte(val & 0xff);
  };

  Data.prototype.readInt16 = function() {
    var int;
    int = this.readUInt16();
    if (int >= 0x8000) {
      return int - 0x10000;
    } else {
      return int;
    }
  };

  Data.prototype.writeInt16 = function(val) {
    if (val < 0) {
      val += 0x10000;
    }
    return this.writeUInt16(val);
  };

  Data.prototype.readString = function(length) {
    var i, ret, _i;
    ret = [];
    for (i = _i = 0; 0 <= length ? _i < length : _i > length; i = 0 <= length ? ++_i : --_i) {
      ret[i] = String.fromCharCode(this.readByte());
    }
    return ret.join('');
  };

  Data.prototype.writeString = function(val) {
    var i, _i, _ref, _results;
    _results = [];
    for (i = _i = 0, _ref = val.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      _results.push(this.writeByte(val.charCodeAt(i)));
    }
    return _results;
  };

  Data.prototype.stringAt = function(pos, length) {
    this.pos = pos;
    return this.readString(length);
  };

  Data.prototype.readShort = function() {
    return this.readInt16();
  };

  Data.prototype.writeShort = function(val) {
    return this.writeInt16(val);
  };

  Data.prototype.readLongLong = function() {
    var b1, b2, b3, b4, b5, b6, b7, b8;
    b1 = this.readByte();
    b2 = this.readByte();
    b3 = this.readByte();
    b4 = this.readByte();
    b5 = this.readByte();
    b6 = this.readByte();
    b7 = this.readByte();
    b8 = this.readByte();
    if (b1 & 0x80) {
      return ((b1 ^ 0xff) * 0x100000000000000 + (b2 ^ 0xff) * 0x1000000000000 + (b3 ^ 0xff) * 0x10000000000 + (b4 ^ 0xff) * 0x100000000 + (b5 ^ 0xff) * 0x1000000 + (b6 ^ 0xff) * 0x10000 + (b7 ^ 0xff) * 0x100 + (b8 ^ 0xff) + 1) * -1;
    }
    return b1 * 0x100000000000000 + b2 * 0x1000000000000 + b3 * 0x10000000000 + b4 * 0x100000000 + b5 * 0x1000000 + b6 * 0x10000 + b7 * 0x100 + b8;
  };

  Data.prototype.writeLongLong = function(val) {
    var high, low;
    high = Math.floor(val / 0x100000000);
    low = val & 0xffffffff;
    this.writeByte((high >> 24) & 0xff);
    this.writeByte((high >> 16) & 0xff);
    this.writeByte((high >> 8) & 0xff);
    this.writeByte(high & 0xff);
    this.writeByte((low >> 24) & 0xff);
    this.writeByte((low >> 16) & 0xff);
    this.writeByte((low >> 8) & 0xff);
    return this.writeByte(low & 0xff);
  };

  Data.prototype.readInt = function() {
    return this.readInt32();
  };

  Data.prototype.writeInt = function(val) {
    return this.writeInt32(val);
  };

  Data.prototype.slice = function(start, end) {
    return this.data.slice(start, end);
  };

  Data.prototype.read = function(bytes) {
    var buf, i, _i;
    buf = [];
    for (i = _i = 0; 0 <= bytes ? _i < bytes : _i > bytes; i = 0 <= bytes ? ++_i : --_i) {
      buf.push(this.readByte());
    }
    return buf;
  };

  Data.prototype.write = function(bytes) {
    var byte, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = bytes.length; _i < _len; _i++) {
      byte = bytes[_i];
      _results.push(this.writeByte(byte));
    }
    return _results;
  };

  return Data;

})();

module.exports = Data;


},{}],2:[function(require,module,exports){
(function (Buffer){

/*
PDFDocument - represents an entire PDF document
By Devon Govett
 */
var PDFDocument, PDFObject, PDFPage, PDFReference, fs, stream,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

stream = require('stream');

fs = require('fs');

PDFObject = require('./object');

PDFReference = require('./reference');

PDFPage = require('./page');

PDFDocument = (function(_super) {
  var mixin;

  __extends(PDFDocument, _super);

  function PDFDocument(options) {
    var key, val, _ref, _ref1;
    this.options = options != null ? options : {};
    PDFDocument.__super__.constructor.apply(this, arguments);
    this.version = 1.3;
    this.compress = (_ref = this.options.compress) != null ? _ref : true;
    this._offsets = [];
    this._waiting = 0;
    this._ended = false;
    this._offset = 0;
    this._root = this.ref({
      Type: 'Catalog',
      Pages: this.ref({
        Type: 'Pages',
        Count: 0,
        Kids: []
      })
    });
    this.page = null;
    this.initColor();
    this.initVector();
    this.initFonts();
    this.initText();
    this.initImages();
    this.info = {
      Producer: 'PDFKit',
      Creator: 'PDFKit',
      CreationDate: new Date()
    };
    if (this.options.info) {
      _ref1 = this.options.info;
      for (key in _ref1) {
        val = _ref1[key];
        this.info[key] = val;
      }
    }
    this._write("%PDF-" + this.version);
    this._write("%\xFF\xFF\xFF\xFF");
    this.addPage();
  }

  mixin = function(methods) {
    var method, name, _results;
    _results = [];
    for (name in methods) {
      method = methods[name];
      _results.push(PDFDocument.prototype[name] = method);
    }
    return _results;
  };

  mixin(require('./mixins/color'));

  mixin(require('./mixins/vector'));

  mixin(require('./mixins/fonts'));

  mixin(require('./mixins/text'));

  mixin(require('./mixins/images'));

  mixin(require('./mixins/annotations'));

  PDFDocument.prototype.addPage = function(options) {
    var pages, _ref;
    if (options == null) {
      options = this.options;
    }
    if ((_ref = this.page) != null) {
      _ref.end();
    }
    this.page = new PDFPage(this, options);
    pages = this._root.data.Pages.data;
    pages.Kids.push(this.page.dictionary);
    pages.Count++;
    this.x = this.page.margins.left;
    this.y = this.page.margins.top;
    this._ctm = [1, 0, 0, 1, 0, 0];
    this.transform(1, 0, 0, -1, 0, this.page.height);
    return this;
  };

  PDFDocument.prototype.ref = function(data) {
    var ref;
    ref = new PDFReference(this, this._offsets.length + 1, data);
    this._offsets.push(null);
    this._waiting++;
    return ref;
  };

  PDFDocument.prototype._read = function() {};

  PDFDocument.prototype._write = function(data) {
    if (!Buffer.isBuffer(data)) {
      data = new Buffer(data + '\n', 'binary');
    }
    this.push(data);
    return this._offset += data.length;
  };

  PDFDocument.prototype.addContent = function(data) {
    this.page.write(data);
    return this;
  };

  PDFDocument.prototype._refEnd = function(ref) {
    this._offsets[ref.id - 1] = ref.offset;
    if (--this._waiting === 0 && this._ended) {
      this._finalize();
      return this._ended = false;
    }
  };

  PDFDocument.prototype.write = function(filename, fn) {
    var err;
    err = new Error('PDFDocument#write is deprecated, and will be removed in a future version of PDFKit. Please pipe the document into a Node stream.');
    console.warn(err.stack);
    this.pipe(fs.createWriteStream(filename));
    this.end();
    return this.once('end', fn);
  };

  PDFDocument.prototype.output = function(fn) {
    throw new Error('PDFDocument#output is deprecated, and has been removed from PDFKit. Please pipe the document into a Node stream.');
  };

  PDFDocument.prototype.end = function() {
    var font, key, name, val, _ref, _ref1;
    this.page.end();
    this._info = this.ref();
    _ref = this.info;
    for (key in _ref) {
      val = _ref[key];
      if (typeof val === 'string') {
        val = PDFObject.s(val, true);
      }
      this._info.data[key] = val;
    }
    this._info.end();
    _ref1 = this._fontFamilies;
    for (name in _ref1) {
      font = _ref1[name];
      font.embed();
    }
    this._root.end();
    this._root.data.Pages.end();
    if (this._waiting === 0) {
      return this._finalize();
    } else {
      return this._ended = true;
    }
  };

  PDFDocument.prototype._finalize = function(fn) {
    var offset, xRefOffset, _i, _len, _ref;
    xRefOffset = this._offset;
    this._write("xref");
    this._write("0 " + (this._offsets.length + 1));
    this._write("0000000000 65535 f ");
    _ref = this._offsets;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      offset = _ref[_i];
      offset = ('0000000000' + offset).slice(-10);
      this._write(offset + ' 00000 n ');
    }
    this._write('trailer');
    this._write(PDFObject.convert({
      Size: this._offsets.length,
      Root: this._root,
      Info: this._info
    }));
    this._write('startxref');
    this._write("" + xRefOffset);
    this._write('%%EOF');
    return this.push(null);
  };

  PDFDocument.prototype.toString = function() {
    return "[object PDFDocument]";
  };

  return PDFDocument;

})(stream.Readable);

module.exports = PDFDocument;


}).call(this,require("buffer").Buffer)
},{"./mixins/annotations":26,"./mixins/color":27,"./mixins/fonts":28,"./mixins/images":29,"./mixins/text":30,"./mixins/vector":31,"./object":32,"./page":33,"./reference":35,"buffer":53,"fs":36,"stream":72}],3:[function(require,module,exports){
(function (Buffer){

/*
PDFFont - embeds fonts in PDF documents
By Devon Govett
 */
var AFMFont, PDFFont, Subset, TTFFont, fs;

TTFFont = require('./font/ttf');

AFMFont = require('./font/afm');

Subset = require('./font/subset');

fs = require('fs');

PDFFont = (function() {
  var toUnicodeCmap;

  function PDFFont(document, src, family, id) {
    this.document = document;
    this.id = id;
   	this.font = new TTFFont(new Buffer(src, 'base64'), family); 
    this.subset = new Subset(this.font);
    this.registerTTF();
  }

  PDFFont.prototype.use = function(characters) {
    var _ref;
    return (_ref = this.subset) != null ? _ref.use(characters) : void 0;
  };

  PDFFont.prototype.embed = function() {
    if (this.embedded || (this.dictionary == null)) {
      return;
    }
    if (this.isAFM) {
      this.embedAFM();
    } else {
      this.embedTTF();
    }
    return this.embedded = true;
  };

  PDFFont.prototype.encode = function(text) {
    var _ref;
    if (this.isAFM) {
      return this.font.encodeText(text);
    } else {
      return ((_ref = this.subset) != null ? _ref.encodeText(text) : void 0) || text;
    }
  };

  PDFFont.prototype.ref = function() {
    return this.dictionary != null ? this.dictionary : this.dictionary = this.document.ref();
  };

  PDFFont.prototype.registerTTF = function() {
    var e, hi, low, raw, _ref;
    this.name = this.font.name.postscriptName;
    this.scaleFactor = 1000.0 / this.font.head.unitsPerEm;
    this.bbox = (function() {
      var _i, _len, _ref, _results;
      _ref = this.font.bbox;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        _results.push(Math.round(e * this.scaleFactor));
      }
      return _results;
    }).call(this);
    this.stemV = 0;
    if (this.font.post.exists) {
      raw = this.font.post.italic_angle;
      hi = raw >> 16;
      low = raw & 0xFF;
      if (hi & 0x8000 !== 0) {
        hi = -((hi ^ 0xFFFF) + 1);
      }
      this.italicAngle = +("" + hi + "." + low);
    } else {
      this.italicAngle = 0;
    }
    this.ascender = Math.round(this.font.ascender * this.scaleFactor);
    this.decender = Math.round(this.font.decender * this.scaleFactor);
    this.lineGap = Math.round(this.font.lineGap * this.scaleFactor);
    this.capHeight = (this.font.os2.exists && this.font.os2.capHeight) || this.ascender;
    this.xHeight = (this.font.os2.exists && this.font.os2.xHeight) || 0;
    this.familyClass = (this.font.os2.exists && this.font.os2.familyClass || 0) >> 8;
    this.isSerif = (_ref = this.familyClass) === 1 || _ref === 2 || _ref === 3 || _ref === 4 || _ref === 5 || _ref === 7;
    this.isScript = this.familyClass === 10;
    this.flags = 0;
    if (this.font.post.isFixedPitch) {
      this.flags |= 1 << 0;
    }
    if (this.isSerif) {
      this.flags |= 1 << 1;
    }
    if (this.isScript) {
      this.flags |= 1 << 3;
    }
    if (this.italicAngle !== 0) {
      this.flags |= 1 << 6;
    }
    this.flags |= 1 << 5;
    if (!this.font.cmap.unicode) {
      throw new Error('No unicode cmap for font');
    }
  };

  PDFFont.prototype.embedTTF = function() {
    var charWidths, cmap, code, data, descriptor, firstChar, fontfile, glyph;
    data = this.subset.encode();
    fontfile = this.document.ref();
    fontfile.write(data);
    fontfile.data.Length1 = fontfile.uncompressedLength;
    fontfile.end();
    descriptor = this.document.ref({
      Type: 'FontDescriptor',
      FontName: this.subset.postscriptName,
      FontFile2: fontfile,
      FontBBox: this.bbox,
      Flags: this.flags,
      StemV: this.stemV,
      ItalicAngle: this.italicAngle,
      Ascent: this.ascender,
      Descent: this.decender,
      CapHeight: this.capHeight,
      XHeight: this.xHeight
    });
    descriptor.end();
    firstChar = +Object.keys(this.subset.cmap)[0];
    charWidths = (function() {
      var _ref, _results;
      _ref = this.subset.cmap;
      _results = [];
      for (code in _ref) {
        glyph = _ref[code];
        _results.push(Math.round(this.font.widthOfGlyph(glyph)));
      }
      return _results;
    }).call(this);
    cmap = this.document.ref();
    cmap.end(toUnicodeCmap(this.subset.subset));
    this.dictionary.data = {
      Type: 'Font',
      BaseFont: this.subset.postscriptName,
      Subtype: 'TrueType',
      FontDescriptor: descriptor,
      FirstChar: firstChar,
      LastChar: firstChar + charWidths.length - 1,
      Widths: charWidths,
      Encoding: 'MacRomanEncoding',
      ToUnicode: cmap
    };
    return this.dictionary.end();
  };

  toUnicodeCmap = function(map) {
    var code, codes, range, unicode, unicodeMap, _i, _len;
    unicodeMap = '/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<00><ff>\nendcodespacerange';
    codes = Object.keys(map).sort(function(a, b) {
      return a - b;
    });
    range = [];
    for (_i = 0, _len = codes.length; _i < _len; _i++) {
      code = codes[_i];
      if (range.length >= 100) {
        unicodeMap += "\n" + range.length + " beginbfchar\n" + (range.join('\n')) + "\nendbfchar";
        range = [];
      }
      unicode = ('0000' + map[code].toString(16)).slice(-4);
      code = (+code).toString(16);
      range.push("<" + code + "><" + unicode + ">");
    }
    if (range.length) {
      unicodeMap += "\n" + range.length + " beginbfchar\n" + (range.join('\n')) + "\nendbfchar\n";
    }
    return unicodeMap += 'endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend';
  };

  PDFFont.prototype.registerAFM = function(name) {
    var _ref;
    this.name = name;
    return _ref = this.font, this.ascender = _ref.ascender, this.decender = _ref.decender, this.bbox = _ref.bbox, this.lineGap = _ref.lineGap, _ref;
  };

  PDFFont.prototype.embedAFM = function() {
    this.dictionary.data = {
      Type: 'Font',
      BaseFont: this.name,
      Subtype: 'Type1',
      Encoding: 'WinAnsiEncoding'
    };
    return this.dictionary.end();
  };

  PDFFont.prototype.widthOfString = function(string, size) {
    var charCode, i, scale, width, _i, _ref;
    string = '' + string;
    width = 0;
    for (i = _i = 0, _ref = string.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      charCode = string.charCodeAt(i);
      width += this.font.widthOfGlyph(this.font.characterToGlyph(charCode)) || 0;
    }
    scale = size / 1000;
    return width * scale;
  };

  PDFFont.prototype.lineHeight = function(size, includeGap) {
    var gap;
    if (includeGap == null) {
      includeGap = false;
    }
    gap = includeGap ? this.lineGap : 0;
    return (this.ascender + gap - this.decender) / 1000 * size;
  };

  return PDFFont;

})();

module.exports = PDFFont;


}).call(this,require("buffer").Buffer)
},{"./font/afm":4,"./font/subset":7,"./font/ttf":19,"buffer":53,"fs":36}],4:[function(require,module,exports){
var AFMFont, fs;

fs = require('fs');

AFMFont = (function() {
  var WIN_ANSI_MAP, characters;

  AFMFont.open = function(filename) {
    return new AFMFont(fs.readFileSync(filename, 'utf8'));
  };

  function AFMFont(contents) {
    var e, i;
    this.contents = contents;
    this.attributes = {};
    this.glyphWidths = {};
    this.boundingBoxes = {};
    this.parse();
    this.charWidths = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 0; _i <= 255; i = ++_i) {
        _results.push(this.glyphWidths[characters[i]]);
      }
      return _results;
    }).call(this);
    this.bbox = (function() {
      var _i, _len, _ref, _results;
      _ref = this.attributes['FontBBox'].split(/\s+/);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        _results.push(+e);
      }
      return _results;
    }).call(this);
    this.ascender = +this.attributes['Ascender'];
    this.decender = +this.attributes['Descender'];
    this.lineGap = (this.bbox[3] - this.bbox[1]) - (this.ascender - this.decender);
  }

  AFMFont.prototype.parse = function() {
    var a, key, line, match, name, section, value, _i, _len, _ref;
    section = '';
    _ref = this.contents.split('\n');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      line = _ref[_i];
      if (match = line.match(/^Start(\w+)/)) {
        section = match[1];
        continue;
      } else if (match = line.match(/^End(\w+)/)) {
        section = '';
        continue;
      }
      switch (section) {
        case 'FontMetrics':
          match = line.match(/(^\w+)\s+(.*)/);
          key = match[1];
          value = match[2];
          if (a = this.attributes[key]) {
            if (!Array.isArray(a)) {
              a = this.attributes[key] = [a];
            }
            a.push(value);
          } else {
            this.attributes[key] = value;
          }
          break;
        case 'CharMetrics':
          if (!/^CH?\s/.test(line)) {
            continue;
          }
          name = line.match(/\bN\s+(\.?\w+)\s*;/)[1];
          this.glyphWidths[name] = +line.match(/\bWX\s+(\d+)\s*;/)[1];
      }
    }
  };

  WIN_ANSI_MAP = {
    402: 131,
    8211: 150,
    8212: 151,
    8216: 145,
    8217: 146,
    8218: 130,
    8220: 147,
    8221: 148,
    8222: 132,
    8224: 134,
    8225: 135,
    8226: 149,
    8230: 133,
    8364: 128,
    8240: 137,
    8249: 139,
    8250: 155,
    710: 136,
    8482: 153,
    338: 140,
    339: 156,
    732: 152,
    352: 138,
    353: 154,
    376: 159,
    381: 142,
    382: 158
  };

  AFMFont.prototype.encodeText = function(text) {
    var char, i, string, _i, _ref;
    string = '';
    for (i = _i = 0, _ref = text.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      char = text.charCodeAt(i);
      char = WIN_ANSI_MAP[char] || char;
      string += String.fromCharCode(char);
    }
    return string;
  };

  AFMFont.prototype.characterToGlyph = function(character) {
    return characters[WIN_ANSI_MAP[character] || character];
  };

  AFMFont.prototype.widthOfGlyph = function(glyph) {
    return this.glyphWidths[glyph];
  };

  characters = '.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n\nspace         exclam         quotedbl       numbersign\ndollar        percent        ampersand      quotesingle\nparenleft     parenright     asterisk       plus\ncomma         hyphen         period         slash\nzero          one            two            three\nfour          five           six            seven\neight         nine           colon          semicolon\nless          equal          greater        question\n\nat            A              B              C\nD             E              F              G\nH             I              J              K\nL             M              N              O\nP             Q              R              S\nT             U              V              W\nX             Y              Z              bracketleft\nbackslash     bracketright   asciicircum    underscore\n\ngrave         a              b              c\nd             e              f              g\nh             i              j              k\nl             m              n              o\np             q              r              s\nt             u              v              w\nx             y              z              braceleft\nbar           braceright     asciitilde     .notdef\n\nEuro          .notdef        quotesinglbase florin\nquotedblbase  ellipsis       dagger         daggerdbl\ncircumflex    perthousand    Scaron         guilsinglleft\nOE            .notdef        Zcaron         .notdef\n.notdef       quoteleft      quoteright     quotedblleft\nquotedblright bullet         endash         emdash\ntilde         trademark      scaron         guilsinglright\noe            .notdef        zcaron         ydieresis\n\nspace         exclamdown     cent           sterling\ncurrency      yen            brokenbar      section\ndieresis      copyright      ordfeminine    guillemotleft\nlogicalnot    hyphen         registered     macron\ndegree        plusminus      twosuperior    threesuperior\nacute         mu             paragraph      periodcentered\ncedilla       onesuperior    ordmasculine   guillemotright\nonequarter    onehalf        threequarters  questiondown\n\nAgrave        Aacute         Acircumflex    Atilde\nAdieresis     Aring          AE             Ccedilla\nEgrave        Eacute         Ecircumflex    Edieresis\nIgrave        Iacute         Icircumflex    Idieresis\nEth           Ntilde         Ograve         Oacute\nOcircumflex   Otilde         Odieresis      multiply\nOslash        Ugrave         Uacute         Ucircumflex\nUdieresis     Yacute         Thorn          germandbls\n\nagrave        aacute         acircumflex    atilde\nadieresis     aring          ae             ccedilla\negrave        eacute         ecircumflex    edieresis\nigrave        iacute         icircumflex    idieresis\neth           ntilde         ograve         oacute\nocircumflex   otilde         odieresis      divide\noslash        ugrave         uacute         ucircumflex\nudieresis     yacute         thorn          ydieresis'.split(/\s+/);

  return AFMFont;

})();

module.exports = AFMFont;


},{"fs":36}],5:[function(require,module,exports){
var DFont, Data, Directory, NameTable, fs;

fs = require('fs');

Data = require('../data');

Directory = require('./directory');

NameTable = require('./tables/name');

DFont = (function() {
  DFont.open = function(filename) {
    var contents;
    contents = fs.readFileSync(filename);
    return new DFont(contents);
  };

  function DFont(contents) {
    this.contents = new Data(contents);
    this.parse(this.contents);
  }

  DFont.prototype.parse = function(data) {
    var attr, b2, b3, b4, dataLength, dataOffset, dataOfs, entry, font, handle, i, id, j, len, length, mapLength, mapOffset, maxIndex, maxTypeIndex, name, nameListOffset, nameOfs, p, pos, refListOffset, type, typeListOffset, _i, _j;
    dataOffset = data.readInt();
    mapOffset = data.readInt();
    dataLength = data.readInt();
    mapLength = data.readInt();
    this.map = {};
    data.pos = mapOffset + 24;
    typeListOffset = data.readShort() + mapOffset;
    nameListOffset = data.readShort() + mapOffset;
    data.pos = typeListOffset;
    maxIndex = data.readShort();
    for (i = _i = 0; _i <= maxIndex; i = _i += 1) {
      type = data.readString(4);
      maxTypeIndex = data.readShort();
      refListOffset = data.readShort();
      this.map[type] = {
        list: [],
        named: {}
      };
      pos = data.pos;
      data.pos = typeListOffset + refListOffset;
      for (j = _j = 0; _j <= maxTypeIndex; j = _j += 1) {
        id = data.readShort();
        nameOfs = data.readShort();
        attr = data.readByte();
        b2 = data.readByte() << 16;
        b3 = data.readByte() << 8;
        b4 = data.readByte();
        dataOfs = dataOffset + (0 | b2 | b3 | b4);
        handle = data.readUInt32();
        entry = {
          id: id,
          attributes: attr,
          offset: dataOfs,
          handle: handle
        };
        p = data.pos;
        if (nameOfs !== -1 && (nameListOffset + nameOfs < mapOffset + mapLength)) {
          data.pos = nameListOffset + nameOfs;
          len = data.readByte();
          entry.name = data.readString(len);
        } else if (type === 'sfnt') {
          data.pos = entry.offset;
          length = data.readUInt32();
          font = {};
          font.contents = new Data(data.slice(data.pos, data.pos + length));
          font.directory = new Directory(font.contents);
          name = new NameTable(font);
          entry.name = name.fontName[0].raw;
        }
        data.pos = p;
        this.map[type].list.push(entry);
        if (entry.name) {
          this.map[type].named[entry.name] = entry;
        }
      }
      data.pos = pos;
    }
  };

  DFont.prototype.getNamedFont = function(name) {
    var data, entry, length, pos, ret, _ref;
    data = this.contents;
    pos = data.pos;
    entry = (_ref = this.map.sfnt) != null ? _ref.named[name] : void 0;
    if (!entry) {
      throw new Error("Font " + name + " not found in DFont file.");
    }
    data.pos = entry.offset;
    length = data.readUInt32();
    ret = data.slice(data.pos, data.pos + length);
    data.pos = pos;
    return ret;
  };

  return DFont;

})();

module.exports = DFont;


},{"../data":1,"./directory":6,"./tables/name":16,"fs":36}],6:[function(require,module,exports){
(function (Buffer){
var Data, Directory,
  __slice = [].slice;

Data = require('../data');

Directory = (function() {
  var checksum;

  function Directory(data) {
    var entry, i, _i, _ref;
    this.scalarType = data.readInt();
    this.tableCount = data.readShort();
    this.searchRange = data.readShort();
    this.entrySelector = data.readShort();
    this.rangeShift = data.readShort();
    this.tables = {};
    for (i = _i = 0, _ref = this.tableCount; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      entry = {
        tag: data.readString(4),
        checksum: data.readInt(),
        offset: data.readInt(),
        length: data.readInt()
      };
      this.tables[entry.tag] = entry;
    }
  }

  Directory.prototype.encode = function(tables) {
    var adjustment, directory, directoryLength, entrySelector, headOffset, log2, offset, rangeShift, searchRange, sum, table, tableCount, tableData, tag;
    tableCount = Object.keys(tables).length;
    log2 = Math.log(2);
    searchRange = Math.floor(Math.log(tableCount) / log2) * 16;
    entrySelector = Math.floor(searchRange / log2);
    rangeShift = tableCount * 16 - searchRange;
    directory = new Data;
    directory.writeInt(this.scalarType);
    directory.writeShort(tableCount);
    directory.writeShort(searchRange);
    directory.writeShort(entrySelector);
    directory.writeShort(rangeShift);
    directoryLength = tableCount * 16;
    offset = directory.pos + directoryLength;
    headOffset = null;
    tableData = [];
    for (tag in tables) {
      table = tables[tag];
      directory.writeString(tag);
      directory.writeInt(checksum(table));
      directory.writeInt(offset);
      directory.writeInt(table.length);
      tableData = tableData.concat(table);
      if (tag === 'head') {
        headOffset = offset;
      }
      offset += table.length;
      while (offset % 4) {
        tableData.push(0);
        offset++;
      }
    }
    directory.write(tableData);
    sum = checksum(directory.data);
    adjustment = 0xB1B0AFBA - sum;
    directory.pos = headOffset + 8;
    directory.writeUInt32(adjustment);
    return new Buffer(directory.data);
  };

  checksum = function(data) {
    var i, sum, tmp, _i, _ref;
    data = __slice.call(data);
    while (data.length % 4) {
      data.push(0);
    }
    tmp = new Data(data);
    sum = 0;
    for (i = _i = 0, _ref = data.length; _i < _ref; i = _i += 4) {
      sum += tmp.readUInt32();
    }
    return sum & 0xFFFFFFFF;
  };

  return Directory;

})();

module.exports = Directory;


}).call(this,require("buffer").Buffer)
},{"../data":1,"buffer":53}],7:[function(require,module,exports){
var CmapTable, Subset, utils,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

CmapTable = require('./tables/cmap');

utils = require('./utils');

Subset = (function() {
  function Subset(font) {
    this.font = font;
    this.subset = {};
    this.unicodes = {};
    this.next = 33;
  }

  Subset.prototype.use = function(character) {
    var i, _i, _ref;
    if (typeof character === 'string') {
      for (i = _i = 0, _ref = character.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        this.use(character.charCodeAt(i));
      }
      return;
    }
    if (!this.unicodes[character]) {
      this.subset[this.next] = character;
      return this.unicodes[character] = this.next++;
    }
  };

  Subset.prototype.encodeText = function(text) {
    var char, i, string, _i, _ref;
    string = '';
    for (i = _i = 0, _ref = text.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      char = this.unicodes[text.charCodeAt(i)];
      string += String.fromCharCode(char);
    }
    return string;
  };

  Subset.prototype.generateCmap = function() {
    var mapping, roman, unicode, unicodeCmap, _ref;
    unicodeCmap = this.font.cmap.tables[0].codeMap;
    mapping = {};
    _ref = this.subset;
    for (roman in _ref) {
      unicode = _ref[roman];
      mapping[roman] = unicodeCmap[unicode];
    }
    return mapping;
  };

  Subset.prototype.glyphIDs = function() {
    var ret, roman, unicode, unicodeCmap, val, _ref;
    unicodeCmap = this.font.cmap.tables[0].codeMap;
    ret = [0];
    _ref = this.subset;
    for (roman in _ref) {
      unicode = _ref[roman];
      val = unicodeCmap[unicode];
      if ((val != null) && __indexOf.call(ret, val) < 0) {
        ret.push(val);
      }
    }
    return ret.sort();
  };

  Subset.prototype.glyphsFor = function(glyphIDs) {
    var additionalIDs, glyph, glyphs, id, _i, _len, _ref;
    glyphs = {};
    for (_i = 0, _len = glyphIDs.length; _i < _len; _i++) {
      id = glyphIDs[_i];
      glyphs[id] = this.font.glyf.glyphFor(id);
    }
    additionalIDs = [];
    for (id in glyphs) {
      glyph = glyphs[id];
      if (glyph != null ? glyph.compound : void 0) {
        additionalIDs.push.apply(additionalIDs, glyph.glyphIDs);
      }
    }
    if (additionalIDs.length > 0) {
      _ref = this.glyphsFor(additionalIDs);
      for (id in _ref) {
        glyph = _ref[id];
        glyphs[id] = glyph;
      }
    }
    return glyphs;
  };

  Subset.prototype.encode = function() {
    var cmap, code, glyf, glyphs, id, ids, loca, name, new2old, newIDs, nextGlyphID, old2new, oldID, oldIDs, tables, _ref, _ref1;
    cmap = CmapTable.encode(this.generateCmap(), 'unicode');
    glyphs = this.glyphsFor(this.glyphIDs());
    old2new = {
      0: 0
    };
    _ref = cmap.charMap;
    for (code in _ref) {
      ids = _ref[code];
      old2new[ids.old] = ids["new"];
    }
    nextGlyphID = cmap.maxGlyphID;
    for (oldID in glyphs) {
      if (!(oldID in old2new)) {
        old2new[oldID] = nextGlyphID++;
      }
    }
    new2old = utils.invert(old2new);
    newIDs = Object.keys(new2old).sort(function(a, b) {
      return a - b;
    });
    oldIDs = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = newIDs.length; _i < _len; _i++) {
        id = newIDs[_i];
        _results.push(new2old[id]);
      }
      return _results;
    })();
    glyf = this.font.glyf.encode(glyphs, oldIDs, old2new);
    loca = this.font.loca.encode(glyf.offsets);
    name = this.font.name.encode();
    this.postscriptName = name.postscriptName;
    this.cmap = {};
    _ref1 = cmap.charMap;
    for (code in _ref1) {
      ids = _ref1[code];
      this.cmap[code] = ids.old;
    }
    tables = {
      cmap: cmap.table,
      glyf: glyf.table,
      loca: loca.table,
      hmtx: this.font.hmtx.encode(oldIDs),
      hhea: this.font.hhea.encode(oldIDs),
      maxp: this.font.maxp.encode(oldIDs),
      post: this.font.post.encode(oldIDs),
      name: name.table,
      head: this.font.head.encode(loca)
    };
    if (this.font.os2.exists) {
      tables['OS/2'] = this.font.os2.raw();
    }
    return this.font.directory.encode(tables);
  };

  return Subset;

})();

module.exports = Subset;


},{"./tables/cmap":9,"./utils":20}],8:[function(require,module,exports){
var Table;

Table = (function() {
  function Table(file, tag) {
    var info;
    this.file = file;
    this.tag = tag;
    if (this.tag == null) {
      this.tag = this.constructor.name.replace('Table', '').toLowerCase();
    }
    info = this.file.directory.tables[this.tag];
    this.exists = !!info;
    if (info) {
      this.offset = info.offset, this.length = info.length;
      this.parse(this.file.contents);
    }
  }

  Table.prototype.parse = function() {};

  Table.prototype.encode = function() {};

  Table.prototype.raw = function() {
    if (!this.exists) {
      return null;
    }
    this.file.contents.pos = this.offset;
    return this.file.contents.read(this.length);
  };

  return Table;

})();

module.exports = Table;


},{}],9:[function(require,module,exports){
var CmapEntry, CmapTable, Data, Table,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Table = require('../table');

Data = require('../../data');

CmapTable = (function(_super) {
  __extends(CmapTable, _super);

  function CmapTable() {
    return CmapTable.__super__.constructor.apply(this, arguments);
  }

  CmapTable.prototype.parse = function(data) {
    var entry, i, tableCount, _i;
    data.pos = this.offset;
    this.version = data.readUInt16();
    tableCount = data.readUInt16();
    this.tables = [];
    this.unicode = null;
    for (i = _i = 0; 0 <= tableCount ? _i < tableCount : _i > tableCount; i = 0 <= tableCount ? ++_i : --_i) {
      entry = new CmapEntry(data, this.offset);
      this.tables.push(entry);
      if (entry.isUnicode) {
        if (this.unicode == null) {
          this.unicode = entry;
        }
      }
    }
    return true;
  };

  CmapTable.encode = function(charmap, encoding) {
    var result, table;
    if (encoding == null) {
      encoding = 'macroman';
    }
    result = CmapEntry.encode(charmap, encoding);
    table = new Data;
    table.writeUInt16(0);
    table.writeUInt16(1);
    result.table = table.data.concat(result.subtable);
    return result;
  };

  return CmapTable;

})(Table);

CmapEntry = (function() {
  function CmapEntry(data, offset) {
    var code, count, endCode, glyphId, glyphIds, i, idDelta, idRangeOffset, index, saveOffset, segCount, segCountX2, start, startCode, tail, _i, _j, _k, _len;
    this.platformID = data.readUInt16();
    this.encodingID = data.readShort();
    this.offset = offset + data.readInt();
    saveOffset = data.pos;
    data.pos = this.offset;
    this.format = data.readUInt16();
    this.length = data.readUInt16();
    this.language = data.readUInt16();
    this.isUnicode = (this.platformID === 3 && this.encodingID === 1 && this.format === 4) || this.platformID === 0 && this.format === 4;
    this.codeMap = {};
    switch (this.format) {
      case 0:
        for (i = _i = 0; _i < 256; i = ++_i) {
          this.codeMap[i] = data.readByte();
        }
        break;
      case 4:
        segCountX2 = data.readUInt16();
        segCount = segCountX2 / 2;
        data.pos += 6;
        endCode = (function() {
          var _j, _results;
          _results = [];
          for (i = _j = 0; 0 <= segCount ? _j < segCount : _j > segCount; i = 0 <= segCount ? ++_j : --_j) {
            _results.push(data.readUInt16());
          }
          return _results;
        })();
        data.pos += 2;
        startCode = (function() {
          var _j, _results;
          _results = [];
          for (i = _j = 0; 0 <= segCount ? _j < segCount : _j > segCount; i = 0 <= segCount ? ++_j : --_j) {
            _results.push(data.readUInt16());
          }
          return _results;
        })();
        idDelta = (function() {
          var _j, _results;
          _results = [];
          for (i = _j = 0; 0 <= segCount ? _j < segCount : _j > segCount; i = 0 <= segCount ? ++_j : --_j) {
            _results.push(data.readUInt16());
          }
          return _results;
        })();
        idRangeOffset = (function() {
          var _j, _results;
          _results = [];
          for (i = _j = 0; 0 <= segCount ? _j < segCount : _j > segCount; i = 0 <= segCount ? ++_j : --_j) {
            _results.push(data.readUInt16());
          }
          return _results;
        })();
        count = (this.length - data.pos + this.offset) / 2;
        glyphIds = (function() {
          var _j, _results;
          _results = [];
          for (i = _j = 0; 0 <= count ? _j < count : _j > count; i = 0 <= count ? ++_j : --_j) {
            _results.push(data.readUInt16());
          }
          return _results;
        })();
        for (i = _j = 0, _len = endCode.length; _j < _len; i = ++_j) {
          tail = endCode[i];
          start = startCode[i];
          for (code = _k = start; start <= tail ? _k <= tail : _k >= tail; code = start <= tail ? ++_k : --_k) {
            if (idRangeOffset[i] === 0) {
              glyphId = code + idDelta[i];
            } else {
              index = idRangeOffset[i] / 2 + (code - start) - (segCount - i);
              glyphId = glyphIds[index] || 0;
              if (glyphId !== 0) {
                glyphId += idDelta[i];
              }
            }
            this.codeMap[code] = glyphId & 0xFFFF;
          }
        }
    }
    data.pos = saveOffset;
  }

  CmapEntry.encode = function(charmap, encoding) {
    var charMap, code, codeMap, codes, delta, deltas, diff, endCode, endCodes, entrySelector, glyphIDs, i, id, indexes, last, map, nextID, offset, old, rangeOffsets, rangeShift, result, searchRange, segCount, segCountX2, startCode, startCodes, startGlyph, subtable, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _len6, _len7, _m, _n, _name, _o, _p, _q;
    subtable = new Data;
    codes = Object.keys(charmap).sort(function(a, b) {
      return a - b;
    });
    switch (encoding) {
      case 'macroman':
        id = 0;
        indexes = (function() {
          var _i, _results;
          _results = [];
          for (i = _i = 0; _i < 256; i = ++_i) {
            _results.push(0);
          }
          return _results;
        })();
        map = {
          0: 0
        };
        codeMap = {};
        for (_i = 0, _len = codes.length; _i < _len; _i++) {
          code = codes[_i];
          if (map[_name = charmap[code]] == null) {
            map[_name] = ++id;
          }
          codeMap[code] = {
            old: charmap[code],
            "new": map[charmap[code]]
          };
          indexes[code] = map[charmap[code]];
        }
        subtable.writeUInt16(1);
        subtable.writeUInt16(0);
        subtable.writeUInt32(12);
        subtable.writeUInt16(0);
        subtable.writeUInt16(262);
        subtable.writeUInt16(0);
        subtable.write(indexes);
        return result = {
          charMap: codeMap,
          subtable: subtable.data,
          maxGlyphID: id + 1
        };
      case 'unicode':
        startCodes = [];
        endCodes = [];
        nextID = 0;
        map = {};
        charMap = {};
        last = diff = null;
        for (_j = 0, _len1 = codes.length; _j < _len1; _j++) {
          code = codes[_j];
          old = charmap[code];
          if (map[old] == null) {
            map[old] = ++nextID;
          }
          charMap[code] = {
            old: old,
            "new": map[old]
          };
          delta = map[old] - code;
          if ((last == null) || delta !== diff) {
            if (last) {
              endCodes.push(last);
            }
            startCodes.push(code);
            diff = delta;
          }
          last = code;
        }
        if (last) {
          endCodes.push(last);
        }
        endCodes.push(0xFFFF);
        startCodes.push(0xFFFF);
        segCount = startCodes.length;
        segCountX2 = segCount * 2;
        searchRange = 2 * Math.pow(Math.log(segCount) / Math.LN2, 2);
        entrySelector = Math.log(searchRange / 2) / Math.LN2;
        rangeShift = 2 * segCount - searchRange;
        deltas = [];
        rangeOffsets = [];
        glyphIDs = [];
        for (i = _k = 0, _len2 = startCodes.length; _k < _len2; i = ++_k) {
          startCode = startCodes[i];
          endCode = endCodes[i];
          if (startCode === 0xFFFF) {
            deltas.push(0);
            rangeOffsets.push(0);
            break;
          }
          startGlyph = charMap[startCode]["new"];
          if (startCode - startGlyph >= 0x8000) {
            deltas.push(0);
            rangeOffsets.push(2 * (glyphIDs.length + segCount - i));
            for (code = _l = startCode; startCode <= endCode ? _l <= endCode : _l >= endCode; code = startCode <= endCode ? ++_l : --_l) {
              glyphIDs.push(charMap[code]["new"]);
            }
          } else {
            deltas.push(startGlyph - startCode);
            rangeOffsets.push(0);
          }
        }
        subtable.writeUInt16(3);
        subtable.writeUInt16(1);
        subtable.writeUInt32(12);
        subtable.writeUInt16(4);
        subtable.writeUInt16(16 + segCount * 8 + glyphIDs.length * 2);
        subtable.writeUInt16(0);
        subtable.writeUInt16(segCountX2);
        subtable.writeUInt16(searchRange);
        subtable.writeUInt16(entrySelector);
        subtable.writeUInt16(rangeShift);
        for (_m = 0, _len3 = endCodes.length; _m < _len3; _m++) {
          code = endCodes[_m];
          subtable.writeUInt16(code);
        }
        subtable.writeUInt16(0);
        for (_n = 0, _len4 = startCodes.length; _n < _len4; _n++) {
          code = startCodes[_n];
          subtable.writeUInt16(code);
        }
        for (_o = 0, _len5 = deltas.length; _o < _len5; _o++) {
          delta = deltas[_o];
          subtable.writeUInt16(delta);
        }
        for (_p = 0, _len6 = rangeOffsets.length; _p < _len6; _p++) {
          offset = rangeOffsets[_p];
          subtable.writeUInt16(offset);
        }
        for (_q = 0, _len7 = glyphIDs.length; _q < _len7; _q++) {
          id = glyphIDs[_q];
          subtable.writeUInt16(id);
        }
        return result = {
          charMap: charMap,
          subtable: subtable.data,
          maxGlyphID: nextID + 1
        };
    }
  };

  return CmapEntry;

})();

module.exports = CmapTable;


},{"../../data":1,"../table":8}],10:[function(require,module,exports){
var CompoundGlyph, Data, GlyfTable, SimpleGlyph, Table,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

Table = require('../table');

Data = require('../../data');

GlyfTable = (function(_super) {
  __extends(GlyfTable, _super);

  function GlyfTable() {
    return GlyfTable.__super__.constructor.apply(this, arguments);
  }

  GlyfTable.prototype.parse = function(data) {
    return this.cache = {};
  };

  GlyfTable.prototype.glyphFor = function(id) {
    var data, index, length, loca, numberOfContours, raw, xMax, xMin, yMax, yMin;
    if (id in this.cache) {
      return this.cache[id];
    }
    loca = this.file.loca;
    data = this.file.contents;
    index = loca.indexOf(id);
    length = loca.lengthOf(id);
    if (length === 0) {
      return this.cache[id] = null;
    }
    data.pos = this.offset + index;
    raw = new Data(data.read(length));
    numberOfContours = raw.readShort();
    xMin = raw.readShort();
    yMin = raw.readShort();
    xMax = raw.readShort();
    yMax = raw.readShort();
    if (numberOfContours === -1) {
      this.cache[id] = new CompoundGlyph(raw, xMin, yMin, xMax, yMax);
    } else {
      this.cache[id] = new SimpleGlyph(raw, numberOfContours, xMin, yMin, xMax, yMax);
    }
    return this.cache[id];
  };

  GlyfTable.prototype.encode = function(glyphs, mapping, old2new) {
    var glyph, id, offsets, table, _i, _len;
    table = [];
    offsets = [];
    for (_i = 0, _len = mapping.length; _i < _len; _i++) {
      id = mapping[_i];
      glyph = glyphs[id];
      offsets.push(table.length);
      if (glyph) {
        table = table.concat(glyph.encode(old2new));
      }
    }
    offsets.push(table.length);
    return {
      table: table,
      offsets: offsets
    };
  };

  return GlyfTable;

})(Table);

SimpleGlyph = (function() {
  function SimpleGlyph(raw, numberOfContours, xMin, yMin, xMax, yMax) {
    this.raw = raw;
    this.numberOfContours = numberOfContours;
    this.xMin = xMin;
    this.yMin = yMin;
    this.xMax = xMax;
    this.yMax = yMax;
    this.compound = false;
  }

  SimpleGlyph.prototype.encode = function() {
    return this.raw.data;
  };

  return SimpleGlyph;

})();

CompoundGlyph = (function() {
  var ARG_1_AND_2_ARE_WORDS, MORE_COMPONENTS, WE_HAVE_AN_X_AND_Y_SCALE, WE_HAVE_A_SCALE, WE_HAVE_A_TWO_BY_TWO, WE_HAVE_INSTRUCTIONS;

  ARG_1_AND_2_ARE_WORDS = 0x0001;

  WE_HAVE_A_SCALE = 0x0008;

  MORE_COMPONENTS = 0x0020;

  WE_HAVE_AN_X_AND_Y_SCALE = 0x0040;

  WE_HAVE_A_TWO_BY_TWO = 0x0080;

  WE_HAVE_INSTRUCTIONS = 0x0100;

  function CompoundGlyph(raw, xMin, yMin, xMax, yMax) {
    var data, flags;
    this.raw = raw;
    this.xMin = xMin;
    this.yMin = yMin;
    this.xMax = xMax;
    this.yMax = yMax;
    this.compound = true;
    this.glyphIDs = [];
    this.glyphOffsets = [];
    data = this.raw;
    while (true) {
      flags = data.readShort();
      this.glyphOffsets.push(data.pos);
      this.glyphIDs.push(data.readShort());
      if (!(flags & MORE_COMPONENTS)) {
        break;
      }
      if (flags & ARG_1_AND_2_ARE_WORDS) {
        data.pos += 4;
      } else {
        data.pos += 2;
      }
      if (flags & WE_HAVE_A_TWO_BY_TWO) {
        data.pos += 8;
      } else if (flags & WE_HAVE_AN_X_AND_Y_SCALE) {
        data.pos += 4;
      } else if (flags & WE_HAVE_A_SCALE) {
        data.pos += 2;
      }
    }
  }

  CompoundGlyph.prototype.encode = function(mapping) {
    var i, id, result, _i, _len, _ref;
    result = new Data(__slice.call(this.raw.data));
    _ref = this.glyphIDs;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      id = _ref[i];
      result.pos = this.glyphOffsets[i];
      result.writeShort(mapping[id]);
    }
    return result.data;
  };

  return CompoundGlyph;

})();

module.exports = GlyfTable;


},{"../../data":1,"../table":8}],11:[function(require,module,exports){
var Data, HeadTable, Table,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Table = require('../table');

Data = require('../../data');

HeadTable = (function(_super) {
  __extends(HeadTable, _super);

  function HeadTable() {
    return HeadTable.__super__.constructor.apply(this, arguments);
  }

  HeadTable.prototype.parse = function(data) {
    data.pos = this.offset;
    this.version = data.readInt();
    this.revision = data.readInt();
    this.checkSumAdjustment = data.readInt();
    this.magicNumber = data.readInt();
    this.flags = data.readShort();
    this.unitsPerEm = data.readShort();
    this.created = data.readLongLong();
    this.modified = data.readLongLong();
    this.xMin = data.readShort();
    this.yMin = data.readShort();
    this.xMax = data.readShort();
    this.yMax = data.readShort();
    this.macStyle = data.readShort();
    this.lowestRecPPEM = data.readShort();
    this.fontDirectionHint = data.readShort();
    this.indexToLocFormat = data.readShort();
    return this.glyphDataFormat = data.readShort();
  };

  HeadTable.prototype.encode = function(loca) {
    var table;
    table = new Data;
    table.writeInt(this.version);
    table.writeInt(this.revision);
    table.writeInt(this.checkSumAdjustment);
    table.writeInt(this.magicNumber);
    table.writeShort(this.flags);
    table.writeShort(this.unitsPerEm);
    table.writeLongLong(this.created);
    table.writeLongLong(this.modified);
    table.writeShort(this.xMin);
    table.writeShort(this.yMin);
    table.writeShort(this.xMax);
    table.writeShort(this.yMax);
    table.writeShort(this.macStyle);
    table.writeShort(this.lowestRecPPEM);
    table.writeShort(this.fontDirectionHint);
    table.writeShort(loca.type);
    table.writeShort(this.glyphDataFormat);
    return table.data;
  };

  return HeadTable;

})(Table);

module.exports = HeadTable;


},{"../../data":1,"../table":8}],12:[function(require,module,exports){
var Data, HheaTable, Table,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Table = require('../table');

Data = require('../../data');

HheaTable = (function(_super) {
  __extends(HheaTable, _super);

  function HheaTable() {
    return HheaTable.__super__.constructor.apply(this, arguments);
  }

  HheaTable.prototype.parse = function(data) {
    data.pos = this.offset;
    this.version = data.readInt();
    this.ascender = data.readShort();
    this.decender = data.readShort();
    this.lineGap = data.readShort();
    this.advanceWidthMax = data.readShort();
    this.minLeftSideBearing = data.readShort();
    this.minRightSideBearing = data.readShort();
    this.xMaxExtent = data.readShort();
    this.caretSlopeRise = data.readShort();
    this.caretSlopeRun = data.readShort();
    this.caretOffset = data.readShort();
    data.pos += 4 * 2;
    this.metricDataFormat = data.readShort();
    return this.numberOfMetrics = data.readUInt16();
  };

  HheaTable.prototype.encode = function(ids) {
    var i, table, _i, _ref;
    table = new Data;
    table.writeInt(this.version);
    table.writeShort(this.ascender);
    table.writeShort(this.decender);
    table.writeShort(this.lineGap);
    table.writeShort(this.advanceWidthMax);
    table.writeShort(this.minLeftSideBearing);
    table.writeShort(this.minRightSideBearing);
    table.writeShort(this.xMaxExtent);
    table.writeShort(this.caretSlopeRise);
    table.writeShort(this.caretSlopeRun);
    table.writeShort(this.caretOffset);
    for (i = _i = 0, _ref = 4 * 2; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      table.writeByte(0);
    }
    table.writeShort(this.metricDataFormat);
    table.writeUInt16(ids.length);
    return table.data;
  };

  return HheaTable;

})(Table);

module.exports = HheaTable;


},{"../../data":1,"../table":8}],13:[function(require,module,exports){
var Data, HmtxTable, Table,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Table = require('../table');

Data = require('../../data');

HmtxTable = (function(_super) {
  __extends(HmtxTable, _super);

  function HmtxTable() {
    return HmtxTable.__super__.constructor.apply(this, arguments);
  }

  HmtxTable.prototype.parse = function(data) {
    var i, last, lsbCount, m, _i, _j, _ref, _results;
    data.pos = this.offset;
    this.metrics = [];
    for (i = _i = 0, _ref = this.file.hhea.numberOfMetrics; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      this.metrics.push({
        advance: data.readUInt16(),
        lsb: data.readInt16()
      });
    }
    lsbCount = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics;
    this.leftSideBearings = (function() {
      var _j, _results;
      _results = [];
      for (i = _j = 0; 0 <= lsbCount ? _j < lsbCount : _j > lsbCount; i = 0 <= lsbCount ? ++_j : --_j) {
        _results.push(data.readInt16());
      }
      return _results;
    })();
    this.widths = (function() {
      var _j, _len, _ref1, _results;
      _ref1 = this.metrics;
      _results = [];
      for (_j = 0, _len = _ref1.length; _j < _len; _j++) {
        m = _ref1[_j];
        _results.push(m.advance);
      }
      return _results;
    }).call(this);
    last = this.widths[this.widths.length - 1];
    _results = [];
    for (i = _j = 0; 0 <= lsbCount ? _j < lsbCount : _j > lsbCount; i = 0 <= lsbCount ? ++_j : --_j) {
      _results.push(this.widths.push(last));
    }
    return _results;
  };

  HmtxTable.prototype.forGlyph = function(id) {
    var metrics;
    if (id in this.metrics) {
      return this.metrics[id];
    }
    return metrics = {
      advance: this.metrics[this.metrics.length - 1].advance,
      lsb: this.leftSideBearings[id - this.metrics.length]
    };
  };

  HmtxTable.prototype.encode = function(mapping) {
    var id, metric, table, _i, _len;
    table = new Data;
    for (_i = 0, _len = mapping.length; _i < _len; _i++) {
      id = mapping[_i];
      metric = this.forGlyph(id);
      table.writeUInt16(metric.advance);
      table.writeUInt16(metric.lsb);
    }
    return table.data;
  };

  return HmtxTable;

})(Table);

module.exports = HmtxTable;


},{"../../data":1,"../table":8}],14:[function(require,module,exports){
var Data, LocaTable, Table,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Table = require('../table');

Data = require('../../data');

LocaTable = (function(_super) {
  __extends(LocaTable, _super);

  function LocaTable() {
    return LocaTable.__super__.constructor.apply(this, arguments);
  }

  LocaTable.prototype.parse = function(data) {
    var format, i;
    data.pos = this.offset;
    format = this.file.head.indexToLocFormat;
    if (format === 0) {
      return this.offsets = (function() {
        var _i, _ref, _results;
        _results = [];
        for (i = _i = 0, _ref = this.length; _i < _ref; i = _i += 2) {
          _results.push(data.readUInt16() * 2);
        }
        return _results;
      }).call(this);
    } else {
      return this.offsets = (function() {
        var _i, _ref, _results;
        _results = [];
        for (i = _i = 0, _ref = this.length; _i < _ref; i = _i += 4) {
          _results.push(data.readUInt32());
        }
        return _results;
      }).call(this);
    }
  };

  LocaTable.prototype.indexOf = function(id) {
    return this.offsets[id];
  };

  LocaTable.prototype.lengthOf = function(id) {
    return this.offsets[id + 1] - this.offsets[id];
  };

  LocaTable.prototype.encode = function(offsets) {
    var o, offset, ret, table, _i, _j, _k, _len, _len1, _len2, _ref;
    table = new Data;
    for (_i = 0, _len = offsets.length; _i < _len; _i++) {
      offset = offsets[_i];
      if (!(offset > 0xFFFF)) {
        continue;
      }
      _ref = this.offsets;
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        o = _ref[_j];
        table.writeUInt32(o);
      }
      return ret = {
        format: 1,
        table: table.data
      };
    }
    for (_k = 0, _len2 = offsets.length; _k < _len2; _k++) {
      o = offsets[_k];
      table.writeUInt16(o / 2);
    }
    return ret = {
      format: 0,
      table: table.data
    };
  };

  return LocaTable;

})(Table);

module.exports = LocaTable;


},{"../../data":1,"../table":8}],15:[function(require,module,exports){
var Data, MaxpTable, Table,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Table = require('../table');

Data = require('../../data');

MaxpTable = (function(_super) {
  __extends(MaxpTable, _super);

  function MaxpTable() {
    return MaxpTable.__super__.constructor.apply(this, arguments);
  }

  MaxpTable.prototype.parse = function(data) {
    data.pos = this.offset;
    this.version = data.readInt();
    this.numGlyphs = data.readUInt16();
    this.maxPoints = data.readUInt16();
    this.maxContours = data.readUInt16();
    this.maxCompositePoints = data.readUInt16();
    this.maxComponentContours = data.readUInt16();
    this.maxZones = data.readUInt16();
    this.maxTwilightPoints = data.readUInt16();
    this.maxStorage = data.readUInt16();
    this.maxFunctionDefs = data.readUInt16();
    this.maxInstructionDefs = data.readUInt16();
    this.maxStackElements = data.readUInt16();
    this.maxSizeOfInstructions = data.readUInt16();
    this.maxComponentElements = data.readUInt16();
    return this.maxComponentDepth = data.readUInt16();
  };

  MaxpTable.prototype.encode = function(ids) {
    var table;
    table = new Data;
    table.writeInt(this.version);
    table.writeUInt16(ids.length);
    table.writeUInt16(this.maxPoints);
    table.writeUInt16(this.maxContours);
    table.writeUInt16(this.maxCompositePoints);
    table.writeUInt16(this.maxComponentContours);
    table.writeUInt16(this.maxZones);
    table.writeUInt16(this.maxTwilightPoints);
    table.writeUInt16(this.maxStorage);
    table.writeUInt16(this.maxFunctionDefs);
    table.writeUInt16(this.maxInstructionDefs);
    table.writeUInt16(this.maxStackElements);
    table.writeUInt16(this.maxSizeOfInstructions);
    table.writeUInt16(this.maxComponentElements);
    table.writeUInt16(this.maxComponentDepth);
    return table.data;
  };

  return MaxpTable;

})(Table);

module.exports = MaxpTable;


},{"../../data":1,"../table":8}],16:[function(require,module,exports){
var Data, NameEntry, NameTable, Table, utils,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Table = require('../table');

Data = require('../../data');

utils = require('../utils');

NameTable = (function(_super) {
  var subsetTag;

  __extends(NameTable, _super);

  function NameTable() {
    return NameTable.__super__.constructor.apply(this, arguments);
  }

  NameTable.prototype.parse = function(data) {
    var count, entries, entry, format, i, name, stringOffset, strings, text, _i, _j, _len, _name;
    data.pos = this.offset;
    format = data.readShort();
    count = data.readShort();
    stringOffset = data.readShort();
    entries = [];
    for (i = _i = 0; 0 <= count ? _i < count : _i > count; i = 0 <= count ? ++_i : --_i) {
      entries.push({
        platformID: data.readShort(),
        encodingID: data.readShort(),
        languageID: data.readShort(),
        nameID: data.readShort(),
        length: data.readShort(),
        offset: this.offset + stringOffset + data.readShort()
      });
    }
    strings = {};
    for (i = _j = 0, _len = entries.length; _j < _len; i = ++_j) {
      entry = entries[i];
      data.pos = entry.offset;
      text = data.readString(entry.length);
      name = new NameEntry(text, entry);
      if (strings[_name = entry.nameID] == null) {
        strings[_name] = [];
      }
      strings[entry.nameID].push(name);
    }
    this.strings = strings;
    this.copyright = strings[0];
    this.fontFamily = strings[1];
    this.fontSubfamily = strings[2];
    this.uniqueSubfamily = strings[3];
    this.fontName = strings[4];
    this.version = strings[5];
    this.postscriptName = strings[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    this.trademark = strings[7];
    this.manufacturer = strings[8];
    this.designer = strings[9];
    this.description = strings[10];
    this.vendorUrl = strings[11];
    this.designerUrl = strings[12];
    this.license = strings[13];
    this.licenseUrl = strings[14];
    this.preferredFamily = strings[15];
    this.preferredSubfamily = strings[17];
    this.compatibleFull = strings[18];
    return this.sampleText = strings[19];
  };

  subsetTag = "AAAAAA";

  NameTable.prototype.encode = function() {
    var id, list, nameID, nameTable, postscriptName, strCount, strTable, string, strings, table, val, _i, _len, _ref;
    strings = {};
    _ref = this.strings;
    for (id in _ref) {
      val = _ref[id];
      strings[id] = val;
    }
    postscriptName = new NameEntry("" + subsetTag + "+" + this.postscriptName, {
      platformID: 1,
      encodingID: 0,
      languageID: 0
    });
    strings[6] = [postscriptName];
    subsetTag = utils.successorOf(subsetTag);
    strCount = 0;
    for (id in strings) {
      list = strings[id];
      if (list != null) {
        strCount += list.length;
      }
    }
    table = new Data;
    strTable = new Data;
    table.writeShort(0);
    table.writeShort(strCount);
    table.writeShort(6 + 12 * strCount);
    for (nameID in strings) {
      list = strings[nameID];
      if (list != null) {
        for (_i = 0, _len = list.length; _i < _len; _i++) {
          string = list[_i];
          table.writeShort(string.platformID);
          table.writeShort(string.encodingID);
          table.writeShort(string.languageID);
          table.writeShort(nameID);
          table.writeShort(string.length);
          table.writeShort(strTable.pos);
          strTable.writeString(string.raw);
        }
      }
    }
    return nameTable = {
      postscriptName: postscriptName.raw,
      table: table.data.concat(strTable.data)
    };
  };

  return NameTable;

})(Table);

module.exports = NameTable;

NameEntry = (function() {
  function NameEntry(raw, entry) {
    this.raw = raw;
    this.length = raw.length;
    this.platformID = entry.platformID;
    this.encodingID = entry.encodingID;
    this.languageID = entry.languageID;
  }

  return NameEntry;

})();


},{"../../data":1,"../table":8,"../utils":20}],17:[function(require,module,exports){
var OS2Table, Table,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Table = require('../table');

OS2Table = (function(_super) {
  __extends(OS2Table, _super);

  function OS2Table() {
    this.tag = 'OS/2';
    OS2Table.__super__.constructor.apply(this, arguments);
  }

  OS2Table.prototype.parse = function(data) {
    var i;
    data.pos = this.offset;
    this.version = data.readUInt16();
    this.averageCharWidth = data.readShort();
    this.weightClass = data.readUInt16();
    this.widthClass = data.readUInt16();
    this.type = data.readShort();
    this.ySubscriptXSize = data.readShort();
    this.ySubscriptYSize = data.readShort();
    this.ySubscriptXOffset = data.readShort();
    this.ySubscriptYOffset = data.readShort();
    this.ySuperscriptXSize = data.readShort();
    this.ySuperscriptYSize = data.readShort();
    this.ySuperscriptXOffset = data.readShort();
    this.ySuperscriptYOffset = data.readShort();
    this.yStrikeoutSize = data.readShort();
    this.yStrikeoutPosition = data.readShort();
    this.familyClass = data.readShort();
    this.panose = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 0; _i < 10; i = ++_i) {
        _results.push(data.readByte());
      }
      return _results;
    })();
    this.charRange = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 0; _i < 4; i = ++_i) {
        _results.push(data.readInt());
      }
      return _results;
    })();
    this.vendorID = data.readString(4);
    this.selection = data.readShort();
    this.firstCharIndex = data.readShort();
    this.lastCharIndex = data.readShort();
    if (this.version > 0) {
      this.ascent = data.readShort();
      this.descent = data.readShort();
      this.lineGap = data.readShort();
      this.winAscent = data.readShort();
      this.winDescent = data.readShort();
      this.codePageRange = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i < 2; i = ++_i) {
          _results.push(data.readInt());
        }
        return _results;
      })();
      if (this.version > 1) {
        this.xHeight = data.readShort();
        this.capHeight = data.readShort();
        this.defaultChar = data.readShort();
        this.breakChar = data.readShort();
        return this.maxContext = data.readShort();
      }
    }
  };

  OS2Table.prototype.encode = function() {
    return this.raw();
  };

  return OS2Table;

})(Table);

module.exports = OS2Table;


},{"../table":8}],18:[function(require,module,exports){
var Data, PostTable, Table,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Table = require('../table');

Data = require('../../data');

PostTable = (function(_super) {
  var POSTSCRIPT_GLYPHS;

  __extends(PostTable, _super);

  function PostTable() {
    return PostTable.__super__.constructor.apply(this, arguments);
  }

  PostTable.prototype.parse = function(data) {
    var i, length, numberOfGlyphs, _i, _results;
    data.pos = this.offset;
    this.format = data.readInt();
    this.italicAngle = data.readInt();
    this.underlinePosition = data.readShort();
    this.underlineThickness = data.readShort();
    this.isFixedPitch = data.readInt();
    this.minMemType42 = data.readInt();
    this.maxMemType42 = data.readInt();
    this.minMemType1 = data.readInt();
    this.maxMemType1 = data.readInt();
    switch (this.format) {
      case 0x00010000:
        break;
      case 0x00020000:
        numberOfGlyphs = data.readUInt16();
        this.glyphNameIndex = [];
        for (i = _i = 0; 0 <= numberOfGlyphs ? _i < numberOfGlyphs : _i > numberOfGlyphs; i = 0 <= numberOfGlyphs ? ++_i : --_i) {
          this.glyphNameIndex.push(data.readUInt16());
        }
        this.names = [];
        _results = [];
        while (data.pos < this.offset + this.length) {
          length = data.readByte();
          _results.push(this.names.push(data.readString(length)));
        }
        return _results;
        break;
      case 0x00025000:
        numberOfGlyphs = data.readUInt16();
        return this.offsets = data.read(numberOfGlyphs);
      case 0x00030000:
        break;
      case 0x00040000:
        return this.map = (function() {
          var _j, _ref, _results1;
          _results1 = [];
          for (i = _j = 0, _ref = this.file.maxp.numGlyphs; 0 <= _ref ? _j < _ref : _j > _ref; i = 0 <= _ref ? ++_j : --_j) {
            _results1.push(data.readUInt32());
          }
          return _results1;
        }).call(this);
    }
  };

  PostTable.prototype.glyphFor = function(code) {
    var index;
    switch (this.format) {
      case 0x00010000:
        return POSTSCRIPT_GLYPHS[code] || '.notdef';
      case 0x00020000:
        index = this.glyphNameIndex[code];
        if (index <= 257) {
          return POSTSCRIPT_GLYPHS[index];
        } else {
          return this.names[index - 258] || '.notdef';
        }
        break;
      case 0x00025000:
        return POSTSCRIPT_GLYPHS[code + this.offsets[code]] || '.notdef';
      case 0x00030000:
        return '.notdef';
      case 0x00040000:
        return this.map[code] || 0xFFFF;
    }
  };

  PostTable.prototype.encode = function(mapping) {
    var id, index, indexes, position, post, raw, string, strings, table, _i, _j, _k, _len, _len1, _len2;
    if (!this.exists) {
      return null;
    }
    raw = this.raw();
    if (this.format === 0x00030000) {
      return raw;
    }
    table = new Data(raw.slice(0, 32));
    table.writeUInt32(0x00020000);
    table.pos = 32;
    indexes = [];
    strings = [];
    for (_i = 0, _len = mapping.length; _i < _len; _i++) {
      id = mapping[_i];
      post = this.glyphFor(id);
      position = POSTSCRIPT_GLYPHS.indexOf(post);
      if (position !== -1) {
        indexes.push(position);
      } else {
        indexes.push(257 + strings.length);
        strings.push(post);
      }
    }
    table.writeUInt16(Object.keys(mapping).length);
    for (_j = 0, _len1 = indexes.length; _j < _len1; _j++) {
      index = indexes[_j];
      table.writeUInt16(index);
    }
    for (_k = 0, _len2 = strings.length; _k < _len2; _k++) {
      string = strings[_k];
      table.writeByte(string.length);
      table.writeString(string);
    }
    return table.data;
  };

  POSTSCRIPT_GLYPHS = '.notdef .null nonmarkingreturn space exclam quotedbl numbersign dollar percent\nampersand quotesingle parenleft parenright asterisk plus comma hyphen period slash\nzero one two three four five six seven eight nine colon semicolon less equal greater\nquestion at A B C D E F G H I J K L M N O P Q R S T U V W X Y Z\nbracketleft backslash bracketright asciicircum underscore grave\na b c d e f g h i j k l m n o p q r s t u v w x y z\nbraceleft bar braceright asciitilde Adieresis Aring Ccedilla Eacute Ntilde Odieresis\nUdieresis aacute agrave acircumflex adieresis atilde aring ccedilla eacute egrave\necircumflex edieresis iacute igrave icircumflex idieresis ntilde oacute ograve\nocircumflex odieresis otilde uacute ugrave ucircumflex udieresis dagger degree cent\nsterling section bullet paragraph germandbls registered copyright trademark acute\ndieresis notequal AE Oslash infinity plusminus lessequal greaterequal yen mu\npartialdiff summation product pi integral ordfeminine ordmasculine Omega ae oslash\nquestiondown exclamdown logicalnot radical florin approxequal Delta guillemotleft\nguillemotright ellipsis nonbreakingspace Agrave Atilde Otilde OE oe endash emdash\nquotedblleft quotedblright quoteleft quoteright divide lozenge ydieresis Ydieresis\nfraction currency guilsinglleft guilsinglright fi fl daggerdbl periodcentered\nquotesinglbase quotedblbase perthousand Acircumflex Ecircumflex Aacute Edieresis\nEgrave Iacute Icircumflex Idieresis Igrave Oacute Ocircumflex apple Ograve Uacute\nUcircumflex Ugrave dotlessi circumflex tilde macron breve dotaccent ring cedilla\nhungarumlaut ogonek caron Lslash lslash Scaron scaron Zcaron zcaron brokenbar Eth\neth Yacute yacute Thorn thorn minus multiply onesuperior twosuperior threesuperior\nonehalf onequarter threequarters franc Gbreve gbreve Idotaccent Scedilla scedilla\nCacute cacute Ccaron ccaron dcroat'.split(/\s+/g);

  return PostTable;

})(Table);

module.exports = PostTable;


},{"../../data":1,"../table":8}],19:[function(require,module,exports){
var CmapTable, DFont, Data, Directory, GlyfTable, HeadTable, HheaTable, HmtxTable, LocaTable, MaxpTable, NameTable, OS2Table, PostTable, TTFFont, fs;

fs = require('fs');

Data = require('../data');

DFont = require('./dfont');

Directory = require('./directory');

NameTable = require('./tables/name');

HeadTable = require('./tables/head');

CmapTable = require('./tables/cmap');

HmtxTable = require('./tables/hmtx');

HheaTable = require('./tables/hhea');

MaxpTable = require('./tables/maxp');

PostTable = require('./tables/post');

OS2Table = require('./tables/os2');

LocaTable = require('./tables/loca');

GlyfTable = require('./tables/glyf');

TTFFont = (function() {
  TTFFont.open = function(filename, name) {
    var contents;
    contents = fs.readFileSync(filename);
    return new TTFFont(contents, name);
  };

  TTFFont.fromDFont = function(filename, family) {
    var dfont;
    dfont = DFont.open(filename);
    return new TTFFont(dfont.getNamedFont(family));
  };

  TTFFont.fromBuffer = function(buffer, family) {
    var dfont, e, ttf;
    try {
      ttf = new TTFFont(buffer, family);
      if (!(ttf.head.exists && ttf.name.exists && ttf.cmap.exists)) {
        dfont = new DFont(buffer);
        ttf = new TTFFont(dfont.getNamedFont(family));
        if (!(ttf.head.exists && ttf.name.exists && ttf.cmap.exists)) {
          throw new Error('Invalid TTF file in DFont');
        }
      }
      return ttf;
    } catch (_error) {
      e = _error;
      throw new Error('Unknown font format in buffer: ' + e.message);
    }
  };

  function TTFFont(rawData, name) {
    var data, i, numFonts, offset, offsets, version, _i, _j, _len;
    this.rawData = rawData;
    data = this.contents = new Data(rawData);
    if (data.readString(4) === 'ttcf') {
      if (!name) {
        throw new Error("Must specify a font name for TTC files.");
      }
      version = data.readInt();
      numFonts = data.readInt();
      offsets = [];
      for (i = _i = 0; 0 <= numFonts ? _i < numFonts : _i > numFonts; i = 0 <= numFonts ? ++_i : --_i) {
        offsets[i] = data.readInt();
      }
      for (i = _j = 0, _len = offsets.length; _j < _len; i = ++_j) {
        offset = offsets[i];
        data.pos = offset;
        this.parse();
        if (this.name.postscriptName === name) {
          return;
        }
      }
      throw new Error("Font " + name + " not found in TTC file.");
    } else {
      data.pos = 0;
      this.parse();
    }
  }

  TTFFont.prototype.parse = function() {
    this.directory = new Directory(this.contents);
    this.head = new HeadTable(this);
    this.name = new NameTable(this);
    this.cmap = new CmapTable(this);
    this.hhea = new HheaTable(this);
    this.maxp = new MaxpTable(this);
    this.hmtx = new HmtxTable(this);
    this.post = new PostTable(this);
    this.os2 = new OS2Table(this);
    this.loca = new LocaTable(this);
    this.glyf = new GlyfTable(this);
    this.ascender = (this.os2.exists && this.os2.ascender) || this.hhea.ascender;
    this.decender = (this.os2.exists && this.os2.decender) || this.hhea.decender;
    this.lineGap = (this.os2.exists && this.os2.lineGap) || this.hhea.lineGap;
    return this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  };

  TTFFont.prototype.characterToGlyph = function(character) {
    var _ref;
    return ((_ref = this.cmap.unicode) != null ? _ref.codeMap[character] : void 0) || 0;
  };

  TTFFont.prototype.widthOfGlyph = function(glyph) {
    var scale;
    scale = 1000.0 / this.head.unitsPerEm;
    return this.hmtx.forGlyph(glyph).advance * scale;
  };

  return TTFFont;

})();

module.exports = TTFFont;


},{"../data":1,"./dfont":5,"./directory":6,"./tables/cmap":9,"./tables/glyf":10,"./tables/head":11,"./tables/hhea":12,"./tables/hmtx":13,"./tables/loca":14,"./tables/maxp":15,"./tables/name":16,"./tables/os2":17,"./tables/post":18,"fs":36}],20:[function(require,module,exports){

/*
 * An implementation of Ruby's string.succ method.
 * By Devon Govett
 *
 * Returns the successor to str. The successor is calculated by incrementing characters starting 
 * from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the
 * string. Incrementing a digit always results in another digit, and incrementing a letter results in
 * another letter of the same case.
 *
 * If the increment generates a carry, the character to the left of it is incremented. This 
 * process repeats until there is no carry, adding an additional character if necessary.
 *
 * succ("abcd")      == "abce"
 * succ("THX1138")   == "THX1139"
 * succ("<<koala>>") == "<<koalb>>"
 * succ("1999zzz")   == "2000aaa"
 * succ("ZZZ9999")   == "AAAA0000"
 */
exports.successorOf = function(input) {
  var added, alphabet, carry, i, index, isUpperCase, last, length, next, result;
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  length = alphabet.length;
  result = input;
  i = input.length;
  while (i >= 0) {
    last = input.charAt(--i);
    if (isNaN(last)) {
      index = alphabet.indexOf(last.toLowerCase());
      if (index === -1) {
        next = last;
        carry = true;
      } else {
        next = alphabet.charAt((index + 1) % length);
        isUpperCase = last === last.toUpperCase();
        if (isUpperCase) {
          next = next.toUpperCase();
        }
        carry = index + 1 >= length;
        if (carry && i === 0) {
          added = isUpperCase ? 'A' : 'a';
          result = added + next + result.slice(1);
          break;
        }
      }
    } else {
      next = +last + 1;
      carry = next > 9;
      if (carry) {
        next = 0;
      }
      if (carry && i === 0) {
        result = '1' + next + result.slice(1);
        break;
      }
    }
    result = result.slice(0, i) + next + result.slice(i + 1);
    if (!carry) {
      break;
    }
  }
  return result;
};

exports.invert = function(object) {
  var key, ret, val;
  ret = {};
  for (key in object) {
    val = object[key];
    ret[val] = key;
  }
  return ret;
};


},{}],21:[function(require,module,exports){
var PDFGradient, PDFLinearGradient, PDFRadialGradient,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

PDFGradient = (function() {
  function PDFGradient(doc) {
    this.doc = doc;
    this.stops = [];
    this.embedded = false;
    this.transform = [1, 0, 0, 1, 0, 0];
    this._colorSpace = 'DeviceRGB';
  }

  PDFGradient.prototype.stop = function(pos, color, opacity) {
    if (opacity == null) {
      opacity = 1;
    }
    opacity = Math.max(0, Math.min(1, opacity));
    this.stops.push([pos, this.doc._normalizeColor(color), opacity]);
    return this;
  };

  PDFGradient.prototype.embed = function() {
    var bounds, dx, dy, encode, fn, form, grad, group, gstate, i, last, m, m0, m1, m11, m12, m2, m21, m22, m3, m4, m5, name, pattern, resources, sMask, shader, stop, stops, v, _i, _j, _len, _ref, _ref1, _ref2;
    if (this.embedded || this.stops.length === 0) {
      return;
    }
    this.embedded = true;
    last = this.stops[this.stops.length - 1];
    if (last[0] < 1) {
      this.stops.push([1, last[1], last[2]]);
    }
    bounds = [];
    encode = [];
    stops = [];
    for (i = _i = 0, _ref = this.stops.length - 1; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      encode.push(0, 1);
      if (i + 2 !== this.stops.length) {
        bounds.push(this.stops[i + 1][0]);
      }
      fn = this.doc.ref({
        FunctionType: 2,
        Domain: [0, 1],
        C0: this.stops[i + 0][1],
        C1: this.stops[i + 1][1],
        N: 1
      });
      stops.push(fn);
      fn.end();
    }
    if (stops.length === 1) {
      fn = stops[0];
    } else {
      fn = this.doc.ref({
        FunctionType: 3,
        Domain: [0, 1],
        Functions: stops,
        Bounds: bounds,
        Encode: encode
      });
      fn.end();
    }
    this.id = 'Sh' + (++this.doc._gradCount);
    m = this.doc._ctm.slice();
    m0 = m[0], m1 = m[1], m2 = m[2], m3 = m[3], m4 = m[4], m5 = m[5];
    _ref1 = this.transform, m11 = _ref1[0], m12 = _ref1[1], m21 = _ref1[2], m22 = _ref1[3], dx = _ref1[4], dy = _ref1[5];
    m[0] = m0 * m11 + m2 * m12;
    m[1] = m1 * m11 + m3 * m12;
    m[2] = m0 * m21 + m2 * m22;
    m[3] = m1 * m21 + m3 * m22;
    m[4] = m0 * dx + m2 * dy + m4;
    m[5] = m1 * dx + m3 * dy + m5;
    shader = this.shader(fn);
    shader.end();
    pattern = this.doc.ref({
      Type: 'Pattern',
      PatternType: 2,
      Shading: shader,
      Matrix: (function() {
        var _j, _len, _results;
        _results = [];
        for (_j = 0, _len = m.length; _j < _len; _j++) {
          v = m[_j];
          _results.push(+v.toFixed(5));
        }
        return _results;
      })()
    });
    this.doc.page.patterns[this.id] = pattern;
    pattern.end();
    if (this.stops.some(function(stop) {
      return stop[2] < 1;
    })) {
      grad = this.opacityGradient();
      grad._colorSpace = 'DeviceGray';
      _ref2 = this.stops;
      for (_j = 0, _len = _ref2.length; _j < _len; _j++) {
        stop = _ref2[_j];
        grad.stop(stop[0], [stop[2]]);
      }
      grad = grad.embed();
      group = this.doc.ref({
        Type: 'Group',
        S: 'Transparency',
        CS: 'DeviceGray'
      });
      group.end();
      resources = this.doc.ref({
        ProcSet: ['PDF', 'Text', 'ImageB', 'ImageC', 'ImageI'],
        Shading: {
          Sh1: grad.data.Shading
        }
      });
      resources.end();
      form = this.doc.ref({
        Type: 'XObject',
        Subtype: 'Form',
        FormType: 1,
        BBox: [0, 0, this.doc.page.width, this.doc.page.height],
        Group: group,
        Resources: resources
      });
      form.end("/Sh1 sh");
      sMask = this.doc.ref({
        Type: 'Mask',
        S: 'Luminosity',
        G: form
      });
      sMask.end();
      gstate = this.doc.ref({
        Type: 'ExtGState',
        SMask: sMask
      });
      this.opacity_id = ++this.doc._opacityCount;
      name = "Gs" + this.opacity_id;
      this.doc.page.ext_gstates[name] = gstate;
      gstate.end();
    }
    return pattern;
  };

  PDFGradient.prototype.apply = function(op) {
    if (!this.embedded) {
      this.embed();
    }
    this.doc.addContent("/" + this.id + " " + op);
    if (this.opacity_id) {
      this.doc.addContent("/Gs" + this.opacity_id + " gs");
      return this.doc._sMasked = true;
    }
  };

  return PDFGradient;

})();

PDFLinearGradient = (function(_super) {
  __extends(PDFLinearGradient, _super);

  function PDFLinearGradient(doc, x1, y1, x2, y2) {
    this.doc = doc;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    PDFLinearGradient.__super__.constructor.apply(this, arguments);
  }

  PDFLinearGradient.prototype.shader = function(fn) {
    return this.doc.ref({
      ShadingType: 2,
      ColorSpace: this._colorSpace,
      Coords: [this.x1, this.y1, this.x2, this.y2],
      Function: fn,
      Extend: [true, true]
    });
  };

  PDFLinearGradient.prototype.opacityGradient = function() {
    return new PDFLinearGradient(this.doc, this.x1, this.y1, this.x2, this.y2);
  };

  return PDFLinearGradient;

})(PDFGradient);

PDFRadialGradient = (function(_super) {
  __extends(PDFRadialGradient, _super);

  function PDFRadialGradient(doc, x1, y1, r1, x2, y2, r2) {
    this.doc = doc;
    this.x1 = x1;
    this.y1 = y1;
    this.r1 = r1;
    this.x2 = x2;
    this.y2 = y2;
    this.r2 = r2;
    PDFRadialGradient.__super__.constructor.apply(this, arguments);
  }

  PDFRadialGradient.prototype.shader = function(fn) {
    return this.doc.ref({
      ShadingType: 3,
      ColorSpace: this._colorSpace,
      Coords: [this.x1, this.y1, this.r1, this.x2, this.y2, this.r2],
      Function: fn,
      Extend: [true, true]
    });
  };

  PDFRadialGradient.prototype.opacityGradient = function() {
    return new PDFRadialGradient(this.doc, this.x1, this.y1, this.r1, this.x2, this.y2, this.r2);
  };

  return PDFRadialGradient;

})(PDFGradient);

module.exports = {
  PDFGradient: PDFGradient,
  PDFLinearGradient: PDFLinearGradient,
  PDFRadialGradient: PDFRadialGradient
};


},{}],22:[function(require,module,exports){
(function (Buffer){

/*
PDFImage - embeds images in PDF documents
By Devon Govett
 */
var Data, JPEG, PDFImage, PNG, fs;

fs = require('fs');

Data = require('./data');

JPEG = require('./image/jpeg');

PNG = require('./image/png');

PDFImage = (function() {
  function PDFImage() {}

  PDFImage.open = function(src, label) {
    var data, match;
    if (Buffer.isBuffer(src)) {
      data = src;
    } else {
      if (match = /^data:.+;base64,(.*)$/.exec(src)) {
        data = new Buffer(match[1], 'base64');
      } else {
        data = fs.readFileSync(src);
        if (!data) {
          return;
        }
      }
    }
    if (data[0] === 0xff && data[1] === 0xd8) {
      return new JPEG(data, label);
    } else if (data[0] === 0x89 && data.toString('ascii', 1, 4) === 'PNG') {
      return new PNG(data, label);
    } else {
      throw new Error('Unknown image format.');
    }
  };

  return PDFImage;

})();

module.exports = PDFImage;


}).call(this,require("buffer").Buffer)
},{"./data":1,"./image/jpeg":23,"./image/png":24,"buffer":53,"fs":36}],23:[function(require,module,exports){
var JPEG, fs,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

fs = require('fs');

JPEG = (function() {
  var MARKERS;

  MARKERS = [0xFFC0, 0xFFC1, 0xFFC2, 0xFFC3, 0xFFC5, 0xFFC6, 0xFFC7, 0xFFC8, 0xFFC9, 0xFFCA, 0xFFCB, 0xFFCC, 0xFFCD, 0xFFCE, 0xFFCF];

  function JPEG(data, label) {
    var channels, marker, pos;
    this.data = data;
    this.label = label;
    if (data.readUInt16BE(0) !== 0xFFD8) {
      throw "SOI not found in JPEG";
    }
    pos = 2;
    while (pos < data.length) {
      marker = data.readUInt16BE(pos);
      pos += 2;
      if (__indexOf.call(MARKERS, marker) >= 0) {
        break;
      }
      pos += data.readUInt16BE(pos);
    }
    if (__indexOf.call(MARKERS, marker) < 0) {
      throw "Invalid JPEG.";
    }
    pos += 2;
    this.bits = data[pos++];
    this.height = data.readUInt16BE(pos);
    pos += 2;
    this.width = data.readUInt16BE(pos);
    pos += 2;
    channels = data[pos++];
    this.colorSpace = (function() {
      switch (channels) {
        case 1:
          return 'DeviceGray';
        case 3:
          return 'DeviceRGB';
        case 4:
          return 'DeviceCMYK';
      }
    })();
    this.obj = null;
  }

  JPEG.prototype.embed = function(document) {
    if (this.obj) {
      return;
    }
    this.obj = document.ref({
      Type: 'XObject',
      Subtype: 'Image',
      BitsPerComponent: this.bits,
      Width: this.width,
      Height: this.height,
      ColorSpace: this.colorSpace,
      Filter: 'DCTDecode'
    });
    if (this.colorSpace === 'DeviceCMYK') {
      this.obj.data['Decode'] = [1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0];
    }
    this.obj.end(this.data);
    return this.data = null;
  };

  return JPEG;

})();

module.exports = JPEG;


},{"fs":36}],24:[function(require,module,exports){
(function (Buffer){
var PNG, PNGImage, zlib;

zlib = require('zlib');

PNG = require('png-js');

PNGImage = (function() {
  function PNGImage(data, label) {
    this.label = label;
    this.image = new PNG(data);
    this.width = this.image.width;
    this.height = this.image.height;
    this.imgData = this.image.imgData;
    this.obj = null;
  }

  PNGImage.prototype.embed = function(document) {
    var mask, palette, params, rgb, val, x, _i, _len;
    this.document = document;
    if (this.obj) {
      return;
    }
    this.obj = document.ref({
      Type: 'XObject',
      Subtype: 'Image',
      BitsPerComponent: this.image.bits,
      Width: this.width,
      Height: this.height,
      Filter: 'FlateDecode'
    });
    if (!this.image.hasAlphaChannel) {
      params = document.ref({
        Predictor: 15,
        Colors: this.image.colors,
        BitsPerComponent: this.image.bits,
        Columns: this.width
      });
      this.obj.data['DecodeParms'] = params;
      params.end();
    }
    if (this.image.palette.length === 0) {
      this.obj.data['ColorSpace'] = this.image.colorSpace;
    } else {
      palette = document.ref();
      palette.end(new Buffer(this.image.palette));
      this.obj.data['ColorSpace'] = ['Indexed', 'DeviceRGB', (this.image.palette.length / 3) - 1, palette];
    }
    if (this.image.transparency.grayscale) {
      val = this.image.transparency.greyscale;
      return this.obj.data['Mask'] = [val, val];
    } else if (this.image.transparency.rgb) {
      rgb = this.image.transparency.rgb;
      mask = [];
      for (_i = 0, _len = rgb.length; _i < _len; _i++) {
        x = rgb[_i];
        mask.push(x, x);
      }
      return this.obj.data['Mask'] = mask;
    } else if (this.image.transparency.indexed) {
      return this.loadIndexedAlphaChannel();
    } else if (this.image.hasAlphaChannel) {
      return this.splitAlphaChannel();
    } else {
      return this.finalize();
    }
  };

  PNGImage.prototype.finalize = function() {
    var sMask;
    if (this.alphaChannel) {
      sMask = this.document.ref({
        Type: 'XObject',
        Subtype: 'Image',
        Height: this.height,
        Width: this.width,
        BitsPerComponent: 8,
        Filter: 'FlateDecode',
        ColorSpace: 'DeviceGray',
        Decode: [0, 1]
      });
      sMask.end(this.alphaChannel);
      this.obj.data['SMask'] = sMask;
    }
    this.obj.end(this.imgData);
    this.image = null;
    return this.imgData = null;
  };

  PNGImage.prototype.splitAlphaChannel = function() {
    return this.image.decodePixels((function(_this) {
      return function(pixels) {
        var a, alphaChannel, colorByteSize, done, i, imgData, len, p, pixelCount;
        colorByteSize = _this.image.colors * _this.image.bits / 8;
        pixelCount = _this.width * _this.height;
        imgData = new Buffer(pixelCount * colorByteSize);
        alphaChannel = new Buffer(pixelCount);
        i = p = a = 0;
        len = pixels.length;
        while (i < len) {
          imgData[p++] = pixels[i++];
          imgData[p++] = pixels[i++];
          imgData[p++] = pixels[i++];
          alphaChannel[a++] = pixels[i++];
        }
        done = 0;
        zlib.deflate(imgData, function(err, imgData) {
          _this.imgData = imgData;
          if (err) {
            throw err;
          }
          if (++done === 2) {
            return _this.finalize();
          }
        });
        return zlib.deflate(alphaChannel, function(err, alphaChannel) {
          _this.alphaChannel = alphaChannel;
          if (err) {
            throw err;
          }
          if (++done === 2) {
            return _this.finalize();
          }
        });
      };
    })(this));
  };

  PNGImage.prototype.loadIndexedAlphaChannel = function(fn) {
    var transparency;
    transparency = this.image.transparency.indexed;
    return this.image.decodePixels((function(_this) {
      return function(pixels) {
        var alphaChannel, i, j, _i, _ref;
        alphaChannel = new Buffer(_this.width * _this.height);
        i = 0;
        for (j = _i = 0, _ref = pixels.length; _i < _ref; j = _i += 1) {
          alphaChannel[i++] = transparency[pixels[j]];
        }
        return zlib.deflate(alphaChannel, function(err, alphaChannel) {
          _this.alphaChannel = alphaChannel;
          if (err) {
            throw err;
          }
          return _this.finalize();
        });
      };
    })(this));
  };

  return PNGImage;

})();

module.exports = PNGImage;


}).call(this,require("buffer").Buffer)
},{"buffer":53,"png-js":80,"zlib":52}],25:[function(require,module,exports){
var EventEmitter, LineBreaker, LineWrapper,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

EventEmitter = require('events').EventEmitter;

LineBreaker = require('linebreak');

LineWrapper = (function(_super) {
  __extends(LineWrapper, _super);

  function LineWrapper(document, options) {
    var _ref;
    this.document = document;
    this.indent = options.indent || 0;
    this.charSpacing = options.characterSpacing || 0;
    this.wordSpacing = options.wordSpacing === 0;
    this.columns = options.columns || 1;
    this.columnGap = (_ref = options.columnGap) != null ? _ref : 18;
    this.lineWidth = (options.width - (this.columnGap * (this.columns - 1))) / this.columns;
    this.startX = this.document.x;
    this.startY = this.document.y;
    this.column = 1;
    this.ellipsis = options.ellipsis;
    this.continuedX = 0;
    if (options.height != null) {
      this.height = options.height;
      this.maxY = this.startY + options.height;
    } else {
      this.maxY = this.document.page.maxY();
    }
    this.on('firstLine', (function(_this) {
      return function(options) {
        var indent;
        indent = _this.continuedX || _this.indent;
        _this.document.x += indent;
        _this.lineWidth -= indent;
        return _this.once('line', function() {
          _this.document.x -= indent;
          _this.lineWidth += indent;
          if (!options.continued) {
            return _this.continuedX = 0;
          }
        });
      };
    })(this));
    this.on('lastLine', (function(_this) {
      return function(options) {
        var align;
        align = options.align;
        if (align === 'justify') {
          options.align = 'left';
        }
        _this.lastLine = true;
        return _this.once('line', function() {
          _this.document.y += options.paragraphGap || 0;
          options.align = align;
          return _this.lastLine = false;
        });
      };
    })(this));
  }

  LineWrapper.prototype.wordWidth = function(word) {
    return this.document.widthOfString(word, this) + this.charSpacing + this.wordSpacing;
  };

  LineWrapper.prototype.eachWord = function(text, fn) {
    var bk, breaker, fbk, l, last, lbk, shouldContinue, w, word, wordWidths;
    breaker = new LineBreaker(text);
    last = null;
    wordWidths = {};
    while (bk = breaker.nextBreak()) {
      word = text.slice((last != null ? last.position : void 0) || 0, bk.position);
      w = wordWidths[word] != null ? wordWidths[word] : wordWidths[word] = this.wordWidth(word);
      if (w > this.lineWidth) {
        lbk = last;
        fbk = {};
        while (word.length) {
          l = word.length;
          while (w > this.spaceLeft) {
            w = this.wordWidth(word.slice(0, --l));
          }
          fbk.required = l < word.length;
          shouldContinue = fn(word.slice(0, l), w, fbk, lbk);
          lbk = {
            required: false
          };
          word = word.slice(l);
          w = this.wordWidth(word);
          if (shouldContinue === false) {
            break;
          }
        }
      } else {
        shouldContinue = fn(word, w, bk, last);
      }
      if (shouldContinue === false) {
        break;
      }
      last = bk;
    }
  };

  LineWrapper.prototype.wrap = function(text, options) {
    var buffer, emitLine, lc, nextY, textWidth, wc, y;
    if (options.indent != null) {
      this.indent = options.indent;
    }
    if (options.characterSpacing != null) {
      this.charSpacing = options.characterSpacing;
    }
    if (options.wordSpacing != null) {
      this.wordSpacing = options.wordSpacing;
    }
    if (options.ellipsis != null) {
      this.ellipsis = options.ellipsis;
    }
    nextY = this.document.y + this.document.currentLineHeight(true);
    if (this.document.y > this.maxY || nextY > this.maxY) {
      this.nextSection();
    }
    buffer = '';
    textWidth = 0;
    wc = 0;
    lc = 0;
    y = this.document.y;
    emitLine = (function(_this) {
      return function() {
        options.textWidth = textWidth + _this.wordSpacing * (wc - 1);
        options.wordCount = wc;
        options.lineWidth = _this.lineWidth;
        y = _this.document.y;
        _this.emit('line', buffer, options, _this);
        return lc++;
      };
    })(this);
    this.emit('sectionStart', options, this);
    this.eachWord(text, (function(_this) {
      return function(word, w, bk, last) {
        var lh, shouldContinue;
        if ((last == null) || last.required) {
          _this.emit('firstLine', options, _this);
          _this.spaceLeft = _this.lineWidth;
        }
        if (w <= _this.spaceLeft) {
          buffer += word;
          textWidth += w;
          wc++;
        }
        if (bk.required || w > _this.spaceLeft) {
          if (bk.required) {
            _this.emit('lastLine', options, _this);
          }
          lh = _this.document.currentLineHeight(true);
          if ((_this.height != null) && _this.ellipsis && _this.document.y + lh * 2 > _this.maxY && _this.column >= _this.columns) {
            if (_this.ellipsis === true) {
              _this.ellipsis = '…';
            }
            buffer = buffer.replace(/\s+$/, '');
            textWidth = _this.wordWidth(buffer + _this.ellipsis);
            while (textWidth > _this.lineWidth) {
              buffer = buffer.slice(0, -1).replace(/\s+$/, '');
              textWidth = _this.wordWidth(buffer + _this.ellipsis);
            }
            buffer = buffer + _this.ellipsis;
          }
          emitLine();
          if (_this.document.y + lh > _this.maxY) {
            shouldContinue = _this.nextSection();
            if (!shouldContinue) {
              wc = 0;
              buffer = '';
              return false;
            }
          }
          if (bk.required) {
            if (w > _this.spaceLeft) {
              buffer = word;
              textWidth = w;
              wc = 1;
              emitLine();
            }
            _this.spaceLeft = _this.lineWidth;
            buffer = '';
            textWidth = 0;
            return wc = 0;
          } else {
            _this.spaceLeft = _this.lineWidth - w;
            buffer = word;
            textWidth = w;
            return wc = 1;
          }
        } else {
          return _this.spaceLeft -= w;
        }
      };
    })(this));
    if (wc > 0) {
      this.emit('lastLine', options, this);
      emitLine();
    }
    this.emit('sectionEnd', options, this);
    if (options.continued === true) {
      if (lc > 1) {
        this.continuedX = 0;
      }
      this.continuedX += options.textWidth;
      return this.document.y = y;
    } else {
      return this.document.x = this.startX;
    }
  };

  LineWrapper.prototype.nextSection = function(options) {
    var _ref;
    this.emit('sectionEnd', options, this);
    if (++this.column > this.columns) {
      if (this.height != null) {
        return false;
      }
      this.document.addPage();
      this.column = 1;
      this.startY = this.document.page.margins.top;
      this.maxY = this.document.page.maxY();
      this.document.x = this.startX;
      if (this.document._fillColor) {
        (_ref = this.document).fillColor.apply(_ref, this.document._fillColor);
      }
      this.emit('pageBreak', options, this);
    } else {
      this.document.x += this.lineWidth + this.columnGap;
      this.document.y = this.startY;
      this.emit('columnBreak', options, this);
    }
    this.emit('sectionStart', options, this);
    return true;
  };

  return LineWrapper;

})(EventEmitter);

module.exports = LineWrapper;


},{"events":56,"linebreak":78}],26:[function(require,module,exports){
var PDFObject;

PDFObject = require('../object');

module.exports = {
  annotate: function(x, y, w, h, options) {
    var key, ref, val;
    options.Type = 'Annot';
    options.Rect = this._convertRect(x, y, w, h);
    options.Border = [0, 0, 0];
    if (options.Subtype !== 'Link') {
      if (options.C == null) {
        options.C = this._normalizeColor(options.color || [0, 0, 0]);
      }
    }
    delete options.color;
    if (typeof options.Dest === 'string') {
      options.Dest = PDFObject.s(options.Dest);
    }
    for (key in options) {
      val = options[key];
      options[key[0].toUpperCase() + key.slice(1)] = val;
    }
    ref = this.ref(options);
    this.page.annotations.push(ref);
    ref.end();
    return this;
  },
  note: function(x, y, w, h, contents, options) {
    if (options == null) {
      options = {};
    }
    options.Subtype = 'Text';
    options.Contents = PDFObject.s(contents, true);
    options.Name = 'Comment';
    if (options.color == null) {
      options.color = [243, 223, 92];
    }
    return this.annotate(x, y, w, h, options);
  },
  link: function(x, y, w, h, url, options) {
    if (options == null) {
      options = {};
    }
    options.Subtype = 'Link';
    options.A = this.ref({
      S: 'URI',
      URI: PDFObject.s(url)
    });
    options.A.end();
    return this.annotate(x, y, w, h, options);
  },
  _markup: function(x, y, w, h, options) {
    var x1, x2, y1, y2, _ref;
    if (options == null) {
      options = {};
    }
    _ref = this._convertRect(x, y, w, h), x1 = _ref[0], y1 = _ref[1], x2 = _ref[2], y2 = _ref[3];
    options.QuadPoints = [x1, y2, x2, y2, x1, y1, x2, y1];
    options.Contents = PDFObject.s('');
    return this.annotate(x, y, w, h, options);
  },
  highlight: function(x, y, w, h, options) {
    if (options == null) {
      options = {};
    }
    options.Subtype = 'Highlight';
    if (options.color == null) {
      options.color = [241, 238, 148];
    }
    return this._markup(x, y, w, h, options);
  },
  underline: function(x, y, w, h, options) {
    if (options == null) {
      options = {};
    }
    options.Subtype = 'Underline';
    return this._markup(x, y, w, h, options);
  },
  strike: function(x, y, w, h, options) {
    if (options == null) {
      options = {};
    }
    options.Subtype = 'StrikeOut';
    return this._markup(x, y, w, h, options);
  },
  lineAnnotation: function(x1, y1, x2, y2, options) {
    if (options == null) {
      options = {};
    }
    options.Subtype = 'Line';
    options.Contents = PDFObject.s('');
    options.L = [x1, this.page.height - y1, x2, this.page.height - y2];
    return this.annotate(x1, y1, x2, y2, options);
  },
  rectAnnotation: function(x, y, w, h, options) {
    if (options == null) {
      options = {};
    }
    options.Subtype = 'Square';
    options.Contents = PDFObject.s('');
    return this.annotate(x, y, w, h, options);
  },
  ellipseAnnotation: function(x, y, w, h, options) {
    if (options == null) {
      options = {};
    }
    options.Subtype = 'Circle';
    options.Contents = PDFObject.s('');
    return this.annotate(x, y, w, h, options);
  },
  textAnnotation: function(x, y, w, h, text, options) {
    if (options == null) {
      options = {};
    }
    options.Subtype = 'FreeText';
    options.Contents = PDFObject.s(text, true);
    options.DA = PDFObject.s('');
    return this.annotate(x, y, w, h, options);
  },
  _convertRect: function(x1, y1, w, h) {
    var m0, m1, m2, m3, m4, m5, x2, y2, _ref;
    y2 = y1;
    y1 += h;
    x2 = x1 + w;
    _ref = this._ctm, m0 = _ref[0], m1 = _ref[1], m2 = _ref[2], m3 = _ref[3], m4 = _ref[4], m5 = _ref[5];
    x1 = m0 * x1 + m2 * y1 + m4;
    y1 = m1 * x1 + m3 * y1 + m5;
    x2 = m0 * x2 + m2 * y2 + m4;
    y2 = m1 * x2 + m3 * y2 + m5;
    return [x1, y1, x2, y2];
  }
};


},{"../object":32}],27:[function(require,module,exports){
var PDFGradient, PDFLinearGradient, PDFRadialGradient, namedColors, _ref;

_ref = require('../gradient'), PDFGradient = _ref.PDFGradient, PDFLinearGradient = _ref.PDFLinearGradient, PDFRadialGradient = _ref.PDFRadialGradient;

module.exports = {
  initColor: function() {
    this._opacityRegistry = {};
    this._opacityCount = 0;
    return this._gradCount = 0;
  },
  _normalizeColor: function(color) {
    var hex, part;
    if (color instanceof PDFGradient) {
      return color;
    }
    if (typeof color === 'string') {
      if (color.charAt(0) === '#') {
        if (color.length === 4) {
          color = color.replace(/#([0-9A-F])([0-9A-F])([0-9A-F])/i, "#$1$1$2$2$3$3");
        }
        hex = parseInt(color.slice(1), 16);
        color = [hex >> 16, hex >> 8 & 0xff, hex & 0xff];
      } else if (namedColors[color]) {
        color = namedColors[color];
      }
    }
    if (Array.isArray(color)) {
      if (color.length === 3) {
        color = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = color.length; _i < _len; _i++) {
            part = color[_i];
            _results.push(part / 255);
          }
          return _results;
        })();
      } else if (color.length === 4) {
        color = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = color.length; _i < _len; _i++) {
            part = color[_i];
            _results.push(part / 100);
          }
          return _results;
        })();
      }
      return color;
    }
    return null;
  },
  _setColor: function(color, stroke) {
    var gstate, name, op, space;
    color = this._normalizeColor(color);
    if (!color) {
      return false;
    }
    if (this._sMasked) {
      gstate = this.ref({
        Type: 'ExtGState',
        SMask: 'None'
      });
      gstate.end();
      name = "Gs" + (++this._opacityCount);
      this.page.ext_gstates[name] = gstate;
      this.addContent("/" + name + " gs");
      this._sMasked = false;
    }
    op = stroke ? 'SCN' : 'scn';
    if (color instanceof PDFGradient) {
      this._setColorSpace('Pattern', stroke);
      color.apply(op);
    } else {
      space = color.length === 4 ? 'DeviceCMYK' : 'DeviceRGB';
      this._setColorSpace(space, stroke);
      color = color.join(' ');
      this.addContent("" + color + " " + op);
    }
    return true;
  },
  _setColorSpace: function(space, stroke) {
    var op;
    op = stroke ? 'CS' : 'cs';
    return this.addContent("/" + space + " " + op);
  },
  fillColor: function(color, opacity) {
    var set;
    if (opacity == null) {
      opacity = 1;
    }
    set = this._setColor(color, false);
    if (set) {
      this.fillOpacity(opacity);
    }
    this._fillColor = [color, opacity];
    return this;
  },
  strokeColor: function(color, opacity) {
    var set;
    if (opacity == null) {
      opacity = 1;
    }
    set = this._setColor(color, true);
    if (set) {
      this.strokeOpacity(opacity);
    }
    return this;
  },
  opacity: function(opacity) {
    this._doOpacity(opacity, opacity);
    return this;
  },
  fillOpacity: function(opacity) {
    this._doOpacity(opacity, null);
    return this;
  },
  strokeOpacity: function(opacity) {
    this._doOpacity(null, opacity);
    return this;
  },
  _doOpacity: function(fillOpacity, strokeOpacity) {
    var dictionary, id, key, name, _ref1;
    if (!((fillOpacity != null) || (strokeOpacity != null))) {
      return;
    }
    if (fillOpacity != null) {
      fillOpacity = Math.max(0, Math.min(1, fillOpacity));
    }
    if (strokeOpacity != null) {
      strokeOpacity = Math.max(0, Math.min(1, strokeOpacity));
    }
    key = "" + fillOpacity + "_" + strokeOpacity;
    if (this._opacityRegistry[key]) {
      _ref1 = this._opacityRegistry[key], dictionary = _ref1[0], name = _ref1[1];
    } else {
      dictionary = {
        Type: 'ExtGState'
      };
      if (fillOpacity != null) {
        dictionary.ca = fillOpacity;
      }
      if (strokeOpacity != null) {
        dictionary.CA = strokeOpacity;
      }
      dictionary = this.ref(dictionary);
      dictionary.end();
      id = ++this._opacityCount;
      name = "Gs" + id;
      this._opacityRegistry[key] = [dictionary, name];
    }
    this.page.ext_gstates[name] = dictionary;
    return this.addContent("/" + name + " gs");
  },
  linearGradient: function(x1, y1, x2, y2) {
    return new PDFLinearGradient(this, x1, y1, x2, y2);
  },
  radialGradient: function(x1, y1, r1, x2, y2, r2) {
    return new PDFRadialGradient(this, x1, y1, r1, x2, y2, r2);
  }
};

namedColors = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};


},{"../gradient":21}],28:[function(require,module,exports){
var PDFFont;

PDFFont = require('../font');

module.exports = {
  initFonts: function() {
    this._fontFamilies = {};
    this._fontCount = 0;
    this._fontSize = 12;
    this._font = null;
    this._registeredFonts = {};
  },
  font: function(src, family, size) {
    var cacheKey, font, id, _ref;
    if (typeof family === 'number') {
      size = family;
      family = null;
    }
    if (typeof src === 'string' && this._registeredFonts[src]) {
      cacheKey = src;
      _ref = this._registeredFonts[src], src = _ref.src, family = _ref.family;
    } else {
      cacheKey = family || src;
      if (typeof cacheKey !== 'string') {
        cacheKey = null;
      }
    }
    if (size != null) {
      this.fontSize(size);
    }
    if (font = this._fontFamilies[cacheKey]) {
      this._font = font;
      return this;
    }
    id = 'F' + (++this._fontCount);
    this._font = new PDFFont(this, src, family, id);
    if (font = this._fontFamilies[this._font.name]) {
      this._font = font;
      return this;
    }
    if (cacheKey) {
      this._fontFamilies[cacheKey] = this._font;
    }
    this._fontFamilies[this._font.name] = this._font;
    return this;
  },
  fontSize: function(_fontSize) {
    this._fontSize = _fontSize;
    return this;
  },
  currentLineHeight: function(includeGap) {
    if (includeGap == null) {
      includeGap = false;
    }
    return this._font.lineHeight(this._fontSize, includeGap);
  },
  registerFont: function(name, src, family) {
    this._registeredFonts[name] = {
      src: src,
      family: family
    };
    return this;
  }
};


},{"../font":3}],29:[function(require,module,exports){
(function (Buffer){
var PDFImage;

PDFImage = require('../image');

module.exports = {
  initImages: function() {
    this._imageRegistry = {};
    return this._imageCount = 0;
  },
  image: function(src, x, y, options) {
    var bh, bp, bw, h, hp, image, ip, w, wp, _base, _name, _ref, _ref1, _ref2;
    if (options == null) {
      options = {};
    }
    if (typeof x === 'object') {
      options = x;
      x = null;
    }
    x = (_ref = x != null ? x : options.x) != null ? _ref : this.x;
    y = (_ref1 = y != null ? y : options.y) != null ? _ref1 : this.y;
    if (!Buffer.isBuffer(src)) {
      image = this._imageRegistry[src];
    }
    if (!image) {
      image = PDFImage.open(src, 'I' + (++this._imageCount));
      image.embed(this);
      if (!Buffer.isBuffer(src)) {
        this._imageRegistry[src] = image;
      }
    }
    if ((_base = this.page.xobjects)[_name = image.label] == null) {
      _base[_name] = image.obj;
    }
    w = options.width || image.width;
    h = options.height || image.height;
    if (options.width && !options.height) {
      wp = w / image.width;
      w = image.width * wp;
      h = image.height * wp;
    } else if (options.height && !options.width) {
      hp = h / image.height;
      w = image.width * hp;
      h = image.height * hp;
    } else if (options.scale) {
      w = image.width * options.scale;
      h = image.height * options.scale;
    } else if (options.fit) {
      _ref2 = options.fit, bw = _ref2[0], bh = _ref2[1];
      bp = bw / bh;
      ip = image.width / image.height;
      if (ip > bp) {
        w = bw;
        h = bw / ip;
      } else {
        h = bh;
        w = bh * ip;
      }
      if (options.align === 'center') {
        x = x + bw / 2 - w / 2;
      } else if (options.align === 'right') {
        x = x + bw - w;
      }
      if (options.valign === 'center') {
        y = y + bh / 2 - h / 2;
      } else if (options.valign === 'bottom') {
        y = y + bh - h;
      }
    }
    if (this.y === y) {
      this.y += h;
    }
    this.save();
    this.transform(w, 0, 0, -h, x, y + h);
    this.addContent("/" + image.label + " Do");
    this.restore();
    return this;
  }
};


}).call(this,require("buffer").Buffer)
},{"../image":22,"buffer":53}],30:[function(require,module,exports){
var LineWrapper;

LineWrapper = require('../line_wrapper');

module.exports = {
  initText: function() {
    this.x = 0;
    this.y = 0;
    return this._lineGap = 0;
  },
  lineGap: function(_lineGap) {
    this._lineGap = _lineGap;
    return this;
  },
  moveDown: function(lines) {
    if (lines == null) {
      lines = 1;
    }
    this.y += this.currentLineHeight(true) * lines + this._lineGap;
    return this;
  },
  moveUp: function(lines) {
    if (lines == null) {
      lines = 1;
    }
    this.y -= this.currentLineHeight(true) * lines + this._lineGap;
    return this;
  },
  _text: function(text, x, y, options, lineCallback) {
    var line, wrapper, _i, _len, _ref;
    options = this._initOptions(x, y, options);
    text = '' + text;
    if (options.wordSpacing) {
      text = text.replace(/\s{2,}/g, ' ');
    }
    if (options.width) {
      wrapper = this._wrapper;
      if (!wrapper) {
        wrapper = new LineWrapper(this, options);
        wrapper.on('line', lineCallback);
      }
      this._wrapper = options.continued ? wrapper : null;
      this._textOptions = options.continued ? options : null;
      wrapper.wrap(text, options);
    } else {
      _ref = text.split('\n');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        lineCallback(line, options);
      }
    }
    return this;
  },
  text: function(text, x, y, options) {
    return this._text(text, x, y, options, this._line.bind(this));
  },
  widthOfString: function(string, options) {
    if (options == null) {
      options = {};
    }
    return this._font.widthOfString(string, this._fontSize) + (options.characterSpacing || 0) * (string.length - 1);
  },
  heightOfString: function(text, options) {
    var height, lineGap, x, y;
    if (options == null) {
      options = {};
    }
    x = this.x, y = this.y;
    options = this._initOptions(options);
    options.height = Infinity;
    lineGap = options.lineGap || this._lineGap || 0;
    this._text(text, this.x, this.y, options, (function(_this) {
      return function(line, options) {
        return _this.y += _this.currentLineHeight(true) + lineGap;
      };
    })(this));
    height = this.y - y;
    this.x = x;
    this.y = y;
    return height;
  },
  list: function(list, x, y, options, wrapper) {
    var flatten, i, indent, itemIndent, items, level, levels, r;
    options = this._initOptions(x, y, options);
    r = Math.round((this._font.ascender / 1000 * this._fontSize) / 3);
    indent = options.textIndent || r * 5;
    itemIndent = options.bulletIndent || r * 8;
    level = 1;
    items = [];
    levels = [];
    flatten = function(list) {
      var i, item, _i, _len, _results;
      _results = [];
      for (i = _i = 0, _len = list.length; _i < _len; i = ++_i) {
        item = list[i];
        if (Array.isArray(item)) {
          level++;
          flatten(item);
          _results.push(level--);
        } else {
          items.push(item);
          _results.push(levels.push(level));
        }
      }
      return _results;
    };
    flatten(list);
    wrapper = new LineWrapper(this, options);
    wrapper.on('line', this._line.bind(this));
    level = 1;
    i = 0;
    wrapper.on('firstLine', (function(_this) {
      return function() {
        var diff, l;
        if ((l = levels[i++]) !== level) {
          diff = itemIndent * (l - level);
          _this.x += diff;
          wrapper.lineWidth -= diff;
          level = l;
        }
        _this.circle(_this.x - indent + r, _this.y + r + (r / 2), r);
        return _this.fill();
      };
    })(this));
    wrapper.on('sectionStart', (function(_this) {
      return function() {
        var pos;
        pos = indent + itemIndent * (level - 1);
        _this.x += pos;
        return wrapper.lineWidth -= pos;
      };
    })(this));
    wrapper.on('sectionEnd', (function(_this) {
      return function() {
        var pos;
        pos = indent + itemIndent * (level - 1);
        _this.x -= pos;
        return wrapper.lineWidth += pos;
      };
    })(this));
    wrapper.wrap(items.join('\n'), options);
    this.x -= indent;
    return this;
  },
  _initOptions: function(x, y, options) {
    var key, margins, val, _ref;
    if (x == null) {
      x = {};
    }
    if (options == null) {
      options = {};
    }
    if (typeof x === 'object') {
      options = x;
      x = null;
    }
    options = (function() {
      var k, opts, v;
      opts = {};
      for (k in options) {
        v = options[k];
        opts[k] = v;
      }
      return opts;
    })();
    if (this._textOptions) {
      _ref = this._textOptions;
      for (key in _ref) {
        val = _ref[key];
        if (key !== 'continued') {
          if (options[key] == null) {
            options[key] = val;
          }
        }
      }
    }
    if (x != null) {
      this.x = x;
    }
    if (y != null) {
      this.y = y;
    }
    if (options.lineBreak !== false) {
      margins = this.page.margins;
      if (options.width == null) {
        options.width = this.page.width - this.x - margins.right;
      }
    }
    options.columns || (options.columns = 0);
    if (options.columnGap == null) {
      options.columnGap = 18;
    }
    return options;
  },
  _line: function(text, options, wrapper) {
    var lineGap;
    if (options == null) {
      options = {};
    }
    this._fragment(text, this.x, this.y, options);
    lineGap = options.lineGap || this._lineGap || 0;
    if (!wrapper) {
      return this.x += this.widthOfString(text);
    } else {
      return this.y += this.currentLineHeight(true) + lineGap;
    }
  },
  _fragment: function(text, x, y, options) {
    var align, characterSpacing, commands, d, encoded, i, lineWidth, lineY, mode, renderedWidth, spaceWidth, textWidth, word, wordSpacing, words, _base, _i, _len, _name;
    text = '' + text;
    if (text.length === 0) {
      return;
    }
    align = options.align || 'left';
    wordSpacing = options.wordSpacing || 0;
    characterSpacing = options.characterSpacing || 0;
    if (options.width) {
      switch (align) {
        case 'right':
          textWidth = this.widthOfString(text.replace(/\s+$/, ''), options);
          x += options.lineWidth - textWidth;
          break;
        case 'center':
          x += options.lineWidth / 2 - options.textWidth / 2;
          break;
        case 'justify':
          words = text.trim().split(/\s+/);
          textWidth = this.widthOfString(text.replace(/\s+/g, ''), options);
          spaceWidth = this.widthOfString(' ') + characterSpacing;
          wordSpacing = Math.max(0, (options.lineWidth - textWidth) / Math.max(1, words.length - 1) - spaceWidth);
      }
    }
    renderedWidth = options.textWidth + (wordSpacing * (options.wordCount - 1)) + (characterSpacing * (text.length - 1));
    if (options.link) {
      this.link(x, y, renderedWidth, this.currentLineHeight(), options.link);
    }
    if (options.underline || options.strike) {
      this.save();
      if (!options.stroke) {
        this.strokeColor.apply(this, this._fillColor);
      }
      lineWidth = this._fontSize < 10 ? 0.5 : Math.floor(this._fontSize / 10);
      this.lineWidth(lineWidth);
      d = options.underline ? 1 : 2;
      lineY = y + this.currentLineHeight() / d;
      if (options.underline) {
        lineY -= lineWidth;
      }
      this.moveTo(x, lineY);
      this.lineTo(x + renderedWidth, lineY);
      this.stroke();
      this.restore();
    }
    this.save();
    this.transform(1, 0, 0, -1, 0, this.page.height);
    y = this.page.height - y - (this._font.ascender / 1000 * this._fontSize);
    if ((_base = this.page.fonts)[_name = this._font.id] == null) {
      _base[_name] = this._font.ref();
    }
    this._font.use(text);
    this.addContent("BT");
    this.addContent("" + x + " " + y + " Td");
    this.addContent("/" + this._font.id + " " + this._fontSize + " Tf");
    mode = options.fill && options.stroke ? 2 : options.stroke ? 1 : 0;
    if (mode) {
      this.addContent("" + mode + " Tr");
    }
    if (characterSpacing) {
      this.addContent("" + characterSpacing + " Tc");
    }
    if (wordSpacing) {
      words = text.trim().split(/\s+/);
      wordSpacing += this.widthOfString(' ') + characterSpacing;
      wordSpacing *= 1000 / this._fontSize;
      commands = [];
      for (_i = 0, _len = words.length; _i < _len; _i++) {
        word = words[_i];
        encoded = this._font.encode(word);
        encoded = ((function() {
          var _j, _ref, _results;
          _results = [];
          for (i = _j = 0, _ref = encoded.length; _j < _ref; i = _j += 1) {
            _results.push(encoded.charCodeAt(i).toString(16));
          }
          return _results;
        })()).join('');
        commands.push("<" + encoded + "> " + (-wordSpacing));
      }
      this.addContent("[" + (commands.join(' ')) + "] TJ");
    } else {
      encoded = this._font.encode(text);
      encoded = ((function() {
        var _j, _ref, _results;
        _results = [];
        for (i = _j = 0, _ref = encoded.length; _j < _ref; i = _j += 1) {
          _results.push(encoded.charCodeAt(i).toString(16));
        }
        return _results;
      })()).join('');
      this.addContent("<" + encoded + "> Tj");
    }
    this.addContent("ET");
    return this.restore();
  }
};


},{"../line_wrapper":25}],31:[function(require,module,exports){
var KAPPA, SVGPath,
  __slice = [].slice;

SVGPath = require('../path');

KAPPA = 4.0 * ((Math.sqrt(2) - 1.0) / 3.0);

module.exports = {
  initVector: function() {
    this._ctm = [1, 0, 0, 1, 0, 0];
    return this._ctmStack = [];
  },
  save: function() {
    this._ctmStack.push(this._ctm.slice());
    return this.addContent('q');
  },
  restore: function() {
    this._ctm = this._ctmStack.pop() || [1, 0, 0, 1, 0, 0];
    return this.addContent('Q');
  },
  closePath: function() {
    return this.addContent('h');
  },
  lineWidth: function(w) {
    return this.addContent("" + w + " w");
  },
  _CAP_STYLES: {
    BUTT: 0,
    ROUND: 1,
    SQUARE: 2
  },
  lineCap: function(c) {
    if (typeof c === 'string') {
      c = this._CAP_STYLES[c.toUpperCase()];
    }
    return this.addContent("" + c + " J");
  },
  _JOIN_STYLES: {
    MITER: 0,
    ROUND: 1,
    BEVEL: 2
  },
  lineJoin: function(j) {
    if (typeof j === 'string') {
      j = this._JOIN_STYLES[j.toUpperCase()];
    }
    return this.addContent("" + j + " j");
  },
  miterLimit: function(m) {
    return this.addContent("" + m + " M");
  },
  dash: function(length, options) {
    var phase, space, _ref;
    if (options == null) {
      options = {};
    }
    if (length == null) {
      return this;
    }
    space = (_ref = options.space) != null ? _ref : length;
    phase = options.phase || 0;
    return this.addContent("[" + length + " " + space + "] " + phase + " d");
  },
  undash: function() {
    return this.addContent("[] 0 d");
  },
  moveTo: function(x, y) {
    return this.addContent("" + x + " " + y + " m");
  },
  lineTo: function(x, y) {
    return this.addContent("" + x + " " + y + " l");
  },
  bezierCurveTo: function(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.addContent("" + cp1x + " " + cp1y + " " + cp2x + " " + cp2y + " " + x + " " + y + " c");
  },
  quadraticCurveTo: function(cpx, cpy, x, y) {
    return this.addContent("" + cpx + " " + cpy + " " + x + " " + y + " v");
  },
  rect: function(x, y, w, h) {
    return this.addContent("" + x + " " + y + " " + w + " " + h + " re");
  },
  roundedRect: function(x, y, w, h, r) {
    if (r == null) {
      r = 0;
    }
    this.moveTo(x + r, y);
    this.lineTo(x + w - r, y);
    this.quadraticCurveTo(x + w, y, x + w, y + r);
    this.lineTo(x + w, y + h - r);
    this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    this.lineTo(x + r, y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - r);
    this.lineTo(x, y + r);
    return this.quadraticCurveTo(x, y, x + r, y);
  },
  ellipse: function(x, y, r1, r2) {
    var ox, oy, xe, xm, ye, ym;
    if (r2 == null) {
      r2 = r1;
    }
    x -= r1;
    y -= r2;
    ox = r1 * KAPPA;
    oy = r2 * KAPPA;
    xe = x + r1 * 2;
    ye = y + r2 * 2;
    xm = x + r1;
    ym = y + r2;
    this.moveTo(x, ym);
    this.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    this.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    this.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    this.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    return this.closePath();
  },
  circle: function(x, y, radius) {
    return this.ellipse(x, y, radius);
  },
  polygon: function() {
    var point, points, _i, _len;
    points = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    this.moveTo.apply(this, points.shift());
    for (_i = 0, _len = points.length; _i < _len; _i++) {
      point = points[_i];
      this.lineTo.apply(this, point);
    }
    return this.closePath();
  },
  path: function(path) {
    SVGPath.apply(this, path);
    return this;
  },
  _windingRule: function(rule) {
    if (/even-?odd/.test(rule)) {
      return '*';
    }
    return '';
  },
  fill: function(color, rule) {
    if (/(even-?odd)|(non-?zero)/.test(color)) {
      rule = color;
      color = null;
    }
    if (color) {
      this.fillColor(color);
    }
    return this.addContent('f' + this._windingRule(rule));
  },
  stroke: function(color) {
    if (color) {
      this.strokeColor(color);
    }
    return this.addContent('S');
  },
  fillAndStroke: function(fillColor, strokeColor, rule) {
    var isFillRule;
    if (strokeColor == null) {
      strokeColor = fillColor;
    }
    isFillRule = /(even-?odd)|(non-?zero)/;
    if (isFillRule.test(fillColor)) {
      rule = fillColor;
      fillColor = null;
    }
    if (isFillRule.test(strokeColor)) {
      rule = strokeColor;
      strokeColor = fillColor;
    }
    if (fillColor) {
      this.fillColor(fillColor);
      this.strokeColor(strokeColor);
    }
    return this.addContent('B' + this._windingRule(rule));
  },
  clip: function(rule) {
    return this.addContent('W' + this._windingRule(rule) + ' n');
  },
  transform: function(m11, m12, m21, m22, dx, dy) {
    var m, m0, m1, m2, m3, m4, m5, v, values;
    m = this._ctm;
    m0 = m[0], m1 = m[1], m2 = m[2], m3 = m[3], m4 = m[4], m5 = m[5];
    m[0] = m0 * m11 + m2 * m12;
    m[1] = m1 * m11 + m3 * m12;
    m[2] = m0 * m21 + m2 * m22;
    m[3] = m1 * m21 + m3 * m22;
    m[4] = m0 * dx + m2 * dy + m4;
    m[5] = m1 * dx + m3 * dy + m5;
    values = ((function() {
      var _i, _len, _ref, _results;
      _ref = [m11, m12, m21, m22, dx, dy];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        v = _ref[_i];
        _results.push(+v.toFixed(5));
      }
      return _results;
    })()).join(' ');
    return this.addContent("" + values + " cm");
  },
  translate: function(x, y) {
    return this.transform(1, 0, 0, 1, x, y);
  },
  rotate: function(angle, options) {
    var cos, rad, sin, x, x1, y, y1, _ref;
    if (options == null) {
      options = {};
    }
    rad = angle * Math.PI / 180;
    cos = Math.cos(rad);
    sin = Math.sin(rad);
    x = y = 0;
    if (options.origin != null) {
      _ref = options.origin, x = _ref[0], y = _ref[1];
      x1 = x * cos - y * sin;
      y1 = x * sin + y * cos;
      x -= x1;
      y -= y1;
    }
    return this.transform(cos, sin, -sin, cos, x, y);
  },
  scale: function(xFactor, yFactor, options) {
    var x, y, _ref;
    if (yFactor == null) {
      yFactor = xFactor;
    }
    if (options == null) {
      options = {};
    }
    if (arguments.length === 2) {
      yFactor = xFactor;
      options = yFactor;
    }
    x = y = 0;
    if (options.origin != null) {
      _ref = options.origin, x = _ref[0], y = _ref[1];
      x -= xFactor * x;
      y -= yFactor * y;
    }
    return this.transform(xFactor, 0, 0, yFactor, x, y);
  }
};


},{"../path":34}],32:[function(require,module,exports){
(function (Buffer){

/*
PDFObject - converts JavaScript types into their corrisponding PDF types.
By Devon Govett
 */
var PDFObject, PDFReference;

PDFObject = (function() {
  var pad, swapBytes;

  function PDFObject() {}

  pad = function(str, length) {
    return (Array(length + 1).join('0') + str).slice(-length);
  };

  PDFObject.convert = function(object) {
    var e, items, key, out, val;
    if (Array.isArray(object)) {
      items = ((function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = object.length; _i < _len; _i++) {
          e = object[_i];
          _results.push(PDFObject.convert(e));
        }
        return _results;
      })()).join(' ');
      return '[' + items + ']';
    } else if (typeof object === 'string') {
      return '/' + object;
    } else if (object != null ? object.isString : void 0) {
      return '(' + object + ')';
    } else if (object instanceof PDFReference) {
      return object.toString();
    } else if (object instanceof Date) {
      return '(D:' + pad(object.getUTCFullYear(), 4) + pad(object.getUTCMonth(), 2) + pad(object.getUTCDate(), 2) + pad(object.getUTCHours(), 2) + pad(object.getUTCMinutes(), 2) + pad(object.getUTCSeconds(), 2) + 'Z)';
    } else if ({}.toString.call(object) === '[object Object]') {
      out = ['<<'];
      for (key in object) {
        val = object[key];
        out.push('/' + key + ' ' + PDFObject.convert(val));
      }
      out.push('>>');
      return out.join('\n');
    } else {
      return '' + object;
    }
  };

  swapBytes = function(buff) {
    var a, i, l, _i, _ref;
    l = buff.length;
    if (l & 0x01) {
      throw new Error("Buffer length must be even");
    } else {
      for (i = _i = 0, _ref = l - 1; _i < _ref; i = _i += 2) {
        a = buff[i];
        buff[i] = buff[i + 1];
        buff[i + 1] = a;
      }
    }
    return buff;
  };

  PDFObject.s = function(string, swap) {
    if (swap == null) {
      swap = false;
    }
    string = string.replace(/\\/g, '\\\\\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    if (swap) {
      string = swapBytes(new Buffer('\ufeff' + string, 'ucs-2')).toString('binary');
    }
    return {
      isString: true,
      toString: function() {
        return string;
      }
    };
  };

  return PDFObject;

})();

module.exports = PDFObject;

PDFReference = require('./reference');


}).call(this,require("buffer").Buffer)
},{"./reference":35,"buffer":53}],33:[function(require,module,exports){

/*
PDFPage - represents a single page in the PDF document
By Devon Govett
 */
var PDFPage;

PDFPage = (function() {
  var DEFAULT_MARGINS, SIZES;

  function PDFPage(document, options) {
    var dimensions;
    this.document = document;
    if (options == null) {
      options = {};
    }
    this.size = options.size || 'letter';
    this.layout = options.layout || 'portrait';
    if (typeof options.margin === 'number') {
      this.margins = {
        top: options.margin,
        left: options.margin,
        bottom: options.margin,
        right: options.margin
      };
    } else {
      this.margins = options.margins || DEFAULT_MARGINS;
    }
    dimensions = Array.isArray(this.size) ? this.size : SIZES[this.size.toUpperCase()];
    this.width = dimensions[this.layout === 'portrait' ? 0 : 1];
    this.height = dimensions[this.layout === 'portrait' ? 1 : 0];
    this.content = this.document.ref();
    this.resources = this.document.ref({
      ProcSet: ['PDF', 'Text', 'ImageB', 'ImageC', 'ImageI']
    });
    Object.defineProperties(this, {
      fonts: {
        get: (function(_this) {
          return function() {
            var _base;
            return (_base = _this.resources.data).Font != null ? _base.Font : _base.Font = {};
          };
        })(this)
      },
      xobjects: {
        get: (function(_this) {
          return function() {
            var _base;
            return (_base = _this.resources.data).XObject != null ? _base.XObject : _base.XObject = {};
          };
        })(this)
      },
      ext_gstates: {
        get: (function(_this) {
          return function() {
            var _base;
            return (_base = _this.resources.data).ExtGState != null ? _base.ExtGState : _base.ExtGState = {};
          };
        })(this)
      },
      patterns: {
        get: (function(_this) {
          return function() {
            var _base;
            return (_base = _this.resources.data).Pattern != null ? _base.Pattern : _base.Pattern = {};
          };
        })(this)
      },
      annotations: {
        get: (function(_this) {
          return function() {
            var _base;
            return (_base = _this.dictionary.data).Annots != null ? _base.Annots : _base.Annots = [];
          };
        })(this)
      }
    });
    this.dictionary = this.document.ref({
      Type: 'Page',
      Parent: this.document._root.data.Pages,
      MediaBox: [0, 0, this.width, this.height],
      Contents: this.content,
      Resources: this.resources
    });
  }

  PDFPage.prototype.maxY = function() {
    return this.height - this.margins.bottom;
  };

  PDFPage.prototype.write = function(chunk) {
    return this.content.write(chunk);
  };

  PDFPage.prototype.end = function() {
    this.dictionary.end();
    this.resources.end();
    return this.content.end();
  };

  DEFAULT_MARGINS = {
    top: 72,
    left: 72,
    bottom: 72,
    right: 72
  };

  SIZES = {
    '4A0': [4767.87, 6740.79],
    '2A0': [3370.39, 4767.87],
    A0: [2383.94, 3370.39],
    A1: [1683.78, 2383.94],
    A2: [1190.55, 1683.78],
    A3: [841.89, 1190.55],
    A4: [595.28, 841.89],
    A5: [419.53, 595.28],
    A6: [297.64, 419.53],
    A7: [209.76, 297.64],
    A8: [147.40, 209.76],
    A9: [104.88, 147.40],
    A10: [73.70, 104.88],
    B0: [2834.65, 4008.19],
    B1: [2004.09, 2834.65],
    B2: [1417.32, 2004.09],
    B3: [1000.63, 1417.32],
    B4: [708.66, 1000.63],
    B5: [498.90, 708.66],
    B6: [354.33, 498.90],
    B7: [249.45, 354.33],
    B8: [175.75, 249.45],
    B9: [124.72, 175.75],
    B10: [87.87, 124.72],
    C0: [2599.37, 3676.54],
    C1: [1836.85, 2599.37],
    C2: [1298.27, 1836.85],
    C3: [918.43, 1298.27],
    C4: [649.13, 918.43],
    C5: [459.21, 649.13],
    C6: [323.15, 459.21],
    C7: [229.61, 323.15],
    C8: [161.57, 229.61],
    C9: [113.39, 161.57],
    C10: [79.37, 113.39],
    RA0: [2437.80, 3458.27],
    RA1: [1729.13, 2437.80],
    RA2: [1218.90, 1729.13],
    RA3: [864.57, 1218.90],
    RA4: [609.45, 864.57],
    SRA0: [2551.18, 3628.35],
    SRA1: [1814.17, 2551.18],
    SRA2: [1275.59, 1814.17],
    SRA3: [907.09, 1275.59],
    SRA4: [637.80, 907.09],
    EXECUTIVE: [521.86, 756.00],
    FOLIO: [612.00, 936.00],
    LEGAL: [612.00, 1008.00],
    LETTER: [612.00, 792.00],
    TABLOID: [792.00, 1224.00]
  };

  return PDFPage;

})();

module.exports = PDFPage;


},{}],34:[function(require,module,exports){
var SVGPath;

SVGPath = (function() {
  var apply, arcToSegments, cx, cy, parameters, parse, px, py, runners, segmentToBezier, solveArc, sx, sy;

  function SVGPath() {}

  SVGPath.apply = function(doc, path) {
    var commands;
    commands = parse(path);
    return apply(commands, doc);
  };

  parameters = {
    A: 7,
    a: 7,
    C: 6,
    c: 6,
    H: 1,
    h: 1,
    L: 2,
    l: 2,
    M: 2,
    m: 2,
    Q: 4,
    q: 4,
    S: 4,
    s: 4,
    T: 2,
    t: 2,
    V: 1,
    v: 1,
    Z: 0,
    z: 0
  };

  parse = function(path) {
    var args, c, cmd, curArg, foundDecimal, params, ret, _i, _len;
    ret = [];
    args = [];
    curArg = "";
    foundDecimal = false;
    params = 0;
    for (_i = 0, _len = path.length; _i < _len; _i++) {
      c = path[_i];
      if (parameters[c] != null) {
        params = parameters[c];
        if (cmd) {
          if (curArg.length > 0) {
            args[args.length] = +curArg;
          }
          ret[ret.length] = {
            cmd: cmd,
            args: args
          };
          args = [];
          curArg = "";
          foundDecimal = false;
        }
        cmd = c;
      } else if ((c === " " || c === ",") || (c === "-" && curArg.length > 0 && curArg[curArg.length - 1] !== 'e') || (c === "." && foundDecimal)) {
        if (curArg.length === 0) {
          continue;
        }
        if (args.length === params) {
          ret[ret.length] = {
            cmd: cmd,
            args: args
          };
          args = [+curArg];
          if (cmd === "M") {
            cmd = "L";
          }
          if (cmd === "m") {
            cmd = "l";
          }
        } else {
          args[args.length] = +curArg;
        }
        foundDecimal = c === ".";
        curArg = c === '-' || c === '.' ? c : '';
      } else {
        curArg += c;
        if (c === '.') {
          foundDecimal = true;
        }
      }
    }
    if (curArg.length > 0) {
      if (args.length === params) {
        ret[ret.length] = {
          cmd: cmd,
          args: args
        };
        args = [+curArg];
        if (cmd === "M") {
          cmd = "L";
        }
        if (cmd === "m") {
          cmd = "l";
        }
      } else {
        args[args.length] = +curArg;
      }
    }
    ret[ret.length] = {
      cmd: cmd,
      args: args
    };
    return ret;
  };

  cx = cy = px = py = sx = sy = 0;

  apply = function(commands, doc) {
    var c, i, _i, _len, _name;
    cx = cy = px = py = sx = sy = 0;
    for (i = _i = 0, _len = commands.length; _i < _len; i = ++_i) {
      c = commands[i];
      if (typeof runners[_name = c.cmd] === "function") {
        runners[_name](doc, c.args);
      }
    }
    return cx = cy = px = py = 0;
  };

  runners = {
    M: function(doc, a) {
      cx = a[0];
      cy = a[1];
      px = py = null;
      sx = cx;
      sy = cy;
      return doc.moveTo(cx, cy);
    },
    m: function(doc, a) {
      cx += a[0];
      cy += a[1];
      px = py = null;
      sx = cx;
      sy = cy;
      return doc.moveTo(cx, cy);
    },
    C: function(doc, a) {
      cx = a[4];
      cy = a[5];
      px = a[2];
      py = a[3];
      return doc.bezierCurveTo.apply(doc, a);
    },
    c: function(doc, a) {
      doc.bezierCurveTo(a[0] + cx, a[1] + cy, a[2] + cx, a[3] + cy, a[4] + cx, a[5] + cy);
      px = cx + a[2];
      py = cy + a[3];
      cx += a[4];
      return cy += a[5];
    },
    S: function(doc, a) {
      if (px === null) {
        px = cx;
        py = cy;
      }
      doc.bezierCurveTo(cx - (px - cx), cy - (py - cy), a[0], a[1], a[2], a[3]);
      px = a[0];
      py = a[1];
      cx = a[2];
      return cy = a[3];
    },
    s: function(doc, a) {
      if (px === null) {
        px = cx;
        py = cy;
      }
      doc.bezierCurveTo(cx - (px - cx), cy - (py - cy), cx + a[0], cy + a[1], cx + a[2], cy + a[3]);
      px = cx + a[0];
      py = cy + a[1];
      cx += a[2];
      return cy += a[3];
    },
    Q: function(doc, a) {
      px = a[0];
      py = a[1];
      cx = a[2];
      cy = a[3];
      return doc.quadraticCurveTo(a[0], a[1], cx, cy);
    },
    q: function(doc, a) {
      doc.quadraticCurveTo(a[0] + cx, a[1] + cy, a[2] + cx, a[3] + cy);
      px = cx + a[0];
      py = cy + a[1];
      cx += a[2];
      return cy += a[3];
    },
    T: function(doc, a) {
      if (px === null) {
        px = cx;
        py = cy;
      } else {
        px = cx - (px - cx);
        py = cy - (py - cy);
      }
      doc.quadraticCurveTo(px, py, a[0], a[1]);
      px = cx - (px - cx);
      py = cy - (py - cy);
      cx = a[0];
      return cy = a[1];
    },
    t: function(doc, a) {
      if (px === null) {
        px = cx;
        py = cy;
      } else {
        px = cx - (px - cx);
        py = cy - (py - cy);
      }
      doc.quadraticCurveTo(px, py, cx + a[0], cy + a[1]);
      cx += a[0];
      return cy += a[1];
    },
    A: function(doc, a) {
      solveArc(doc, cx, cy, a);
      cx = a[5];
      return cy = a[6];
    },
    a: function(doc, a) {
      a[5] += cx;
      a[6] += cy;
      solveArc(doc, cx, cy, a);
      cx = a[5];
      return cy = a[6];
    },
    L: function(doc, a) {
      cx = a[0];
      cy = a[1];
      px = py = null;
      return doc.lineTo(cx, cy);
    },
    l: function(doc, a) {
      cx += a[0];
      cy += a[1];
      px = py = null;
      return doc.lineTo(cx, cy);
    },
    H: function(doc, a) {
      cx = a[0];
      px = py = null;
      return doc.lineTo(cx, cy);
    },
    h: function(doc, a) {
      cx += a[0];
      px = py = null;
      return doc.lineTo(cx, cy);
    },
    V: function(doc, a) {
      cy = a[0];
      px = py = null;
      return doc.lineTo(cx, cy);
    },
    v: function(doc, a) {
      cy += a[0];
      px = py = null;
      return doc.lineTo(cx, cy);
    },
    Z: function(doc) {
      doc.closePath();
      cx = sx;
      return cy = sy;
    },
    z: function(doc) {
      doc.closePath();
      cx = sx;
      return cy = sy;
    }
  };

  solveArc = function(doc, x, y, coords) {
    var bez, ex, ey, large, rot, rx, ry, seg, segs, sweep, _i, _len, _results;
    rx = coords[0], ry = coords[1], rot = coords[2], large = coords[3], sweep = coords[4], ex = coords[5], ey = coords[6];
    segs = arcToSegments(ex, ey, rx, ry, large, sweep, rot, x, y);
    _results = [];
    for (_i = 0, _len = segs.length; _i < _len; _i++) {
      seg = segs[_i];
      bez = segmentToBezier.apply(null, seg);
      _results.push(doc.bezierCurveTo.apply(doc, bez));
    }
    return _results;
  };

  arcToSegments = function(x, y, rx, ry, large, sweep, rotateX, ox, oy) {
    var a00, a01, a10, a11, cos_th, d, i, pl, result, segments, sfactor, sfactor_sq, sin_th, th, th0, th1, th2, th3, th_arc, x0, x1, xc, y0, y1, yc, _i;
    th = rotateX * (Math.PI / 180);
    sin_th = Math.sin(th);
    cos_th = Math.cos(th);
    rx = Math.abs(rx);
    ry = Math.abs(ry);
    px = cos_th * (ox - x) * 0.5 + sin_th * (oy - y) * 0.5;
    py = cos_th * (oy - y) * 0.5 - sin_th * (ox - x) * 0.5;
    pl = (px * px) / (rx * rx) + (py * py) / (ry * ry);
    if (pl > 1) {
      pl = Math.sqrt(pl);
      rx *= pl;
      ry *= pl;
    }
    a00 = cos_th / rx;
    a01 = sin_th / rx;
    a10 = (-sin_th) / ry;
    a11 = cos_th / ry;
    x0 = a00 * ox + a01 * oy;
    y0 = a10 * ox + a11 * oy;
    x1 = a00 * x + a01 * y;
    y1 = a10 * x + a11 * y;
    d = (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0);
    sfactor_sq = 1 / d - 0.25;
    if (sfactor_sq < 0) {
      sfactor_sq = 0;
    }
    sfactor = Math.sqrt(sfactor_sq);
    if (sweep === large) {
      sfactor = -sfactor;
    }
    xc = 0.5 * (x0 + x1) - sfactor * (y1 - y0);
    yc = 0.5 * (y0 + y1) + sfactor * (x1 - x0);
    th0 = Math.atan2(y0 - yc, x0 - xc);
    th1 = Math.atan2(y1 - yc, x1 - xc);
    th_arc = th1 - th0;
    if (th_arc < 0 && sweep === 1) {
      th_arc += 2 * Math.PI;
    } else if (th_arc > 0 && sweep === 0) {
      th_arc -= 2 * Math.PI;
    }
    segments = Math.ceil(Math.abs(th_arc / (Math.PI * 0.5 + 0.001)));
    result = [];
    for (i = _i = 0; 0 <= segments ? _i < segments : _i > segments; i = 0 <= segments ? ++_i : --_i) {
      th2 = th0 + i * th_arc / segments;
      th3 = th0 + (i + 1) * th_arc / segments;
      result[i] = [xc, yc, th2, th3, rx, ry, sin_th, cos_th];
    }
    return result;
  };

  segmentToBezier = function(cx, cy, th0, th1, rx, ry, sin_th, cos_th) {
    var a00, a01, a10, a11, t, th_half, x1, x2, x3, y1, y2, y3;
    a00 = cos_th * rx;
    a01 = -sin_th * ry;
    a10 = sin_th * rx;
    a11 = cos_th * ry;
    th_half = 0.5 * (th1 - th0);
    t = (8 / 3) * Math.sin(th_half * 0.5) * Math.sin(th_half * 0.5) / Math.sin(th_half);
    x1 = cx + Math.cos(th0) - t * Math.sin(th0);
    y1 = cy + Math.sin(th0) + t * Math.cos(th0);
    x3 = cx + Math.cos(th1);
    y3 = cy + Math.sin(th1);
    x2 = x3 + t * Math.sin(th1);
    y2 = y3 - t * Math.cos(th1);
    return [a00 * x1 + a01 * y1, a10 * x1 + a11 * y1, a00 * x2 + a01 * y2, a10 * x2 + a11 * y2, a00 * x3 + a01 * y3, a10 * x3 + a11 * y3];
  };

  return SVGPath;

})();

module.exports = SVGPath;


},{}],35:[function(require,module,exports){
(function (Buffer){

/*
PDFReference - represents a reference to another object in the PDF object heirarchy
By Devon Govett
 */
var PDFObject, PDFReference, zlib,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

zlib = require('zlib');

PDFReference = (function() {
  function PDFReference(document, id, data) {
    this.document = document;
    this.id = id;
    this.data = data != null ? data : {};
    this.finalize = __bind(this.finalize, this);
    this.gen = 0;
    this.deflate = null;
    this.compress = this.document.compress && !this.data.Filter;
    this.uncompressedLength = 0;
    this.chunks = [];
  }

  PDFReference.prototype.initDeflate = function() {
    this.data.Filter = 'FlateDecode';
    this.deflate = zlib.createDeflate();
    this.deflate.on('data', (function(_this) {
      return function(chunk) {
        _this.chunks.push(chunk);
        return _this.data.Length += chunk.length;
      };
    })(this));
    return this.deflate.on('end', this.finalize);
  };

  PDFReference.prototype.write = function(chunk) {
    var _base;
    if (!Buffer.isBuffer(chunk)) {
      chunk = new Buffer(chunk + '\n', 'binary');
    }
    this.uncompressedLength += chunk.length;
    if ((_base = this.data).Length == null) {
      _base.Length = 0;
    }
    if (this.compress) {
      if (!this.deflate) {
        this.initDeflate();
      }
      return this.deflate.write(chunk);
    } else {
      this.chunks.push(chunk);
      return this.data.Length += chunk.length;
    }
  };

  PDFReference.prototype.end = function(chunk) {
    if (typeof chunk === 'string' || Buffer.isBuffer(chunk)) {
      this.write(chunk);
    }
    if (this.deflate) {
      return this.deflate.end();
    } else {
      return this.finalize();
    }
  };

  PDFReference.prototype.finalize = function() {
    var chunk, _i, _len, _ref;
    this.offset = this.document._offset;
    this.document._write("" + this.id + " " + this.gen + " obj");
    this.document._write(PDFObject.convert(this.data));
    if (this.chunks.length) {
      this.document._write('stream');
      _ref = this.chunks;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        chunk = _ref[_i];
        this.document._write(chunk);
      }
      this.chunks.length = 0;
      this.document._write('\nendstream');
    }
    this.document._write('endobj');
    return this.document._refEnd(this);
  };

  PDFReference.prototype.toString = function() {
    return "" + this.id + " " + this.gen + " R";
  };

  return PDFReference;

})();

module.exports = PDFReference;

PDFObject = require('./object');


}).call(this,require("buffer").Buffer)
},{"./object":32,"buffer":53,"zlib":52}],36:[function(require,module,exports){

},{}],37:[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && (isNaN(value) || !isFinite(value))) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b),
        key, i;
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":39}],38:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],39:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":38,"_process":59,"inherits":57}],40:[function(require,module,exports){
'use strict';


var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');


exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof(source) !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs+len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for(var i=0; i<len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function(chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i=0, l=chunks.length; i<l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i=0, l=chunks.length; i<l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for(var i=0; i<len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function(chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);
},{}],41:[function(require,module,exports){
'use strict';

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It doesn't worth to make additional optimizationa as in original.
// Small size is preferable.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0
    , s2 = ((adler >>> 16) & 0xffff) |0
    , n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;
},{}],42:[function(require,module,exports){
module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
},{}],43:[function(require,module,exports){
'use strict';

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.


// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for(var n =0; n < 256; n++){
    c = n;
    for(var k =0; k < 8; k++){
      c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable
    , end = pos + len;

  crc = crc ^ (-1);

  for (var i = pos; i < end; i++ ) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;
},{}],44:[function(require,module,exports){
'use strict';

var utils   = require('../utils/common');
var trees   = require('./trees');
var adler32 = require('./adler32');
var crc32   = require('./crc32');
var msg   = require('./messages');

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2*L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only (s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH-1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH-1)) ? s.strstart : MIN_MATCH-1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH-1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size-MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH-1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1- s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length-1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH-1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart-1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart-1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH-1 ? s.strstart : MIN_MATCH-1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
var Config = function (good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
};

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2*D_CODES+1) * 2);
  this.bl_tree    = new utils.Buf16((2*BL_CODES+1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS+1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2*L_CODES+1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2*L_CODES+1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  s.d_buf = s.lit_bufsize >> 1;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
                );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg){
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}

/* =========================================================================
 * Copy the source state to the destination state
 */
//function deflateCopy(dest, source) {
//
//}

exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/
},{"../utils/common":40,"./adler32":41,"./crc32":43,"./messages":48,"./trees":49}],45:[function(require,module,exports){
'use strict';

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  var window;                 /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

},{}],46:[function(require,module,exports){
'use strict';


var utils = require('../utils/common');
var adler32 = require('./adler32');
var crc32   = require('./crc32');
var inflate_fast = require('./inffast');
var inflate_table = require('./inftrees');

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function ZSWAP32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, {bits: 9});

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, {bits: 5});

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window,src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window,src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window,src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
    case HEAD:
      if (state.wrap === 0) {
        state.mode = TYPEDO;
        break;
      }
      //=== NEEDBITS(16);
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
        state.check = 0/*crc32(0L, Z_NULL, 0)*/;
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//

        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = FLAGS;
        break;
      }
      state.flags = 0;           /* expect zlib header */
      if (state.head) {
        state.head.done = false;
      }
      if (!(state.wrap & 1) ||   /* check if zlib header allowed */
        (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
        strm.msg = 'incorrect header check';
        state.mode = BAD;
        break;
      }
      if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
      len = (hold & 0x0f)/*BITS(4)*/ + 8;
      if (state.wbits === 0) {
        state.wbits = len;
      }
      else if (len > state.wbits) {
        strm.msg = 'invalid window size';
        state.mode = BAD;
        break;
      }
      state.dmax = 1 << len;
      //Tracev((stderr, "inflate:   zlib header ok\n"));
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = hold & 0x200 ? DICTID : TYPE;
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      break;
    case FLAGS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.flags = hold;
      if ((state.flags & 0xff) !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      if (state.flags & 0xe000) {
        strm.msg = 'unknown header flags set';
        state.mode = BAD;
        break;
      }
      if (state.head) {
        state.head.text = ((hold >> 8) & 1);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = TIME;
      /* falls through */
    case TIME:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.time = hold;
      }
      if (state.flags & 0x0200) {
        //=== CRC4(state.check, hold)
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        hbuf[2] = (hold >>> 16) & 0xff;
        hbuf[3] = (hold >>> 24) & 0xff;
        state.check = crc32(state.check, hbuf, 4, 0);
        //===
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = OS;
      /* falls through */
    case OS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.xflags = (hold & 0xff);
        state.head.os = (hold >> 8);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = EXLEN;
      /* falls through */
    case EXLEN:
      if (state.flags & 0x0400) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length = hold;
        if (state.head) {
          state.head.extra_len = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      else if (state.head) {
        state.head.extra = null/*Z_NULL*/;
      }
      state.mode = EXTRA;
      /* falls through */
    case EXTRA:
      if (state.flags & 0x0400) {
        copy = state.length;
        if (copy > have) { copy = have; }
        if (copy) {
          if (state.head) {
            len = state.head.extra_len - state.length;
            if (!state.head.extra) {
              // Use untyped array for more conveniend processing later
              state.head.extra = new Array(state.head.extra_len);
            }
            utils.arraySet(
              state.head.extra,
              input,
              next,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              copy,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              len
            );
            //zmemcpy(state.head.extra + len, next,
            //        len + copy > state.head.extra_max ?
            //        state.head.extra_max - len : copy);
          }
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          state.length -= copy;
        }
        if (state.length) { break inf_leave; }
      }
      state.length = 0;
      state.mode = NAME;
      /* falls through */
    case NAME:
      if (state.flags & 0x0800) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          // TODO: 2 or 1 bytes?
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.name_max*/)) {
            state.head.name += String.fromCharCode(len);
          }
        } while (len && copy < have);

        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.name = null;
      }
      state.length = 0;
      state.mode = COMMENT;
      /* falls through */
    case COMMENT:
      if (state.flags & 0x1000) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.comm_max*/)) {
            state.head.comment += String.fromCharCode(len);
          }
        } while (len && copy < have);
        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.comment = null;
      }
      state.mode = HCRC;
      /* falls through */
    case HCRC:
      if (state.flags & 0x0200) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.check & 0xffff)) {
          strm.msg = 'header crc mismatch';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      if (state.head) {
        state.head.hcrc = ((state.flags >> 9) & 1);
        state.head.done = true;
      }
      strm.adler = state.check = 0 /*crc32(0L, Z_NULL, 0)*/;
      state.mode = TYPE;
      break;
    case DICTID:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      strm.adler = state.check = ZSWAP32(hold);
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = DICT;
      /* falls through */
    case DICT:
      if (state.havedict === 0) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        return Z_NEED_DICT;
      }
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = TYPE;
      /* falls through */
    case TYPE:
      if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case TYPEDO:
      if (state.last) {
        //--- BYTEBITS() ---//
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        state.mode = CHECK;
        break;
      }
      //=== NEEDBITS(3); */
      while (bits < 3) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.last = (hold & 0x01)/*BITS(1)*/;
      //--- DROPBITS(1) ---//
      hold >>>= 1;
      bits -= 1;
      //---//

      switch ((hold & 0x03)/*BITS(2)*/) {
      case 0:                             /* stored block */
        //Tracev((stderr, "inflate:     stored block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = STORED;
        break;
      case 1:                             /* fixed block */
        fixedtables(state);
        //Tracev((stderr, "inflate:     fixed codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = LEN_;             /* decode codes */
        if (flush === Z_TREES) {
          //--- DROPBITS(2) ---//
          hold >>>= 2;
          bits -= 2;
          //---//
          break inf_leave;
        }
        break;
      case 2:                             /* dynamic block */
        //Tracev((stderr, "inflate:     dynamic codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = TABLE;
        break;
      case 3:
        strm.msg = 'invalid block type';
        state.mode = BAD;
      }
      //--- DROPBITS(2) ---//
      hold >>>= 2;
      bits -= 2;
      //---//
      break;
    case STORED:
      //--- BYTEBITS() ---// /* go to byte boundary */
      hold >>>= bits & 7;
      bits -= bits & 7;
      //---//
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
        strm.msg = 'invalid stored block lengths';
        state.mode = BAD;
        break;
      }
      state.length = hold & 0xffff;
      //Tracev((stderr, "inflate:       stored length %u\n",
      //        state.length));
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = COPY_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case COPY_:
      state.mode = COPY;
      /* falls through */
    case COPY:
      copy = state.length;
      if (copy) {
        if (copy > have) { copy = have; }
        if (copy > left) { copy = left; }
        if (copy === 0) { break inf_leave; }
        //--- zmemcpy(put, next, copy); ---
        utils.arraySet(output, input, next, copy, put);
        //---//
        have -= copy;
        next += copy;
        left -= copy;
        put += copy;
        state.length -= copy;
        break;
      }
      //Tracev((stderr, "inflate:       stored end\n"));
      state.mode = TYPE;
      break;
    case TABLE:
      //=== NEEDBITS(14); */
      while (bits < 14) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
//#ifndef PKZIP_BUG_WORKAROUND
      if (state.nlen > 286 || state.ndist > 30) {
        strm.msg = 'too many length or distance symbols';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracev((stderr, "inflate:       table sizes ok\n"));
      state.have = 0;
      state.mode = LENLENS;
      /* falls through */
    case LENLENS:
      while (state.have < state.ncode) {
        //=== NEEDBITS(3);
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
        //--- DROPBITS(3) ---//
        hold >>>= 3;
        bits -= 3;
        //---//
      }
      while (state.have < 19) {
        state.lens[order[state.have++]] = 0;
      }
      // We have separate tables & no pointers. 2 commented lines below not needed.
      //state.next = state.codes;
      //state.lencode = state.next;
      // Switch to use dynamic table
      state.lencode = state.lendyn;
      state.lenbits = 7;

      opts = {bits: state.lenbits};
      ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
      state.lenbits = opts.bits;

      if (ret) {
        strm.msg = 'invalid code lengths set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, "inflate:       code lengths ok\n"));
      state.have = 0;
      state.mode = CODELENS;
      /* falls through */
    case CODELENS:
      while (state.have < state.nlen + state.ndist) {
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_val < 16) {
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.lens[state.have++] = here_val;
        }
        else {
          if (here_val === 16) {
            //=== NEEDBITS(here.bits + 2);
            n = here_bits + 2;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            if (state.have === 0) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            len = state.lens[state.have - 1];
            copy = 3 + (hold & 0x03);//BITS(2);
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            //---//
          }
          else if (here_val === 17) {
            //=== NEEDBITS(here.bits + 3);
            n = here_bits + 3;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 3 + (hold & 0x07);//BITS(3);
            //--- DROPBITS(3) ---//
            hold >>>= 3;
            bits -= 3;
            //---//
          }
          else {
            //=== NEEDBITS(here.bits + 7);
            n = here_bits + 7;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 11 + (hold & 0x7f);//BITS(7);
            //--- DROPBITS(7) ---//
            hold >>>= 7;
            bits -= 7;
            //---//
          }
          if (state.have + copy > state.nlen + state.ndist) {
            strm.msg = 'invalid bit length repeat';
            state.mode = BAD;
            break;
          }
          while (copy--) {
            state.lens[state.have++] = len;
          }
        }
      }

      /* handle error breaks in while */
      if (state.mode === BAD) { break; }

      /* check for end-of-block code (better have one) */
      if (state.lens[256] === 0) {
        strm.msg = 'invalid code -- missing end-of-block';
        state.mode = BAD;
        break;
      }

      /* build code tables -- note: do not change the lenbits or distbits
         values here (9 and 6) without reading the comments in inftrees.h
         concerning the ENOUGH constants, which depend on those values */
      state.lenbits = 9;

      opts = {bits: state.lenbits};
      ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.lenbits = opts.bits;
      // state.lencode = state.next;

      if (ret) {
        strm.msg = 'invalid literal/lengths set';
        state.mode = BAD;
        break;
      }

      state.distbits = 6;
      //state.distcode.copy(state.codes);
      // Switch to use dynamic table
      state.distcode = state.distdyn;
      opts = {bits: state.distbits};
      ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.distbits = opts.bits;
      // state.distcode = state.next;

      if (ret) {
        strm.msg = 'invalid distances set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, 'inflate:       codes ok\n'));
      state.mode = LEN_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case LEN_:
      state.mode = LEN;
      /* falls through */
    case LEN:
      if (have >= 6 && left >= 258) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        inflate_fast(strm, _out);
        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        if (state.mode === TYPE) {
          state.back = -1;
        }
        break;
      }
      state.back = 0;
      for (;;) {
        here = state.lencode[hold & ((1 << state.lenbits) -1)];  /*BITS(state.lenbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if (here_bits <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if (here_op && (here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.lencode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) -1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      state.length = here_val;
      if (here_op === 0) {
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        state.mode = LIT;
        break;
      }
      if (here_op & 32) {
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.back = -1;
        state.mode = TYPE;
        break;
      }
      if (here_op & 64) {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break;
      }
      state.extra = here_op & 15;
      state.mode = LENEXT;
      /* falls through */
    case LENEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length += hold & ((1 << state.extra) -1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
      //Tracevv((stderr, "inflate:         length %u\n", state.length));
      state.was = state.length;
      state.mode = DIST;
      /* falls through */
    case DIST:
      for (;;) {
        here = state.distcode[hold & ((1 << state.distbits) -1)];/*BITS(state.distbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if ((here_bits) <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if ((here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.distcode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) -1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      if (here_op & 64) {
        strm.msg = 'invalid distance code';
        state.mode = BAD;
        break;
      }
      state.offset = here_val;
      state.extra = (here_op) & 15;
      state.mode = DISTEXT;
      /* falls through */
    case DISTEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.offset += hold & ((1 << state.extra) -1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
//#ifdef INFLATE_STRICT
      if (state.offset > state.dmax) {
        strm.msg = 'invalid distance too far back';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
      state.mode = MATCH;
      /* falls through */
    case MATCH:
      if (left === 0) { break inf_leave; }
      copy = _out - left;
      if (state.offset > copy) {         /* copy from window */
        copy = state.offset - copy;
        if (copy > state.whave) {
          if (state.sane) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD;
            break;
          }
// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
        }
        if (copy > state.wnext) {
          copy -= state.wnext;
          from = state.wsize - copy;
        }
        else {
          from = state.wnext - copy;
        }
        if (copy > state.length) { copy = state.length; }
        from_source = state.window;
      }
      else {                              /* copy from output */
        from_source = output;
        from = put - state.offset;
        copy = state.length;
      }
      if (copy > left) { copy = left; }
      left -= copy;
      state.length -= copy;
      do {
        output[put++] = from_source[from++];
      } while (--copy);
      if (state.length === 0) { state.mode = LEN; }
      break;
    case LIT:
      if (left === 0) { break inf_leave; }
      output[put++] = state.length;
      left--;
      state.mode = LEN;
      break;
    case CHECK:
      if (state.wrap) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          // Use '|' insdead of '+' to make sure that result is signed
          hold |= input[next++] << bits;
          bits += 8;
        }
        //===//
        _out -= left;
        strm.total_out += _out;
        state.total += _out;
        if (_out) {
          strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

        }
        _out = left;
        // NB: crc32 stored as signed 32-bit int, ZSWAP32 returns signed too
        if ((state.flags ? hold : ZSWAP32(hold)) !== state.check) {
          strm.msg = 'incorrect data check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   check matches trailer\n"));
      }
      state.mode = LENGTH;
      /* falls through */
    case LENGTH:
      if (state.wrap && state.flags) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.total & 0xffffffff)) {
          strm.msg = 'incorrect length check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   length matches trailer\n"));
      }
      state.mode = DONE;
      /* falls through */
    case DONE:
      ret = Z_STREAM_END;
      break inf_leave;
    case BAD:
      ret = Z_DATA_ERROR;
      break inf_leave;
    case MEM:
      return Z_MEM_ERROR;
    case SYNC:
      /* falls through */
    default:
      return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}


exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/
},{"../utils/common":40,"./adler32":41,"./crc32":43,"./inffast":45,"./inftrees":47}],47:[function(require,module,exports){
'use strict';


var utils = require('../utils/common');

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS+1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS+1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
      base = extra = work;    /* dummy value--not used */
      end = 19;
  } else if (type === LENS) {
      base = lbase;
      base_index -= 257;
      extra = lext;
      extra_index -= 257;
      end = 256;
  } else {                    /* DISTS */
      base = dbase;
      extra = dext;
      end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  var i=0;
  /* process all codes and make table entries */
  for (;;) {
    i++;
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};

},{"../utils/common":40}],48:[function(require,module,exports){
'use strict';

module.exports = {
  '2':    'need dictionary',     /* Z_NEED_DICT       2  */
  '1':    'stream end',          /* Z_STREAM_END      1  */
  '0':    '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};
},{}],49:[function(require,module,exports){
'use strict';


var utils = require('../utils/common');

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2*L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES+2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH-MIN_MATCH+1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


var StaticTreeDesc = function (static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
};


var static_l_desc;
var static_d_desc;
var static_bl_desc;


var TreeDesc = function(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
};



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short (s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c*2]/*.Code*/, tree[c*2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max]*2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max+1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n*2 +1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n*2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n-base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n*2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length-1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits+1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m*2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m*2 + 1]/*.Len*/)*tree[m*2]/*.Freq*/;
        tree[m*2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS+1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits-1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n*2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n*2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS+1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES-1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1<<extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length-1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0 ; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1<<extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for ( ; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1<<(extra_dbits[code]-7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n*2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n*2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n*2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n*2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES+1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n*2 + 1]/*.Len*/ = 5;
    static_dtree[n*2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS+1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc =new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n*2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n*2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n*2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK*2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n*2;
  var _m2 = m*2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j+1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx*2] << 8) | (s.pending_buf[s.d_buf + lx*2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code+LITERALS+1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n*2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node*2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n*2 + 1]/*.Dad*/ = tree[m*2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0*2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code+1)*2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n+1)*2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6*2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10*2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138*2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0*2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n+1)*2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count-3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count-3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count-11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES-1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex]*2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3*(max_blindex+1) + 5+5+4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes-257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes-1,   5);
  send_bits(s, blcodes-4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank]*2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes-1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes-1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n*2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK<<1)+(last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES<<1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len+3+7) >>> 3;
    static_lenb = (s.static_len+3+7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len+4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES<<1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES<<1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code+1, s.d_desc.max_code+1, max_blindex+1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc*2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc]+LITERALS+1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize-1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;
},{"../utils/common":40}],50:[function(require,module,exports){
'use strict';


function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;
},{}],51:[function(require,module,exports){
(function (process,Buffer){
var msg = require('pako/lib/zlib/messages');
var zstream = require('pako/lib/zlib/zstream');
var zlib_deflate = require('pako/lib/zlib/deflate.js');
var zlib_inflate = require('pako/lib/zlib/inflate.js');
var constants = require('pako/lib/zlib/constants');

for (var key in constants) {
  exports[key] = constants[key];
}

// zlib modes
exports.NONE = 0;
exports.DEFLATE = 1;
exports.INFLATE = 2;
exports.GZIP = 3;
exports.GUNZIP = 4;
exports.DEFLATERAW = 5;
exports.INFLATERAW = 6;
exports.UNZIP = 7;

/**
 * Emulate Node's zlib C++ layer for use by the JS layer in index.js
 */
function Zlib(mode) {
  if (mode < exports.DEFLATE || mode > exports.UNZIP)
    throw new TypeError("Bad argument");
    
  this.mode = mode;
  this.init_done = false;
  this.write_in_progress = false;
  this.pending_close = false;
  this.windowBits = 0;
  this.level = 0;
  this.memLevel = 0;
  this.strategy = 0;
  this.dictionary = null;
}

Zlib.prototype.init = function(windowBits, level, memLevel, strategy, dictionary) {
  this.windowBits = windowBits;
  this.level = level;
  this.memLevel = memLevel;
  this.strategy = strategy;
  // dictionary not supported.
  
  if (this.mode === exports.GZIP || this.mode === exports.GUNZIP)
    this.windowBits += 16;
    
  if (this.mode === exports.UNZIP)
    this.windowBits += 32;
    
  if (this.mode === exports.DEFLATERAW || this.mode === exports.INFLATERAW)
    this.windowBits = -this.windowBits;
    
  this.strm = new zstream();
  
  switch (this.mode) {
    case exports.DEFLATE:
    case exports.GZIP:
    case exports.DEFLATERAW:
      var status = zlib_deflate.deflateInit2(
        this.strm,
        this.level,
        exports.Z_DEFLATED,
        this.windowBits,
        this.memLevel,
        this.strategy
      );
      break;
    case exports.INFLATE:
    case exports.GUNZIP:
    case exports.INFLATERAW:
    case exports.UNZIP:
      var status  = zlib_inflate.inflateInit2(
        this.strm,
        this.windowBits
      );
      break;
    default:
      throw new Error("Unknown mode " + this.mode);
  }
  
  if (status !== exports.Z_OK) {
    this._error(status);
    return;
  }
  
  this.write_in_progress = false;
  this.init_done = true;
};

Zlib.prototype.params = function() {
  throw new Error("deflateParams Not supported");
};

Zlib.prototype._writeCheck = function() {
  if (!this.init_done)
    throw new Error("write before init");
    
  if (this.mode === exports.NONE)
    throw new Error("already finalized");
    
  if (this.write_in_progress)
    throw new Error("write already in progress");
    
  if (this.pending_close)
    throw new Error("close is pending");
};

Zlib.prototype.write = function(flush, input, in_off, in_len, out, out_off, out_len) {    
  this._writeCheck();
  this.write_in_progress = true;
  
  var self = this;
  process.nextTick(function() {
    self.write_in_progress = false;
    var res = self._write(flush, input, in_off, in_len, out, out_off, out_len);
    self.callback(res[0], res[1]);
    
    if (self.pending_close)
      self.close();
  });
  
  return this;
};

// set method for Node buffers, used by pako
function bufferSet(data, offset) {
  for (var i = 0; i < data.length; i++) {
    this[offset + i] = data[i];
  }
}

Zlib.prototype.writeSync = function(flush, input, in_off, in_len, out, out_off, out_len) {
  this._writeCheck();
  return this._write(flush, input, in_off, in_len, out, out_off, out_len);
};

Zlib.prototype._write = function(flush, input, in_off, in_len, out, out_off, out_len) {
  this.write_in_progress = true;
  
  if (flush !== exports.Z_NO_FLUSH &&
      flush !== exports.Z_PARTIAL_FLUSH &&
      flush !== exports.Z_SYNC_FLUSH &&
      flush !== exports.Z_FULL_FLUSH &&
      flush !== exports.Z_FINISH &&
      flush !== exports.Z_BLOCK) {
    throw new Error("Invalid flush value");
  }
  
  if (input == null) {
    input = new Buffer(0);
    in_len = 0;
    in_off = 0;
  }
  
  if (out._set)
    out.set = out._set;
  else
    out.set = bufferSet;
  
  var strm = this.strm;
  strm.avail_in = in_len;
  strm.input = input;
  strm.next_in = in_off;
  strm.avail_out = out_len;
  strm.output = out;
  strm.next_out = out_off;
  
  switch (this.mode) {
    case exports.DEFLATE:
    case exports.GZIP:
    case exports.DEFLATERAW:
      var status = zlib_deflate.deflate(strm, flush);
      break;
    case exports.UNZIP:
    case exports.INFLATE:
    case exports.GUNZIP:
    case exports.INFLATERAW:
      var status = zlib_inflate.inflate(strm, flush);
      break;
    default:
      throw new Error("Unknown mode " + this.mode);
  }
  
  if (status !== exports.Z_STREAM_END && status !== exports.Z_OK) {
    this._error(status);
  }
  
  this.write_in_progress = false;
  return [strm.avail_in, strm.avail_out];
};

Zlib.prototype.close = function() {
  if (this.write_in_progress) {
    this.pending_close = true;
    return;
  }
  
  this.pending_close = false;
  
  if (this.mode === exports.DEFLATE || this.mode === exports.GZIP || this.mode === exports.DEFLATERAW) {
    zlib_deflate.deflateEnd(this.strm);
  } else {
    zlib_inflate.inflateEnd(this.strm);
  }
  
  this.mode = exports.NONE;
};

Zlib.prototype.reset = function() {
  switch (this.mode) {
    case exports.DEFLATE:
    case exports.DEFLATERAW:
      var status = zlib_deflate.deflateReset(this.strm);
      break;
    case exports.INFLATE:
    case exports.INFLATERAW:
      var status = zlib_inflate.inflateReset(this.strm);
      break;
  }
  
  if (status !== exports.Z_OK) {
    this._error(status);
  }
};

Zlib.prototype._error = function(status) {
  this.onerror(msg[status] + ': ' + this.strm.msg, status);
  
  this.write_in_progress = false;
  if (this.pending_close)
    this.close();
};

exports.Zlib = Zlib;

}).call(this,require('_process'),require("buffer").Buffer)
},{"_process":59,"buffer":53,"pako/lib/zlib/constants":42,"pako/lib/zlib/deflate.js":44,"pako/lib/zlib/inflate.js":46,"pako/lib/zlib/messages":48,"pako/lib/zlib/zstream":50}],52:[function(require,module,exports){
(function (process,Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Transform = require('_stream_transform');

var binding = require('./binding');
var util = require('util');
var assert = require('assert').ok;

// zlib doesn't provide these, so kludge them in following the same
// const naming scheme zlib uses.
binding.Z_MIN_WINDOWBITS = 8;
binding.Z_MAX_WINDOWBITS = 15;
binding.Z_DEFAULT_WINDOWBITS = 15;

// fewer than 64 bytes per chunk is stupid.
// technically it could work with as few as 8, but even 64 bytes
// is absurdly low.  Usually a MB or more is best.
binding.Z_MIN_CHUNK = 64;
binding.Z_MAX_CHUNK = Infinity;
binding.Z_DEFAULT_CHUNK = (16 * 1024);

binding.Z_MIN_MEMLEVEL = 1;
binding.Z_MAX_MEMLEVEL = 9;
binding.Z_DEFAULT_MEMLEVEL = 8;

binding.Z_MIN_LEVEL = -1;
binding.Z_MAX_LEVEL = 9;
binding.Z_DEFAULT_LEVEL = binding.Z_DEFAULT_COMPRESSION;

// expose all the zlib constants
Object.keys(binding).forEach(function(k) {
  if (k.match(/^Z/)) exports[k] = binding[k];
});

// translation table for return codes.
exports.codes = {
  Z_OK: binding.Z_OK,
  Z_STREAM_END: binding.Z_STREAM_END,
  Z_NEED_DICT: binding.Z_NEED_DICT,
  Z_ERRNO: binding.Z_ERRNO,
  Z_STREAM_ERROR: binding.Z_STREAM_ERROR,
  Z_DATA_ERROR: binding.Z_DATA_ERROR,
  Z_MEM_ERROR: binding.Z_MEM_ERROR,
  Z_BUF_ERROR: binding.Z_BUF_ERROR,
  Z_VERSION_ERROR: binding.Z_VERSION_ERROR
};

Object.keys(exports.codes).forEach(function(k) {
  exports.codes[exports.codes[k]] = k;
});

exports.Deflate = Deflate;
exports.Inflate = Inflate;
exports.Gzip = Gzip;
exports.Gunzip = Gunzip;
exports.DeflateRaw = DeflateRaw;
exports.InflateRaw = InflateRaw;
exports.Unzip = Unzip;

exports.createDeflate = function(o) {
  return new Deflate(o);
};

exports.createInflate = function(o) {
  return new Inflate(o);
};

exports.createDeflateRaw = function(o) {
  return new DeflateRaw(o);
};

exports.createInflateRaw = function(o) {
  return new InflateRaw(o);
};

exports.createGzip = function(o) {
  return new Gzip(o);
};

exports.createGunzip = function(o) {
  return new Gunzip(o);
};

exports.createUnzip = function(o) {
  return new Unzip(o);
};


// Convenience methods.
// compress/decompress a string or buffer in one step.
exports.deflate = function(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Deflate(opts), buffer, callback);
};

exports.deflateSync = function(buffer, opts) {
  return zlibBufferSync(new Deflate(opts), buffer);
};

exports.gzip = function(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Gzip(opts), buffer, callback);
};

exports.gzipSync = function(buffer, opts) {
  return zlibBufferSync(new Gzip(opts), buffer);
};

exports.deflateRaw = function(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new DeflateRaw(opts), buffer, callback);
};

exports.deflateRawSync = function(buffer, opts) {
  return zlibBufferSync(new DeflateRaw(opts), buffer);
};

exports.unzip = function(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Unzip(opts), buffer, callback);
};

exports.unzipSync = function(buffer, opts) {
  return zlibBufferSync(new Unzip(opts), buffer);
};

exports.inflate = function(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Inflate(opts), buffer, callback);
};

exports.inflateSync = function(buffer, opts) {
  return zlibBufferSync(new Inflate(opts), buffer);
};

exports.gunzip = function(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new Gunzip(opts), buffer, callback);
};

exports.gunzipSync = function(buffer, opts) {
  return zlibBufferSync(new Gunzip(opts), buffer);
};

exports.inflateRaw = function(buffer, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return zlibBuffer(new InflateRaw(opts), buffer, callback);
};

exports.inflateRawSync = function(buffer, opts) {
  return zlibBufferSync(new InflateRaw(opts), buffer);
};

function zlibBuffer(engine, buffer, callback) {
  var buffers = [];
  var nread = 0;

  engine.on('error', onError);
  engine.on('end', onEnd);

  engine.end(buffer);
  flow();

  function flow() {
    var chunk;
    while (null !== (chunk = engine.read())) {
      buffers.push(chunk);
      nread += chunk.length;
    }
    engine.once('readable', flow);
  }

  function onError(err) {
    engine.removeListener('end', onEnd);
    engine.removeListener('readable', flow);
    callback(err);
  }

  function onEnd() {
    var buf = Buffer.concat(buffers, nread);
    buffers = [];
    callback(null, buf);
    engine.close();
  }
}

function zlibBufferSync(engine, buffer) {
  if (typeof buffer === 'string')
    buffer = new Buffer(buffer);
  if (!Buffer.isBuffer(buffer))
    throw new TypeError('Not a string or buffer');

  var flushFlag = binding.Z_FINISH;

  return engine._processChunk(buffer, flushFlag);
}

// generic zlib
// minimal 2-byte header
function Deflate(opts) {
  if (!(this instanceof Deflate)) return new Deflate(opts);
  Zlib.call(this, opts, binding.DEFLATE);
}

function Inflate(opts) {
  if (!(this instanceof Inflate)) return new Inflate(opts);
  Zlib.call(this, opts, binding.INFLATE);
}



// gzip - bigger header, same deflate compression
function Gzip(opts) {
  if (!(this instanceof Gzip)) return new Gzip(opts);
  Zlib.call(this, opts, binding.GZIP);
}

function Gunzip(opts) {
  if (!(this instanceof Gunzip)) return new Gunzip(opts);
  Zlib.call(this, opts, binding.GUNZIP);
}



// raw - no header
function DeflateRaw(opts) {
  if (!(this instanceof DeflateRaw)) return new DeflateRaw(opts);
  Zlib.call(this, opts, binding.DEFLATERAW);
}

function InflateRaw(opts) {
  if (!(this instanceof InflateRaw)) return new InflateRaw(opts);
  Zlib.call(this, opts, binding.INFLATERAW);
}


// auto-detect header.
function Unzip(opts) {
  if (!(this instanceof Unzip)) return new Unzip(opts);
  Zlib.call(this, opts, binding.UNZIP);
}


// the Zlib class they all inherit from
// This thing manages the queue of requests, and returns
// true or false if there is anything in the queue when
// you call the .write() method.

function Zlib(opts, mode) {
  this._opts = opts = opts || {};
  this._chunkSize = opts.chunkSize || exports.Z_DEFAULT_CHUNK;

  Transform.call(this, opts);

  if (opts.flush) {
    if (opts.flush !== binding.Z_NO_FLUSH &&
        opts.flush !== binding.Z_PARTIAL_FLUSH &&
        opts.flush !== binding.Z_SYNC_FLUSH &&
        opts.flush !== binding.Z_FULL_FLUSH &&
        opts.flush !== binding.Z_FINISH &&
        opts.flush !== binding.Z_BLOCK) {
      throw new Error('Invalid flush flag: ' + opts.flush);
    }
  }
  this._flushFlag = opts.flush || binding.Z_NO_FLUSH;

  if (opts.chunkSize) {
    if (opts.chunkSize < exports.Z_MIN_CHUNK ||
        opts.chunkSize > exports.Z_MAX_CHUNK) {
      throw new Error('Invalid chunk size: ' + opts.chunkSize);
    }
  }

  if (opts.windowBits) {
    if (opts.windowBits < exports.Z_MIN_WINDOWBITS ||
        opts.windowBits > exports.Z_MAX_WINDOWBITS) {
      throw new Error('Invalid windowBits: ' + opts.windowBits);
    }
  }

  if (opts.level) {
    if (opts.level < exports.Z_MIN_LEVEL ||
        opts.level > exports.Z_MAX_LEVEL) {
      throw new Error('Invalid compression level: ' + opts.level);
    }
  }

  if (opts.memLevel) {
    if (opts.memLevel < exports.Z_MIN_MEMLEVEL ||
        opts.memLevel > exports.Z_MAX_MEMLEVEL) {
      throw new Error('Invalid memLevel: ' + opts.memLevel);
    }
  }

  if (opts.strategy) {
    if (opts.strategy != exports.Z_FILTERED &&
        opts.strategy != exports.Z_HUFFMAN_ONLY &&
        opts.strategy != exports.Z_RLE &&
        opts.strategy != exports.Z_FIXED &&
        opts.strategy != exports.Z_DEFAULT_STRATEGY) {
      throw new Error('Invalid strategy: ' + opts.strategy);
    }
  }

  if (opts.dictionary) {
    if (!Buffer.isBuffer(opts.dictionary)) {
      throw new Error('Invalid dictionary: it should be a Buffer instance');
    }
  }

  this._binding = new binding.Zlib(mode);

  var self = this;
  this._hadError = false;
  this._binding.onerror = function(message, errno) {
    // there is no way to cleanly recover.
    // continuing only obscures problems.
    self._binding = null;
    self._hadError = true;

    var error = new Error(message);
    error.errno = errno;
    error.code = exports.codes[errno];
    self.emit('error', error);
  };

  var level = exports.Z_DEFAULT_COMPRESSION;
  if (typeof opts.level === 'number') level = opts.level;

  var strategy = exports.Z_DEFAULT_STRATEGY;
  if (typeof opts.strategy === 'number') strategy = opts.strategy;

  this._binding.init(opts.windowBits || exports.Z_DEFAULT_WINDOWBITS,
                     level,
                     opts.memLevel || exports.Z_DEFAULT_MEMLEVEL,
                     strategy,
                     opts.dictionary);

  this._buffer = new Buffer(this._chunkSize);
  this._offset = 0;
  this._closed = false;
  this._level = level;
  this._strategy = strategy;

  this.once('end', this.close);
}

util.inherits(Zlib, Transform);

Zlib.prototype.params = function(level, strategy, callback) {
  if (level < exports.Z_MIN_LEVEL ||
      level > exports.Z_MAX_LEVEL) {
    throw new RangeError('Invalid compression level: ' + level);
  }
  if (strategy != exports.Z_FILTERED &&
      strategy != exports.Z_HUFFMAN_ONLY &&
      strategy != exports.Z_RLE &&
      strategy != exports.Z_FIXED &&
      strategy != exports.Z_DEFAULT_STRATEGY) {
    throw new TypeError('Invalid strategy: ' + strategy);
  }

  if (this._level !== level || this._strategy !== strategy) {
    var self = this;
    this.flush(binding.Z_SYNC_FLUSH, function() {
      self._binding.params(level, strategy);
      if (!self._hadError) {
        self._level = level;
        self._strategy = strategy;
        if (callback) callback();
      }
    });
  } else {
    process.nextTick(callback);
  }
};

Zlib.prototype.reset = function() {
  return this._binding.reset();
};

// This is the _flush function called by the transform class,
// internally, when the last chunk has been written.
Zlib.prototype._flush = function(callback) {
  this._transform(new Buffer(0), '', callback);
};

Zlib.prototype.flush = function(kind, callback) {
  var ws = this._writableState;

  if (typeof kind === 'function' || (kind === void 0 && !callback)) {
    callback = kind;
    kind = binding.Z_FULL_FLUSH;
  }

  if (ws.ended) {
    if (callback)
      process.nextTick(callback);
  } else if (ws.ending) {
    if (callback)
      this.once('end', callback);
  } else if (ws.needDrain) {
    var self = this;
    this.once('drain', function() {
      self.flush(callback);
    });
  } else {
    this._flushFlag = kind;
    this.write(new Buffer(0), '', callback);
  }
};

Zlib.prototype.close = function(callback) {
  if (callback)
    process.nextTick(callback);

  if (this._closed)
    return;

  this._closed = true;

  this._binding.close();

  var self = this;
  process.nextTick(function() {
    self.emit('close');
  });
};

Zlib.prototype._transform = function(chunk, encoding, cb) {
  var flushFlag;
  var ws = this._writableState;
  var ending = ws.ending || ws.ended;
  var last = ending && (!chunk || ws.length === chunk.length);

  if (!chunk === null && !Buffer.isBuffer(chunk))
    return cb(new Error('invalid input'));

  // If it's the last chunk, or a final flush, we use the Z_FINISH flush flag.
  // If it's explicitly flushing at some other time, then we use
  // Z_FULL_FLUSH. Otherwise, use Z_NO_FLUSH for maximum compression
  // goodness.
  if (last)
    flushFlag = binding.Z_FINISH;
  else {
    flushFlag = this._flushFlag;
    // once we've flushed the last of the queue, stop flushing and
    // go back to the normal behavior.
    if (chunk.length >= ws.length) {
      this._flushFlag = this._opts.flush || binding.Z_NO_FLUSH;
    }
  }

  var self = this;
  this._processChunk(chunk, flushFlag, cb);
};

Zlib.prototype._processChunk = function(chunk, flushFlag, cb) {
  var availInBefore = chunk && chunk.length;
  var availOutBefore = this._chunkSize - this._offset;
  var inOff = 0;

  var self = this;

  var async = typeof cb === 'function';

  if (!async) {
    var buffers = [];
    var nread = 0;

    var error;
    this.on('error', function(er) {
      error = er;
    });

    do {
      var res = this._binding.writeSync(flushFlag,
                                        chunk, // in
                                        inOff, // in_off
                                        availInBefore, // in_len
                                        this._buffer, // out
                                        this._offset, //out_off
                                        availOutBefore); // out_len
    } while (!this._hadError && callback(res[0], res[1]));

    if (this._hadError) {
      throw error;
    }

    var buf = Buffer.concat(buffers, nread);
    this.close();

    return buf;
  }

  var req = this._binding.write(flushFlag,
                                chunk, // in
                                inOff, // in_off
                                availInBefore, // in_len
                                this._buffer, // out
                                this._offset, //out_off
                                availOutBefore); // out_len

  req.buffer = chunk;
  req.callback = callback;

  function callback(availInAfter, availOutAfter) {
    if (self._hadError)
      return;

    var have = availOutBefore - availOutAfter;
    assert(have >= 0, 'have should not go down');

    if (have > 0) {
      var out = self._buffer.slice(self._offset, self._offset + have);
      self._offset += have;
      // serve some output to the consumer.
      if (async) {
        self.push(out);
      } else {
        buffers.push(out);
        nread += out.length;
      }
    }

    // exhausted the output buffer, or used all the input create a new one.
    if (availOutAfter === 0 || self._offset >= self._chunkSize) {
      availOutBefore = self._chunkSize;
      self._offset = 0;
      self._buffer = new Buffer(self._chunkSize);
    }

    if (availOutAfter === 0) {
      // Not actually done.  Need to reprocess.
      // Also, update the availInBefore to the availInAfter value,
      // so that if we have to hit it a third (fourth, etc.) time,
      // it'll have the correct byte counts.
      inOff += (availInBefore - availInAfter);
      availInBefore = availInAfter;

      if (!async)
        return true;

      var newReq = self._binding.write(flushFlag,
                                       chunk,
                                       inOff,
                                       availInBefore,
                                       self._buffer,
                                       self._offset,
                                       self._chunkSize);
      newReq.callback = callback; // this same function
      newReq.buffer = chunk;
      return;
    }

    if (!async)
      return false;

    // finished with the chunk.
    cb();
  }
};

util.inherits(Deflate, Zlib);
util.inherits(Inflate, Zlib);
util.inherits(Gzip, Zlib);
util.inherits(Gunzip, Zlib);
util.inherits(DeflateRaw, Zlib);
util.inherits(InflateRaw, Zlib);
util.inherits(Unzip, Zlib);

}).call(this,require('_process'),require("buffer").Buffer)
},{"./binding":51,"_process":59,"_stream_transform":70,"assert":37,"buffer":53,"util":74}],53:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
var TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str.toString()
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.compare = function (a, b) {
  assert(Buffer.isBuffer(a) && Buffer.isBuffer(b), 'Arguments must be Buffers')
  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) {
    return -1
  }
  if (y < x) {
    return 1
  }
  return 0
}

// BUFFER INSTANCE METHODS
// =======================

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end === undefined) ? self.length : Number(end)

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = asciiSlice(self, start, end)
      break
    case 'binary':
      ret = binarySlice(self, start, end)
      break
    case 'base64':
      ret = base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

Buffer.prototype.equals = function (b) {
  assert(Buffer.isBuffer(b), 'Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.compare = function (b) {
  assert(Buffer.isBuffer(b), 'Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return readUInt16(this, offset, false, noAssert)
}

function readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return readInt16(this, offset, false, noAssert)
}

function readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return readInt32(this, offset, false, noAssert)
}

function readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return readFloat(this, offset, false, noAssert)
}

function readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
  return offset + 1
}

function writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
  return offset + 2
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  return writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  return writeUInt16(this, value, offset, false, noAssert)
}

function writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
  return offset + 4
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  return writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  return writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
  return offset + 1
}

function writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
  return offset + 2
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  return writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  return writeInt16(this, value, offset, false, noAssert)
}

function writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
  return offset + 4
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  return writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  return writeInt32(this, value, offset, false, noAssert)
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

},{"base64-js":54,"ieee754":55}],54:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],55:[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],56:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        throw TypeError('Uncaught, unspecified "error" event.');
      }
      return false;
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],57:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],58:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],59:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],60:[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":61}],61:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

module.exports = Duplex;

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
/*</replacement>*/


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

forEach(objectKeys(Writable.prototype), function(method) {
  if (!Duplex.prototype[method])
    Duplex.prototype[method] = Writable.prototype[method];
});

function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false)
    this.readable = false;

  if (options && options.writable === false)
    this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended)
    return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  process.nextTick(this.end.bind(this));
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

}).call(this,require('_process'))
},{"./_stream_readable":63,"./_stream_writable":65,"_process":59,"core-util-is":66,"inherits":57}],62:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};

},{"./_stream_transform":64,"core-util-is":66,"inherits":57}],63:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/


/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;

/*<replacement>*/
if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

var Stream = require('stream');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var StringDecoder;

util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  options = options || {};

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = false;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // In streams that never have any data, and do push(null) right away,
  // the consumer can miss the 'end' event if they do some I/O before
  // consuming the stream.  So, we don't emit('end') until some reading
  // happens.
  this.calledRead = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;


  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder)
      StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  if (!(this instanceof Readable))
    return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
  var state = this._readableState;

  if (typeof chunk === 'string' && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null || chunk === undefined) {
    state.reading = false;
    if (!state.ended)
      onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding)
        chunk = state.decoder.write(chunk);

      // update the buffer info.
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront) {
        state.buffer.unshift(chunk);
      } else {
        state.reading = false;
        state.buffer.push(chunk);
      }

      if (state.needReadable)
        emitReadable(stream);

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}



// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended &&
         (state.needReadable ||
          state.length < state.highWaterMark ||
          state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
  if (!StringDecoder)
    StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
};

// Don't raise the hwm > 128MB
var MAX_HWM = 0x800000;
function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended)
    return 0;

  if (state.objectMode)
    return n === 0 ? 0 : 1;

  if (isNaN(n) || n === null) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length)
      return state.buffer[0].length;
    else
      return state.length;
  }

  if (n <= 0)
    return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark)
    state.highWaterMark = roundUpToNextPowerOf2(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else
      return state.length;
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
  var state = this._readableState;
  state.calledRead = true;
  var nOrig = n;

  if (typeof n !== 'number' || n > 0)
    state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 &&
      state.needReadable &&
      (state.length >= state.highWaterMark || state.ended)) {
    emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0)
      endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;

  // if we currently have less than the highWaterMark, then also read some
  if (state.length - n <= state.highWaterMark)
    doRead = true;

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading)
    doRead = false;

  if (doRead) {
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0)
      state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read called its callback synchronously, then `reading`
  // will be false, and we need to re-evaluate how much data we
  // can return to the user.
  if (doRead && !state.reading)
    n = howMuchToRead(nOrig, state);

  var ret;
  if (n > 0)
    ret = fromList(n, state);
  else
    ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended)
    state.needReadable = true;

  // If we happened to read() exactly the remaining amount in the
  // buffer, and the EOF has been seen at this point, then make sure
  // that we emit 'end' on the very next tick.
  if (state.ended && !state.endEmitted && state.length === 0)
    endReadable(this);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode &&
      !er) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}


function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // if we've ended and we have some data left, then emit
  // 'readable' now to make sure it gets picked up.
  if (state.length > 0)
    emitReadable(stream);
  else
    endReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (state.emittedReadable)
    return;

  state.emittedReadable = true;
  if (state.sync)
    process.nextTick(function() {
      emitReadable_(stream);
    });
  else
    emitReadable_(stream);
}

function emitReadable_(stream) {
  stream.emit('readable');
}


// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function() {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended &&
         state.length < state.highWaterMark) {
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function(dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;

  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
              dest !== process.stdout &&
              dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted)
    process.nextTick(endFn);
  else
    src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    if (readable !== src) return;
    cleanup();
  }

  function onend() {
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (!dest._writableState || dest._writableState.needDrain)
      ondrain();
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0)
      dest.emit('error', er);
  }
  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.
  if (!dest._events || !dest._events.error)
    dest.on('error', onerror);
  else if (isArray(dest._events.error))
    dest._events.error.unshift(onerror);
  else
    dest._events.error = [onerror, dest._events.error];



  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    // the handler that waits for readable events after all
    // the data gets sucked out in flow.
    // This would be easier to follow with a .once() handler
    // in flow(), but that is too slow.
    this.on('readable', pipeOnReadable);

    state.flowing = true;
    process.nextTick(function() {
      flow(src);
    });
  }

  return dest;
};

function pipeOnDrain(src) {
  return function() {
    var dest = this;
    var state = src._readableState;
    state.awaitDrain--;
    if (state.awaitDrain === 0)
      flow(src);
  };
}

function flow(src) {
  var state = src._readableState;
  var chunk;
  state.awaitDrain = 0;

  function write(dest, i, list) {
    var written = dest.write(chunk);
    if (false === written) {
      state.awaitDrain++;
    }
  }

  while (state.pipesCount && null !== (chunk = src.read())) {

    if (state.pipesCount === 1)
      write(state.pipes, 0, null);
    else
      forEach(state.pipes, write);

    src.emit('data', chunk);

    // if anyone needs a drain, then we have to wait for that.
    if (state.awaitDrain > 0)
      return;
  }

  // if every destination was unpiped, either before entering this
  // function, or in the while loop, then stop flowing.
  //
  // NB: This is a pretty rare edge case.
  if (state.pipesCount === 0) {
    state.flowing = false;

    // if there were data event listeners added, then switch to old mode.
    if (EE.listenerCount(src, 'data') > 0)
      emitDataEvents(src);
    return;
  }

  // at this point, no one needed a drain, so we just ran out of data
  // on the next readable event, start it over again.
  state.ranOut = true;
}

function pipeOnReadable() {
  if (this._readableState.ranOut) {
    this._readableState.ranOut = false;
    flow(this);
  }
}


Readable.prototype.unpipe = function(dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0)
    return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes)
      return this;

    if (!dest)
      dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;
    if (dest)
      dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;

    for (var i = 0; i < len; i++)
      dests[i].emit('unpipe', this);
    return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1)
    return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1)
    state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data' && !this._readableState.flowing)
    emitDataEvents(this);

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        this.read(0);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
  emitDataEvents(this);
  this.read(0);
  this.emit('resume');
};

Readable.prototype.pause = function() {
  emitDataEvents(this, true);
  this.emit('pause');
};

function emitDataEvents(stream, startPaused) {
  var state = stream._readableState;

  if (state.flowing) {
    // https://github.com/isaacs/readable-stream/issues/16
    throw new Error('Cannot switch to old mode now.');
  }

  var paused = startPaused || false;
  var readable = false;

  // convert to an old-style stream.
  stream.readable = true;
  stream.pipe = Stream.prototype.pipe;
  stream.on = stream.addListener = Stream.prototype.on;

  stream.on('readable', function() {
    readable = true;

    var c;
    while (!paused && (null !== (c = stream.read())))
      stream.emit('data', c);

    if (c === null) {
      readable = false;
      stream._readableState.needReadable = true;
    }
  });

  stream.pause = function() {
    paused = true;
    this.emit('pause');
  };

  stream.resume = function() {
    paused = false;
    if (readable)
      process.nextTick(function() {
        stream.emit('readable');
      });
    else
      this.read(0);
    this.emit('resume');
  };

  // now make it start, just in case it hadn't already.
  stream.emit('readable');
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function() {
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length)
        self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function(chunk) {
    if (state.decoder)
      chunk = state.decoder.write(chunk);
    if (!chunk || !state.objectMode && !chunk.length)
      return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (typeof stream[i] === 'function' &&
        typeof this[i] === 'undefined') {
      this[i] = function(method) { return function() {
        return stream[method].apply(stream, arguments);
      }}(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function(ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function(n) {
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};



// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0)
    return null;

  if (length === 0)
    ret = null;
  else if (objectMode)
    ret = list.shift();
  else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode)
      ret = list.join('');
    else
      ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode)
        ret = '';
      else
        ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode)
          ret += buf.slice(0, cpy);
        else
          buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length)
          list[0] = buf.slice(cpy);
        else
          list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0)
    throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted && state.calledRead) {
    state.ended = true;
    process.nextTick(function() {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf (xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

}).call(this,require('_process'))
},{"_process":59,"buffer":53,"core-util-is":66,"events":56,"inherits":57,"isarray":58,"stream":72,"string_decoder/":67}],64:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);


function TransformState(options, stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb)
    return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined)
    stream.push(data);

  if (cb)
    cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}


function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);

  Duplex.call(this, options);

  var ts = this._transformState = new TransformState(options, this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  this.once('finish', function() {
    if ('function' === typeof this._flush)
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}

Transform.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform ||
        rs.needReadable ||
        rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};


function done(stream, er) {
  if (er)
    return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var rs = stream._readableState;
  var ts = stream._transformState;

  if (ws.length)
    throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming)
    throw new Error('calling transform done when still transforming');

  return stream.push(null);
}

},{"./_stream_duplex":61,"core-util-is":66,"inherits":57}],65:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.

module.exports = Writable;

/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Writable.WritableState = WritableState;


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/


var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  options = options || {};

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function(er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.buffer = [];

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};


function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  process.nextTick(function() {
    cb(er);
  });
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function() {
      cb(er);
    });
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function(chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  else if (!encoding)
    encoding = state.defaultEncoding;

  if (typeof cb !== 'function')
    cb = function() {};

  if (state.ended)
    writeAfterEnd(this, state, cb);
  else if (validChunk(this, state, chunk, cb))
    ret = writeOrBuffer(this, state, chunk, encoding, cb);

  return ret;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode &&
      state.decodeStrings !== false &&
      typeof chunk === 'string') {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret)
    state.needDrain = true;

  if (state.writing)
    state.buffer.push(new WriteReq(chunk, encoding, cb));
  else
    doWrite(stream, state, len, chunk, encoding, cb);

  return ret;
}

function doWrite(stream, state, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync)
    process.nextTick(function() {
      cb(er);
    });
  else
    cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(stream, state);

    if (!finished && !state.bufferProcessing && state.buffer.length)
      clearBuffer(stream, state);

    if (sync) {
      process.nextTick(function() {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  cb();
  if (finished)
    finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}


// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  for (var c = 0; c < state.buffer.length; c++) {
    var entry = state.buffer[c];
    var chunk = entry.chunk;
    var encoding = entry.encoding;
    var cb = entry.callback;
    var len = state.objectMode ? 1 : chunk.length;

    doWrite(stream, state, len, chunk, encoding, cb);

    // if we didn't call the onwrite immediately, then
    // it means that we need to wait until it does.
    // also, that means that the chunk and cb are currently
    // being processed, so move the buffer counter past them.
    if (state.writing) {
      c++;
      break;
    }
  }

  state.bufferProcessing = false;
  if (c < state.buffer.length)
    state.buffer = state.buffer.slice(c);
  else
    state.buffer.length = 0;
}

Writable.prototype._write = function(chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype.end = function(chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (typeof chunk !== 'undefined' && chunk !== null)
    this.write(chunk, encoding);

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished)
    endWritable(this, state, cb);
};


function needFinish(stream, state) {
  return (state.ending &&
          state.length === 0 &&
          !state.finished &&
          !state.writing);
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);
  if (need) {
    state.finished = true;
    stream.emit('finish');
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      process.nextTick(cb);
    else
      stream.once('finish', cb);
  }
  state.ended = true;
}

}).call(this,require('_process'))
},{"./_stream_duplex":61,"_process":59,"buffer":53,"core-util-is":66,"inherits":57,"stream":72}],66:[function(require,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

function isBuffer(arg) {
  return Buffer.isBuffer(arg);
}
exports.isBuffer = isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}
}).call(this,require("buffer").Buffer)
},{"buffer":53}],67:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  this.charBuffer = new Buffer(6);
  this.charReceived = 0;
  this.charLength = 0;
};


StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  var offset = 0;

  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var i = (buffer.length >= this.charLength - this.charReceived) ?
                this.charLength - this.charReceived :
                buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, offset, i);
    this.charReceived += (i - offset);
    offset = i;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (i == buffer.length) return charStr;

    // otherwise cut off the characters end from the beginning of this buffer
    buffer = buffer.slice(i, buffer.length);
    break;
  }

  var lenIncomplete = this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - lenIncomplete, end);
    this.charReceived = lenIncomplete;
    end -= lenIncomplete;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    this.charBuffer.write(charStr.charAt(charStr.length - 1), this.encoding);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }

  return i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  var incomplete = this.charReceived = buffer.length % 2;
  this.charLength = incomplete ? 2 : 0;
  return incomplete;
}

function base64DetectIncompleteChar(buffer) {
  var incomplete = this.charReceived = buffer.length % 3;
  this.charLength = incomplete ? 3 : 0;
  return incomplete;
}

},{"buffer":53}],68:[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":62}],69:[function(require,module,exports){
exports = module.exports = require('./lib/_stream_readable.js');
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":61,"./lib/_stream_passthrough.js":62,"./lib/_stream_readable.js":63,"./lib/_stream_transform.js":64,"./lib/_stream_writable.js":65}],70:[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":64}],71:[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":65}],72:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":56,"inherits":57,"readable-stream/duplex.js":60,"readable-stream/passthrough.js":68,"readable-stream/readable.js":69,"readable-stream/transform.js":70,"readable-stream/writable.js":71}],73:[function(require,module,exports){
module.exports=require(38)
},{}],74:[function(require,module,exports){
module.exports=require(39)
},{"./support/isBuffer":73,"_process":59,"inherits":57}],75:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
var UnicodeTrie,
  __slice = [].slice;

UnicodeTrie = (function() {
  var DATA_BLOCK_LENGTH, DATA_GRANULARITY, DATA_MASK, INDEX_1_OFFSET, INDEX_2_BLOCK_LENGTH, INDEX_2_BMP_LENGTH, INDEX_2_MASK, INDEX_SHIFT, LSCP_INDEX_2_LENGTH, LSCP_INDEX_2_OFFSET, OMITTED_BMP_INDEX_1_LENGTH, SHIFT_1, SHIFT_1_2, SHIFT_2, UTF8_2B_INDEX_2_LENGTH, UTF8_2B_INDEX_2_OFFSET;

  SHIFT_1 = 6 + 5;

  SHIFT_2 = 5;

  SHIFT_1_2 = SHIFT_1 - SHIFT_2;

  OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> SHIFT_1;

  INDEX_2_BLOCK_LENGTH = 1 << SHIFT_1_2;

  INDEX_2_MASK = INDEX_2_BLOCK_LENGTH - 1;

  INDEX_SHIFT = 2;

  DATA_BLOCK_LENGTH = 1 << SHIFT_2;

  DATA_MASK = DATA_BLOCK_LENGTH - 1;

  LSCP_INDEX_2_OFFSET = 0x10000 >> SHIFT_2;

  LSCP_INDEX_2_LENGTH = 0x400 >> SHIFT_2;

  INDEX_2_BMP_LENGTH = LSCP_INDEX_2_OFFSET + LSCP_INDEX_2_LENGTH;

  UTF8_2B_INDEX_2_OFFSET = INDEX_2_BMP_LENGTH;

  UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6;

  INDEX_1_OFFSET = UTF8_2B_INDEX_2_OFFSET + UTF8_2B_INDEX_2_LENGTH;

  DATA_GRANULARITY = 1 << INDEX_SHIFT;

  function UnicodeTrie(json) {
    var _ref, _ref1;
    if (json == null) {
      json = {};
    }
    this.data = json.data || [];
    this.highStart = (_ref = json.highStart) != null ? _ref : 0;
    this.errorValue = (_ref1 = json.errorValue) != null ? _ref1 : -1;
  }

  UnicodeTrie.prototype.get = function(codePoint) {
    var index;
    if (codePoint < 0 || codePoint > 0x10ffff) {
      return this.errorValue;
    }
    if (codePoint < 0xd800 || (codePoint > 0xdbff && codePoint <= 0xffff)) {
      index = (this.data[codePoint >> SHIFT_2] << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    if (codePoint <= 0xffff) {
      index = (this.data[LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> SHIFT_2)] << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    if (codePoint < this.highStart) {
      index = this.data[(INDEX_1_OFFSET - OMITTED_BMP_INDEX_1_LENGTH) + (codePoint >> SHIFT_1)];
      index = this.data[index + ((codePoint >> SHIFT_2) & INDEX_2_MASK)];
      index = (index << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    return this.data[this.data.length - DATA_GRANULARITY];
  };

  UnicodeTrie.prototype.toJSON = function() {
    var res;
    res = {
      data: __slice.call(this.data),
      highStart: this.highStart,
      errorValue: this.errorValue
    };
    return res;
  };

  return UnicodeTrie;

})();

module.exports = UnicodeTrie;

},{}],76:[function(require,module,exports){
module.exports={"data":[1961,1969,1977,1985,2025,2033,2041,2049,2057,2065,2073,2081,2089,2097,2105,2113,2121,2129,2137,2145,2153,2161,2169,2177,2185,2193,2201,2209,2217,2225,2233,2241,2249,2257,2265,2273,2281,2289,2297,2305,2313,2321,2329,2337,2345,2353,2361,2369,2377,2385,2393,2401,2409,2417,2425,2433,2441,2449,2457,2465,2473,2481,2489,2497,2505,2513,2521,2529,2529,2537,2009,2545,2553,2561,2569,2577,2585,2593,2601,2609,2617,2625,2633,2641,2649,2657,2665,2673,2681,2689,2697,2705,2713,2721,2729,2737,2745,2753,2761,2769,2777,2785,2793,2801,2809,2817,2825,2833,2841,2849,2857,2865,2873,2881,2889,2009,2897,2905,2913,2009,2921,2929,2937,2945,2953,2961,2969,2009,2977,2977,2985,2993,3001,3009,3009,3009,3017,3017,3017,3025,3025,3033,3041,3041,3049,3049,3049,3049,3049,3049,3049,3049,3049,3049,3057,3065,3073,3073,3073,3081,3089,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3105,3113,3113,3121,3129,3137,3145,3153,3161,3161,3169,3177,3185,3193,3193,3193,3193,3201,3209,3209,3217,3225,3233,3241,3241,3241,3249,3257,3265,3273,3273,3281,3289,3297,2009,2009,3305,3313,3321,3329,3337,3345,3353,3361,3369,3377,3385,3393,2009,2009,3401,3409,3417,3417,3417,3417,3417,3417,3425,3425,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3441,3449,3457,3465,3473,3481,3489,3497,3505,3513,3521,3529,3537,3545,3553,3561,3569,3577,3585,3593,3601,3609,3617,3625,3625,3633,3641,3649,3649,3649,3649,3649,3657,3665,3665,3673,3681,3681,3681,3681,3689,3697,3697,3705,3713,3721,3729,3737,3745,3753,3761,3769,3777,3785,3793,3801,3809,3817,3825,3833,3841,3849,3857,3865,3873,3881,3881,3881,3881,3881,3881,3881,3881,3881,3881,3881,3881,3889,3897,3905,3913,3921,3921,3921,3921,3921,3921,3921,3921,3921,3921,3929,2009,2009,2009,2009,2009,3937,3937,3937,3937,3937,3937,3937,3945,3953,3953,3953,3961,3969,3969,3977,3985,3993,4001,2009,2009,4009,4009,4009,4009,4009,4009,4009,4009,4009,4009,4009,4009,4017,4025,4033,4041,4049,4057,4065,4073,4081,4081,4081,4081,4081,4081,4081,4089,4097,4097,4105,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4121,4121,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4137,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4153,4161,4169,4169,4169,4169,4169,4169,4169,4169,4177,4185,4193,4201,4209,4217,4217,4225,4233,4233,4233,4233,4233,4233,4233,4233,4241,4249,4257,4265,4273,4281,4289,4297,4305,4313,4321,4329,4337,4345,4353,4361,4361,4369,4377,4385,4385,4385,4385,4393,4401,4409,4409,4409,4409,4409,4409,4417,4425,4433,4441,4449,4457,4465,4473,4481,4489,4497,4505,4513,4521,4529,4537,4545,4553,4561,4569,4577,4585,4593,4601,4609,4617,4625,4633,4641,4649,4657,4665,4673,4681,4689,4697,4705,4713,4721,4729,4737,4745,4753,4761,4769,4777,4785,4793,4801,4809,4817,4825,4833,4841,4849,4857,4865,4873,4881,4889,4897,4905,4913,4921,4929,4937,4945,4953,4961,4969,4977,4985,4993,5001,5009,5017,5025,5033,5041,5049,5057,5065,5073,5081,5089,5097,5105,5113,5121,5129,5137,5145,5153,5161,5169,5177,5185,5193,5201,5209,5217,5225,5233,5241,5249,5257,5265,5273,5281,5289,5297,5305,5313,5321,5329,5337,5345,5353,5361,5369,5377,5385,5393,5401,5409,5417,5425,5433,5441,5449,5457,5465,5473,5481,5489,5497,5505,5513,5521,5529,5537,5545,5553,5561,5569,5577,5585,5593,5601,5609,5617,5625,5633,5641,5649,5657,5665,5673,5681,5689,5697,5705,5713,5721,5729,5737,5745,5753,5761,5769,5777,5785,5793,5801,5809,5817,5825,5833,5841,5849,5857,5865,5873,5881,5889,5897,5905,5913,5921,5929,5937,5945,5953,5961,5969,5977,5985,5993,6001,6009,6017,6025,6033,6041,6049,6057,6065,6073,6081,6089,6097,6105,6113,6121,6129,6137,6145,6153,6161,6169,6177,6185,6193,6201,6209,6217,6225,6233,6241,6249,6257,6265,6273,6281,6289,6297,6305,6313,6321,6329,6337,6345,6353,6361,6369,6377,6385,6393,6401,6409,6417,6425,6433,6441,6449,6457,6465,6473,6481,6489,6497,6505,6513,6521,6529,6537,6545,6553,6561,6569,6577,6585,6593,6601,6609,6617,6625,6633,6641,6649,6657,6665,6673,6681,6689,6697,6705,6713,6721,6729,6737,6745,6753,6761,6769,6777,6785,6793,6801,6809,6817,6825,6833,6841,6849,6857,6865,6873,6881,6889,6897,6905,6913,6921,6929,6937,6945,6953,6961,6969,6977,6985,6993,7001,7009,7017,7025,7033,7041,7049,7057,7065,7073,7081,7089,7097,7105,7113,7121,7129,7137,7145,7153,7161,7169,7177,7185,7193,7201,7209,7217,7225,7233,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7257,7265,7273,7281,7281,7281,7281,7281,7281,7281,7281,7281,7281,7281,7281,7281,7281,7289,7297,7305,7305,7305,7305,7313,7321,7329,7337,7345,7353,7353,7353,7361,7369,7377,7385,7393,7401,7409,7417,7425,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7972,7972,8100,8164,8228,8292,8356,8420,8484,8548,8612,8676,8740,8804,8868,8932,8996,9060,9124,9188,9252,9316,9380,9444,9508,9572,9636,9700,9764,9828,9892,9956,2593,2657,2721,2529,2785,2529,2849,2913,2977,3041,3105,3169,3233,3297,2529,2529,2529,2529,2529,2529,2529,2529,3361,2529,2529,2529,3425,2529,2529,3489,3553,2529,3617,3681,3745,3809,3873,3937,4001,4065,4129,4193,4257,4321,4385,4449,4513,4577,4641,4705,4769,4833,4897,4961,5025,5089,5153,5217,5281,5345,5409,5473,5537,5601,5665,5729,5793,5857,5921,5985,6049,6113,6177,6241,6305,6369,6433,6497,6561,6625,6689,6753,6817,6881,6945,7009,7073,7137,7201,7265,7329,7393,7457,7521,7585,7649,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,7713,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7433,7433,7433,7433,7433,7433,7433,7441,7449,7457,7457,7457,7457,7457,7457,7465,2009,2009,2009,2009,7473,7473,7473,7473,7473,7473,7473,7473,7481,7489,7497,7505,7505,7505,7505,7505,7513,7521,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7529,7529,7537,7545,7545,7545,7545,7545,7553,7561,7561,7561,7561,7561,7561,7561,7569,7577,7585,7593,7593,7593,7593,7593,7593,7601,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7617,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7625,7633,7641,7649,7657,7665,7673,7681,7689,7697,7705,2009,7713,7721,7729,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7737,7745,7753,2009,2009,2009,2009,2009,2009,2009,2009,2009,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7769,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7785,7793,7801,7809,7809,7809,7809,7809,7809,7817,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7833,7841,7849,2009,2009,2009,7857,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7865,7865,7865,7865,7865,7865,7865,7865,7865,7865,7865,7873,7881,7889,7897,7897,7897,7897,7905,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7921,7929,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7937,7937,7937,7937,7937,7937,7937,7945,2009,2009,2009,2009,2009,2009,2009,2009,7953,7953,7953,7953,7953,7953,7953,2009,7961,7969,7977,7985,7993,2009,2009,8001,8009,8009,8009,8009,8009,8009,8009,8009,8009,8009,8009,8009,8009,8017,8025,8025,8025,8025,8025,8025,8025,8033,8041,8049,8057,8065,8073,8081,8081,8081,8081,8081,8081,8081,8081,8081,8081,8081,8089,2009,8097,8097,8097,8105,2009,2009,2009,2009,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8121,8129,8137,8137,8137,8137,8137,8137,8137,8137,8137,8137,8137,8137,8137,8137,8145,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,67496,67496,67496,21,21,21,21,21,21,21,21,21,17,34,30,30,33,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,38,6,3,12,9,10,12,3,0,2,12,9,8,16,8,7,11,11,11,11,11,11,11,11,11,11,8,8,12,12,12,6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,9,2,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,17,1,12,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,21,21,35,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,4,0,10,9,9,9,12,29,29,12,29,3,12,17,12,12,10,9,29,29,18,12,29,29,29,29,29,3,29,29,29,0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,18,29,29,29,18,29,12,12,29,12,12,12,12,12,12,12,29,29,29,29,12,29,12,18,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,4,21,21,21,21,21,21,21,21,21,21,21,21,4,4,4,4,4,4,4,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,8,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,8,17,39,39,39,39,9,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,17,21,12,21,21,12,21,21,6,21,39,39,39,39,39,39,39,39,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,10,10,10,8,8,12,12,21,21,21,21,21,21,21,21,21,21,21,6,6,6,6,6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,11,11,11,11,11,11,11,11,11,11,10,11,11,12,12,12,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,6,12,21,21,21,21,21,21,21,12,12,21,21,21,21,21,21,12,12,21,21,12,21,21,21,21,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,12,39,39,39,39,39,39,39,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,12,12,12,12,8,6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,12,21,21,21,21,21,21,21,21,21,12,21,21,21,12,21,21,21,21,21,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,21,21,17,17,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,21,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,39,39,39,39,39,39,39,39,21,39,39,39,39,12,12,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,12,12,10,10,12,12,12,12,12,10,12,9,39,39,39,39,39,21,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,12,12,12,12,12,12,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,21,21,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,12,9,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,12,12,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,12,39,39,39,39,39,39,21,39,39,39,39,39,39,39,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,9,12,39,39,39,39,39,39,21,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,12,12,12,12,12,12,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,39,39,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,39,12,12,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,39,39,39,39,39,39,39,39,21,39,39,39,39,39,39,39,39,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,39,39,39,10,12,12,12,12,12,12,39,39,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,39,39,39,39,39,39,39,39,39,39,39,39,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,39,39,39,39,9,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,12,11,11,11,11,11,11,11,11,11,11,17,17,39,39,39,39,39,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,39,39,11,11,11,11,11,11,11,11,11,11,39,39,36,36,36,36,12,18,18,18,18,12,18,18,4,18,18,17,4,6,6,6,6,6,4,12,6,12,12,12,21,21,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,17,21,12,21,12,21,0,1,0,1,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,17,21,21,21,21,21,17,21,21,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,17,17,12,12,12,12,12,12,21,12,12,12,12,12,12,12,12,12,18,18,17,18,12,12,12,12,12,4,4,39,39,39,39,39,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,11,11,11,11,11,11,11,11,11,11,17,17,12,12,12,12,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,11,11,11,11,11,11,11,11,11,11,36,36,36,36,36,36,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,21,21,12,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,17,17,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,21,21,39,39,39,39,39,39,39,39,39,39,39,39,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,17,17,5,36,17,12,17,9,36,36,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,6,6,17,17,18,12,6,6,12,21,21,21,4,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,12,39,39,39,6,6,11,11,11,11,11,11,11,11,11,11,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,36,36,36,36,36,36,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,39,39,12,12,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,39,39,21,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,36,36,36,36,36,36,36,36,36,36,36,36,36,36,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,39,39,39,39,11,11,11,11,11,11,11,11,11,11,17,17,12,17,17,17,17,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,39,39,39,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,17,17,17,17,17,11,11,11,11,11,11,11,11,11,11,39,39,39,12,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,17,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,21,21,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,21,12,12,12,12,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,18,12,39,17,17,17,17,17,17,17,4,17,17,17,20,21,21,21,21,17,4,17,17,19,29,29,12,3,3,0,3,3,3,0,3,29,29,12,12,15,15,15,17,30,30,21,21,21,21,21,4,10,10,10,10,10,10,10,10,12,3,3,29,5,5,12,12,12,12,12,12,8,0,1,5,5,5,12,12,12,12,12,12,12,12,12,12,12,12,17,12,17,17,17,17,12,17,17,17,22,12,12,12,12,39,39,39,39,39,21,21,21,21,21,21,12,12,39,39,29,12,12,12,12,12,12,12,12,0,1,29,12,29,29,29,29,12,12,12,12,12,12,12,12,0,1,39,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,9,9,9,9,9,9,9,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,9,9,9,9,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,10,12,29,12,12,12,10,12,12,12,12,12,12,12,12,12,29,12,12,9,12,12,12,12,12,12,12,12,12,12,29,29,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,12,12,12,12,12,29,12,12,29,12,29,29,29,29,29,29,29,29,29,29,29,29,12,12,12,12,29,29,29,29,29,29,29,29,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,29,29,12,12,12,29,29,12,12,29,12,12,12,29,12,29,9,9,12,29,12,12,12,12,29,12,12,29,29,29,29,12,12,29,12,29,12,29,29,29,29,29,29,12,29,12,12,12,12,12,29,29,29,29,12,12,12,12,29,29,12,12,12,12,12,12,12,12,12,12,29,12,12,12,29,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,12,12,29,29,29,29,12,12,29,29,12,12,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,12,12,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,14,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,12,12,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,12,12,12,12,12,12,12,12,12,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,29,29,29,29,12,12,12,12,12,12,12,12,12,12,29,29,12,29,29,29,29,29,29,29,12,12,12,12,12,12,12,12,29,29,12,12,29,29,12,12,12,12,29,29,12,12,29,29,12,12,12,12,29,29,29,12,12,29,12,12,29,29,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,29,29,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,14,12,29,29,12,12,29,12,12,12,12,29,29,12,12,12,12,14,14,29,29,14,12,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,12,12,12,12,29,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,12,29,29,29,12,29,14,29,29,12,29,29,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,14,14,14,14,14,14,14,14,14,29,29,29,29,14,12,14,14,14,29,14,14,29,29,29,14,14,29,29,14,29,29,14,14,14,12,29,12,12,12,12,29,29,14,29,29,29,29,29,29,14,14,14,14,14,29,14,14,14,14,29,29,14,14,14,14,14,14,14,14,12,12,12,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,3,3,3,3,12,12,12,6,6,12,12,12,12,0,1,0,1,0,1,0,1,0,1,0,1,0,1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,0,1,0,1,0,1,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,29,29,29,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,12,12,39,39,39,39,39,6,17,17,17,12,6,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,3,3,3,3,3,3,3,3,3,3,3,3,3,3,17,17,17,17,17,17,17,17,12,17,0,17,12,12,3,3,12,12,3,3,0,1,0,1,0,1,0,1,17,17,17,17,6,12,17,17,12,17,17,12,12,12,12,12,19,19,39,39,39,39,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,1,1,14,14,5,14,14,0,1,0,1,0,1,0,1,0,1,14,14,0,1,0,1,0,1,0,1,5,0,1,1,14,14,14,14,14,14,14,14,14,14,21,21,21,21,21,21,14,14,14,14,14,14,14,14,14,14,14,5,5,14,14,14,39,32,14,32,14,32,14,32,14,32,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,32,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,32,14,32,14,32,14,14,14,14,14,14,32,14,14,14,14,14,14,32,32,39,39,21,21,5,5,5,5,14,5,32,14,32,14,32,14,32,14,32,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,32,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,32,14,32,14,32,14,14,14,14,14,14,32,14,14,14,14,14,14,32,32,14,14,14,14,5,32,5,5,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,39,39,39,39,39,39,39,39,39,39,39,39,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,29,29,29,29,29,29,29,29,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,5,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,6,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,12,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,12,17,17,17,17,17,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,12,12,12,21,12,12,12,12,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,18,18,6,6,39,39,39,39,39,39,39,39,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,17,17,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,39,39,39,39,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,39,39,12,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,39,39,39,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,17,17,17,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,12,12,12,21,12,12,12,12,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,39,39,12,17,17,17,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,17,17,12,12,12,21,21,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,17,21,21,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,39,39,39,39,39,39,39,39,39,39,39,39,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,39,39,39,39,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,39,39,39,39,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,13,21,13,13,13,13,13,13,13,13,13,13,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,10,12,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,8,1,1,8,8,6,6,0,1,15,39,39,39,39,39,39,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,14,14,14,14,14,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,14,14,0,1,14,14,14,14,14,14,14,1,14,1,39,5,5,6,6,14,0,1,0,1,0,1,14,14,14,14,14,14,14,14,14,14,9,10,14,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,22,39,6,14,14,9,10,14,14,0,1,14,14,1,14,1,14,14,14,14,14,14,14,14,14,14,14,5,5,14,14,14,6,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,14,1,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,14,1,14,0,1,1,0,1,1,5,12,32,32,32,32,32,32,32,32,32,32,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,5,5,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,10,9,14,14,14,9,9,39,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,21,21,21,31,29,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,17,17,17,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,17,17,17,17,17,17,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,17,17,17,17,17,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,12,12,12,17,17,17,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,11,11,11,11,11,11,11,11,11,11,17,17,17,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,17,17,12,17,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,39,17,17,17,17,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,0,0,1,1,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,1,12,12,12,0,1,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,39,39,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,39,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,39,39,39,39,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,39,39,39,39,39,39,39,39,39,39,39,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,12,12,14,14,14,14,14,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,12,14,12,14,12,14,14,14,14,14,14,14,14,14,14,12,14,12,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,39,39,39,12,12,12,12,12,12,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,14,14,14,14,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],"highStart":919552,"errorValue":0}
},{}],77:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
(function() {
  var AI, AL, B2, BA, BB, BK, CB, CJ, CL, CM, CP, CR, EX, GL, H2, H3, HL, HY, ID, IN, IS, JL, JT, JV, LF, NL, NS, NU, OP, PO, PR, QU, RI, SA, SG, SP, SY, WJ, XX, ZW;

  exports.OP = OP = 0;

  exports.CL = CL = 1;

  exports.CP = CP = 2;

  exports.QU = QU = 3;

  exports.GL = GL = 4;

  exports.NS = NS = 5;

  exports.EX = EX = 6;

  exports.SY = SY = 7;

  exports.IS = IS = 8;

  exports.PR = PR = 9;

  exports.PO = PO = 10;

  exports.NU = NU = 11;

  exports.AL = AL = 12;

  exports.HL = HL = 13;

  exports.ID = ID = 14;

  exports.IN = IN = 15;

  exports.HY = HY = 16;

  exports.BA = BA = 17;

  exports.BB = BB = 18;

  exports.B2 = B2 = 19;

  exports.ZW = ZW = 20;

  exports.CM = CM = 21;

  exports.WJ = WJ = 22;

  exports.H2 = H2 = 23;

  exports.H3 = H3 = 24;

  exports.JL = JL = 25;

  exports.JV = JV = 26;

  exports.JT = JT = 27;

  exports.RI = RI = 28;

  exports.AI = AI = 29;

  exports.BK = BK = 30;

  exports.CB = CB = 31;

  exports.CJ = CJ = 32;

  exports.CR = CR = 33;

  exports.LF = LF = 34;

  exports.NL = NL = 35;

  exports.SA = SA = 36;

  exports.SG = SG = 37;

  exports.SP = SP = 38;

  exports.XX = XX = 39;

}).call(this);

},{}],78:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
(function() {
  var AI, AL, BA, BK, CB, CI_BRK, CJ, CP_BRK, CR, DI_BRK, ID, IN_BRK, LF, LineBreaker, NL, NS, PR_BRK, SA, SG, SP, UnicodeTrie, WJ, XX, characterClasses, classTrie, pairTable, _ref, _ref1;

  UnicodeTrie = require('unicode-trie');

  classTrie = new UnicodeTrie(require('./class_trie.json'));

  _ref = require('./classes'), BK = _ref.BK, CR = _ref.CR, LF = _ref.LF, NL = _ref.NL, CB = _ref.CB, BA = _ref.BA, SP = _ref.SP, WJ = _ref.WJ, SP = _ref.SP, BK = _ref.BK, LF = _ref.LF, NL = _ref.NL, AI = _ref.AI, AL = _ref.AL, SA = _ref.SA, SG = _ref.SG, XX = _ref.XX, CJ = _ref.CJ, ID = _ref.ID, NS = _ref.NS, characterClasses = _ref.characterClasses;

  _ref1 = require('./pairs'), DI_BRK = _ref1.DI_BRK, IN_BRK = _ref1.IN_BRK, CI_BRK = _ref1.CI_BRK, CP_BRK = _ref1.CP_BRK, PR_BRK = _ref1.PR_BRK, pairTable = _ref1.pairTable;

  LineBreaker = (function() {
    var Break, mapClass, mapFirst;

    function LineBreaker(string) {
      this.string = string;
      this.pos = 0;
      this.lastPos = 0;
      this.curClass = null;
      this.nextClass = null;
    }

    LineBreaker.prototype.nextCodePoint = function() {
      var code, next;
      code = this.string.charCodeAt(this.pos++);
      next = this.string.charCodeAt(this.pos);
      if ((0xd800 <= code && code <= 0xdbff) && (0xdc00 <= next && next <= 0xdfff)) {
        this.pos++;
        return ((code - 0xd800) * 0x400) + (next - 0xdc00) + 0x10000;
      }
      return code;
    };

    mapClass = function(c) {
      switch (c) {
        case AI:
          return AL;
        case SA:
        case SG:
        case XX:
          return AL;
        case CJ:
          return NS;
        default:
          return c;
      }
    };

    mapFirst = function(c) {
      switch (c) {
        case LF:
        case NL:
          return BK;
        case CB:
          return BA;
        case SP:
          return WJ;
        default:
          return c;
      }
    };

    LineBreaker.prototype.nextCharClass = function(first) {
      if (first == null) {
        first = false;
      }
      return mapClass(classTrie.get(this.nextCodePoint()));
    };

    Break = (function() {
      function Break(position, required) {
        this.position = position;
        this.required = required != null ? required : false;
      }

      return Break;

    })();

    LineBreaker.prototype.nextBreak = function() {
      var cur, lastClass, shouldBreak;
      if (this.curClass == null) {
        this.curClass = mapFirst(this.nextCharClass());
      }
      while (this.pos < this.string.length) {
        this.lastPos = this.pos;
        lastClass = this.nextClass;
        this.nextClass = this.nextCharClass();
        if (this.curClass === BK || (this.curClass === CR && this.nextClass !== LF)) {
          this.curClass = mapFirst(mapClass(this.nextClass));
          return new Break(this.lastPos, true);
        }
        cur = (function() {
          switch (this.nextClass) {
            case SP:
              return this.curClass;
            case BK:
            case LF:
            case NL:
              return BK;
            case CR:
              return CR;
            case CB:
              return BA;
          }
        }).call(this);
        if (cur != null) {
          this.curClass = cur;
          if (this.nextClass === CB) {
            return new Break(this.lastPos);
          }
          continue;
        }
        shouldBreak = false;
        switch (pairTable[this.curClass][this.nextClass]) {
          case DI_BRK:
            shouldBreak = true;
            break;
          case IN_BRK:
            shouldBreak = lastClass === SP;
            break;
          case CI_BRK:
            shouldBreak = lastClass === SP;
            if (!shouldBreak) {
              continue;
            }
            break;
          case CP_BRK:
            if (lastClass !== SP) {
              continue;
            }
        }
        this.curClass = this.nextClass;
        if (shouldBreak) {
          return new Break(this.lastPos);
        }
      }
      if (this.pos >= this.string.length) {
        if (this.lastPos < this.string.length) {
          this.lastPos = this.string.length;
          return new Break(this.string.length);
        } else {
          return null;
        }
      }
    };

    return LineBreaker;

  })();

  module.exports = LineBreaker;

}).call(this);

},{"./class_trie.json":76,"./classes":77,"./pairs":79,"unicode-trie":75}],79:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
(function() {
  var CI_BRK, CP_BRK, DI_BRK, IN_BRK, PR_BRK;

  exports.DI_BRK = DI_BRK = 0;

  exports.IN_BRK = IN_BRK = 1;

  exports.CI_BRK = CI_BRK = 2;

  exports.CP_BRK = CP_BRK = 3;

  exports.PR_BRK = PR_BRK = 4;

  exports.pairTable = [[PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, CP_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, DI_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, DI_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, PR_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK]];

}).call(this);

},{}],80:[function(require,module,exports){
(function (Buffer){
// Generated by CoffeeScript 1.4.0

/*
# MIT LICENSE
# Copyright (c) 2011 Devon Govett
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy of this 
# software and associated documentation files (the "Software"), to deal in the Software 
# without restriction, including without limitation the rights to use, copy, modify, merge, 
# publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons 
# to whom the Software is furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all copies or 
# substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
# BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
# DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


(function() {
  var PNG, fs, zlib;

  fs = require('fs');

  zlib = require('zlib');

  module.exports = PNG = (function() {

    PNG.decode = function(path, fn) {
      return fs.readFile(path, function(err, file) {
        var png;
        png = new PNG(file);
        return png.decode(function(pixels) {
          return fn(pixels);
        });
      });
    };

    PNG.load = function(path) {
      var file;
      file = fs.readFileSync(path);
      return new PNG(file);
    };

    function PNG(data) {
      var chunkSize, colors, i, index, key, section, short, text, _i, _j, _ref;
      this.data = data;
      this.pos = 8;
      this.palette = [];
      this.imgData = [];
      this.transparency = {};
      this.text = {};
      while (true) {
        chunkSize = this.readUInt32();
        section = ((function() {
          var _i, _results;
          _results = [];
          for (i = _i = 0; _i < 4; i = ++_i) {
            _results.push(String.fromCharCode(this.data[this.pos++]));
          }
          return _results;
        }).call(this)).join('');
        switch (section) {
          case 'IHDR':
            this.width = this.readUInt32();
            this.height = this.readUInt32();
            this.bits = this.data[this.pos++];
            this.colorType = this.data[this.pos++];
            this.compressionMethod = this.data[this.pos++];
            this.filterMethod = this.data[this.pos++];
            this.interlaceMethod = this.data[this.pos++];
            break;
          case 'PLTE':
            this.palette = this.read(chunkSize);
            break;
          case 'IDAT':
            for (i = _i = 0; _i < chunkSize; i = _i += 1) {
              this.imgData.push(this.data[this.pos++]);
            }
            break;
          case 'tRNS':
            this.transparency = {};
            switch (this.colorType) {
              case 3:
                this.transparency.indexed = this.read(chunkSize);
                short = 255 - this.transparency.indexed.length;
                if (short > 0) {
                  for (i = _j = 0; 0 <= short ? _j < short : _j > short; i = 0 <= short ? ++_j : --_j) {
                    this.transparency.indexed.push(255);
                  }
                }
                break;
              case 0:
                this.transparency.grayscale = this.read(chunkSize)[0];
                break;
              case 2:
                this.transparency.rgb = this.read(chunkSize);
            }
            break;
          case 'tEXt':
            text = this.read(chunkSize);
            index = text.indexOf(0);
            key = String.fromCharCode.apply(String, text.slice(0, index));
            this.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
            break;
          case 'IEND':
            this.colors = (function() {
              switch (this.colorType) {
                case 0:
                case 3:
                case 4:
                  return 1;
                case 2:
                case 6:
                  return 3;
              }
            }).call(this);
            this.hasAlphaChannel = (_ref = this.colorType) === 4 || _ref === 6;
            colors = this.colors + (this.hasAlphaChannel ? 1 : 0);
            this.pixelBitlength = this.bits * colors;
            this.colorSpace = (function() {
              switch (this.colors) {
                case 1:
                  return 'DeviceGray';
                case 3:
                  return 'DeviceRGB';
              }
            }).call(this);
            this.imgData = new Buffer(this.imgData);
            return;
          default:
            this.pos += chunkSize;
        }
        this.pos += 4;
        if (this.pos > this.data.length) {
          throw new Error("Incomplete or corrupt PNG file");
        }
      }
      return;
    }

    PNG.prototype.read = function(bytes) {
      var i, _i, _results;
      _results = [];
      for (i = _i = 0; 0 <= bytes ? _i < bytes : _i > bytes; i = 0 <= bytes ? ++_i : --_i) {
        _results.push(this.data[this.pos++]);
      }
      return _results;
    };

    PNG.prototype.readUInt32 = function() {
      var b1, b2, b3, b4;
      b1 = this.data[this.pos++] << 24;
      b2 = this.data[this.pos++] << 16;
      b3 = this.data[this.pos++] << 8;
      b4 = this.data[this.pos++];
      return b1 | b2 | b3 | b4;
    };

    PNG.prototype.readUInt16 = function() {
      var b1, b2;
      b1 = this.data[this.pos++] << 8;
      b2 = this.data[this.pos++];
      return b1 | b2;
    };

    PNG.prototype.decodePixels = function(fn) {
      var _this = this;
      return zlib.inflate(this.imgData, function(err, data) {
        var byte, c, col, i, left, length, p, pa, paeth, pb, pc, pixelBytes, pixels, pos, row, scanlineLength, upper, upperLeft, _i, _j, _k, _l, _m;
        if (err) {
          throw err;
        }
        pixelBytes = _this.pixelBitlength / 8;
        scanlineLength = pixelBytes * _this.width;
        pixels = new Buffer(scanlineLength * _this.height);
        length = data.length;
        row = 0;
        pos = 0;
        c = 0;
        while (pos < length) {
          switch (data[pos++]) {
            case 0:
              for (i = _i = 0; _i < scanlineLength; i = _i += 1) {
                pixels[c++] = data[pos++];
              }
              break;
            case 1:
              for (i = _j = 0; _j < scanlineLength; i = _j += 1) {
                byte = data[pos++];
                left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                pixels[c++] = (byte + left) % 256;
              }
              break;
            case 2:
              for (i = _k = 0; _k < scanlineLength; i = _k += 1) {
                byte = data[pos++];
                col = (i - (i % pixelBytes)) / pixelBytes;
                upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                pixels[c++] = (upper + byte) % 256;
              }
              break;
            case 3:
              for (i = _l = 0; _l < scanlineLength; i = _l += 1) {
                byte = data[pos++];
                col = (i - (i % pixelBytes)) / pixelBytes;
                left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                pixels[c++] = (byte + Math.floor((left + upper) / 2)) % 256;
              }
              break;
            case 4:
              for (i = _m = 0; _m < scanlineLength; i = _m += 1) {
                byte = data[pos++];
                col = (i - (i % pixelBytes)) / pixelBytes;
                left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                if (row === 0) {
                  upper = upperLeft = 0;
                } else {
                  upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                  upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + (i % pixelBytes)];
                }
                p = left + upper - upperLeft;
                pa = Math.abs(p - left);
                pb = Math.abs(p - upper);
                pc = Math.abs(p - upperLeft);
                if (pa <= pb && pa <= pc) {
                  paeth = left;
                } else if (pb <= pc) {
                  paeth = upper;
                } else {
                  paeth = upperLeft;
                }
                pixels[c++] = (byte + paeth) % 256;
              }
              break;
            default:
              throw new Error("Invalid filter algorithm: " + data[pos - 1]);
          }
          row++;
        }
        return fn(pixels);
      });
    };

    PNG.prototype.decodePalette = function() {
      var c, i, length, palette, pos, ret, transparency, _i, _ref, _ref1;
      palette = this.palette;
      transparency = this.transparency.indexed || [];
      ret = new Buffer(transparency.length + palette.length);
      pos = 0;
      length = palette.length;
      c = 0;
      for (i = _i = 0, _ref = palette.length; _i < _ref; i = _i += 3) {
        ret[pos++] = palette[i];
        ret[pos++] = palette[i + 1];
        ret[pos++] = palette[i + 2];
        ret[pos++] = (_ref1 = transparency[c++]) != null ? _ref1 : 255;
      }
      return ret;
    };

    PNG.prototype.copyToImageData = function(imageData, pixels) {
      var alpha, colors, data, i, input, j, k, length, palette, v, _ref;
      colors = this.colors;
      palette = null;
      alpha = this.hasAlphaChannel;
      if (this.palette.length) {
        palette = (_ref = this._decodedPalette) != null ? _ref : this._decodedPalette = this.decodePalette();
        colors = 4;
        alpha = true;
      }
      data = (imageData != null ? imageData.data : void 0) || imageData;
      length = data.length;
      input = palette || pixels;
      i = j = 0;
      if (colors === 1) {
        while (i < length) {
          k = palette ? pixels[i / 4] * 4 : j;
          v = input[k++];
          data[i++] = v;
          data[i++] = v;
          data[i++] = v;
          data[i++] = alpha ? input[k++] : 255;
          j = k;
        }
      } else {
        while (i < length) {
          k = palette ? pixels[i / 4] * 4 : j;
          data[i++] = input[k++];
          data[i++] = input[k++];
          data[i++] = input[k++];
          data[i++] = alpha ? input[k++] : 255;
          j = k;
        }
      }
    };

    PNG.prototype.decode = function(fn) {
      var ret,
        _this = this;
      ret = new Buffer(this.width * this.height * 4);
      return this.decodePixels(function(pixels) {
        _this.copyToImageData(ret, pixels);
        return fn(ret);
      });
    };

    return PNG;

  })();

}).call(this);

}).call(this,require("buffer").Buffer)
},{"buffer":53,"fs":36,"zlib":52}]},{},[2])(2)
});