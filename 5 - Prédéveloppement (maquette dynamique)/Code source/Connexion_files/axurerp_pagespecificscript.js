for(var i = 0; i < 45; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('MemoPwd')) != ('')) {

SetWidgetFormText('u34', GetGlobalVariableValue('MemoPwd'));

SetWidgetFormText('u37', GetGlobalVariableValue('MemoLogin'));

	var obj1 = document.getElementById("u25");
    obj1.focus();

SetCheckState('u28', true);

SetCheckState('u26', true);

	var obj1 = document.getElementById("u26");
    obj1.disabled = false;

	SetPanelState('u15', 'pd1u15','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('MemoLogin')) != ('')) {

SetWidgetFormText('u37', GetGlobalVariableValue('MemoLogin'));

	var obj1 = document.getElementById("u34");
    obj1.focus();

SetCheckState('u28', true);

	var obj1 = document.getElementById("u26");
    obj1.disabled = false;

}

if ((GetGlobalVariableValue('connexion')) == ('true')) {

	SetPanelState('u6', 'pd1u6','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

}

});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u17'] = 'center';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if ((GetCheckState('u28')) == (false)) {

	var obj1 = document.getElementById("u26");
    obj1.disabled = true;

SetCheckState('u26', false);

}
else
if ((GetCheckState('u28')) == (true)) {

	var obj1 = document.getElementById("u26");
    obj1.disabled = false;

}
});
gv_vAlignTable['u29'] = 'top';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u8'] = 'top';document.getElementById('u32_img').tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

	SetPanelState('u30', 'pd0u30','none','',500,'none','',500);

}
});
document.getElementById('u35_img').tabIndex = 0;

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	SetPanelState('u30', 'pd1u30','none','',500,'none','',500);

}
});
gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u44'] = 'top';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Accueil.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u12'] = 'top';
u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if ((GetCheckState('u26')) == (true)) {

	SetPanelState('u15', 'pd1u15','fade','',1000,'fade','',1000);

	SetPanelVisibility('u15','','none',500);

}
else
if (true) {

	SetPanelVisibility('u15','hidden','fade',500);

}
});
u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Inscription.html');

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u40'] = 'center';u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

SetGlobalVariableValue('connexion', 'false');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Accueil.html');

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u23'] = 'top';
u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (((GetCheckState('u28')) == (true)) && (((GetWidgetText('u37')) == ('root')) && ((GetWidgetText('u34')) == ('root')))) {

SetGlobalVariableValue('MemoLogin', GetWidgetText('u37'));

}

if (((GetCheckState('u26')) == (true)) && (((GetWidgetText('u37')) == ('root')) && ((GetWidgetText('u34')) == ('root')))) {

SetGlobalVariableValue('MemoPwd', GetWidgetText('u34'));

}

if (((GetWidgetText('u37')) == ('root')) && ((GetWidgetText('u34')) == ('root'))) {

	SetPanelVisibility('u38','','none',500);

SetGlobalVariableValue('connexion', 'true');

	SetPanelState('u38', 'pd1u38','none','',500,'swing','right',2000);
function waitu7bc7ca4600114ea3b5f3f6f5d0ab52b01() {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Accueil.html');
}
setTimeout(waitu7bc7ca4600114ea3b5f3f6f5d0ab52b01, 2000);

}
else
if (((GetWidgetText('u37')) != ('root')) || ((GetWidgetText('u34')) != ('root'))) {

	SetPanelVisibility('u15','','fade',1000);

	SetPanelState('u15', 'pd0u15','fade','',1000,'fade','',1000);

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u22'] = 'top';
$axure.eventManager.keyup('u37', function(e) {

if ((GetPanelState('u15')) == ('pd0u15')) {

	SetPanelVisibility('u15','hidden','fade',100);

}
});

$axure.eventManager.focus('u37', function(e) {

if ((GetWidgetText('u37')) == ('Entrez votre nom d\'utilisateur')) {

SetWidgetFormText('u37', '');

}
});

$axure.eventManager.blur('u37', function(e) {

if ((GetWidgetText('u37')) == ('')) {

SetWidgetFormText('u37', 'Entrez votre nom d\'utilisateur');

}
});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u33'] = 'center';
$axure.eventManager.keyup('u31', function(e) {

if (true) {

SetWidgetFormText('u34', GetWidgetText('u31'));

}
});

$axure.eventManager.keyup('u34', function(e) {

if ((GetPanelState('u15')) == ('pd0u15')) {

	SetPanelVisibility('u15','hidden','fade',100);

}

if (true) {

SetWidgetFormText('u31', GetWidgetText('u34'));

}
});

$axure.eventManager.focus('u34', function(e) {

if ((GetWidgetText('u34')) == ('=====')) {

SetWidgetFormText('u34', '');

}
});
