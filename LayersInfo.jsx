/* 
==============================================================================================
LayersInfo@ToyBox
Last Update:2018/06/19
https://github.com/yukichi0306/
==============================================================================================
*/
//改行コード
CR = String.fromCharCode (13);

//layObj = activeDocument.activeLayer;

//ピクセルのある範囲[left,top,right,bottom]
//layBnds = activeDocument.activeLayer.bounds;
//x1 = layBnds[0];
//y1 = layBnds[1];
//x2 = layBnds[2];
//y2 = layBnds[3];


savename = File.saveDialog ("FileName");
if(savename)
{
    fileObj = new File(savename+".txt");
    flag = fileObj.open("w");
    if(flag  == true)
    {
        n = activeDocument.artLayers.length;
        for(i=0; i<n; i++)
        {
            layName = activeDocument.artLayers[i].name;
            //ピクセルのある範囲[left,top,right,bottom]
            layBnds = activeDocument.artLayers[i].bounds;
            fileObj.write(layName+ CR + layBnds +CR);
            }
        fileObj.close();
        alert("Finish");
    }
}
else{
    alert("Can'tOpen");
    }