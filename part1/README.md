# Part1
-> In this part (Introduction to React) {Ex 1.1|1.2} I've learnt how to create components render ir and use props to
assign values<br>
->Part1b Javascript {new language to me} <br>
<p>
       -->Variables defined through var {not recomended}, let and const for non changing variables<br>
       -->Arrays are objects and if the variable is defined with const it always pints to the obest thus no error is
       produced when the contents of array is modified</p><br>
<p>
       --->forEach function with => defining the paramenter iterates through the array<br>
       --->push method is usedto ass new wlwment ot the array<br>
       ---> In React it is adviced to use concat method as it created a new array withoout altering the original
       array<br>
       --->map method in array creates a new array with mapped corresponding elements and the function paramenter is
       used to define the elements<br>
       --->Destructing an array can be used to assign variables the values of arrays<br></p><br>
<p>
       -->Objects
       ---> it can be defied in multiple methods common one is obect literals {}<br>
       --->The values of the properties can be of any type, like integers, strings, arrays, objects...<br>
       --->Object's properties can be refrenced through dot notation and also properties can be added<br>
<p>-->Functions<br>
       ---> Functions in JavaScript can be defined with => arrow function followed with {} curly braces<br>
       ---> function() expression can also be used define function<br></p>
<br>
<h3>Exercises</h3><br>
<p>
       -> The first exercise 1.3 => we obtain values from obects and use the values to render on react as obejcts are
       not valid as react child<br>
       -> the exercises in s part defined how to obtain data from object and render the element <br></p>
<h4>Obect methods and this</h4>
<ul>
       <li>Arrow functions and functions defined using the function keyword vary substantially when it comes to how they
              behave with respect to the keyword this, which refers to the object itself.</li>
       <li>To refrence an object in a function within itself we use 'this' method</li>
       <li>methods can also be defined to objects even after the obect is created</li>
       <li>an object can have n number of functions with unique names and can be called using 'dot'</li>
       <li>we can also store method reference in a variable and calling the method through the variable</li>
       <li>we get into a hurdle when we assign a method in an object , assign it to a refrence variable and use 'this'- it becomes a global attribute and doesnt know what the intended value was 'undefinite'</li>
       <li>to prevent this grom being undefined we use 'bind' method which binds the called funtion to refrence obect rather than considering it global</li>
</ul>
<h4>classes</h4>
<ul>
       <li>class in JS doesnt refer to any of the concepts in OOPS</li>
       <li>class can be used in many ways but it is not conventional in mordern times as there is a new feature of hooks</li>
</ul>


<h4>Component helper functions</h4>
<ul>
       <li>We can define a function within a function for easy organisation of attributes</li>
</ul>
<h4>Destructuring</h4>
<ul>
       <li>Instead of using props again and again to obtain value we can initially declare them to a variable for further usage</li>
       <li> if an arrow function consists of a single expression, then the function body does not need to be written inside of curly braces</li>
       <li>Destructuring makes the assignment of variables even easier since we can use it to extract and gather the values of an object's properties into separate variables</li>
</ul>