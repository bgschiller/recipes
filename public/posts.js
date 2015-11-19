---
layout: nil
---
var POSTS = [
  {% for post in site.posts %}
    {
      "title": {{ post.title | jsonify }},
      "contributor": {{ post.contributor | jsonify }},
      "photo": {{ post.photo | jsonify }},
      "course": {{ post.course | jsonify }},
      "timing": {{ post.timing | jsonify }},
      "url": {{ page.url | jsonify }}
    } {% if forloop.last == false %}, {% endif %}
  {% endfor %}
];
