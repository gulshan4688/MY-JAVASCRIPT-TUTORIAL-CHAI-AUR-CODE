// id liya aur id.className se hum log another class apply kr skte hai

first.className = "text-black yellow";

// yaha jitni bhi class de rakhi hogi wo pehle dominate karengi

//2.===> second  prop.
// we can remove any class
first.classList.remove("yellow");

//3.===> thirs  prop.
// we can add any class
first.classList.add("yellow");

//4.===> another prop called toggle {if class is present than it removes it and vice-versa}
// we can toggle any class [on or off]
first.classList.toggle("red");

// 5.===> this prop check wether a tag contains this class or not
first.classList.contains("text-black"); // return true or false 
