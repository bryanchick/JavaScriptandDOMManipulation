// / from data.js
var tableData = data;

// YOUR CODE HERE!

//crude and build quick table
let tBody = d3.select('tbody')

data.map(ufo_sighting => {
   let newTr = tBody.append('tr');
   Object.values(ufo_sighting).forEach(x => {
       newTr.append('td').text(x)
   })
})

d3.select('#filter-btn').on('click', function(e) {
   e.preventDefault();
   console.log('clicked')
})