
// 要素の追加.
function AddClick() {

    try {

        tagName = "addElement";

        tagText = '<div class="addElement" id="addElement"><select class="dropdown" name ="[0].category" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "中見出し"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" name ="[0].value" value="" style="width: 70%;" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button></div>'

        $('button.add').before(tagText);

        SetValueName();

        // 追加した項目の要素の数を取得する.
        len = $("select").size();

        if (len == 1) {

            // 1つのみの追加の場合はなにも行わない.

        } else if (len == 2) {
            divName = 'div[id=addElement1]';

            addText = '<button type="button" class="arrowBtn" onclick="DownElement(this)"><span class="glyphicon glyphicon-arrow-down"></span></button>';

            $(divName).append(addText);

            divName = 'div[id=addElement2]';

            addText = '<button type="button" class="arrowBtn" onclick="UpElement(this)"><span class="glyphicon glyphicon-arrow-up"></span></button>';

            $(divName).append(addText);
        } else {

            numStr = String(len - 1);

            divName = 'div[id=addElement' + numStr + ']';

            addText = '<button type="button" class="arrowBtn" onclick="DownElement(this)"><span class="glyphicon glyphicon-arrow-down"></span></button>';

            $(divName).append(addText);

            numStr = String(len);

            divName = 'div[id=addElement' + numStr + ']';

            addText = '<button type="button" class="arrowBtn" onclick="UpElement(this)"><span class="glyphicon glyphicon-arrow-up" onclick="UpElement(this)"></span></button>';

            $(divName).append(addText);
        };

    } catch (ex) {

    };

}

// 項目の選択変更.
function SelectChange(obj) {

    selectValue = obj.options[obj.options.selectedIndex].text;

    divObj = obj.parentElement;

    index = 0;

    // 追加項目の何番目の項目か調べる.
    $("div.addElement").each(function (i, elem) {
        if (elem.id == divObj.id) {
            index = i;
        }
    });

    // 追加項目の全体の数を取得.
    len = $("div.addElement").size();

    arrowTag = '';

    // 1以上追加があった場合は矢印ボタンを入れる.
    if (len != 1) {

        if (index == 0) {
            // 下ボタン表示.
            arrowTag = '<button type="button" class="arrowBtn" onclick="DownElement(this)"><span class="glyphicon glyphicon-arrow-down"></span></button>';
        } else if (index == len - 1) {
            // 上ボタン表示.
            arrowTag = '<button type="button" class="arrowBtn" onclick="UpElement(this)"><span class="glyphicon glyphicon-arrow-up"></span></button>';
        } else {
            // 上下ボタン表示.
            arrowTag = '<button type="button" class="arrowBtn" onclick="UpElement(this)"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="arrowBtn" onclick="DownElement(this)"><span class="glyphicon glyphicon-arrow-down"></span></button>'
        }

    }

    // 選択された項目を表示.
    switch (selectValue) {
        case '中見出し':
            tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "中見出し"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';
            break;
        case '小見出し':
            tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "小見出し"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';
            break;
        case '本文テキスト':
            tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "本文テキスト"){<option selected>@item</option>}else{<option>@item</option>}}</select><textarea rows="7" class="addElementTextArea"></textarea><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';
            break;
        case 'イメージ':
            tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "イメージ"){<option selected>@item</option>}else{<option>@item</option>}}</select><button type="submit" class="addElementMedia"><span class="glyphicon glyphicon-cog"></span> メディアを追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>'
            break;
        case 'リンク':
            tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "リンク"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 70%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><br /><input type="text" class="addElementText" value="" style="margin-left: 19%;" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';
            break;
        case 'コンテンツ':
            tagtext = '<div class="addElement" id ="changeElement" style="clear:both;"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "コンテンツ"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '<br><input type="radio" class = "dispRadio" name = "radio1" value="プレビュー画像表示" style="margin-left: 19%;margin-Top: 5px;" checked>プレビュー画像表示<input type="radio" class = "dispRadio" name = "radio1" value="リンクのみ表示">リンクのみ表示</div>';
            break;
        case 'カテゴリ':
            tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "カテゴリ"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '<br ><input type="radio" class = "dispRadio" name = "radio2" value="プレビュー画像表示" style="margin-left: 19%;margin-Top: 5px;" checked>プレビュー画像表示<input type="radio" class = "dispRadio" name = "radio2" value="リンクのみ表示" >リンクのみ表示</div>';
            break;
        case '人気書式':
            tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "人気書式"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';
            break;
        case 'おすすめ記事':
            tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "おすすめ記事"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';
            break;
        case 'タグ':
            tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "タグ"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 70%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><br /><input type="text" class="addElementText" value="" style="margin-left: 19%;" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';
            break;
        default:
            tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "中見出し"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';
    }

    parentDiv = 'div[id=' + divObj.id + ']';

    $(parentDiv).before(tagtext);
    $(parentDiv).remove();

    changeElement = document.getElementById("changeElement");
    changeElement.id = divObj.id
}

