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
  marginHeight = 50;

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
  svgContainer.selectAll('rect')
  .data(data.children)
  .enter()
  .append('rect')
  .attr('class', 'tile')

})