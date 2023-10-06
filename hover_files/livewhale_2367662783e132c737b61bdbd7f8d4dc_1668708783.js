/*      Request ID: 2367662783e132c737b61bdbd7f8d4dc_1668708783 (09/19/2023 2:34am) (FctBDsAgCADBF1WeZBSp2oAYwfT7tYe9TLLQVAjs3n+BX0wcUAXmztwxNheG2EddVDoNN/BGQgaVNScGw9Xn0bPRKGlduM1VwmMf)      */



/*      Resource ID: 6fbf713b741c1646281ec769677 (calendar-custom.js, minified by uglifyjs) (09/19/2023 2:34am) (A:28232, G:12380, K:12380)      */

(function(b,y){var t=b("body");t.bind("calLoad.lwcal",function(e,t,a){var l=t.getView();var i=b(".date-before-after");var r=y.lwCalendar.ListView.prototype.getDateFromYmd;if("home"===l){var s=b("#lw_cal_events"),n=s.find("ul.lwc-list");var c=n.clone().removeClass("col-3").addClass("col-2");c.children().slice(2).remove();n.before(c);n.children().slice(0,2).remove();n.children().slice(6).remove()}var o=a.title;var d,u;if("event"===l){o=a.event.title}else if("all"===l){o="All Events";d=t.getVar("date");u=t.getVar("end_date");if(d.length&&d[0].length===8&&u.length&&u[0].length===8){o=y.lwCalendar.ListView.prototype.getDateRange(r(d[0]),r(u[0]))}}b(".breadcrumb .lw-calendar-location").html(o)});function e(r){var s;t.bind("calBeforeChange.lwcal",function(e,t,a,l){var i=t.getView();if("home"===i){t.setVar("groups",r)}else if("home"===s){t.clearVar("groups")}s=i;return true})}if(!livewhale.group_directory){e("Communications and Marketing")}var a=function(e){this.categories=[];this.audiences=[];this.locations=[];this.date_str=null;this.groups=[];this.tags=[];this.$search=b("#lw_cal_search_form").addClass("lw-cal-search-form");this.controller=e;this.buildCategorySelectMenus();this.setDateSelectHandler();this.setCategorySelectHandler();this.setSearchHandler();this.addUpdateSearchOnChangeHandler()};b.extend(a.prototype,{getDatesFromString:function(e){var t=y.lwCalendar.ListView.prototype.getYmdFromDate;var a,l,i;var r=null;switch(e){case"today":l=new Date;i=new Date;break;case"tomorrow":l=new Date;l.setDate(l.getDate()+1);i=l;break;case"week":l=new Date;l.setDate(l.getDate()-l.getDay());i=new Date(l);i.setDate(i.getDate()+6);break;case"weekend":l=new Date;l.setDate(l.getDate()+(6-l.getDay()));i=new Date(l);i.setDate(i.getDate()+1);break;case"next_week":l=new Date;l.setDate(l.getDate()+(7-l.getDay()));i=new Date(l);i.setDate(i.getDate()+6);break;case"next_month":a=new Date;if(a.getMonth()===11){l=new Date(a.getFullYear()+1,0,1);i=new Date(a.getFullYear()+1,11,0)}else{l=new Date(a.getFullYear(),a.getMonth()+1,1);i=new Date(a.getFullYear(),a.getMonth()+2,0)}break;default:break}if(l&&i){r=[t(l),t(i)]}return r},setDateSelectHandler:function(){var l=this;var i=b(".lw_cal_date_selector .lwc_selector_label");t.on("click",".lw_cal_date_selector .lwc_dropdown input:checkbox",function(e){var t=b(this);var a=t.closest(".lw_cal_date_selector");a.find("li.selected").removeClass("selected");l.date_str="";if(this.checked){t.closest("li").addClass("selected").siblings().find(":checkbox").prop("checked",false);l.date_str=t.val();i.text(t.closest("label").text())}})},addCategory:function(e,t){if("location"===e){if(-1===b.inArray(t,this.locations)){this.locations.push(t)}}else if("audience"===e){if(-1===b.inArray(t,this.audiences)){this.audiences.push(t)}}else if("tag"===e){if(-1===b.inArray(t,this.tags)){this.tags.push(t)}}else if("group"===e){if(-1===b.inArray(t,this.groups)){this.groups.push(t)}}else{if(-1===b.inArray(t,this.categories)){this.categories.push(t)}}},removeCategory:function(e,t){if("location"===e){this.locations=b.grep(this.locations,function(e){return e!==t})}else if("audience"===e){this.audiences=b.grep(this.audiences,function(e){return e!==t})}else if("tag"===e){this.tags=b.grep(this.tags,function(e){return e!==t})}else if("group"===e){this.groups=b.grep(this.groups,function(e){return e!==t})}else{this.categories=b.grep(this.categories,function(e){return e!==t})}},updateCount:function(){b(".lwc_selector").each(function(){var e=b(this).find("input:checked");var t=b(this).find(".cnt");if(e.length){e.closest("li").addClass("selected");t.text(" ("+e.length+")");b(this).addClass("is-active")}else{t.text("");b(this).removeClass("is-active")}})},setCategorySelectHandler:function(){var c=this;t.on("change",".lwc_selector:not(.lw_cal_date_selector) li input",function(e){var t=b(e.currentTarget).closest("li");var a=t.closest(".lwc_selector");var l=a.find(".cnt");var i=t.find("input");var r=i.length&&i.val()?i.val():t.text();if(!b(e.target).is("input[type=checkbox]")){return true}var s="category";if(a.hasClass("lw_cal_audience_selector")){s="audience"}else if(a.hasClass("lw_cal_location_selector")){s="location"}else if(a.hasClass("lw_cal_tag_selector")){s="tag"}else if(a.hasClass("lw_cal_group_selector")){s="group"}if(t.hasClass("selected")){t.removeClass("selected");c.removeCategory(s,r)}else{t.addClass("selected");c.addCategory(s,r)}var n=a.find("li.selected");if(n.length){l.text(" ("+n.length+")");a.addClass("is-active")}else{l.text(" ");a.removeClass("is-active")}return true});var s=t.find(".lwc_selector");var n=t.find(".lwc_dropdown");t.on("click keydown",".lwc_selector_title",function(e){var t=b(this),a=t.closest(".lwc_selector"),l=a.find(".lwc_dropdown");if(e.type=="click"||e.type=="keydown"&&e.which==13){if(!l.is(":visible")){s.not(a).removeClass("is-open");n.not(l).slideUp(0);l.slideDown(200);a.addClass("is-open");var i=l.find(".filter-option").find("input:checked");var r=i.length?i.first():l.find(".filter-option").find("input, a").first();r.focus()}else{l.slideUp(100);a.removeClass("is-open")}}});t.on("click touchstart keydown",function(e){if(!s.is(e.target)&&s.has(e.target).length===0){s.removeClass("is-open");n.slideUp(0)}if((s.is(e.target)||s.has(e.target).length)&&e.which==27){s.removeClass("is-open");n.slideUp(0);b(e.target).closest(".filter").find(".lw_cal_feed_selector-label").focus()}})},getAudienceList:function(){return livewhale.calendar.categories_audience},getLocationList:function(){return livewhale.calendar.categories_campus},getCategoryList:function(){var e=this;if(!this.category_list){if(livewhale.group_fullname=="Arts and Culture"||livewhale.group_fullname=="SFU's Vancity Office of Community Engagement"||livewhale.group_fullname=="Woodward's Cultural Programs"){this.category_list=["Theatre","Film","Music","Visual Art","Dance","Exhibits","Multimedia","Lecture or Discussion"]}else{this.category_list=livewhale.calendar.categories}}return this.category_list},buildCategorySelectMenus:function(){var e=this;var t=this.$search;var a=t.find(".lw_cal_category_selector ul");var l=t.find(".lw_cal_audience_selector ul");var i=t.find(".lw_cal_location_selector ul");var r=[];var s=[];var n=[];var c=[];var o=[];var d=[];var u=y.lwCalendar.controller;var h={"All Students":1,"Prospective Students":2,"Undergraduate Students":3,"Graduate Students":4,Alumni:5,Public:6,Faculty:7,Staff:8};var f={"SFU Burnaby Campus":1,"SFU Surrey Campus":2,"SFU Vancouver Campus":3,"Off Campus":4,Online:5};s=this.getAudienceList();n=this.getLocationList();r=this.getCategoryList();n=n.sort(function(e,t){return f[e]-f[t]});s=s.sort(function(e,t){return h[e]-h[t]});b.each(n,function(e,t){o.push('<li><label><input type="checkbox" value="'+t+'"/>'+t+"</label></li>")});b.each(s,function(e,t){c.push('<li><label><input type="checkbox" value="'+t+'"/>'+t+"</label></li>")});b.each(r,function(e,t){d.push('<li><label><input type="checkbox" value="'+t+'"/>'+t+"</label></li>")});a.append(d.join(""));l.append(c.join(""));i.append(o.join(""));var g=t.find(".lw_cal_group_selector ul");if(g.length){var v=[];var p=[];b.each(livewhale.calendar.groups,function(e,t){t=t.title.replace("&amp;","&");v.push(t)});b.each(v,function(e,t){p.push('<li><label><input type="checkbox" value="'+t+'"/>'+t+"</label></li>")});g.append(p.join(""))}var _=t.find(".lw_cal_tag_selector ul");if(_.length){var w=[];var m=[];b.each(livewhale.calendar.tags,function(e,t){t=t.replace("&amp;","&");w.push(t)});b.each(w,function(e,t){m.push('<li><label><input type="checkbox" value="'+t+'"/>'+t+"</label></li>")});_.append(m.join(""))}this.updateCount()},copySearchBarToFooter:function(){var e=this.$search.clone();e.find(".lw-cal-search-form").removeAttr("id","lw_cal_search_form");var t=b("#page > footer").hide();var a=b('<div class="footer"/>').html(t.html()).insertAfter(t);this.$search=this.$search.add(e.appendTo(a))},clearForm:function(){this.$search.find(".lwc_selector").removeClass("is-active").find(".lwc_selector_title .cnt").text("").end().find("li.selected").removeClass("selected").end().find("input:checked").prop("checked",false);this.$search.find(".lw_cal_date_selector .lwc_selector_label").text("Dates");this.$search.find("#lw_cal_search").val("");this.categories=[];this.audiences=[];this.locations=[];this.tags=[];this.groups=[];this.date_str=""},setSearchHandler:function(){var i=this;var r=this.controller;var e=b(".lw-cal-search-form").unbind("submit").submit(function(e){e.preventDefault();var t=b(this).find('input[type="text"]');var a=t.val();var l;r.clearVars();if(!a&&r.getVar("search").length){r.clearVar("search")}if(a){r.setVar("search",a)}r.setVar("view","all");if(i.date_str){l=i.getDatesFromString(i.date_str);r.setVar("date",l[0]);if("week"===i.date_str||"next_week"===i.date_str){r.setVar("view","week")}else if("today"===i.date_str||"tomorrow"===i.date_str){r.setVar("view","day")}else{r.setVar("end_date",l[1])}if(b.isArray(l)&&l.length===2){r.setVar("date",l[0])}}if(i.categories&&i.categories.length){r.setVar("categories",i.categories)}if(i.audiences&&i.audiences.length){r.setVar("audience",i.audiences)}if(i.locations&&i.locations.length){r.setVar("campus",i.locations)}if(i.tags.length){r.setVar("tags",i.tags)}if(i.groups.length){r.setVar("groups",i.groups)}r.load();b("#lw_cal_events").focus();return false})},addUpdateSearchOnChangeHandler:function(){var f=this;var g=[];var v=[];var p=[];var w=[];var m=livewhale.calendar.tags;v=this.getAudienceList();p=this.getLocationList();g=this.getCategoryList();b.each(livewhale.calendar.groups,function(e,t){w.push(t["title"])});var i=function(){var e=y.lwCalendar.controller;var t=e.getVar("categories");var a=e.getVar("audience");var l=e.getVar("campus");var i=e.getVar("groups");var r=e.getVar("tags");var s=b(".lw_cal_category_selector");var n=b(".lw_cal_audience_selector");var c=b(".lw_cal_location_selector");var o=b(".lw_cal_tag_selector");var d=b(".lw_cal_group_selector");f.clearForm();var u=e.getVar("search");var h=u.length?u[0]:"";f.$search.find("#lw_cal_search").val(h);b.each(t,function(e,t){if(_.includes(g,t.replace("&","&amp;"))){s.find(':checkbox[value="'+t+'"]').trigger("click")}});b.each(a,function(e,t){if(_.includes(v,t.replace("&","&amp;"))){n.find(':checkbox[value="'+t+'"]').trigger("click")}});b.each(l,function(e,t){if(_.includes(p,t.replace("&","&amp;"))){c.find(':checkbox[value="'+t+'"]').trigger("click")}});if(o.length){b.each(r,function(e,t){if(_.includes(m,t.replace("&","&amp;"))){o.find(':checkbox[value="'+t+'"]').trigger("click")}})}if(d.length){b.each(i,function(e,t){if(_.includes(w,t.replace("&","&amp;"))){d.find(':checkbox[value="'+t+'"]').trigger("click")}})}};t.on("calChange.lwcal",function(e,t,a,l){i()});i()}});t.bind("calInit.lwcal",function(){var s=y.lwCalendar;var n=s.controller;var e=new a(n);t.on("click",".date-before-after .previous,.date-before-after .next",function(e){e.preventDefault();var t=b(this).attr("data-href");n.setVarsInRelativeUrl(t);n.load();return true});t.unbind("lw.calendarViewClick").bind("lw.calendarViewClick",function(e,t){var a,l,i;var r=s.ListView.prototype.getYmdFromDate;alert("calendarViewClick");if(t.replace(/^#!?/,"")==="view/all"){n.clearVars()}n.setVarsInRelativeUrl(t);n.clearVar("more");n.load();return true})});t.on("click keydown",".lwc_event_detail--mobile-more-button",function(e){if(e.type=="click"||e.type=="keydown"&&(e.which==13||e.which==32)){b(this).next().slideDown();b(this).attr("aria-expanded","true").css("opacity",0)}});t.on("click",".mobile-search",function(e){e.preventDefault();var t=b(this);var a=t.hasClass("mobile-hide");var l=t.closest(".lw_filters").find(".category_selector");t.addClass("hide");t.siblings("a").removeClass("hide");if(a){l.removeClass("show")}else{l.addClass("show")}return true});b("body").bind("calLoad.lwcal calPaginate.lwcal",function(e,t,a){var l=t.getView();var i=b("#lw_cal_this_day").text();b("#lwc-view").text(i);if(b(".lw_cal_pagination.pagination-controls").text().length){b(".lw_cal_pagination.pagination-controls").html(function(e,t){return t.replace("|","<br/>")})}if("event"!==l&&"home"!==l){var r=b("#lw_cal_events"),s=r.find(".lwc-list"),n=s.first(),c=b("#lw_cal_events > ul > li"),o=b("#lw_cal_events > .lwc-date-separator"),s=b("#lw_cal_events > div.lw_cal_event_list");o.remove();c.appendTo(n);b("#lw_cal_events ul.lwc-list").not(":first").remove()}})})(livewhale.jQuery,livewhale);