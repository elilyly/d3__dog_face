
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (d3) {
  'use strict';

  var svg = d3.select('svg');
  var height = +svg.attr('height'); //same thing as parseFloat
  var width = parseFloat(svg.attr('width'));

  console.log(typeof width); //a string

  var circle = svg.append('circle')
    .attr('r', height / 2)
    .attr('cx', width/2)
    .attr('cy', height/2)
    .attr('fill', 'white')
    .attr('stroke', 'black');


  var leftEye = svg.append('ellipse')
    .attr('rx', 70)
    .attr('ry', 24)
    .attr('cx', width/2- 130)
    .attr('cy', height/2 - 40)
    .attr('fill', 'white')
    .attr('stroke', 'black');

  var rightEye = svg.append('ellipse')
    .attr('rx', 70)
    .attr('ry', 24)
    .attr('cx', width/2 + 130)
    .attr('cy', height/2 - 40)
    .attr('fill', 'white')
    .attr('stroke', 'black');

  var rightEyePupil = svg.append('ellipse')
    .attr('rx', 24)
    .attr('ry', 17)
    .attr('cx', width/2 + 175)
    .attr('cy', height/2 - 40)
    .attr('fill', 'black');


  var leftEyePupil = svg.append('ellipse')
    .attr('rx', 24)
    .attr('ry', 17)
    .attr('cx', width/2 - 85)
    .attr('cy', height/2 - 40)
    .attr('fill', 'black');


  var nose = svg.append('ellipse')
    .attr('rx', 50)
    .attr('ry', 27)
    .attr('cx', width/2 )
    .attr('cy', height/2 + 70)
    .attr('fill', 'black');


  var leftEyeBag = svg.append('ellipse')
    .attr('rx', 70)
    .attr('ry', 9)
    .attr('cx', width/2- 130)
    .attr('cy', height/2 -5)
    .attr('fill', 'black');


  var rightEyeBag = svg.append('ellipse')
    .attr('rx', 70)
    .attr('ry', 9)
    .attr('cx', width/2 + 130)
    .attr('cy', height/2 -5)
    .attr('fill', 'black');


  var beautyMark = svg.append('circle')
    .attr('r', 6)
    .attr('cx', width/2 - 160)
    .attr('cy', height/2 + 30)
    .attr('fill', 'black');

  var smile = svg.append('circle')
    .attr('r', 6)
    .attr('cx', width/2 - 160)
    .attr('cy', height/2 + 30)
    .attr('fill', 'black');

    var g = svg.append('g')
      .attr('transform', ("translate(" + (width/2) + ", " + (height - 200) + ")"))
    ;
     var mouth = g.append('path')
      .attr('d', d3.arc()({
        innerRadius: 160,
        outerRadius: 170,
        startAngle: Math.PI/2,
        endAngle: Math.PI * 3/2
      }));



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

}(d3));
//# sourceMappingURL=bundle.js.map
