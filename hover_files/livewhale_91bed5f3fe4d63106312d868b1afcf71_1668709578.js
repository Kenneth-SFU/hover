/*      Request ID: 91bed5f3fe4d63106312d868b1afcf71_1668709578 (09/19/2023 2:34am) (Lcu7DYAwDADRjeIpEBUzoCSYfGTjgDER2wMSxelVB1kYQVf7ctSjJxeFoVmgEud8MgGVC3v2hNDIUtkU6m543D/vNYokwsk3HTjg4qo+)      */



/*      Resource ID: 2287906ed37da92a33f789c5ee6 (jquery.lwGoogleMapsEmbed.js, minified by uglifyjs) (09/19/2023 2:34am) (A:1944, G:1069, K:1069)      */

(function(o){o.widget("lw.lwGoogleMapsEmbed",{options:{api_key:null,is_interactive:false,latitude:null,longitude:null,address:null,width:null,height:null,aspect_ratio:"1:1",zoom:null},_create:function(){var e=this.element;var t=this.options;var i=o('<iframe class="lw_map_iframe" tabindex="-1" frameborder="0" style="border:0" allowfullscreen></iframe>');if(!t.api_key||!t.address&&!(t.latitude&&t.longitude)){return false}var a=t.address?t.address:t.latitude+","+t.longitude;var l="https://www.google.com/maps/embed/v1/place"+"?key="+t.api_key+"&q="+encodeURIComponent(a);if(t.zoom){l+="&zoom="+t.zoom}i.attr("src",l);if(t.width&&t.height){t.width=""+t.width;i.attr("width",t.width.replace("/px/",""));t.height=""+t.height;i.attr("height",t.height.replace("/px/",""))}else{i=o('<div class="lw_responsive_iframe_wrapper"></div>').append(i)}if(typeof t.aspect_ratio==="string"){var r=t.aspect_ratio.split(":");if(r.length===2&&o.isNumeric(r[0])&&o.isNumeric(r[1])){var s=r[1]/r[0];i.css("padding-top",(s*100).toFixed(2)+"%")}}o(e).html(i)}})})(livewhale.jQuery||jQuery);