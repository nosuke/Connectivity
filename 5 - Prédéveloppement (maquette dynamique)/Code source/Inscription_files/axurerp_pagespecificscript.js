for(var i = 0; i < 49; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('connexion')) == ('true')) {

	SetPanelState('u6', 'pd1u6','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

}

});
gv_vAlignTable['u27'] = 'top';
$axure.eventManager.focus('u16', function(e) {

if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

	SetPanelVisibility('u24','','fade',500);

}

if ((GetWidgetText('u16')) == ('1234')) {

SetWidgetFormText('u16', '');

}
});

$axure.eventManager.blur('u16', function(e) {

if (true) {

	SetPanelVisibility('u24','hidden','fade',500);

}

if ((GetWidgetText('u16')) == ('')) {

SetWidgetFormText('u16', '1234');

}
});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u28'] = 'top';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Connexion.html');

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';
$axure.eventManager.keyup('u15', function(e) {

if (true) {

	SetPanelVisibility('u33','hidden','none',500);

}
});

$axure.eventManager.focus('u15', function(e) {

if ((GetWidgetText('u15')) == ('Entrez votre nom d\'utilisateur')) {

SetWidgetFormText('u15', '');

}
});

$axure.eventManager.blur('u15', function(e) {

if ((GetWidgetText('u15')) == ('')) {

SetWidgetFormText('u15', 'Entrez votre nom d\'utilisateur');

}
});
gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u44'] = 'top';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Accueil.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u26'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u40'] = 'top';u7.tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

SetGlobalVariableValue('connexion', 'false');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Accueil.html');

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u3'] = 'center';
u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

SetGlobalVariableValue('erreursInscription', '0');

}

if ((GetWidgetValueLength('u16')) < Number('8')) {

	SetPanelState('u24', 'pd1u24','fade','',500,'fade','',500);

SetGlobalVariableValue('erreursInscription', '' + (GetGlobalVariableValue('erreursInscription')) + '+1');

}

if ((GetWidgetText('u15')) == ('Entrez votre nom d\'utilisateur')) {

	SetPanelState('u33', 'pd0u33','none','',500,'fade','',500);

SetGlobalVariableValue('erreursInscription', '' + (GetGlobalVariableValue('erreursInscription')) + '+1');

}

if ((GetWidgetText('u20')) == ('Entrez votre adresse e-mail')) {

	SetPanelState('u41', 'pd0u41','none','',500,'fade','',500);

SetGlobalVariableValue('erreursInscription', '' + (GetGlobalVariableValue('erreursInscription')) + '+1');

}

if ((GetWidgetText('u16')) != (GetWidgetText('u18'))) {

	SetPanelState('u37', 'pd0u37','none','',500,'fade','',500);

SetGlobalVariableValue('erreursInscription', '' + (GetGlobalVariableValue('erreursInscription')) + '+1');

}

if ((GetGlobalVariableValue('erreursInscription')) == ('0')) {

	SetPanelVisibility('u45','','none',500);

}
});
gv_vAlignTable['u47'] = 'center';
$axure.eventManager.keyup('u18', function(e) {

if (true) {

	SetPanelVisibility('u37','hidden','none',500);

}
});

$axure.eventManager.focus('u18', function(e) {

if ((GetWidgetText('u18')) == ('1234')) {

SetWidgetFormText('u18', '');

}
});

$axure.eventManager.blur('u18', function(e) {

if ((GetWidgetText('u18')) == ('')) {

SetWidgetFormText('u18', '1234');

}
});
gv_vAlignTable['u19'] = 'top';
$axure.eventManager.keyup('u20', function(e) {

if (true) {

	SetPanelVisibility('u41','hidden','none',500);

}
});

$axure.eventManager.focus('u20', function(e) {

if ((GetWidgetText('u20')) == ('Entrez votre adresse e-mail')) {

SetWidgetFormText('u20', '');

}
});

$axure.eventManager.blur('u20', function(e) {

if ((GetWidgetText('u20')) == ('')) {

SetWidgetFormText('u20', 'Entrez votre adresse e-mail');

}
});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u31'] = 'top';