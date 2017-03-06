---
layout: post
title: "Introduction to Elliptic Curves"
excerpt: "An elliptic curve is a degree three nonsingular curve with a rational point."
modified: 2017-03-05
tags: [elliptic-curves]
comments: true
---
# Introduction to Elliptic Curves

<h2>Definining an Elliptic Curve</h2>
<p>Elliptic curves are degree three nonsingular plane curves with at least one rational point.</p>
<p>They often look something like this:</p>
<center>
<figure>
  <img src="https://github.com/ctesta01/thesis-blog/blob/master/images/496a1.png?raw=true" alt="" width="304" height="228">
  <figcaption><span class="math"><script type="math/tex"> y^2 = x^3 + x + 1
  </script></span></figcaption>
</figure>
<figure>
  <img src="https://github.com/ctesta01/thesis-blog/blob/master/images/92b1.png?raw=true" alt="" width="304" height="228">
  <figcaption><span class="math"><script type="math/tex"> y^2 = x^3 - x + 1  </script></span></figcaption>
</figure>
<figure>
  <img src="https://github.com/ctesta01/thesis-blog/blob/master/images/32a2.png?raw=true" alt="" width="304" height="228">
  <figcaption><span class="math"><script type="math/tex"> y^2 = x^3 - x
  </script></span> </figcaption>
</figure>
</center>
<p>These are just three examples, and it will be useful to think of elliptic curves abstractly as those cubics which are nonsingular with at least one point. To require that they are nonsingular is equivalent to requiring that no point is singular, that is there is no <span class="math"><script type="math/tex">P \in E</script></span> such that all
derivatives vanish. That means that an elliptic curve could never look like the following:</p>
<center>
<figure>
  <img src="https://github.com/ctesta01/thesis-blog/blob/master/images/acnode.png?raw=true" alt="" width="304" height="228">
  <figcaption><span class="math"><script type="math/tex"> y^2 = x^3 - x^2  </script></span></figcaption>
</figure>
<figure>
  <img src="https://github.com/ctesta01/thesis-blog/blob/master/images/singular-cusp.png?raw=true" alt="" width="304" height="228">
  <figcaption><span class="math"><script type="math/tex">y^2 = x^3  </script></span></figcaption>
</figure>
<figure>
  <img src="https://github.com/ctesta01/thesis-blog/blob/master/images/singular-node.png?raw=true" alt="" width="304" height="228">
  <figcaption><span class="math"><script type="math/tex"> y^2 = x^3 + x^2  </script></span></figcaption>
</figure>
<figure>
  <img src="https://github.com/ctesta01/thesis-blog/blob/master/images/tacnode.png?raw=true" alt="" width="304" height="228">
  <figcaption><span class="math"><script type="math/tex"> (x^2 + y^2 - 3x)^2 = 4x^2(2-x)  </script></span></figcaption>
</figure>
</center>
<p>In fact, the last was never in the running, since it isn’t even a cubic equation.</p>
<p>There are many different ways of considering an elliptic curve. Most often they are depicted in the affine or cartesian plane, but they also exist in projective space. To construct the projective plane, we identify the lines through the origin in 3-dimensional affine or Euclidean space (<span class="math"><script type="math/tex">\mathbb A^2</script></span>) as the points of projective 2-dimensional space <span class="math"><script type="math/tex">\mathbb P^2</script></span>.</p>
<p>We denote the points of the projective plane as <span class="math"><script type="math/tex">(x:y:z)</script></span> since it is only the ratio between these points which identifies the point. If we consider a
cubic nonsingular curve, we immediately find that it must be homogenous
in its terms in order to be well-defined as a polynomial of variables
in <span class="math"><script type="math/tex">\mathbb P^2</script></span>. We will denote these variables by capital <span class="math"><script type="math/tex">X, Y</script></span> and <span class="math"><script type="math/tex">Z</script></span>.</p>
<p>It is important to distinguish between the projective plane and the affine plane, but there’s nothing stopping us from visualizing what the rays satisfying an elliptic curve might look like in 3-dimensional space. This forms a surface in <span class="math"><script type="math/tex">\mathbb R^3</script></span>.</p>
<center>
<figure>
  <img src="https://github.com/ctesta01/thesis-blog/blob/master/images/92b_spinning.gif?raw=true" alt="" width="304" height="228">
  <figcaption>Projective with Affine Highlighted <span class="math"><script type="math/tex"> Y^2Z = X^3 - X^2Z + Z^3  </script></span></figcaption>
</figure>
<figure>
  <img src="https://github.com/ctesta01/thesis-blog/blob/master/images/92b_blue.png?raw=true" alt="" width="304" height="228">
  <figcaption> Affine Curve <span class="math"><script type="math/tex"> y^2 + y = x^3 - x + 1 </script></span></figcaption>
</figure>
</center>
<h2>So What Are They Good For?</h2>
<p>Elliptic Curves are of significance primarily to number theorists, and have had a major impact on problems like fast integer factorization and Fermat’s Last Theorem. Elliptic curve cryptography has been one of the most popular public key cryptography systems from 2004 to now (2017), and was originally suggested in the 1980s. Further, understanding their rational points is of such significance that for proving the Birch-Swinnerton-Dyer conjecture which relates the analytic rank to the algebraic rank one can win $<span class="math"><script type="math/tex">10^6</script></span>.</p>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Lenstra_elliptic_curve_factorization">Lenstra’s Elliptic Curve Factorization Algorithm</a></li>
<li><a href="https://en.wikipedia.org/wiki/Elliptic_curve_cryptography">Elliptic Curve Cryptography</a></li>
<li><a href="https://en.wikipedia.org/wiki/Modularity_theorem">The Modularity Theorem</a></li>
<li><a href="https://en.wikipedia.org/wiki/Birch_and_Swinnerton-Dyer_conjecture">The Birch and Swinnerton-Dyer Conjecture</a></li>
</ul>
<h2>Where To From Here?</h2>
<p>At the Second International Congress in 1900 the incredible mathematician <a href="https://en.wikipedia.org/wiki/David_Hilbert">David Hilbert</a> presented 10 of <a href="http://mathworld.wolfram.com/HilbertsProblems.html">23 problems</a> that were then unsolved. The tenth of these was to find
a general algorithm deciding the solvability of an arbitrary Diophantine equation. Matiyasevich’s Theorem from 1970 yielded the discovery that no such algorithm can exist. This certainly makes finding and describing the complete solution set of a Diophantine problem more difficult. Progress in Algebraic-Geometry and the proof of Fermat’s Last Theorem make Diophantine Equations an exciting subject, and the rational points on elliptic curves
are one of many mysterious behaviors to explore.</p>
