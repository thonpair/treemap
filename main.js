import './style.css'

fetch('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json')
.then(response => response.json())
.then(data => {
  d3.select("#app")
  .append("h1")
  .text("Video Game Sales")
  .attr("id", "title")

  d3.select("#app")
  .append("h2")
  .text(data.name)
  .attr("id", "description")

  const width = 900,
  height = 400,
  marginWidth = 60,
  marginHeight = 50,
  marginCell = 1;

  const colors = [
    "#3393ff", //blue
    "#d2ff4f", //yellow
]


let tooltip = d3
  .select('#app')
  .append('div')
  .attr('id', 'tooltip')
  .style('opacity', 0);

let svgContainer = d3
  .select('#app')
  .append('svg')
  .attr('width', width + marginWidth)
  .attr('height', height + marginHeight)
  .attr('class', "svgContainer");
console.log(data)
let xNext = 0;
  let tileContainer = svgContainer.selectAll('g')
  .data(data.children)
  .enter()
  .append('g')
  .attr('class', 'tileContainer')
  .selectAll('rect')
  .data(d => d.children)
  .enter()
  .append('rect')
  .attr('class', 'tile')
  .attr('data-name', d => d.name)
  .attr('data-category', d => d.category)
  .attr('data-value', d => d.value)
  .attr('fill', d => d.value > 30 ? colors[0]: colors[1])
  .attr('x', (d) => {
    let xCurrent = xNext
    xNext+=parseInt(d.value)+marginCell
    return xCurrent
  })
  .attr('y', 0)
  .attr('height', d => parseInt(d.value))
  .attr('width', d=> parseInt(d.value))
  .on('mouseover', (d, i) => {
    tooltip
        .html("value : " + i.value + "<br/>"
        )
        .attr('all', JSON.stringify(i))
        .attr('data-value', i.value)
        .style('left', d.clientX + 'px')
        .style('top', height - 100 + 'px')
        .style('transform', 'translate('+d.clientX+'px, '+d.clientY+'px)')
        .style('opacity', 0.9);
})
.on('mouseout', function () {
  tooltip.style('opacity', 0);
});








  const legend = d3.select("#app")
  .append('div')
  .attr('id', 'legend')
  .text('Legend : ')

  const svglegend = legend
  .append('svg')
  .attr("height", 25)
  .attr("width", 300)



  svglegend
  .selectAll('rect')
  .data(colors)
  .enter()
  .append("rect")
  .attr("x", (d,i) => i*25)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 25)
  .attr("fill", d =>d)
  .attr("class","legend-item" )




})