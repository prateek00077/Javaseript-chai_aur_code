"use strict"; // used for newer version of javascrpt code
//alert(3+3) this will not work because we are using node js not browser

//In this lecture i have learned about the basic datatypes of javascripts some terminologies
let name="Prateek";//this is string datatype but we know that variables always initialized with let keyword in js
let age=21;//this is number datatype (there is not int datatype in js)
let flag=true;//this is bool datatype as we already know
let a=null;//null is also a datatype in js but here we are assigning it in some variable
let b;//this is undefined datatype

//The datatypes

/*
String
number => this store the numbers upto 2 to power 53
bigint => for greater numeric values
bool => evaluate in yes or no
null => special datatype (object)
undefined => this is also a datatype when the variable is not assigned any value
 */

//We can also check the datatype of our variables in js by using following code
console.log(typeof name);
//lefs try this with tables
console.table([typeof name,typeof age ,typeof flag,typeof a,typeof b]); //yes this is working fine

//NOTE=> the typeof null is object thats what it is showing.