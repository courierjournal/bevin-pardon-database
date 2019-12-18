const tabletop = require("tabletop");
const fs = require("fs");
const sheetsKey = require("../package.json").data;

//Download markers data from our sheets file and spit out a json file
tabletop.init({
  key: sheetsKey,
  callback: function(data, tabletop) {
    let dataMap = [
      { original: "Name", rename: "name" },
      { original: "Order Date", rename: "orderDate" },
      { original: "Pardon/Commutation", rename: "type" },
      { original: "Conviction Date", rename: "convictionDate" },
      { original: "Conviction County", rename: "convictionCounty" },
      { original: "Home", rename: "home" },
      { original: "Bevin narrative", rename: "bevinComments" },
      { original: "Charges Clean", rename: "charges" },
      { original: "pdf", rename: "link" }
    ];

    newData = data.map(n => {
      let arr = {};
      dataMap.forEach(y => {
        arr[y.rename] = n[y.original];
      });
      return arr;
    });
    fs.writeFileSync("src/data.json", JSON.stringify(newData));
    console.log("wrote files");
  },
  simpleSheet: true,
  orderby: "name"
});
