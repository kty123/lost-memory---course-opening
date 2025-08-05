function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Whgjl1EDQm":
        Script1();
        break;
      case "5fI8KXKmvUm":
        Script2();
        break;
      case "6BBqRCBbu05":
        Script3();
        break;
      case "5carLggJQPd":
        Script4();
        break;
      case "6bP5AxSlYdI":
        Script5();
        break;
      case "6jduTOcYMwN":
        Script6();
        break;
      case "6iGaB24nYfA":
        Script7();
        break;
      case "6SZxuQojcnN":
        Script8();
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

window.Script7 = function()
{
  const target = object('5luGcbkK6UT');
const duration = 750;
const easing = 'ease-out';
const id = '6LmpRh2ScV7';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6cgavaqatRv');
const duration = 750;
const easing = 'ease-out';
const id = '647nTp1yWlI';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
