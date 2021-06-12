d3.json("samples.json", function(data) {
    console.log(data);
});

function filterOTU(otu) {
    data.sample_values.slice(0,9);
    return otu.sample_values;
}

var filteredOTUs = data.filter(filterOTU);

console.log(filteredOTUs);
    
var id_name = filteredOTUs.map(otu => otu.otu_ids);

console.log(id_name);

var otu_values = filteredOTUs.map(otu => otu.sample_values);

console.log(otu_values);

