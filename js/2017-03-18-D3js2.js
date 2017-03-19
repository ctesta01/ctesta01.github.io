$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

var w = 1200, h = 800;

var labelDistance = 0;

var vis = d3.select("svg").append("svg:svg").attr("width", w).attr("height", h);

var nodes = [];
var labelAnchors = [];
var labelAnchorLinks = [];
var links = [];

nodes = [
{id: "N1", label: "Elliptic Curves", fixed: true, x: w/2, y: h/2-10, type: "Subject Area", hlink: "https://en.wikipedia.org/wiki/Elliptic_curve"},
{id: "N2", label: "E(ℚ)", fixed: true, x: w/2-w/4, y: h/2, type: "Definition", hlink: "https://en.wikipedia.org/wiki/Elliptic_curve#Elliptic_curves_over_the_rational_numbers"},
{id: "N3", label: "E(𝔽q)", fixed: true, x: w/2, y: h/2-h/4, type: "Definition", hlink: "https://en.wikipedia.org/wiki/Elliptic_curve#Elliptic_curves_over_finite_fields"},
{id: "N4", label: "E(ℂ)", fixed: true, x: w/2+w/4, y: h/2, type: "Definition", hlink: "https://en.wikipedia.org/wiki/Elliptic_curve#Elliptic_curves_over_the_complex_numbers"},
{id: "N5", label: "Modular Forms", fixed: true, x: w/2, y: h/2+h/3, type: "Subject Area", hlink: "https://en.wikipedia.org/wiki/Modular_form"},
{id: "N6", label: "Modular Discriminant Δ", fixed: true, x: w/2-2*w/9, y: h/2+h/9, type: "Functions", hlink: "https://en.wikipedia.org/wiki/Weierstrass%27s_elliptic_functions#Modular_discriminant"},
{id: "N7", label: "Klein's j-invariant", fixed: true, x: w/2+w/9, y: h/2+2*h/9, type: "Functions", hlink: "https://en.wikipedia.org/wiki/J-invariant"},
{id: "N8", label: "Eisenstein's Series", type: "Functions", hlink: "https://en.wikipedia.org/wiki/Eisenstein_series"},
{id: "N9", label: "Weierstrass Elliptic Functions ℘", fixed: true, x: w/2+2*w/9, y: h/2+h/9, type: "Functions", hlink: "https://en.wikipedia.org/wiki/Weierstrass%27s_elliptic_functions"},
{id: "N10", label: "Ramanujan's 𝜏 Function", fixed: true, x: w/2-2*w/9, y: h/2+3*h/9, type: "Functions", hlink: "https://en.wikipedia.org/wiki/Ramanujan_tau_function"},
{id: "N11", label: "Birch and Swinnerton-Dyer's Conjecture", type: "Conjecture", hlink: "https://en.wikipedia.org/wiki/Birch_and_Swinnerton-Dyer_conjecture"},
{id: "N12", label: "Riemann's Hypothesis Curves over Finite Fields", type: "Theorem", hlink: "https://en.wikipedia.org/wiki/Local_zeta-function#Riemann_hypothesis_for_curves_over_finite_fields"},
{id: "N13", label: "Divisor Function 𝜎", type: "Functions", hlink: "https://en.wikipedia.org/wiki/Divisor_function"},
{id: "N14", label: "Hilbert's 12th Problem", type: "Conjecture", hlink: "https://en.wikipedia.org/wiki/Hilbert's_twelfth_problem"},
{id: "N15", label: "Monstrous Moonshine", type: "Subject Area", hlink: "https://en.wikipedia.org/wiki/Monstrous_moonshine"},
{id: "N16", label: "Elliptic Curve Cryptography", type: "Algorithm", hlink: "https://en.wikipedia.org/wiki/Elliptic_curve_cryptography"},
{id: "N17", label: "Partition Function p", type: "Functions", hlink: "https://en.wikipedia.org/wiki/Partition_(number_theory)"},
{id: "N18", label: "Lenstra's Integer Factorization Algorithm", type: "Algorithm", hlink: "https://en.wikipedia.org/wiki/Lenstra_elliptic_curve_factorization"},
{id: "N19", label: "String Theory", type: "Subject Area", hlink: "https://en.wikipedia.org/wiki/String_theory"},
{id: "N21", label: "Class Field Theory", fixed: true, x: w/2 + 1.8*w/6, y: h/2 + 1.8*h/5, type: "Subject Area", hlink: "https://en.wikipedia.org/wiki/Class_field_theory"},
{id: "N22", label: "Classification of Finite Simple Groups", fixed: true, x: w/2 + w/5, y: h/2 + 2*h/5, type: "Theorem", hlink: "https://en.wikipedia.org/wiki/Classification_of_finite_simple_groups"},
];

