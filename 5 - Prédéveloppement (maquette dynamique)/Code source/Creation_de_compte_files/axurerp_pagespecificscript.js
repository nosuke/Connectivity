for(var i = 0; i < 24; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u1'] = 'center';
$axure.eventManager.keyup('u20', function(e) {

if (true) {

	SetPanelVisibility('u13','hidden','fade',100);

}
});

$axure.eventManager.focus('u20', function(e) {

if ((GetWidgetText('u20')) == ('Entrez votre nom d\'utilisateur')) {

SetWidgetFormText('u20', '');

}
});

$axure.eventManager.blur('u20', function(e) {

if ((GetWidgetText('u20')) == ('')) {

SetWidgetFormText('u20', 'Entrez votre nom d\'utilisateur');

}
});
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u16'] = 'top';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Connexion.html');

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u7'] = 'top';