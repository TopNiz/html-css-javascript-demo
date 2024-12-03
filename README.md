# html-css-javascript-demo

This repository is a demo for the HTML, CSS, and JavaScript workshop. It is
in english and can be easily translated to other languages.

The timeline of the course is the following:

## Day 1: HTML

- Start building the [index.html](./index.html) page: First, introduce the `!`
  command in VSCode to create the basic structure of an HTML page. And then, run
  through the basic tags of HTML, as presented in the final index file.
- Continue with the [images.html](./images.html) page: Introduce the `img` tag
  and the different attributes that can be used with it. If some time is left,
  introduce the `picture` tag.
- Here, it will be not user-friendly to go back and forth to the `index.html`
  file. So, it is a good idea to show the navigation features of HTML using the
  `nav`, `ul`, `li`, and `a` tags. The resulting navbar can be duplicated and
  reused in the other pages. It will be also a good start to style the navbar
  with CSS, the next day.
- Finish with the [tables.html](./tables.html) page: Introduce the `table` tag.
  The attribute `border` can exceptionnally be used for this exercise, but it is
  deprecated. Introduce the `thead`, `tbody`, and `tfoot` tags, as well as the
  `th` and `td` tags. It is also a good thing to work with the `colspan` and
  `rowspan` attributes, as shown in the final tables' file.

## Day 2: CSS

- Start by introducing the `style` attribute in the [index.html](./index.html).
- Then, show how hard it is to maintain the style of the page and the other
  pages with the `style` attribute. Introduce the `style` tag in the `head` tag
  of the pages.
- Now, we would like to replicate the styling to the other pages: It will be
  hard to maintain the style of the pages with the `style` tag in the `head` tag
  for more than 3 or 4 pages, by just copy-pasting.
- Start with the [style.css](./style.css) file: Introduce the `link` tag in the
  `head` of the HTML files to link the CSS file. Then, introduce the basic
  selectors and properties of CSS. The final style file is a good example of what
  can be done with CSS.
- Continue with personalizing the navbar: The goal is to have a navbar where
  menu items change background color when hovered. The final [style.css](./style.css)
  file is a good example of what can be done.

## Day 3: JavaScript

- Start with an example of Javascript DOM manipulation, like changing the
  `innerHTML` of an element, add new elements and styling them.
- Continue with the demo project which is a weather widget. The [project.html](./project.html)
  is self-explanatory. The API key is not provided, but it is easy to get one
  from [OpenWeatherMap](https://openweathermap.org/). Create an account, click on
  the API keys tab, and generate a new key. For documentation, click on the API
  tab and then scroll down to [**Current weather data**](https://openweathermap.org/current#name).
  This link points directly to the paragraph where the API is called with the city name.
  And, in the beginning of the page, there is a list of the parameters that can be used
  and also a description of the resulting JSON properties. **Attention**: The
  `units` parameter should be set to `metric` to have the temperature in Celsius.