var links = [
  {source: 0, target: 1, weight: 1},
  {source: 0, target: 2, weight: 1},
  {source: 0, target: 3, weight: 1},
  {source: 0, target: 4, weight: 1},
  {source: 0, target: 5, weight: 1},
  {source: 0, target: 6, weight: 1},
  {source: 1, target: 4, weight: 1},
  {source: 1, target: 10, weight: 1},
  {source: 2, target: 11, weight: 1},
  {source: 2, target: 15, weight: 1},
  {source: 2, target: 17, weight: 1},
  {source: 3, target: 8, weight: 1},
  {source: 4, target: 5, weight: 1},
  {source: 4, target: 6, weight: 1},
  {source: 4, target: 7, weight: 1},
  {source: 4, target: 8, weight: 1},
  {source: 4, target: 9, weight: 1},
  {source: 4, target: 12, weight: 1},
  {source: 4, target: 16, weight: 1},
  {source: 4, target: 18, weight: 1},
  {source: 5, target: 0, weight: 1},
  {source: 5, target: 7, weight: 1},
  {source: 5, target: 8, weight: 1},
  {source: 5, target: 9, weight: 1},
  {source: 6, target: 7, weight: 1},
  {source: 6, target: 8, weight: 1},
  {source: 6, target: 13, weight: 1},
  {source: 6, target: 14, weight: 1},
  {source: 7, target: 8, weight: 1},
  {source: 7, target: 12, weight: 1},
  {source: 7, target: 16, weight: 1},
  {source: 9, target: 12, weight: 1},
  {source: 9, target: 16, weight: 1},
  {source: 13, target: 19, weight: 1},
  {source: 14, target: 20, weight: 1},
  {source: 15, target: 17, weight: 1}
]


for(var i = 0; i < nodes.length; i++) {
  node = nodes[i]
  labelAnchors.push({
    node : node
  });
  labelAnchors.push({
    node : node
  });
};

for(var i = 0; i < nodes.length; i++) {
  labelAnchorLinks.push({
    source : i * 2,
    target : i * 2 + 1,
    weight : 1
  });
};

var force = d3.layout.force().size([w, h]).nodes(nodes).links(links).gravity(1).linkDistance(50).charge(-9000).linkStrength(function(x) {
  return x.weight * 10
});


force.start();

var force2 = d3.layout.force().nodes(labelAnchors).links(labelAnchorLinks).gravity(0).linkDistance(0).linkStrength(8).charge(-200).size([w, h]);
force2.start();

var link = vis.selectAll("line.link").data(links).enter().append("svg:line").attr("class", "link").style("stroke", "#CCC");

var node = vis.selectAll("g.node").data(force.nodes()).enter().append("svg:g").attr("class", "node")
.append("svg:circle").attr("r", 5).style("fill", "#555").style("stroke", "#FFF").style("stroke-width", 3)
.call(force.drag);


var anchorLink = vis.selectAll("line.anchorLink").data(labelAnchorLinks)//.enter().append("svg:line").attr("class", "anchorLink").style("stroke", "#999");

var anchorNode = vis.selectAll("g.anchorNode").data(force2.nodes()).enter().append("svg:g").attr("class", "anchorNode");
anchorNode.append("svg:circle").attr("r", 0).style("fill", "#FFF");
anchorNode.append("a").attr("xlink:href", function(d) {return d.node.hlink; })
.append("svg:text").text(function(d, i) {
  return i % 2 == 0 ? "" : d.node.label
}).style("fill", "#555").style("font-family", "Arial").style("font-size", 14)


var updateLink = function() {
  this.attr("x1", function(d) {
    return d.source.x;
  }).attr("y1", function(d) {
    return d.source.y;
  }).attr("x2", function(d) {
    return d.target.x;
  }).attr("y2", function(d) {
    return d.target.y;
  });

}

var updateNode = function() {
  this.attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });

}


force.on("tick", function() {

  force2.start();

  node.call(updateNode);

  anchorNode.each(function(d, i) {
    if(i % 2 == 0) {
      d.x = d.node.x;
      d.y = d.node.y;
    } else {
      var b = this.childNodes[1].getBBox();

      var diffX = d.x - d.node.x;
      var diffY = d.y - d.node.y;

      var dist = Math.sqrt(diffX * diffX + diffY * diffY);

      var shiftX = b.width * (diffX - dist) / (dist * 2);
      shiftX = Math.max(-b.width, Math.min(0, shiftX));
      var shiftY = 5;
      this.childNodes[1].setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
    }
  });


  anchorNode.call(updateNode);

  link.call(updateLink);
  anchorLink.call(updateLink);

});
