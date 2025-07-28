function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6M2RzSKkAbF":
        Script1();
        break;
      case "6DqlS2nBMIg":
        Script2();
        break;
      case "5nbQJ0OPUQm":
        Script3();
        break;
      case "6l10k2828eA":
        Script4();
        break;
      case "69qAWTmR3BJ":
        Script5();
        break;
      case "6K7T9cxgv0S":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('5sgnWgFHgbb');
const duration = 750;
const easing = 'ease-out';
const id = '6o1NspyR8OD';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5Xly5xoCucE');
const duration = 750;
const easing = 'ease-out';
const id = '6aaCXMg1l8u';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('62cIGDSQczB');
const duration = 750;
const easing = 'ease-out';
const id = '60iAamT2urU';
const bounceAmount = 1;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6jfcmWPBXkc');
const duration = 750;
const easing = 'ease-out';
const id = '6cAH86C9NgI';
const bounceAmount = 1;
const delay = 1000;
addToTimeline(
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5x1f4nFxLMS');
const duration = 750;
const easing = 'ease-out';
const id = '60iAamT2urU';
const bounceAmount = 1;
const delay = 0;
addToTimeline(
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6gHtWJSCW8u');
const duration = 750;
const easing = 'ease-out';
const id = '6OD5sNfbez7';
const bounceAmount = 1;
const delay = 1625;
addToTimeline(
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
