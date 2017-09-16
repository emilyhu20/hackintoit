function remove(){
try
  {
  	var bad = ["Alexa", "Echo"];
  	for (var i = 0; i < bad.length; i++) {
  		var b = bad[i];
  	if (document.getElementById("productTitle").innerHTML.indexOf(b) != -1) {
           document.getElementById('submit.add-to-cart').style.display = "none";
        }
    }
  }
catch(err)
  {
    //Skip if "submit.add-to-cart" div tag isn't on this page
  }

}
remove();

