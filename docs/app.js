d3.json("samples.json").then((importedData) => {
    var data = importedData;
    data.sort(function(a, b) {
      return parseFloat(b.sample_values) - parseFloat(a.sample_values);
    });
  
    data = data.slice(0, 10);
  
    data = data.reverse();
  
    var trace1 = {
      x: data.map(row => row.samples.sample_values),
      y: data.map(row => row.samples.otu_ids),
      text: data.map(row => row.samples.otu_ids),
      type: "bar",
      orientation: "h",
      hovertext: data.map(row => row.samples.otu_labels)
    };
  
    var barchartData = [trace1];
  
    var layout = {
      title: "Top Ten OTU per Person",
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };
  
    Plotly.newPlot("bar", barchartData, layout);

    var trace2 = {
        x: data.map(row => row.samples.otu_ids),
        y: data.map(row => row.samples.sample_values),
        text: data.map(row => row.samples.otu_labels),
        mode: 'markers',
        marker: {
            color: data.map(row => row.samples.otu_ids),  
            size: data.map(row => row.samples.sample_values),
        },
    };
      
    var bubblechartData = [trace2];
      
    var layout2 = {
        title: 'Top Ten OTU per Person',
        showlegend: false,
        height: 600,
        width: 600
    };
      
    Plotly.newPlot('bubble', bubblechartData, layout2);
});

  
  
