---
layout: post
title: "Getting Started in R"
toc: true
---

This is an introduction to the R programming language. I would like this
introduction to be as accessible and useful as possible for users of all
proficiency levels. Every link below will include free resources.

{{ content | toc }}

---

### Beginner Resources

Before diving into the R programming language, I would highly recommend
installing the [RStudio](https://www.rstudio.com/) development environment.
It makes a lot of interactions with the R programming language and peripheral
programming related tasks (version controlling, connecting to databases, code-formatting, etc.) much easier.

If you're a beginner and you want to get started with R as fast as possible, 
I recommend the following guides: 

- [Swirl : Learn R, in R](http://swirlstats.com/) - Swirl allows newcomers to
  start interacting with the R programming language through guided tutorials 
  primarily aimed at beginners.

- [Learn X in Y Minutes : R](https://learnxinyminutes.com/docs/r/) - Learn X
  in Y Minutes walks readers through an example script which demonstrates
  many of the important R language features without getting too bogged down
  on any specific topic. This is a great quick reference for the syntax of R.

- [R Language for Programmers](https://www.johndcook.com/blog/r_language_for_programmers/) - If you have any experience programming but are new to R, or would simply like a quick refresher on the basic language features of R, this is a good reference.

- [Cookbook for R](http://www.cookbook-r.com/) - This website (and its corresponding book) provide examples and tutorials on many of the most common tasks that programmers are accomplishing with R.  

Lastly, I want to encourage people to use the `help.start()` feature in R.
Open the R console, type `help.start()`, and hit enter. A window will open
which allows you to view the R manuals, check out packages' documentation, 
and search for keywords on R-specific sites and resources.

Keep in mind that you can always use `?command` or `help()` to look up help
without leaving your R or RStudio session.

---

### More Technical Resources

Once you have some familiarity with R and want to understand it more
rigorously, I think these resources can help with that:

- [An Introduction to R](https://cran.r-project.org/doc/manuals/R-intro.pdf) - This introduction to R is quite comprehensive and technical. I should 
point out that while other guides may discuss packages outside the base R language, this introduction focuses entirely on the base R language. Many people will recommend that it is important to understand the base R language, and then to quickly move onto using the nearly self-contained ecosystems 
implemented in packages like the tidyverse, 

- [aRrgh, a newcomer's (angry) guide to R](http://arrgh.tim-smith.us/) -
  aRrgh takes the stance that as R is a programming language predominantly
  developed by statisticians and not programmers, it has some very quirky and
  at times outright offensive features. Despite this, R comes with tools and
  ideas that make it uniquely suitable for statistical data analysis and
  after learning its quirks many people find R to be an indespensible tool
  they frequently reach for. aRrgh is a guide on those quirks and "gotchas."

- [The R
  Inferno](http://www.burns-stat.com/pages/Tutor/R_inferno.pdf) - "If you are
using R and you think you're in hell, this is a map for you."

- [R-Bloggers : Tutorials for Learning
  R](https://www.r-bloggers.com/how-to-learn-r-2/) - R-Bloggers is a popular
website among R users where R tutorials and blogposts are aggregated and
widely distributed. This is a great post, similar to this one of mine, delineating resources in an ordering suitable for newcomers to the R language.

- [Efficient R Programming](https://csgillespie.github.io/efficientR/index.html) - This book takes a dive into the topic of writing R code which is efficient while keeping the prerequisite knowledge of the language to a minimum.

- [R Packages](http://r-pkgs.had.co.nz/intro.html) - R Packages are an 
integral part of the R ecosystem, and it is considered good practice to
format your work as a package where possible due to the many added perks
gained from R's package development tools. 

- [Advanced R](http://adv-r.had.co.nz/) - Advanced R takes a closer look at
the technical features of the R programming language to help users improve
their R programming skills. 

- [The R Manuals](https://cran.r-project.org/) - The R Manuals from CRAN are
  for those who want to take a deep dive into the fundamentals of the R
  programming language. In particular, I recommend checking out The R Language
  Definition and R Internals if you really want to understand how R works.

--- 

### Topic-Specific Resources

While some may spend lifetimes understanding R's internals and subtleties,
others may have the goal of just getting things done. For achieving this, I
would make different recommendations than I would to those who want to
rigorously understand the language. To accomplish specific goals and finish
your projects implemented in R, I would recommend the following resources:

- [RStudio's Cheat Sheets](https://www.rstudio.com/resources/cheatsheets/) -
RStudio's Cheat Sheets are great at-a-glance reference cards for many of the
popular packages and features of R. They have ones for many topics, 
including 
[base R](http://github.com/rstudio/cheatsheets/raw/master/base-r.pdf),
[the RStudio development environment](https://github.com/rstudio/cheatsheets/raw/master/rstudio-ide.pdf), 
[ggplot2, a data visualization package](https://github.com/rstudio/cheatsheets/raw/master/data-visualization-2.1.pdf), 
and many, many more.

- [CRAN's Task Views](https://cran.r-project.org/web/views/) - CRAN's Task Views organize packages into topics to make them more easily discoverable.

- [Awesome-R](https://awesome-r.com/) - Awesome R is a curated list of R packages and tools which is great for discovering new and popular packages to 
help you accomplish a given task.

- [R for Data Science](http://r4ds.had.co.nz/) - R for Data Science, or R4DS, is a very popular book in the R community which teaches users to perform statistical analyses, visualize them, and to communicate their results effectively using the tools the R community has to offer.

- [The Elements of Statistical Learning: Data Mining, Inference, and Prediction](https://web.stanford.edu/~hastie/ElemStatLearn/) is the 2nd edition of a popular, mathematically rigorous, treatment of statistical learning with R examples. The PDF of the book is available for free, and a real gift to the community. 

- [Text Mining with R : A Tidy Approach](https://www.tidytextmining.com/) - Another popular topic these days is natural language processing. Text Mining with R introduces ideas on how one can use the *tidy data* paradigm to ease their textual analyses. 

- [Shiny from RStudio](https://shiny.rstudio.com/) - Shiny is a web framework for R with ever-improving documentation and articles. Shiny makes it easy 
for users to interact with data analyses through web-interfaces that functions
through a reactive programming paradigm. 

- [Show Me Shiny](http://www.showmeshiny.com/) - In addition to the references available on RStudio's website for Shiny, I also highly recommend the examples available at showmeshiny.com. These showcase many nontrivial and novel use-cases for Shiny and can often serve as inspirational material.

- [htmlwidgets for R](http://www.htmlwidgets.org/) - Create JavaScript based
widgets to render interactive data visualizations within R.

- [R Graphics Cookbook](http://www.cookbook-r.com/Graphs/) - This resource
  appears as if it is just one chapter inside the R Cookbook already linked
above, but in actuality it is a whole book on its own dedicated to the
subject of producing graphics and plots with R. This book makes heavy use of
ggplot2, one of the most popular graphics frameworks which employs a theory
of the *grammar of graphics* to make writing code to produce graphics more
natural and straightforward.

- [Rcpp](http://www.rcpp.org/), [Rcpp-introduction](http://dirk.eddelbuettel.com/code/rcpp/Rcpp-introduction.pdf), and the [Rcpp vignettes](https://cran.r-project.org/web/packages/Rcpp/vignettes/) - Rcpp is a package which provides a seamless interface between C++ and R. This is a great utility for speeding up projects in R
