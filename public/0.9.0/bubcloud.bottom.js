/*!
 * bubcloud - v0.9.0
 * A responsive theme for Forumotion
 * http://devs.forumvi.com
 *
 * Made by Zzbaivong
 * Under MIT License
 */
!function(f){"use strict";function e(){function t(f){var e=f.find(".cb-bubcloud-options-list");I=!I,I?e.css("visibility","visible").stop(!0,!1).animate({opacity:1,top:27},"fast",function(){f.addClass("active")}):e.stop(!0,!1).animate({opacity:0,top:12},"fast",function(){f.removeClass("active"),e.css("visibility","hidden")})}function i(){var f=document.createElement("div");f.style.visibility="hidden",f.style.width="100px",document.body.appendChild(f);var e=f.offsetWidth;f.style.overflow="scroll";var a=document.createElement("div");a.style.width="100%",f.appendChild(a);var s=a.offsetWidth;return f.parentNode.removeChild(f),e-s}function c(f){return'<a class="cb-bubcloud-media" data-video="https://www.youtube.com/embed/'+f+'?rel=0&autoplay=1" href="http://youtu.be/'+f+'" target="_blank" rel="nofollow" style="background-image: url(http://img.youtube.com/vi/'+f+'/mqdefault.jpg);"><img src="http://i97.servimg.com/u/f97/19/51/54/34/play-i10.png" alt="Play"></a>'}function o(e){return f.getJSON("https://api.dailymotion.com/video/"+e,{fields:"thumbnail_medium_url"}).done(function(f){h.find(".cb-bubcloud-media.daily-icon-"+e).css("background-image","url("+f.thumbnail_medium_url+")")}),'<a class="cb-bubcloud-media daily-icon-'+e+'" data-video="https://www.dailymotion.com/embed/video/'+e+'?autoplay=1&endscreen-enable=0" href="http://dai.ly/'+e+'" target="_blank" rel="nofollow" style="background-image: url(//i97.servimg.com/u/f97/19/51/54/34/dailym10.png);"><img src="http://i97.servimg.com/u/f97/19/51/54/34/play-i10.png" alt="Play"></a>'}var n=a[0].contentWindow.chatbox;if(!n)return void(s<5&&setTimeout(function(){e(),n.init(),s++},1e3));var d=document,l=d.title,b=f(window),r=!1,u=f("html"),m=a.contents().find("head"),p=a.contents().find("body"),h=p.find("#chatbox"),g=p.find("#chatbox_footer"),v=p.find("#message"),y=p.find("#chatbox_messenger_form"),w=p.find("#chatbox_display_archives"),C=p.find("#chatbox_option_co"),x=p.find("#chatbox_option_disco"),_=p.find(".online-users"),k=p.find(".away-users"),z=p.find(".member-title"),T=function(e){return f("<div>",{id:e})},j=function(e,a){var s=f("<div>",{id:e+"_wrap",class:"cb-bubcloud-options"}).append(f("<img>",{src:"//twemoji.maxcdn.com/36x36/"+a+".png",alt:e,height:20,width:20,class:"cb-bubcloud-btn"}));return g.append(s),s},L="1f600 1f601 1f602 1f603 1f604 1f605 1f606 1f607 1f608 1f609 1f60a 1f60b 1f60c 1f60d 1f60e 1f60f 1f610 1f611 1f612 1f613 1f614 1f615 1f616 1f617 1f618 1f619 1f61a 1f61b 1f61c 1f61d 1f61e 1f61f 1f620 1f621 1f622 1f623 1f624 1f625 1f626 1f627 1f628 1f629 1f62a 1f62b 1f62c 1f62d 1f62e 1f62f 1f630 1f631 1f632 1f633 1f634 1f635 1f636 1f637 263a 1f638 1f639 1f63a 1f63b 1f63c 1f63d 1f63e 1f63f 1f640 1f645 1f646 1f647 1f648 1f649 1f64a 1f64b 1f64c 1f64d 1f64e 1f64f 1f300 1f301 1f302 1f303 1f304 1f305 1f306 1f307 1f308 1f309 1f30a 1f30b 1f30c 1f30d 1f30e 1f30f 1f310 1f311 1f312 1f313 1f314 1f315 1f316 1f317 1f318 1f319 1f31a 1f31b 1f31c 1f31d 1f31e 1f31f 1f320 1f330 1f331 1f332 1f333 1f334 1f335 1f337 1f338 1f339 1f33a 1f33b 1f33c 1f33d 1f33e 1f33f 1f340 1f341 1f342 1f343 1f344 1f345 1f346 1f347 1f348 1f349 1f34a 1f34b 1f34c 1f34d 1f34e 1f34f 1f350 1f351 1f352 1f353 1f354 1f355 1f356 1f357 1f358 1f359 1f35a 1f35b 1f35c 1f35d 1f35e 1f35f 1f360 1f361 1f362 1f363 1f364 1f365 1f366 1f367 1f368 1f369 1f36a 1f36b 1f36c 1f36d 1f36e 1f36f 1f370 1f371 1f372 1f373 1f374 1f375 1f376 1f377 1f378 1f379 1f37a 1f37b 1f37c 1f380 1f381 1f382 1f383 1f384 1f385 1f386 1f387 1f388 1f389 1f38a 1f38b 1f38c 1f38d 1f38e 1f38f 1f390 1f391 1f392 1f393 1f3a0 1f3a1 1f3a2 1f3a3 1f3a4 1f3a5 1f3a6 1f3a7 1f3a8 1f3a9 1f3aa 1f3ab 1f3ac 1f3ad 1f3ae 1f3af 1f3b0 1f3b1 1f3b2 1f3b3 1f3b4 1f3b5 1f3b6 1f3b7 1f3b8 1f3b9 1f3ba 1f3bb 1f3bc 1f3bd 1f3be 1f3bf 1f3c0 1f3c1 1f3c2 1f3c3 1f3c4 1f3c6 1f3c7 1f3c8 1f3c9 1f3ca 1f3e0 1f3e1 1f3e2 1f3e3 1f3e4 1f3e5 1f3e6 1f3e7 1f3e8 1f3e9 1f3ea 1f3eb 1f3ec 1f3ed 1f3ee 1f3ef 1f3f0 1f400 1f401 1f402 1f403 1f404 1f405 1f406 1f407 1f408 1f409 1f40a 1f40b 1f40c 1f40d 1f40e 1f40f 1f410 1f411 1f412 1f413 1f414 1f415 1f416 1f417 1f418 1f419 1f41a 1f41b 1f41c 1f41d 1f41e 1f41f 1f420 1f421 1f422 1f423 1f424 1f425 1f426 1f427 1f428 1f429 1f42a 1f42b 1f42c 1f42d 1f42e 1f42f 1f430 1f431 1f432 1f433 1f434 1f435 1f436 1f437 1f438 1f439 1f43a 1f43b 1f43c 1f43d 1f43e 1f440 1f442 1f443 1f444 1f445 1f446 1f447 1f448 1f449 1f44a 1f44b 1f44c 1f44d 1f44e 1f44f 1f450 1f451 1f452 1f453 1f454 1f455 1f456 1f457 1f458 1f459 1f45a 1f45b 1f45c 1f45d 1f45e 1f45f 1f460 1f461 1f462 1f463 1f464 1f465 1f466 1f467 1f468 1f469 1f46a 1f46b 1f46c 1f46d 1f46e 1f46f 1f470 1f471 1f472 1f473 1f474 1f475 1f476 1f477 1f478 1f479 1f47a 1f47b 1f47c 1f47d 1f47e 1f47f 1f480 1f481 1f482 1f483 1f484 1f485 1f486 1f487 1f488 1f489 1f48a 1f48b 1f48c 1f48d 1f48e 1f48f 1f490 1f491 1f492 1f493 1f494 1f495 1f496 1f497 1f498 1f499 1f49a 1f49b 1f49c 1f49d 1f49e 1f49f 1f4a0 1f4a1 1f4a2 1f4a3 1f4a4 1f4a5 1f4a6 1f4a7 1f4a8 1f4a9 1f4aa 1f4ab 1f4ac 1f4ad 1f4ae 1f4af 1f4b0 1f4b1 1f4b2 1f4b3 1f4b4 1f4b5 1f4b6 1f4b7 1f4b8 1f4b9 1f4ba 1f4bb 1f4bc 1f4bd 1f4be 1f4bf 1f4c0 1f4c1 1f4c2 1f4c3 1f4c4 1f4c5 1f4c6 1f4c7 1f4c8 1f4c9 1f4ca 1f4cb 1f4cc 1f4cd 1f4ce 1f4cf 1f4d0 1f4d1 1f4d2 1f4d3 1f4d4 1f4d5 1f4d6 1f4d7 1f4d8 1f4d9 1f4da 1f4db 1f4dc 1f4dd 1f4de 1f4df 1f4e0 1f4e1 1f4e2 1f4e3 1f4e4 1f4e5 1f4e6 1f4e7 1f4e8 1f4e9 1f4ea 1f4eb 1f4ec 1f4ed 1f4ee 1f4ef 1f4f0 1f4f1 1f4f2 1f4f3 1f4f4 1f4f5 1f4f6 1f4f7 1f4f9 1f4fa 1f4fb 1f4fc 1f500 1f501 1f502 1f503 1f504 1f505 1f506 1f507 1f508 1f509 1f50a 1f50b 1f50c 1f50d 1f50e 1f50f 1f510 1f511 1f512 1f513 1f514 1f515 1f516 1f517 1f518 1f519 1f51a 1f51b 1f51c 1f51d 1f51e 1f51f 1f520 1f521 1f522 1f523 1f524 1f525 1f526 1f527 1f528 1f529 1f52a 1f52b 1f52c 1f52d 1f52e 1f52f 1f530 1f531 1f532 1f533 1f534 1f535 1f536 1f537 1f538 1f539 1f53a 1f53b 1f53c 1f53d 1f550 1f551 1f552 1f553 1f554 1f555 1f556 1f557 1f558 1f559 1f55a 1f55b 1f55c 1f55d 1f55e 1f55f 1f560 1f561 1f562 1f563 1f564 1f565 1f566 1f567 1f5fb 1f5fc 1f5fd 1f5fe 1f5ff 1f680 1f681 1f682 1f683 1f684 1f685 1f686 1f687 1f688 1f689 1f68a 1f68b 1f68c 1f68d 1f68e 1f68f 1f690 1f691 1f692 1f693 1f694 1f695 1f696 1f697 1f698 1f699 1f69a 1f69b 1f69c 1f69d 1f69e 1f69f 1f6a0 1f6a1 1f6a2 1f6a3 1f6a4 1f6a5 1f6a6 1f6a7 1f6a8 1f6a9 1f6aa 1f6ab 1f6ac 1f6ad 1f6ae 1f6af 1f6b0 1f6b1 1f6b2 1f6b3 1f6b4 1f6b5 1f6b6 1f6b7 1f6b8 1f6b9 1f6ba 1f6bb 1f6bc 1f6bd 1f6be 1f6bf 1f6c0 1f6c1 1f6c2 1f6c3 1f6c4 1f6c5 203c 2049 2122 2139 2194 2195 2196 2197 2198 2199 21a9 21aa 23-20e3 231a 231b 23e9 23ea 23eb 23ec 23f0 23f3 24c2 25aa 25ab 25b6 25c0 25fb 25fc 25fd 25fe 2600 2601 260e 2611 2614 2615 261d 2648 2649 264a 264b 264c 264d 264e 264f 2650 2651 2652 2653 2660 2663 2665 2666 2668 267b 267f 2693 26a0 26a1 26aa 26ab 26bd 26be 26c4 26c5 26ce 26d4 26ea 26f2 26f3 26f5 26fa 26fd 2702 2705 2708 2709 270a 270b 270c 270f 2712 2714 2716 2728 2733 2734 2744 2747 274c 274e 2753 2754 2755 2757 2764 2795 2796 2797 27a1 27b0 27bf 2934 2935 2b05 2b06 2b07 2b1b 2b1c 2b50 2b55 30-20e3 3030 303d 31-20e3 32-20e3 3297 3299 33-20e3 34-20e3 35-20e3 36-20e3 37-20e3 38-20e3 39-20e3 a9 ae e50a 1f004 1f0cf 1f170 1f171 1f17e 1f17f 1f18e 1f191 1f192 1f193 1f194 1f195 1f196 1f197 1f198 1f199 1f19a 1f1e6 1f1e7 1f1e8-1f1f3 1f1e8 1f1e9-1f1ea 1f1e9 1f1ea-1f1f8 1f1ea 1f1eb-1f1f7 1f1eb 1f1ec-1f1e7 1f1ec 1f1ed 1f1ee-1f1f9 1f1ee 1f1ef-1f1f5 1f1ef 1f1f0-1f1f7 1f1f0 1f1f1 1f1f2 1f1f3 1f1f4 1f1f5 1f1f6 1f1f7-1f1fa 1f1f7 1f1f8 1f1f9 1f1fa-1f1f8 1f1fa 1f1fb 1f1fc 1f1fd 1f1fe 1f1ff 1f201 1f202 1f21a 1f22f 1f232 1f233 1f234 1f235 1f236 1f237 1f238 1f239 1f23a 1f250 1f251".split(" "),M=L.length,U=0,Z=!1,I=!1,O=j("emoji","1f636"),B=f("<div>",{class:"cb-bubcloud-options-list"}),D=T("emoji_list"),P=function(){Z=!0;var e=U+70;for(e>M&&(e=M),U;U<e;U++){var a=L[U],s=f("<img>",{class:"emoji",alt:a,src:"http://twemoji.maxcdn.com/16x16/"+a+".png"}),t=f("<li>");s.appendTo(t).appendTo(D)}U=e,Z=!1},W=T("media"),E=T("has_new_message"),N=function(){/^\(\d+\)\s/.test(d.title)&&(d.title=l),E.hasClass("active")&&E.removeClass("active")},q=function(e){var a="//baivong.github.io/cdn/bubcloud/";return f("<audio>",{id:"chatbox-"+e+"-audio",src:a+e+".mp3",preload:"auto"})},H={buzz:q("buzz"),alert:q("alert"),message:q("message"),online:q("online"),offline:q("offline")},J=!1,Q=T("sound_control"),R=function(f){J||H[f][0].play()},S=j("buzz","1f4a5"),A=!1,F=!1,G=T("fullscreen"),K=f("<link>",{href:"//fonts.googleapis.com/css?family=Roboto:300,400,400i,700,900&amp;subset=latin-ext,vietnamese",rel:"stylesheet",type:"text/css"}),V=my_getcookie("bubcloud"),X=!0,Y=!0,$=0,ff=0,ef=0;"off"===my_getcookie("autologin")&&(Y=!1),m.append(K),""!==V&&null!==V&&(V=V.split("|"),m.append(f("<style>",{id:"bubcloudChat",type:"text/css",text:"a:focus,a:hover{color:#"+V[0]+"}a{color:#"+V[1]+"}.msg-me .msg-act{background:#"+V[1]+"}"}))),p.prepend(W),f.each(H,function(f){p.append(H[f])}),p.append(E),E.on("click",function(){E.removeClass("active"),$=ff,h.animate({scrollTop:0},200)}),p.find(".chatbox-title").after(G).after(Q),Q.on("click",function(){J=!J,J?(Q.addClass("disable"),J=!0):(Q.removeClass("disable"),J=!1)}),G.on("click",function(){F=!F,F?(G.addClass("active"),u.addClass("cb-bubcloud-fullscreen"),J=!0):(G.removeClass("active"),u.removeClass("cb-bubcloud-fullscreen"),J=!1)}),p.on("click",".msg-avatar",function(){v[0].value+=this.dataset.name,v.focus()}).on("click","#chatbox_option_disco",function(){my_setcookie("autologin","off"),Y=!1}).on("click","#chatbox_option_co",function(){my_setcookie("autologin","on"),Y=!0}).on("click",".chat-title",function(f){f.preventDefault(),p.hasClass("toggleMediaList")?(W.empty(),p.removeClass("toggleMediaList")):p.toggleClass("toggleUsersList")}).on("click","#chatbox",function(){p.hasClass("toggleUsersList")&&p.removeClass("toggleUsersList")}).on("click",".cb-bubcloud-media",function(f){f.preventDefault(),W.html('<iframe width="560" height="315" src="'+this.dataset.video+'" frameborder="0" allowfullscreen></iframe>'),p.hasClass("toggleMediaList")||p.addClass("toggleMediaList")}),O.one("click",function(){O.append(B.append(D)),D.width(229+i()),P(),D.scrollTop(0),D.on("scroll",function(){Z||U>=L.length||D.scrollTop()+D.height()+50<D[0].scrollHeight||P()})}).on("click",".emoji",function(){var f=v.val().trim(),e=this.src;""===f?e=e.replace("/16x16/","/36x36/"):f+=" ",v.val(f+"[img]"+e+"[/img]"),n.send()}).on("click",function(){t(f(this))}),S.on("click",function(f){f.preventDefault(),A||(A=!0,S.addClass("disable"),h.find('img[alt="BUZZ"]:first').closest(".msg-me").length||(v.val("/buzz"),n.send()))}),v.on("input",function(){"/buzz"===v.val().trim()&&v.val("")}),n.nolisten=!1,n.refresh=function(e){var a={online:[],away:[]},s=this;if(e.error)p.html(e.error);else{if(s.connected?(y.css({display:"block",visibility:"visible"}),w.show(),C.hide(),x.add(g).show(),e.lastModified&&(s.listenParams.lastModified=e.lastModified)):(y.css({display:"none",visibility:"hidden"}),C.show(),x.add(g).hide(),w.hide()),e.users){s.users=[],_.add(k).empty(),z.hide();for(var t in e.users){var i=e.users[t];s.users[i.id]=i;var n='<span style="color:'+i.color+'">'+(i.admin?"@ ":"")+'<span class="chatbox-username chatbox-user-username" data-user="'+i.id+'">'+i.username+"</span></span>",b="";i.online?(b=".online-users",a.online.push(i.id)):(b=".away-users",a.away.push(i.id)),p.find(b).append("<li>"+n+"</li>")}_.is(":empty")||p.find(".member-title.online").show(),k.is(":empty")||p.find(".member-title.away").show()}if(e.messages){ff=e.messages.length;var u=!s.messages||$!==ff;if(s.messages=e.messages,!s.messages)return;var m,v=0,T="",j=0,L=s.messages.length,M=L-1;h.empty(),f.each(s.messages,function(e,t){var i=t,n=i.userId+"",d=i.datetime.split(" "),l=function(){return 1===d.length||2===d.length&&T===d[1]},b=function(){if(l()){var f=d[0].split(":"),e=0;return f=60*parseInt(f[0],10)+parseInt(f[1],10),e=0===j?0:f-j,j=f,0<=e&&e<5}return!1},r=f("<div>",{class:"msg-row clearfix"}),u=f("<div>",{class:(i.action||"other")+"-act clearfix","data-time":d[0]});if(l()||h.prepend(f("<div>",{class:"msg-row msg-day clearfix",html:"<span>"+d[1]+"</span>"})),"-10"===n)i.msg.indexOf("<script>")!==-1&&(i.msg=i.msg.replace(/<script>.+<\/script>/,""),Y&&s.connect()),X||e!==M||R("connect"===i.action?"online":"disconnect"===i.action?"offline":"alert"),r.addClass("alert"),h.prepend(r.prepend(u.html(i.msg))),v=0,ff--;else{var p=f("<div>",{class:"msg-avatar","data-user":n,"data-name":i.username,html:'<div class="msg-avatar-circle"><img src="'+i.user.avatar+'" /></div>'}),g=f("<div>",{class:"msg-wrap"}),y=/<a href="([^"]+)"[^>]+>(.*)?<\/a>/,w=i.msg.match(y),C=/<(iframe|embed)(.*)?src=\"([^"]+)"[^>]+>(<\/(iframe|embed)>)?/,x=i.msg.match(C),_=function(f){var e=f.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/);return!(!e||11!=e[1].length)&&c(e[1])},k=function(f){var e=f.match(/^.+(dailymotion\.com(\/embed)?\/(video|hub|playlist\/[^\/]+)|dai\.ly)\/([^_#]+)?[^#]*(#video=([^_&]+))?/);return e=e?e[6]||e[4]:null,!!e&&o(e)},z=function(f,e){var a=_(e),s=k(e);a?i.msg=i.msg.replace(f,a):s&&(i.msg=i.msg.replace(f,s))};s.userId+""===n?r.addClass("msg-me"):a.online.indexOf(n)!==-1?p.addClass("online"):a.away.indexOf(n)!==-1?p.addClass("away"):p.addClass("offline"),/<span style="[^"]+">\/buzz<\/span>/.test(i.msg)?(i.msg='<img src="//twemoji.maxcdn.com/72x72/1f4a5.png" alt="BUZZ">',X||e!==M||(h.hasClass("chatbox-buzz")||(h.addClass("chatbox-buzz"),R("buzz")),setTimeout(function(){h.hasClass("chatbox-buzz")&&h.removeClass("chatbox-buzz")},1e3))):w?z(y,w[1]):x&&z(C,x[3]),""===i.msg.replace(/<[^>]*>/g,"").trim()&&u.addClass("no-text"),b()&&v===n?g=m:(h.prepend(r),r.append(p).append(g),m=g),g.prepend(u.html(i.msg)),v=n}l()||(T=d[1])});var U=h.find('img[alt="BUZZ"]:first');if(U.length&&U.closest(".msg-me").length?S.hasClass("disable")||S.addClass("disable"):S.hasClass("disable")&&(S.removeClass("disable"),A=!1),X)$=ff;else if(u){if(h.find(".msg-row:first").hasClass("msg-me"))N(),h.scrollTop(0);else{var Z=ff-$;0===ff&&($=0,ef=0,Z=0,N()),Z>0&&ef!==Z&&(h.scrollTop()>0&&E.text("C\xf3 "+Z+" tin nh\u1eafn m\u1edbi").addClass("active"),r&&(d.title="("+Z+") Tin nh\u1eafn ch\u01b0a \u0111\u1ecdc | "+l),R("message")),ef=Z}0!=h.scrollTop()||r||($=ff)}X=!1}}},p.addClass("active"),v.focus(),b.on("focus focusin",function(){r=!1}).on("blur focusout",function(){r=!0}),a.contents().find("html").add(b).on("click dblclick focus focusin keydown keypress keyup mousedown mouseenter mouseleave mousemove mouseover mouseout mouseup mousemove touchstart touchend touchcancel touchleave touchmove",function(){/^\(\d+\)\s/.test(d.title)&&(d.title=l);var f=b.scrollTop(),e=a.offset().top;0===h.scrollTop()&&f+b.height()>e&&f<e+a.height()&&(ef=0,$=ff)})}var a=f("#frame_chatbox"),s=0;a.length&&a.on("load",e)}(jQuery);
window.toggleCategory2=function(n){var o=$("#"+n),s=$("#b"+n),t="none"===o.css("display");return o.stop(!0,!1).slideToggle("fast",function(){o.css("display",t?"":"none"),s.attr("class",t?"contract":"expand"),my_setcookie("_"+n,t?"":"1",!0)}),!1};
!function(o){"use strict";var e=function(e,t,c){var a=c.contents().find("#bubcloud");a.length||(a=o("<style>",{id:"bubcloudChat",type:"text/css"}),c.contents().find("head").append(a)),a.text("a:focus,a:hover{color:#"+e+"}a{color:#"+t+"}.msg-me .msg-act{background:#"+t+"}")},t=o(".color-button"),c=o("#frame_chatbox");o(".color-choose").on("click",function(a){a.preventDefault();var s=o(this),l=s.data("colorx"),r=s.data("colory"),n=s.data("colorz"),u=o("#bubcloud"),d=c.contents().find("#bubcloudChat");s.hasClass("active")||(""===l&&""===r&&""===n?(u.length&&u.remove(),d.length&&d.remove(),o(".color-choose.active").removeClass("active"),t.removeAttr("style"),my_setcookie("bubcloud","")):(o(".color-choose.active").removeClass("active"),s.addClass("active"),t.css("color","#"+l),themeChoose(l,r,n),c.length&&e(l,r,c),my_setcookie("bubcloud",l+"|"+r+"|"+n,!0)))})}(jQuery);
!function(f){"use strict";function e(e){n=!0;var a=i+100;for(a>t&&(a=t),i;i<a;i++){var c=o[i],b=f("<img>",{class:"emoji",alt:c,src:"http://twemoji.maxcdn.com/"+d+"x"+d+"/"+c+".png"});b.appendTo(e)}i=a,n=!1}function a(f,e){var a=e.offset().left,c=r.width(),b={top:e.offset().top,marginTop:e.outerHeight()};a+280>c?(b.left="auto",b.right=0):(b.left=a,b.right="auto"),f.css(b)}if(f.sceditor){var c,b="Emojis",d=16,o="1f600 1f601 1f602 1f603 1f604 1f605 1f606 1f607 1f608 1f609 1f60a 1f60b 1f60c 1f60d 1f60e 1f60f 1f610 1f611 1f612 1f613 1f614 1f615 1f616 1f617 1f618 1f619 1f61a 1f61b 1f61c 1f61d 1f61e 1f61f 1f620 1f621 1f622 1f623 1f624 1f625 1f626 1f627 1f628 1f629 1f62a 1f62b 1f62c 1f62d 1f62e 1f62f 1f630 1f631 1f632 1f633 1f634 1f635 1f636 1f637 263a 1f638 1f639 1f63a 1f63b 1f63c 1f63d 1f63e 1f63f 1f640 1f645 1f646 1f647 1f648 1f649 1f64a 1f64b 1f64c 1f64d 1f64e 1f64f 1f300 1f301 1f302 1f303 1f304 1f305 1f306 1f307 1f308 1f309 1f30a 1f30b 1f30c 1f30d 1f30e 1f30f 1f310 1f311 1f312 1f313 1f314 1f315 1f316 1f317 1f318 1f319 1f31a 1f31b 1f31c 1f31d 1f31e 1f31f 1f320 1f330 1f331 1f332 1f333 1f334 1f335 1f337 1f338 1f339 1f33a 1f33b 1f33c 1f33d 1f33e 1f33f 1f340 1f341 1f342 1f343 1f344 1f345 1f346 1f347 1f348 1f349 1f34a 1f34b 1f34c 1f34d 1f34e 1f34f 1f350 1f351 1f352 1f353 1f354 1f355 1f356 1f357 1f358 1f359 1f35a 1f35b 1f35c 1f35d 1f35e 1f35f 1f360 1f361 1f362 1f363 1f364 1f365 1f366 1f367 1f368 1f369 1f36a 1f36b 1f36c 1f36d 1f36e 1f36f 1f370 1f371 1f372 1f373 1f374 1f375 1f376 1f377 1f378 1f379 1f37a 1f37b 1f37c 1f380 1f381 1f382 1f383 1f384 1f385 1f386 1f387 1f388 1f389 1f38a 1f38b 1f38c 1f38d 1f38e 1f38f 1f390 1f391 1f392 1f393 1f3a0 1f3a1 1f3a2 1f3a3 1f3a4 1f3a5 1f3a6 1f3a7 1f3a8 1f3a9 1f3aa 1f3ab 1f3ac 1f3ad 1f3ae 1f3af 1f3b0 1f3b1 1f3b2 1f3b3 1f3b4 1f3b5 1f3b6 1f3b7 1f3b8 1f3b9 1f3ba 1f3bb 1f3bc 1f3bd 1f3be 1f3bf 1f3c0 1f3c1 1f3c2 1f3c3 1f3c4 1f3c6 1f3c7 1f3c8 1f3c9 1f3ca 1f3e0 1f3e1 1f3e2 1f3e3 1f3e4 1f3e5 1f3e6 1f3e7 1f3e8 1f3e9 1f3ea 1f3eb 1f3ec 1f3ed 1f3ee 1f3ef 1f3f0 1f400 1f401 1f402 1f403 1f404 1f405 1f406 1f407 1f408 1f409 1f40a 1f40b 1f40c 1f40d 1f40e 1f40f 1f410 1f411 1f412 1f413 1f414 1f415 1f416 1f417 1f418 1f419 1f41a 1f41b 1f41c 1f41d 1f41e 1f41f 1f420 1f421 1f422 1f423 1f424 1f425 1f426 1f427 1f428 1f429 1f42a 1f42b 1f42c 1f42d 1f42e 1f42f 1f430 1f431 1f432 1f433 1f434 1f435 1f436 1f437 1f438 1f439 1f43a 1f43b 1f43c 1f43d 1f43e 1f440 1f442 1f443 1f444 1f445 1f446 1f447 1f448 1f449 1f44a 1f44b 1f44c 1f44d 1f44e 1f44f 1f450 1f451 1f452 1f453 1f454 1f455 1f456 1f457 1f458 1f459 1f45a 1f45b 1f45c 1f45d 1f45e 1f45f 1f460 1f461 1f462 1f463 1f464 1f465 1f466 1f467 1f468 1f469 1f46a 1f46b 1f46c 1f46d 1f46e 1f46f 1f470 1f471 1f472 1f473 1f474 1f475 1f476 1f477 1f478 1f479 1f47a 1f47b 1f47c 1f47d 1f47e 1f47f 1f480 1f481 1f482 1f483 1f484 1f485 1f486 1f487 1f488 1f489 1f48a 1f48b 1f48c 1f48d 1f48e 1f48f 1f490 1f491 1f492 1f493 1f494 1f495 1f496 1f497 1f498 1f499 1f49a 1f49b 1f49c 1f49d 1f49e 1f49f 1f4a0 1f4a1 1f4a2 1f4a3 1f4a4 1f4a5 1f4a6 1f4a7 1f4a8 1f4a9 1f4aa 1f4ab 1f4ac 1f4ad 1f4ae 1f4af 1f4b0 1f4b1 1f4b2 1f4b3 1f4b4 1f4b5 1f4b6 1f4b7 1f4b8 1f4b9 1f4ba 1f4bb 1f4bc 1f4bd 1f4be 1f4bf 1f4c0 1f4c1 1f4c2 1f4c3 1f4c4 1f4c5 1f4c6 1f4c7 1f4c8 1f4c9 1f4ca 1f4cb 1f4cc 1f4cd 1f4ce 1f4cf 1f4d0 1f4d1 1f4d2 1f4d3 1f4d4 1f4d5 1f4d6 1f4d7 1f4d8 1f4d9 1f4da 1f4db 1f4dc 1f4dd 1f4de 1f4df 1f4e0 1f4e1 1f4e2 1f4e3 1f4e4 1f4e5 1f4e6 1f4e7 1f4e8 1f4e9 1f4ea 1f4eb 1f4ec 1f4ed 1f4ee 1f4ef 1f4f0 1f4f1 1f4f2 1f4f3 1f4f4 1f4f5 1f4f6 1f4f7 1f4f9 1f4fa 1f4fb 1f4fc 1f500 1f501 1f502 1f503 1f504 1f505 1f506 1f507 1f508 1f509 1f50a 1f50b 1f50c 1f50d 1f50e 1f50f 1f510 1f511 1f512 1f513 1f514 1f515 1f516 1f517 1f518 1f519 1f51a 1f51b 1f51c 1f51d 1f51e 1f51f 1f520 1f521 1f522 1f523 1f524 1f525 1f526 1f527 1f528 1f529 1f52a 1f52b 1f52c 1f52d 1f52e 1f52f 1f530 1f531 1f532 1f533 1f534 1f535 1f536 1f537 1f538 1f539 1f53a 1f53b 1f53c 1f53d 1f550 1f551 1f552 1f553 1f554 1f555 1f556 1f557 1f558 1f559 1f55a 1f55b 1f55c 1f55d 1f55e 1f55f 1f560 1f561 1f562 1f563 1f564 1f565 1f566 1f567 1f5fb 1f5fc 1f5fd 1f5fe 1f5ff 1f680 1f681 1f682 1f683 1f684 1f685 1f686 1f687 1f688 1f689 1f68a 1f68b 1f68c 1f68d 1f68e 1f68f 1f690 1f691 1f692 1f693 1f694 1f695 1f696 1f697 1f698 1f699 1f69a 1f69b 1f69c 1f69d 1f69e 1f69f 1f6a0 1f6a1 1f6a2 1f6a3 1f6a4 1f6a5 1f6a6 1f6a7 1f6a8 1f6a9 1f6aa 1f6ab 1f6ac 1f6ad 1f6ae 1f6af 1f6b0 1f6b1 1f6b2 1f6b3 1f6b4 1f6b5 1f6b6 1f6b7 1f6b8 1f6b9 1f6ba 1f6bb 1f6bc 1f6bd 1f6be 1f6bf 1f6c0 1f6c1 1f6c2 1f6c3 1f6c4 1f6c5 203c 2049 2122 2139 2194 2195 2196 2197 2198 2199 21a9 21aa 23-20e3 231a 231b 23e9 23ea 23eb 23ec 23f0 23f3 24c2 25aa 25ab 25b6 25c0 25fb 25fc 25fd 25fe 2600 2601 260e 2611 2614 2615 261d 2648 2649 264a 264b 264c 264d 264e 264f 2650 2651 2652 2653 2660 2663 2665 2666 2668 267b 267f 2693 26a0 26a1 26aa 26ab 26bd 26be 26c4 26c5 26ce 26d4 26ea 26f2 26f3 26f5 26fa 26fd 2702 2705 2708 2709 270a 270b 270c 270f 2712 2714 2716 2728 2733 2734 2744 2747 274c 274e 2753 2754 2755 2757 2764 2795 2796 2797 27a1 27b0 27bf 2934 2935 2b05 2b06 2b07 2b1b 2b1c 2b50 2b55 30-20e3 3030 303d 31-20e3 32-20e3 3297 3299 33-20e3 34-20e3 35-20e3 36-20e3 37-20e3 38-20e3 39-20e3 a9 ae e50a 1f004 1f0cf 1f170 1f171 1f17e 1f17f 1f18e 1f191 1f192 1f193 1f194 1f195 1f196 1f197 1f198 1f199 1f19a 1f1e6 1f1e7 1f1e8-1f1f3 1f1e8 1f1e9-1f1ea 1f1e9 1f1ea-1f1f8 1f1ea 1f1eb-1f1f7 1f1eb 1f1ec-1f1e7 1f1ec 1f1ed 1f1ee-1f1f9 1f1ee 1f1ef-1f1f5 1f1ef 1f1f0-1f1f7 1f1f0 1f1f1 1f1f2 1f1f3 1f1f4 1f1f5 1f1f6 1f1f7-1f1fa 1f1f7 1f1f8 1f1f9 1f1fa-1f1f8 1f1fa 1f1fb 1f1fc 1f1fd 1f1fe 1f1ff 1f201 1f202 1f21a 1f22f 1f232 1f233 1f234 1f235 1f236 1f237 1f238 1f239 1f23a 1f250 1f251".split(" "),t=o.length,i=0,n=!1,r=f(window);f("head").append(f("<style>",{text:".sceditor-button-twemoji div{background:url(http://twemoji.maxcdn.com/16x16/1f600.png)!important}.sceditor-twemoji{width:280px;height:250px;overflow-y:auto}.sceditor-twemoji img{cursor:pointer;margin:7px;width:16px;height:16px;overflow:hidden;text-indent:-99px}.sceditor-twemoji img:hover{opacity:.7}"})),f.sceditor.command.set("twemoji",{emoji:function(b,d,t){var s=f(".sceditor-twemoji"),m=b.closeDropDown;s.length?s.is(":hidden")?(b.closeDropDown(),s.show()):b.closeDropDown():(m(),b.closeDropDown=function(){m.apply(m,arguments),s.is(":visible")&&s.hide()},s=f("<div>",{class:"sceditor-dropdown sceditor-twemoji"}).click(function(f){f.stopPropagation()}),s.appendTo("body"),e(s),s.scrollTop(0),s.on("click",".emoji",function(f){t(this.src),f.ctrlKey||s.hide()}),s.scroll(function(){return!n&&(!(i>=o.length)&&(!(s.scrollTop()+250<s[0].scrollHeight)&&void e(s)))})),a(s,d),c||(c=!0,r.resize(function(){a(s,d)}))},exec:function(e){var a=this;f.sceditor.command.get("twemoji").emoji(a,e,function(f){a.insert("&nbsp;[img]"+f+"[/img]&nbsp;","",!0,!0,!0)})},txtExec:function(e){var a=this;f.sceditor.command.get("twemoji").emoji(a,e,function(f){a.insert(" [img]"+f+"[/img] ","",!0,!0,!0)})},tooltip:b}),toolbar=toolbar.replace(/date,/,"twemoji,date,")}}(jQuery);
!function(o){"use strict";function t(t){a=!0;var e=r+100;for(e>c&&(e=c),r;r<e;r++)o("<i>",{class:"fa",text:i[r]}).appendTo(t);r=e,a=!1}function e(o,t){var e=t.offset().left,n=f.width(),s={top:t.offset().top,marginTop:t.outerHeight()};e+220>n?(s.left="auto",s.right=0):(s.left=e,s.right="auto"),o.css(s)}if(o.sceditor){var n,s="Font Awesome Icons",i="\uf26e \uf042 \uf170 \uf037 \uf039 \uf036 \uf038 \uf270 \uf0f9 \uf2a3 \uf13d \uf17b \uf209 \uf103 \uf100 \uf101 \uf102 \uf107 \uf104 \uf105 \uf106 \uf179 \uf187 \uf1fe \uf0ab \uf0a8 \uf01a \uf190 \uf18e \uf01b \uf0a9 \uf0aa \uf063 \uf060 \uf061 \uf062 \uf047 \uf0b2 \uf07e \uf07d \uf2a2 \uf069 \uf1fa \uf29e \uf1b9 \uf04a \uf24e \uf05e \uf19c \uf080 \uf02a \uf0c9 \uf244 \uf243 \uf242 \uf241 \uf240 \uf236 \uf0fc \uf1b4 \uf1b5 \uf0f3 \uf0a2 \uf1f6 \uf1f7 \uf206 \uf1e5 \uf1fd \uf171 \uf172 \uf15a \uf27e \uf29d \uf293 \uf294 \uf032 \uf0e7 \uf1e2 \uf02d \uf02e \uf097 \uf2a1 \uf0b1 \uf188 \uf1ad \uf0f7 \uf0a1 \uf140 \uf207 \uf20d \uf1ba \uf1ec \uf073 \uf274 \uf272 \uf133 \uf271 \uf273 \uf030 \uf083 \uf0d7 \uf0d9 \uf0da \uf150 \uf191 \uf152 \uf151 \uf0d8 \uf218 \uf217 \uf20a \uf1f3 \uf24c \uf1f2 \uf24b \uf1f1 \uf1f4 \uf1f5 \uf1f0 \uf0a3 \uf0c1 \uf127 \uf00c \uf058 \uf05d \uf14a \uf046 \uf13a \uf137 \uf138 \uf139 \uf078 \uf053 \uf054 \uf077 \uf1ae \uf268 \uf111 \uf10c \uf1ce \uf1db \uf0ea \uf017 \uf24d \uf00d \uf0c2 \uf0ed \uf0ee \uf157 \uf121 \uf126 \uf1cb \uf284 \uf0f4 \uf013 \uf085 \uf0db \uf075 \uf0e5 \uf27a \uf27b \uf086 \uf0e6 \uf14e \uf066 \uf20e \uf26d \uf0c5 \uf1f9 \uf25e \uf09d \uf283 \uf125 \uf05b \uf13c \uf1b2 \uf1b3 \uf0c4 \uf0f5 \uf0e4 \uf210 \uf1c0 \uf2a4 \uf03b \uf1a5 \uf108 \uf1bd \uf219 \uf1a6 \uf155 \uf192 \uf019 \uf17d \uf16b \uf1a9 \uf282 \uf044 \uf052 \uf141 \uf142 \uf1d1 \uf0e0 \uf003 \uf199 \uf299 \uf12d \uf153 \uf0ec \uf12a \uf06a \uf071 \uf065 \uf23e \uf08e \uf14c \uf06e \uf070 \uf1fb \uf2b4 \uf09a \uf230 \uf082 \uf049 \uf050 \uf1ac \uf09e \uf182 \uf0fb \uf15b \uf1c6 \uf1c7 \uf1c9 \uf1c3 \uf1c5 \uf1c8 \uf016 \uf1c1 \uf1c4 \uf15c \uf0f6 \uf1c2 \uf008 \uf0b0 \uf06d \uf134 \uf269 \uf2b0 \uf024 \uf11e \uf11d \uf0c3 \uf16e \uf0c7 \uf07b \uf114 \uf07c \uf115 \uf031 \uf280 \uf286 \uf211 \uf04e \uf180 \uf119 \uf1e3 \uf11b \uf0e3 \uf154 \uf22d \uf265 \uf260 \uf261 \uf06b \uf1d3 \uf1d2 \uf09b \uf113 \uf092 \uf296 \uf184 \uf000 \uf2a5 \uf2a6 \uf0ac \uf1a0 \uf0d5 \uf2b3 \uf0d4 \uf1ee \uf19d \uf0c0 \uf0fd \uf1d4 \uf255 \uf258 \uf0a7 \uf0a5 \uf0a4 \uf0a6 \uf256 \uf25b \uf25a \uf257 \uf259 \uf292 \uf0a0 \uf1dc \uf025 \uf004 \uf08a \uf21e \uf1da \uf015 \uf0f8 \uf254 \uf251 \uf252 \uf253 \uf250 \uf27c \uf13b \uf246 \uf20b \uf03e \uf01c \uf03c \uf275 \uf129 \uf05a \uf156 \uf16d \uf26b \uf224 \uf208 \uf033 \uf1aa \uf1cc \uf084 \uf11c \uf159 \uf1ab \uf109 \uf202 \uf203 \uf06c \uf212 \uf094 \uf149 \uf148 \uf1cd \uf0eb \uf201 \uf0e1 \uf08c \uf17c \uf03a \uf022 \uf0cb \uf0ca \uf124 \uf023 \uf175 \uf177 \uf178 \uf176 \uf2a8 \uf0d0 \uf076 \uf064 \uf112 \uf122 \uf183 \uf279 \uf041 \uf278 \uf276 \uf277 \uf222 \uf227 \uf229 \uf22b \uf22a \uf136 \uf20c \uf23a \uf0fa \uf11a \uf223 \uf130 \uf131 \uf068 \uf056 \uf146 \uf147 \uf289 \uf10b \uf285 \uf0d6 \uf186 \uf21c \uf245 \uf001 \uf22c \uf1ea \uf247 \uf248 \uf263 \uf264 \uf23d \uf19b \uf26a \uf23c \uf18c \uf1fc \uf1d8 \uf1d9 \uf0c6 \uf1dd \uf04c \uf28b \uf28c \uf1b0 \uf1ed \uf040 \uf14b \uf295 \uf095 \uf098 \uf200 \uf2ae \uf1a8 \uf1a7 \uf0d2 \uf231 \uf0d3 \uf072 \uf04b \uf144 \uf01d \uf1e6 \uf067 \uf055 \uf0fe \uf196 \uf011 \uf02f \uf288 \uf12e \uf1d6 \uf029 \uf128 \uf059 \uf29c \uf10d \uf10e \uf1d0 \uf074 \uf1b8 \uf1a1 \uf281 \uf1a2 \uf021 \uf25d \uf18b \uf01e \uf079 \uf018 \uf135 \uf0e2 \uf158 \uf143 \uf267 \uf28a \uf002 \uf010 \uf00e \uf213 \uf233 \uf1e0 \uf1e1 \uf14d \uf045 \uf132 \uf21a \uf214 \uf290 \uf291 \uf07a \uf090 \uf2a7 \uf08b \uf012 \uf215 \uf0e8 \uf216 \uf17e \uf198 \uf1de \uf1e7 \uf118 \uf2ab \uf2ac \uf2ad \uf0dc \uf15d \uf15e \uf160 \uf161 \uf0de \uf0dd \uf162 \uf163 \uf1be \uf197 \uf110 \uf1b1 \uf1bc \uf0c8 \uf096 \uf18d \uf16c \uf005 \uf089 \uf123 \uf006 \uf1b6 \uf1b7 \uf048 \uf051 \uf0f1 \uf249 \uf24a \uf04d \uf28d \uf28e \uf21d \uf0cc \uf1a4 \uf1a3 \uf12c \uf239 \uf0f2 \uf185 \uf12b \uf0ce \uf10a \uf02b \uf02c \uf0ae \uf26c \uf1d5 \uf120 \uf034 \uf035 \uf00a \uf009 \uf00b \uf2b2 \uf08d \uf165 \uf088 \uf087 \uf164 \uf145 \uf057 \uf05c \uf043 \uf204 \uf205 \uf25c \uf238 \uf225 \uf1f8 \uf014 \uf1bb \uf181 \uf262 \uf091 \uf0d1 \uf195 \uf1e4 \uf173 \uf174 \uf1e8 \uf099 \uf081 \uf0e9 \uf0cd \uf29a \uf09c \uf13e \uf093 \uf287 \uf007 \uf0f0 \uf234 \uf21b \uf235 \uf221 \uf226 \uf228 \uf237 \uf2a9 \uf2aa \uf03d \uf27d \uf194 \uf1ca \uf189 \uf2a0 \uf027 \uf026 \uf028 \uf1d7 \uf18a \uf232 \uf193 \uf29b \uf1eb \uf266 \uf17a \uf19a \uf297 \uf298 \uf0ad \uf168 \uf169 \uf23b \uf19e \uf1e9 \uf2b1 \uf167 \uf16a \uf166".split(" "),c=i.length,r=0,a=!1,f=o(window);o(function(){o(".sceditor-container iframe").contents().find("head").append(o("<link>",{href:"//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css",rel:"stylesheet",type:"text/css"}))}),o.sceditor.command.set("fontawesome",{awesome:function(s,c,l){var d=o(".sceditor-fontawesome"),p=s.closeDropDown;d.length?d.is(":hidden")?(s.closeDropDown(),d.show()):s.closeDropDown():(p(),s.closeDropDown=function(){p.apply(p,arguments),d.is(":visible")&&d.hide()},d=o("<div>",{class:"sceditor-dropdown sceditor-fontawesome"}).click(function(o){o.stopPropagation()}),d.appendTo("body"),t(d),d.scrollTop(0),d.on("click",".fa",function(o){l(this.textContent),o.ctrlKey||s.closeDropDown()}),d.scroll(function(){return!a&&(!(r>=i.length)&&(!(d.scrollTop()+250+50<d[0].scrollHeight)&&void t(d)))})),e(d,c),n||(n=!0,f.resize(function(){e(d,c)}))},exec:function(t){var e=this;o.sceditor.command.get("fontawesome").awesome(e,t,function(o){e.insert("&nbsp;[font=FontAwesome]"+o+"[/font]&nbsp;","",!0,!0,!0)})},txtExec:function(t){var e=this;o.sceditor.command.get("fontawesome").awesome(e,t,function(o){e.insert(" [font=FontAwesome]"+o+"[/font] ","")})},tooltip:s}),toolbar=toolbar.replace(/date,/,"fontawesome,date,")}}(jQuery);
!function(o){"use strict";function e(o){o.css('font[face="monospace"]{color:green;background:#f4f4f4;padding:2px 5px;display:inline-block;margin:-2px 3px;border-radius:2px}'),o.insert(" [font=monospace]","[/font] ")}o.sceditor&&(o.sceditor.command.set("inline-code",{exec:function(){e(this)},txtExec:function(){e(this)},tooltip:"Code snippet"}),toolbar=toolbar.replace(/code/,"code,inline-code"))}(jQuery);
!function(e){"use strict";function a(e,a){var t,s,l=v.slice(1);return a&&(a=a.split(/\?|#/),l=a.length>=2?a[1]:""),""===l?null:(t=l.split(/&amp;|&|=/),s=t.indexOf(e),s!==-1&&s%2===0?t[s+1]:null)}function t(a){var t=e("."+a+"-link");t.length&&t.addClass("active")}var s=e(".search-form"),l=e(".main-menu"),r=e(".user-menu"),i=e("#togglesearch"),n=e("#togglemenu"),c=e("#nav"),o=e(".home-link"),u=e(".current-user"),d=e(".current-avatar"),f=e(".new-mail"),g=location,m=g.pathname,v=g.search;if(i.on("click",function(){n.hasClass("active")&&(n.removeClass("active"),l.add(r).fadeOut("fast"),c.slideUp("fast")),i.toggleClass("active"),s.fadeToggle("fast"),c.slideToggle("fast")}),n.on("click",function(){i.hasClass("active")&&(i.removeClass("active"),s.fadeOut("fast"),c.slideUp("fast")),n.toggleClass("active"),l.add(r).fadeToggle("fast"),c.slideToggle("fast")}),"/"!==m&&(o.removeClass("active"),"/privmsg"===m?t("inbox"):"/profile"===m?t("?mode=editprofile"===v?"editprofile":a("page_profil")):"/search"===m?t(""!==v&&"?tt=1"!==v?a("search_id"):"search"):/^\/g\d+\-/.test(m)?t("groups"):/^\/(memberlist|groups|calendar|faq|login|register)$/.test(m)&&t(m.slice(1))),d.length){u.text(_userdata.username),d.html(_userdata.avatar),e("a",".current-user-link").attr("href","/u"+_userdata.user_id+"wall");var h=f.text();/\d+/.test(h)&&f.text(h.match(/\d+/)).show()}}(jQuery);
!function(t){"use strict";t.fn.touchAnimate=function(n){var e=t.extend(!0,{even:{opacity:1},odd:{opacity:0},animateElement:function(t){return t.find("ul")}},n),i=!1;return this.on("click",function(){var n=t(this),o=e.animateElement(n);i=!i,i?o.css("visibility","visible").stop(!0,!1).animate(e.even,"fast",function(){n.addClass("active")}):o.stop(!0,!1).animate(e.odd,"fast",function(){n.removeClass("active"),o.css("visibility","hidden")})})}}(jQuery),function(t){"use strict";function n(t,n,e){var i;return function(){var o=this,a=arguments,u=function(){i=null,e||t.apply(o,a)},s=e&&!i;clearTimeout(i),i=setTimeout(u,n),s&&t.apply(o,a)}}if("ontouchstart"in window||navigator.msMaxTouchPoints){var e=t(".has-sub"),i=t(".sub4r"),o=t(".member-avatar"),a=t(window),u=n(function(){a.width()<768?e.add(i).add(o).off("click").find("ul").removeAttr("style"):(e.touchAnimate({even:{top:37},odd:{top:20}}),i.touchAnimate({even:{top:15},odd:{top:5}}),o.touchAnimate({even:{left:85},odd:{left:70},animateElement:function(t){return t.next(".member-status")}}))});a.on("load resize",u)}}(jQuery);