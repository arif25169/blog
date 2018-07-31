---
title: Access nested JSON property in jspdf autotable plugin
subTitle: JsPdf Autotable
category: "JavaScipt"
cover: photo-1490474418585-ba9bad8fd0ea-cover.png
---

![okkhor.org](./photo-1490474418585-ba9bad8fd0ea-cover.png)

We have a JSON structure that looks like this:

```
"Primary_Key": "12345",
"Site_Name": {
  "Address_Name": "Address 1"
  },
"Default_Screen_Name": "Bob",
"Full_Name": "Bob Smith"
```

```
var columns = [
    {title: "ID", dataKey: "id"},
    {title: "Name", dataKey: "name"}, 
    {title: "Country", dataKey: "address"}
];
var rows = [
    {id: 1, name: "Shaw", address: {country: "Tanzania"}},
    {id: 2, name: "Nelson", address: {country: "Kazakhstan"}},
    {id: 3, name: "Garcia", address: {country: "Madagascar"}}
];

var doc = jsPDF();
doc.autoTable(columns, rows, {
   createdCell: function(cell, data) {
       if (data.column.dataKey === 'address') {
           cell.text = cell.raw.country;
       }
   }
});
doc.save('table.pdf');
```
Update for additional question in comments (v2.3.2 required):
```
var columns = [
    {title: "Country", dataKey: "address", displayProperty: "country"},
    ...
];
var rows = [...];

...

createdCell: function(cell, data) {
   if (data.column.dataKey === 'address') {
       var prop = data.column.raw.displayProperty;
       cell.text = cell.raw[prop];
   }
}
```

Source [StackOverFlow](https://stackoverflow.com/q/44133030/9308513)



