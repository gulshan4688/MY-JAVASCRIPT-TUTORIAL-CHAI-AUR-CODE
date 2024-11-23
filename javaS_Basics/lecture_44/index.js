// let elem = document.getElementsByTagName("div");

//  so now in this file we have 4 ways to add some `HTML` or `ELEMENT` or `TEXT

// we will se how to use me

// 1.->->->'beforeEnd',
// element is inserted before begining of the tag
first.insertAdjacentHTML("beforeEnd", '<div class="test">beforeEnd</div>');


// 2.->->->'beforeBegin'
// element is inserted before ending  of the tag
first.insertAdjacentHTML("beforeBegin", '<div class="test"> beforeBegin</div>');


// 3.->->->'afterBegin'
// element is inserted after begining of the tag
first.insertAdjacentHTML("afterBegin", '<div class="test"> afterBegin</div>');



// 4.->->->'afterEnd'.
// element is inserted after ending  of the tag
first.insertAdjacentHTML("afterEnd", "<div >afterEnd</div>");
