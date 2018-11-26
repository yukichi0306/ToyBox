/* 
==============================================================================================
DirectTgaSave@ToyBox
Last Update:2018/11/26
https://github.com/yukichi0306/
==============================================================================================
*/
var docObj = activeDocument;
var pathEgg = [];   //保存先候補
var layName = [];   //レイヤー名

//レイヤー名を配列に
for (i = 0; i < docObj.layers.length; i++)
{
    layName[i] = docObj.layers[i].name;
}

//レイヤーセット内のレイヤー名を配列に
for(i = 0; i < docObj.layerSets.length; i++)
{
        for (j = 0; j < docObj.layerSets[i].artLayers.length; j++)
        {
            var n = docObj.layerSets[i].artLayers[j].name;
            layName.push(n);
        }
}

//保存先候補となるレイヤー名の検索
for (i = 0,j = 0; i < layName.length; i++)
{
if(layName[i].indexOf('++') !== -1)
    {
        pathEgg[j] = layName[i];
        j++;
    }
}

//保存実行分岐
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
//TgaSave=======================================================
if(flag == true)
{
targaFile = new File(filePath);//パス指定とファイル名
tgaOpt = new TargaSaveOptions();
tgaOpt.alphaChannels = true;
tgaOpt.resolution = TargaBitsPerPixels.THIRTYTWO;
tgaOpt.rleCompression = false;
activeDocument.saveAs(targaFile, tgaOpt, true, Extension.LOWERCASE);
alert('Finish');
}
else if(flag == false)
{
    alert("保存先に指定されたフォルダが存在しません。");
    }
}
//===============================================================================