for(var i = 0; i < 32; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	MoveWidgetBy('u21', GetNum('0'), GetNum('-30'),'none',500);

	var obj1 = document.getElementById("u9");
    obj1.focus();

}

if ((GetGlobalVariableValue('MemoLogin')) != ('')) {

SetCheckState('u15', true);

SetWidgetFormText('u9', GetGlobalVariableValue('MemoLogin'));

	var obj1 = document.getElementById("u15");
    obj1.disabled = false;

	var obj1 = document.getElementById("u29");
    obj1.focus();

}

if ((GetGlobalVariableValue('MemoPwd')) != ('')) {

SetCheckState('u23', true);

SetWidgetFormText('u9', GetGlobalVariableValue('MemoLogin'));

SetWidgetFormText('u29', GetGlobalVariableValue('MemoPwd'));

	var obj1 = document.getElementById("u23");
    obj1.disabled = false;

	var obj1 = document.getElementById("u22");
    obj1.focus();

}

});

widgetIdToShowFunction['u17'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u21', GetNum('0'), GetNum('30'),'swing',500);

}

}

widgetIdToHideFunction['u17'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u21', GetNum('0'), GetNum('-30'),'easeOutBounce',500);

}

}
document.getElementById('u27_img').tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u28'] = 'center';
$axure.eventManager.keyup('u29', function(e) {

if (true) {

	SetPanelVisibility('u17','hidden','fade',100);

SetWidgetFormText('u26', GetWidgetText('u29'));

}
});

$axure.eventManager.focus('u29', function(e) {

if (true) {

;

}
});
gv_vAlignTable['u8'] = 'center';document.getElementById('u30_img').tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

}
});
gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';
u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if ((GetCheckState('u15')) == (false)) {

	var obj1 = document.getElementById("u23");
    obj1.disabled = true;

SetCheckState('u23', false);

}
else
if ((GetCheckState('u15')) == (true)) {

	var obj1 = document.getElementById("u23");
    obj1.disabled = false;

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';
$axure.eventManager.keyup('u26', function(e) {

if (true) {

SetWidgetFormText('u29', GetWidgetText('u26'));

}
});

$axure.eventManager.keyup('u9', function(e) {

if (true) {

	SetPanelVisibility('u17','hidden','fade',100);

}
});

$axure.eventManager.focus('u9', function(e) {

if ((GetWidgetText('u9')) == ('Entrez votre nom d\'utilisateur')) {

SetWidgetFormText('u9', '');

}
});

$axure.eventManager.blur('u9', function(e) {

if ((GetWidgetText('u9')) == ('')) {

SetWidgetFormText('u9', 'Entrez votre nom d\'utilisateur');

}
});
gv_vAlignTable['u3'] = 'center';
u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if ((GetCheckState('u23')) == (true)) {

SetWidgetRichText('u20', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#FF9900;">Yo mec t\'es bien sur ton pc ?</span></p>');

	SetPanelVisibility('u17','','none',500);

}
});
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u5'] = 'center';
u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (((GetCheckState('u15')) == (true)) && (((GetWidgetText('u9')) == ('root')) && ((GetWidgetText('u29')) == ('root')))) {

SetGlobalVariableValue('MemoLogin', GetWidgetText('u9'));

}

if (((GetCheckState('u23')) == (true)) && (((GetWidgetText('u9')) == ('root')) && ((GetWidgetText('u29')) == ('root')))) {

SetGlobalVariableValue('MemoPwd', GetWidgetText('u29'));

}

if (((GetWidgetText('u9')) == ('root')) && ((GetWidgetText('u29')) == ('root'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Connexion.html');

}
else
if (((GetWidgetText('u9')) != ('root')) || ((GetWidgetText('u29')) != ('root'))) {

	SetPanelVisibility('u17','','fade',1000);

SetWidgetRichText('u20', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#FF0033;">Login ou mot de passe incorrects.</span></p>');

}
});
gv_vAlignTable['u31'] = 'center';