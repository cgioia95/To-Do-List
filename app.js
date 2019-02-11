const express = require("express");
const bodyParser = require("body-parser");

app = express();

var items = ["Item 1", "Item 2", "Item 3"];

app.use(bodyParser.urlencoded({extended: true}));


app.set("view engine", "ejs");

app.get("/", function(req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);



  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });

});

app.post("/", function(req, res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server live at Port 3000");
});
