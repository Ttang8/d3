let dataset = [100,120,200,60,90,50];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);

let svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

let barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y",(d) => {
      return svgHeight - d;
    })
    .attr("height", (d) => d)
    .attr("width", barWidth - barPadding)
    .attr("transform", (d,i) => {
      let translate = [barWidth * i, 0];
      return `translate(${translate})`;
    });

let text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
