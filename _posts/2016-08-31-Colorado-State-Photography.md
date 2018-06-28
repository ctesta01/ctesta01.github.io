---
layout: post
categories: [photography]
tags: [photography]
image:
    feature: /2016-08-31-Colorado/DSC_0044.jpg
images:
    - image_path: /img/2016-08-31-Colorado/DSC_0045.jpg
    - image_path: /img/2016-08-31-Colorado/DSC_0064.jpg
    - image_path: /img/2016-08-31-Colorado/DSC_0111.jpg
    - image_path: /img/2016-08-31-Colorado/DSC_0144.jpg
    - image_path: /img/2016-08-31-Colorado/DSC_0338.jpg
    - image_path: /img/2016-08-31-Colorado/DSC_0431.jpg
    - image_path: /img/2016-08-31-Colorado/DSC_0549.jpg
    - image_path: /img/2016-08-31-Colorado/DSC_0640.jpg
    - image_path: /img/2016-08-31-Colorado/DSC_0738.jpg
    - image_path: /img/2016-08-31-Colorado/DSC_0769.jpg
---

I went to Colorado in the summer of 2016 and found some heart-moving and 
serene photography opportunities. I spent time in Denver, Boulder, and, of course, the 
Rocky Mountain National Park. I struggle to imagine a more picturesque
photography experience than that with the brazen elk 
right next to the road and the incredible and towering mountain ranges spanning
the park. The sense of peace that I could derive from 
spending time in the park is a memory that will always
motivate my desire to spend more time in nature. 
I truly enjoyed my time in Colorado, and I recommend that anybody 
with an interest in the outdoors find the time to enjoy
the beautiful scenery there. 

<!--more-->

<ul class="photo-gallery">
{% for image in page.images %}
<li style='list-style: none;' ><img src="{{ site.url }}{{ image.image_path }}"/></li>
{% endfor %}
</ul>

