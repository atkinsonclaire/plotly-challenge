d3.json("data/samples.json").then((importedData) => {
    var data = importedData;
  
    data.sort(function(a, b) {
      return parseFloat(b.sample_values) - parseFloat(a.sample_values);
    });
  
    data = data.slice(0, 10);
  
    data = data.reverse();
  
    var trace1 = {
      x: data.map(row => row.sample_values),
      y: data.map(row => row.otu_ids),
      text: data.map(row => row.otu_ids),
      type: "bar",
      orientation: "h"
    };
  
    var chartData = [trace1];
  
    var layout = {
      title: "Top Ten OTU per Person",
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };
  
    Plotly.newPlot("bar", chartData, layout);
  });
  
