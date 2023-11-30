const numberslist = [
  "./images'/react.png",
  "./images'/angular.jpg",
  "./images'/next js.webp",
  "./images'/vuejs.png",
  "./images'/jquery.png",
  "./images'/bootstrap.png",
  "./images'/django.png",
];

const nextjstextcontent =
  "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration. Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications. On the left side of the screen, you'll find the docs navbar. The pages of the docs are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your application. However, you can read them in any order or skip to the pages that apply to your use case. On the right side of the screen, you'll see a table of contents that makes it easier to navigate between sections of a page. If you need to quickly find a page, you can use the search bar at the top, or the search shortcut (Ctrl+K or Cmd+K).";

const vewjstextcontent =
  "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex. Declarative Rendering: Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state. Reactivity: Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.You may already have questions - don't worry. We will cover every little detail in the rest of the documentation. For now, please read along so you can have a high-level understanding of what Vue offers.Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. With that in mind, Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways:";
const reactTextContent =
  "React.js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface. React’s primary role in an application is to handle the view layer of that application just like the V in a model-view-controller (MVC) pattern by providing the best and most efficient rendering execution. Rather than dealing with the whole user interface as a single unit, React.js encourages developers to separate these complex UIs into individual reusable components that form the building blocks of the whole UI. In doing so, the ReactJS framework combines the speed and efficiency of JavaScript with a more efficient method of manipulating the DOM to render web pages faster and create highly dynamic and responsive web applications.Back in 2011, Facebook had a massive user base and faced a challenging task. It wanted to offer users a richer user experience by building a more dynamic and more responsive user interface that was fast and highly performant. ";

const angularextcontent =
  "AngularJS was created in 2009 by Miško Hevery, a developer working at Google. While it began as a semi-independent pet project, the success of Hevery’s creation eventually won AngularJS an important role at the company as Google quickly took over the development and maintenance of AngularJS. In 2014, Google announced a new version of AngularJS, originally called Angular 2.0, and later shortened the name to Angular. A complete rewrite of the original AngularJS, Angular added many new features, expanded existing capabilities, and made important changes to AngularJS — such as changing the expression syntax. The term Angular is now used to refer to version 2+, while the old moniker of AngularJS refers to the original 1.0 releases. As of January 1st, 2022, Google has stopped providing updates for the original AngularJS, encouraging developers to adopt the newer Angular, which is still actively maintained and updated by Google.In this post, we’ll explain what AngularJS is, what you can do with it, and provide examples of websites that operate on AngularJS. ";

const bootstraptextcontent =
  "Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.As a framework, Bootstrap includes the basics for responsive web development, so developers only need to insert the code into a pre-defined grid system. The Bootstrap framework is built on Hypertext Markup Language (HTML), cascading style sheets (CSS) and JavaScript. Web developers using Bootstrap can build websites much faster without spending time worrying about basic commands and functions. Bootstrap makes responsive web design a reality. It makes it possible for a web page or app to detect the visitor's screen size and orientation and automatically adapt the display accordingly. The mobile-first approach assumes smartphones, tablets and task-specific mobile apps are employees' primary tools for getting work done. Bootstrap addresses the requirements of those technologies in design and includes UI components, layouts, JavaScript tools and the implementation framework. The software is available precompiled or as source code. Mark Otto and Jacob Thornton developed Bootstrap at Twitter to improve the consistency of tools used on the site and to reduce maintenance. The software was formerly known as Twitter Blueprint and is sometimes referred to as Twitter Bootstrap.";

const jqueryTextcontent =
  "jQuery is a fast, small, cross-platform and feature-rich JavaScript library. It is designed to simplify the client-side scripting of HTML. It makes things like HTML document traversal and manipulation, animation, event handling, and AJAX very simple with an easy-to-use API that works on a lot of different type of browsers. The main purpose of jQuery is to provide an easy way to use JavaScript on your website to make it more interactive and attractive. It is also used to add animation. jQuery is a small, light-weight and fast JavaScript library. It is cross-platform and supports different types of browsers. It is also referred as ?write less do more? because it takes a lot of common tasks that requires many lines of JavaScript code to accomplish, and binds them into methods that can be called with a single line of code whenever needed. It is also very useful to simplify a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation. Sometimes, a question can arise that what is the need of jQuery or what difference it makes on bringing jQuery instead of AJAX/ JavaScript? If jQuery is the replacement of AJAX and JavaScript? For all these questions, you can state the following answers. So, you can say that out of the lot of JavaScript frameworks, jQuery is the most popular and the most extendable. Many of the biggest companies on the web use jQuery It is always advised to a fresher to learn the basics of web designing before starting to learn jQuery. He should learn HTML, CSS and JavaScript first. But, if you belong to a technical background, it is up to you.";

const djangoTextcontent =
  "Django is a Python framework that makes it easier to create web sites using Python. Django emphasizes reusability of components, also referred to as DRY (Don't Repeat Yourself), and comes with ready-to-use features like login system, database connection and CRUD operations (Create Read Update Delete). In Django, the data is delivered as an Object Relational Mapping (ORM), which is a technique designed to make it easier to work with databases. The most common way to extract data from a database is SQL. One problem with SQL is that you have to have a pretty good understanding of the database structure to be able to work with it. Django, with ORM, makes it easier to communicate with the database, without having to write complex SQL statements. A view is a function or method that takes http requests as arguments, imports the relevant model(s), and finds out what data to send to the template, and returns the final result. A template is a file where you describe how the result should be represented. Templates are often .html files, with HTML code describing the layout of a web page, but it can also be in other file formats to present other results, but we will concentrate on .html files. Django was invented by Lawrence Journal-World in 2003, to meet the short deadlines in the newspaper and at the same time meeting the demands of experienced web developers. Initial release to the public was in July 2005. atest version of Django is 4.0.3 (March 2022)";
