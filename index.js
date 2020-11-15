$.ajax({
    url: 'https://api.rootnet.in/covid19-in/stats/latest',
    dataType: 'json',
    success: function (all) {
        $(document).ready(function () {
            $("#total").text(all.data.summary.total)
            $("#recovered").text(all.data.summary.discharged)
            $("#deaths").text(all.data.summary.deaths)
            $("#loc").text(all.data.regional[0].loc)
            $("#totall").text(all.data.regional[0].confirmedCasesIndian)
            $("#totalll").text(all.data.regional[0].confirmedCasesForeign)
            $("#recoveredd").text(all.data.regional[0].discharged)
            $("#deathss").text(all.data.regional[0].deaths)
            for (i = 0; i < all.data.regional.length; i++) {
                $("#states").append($("<option>", { text: all.data.regional[i].loc }))
            }
        })
        $("#states").on("change", function () {
            var s = document.getElementById("states").selectedIndex
            $("#loc").text(all.data.regional[s].loc)
            $("#totall").text(all.data.regional[s].confirmedCasesIndian)
            $("#totalll").text(all.data.regional[s].confirmedCasesForeign)
            $("#recoveredd").text(all.data.regional[s].discharged)
            $("#deathss").text(all.data.regional[s].deaths)
        })
    }
})