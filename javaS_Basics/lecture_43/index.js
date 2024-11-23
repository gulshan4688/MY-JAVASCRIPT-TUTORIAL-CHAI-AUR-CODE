let a = document.getElementsByTagName("div")[0];
// we have named a as div and indexed as [0] so now a.innerhtml insert the hello world  just below the this first div

a.innerHTML = a.innerHTML + "<h1> hello world1\n</h1>";
// the above line meand that a.innerHTMl include h1 tag and itself in a.innerhtml

// create an element using doc.createElement
let div = document.createElement("div");

// now insert innerHTML in div
div.innerHTML = "<h1> hello world1\n</h1>";
// and apppend in "a" created in first line

//a.appendChild(div);         // now div which we created is now attached to the "a "
div.innerHTML="<h1> hello world1\n</h1>";     // we specifies what is innerhtmlfor div




// there are some more insertion methods
//-------> 1. append
//a.append(div)      // appended at the last or bottom of the conatainer
// ------>2. prepend.
// a.prepend(div);      // for this we have to difine that what is inside div 
// ------>3. before
//a.before(div);
// ------>4. after
// a.after(div);
// ------>5. replacewith
a.replaceWith(div)      // replaces all the a material with the div i.e, div.innerHTML="<h1> hello world1\n</h1>"
