!function(U){function a(t,e,a){var n=new Date,l=n.getDate(),C=n.getMonth(),T=n.getFullYear(),b=l,L=C,F=T,O=a,r=null,o=null,j={posts:[],prev:null,next:null},a="en";(t=t)&&"undefined"!=typeof calLanguages&&calLanguages[t]&&(a=t);var A=U.extend({},U.fn.aCalendar.defaults,"undefined"==typeof calLanguages?{}:calLanguages[a],e);function S(){L<11?L++:(L=0,F++),p()}function W(){0<L?L--:(L=11,F--),p()}function E(t){t&&(F=t.getFullYear(),L=t.getMonth(),p())}function R(){A.single?null!=A.url&&""!=A.url&&(null===r&&U.ajax({url:A.url,async:!1,success:function(t){r=t,s(Object.keys(r))}}),null!==r&&u()&&(j.posts=r[F+"-"+(L+1)])):function(){null===o&&U.ajax({url:A.root+"list.json",async:!1,success:function(t){s(t)}});u()&&U.ajax({url:A.root+F+"-"+(L+1)+".json",async:!1,success:function(t){j.posts=t}})}()}function s(t){o=t.map(function(t){t=t.split("-");return new Date(Date.UTC(+t[0],+t[1]-1))})}function u(){var t=Date.UTC(F,L);if(null!==o&&0!==o.length&&(0!==j.posts.length||!(null===j.prev&&null!==j.next&&j.next.getTime()>t||null===j.next&&null!==j.prev&&j.prev.getTime()<t))){j.posts=[];for(var e=0;e<o.length;e++){var a=o[e].getTime();if(t===a)return j.prev=0===e?null:o[e-1],j.next=e===o.length-1?null:o[e+1],1;if(t<a){j.prev=0===e?null:o[e-1],j.next=o[e];break}j.prev=o[e],j.next=null}}}function J(t,e){var a,n={"LMM+":A.months[t.getMonth()],"MM+":t.getMonth()+1};for(a in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,"LMM+"===a?n[a]:("00"+n[a]).substr((""+n[a]).length)));return e}function p(){R();var t=new Date(F,L,1).getDay()-A.weekOffset;t<=0&&(t=6- -1*(t+1));var e=new Date(F,L+1,0).getDate(),a=new Date(F,L,0).getDate()-t+1,n=U("<div/>").addClass("cal-head"),l=U("<div/>"),r=U("<div/>"),o=U("<div/>").addClass("cal-title");r.html(A.headArrows.previous),l.html(A.headArrows.next),curDate=new Date(Date.UTC(F,L)),0===j.posts.length?o.html(J(curDate,A.titleFormat)):(cTitleLink=U("<a/>").attr("href",J(curDate,A.titleLinkFormat)).attr("title",J(curDate,A.postsMonthTip)).html(J(curDate,A.titleFormat)),o.html(cTitleLink)),r.on("click",W),l.on("click",S),n.append(r),n.append(o),n.append(l);for(var s=U("<table/>").addClass("cal"),u=A.weekOffset,p=U("<thead/>"),d=U("<tr/>"),i=0;i<7;i++){6<u&&(u=0);var c=U("<th/>").attr("scope","col").attr("title",A.dayOfWeek[u]);c.html(A.dayOfWeekShort[u]),d.append(c),u++}p.append(d),s.append(p);var f=U("<tfoot/>"),h=U("<tr/>"),r=U("<td/>").attr("colspan",3),o=U("<td/>").html("&nbsp;"),l=U("<td/>").attr("colspan",3);j.prev&&r.html(A.footArrows.previous+A.months[j.prev.getMonth()]).addClass("cal-foot").attr("title",J(j.prev,A.postsMonthTip)),j.next&&l.html(A.months[j.next.getMonth()]+A.footArrows.next).addClass("cal-foot").attr("title",J(j.next,A.postsMonthTip)),r.on("click",function(){E(j.prev)}),l.on("click",function(){E(j.next)}),h.append(r),h.append(o),h.append(l),f.append(h);for(var y=U("<tbody/>"),g=1,v=1,i=0;i<6;i++){for(var m=U("<tr/>"),M=0;M<7;M++){var x=U("<td/>");if(7*i+M<t)x.addClass("cal-gray"),x.html(a++);else if(g<=e){g==b&&C==L&&T==F&&x.addClass("cal-today");for(var D,k={num:0,keys:[]},w=0;w<j.posts.length;w++){new Date(Date.parse(j.posts[w].date)).getDate()==g&&(k.keys[k.num++]=w)}0!==k.num?(D=k.keys[0],D=U("<a>").attr("href",j.posts[D].link).attr("title",j.posts[D].title).html(g++),x.append(D)):x.html(g++)}else x.addClass("cal-gray"),x.html(v++);m.append(x)}y.append(m)}s.append(p),s.append(f),s.append(y),U(O).html(n),U(O).append(s)}return"/"!==A.root[0]&&(A.root="/"+A.root),"/"!==A.root[A.root.length-1]&&(A.root+="/"),p()}U.fn.aCalendar=function(t,e){return this.each(function(){return a(t,e,U(this))})},U.fn.aCalendar.defaults={months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["S","M","T","W","T","F","S"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],postsMonthTip:"Posts published in LMM yyyy",titleFormat:"yyyy LMM",titleLinkFormat:"/archives/yyyy/MM/",headArrows:{previous:'<span class="cal-prev"></span>',next:'<span class="cal-next"></span>'},footArrows:{previous:"« ",next:" »"},weekOffset:0,single:!0,root:"/calendar/",url:"/calendar.json"},U(document).ready(function(){U("#calendar").aCalendar("zh-CN")})}(jQuery);