---
layout: post
image:
    feature: 2016-08-31-Washington/DSC_0607.jpg
images:
- image_path: /img/2016-08-31-Washington/DSC_0010.jpg
- image_path: /img/2016-08-31-Washington/DSC_0031.jpg
- image_path: /img/2016-08-31-Washington/DSC_0032.jpg
- image_path: /img/2016-08-31-Washington/DSC_0212.jpg
- image_path: /img/2016-08-31-Washington/DSC_0451.jpg
- image_path: /img/2016-08-31-Washington/DSC_0502.jpg
- image_path: /img/2016-08-31-Washington/DSC_0596.jpg
- image_path: /img/2016-08-31-Washington/DSC_0607.jpg
- image_path: /img/2016-08-31-Washington/DSC_0623.jpg
- image_path: /img/2016-08-31-Washington/DSC_0645.jpg
- image_path: /img/2016-08-31-Washington/DSC_0894.jpg
- image_path: /img/2016-08-31-Washington/DSC_0905.jpg
---

In 2016 I visited Washington state, including Seattle, Olympic National Park, 
and Olympic National Forest. The mist and fog hanging over the roads 
through the mountains and forest on the way to Olympic National Park 
made the experience calm and tranquil. The beach was beautiful, bright 
blue with tide pools and anemone. The stacks of hard rock carved away by the tide
coming in and out create a beautiful ocean and beach landscape, with a consistently 
interesting horizon to fall in love with. Seattle had a very fun culture to appreciate, 
from plenty of art museums, graffiti, monuments, and history. Absolutely check out the 
beautiful art at the Chihuly glass museum if you get the chance. It is phenomenal and 
impressive. I would love to visit Washington state again, and the first
item on my agenda would be getting back to Olympic National Park.

<!--more-->

<ul class="photo-gallery">
{% for image in page.images %}
<li style='list-style: none;' ><img src="{{ site.url }}{{ image.image_path }}"/></li>
{% endfor %}
</ul>