function DeleteElement(obj) {

    divObj = obj.parentElement;

    index = 0;

    // 追加項目の何番目の項目か調べる.
    $("div.addElement").each(function (i, elem) {
        if (elem.id == divObj.id) {
            index = i;
        }
    });

    // 追加項目の全体の数を取得.
    len = $("div.addElement").size();

    parentDiv = 'div[id=' + divObj.id + ']';
    $(parentDiv).remove();



}

function SetValueName() {

    $(document).ready(function () {
        $("div.addElement").each(function (index, elem) {
            $(elem).attr("id", "addElement" + (index + 1));
            dropDown = elem.getElementsByClassName("dropdown");
            $(dropDown).attr("name", "[" + (index) + "].category");
            addElementText = elem.getElementsByClassName("addElementText");

            size = addElementText.length;
            if (size == 1) {
                $(addElementText).attr("name", "[" + (index) + "].value");
            }
        });
    });

}

//下ボタン押下、要素を入れ替える.

function DownElement(obj) {

    divObj = obj.parentElement;

    len = $("div.addElement").size();

    index = 0;

    // 追加項目の何番目の項目か調べる.
    $("div.addElement").each(function (i, elem) {
        if (elem.id == divObj.id) {
            index = i;
        }
    });

    num = index + 2

    changeId = '#addElement' + String(num) + ' > select';
    objId = '#' + divObj.id + ' > select';

    objHttp = $(objId);
    changeHttp = $(changeId);

    objSelectValue = objHttp[0].options[objHttp[0].options.selectedIndex].text;

    changeSelectValue = changeHttp[0].options[changeHttp[0].options.selectedIndex].text;

    if (index == len - 2) {

        // 上ボタン.
        arrowTag = '<button type="button" class="arrowBtn" onclick="UpElement(this)"><span class="glyphicon glyphicon-arrow-up"></span></button>';

    } else {

        // 上下ボタン.
        arrowTag = '<button type="button" class="arrowBtn" onclick="UpElement(this)"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="arrowBtn" onclick="DownElement(this)"><span class="glyphicon glyphicon-arrow-down"></span></button>'

    }
    // 中見出し
    if (objSelectValue == '中見出し') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "中見出し"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // 小見出し
    if (objSelectValue == '小見出し') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "小見出し") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }

    // 本文テキスト
    if (objSelectValue == '本文テキスト') {

        objId = '#' + divObj.id + ' > textarea';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "本文テキスト") {<option selected>@item</option>}else{<option>@item</option>}}</select><textarea rows="7" class="addElementTextArea" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // イメージ
    if (objSelectValue == 'イメージ') {

        objId = '#' + divObj.id + ' > button';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "イメージ") {<option selected>@item</option>}else{<option>@item</option>}}</select><button type="submit" class="addElementMedia" value="' + objValue + '"><span class="glyphicon glyphicon-cog"></span> メディアを追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }

    // リンク
    if (objSelectValue == 'リンク') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "リンク") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 70%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><br /><input type="text" class="addElementText" style="margin-left: 19%;" value="' + objValue + '"/><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // コンテンツ
    if (objSelectValue == 'コンテンツ') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "コンテンツ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }

    // カテゴリ
    if (objSelectValue == 'カテゴリ') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "カテゴリ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // 人気書式
    if (objSelectValue == '人気書式') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "人気書式") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }

    // おすすめ記事
    if (objSelectValue == 'おすすめ記事') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "おすすめ記事") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // タグ
    if (objSelectValue == 'タグ') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "タグ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 70%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><br /><input type="text" class="addElementText" value="" style="margin-left: 19%;" value="' + objValue + '"/><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }

    if (index == 0) {

        // 下ボタン.
        arrowTag = '<button type="button" class="arrowBtn" onclick="DownElement(this)"><span class="glyphicon glyphicon-arrow-down"></span></button>';

    } else {

        // 上下ボタン.
        arrowTag = '<button type="button" class="arrowBtn" onclick="UpElement(this)"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="arrowBtn" onclick="DownElement(this)"><span class="glyphicon glyphicon-arrow-down"></span></button>'

    }

    // 中見出し
    if (changeSelectValue == '中見出し') {

        changeId = '#addElement' + String(num) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "中見出し") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(num)
    }

    // 小見出し
    if (changeSelectValue == '小見出し') {

        changeId = '#addElement' + String(num) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "小見出し") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(num)
    }
    // 本文テキスト
    if (changeSelectValue == '本文テキスト') {

        changeId = '#addElement' + String(num) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "本文テキスト") {<option selected>@item</option>}else{<option>@item</option>}}</select><textarea rows="7" class="addElementTextArea" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(num)
    }

    // イメージ
    if (changeSelectValue == 'イメージ') {

        changeId = '#addElement' + String(num) + ' > button';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "イメージ") {<option selected>@item</option>}else{<option>@item</option>}}</select><button type="submit" class="addElementMedia" value="' + objValue + '"><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(num)
    }
    // リンク
    if (changeSelectValue == 'リンク') {

        changeId = '#addElement' + String(num) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "リンク") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 70%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><br /><input type="text" class="addElementText" style="margin-left: 19%;" value="' + objValue + '"/><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(num)
    }

    // コンテンツ
    if (changeSelectValue == 'コンテンツ') {

        changeId = '#addElement' + String(num) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "コンテンツ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(num)
    }
    // カテゴリ
    if (changeSelectValue == 'カテゴリ') {

        changeId = '#addElement' + String(num) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "カテゴリ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(num)
    }

    // 人気書式
    if (changeSelectValue == '人気書式') {

        changeId = '#addElement' + String(num) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "人気書式") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(num)
    }

    // おすすめ記事
    if (changeSelectValue == 'おすすめ記事') {

        changeId = '#addElement' + String(num) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "おすすめ記事") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(num)
    }

    // タグ
    if (changeSelectValue == 'タグ') {

        changeId = '#addElement' + String(num) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "タグ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 70%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><br /><input type="text" class="addElementText" style="margin-left: 19%;" value="' + objValue + '"/><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(num);

        $(changeId).after(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(num)
    }
    SetValueName();

}

