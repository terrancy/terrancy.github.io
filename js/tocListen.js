(function(){

  //遍历锚点
  var anchors,arrayAnchor,length;

  function _init() {
    anchors = $(".toc-link");
    length = anchors.length;
    arrayAnchor = [];
    for(var i = 0;i<length;i++){
      arrayAnchor.push($(anchors[i]));
    }
  }

  function update(){
    var heigthScroll = $(window).scrollTop();
    var heightTemp = heigthScroll;
    var flag = 0;
    for(var i = 0;i<length;i++){
      if(length == i + 1){
        flag = i;
        continue;
      }
      var heightAnchor = $(arrayAnchor[i].attr('href')).offset().top;
      if(heightAnchor >= heigthScroll && heightTemp <= heigthScroll){
      	flag = i;
      	break;
      }else{
    	  heightTemp = heightAnchor;
    	}
    }
    if(length > 0){
      navigation(flag);
    }
  }

  //高亮导航菜单
  function navigation(id){
      $('.toc-link').removeClass('toc-link-on');
      arrayAnchor[id].addClass('toc-link-on');
  }

  //绑定滚动事件
  function _listen(){
    $(window).bind('scroll',update);
  }

  _init();
  _listen();

  window.tocListen = {
    init: _init
  };
})();
