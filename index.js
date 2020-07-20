import { select, arc } from 'd3';

const svg = select('svg');
const height = +svg.attr('height'); //same thing as parseFloat
const width = parseFloat(svg.attr('width'));

console.log(typeof width); //a string

const circle = svg.append('circle')
  .attr('r', height / 2)
  .attr('cx', width/2)
  .attr('cy', height/2)
  .attr('fill', 'white')
  .attr('stroke', 'black');


const leftEye = svg.append('ellipse')
  .attr('rx', 70)
  .attr('ry', 24)
  .attr('cx', width/2- 130)
  .attr('cy', height/2 - 40)
  .attr('fill', 'white')
  .attr('stroke', 'black');

const rightEye = svg.append('ellipse')
  .attr('rx', 70)
  .attr('ry', 24)
  .attr('cx', width/2 + 130)
  .attr('cy', height/2 - 40)
  .attr('fill', 'white')
  .attr('stroke', 'black');

const rightEyePupil = svg.append('ellipse')
  .attr('rx', 24)
  .attr('ry', 17)
  .attr('cx', width/2 + 175)
  .attr('cy', height/2 - 40)
  .attr('fill', 'black')


const leftEyePupil = svg.append('ellipse')
  .attr('rx', 24)
  .attr('ry', 17)
  .attr('cx', width/2 - 85)
  .attr('cy', height/2 - 40)
  .attr('fill', 'black')


const nose = svg.append('ellipse')
  .attr('rx', 50)
  .attr('ry', 27)
  .attr('cx', width/2 )
  .attr('cy', height/2 + 70)
  .attr('fill', 'black')


const leftEyeBag = svg.append('ellipse')
  .attr('rx', 70)
  .attr('ry', 9)
  .attr('cx', width/2- 130)
  .attr('cy', height/2 -5)
  .attr('fill', 'black')


const rightEyeBag = svg.append('ellipse')
  .attr('rx', 70)
  .attr('ry', 9)
  .attr('cx', width/2 + 130)
  .attr('cy', height/2 -5)
  .attr('fill', 'black')


const beautyMark = svg.append('circle')
  .attr('r', 6)
  .attr('cx', width/2 - 160)
  .attr('cy', height/2 + 30)
  .attr('fill', 'black')

const smile = svg.append('circle')
  .attr('r', 6)
  .attr('cx', width/2 - 160)
  .attr('cy', height/2 + 30)
  .attr('fill', 'black')

  const g = svg.append('g')
    .attr('transform', `translate(${width/2}, ${height - 200})`)
  ;
   const mouth = g.append('path')
    .attr('d', arc()({
      innerRadius: 160,
      outerRadius: 170,
      startAngle: Math.PI/2,
      endAngle: Math.PI * 3/2
    }))



//
// const g = svg.append('g')
//   .attr('transform', 'translate(250, 200)')
// ;
//  const mouth = g.append('path')
//   .attr('d', arc()({
//     innerRadius: 80,
//     outerRadius: 100,
//     startAngle: 0,
//     endAngle: Math.PI
//   }))
