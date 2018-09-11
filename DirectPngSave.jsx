/* 
==============================================================================================
DirectPngSave@ToyBox
Last Update:2018/09/11
https://github.com/yukichi0306/

必要と想定される例外処理------------------------------------------
（実装済）pathEggが無い場合に警告（18/09/11）
（実装済）pathEggに該当するものが２以上ある場合、警告(18/09/11)
・layListかpathEggのどちらかがいらないんじゃ…？
・指定先のフォルダが無い場合に警告
==============================================================================================
*/
var docObj = activeDocument;
var layList = [];
var pathEgg = [];   //保存先候補
var filePath;

for (i = 0; i <docObj.layers.length; i++)
{
    layList[i] = docObj.layers[i].name;
    if(layList[i].indexOf('++') !== -1)
    {
        for(j = 0;j <= i; j++)
        {
        pathEgg[j] = layList[i];
        }
    }
}
if(pathEgg.length == 0)
{
    alert("保存先を示したレイヤーが見つかりません。");
    }
else if(pathEgg.length == 1)
{
    DirectPngSave ();
    }
else if(pathEgg.length > 1)
{
    alert("保存先を示したレイヤーが２つ以上あります。");
    }


//画像を保存する====================================================================
function DirectPngSave()
{
filePath = pathEgg[0].replace('++', '');

//PngSave========================================================================
pngFile = new File(filePath);//パス指定とファイル名
pngOpt = new PNGSaveOptions();
pngOpt.interlaced = false;
activeDocument.saveAs(pngFile, pngOpt, true, Extension.LOWERCASE);  
//===============================================================================

alert('Finish');
}