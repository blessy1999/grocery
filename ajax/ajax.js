var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        
        var jgrocery= obj.grocery;
        var output = ""
        
        for (var i = 0; i < jgrocery.length; i++) {
            output += "<tr>"
            output += "<td>" + jgrocery[i].serialno + "</td>";
            output += "<td>" + jgrocery[i].name + "</td>";
            output += "<td>" + jgrocery[i].quantity + "</td>";
            output += "<td>" + jgrocery[i].unit + "</td>";
            output += "<td>" + jgrocery[i].department + "</td>";
            output += "<td>" + jgrocery[i].notes + "</td>";
            output += "</tr>"

        }
      
        document.getElementById("table").innerHTML = output;
    }
}
xhttp.open("GET", "grocery.json", true);
xhttp.send();