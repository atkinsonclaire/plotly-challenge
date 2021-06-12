d3.json("samples.json", function(data) {
    console.log(data);
});

function filterOTU(otu) {
    data.sample_values.slice(0,9);
    return otu.sample_values;
  }

var filteredOTUs = parsed_array.filter(filterOTU);
    
var id_name = filteredOTUs.map(otu => otu.otu_ids);

var otu_values = filteredOTUs.map(otu => otu.sample_values);

var trace = {
    x: otu_values,
    y: id_name,
    type: "bar",
    hoverinfo: otu_labels
  };
  
var filtered_data = [trace];
  
var layout = {
    title: "Top Ten OTUs for a Sample Person",
    xaxis: { title: "OTU Values" },
    yaxis: { title: "OTU ID"}
  };
  
Plotly.newPlot("bar", filtered_data, layout);

d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
  var dropdownMenu = d3.select("#optionChanged(this.value)");
  var dataset = dropdownMenu.property("value");

  var data = [];

  if (dataset == '940') {
      data = samples.id[0];
  }
  else if (dataset == '941') {
      data = samples.id[1];
  }
  else if (dataset == '943') {
      data = samples.id[2];
  }
  updatePlotly(data);

}

function updatePlotly(newdata) {
    Plotly.restyle("bar", "values", [newdata]);
}

