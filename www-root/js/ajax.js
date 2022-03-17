function SearchResult(str) {
    resultBox = $("#search-result");
    resultSpinner = $("#search-spinner");
    resultParent = $("#search-result");
    if (str.length >= 2) {
        $.ajax({
            type: "POST",
            url: "./model&controller/controller-client/index.php",
            data: {string: str, action: "search"},
            beforeSend: function () {
                console.log(str);
                console.log(this.url);
                resultBox.css("visibility","visible");
                resultSpinner.css("visibility","visible");
            },
            success: function (data) {
                resultParent.html('');
                data = (JSON.parse(data));
                if (data.length !== 0) {
                    console.log(data);
                    size = data.length;
                    size = size - 1;
                    console.log(size);
                    resultSpinner.css("visibility","hidden");
                    for (let i = 0; i <= size; i++) {
                        singleResult = '<div>\n' +
                            '<div class="uk-padding-small uk-padding-remove-right uk-padding-remove-left" style="border-bottom: 1px dashed #ddd">\n' +
                            '<div uk-grid class="uk-grid-small uk-flex uk-flex-middle">\n' +
                            '<div class="uk-width-auto">\n' +
                            '<img src="'+ '.' + data[i][11] +'" style="width: 50px;border-radius: 10px"\n' +
                            'alt="'+ data[i][1] +'">\n' +
                            '</div>\n' +
                            '<div class="uk-width-expand">\n' +
                            '<div>\n' +
                            '<a href="">\n' +
                            '<h3>'+ data[i][1] +'</h3>\n' +
                            '</a>\n' +
                            '</div>\n' +
                            '<div>\n' +
                            '<span class="color-light-black font-size-too-small">'+ data[i][9] +'</span>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '<div class="uk-width-auto uk-flex uk-flex-left">\n' +
                            '<a class="karzar-transition uk-border-circle uk-text-center" href="">\n' +
                            '<span class="uk-text-center uk-box-shadow-hover-medium icon-pen" uk-tooltip="امضای طرح" style="background: #246ED7;padding: 10px;border-radius: 100%;box-sizing: border-box;z-index: 3242423234324234;position: relative;top: 0px;">\n' +
                            '<img style="z-index: 78787877987778 !important;" src="www-root/icons/jam_pencil-f-1.svg">\n' +
                            '</span>\n' +
                            '</a>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>';
                        resultParent.append(singleResult);
                    }
                }
                else {
                    resultBox.css("visibility","hidden");
                    resultSpinner.css("visibility","hidden");
                }
            }
        });
    } else {
        resultBox.css("visibility","hidden");
        return false;
    }
}

$("#ShowSearchResult").click(function (e) {
    e.preventDefault();
    $(".search-result").show();
});

// Get Demand News Content
function GetDemandNewsContent (id) {
        $.ajax({
            type: "POST",
            url: "./model&controller/controller-client/demand.php",
            data: {id: id, action: "get"},
            beforeSend: function () {
                console.log(this.url);
                $('#loading').show();
            },
            success: function (data) {
                data = (JSON.parse(data));
                var title = document.getElementById("demand-news-title");
                title.textContent = data.title;
                var img = document.getElementById("demand-news-img");
                img.setAttribute("src", data.img);
                img.setAttribute("alt", data.title);
                var publishDate = document.getElementById("demand-news-publishDate");
                publishDate.textContent = data.publishDate;
                var content = document.getElementById("demand-news-content");
                content.textContent = data.content;
                var link = document.getElementById("demand-news-link");
                link.setAttribute("href", data.link);
            }
        });
}