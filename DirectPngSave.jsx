/* 
==============================================================================================
DirectPngSave@ToyBox
Last Update:2018/09/12
https://github.com/yukichi0306/

++バグ情報＋＋
ファイルパスを記したレイヤーがグループの中にあった場合、pathEgg.length == 0　が実行される。
==============================================================================================
*/
var docObj = activeDocument;
var pathEgg = [];   //保存先候補

for (i = 0; i <docObj.layers.length; i++)
{
    if(docObj.layers[i].name.indexOf('++') !== -1)
    {
        for(j = 0;j <= i; j++)
        {
        pathEgg[j] = docObj.layers[i].name;
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
var filePath = pathEgg[0].replace('++', '');
var num = filePath.lastIndexOf ('\\');
var folderPath = filePath.slice(0,num+1);
var folderJudge = new Folder(folderPath);
var flag = folderJudge.exists;
//PngSave=======================================================
if(flag == true)
{
pngFile = new File(filePath);//パス指定とファイル名
pngOpt = new PNGSaveOptions();
pngOpt.interlaced = false;
activeDocument.saveAs(pngFile, pngOpt, true, Extension.LOWERCASE);  
alert('Finish');
}
else if(flag == false)
{
    alert("保存先に指定されたフォルダが存在しません。");
    }
}
//===============================================================================