
let input = $('searchInput').val();


$("#clickme").click(function () {
    const search = $("#searchInput").val()
    $.ajax({
        
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+input+"&type=video&key=AIzaSyCkAHjG4_KBcjnExF0IO01APrraNTvYY9E",

        success: function (data) {
            console.log(data)
            $("#searchInput").html(data.name)

            

        },

        error: function (request,error) {
            alert("Try Again!")
        }

    })
})