const totalimages = numberslist.length;

console.log(totalimages);
let item = 0;
let descriptionel = document.getElementById("descriptionid");

function clickedreact() {
  document.getElementById("navbuttonsR").classList.add("clickedreact");
  document.getElementById("navbuttonsV").classList.remove("vuebtn");

  document.getElementById("navbuttonsA").classList.remove("angularbtn");
  document.getElementById("navbuttonsB").classList.remove("bootstrapbtn");
  document.getElementById("navbuttonsN").classList.remove("nextjsbtn");
  document.getElementById("navbuttonsJ").classList.remove("jquerybtn");
  document.getElementById("navbuttonsD").classList.remove("djangobtn");

  descriptionel.textContent = reactTextContent;
  console.log("button is clicked");
}

function clickedangular() {
  document.getElementById("navbuttonsA").classList.add("angularbtn");
  document.getElementById("navbuttonsR").classList.remove("clickedreact");
  document.getElementById("navbuttonsV").classList.remove("vuebtn");
  document.getElementById("navbuttonsB").classList.remove("bootstrapbtn");
  document.getElementById("navbuttonsD").classList.remove("djangobtn");
  document.getElementById("navbuttonsJ").classList.remove("jquerybtn");
  document.getElementById("navbuttonsN").classList.remove("nextjsbtn");

  descriptionel.textContent = angularextcontent;
  console.log(" angular button is clicked");
}
function clickedveiwjs() {
  document.getElementById("navbuttonsV").classList.add("vuebtn");
  document.getElementById("navbuttonsR").classList.remove("clickedreact");

  document.getElementById("navbuttonsA").classList.remove("angularbtn");
  document.getElementById("navbuttonsB").classList.remove("bootstrapbtn");
  document.getElementById("navbuttonsN").classList.remove("nextjsbtn");
  document.getElementById("navbuttonsJ").classList.remove("jquerybtn");
  document.getElementById("navbuttonsD").classList.remove("djangobtn");

  descriptionel.textContent = vewjstextcontent;
  console.log("angularbutton is clicked");
}
function clickedbootstrap() {
  document.getElementById("navbuttonsB").classList.add("bootstrapbtn");
  document.getElementById("navbuttonsR").classList.remove("clickedreact");
  document.getElementById("navbuttonsV").classList.remove("vuebtn");

  document.getElementById("navbuttonsA").classList.remove("angularbtn");

  document.getElementById("navbuttonsN").classList.remove("nextjsbtn");
  document.getElementById("navbuttonsJ").classList.remove("jquerybtn");
  document.getElementById("navbuttonsD").classList.remove("djangobtn");
  descriptionel.textContent = bootstraptextcontent;
}
function clickednextjs() {
  descriptionel.textContent = nextjstextcontent;
  document.getElementById("navbuttonsN").classList.add("nextjsbtn");
  document.getElementById("navbuttonsR").classList.remove("clickedreact");
  document.getElementById("navbuttonsV").classList.remove("vuebtn");

  document.getElementById("navbuttonsA").classList.remove("angularbtn");
  document.getElementById("navbuttonsB").classList.remove("bootstrapbtn");

  document.getElementById("navbuttonsJ").classList.remove("jquerybtn");
  document.getElementById("navbuttonsD").classList.remove("djangobtn");
}
function clickeddjango() {
  descriptionel.textContent = djangoTextcontent;
  document.getElementById("navbuttonsD").classList.add("djangobtn");
  document.getElementById("navbuttonsR").classList.remove("clickedreact");
  document.getElementById("navbuttonsV").classList.remove("vuebtn");

  document.getElementById("navbuttonsA").classList.remove("angularbtn");
  document.getElementById("navbuttonsB").classList.remove("bootstrapbtn");
  document.getElementById("navbuttonsN").classList.remove("nextjsbtn");
  document.getElementById("navbuttonsJ").classList.remove("jquerybtn");
}

function clickedJquery() {
  document.getElementById("navbuttonsJ").classList.add("jquerybtn");
  document.getElementById("navbuttonsR").classList.remove("clickedreact");
  document.getElementById("navbuttonsV").classList.remove("vuebtn");

  document.getElementById("navbuttonsA").classList.remove("angularbtn");
  document.getElementById("navbuttonsB").classList.remove("bootstrapbtn");
  document.getElementById("navbuttonsN").classList.remove("nextjsbtn");

  document.getElementById("navbuttonsD").classList.remove("djangobtn");

  descriptionel.textContent = jqueryTextcontent;
  console.log("button is clicked");
}
// const image=document.getElementsByClassName(typeimages)
function nextButton() {
  item += 1;

  if (item >= 7) {
    item = 0;
  }
  document.getElementById("typeimages").src = numberslist[item];
}

setInterval(nextButton, 5000);

// if (reactclicled) {
// }
