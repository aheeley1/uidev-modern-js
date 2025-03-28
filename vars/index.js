

function getDate() {
    var date = new Date();

    function formatDate() {
        return date.toDateString().slice(4);
    }

    return formatDate();
}

getDate();
//console.log(date); // would fail, date has function-local scope