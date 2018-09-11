/* 
==============================================================================================
DirectPngSave@ToyBox
Last Update:2018/09/07
https://github.com/yukichi0306/

必要と想定される例外処理------------------------------------------
・pathEggが無い場合に警告
・pathEggに該当するものが２以上ある場合、警告
・指定先のフォルダが無い場合に警告
==============================================================================================
*/
var docObj = activeDocument;
var layList = [];
var pathEgg;
var filePath;

for (i = 0; i <docObj.layers.length; i++)
{
    layList[i] = docObj.layers[i].name;

if(layList[i].indexOf('++' ) !== -1)
{
    pathEgg = layList[i];
    }
}
filePath = pathEgg.replace('++', '');

//PngSave========================================================================
pngFile = new File(filePath);//パス指定とファイル名
pngOpt = new PNGSaveOptions();
pngOpt.interlaced = false;
activeDocument.saveAs(pngFile, pngOpt, true, Extension.LOWERCASE);  
//===============================================================================

alert('Finish');