// 上ボタン押下、要素を入れ替える.
function UpElement(obj) {

    divObj = obj.parentElement;

    len = $("div.addElement").size();

    index = 0;

    // 追加項目の何番目の項目か調べる.
    $("div.addElement").each(function (i, elem) {
        if (elem.id == divObj.id) {
            index = i;
        }
    });

    changeId = '#addElement' + String(index) + ' > select';
    objId = '#' + divObj.id + ' > select';

    objHttp = $(objId);
    changeHttp = $(changeId);

    objSelectValue = objHttp[0].options[objHttp[0].options.selectedIndex].text;

    changeSelectValue = changeHttp[0].options[changeHttp[0].options.selectedIndex].text;

    if (index == 1) {

        // 下ボタン.
        arrowTag = '<button type="button" class="arrowBtn" onclick="DownElement(this)"><span class="glyphicon glyphicon-arrow-down"></span></button>';

    } else {

        // 上下ボタン.
        arrowTag = '<button type="button" class="arrowBtn" onclick="UpElement(this)"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="arrowBtn" onclick="DownElement(this)"><span class="glyphicon glyphicon-arrow-down"></span></button>'

    }
    // 中見出し
    if (objSelectValue == '中見出し') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "中見出し"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // 小見出し
    if (objSelectValue == '小見出し') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "小見出し") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // 本文テキスト
    if (objSelectValue == '本文テキスト') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "本文テキスト") {<option selected>@item</option>}else{<option>@item</option>}}</select><textarea rows="7" class="addElementTextArea" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // イメージ
    if (objSelectValue == 'イメージ') {

        objId = '#' + divObj.id + ' > button';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "イメージ") {<option selected>@item</option>}else{<option>@item</option>}}</select><button type="submit" class="addElementMedia" value="' + objValue + '"><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // リンク
    if (objSelectValue == 'リンク') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "リンク") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 70%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><br /><input type="text" class="addElementText" style="margin-left: 19%;" value="' + objValue + '"/><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // コンテンツ
    if (objSelectValue == 'コンテンツ') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "コンテンツ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // カテゴリ
    if (objSelectValue == 'カテゴリ') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "カテゴリ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // 人気書式
    if (objSelectValue == '人気書式') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "人気書式") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // おすすめ記事
    if (objSelectValue == 'おすすめ記事') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "おすすめ記事") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 10%;" value="' + objValue + '"/><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    // タグ
    if (objSelectValue == 'タグ') {

        objId = '#' + divObj.id + ' > input';
        objHttp = $(objId);

        objValue = objHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "タグ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="" style="width: 70%;" /><button type="submit" class="addElementBtn"><span class="glyphicon glyphicon-plus"></span>追加</button><br /><input type="text" class="addElementText" style="margin-left: 19%;" value="' + objValue + '"/><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(objId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = divObj.id
    }
    if (index == len - 1) {

        // 上ボタン.
        arrowTag = '<button type="button" class="arrowBtn" onclick="UpElement(this)"><span class="glyphicon glyphicon-arrow-up"></span></button>';

    } else {

        // 上下ボタン.
        arrowTag = '<button type="button" class="arrowBtn" onclick="UpElement(this)"><span class="glyphicon glyphicon-arrow-up"></span></button><button type="button" class="arrowBtn" onclick="DownElement(this)"><span class="glyphicon glyphicon-arrow-down"></span></button>'

    }
    // 中見出し
    if (changeSelectValue == '中見出し') {

        changeId = '#addElement' + String(index) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "中見出し"){<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(index)
    }
    // 小見出し
    if (changeSelectValue == '小見出し') {

        changeId = '#addElement' + String(index) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "小見出し") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(index)
    }
    // 本文テキスト
    if (changeSelectValue == '本文テキスト') {

        changeId = '#addElement' + String(index) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "本文テキスト") {<option selected>@item</option>}else{<option>@item</option>}}</select><textarea rows="7" class="addElementTextArea" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(index)
    }
    // イメージ
    if (changeSelectValue == 'イメージ') {

        changeId = '#addElement' + String(index) + ' > button';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "イメージ") {<option selected>@item</option>}else{<option>@item</option>}}</select><button type="submit" class="addElementMedia" value="' + objValue + '"><span class="glyphicon glyphicon-cog"></span> メディアを追加</button><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(index)
    }
    // リンク
    if (changeSelectValue == 'リンク') {

        changeId = '#addElement' + String(index) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "リンク") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(index)
    }
    // コンテンツ
    if (changeSelectValue == 'コンテンツ') {

        changeId = '#addElement' + String(index) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "コンテンツ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(index)
    }

    // カテゴリ
    if (changeSelectValue == 'カテゴリ') {

        changeId = '#addElement' + String(index) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "カテゴリ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(index)
    }

    // 人気書式
    if (changeSelectValue == '人気書式') {

        changeId = '#addElement' + String(index) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "人気書式") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(index)
    }

    // おすすめ記事
    if (changeSelectValue == 'おすすめ記事') {

        changeId = '#addElement' + String(index) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "おすすめ記事") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(index)
    }
    // タグ
    if (changeSelectValue == 'タグ') {

        changeId = '#addElement' + String(index) + ' > input';
        changeHttp = $(changeId);

        objValue = changeHttp[0].value;

        tagtext = '<div class="addElement" id ="changeElement"><select class="dropdown" onchange="SelectChange(this)">@foreach (var item in ViewBag.ItemList){if (item == "タグ") {<option selected>@item</option>}else{<option>@item</option>}}</select><input type="text" class="addElementText" value="' + objValue + '" /><button type="button" class="deleteButton" onclick="DeleteElement(this)"><span class="glyphicon glyphicon-minus"></span></button>' + arrowTag + '</div>';

        objId = '#' + divObj.id;
        changeId = '#addElement' + String(index);

        $(changeId).before(tagtext);
        $(changeId).remove();

        changeElement = document.getElementById("changeElement");
        changeElement.id = 'addElement' + String(index)
    }

    SetValueName();
}