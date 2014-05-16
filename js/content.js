(function (chrome) {
    var js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = chrome.extension.getURL('js/inject.js');
    if (document.getElementsByTagName('head').length !== 0){
      debugger;
      document.getElementsByTagName('head')[0].appendChild(js);
    }

}(chrome));
