d3.json("samples.json").then((importedData) => {
    var data = importedData;

    d3.selectAll("#selDataset").on("change", updatePlotly);

    function updatePlotly() {
        var dropdownMenu = d3.select("#selDataset");
        var id_number = dropdownMenu.property("value");

        if (id_number === data.map(row => row.samples.id)) {
            var id_panel = d3.select("#sample-metadata")
            data.metadata.forEach(function(person) {
                console.log(person);
                var row = id_panel.append("tr");
              
                Object.entries(person).forEach(function([key, value]) {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
                });
            });
        }
    }
    data.samples.forEach(function(topTen) {
        Object.entries(topTen).forEach(function(newLoop) {
            console.log(newLoop); 
        })
    })
  
    var trace1 = {
      x: data.samples.map(row => row.sample_values),
      y: data.samples.map(row => row.otu_ids),
      text: data.samples.map(row => row.otu_ids),
      type: "bar",
      orientation: "h",
      hovertext: data.samples.map(row => row.otu_labels)
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
  
    Plotly.newPlot('bar', barchartData, layout);

    var trace2 = {
        x: data.samples.map(row => row.otu_ids),
        y: data.samples.map(row => row.sample_values),
        text: data.samples.map(row => row.otu_labels),
        mode: 'markers',
        marker: {
            color: data.samples.map(row => row.otu_ids),
            size: data.samples.map(row => row.sample_values)
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

  