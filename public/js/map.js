var myMap,myPlacemark;function init(){if(myMap=new ymaps.Map("map",{center:MAP_POINT,zoom:5,controls:[]}),$(window).width()>767){var a=myMap.getGlobalPixelCenter();myMap.setGlobalPixelCenter([a[0]-380,a[1]-100])}else{a=myMap.getGlobalPixelCenter();myMap.setGlobalPixelCenter([a[0]-100,a[1]-80])}myMap.controls.add(new ymaps.control.ZoomControl({options:{position:{right:10,top:70}}})),myPlacemark=new ymaps.Placemark(MAP_POINT,{balloonContentHeader:"MarketingTime - маркетинговое агентство",balloonContentBody:MAP_POINT_TEXT,iconCaption:"MarketingTime"},{iconLayout:"default#image",iconImageHref:"img/map_mark.svg",iconImageSize:[65,65],iconImageOffset:[-32,-65]}),myMap.behaviors.disable("multiTouch"),myMap.behaviors.disable("scrollZoom"),myMap.geoObjects.add(myPlacemark);var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};e.any()&&myMap.behaviors.disable("drag")}ymaps.ready(init);