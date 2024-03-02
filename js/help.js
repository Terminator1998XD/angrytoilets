var showedHelp = [];
var pushedHelp = [];

function push_help(){
  for(let i = 0; i < pushedHelp.length; i++){
    _help(pushedHelp[i]);
  }
  pushedHelp = [];
}

function help(bird){
  pushedHelp.push(bird);
}

var tmo = null;
function _help(bird){
    if(parseInt(showedHelp.indexOf(bird)) == -1){
    if(tmo!=null)clearInterval(tmo);
    if(helpUI != null){
      helpUI.remove();
    }
    console.log("HELP of bird: " + bird);
    helpUI = buildHelpUI();
    $('body').append(helpUI);
    showedHelp.push(bird);
    helpCont.attr('src','img/'+bird+'.gif')
    helpUI.show(200);
    if(window.isMobile){
      setTimeout(function(){
        tmo = null;
        helpCont.attr('src','');
        helpUI.hide(200);
      },10000);
    }
  }
}

var helpUI = null;
function buildHelpUI(){
    return $('<div id="help">').append([
      helpCaption(),
      helpContent()
    ]);
}

function helpCaption(){
  return $('<div id="helpheader">').append([
    $('<span>').text(TXT('tut')).css({'display':'inline-block','float':'left'}),
    $('<span id="closeHelp">').text(window.isMobile ? ' ' : 'X').click(function(){
      helpCont.attr('src','');
      helpUI.hide(200);
    })
  ]).css({'background-color':'rgba(123, 123, 120, 0.8)'});
}

var helpCont = null;
function helpContent(){
  helpCont = $('<img>');
  return $('<div id="helpContent">').append(helpCont);
}

function SetCursor(cursor){
  if(!window.isMobile) $('canvas').css({'cursor':cursor});
}
