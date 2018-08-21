$(document).ready(function () {

    $("#search-form").submit(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        fire_ajax_submit();

    });

});

function fire_ajax_submit() {

    var search = {}
    search["username"] = $("#username").val();
    //search["email"] = $("#email").val();

    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/search",
        data: JSON.stringify(search),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Ajax Response</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

            console.log("SUCCESS : ", data);
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

    var form = {
        id: "123",
        name: "123",
        testTags: [{id: "1111", tag: "aaaa"},
                   {id: "2222", tag: "bbbb"},
                   {id: "3333", tag: "cccc"}]
    };

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/test",
        data: JSON.stringify(form),
        dataType: 'json',
        cache: false,
        success: function (data) {
            console.log(data);
        },
        error: function (e) {
            console.log(e);
        }
    });

}