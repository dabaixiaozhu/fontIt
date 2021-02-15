
$(function () {
    // 将list的内容渲染到下拉列表中

    addOption('#cityList', cityList);
    addOption('#eatList', eatList);
    addOption('#conditionList', conditionList);
    addContent();
});

// 下拉框的内容
var cityList = ["北京", "上海", "广州", "深圳"]
var eatList = ["是", "否"]
var conditionList = ["健康", "轻度", "重度"]

function addOption (inputId, inputList) {

    for (var i = 0; i < inputList.length; i++) {
        $(inputId).append("<option>" + inputList[i] + "</option>");
    }
}

// 主体内容
var contentList = [
    {
        "serviceTime": "2015-7-5至2015-7-12",
        "servicePrice": "25元/小时"
    },
    {
        "serviceTime": "2015-7-5至2015-7-12",
        "servicePrice": "40元/小时"
    },
    {
        "serviceTime": "2015-7-5至2015-7-12",
        "servicePrice": "45元/小时"
    },
    {
        "serviceTime": "2015-7-5至2015-7-12",
        "servicePrice": "50元/小时"
    },
    {
        "serviceTime": "2015-7-5至2015-7-12",
        "servicePrice": "25元/小时"
    },
    {
        "serviceTime": "2015-7-5至2015-7-12",
        "servicePrice": "25元/小时"
    }
]

function addContent () {
    for (var i = 0; i < contentList.length; i++) {

        $("#mainContent").append("<div><div><div class='icon-date'></div><span>服务日期</span></div><div><span>"
            + contentList[i].serviceTime +
            "</span><span>"
            + contentList[i].servicePrice +
            "</span></div><div><div class='icon-site'></div><span>北京.通州.果园</span></div></div>");
    }
}