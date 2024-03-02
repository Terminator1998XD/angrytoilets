var WinLoseListern = false;
function GoPlay(skip = false){
  let toGame = function(){
    $('.overlay').hide(300);
    WinLoseListern = true;
    if(gui == null){
      gui = buildGUI();
      $('body').append(gui);
    }
    setTimeout(push_help,1000);
    if(isMobile) ysdk.adv.hideBannerAdv();
    gui.show(200);
  };
  mfplay = true;
  console.log("SKIP ADV: " + skip)
  if(skip) toGame();
  else yabanner(toGame);
}

function guiHide(){
  if(gui!=null){
    gui.hide(200);
    WinLoseListern = false;
  }
}

var gui = null;
function buildGUI(){
  return $('<span id="gui">').append([buildGUILeft(),buildGUIRight()]).hide();
}

function buildGUILeft(){
  return $('<div id="guileft" class="buttonsContainer">').append(getMusicButton());
}

function buildGUIRight(){
  return $('<div id="guiright" class="buttonsContainer">').append([
    getToMenuButton(true),
    getResetButton(false)
  ]);
}
function hideGUI(){
  gui.hide();
}

var musicOnState = null;
var musicOffState = null;
function getMusicButton(){
  if(musicOnState == null) musicOnState = $('<img>').attr('src','img/music_on.png');
  if(musicOffState == null) musicOffState = $('<img>').attr('src','img/music_off.png');

  const elem = $('<div class="button">').append(musicOnState).click(function(){
    if(btnDTC.check()){
        UserMusEnable = !UserMusEnable;

        if(UserMusEnable){
          elem.empty().append(musicOnState.clone());
          playMusic();
        }
        else{
          elem.empty().append(musicOffState.clone());
          pauseMusic();
        }
    }
  });
  return elem;
}
