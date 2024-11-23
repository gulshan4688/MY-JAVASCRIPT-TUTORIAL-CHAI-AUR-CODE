document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside ul");
  },
  false
);

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    // e.stopPropagation(); // used to prvent bubling  (when owl is clicked it stops here and do not go to above click event )
    console.log("owl clicked");
  },
  true
);
// ++++++++++++++++++++ BUBBLING and CAPTURING +++++++++++++++++++++
//  bub and cap depends on bool value true or false which we provide after function
// in the addEventListener={}

// if false then its bubbling
// if true then its capturing

// ++++++++++++ BUBBLING
//  here the dom starts taking event from inside to outside that is in the above example
// ++++++++++++ CAPTURING
//  here the dom starts taking event outside to inside that is when we place true instead of false

// ++++++++++ prevent links from being clicked

document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
  },
  true
);

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    // parentNode is required because images is in <a> tag and we wiell remove a whole list because if only a gets remove than li ka dot reh jayega
    // two methods of removal

    // here is another method that is removechild here we remove child thats why again we are selecting parentNode even after remove it is itself a prentNod
    // removeIt.parentNode.removeChild(removeIt);

    // so now we have a problem if we are clicking beside any image (it means we are clicking on the list item and whole list gets deleted)
    // so we need a condtional statment so that the event 'e' can be controlled

    if (e.target.tagName === "IMG") {
      console.log(e.target.parentNode);
      console.log(e.target.tagName);
      let removeIt = e.target.parentNode;
      removeIt.remove();

      console.log(e.target.id);
    }
  },
  false
);
