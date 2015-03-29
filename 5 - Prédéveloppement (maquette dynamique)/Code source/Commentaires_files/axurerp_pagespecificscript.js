for(var i = 0; i < 61; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u28'] = 'top';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Connexion.html');

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u44'] = 'center';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Accueil.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u26'] = 'top';u9.tabIndex = 0;

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
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u46'] = 'center';
u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if ((GetGlobalVariableValue('connexion')) != ('true')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Connexion.html');

}

if (((GetWidgetVisibility('u42')) == (false)) && ((GetWidgetText('u52')) != (''))) {

	MoveWidgetBy('u50', GetNum('0'), GetNum('150'),'linear',500);

}

if ((GetWidgetText('u52')) != ('')) {

SetGlobalVariableValue('commentaireContenu', GetWidgetText('u52'));

SetWidgetRichText('u48', '<p style="text-align:left;"><span style="font-family:Arial;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">,</span><span style="font-family:Arial;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">&nbsp;</span><span style="font-family:Arial;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">le ' + (GetGlobalVariableValue('Day')) + '</span><span style="font-family:Arial;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;"> janvier </span><span style="font-family:Arial;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;"></span><span style="font-family:Arial;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">2013 à </span><span style="font-family:Arial;font-size:10px;font-weight:normal;font-style:normal;text-decoration:none;color:#666666;">15h15</span></p>');

SetWidgetFormText('u52', '');

SetWidgetRichText('u49', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('commentaireContenu')) + '</span></p>');

	SetPanelVisibility('u42','','fade',500);

	SetPanelState('u54', 'pd0u54','fade','',500,'fade','',500);

}
else
if (true) {

	SetPanelState('u54', 'pd1u54','fade','',500,'fade','',500);

}
});
gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u59'] = 'center';