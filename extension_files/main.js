function remove(){
try
  {
    document.getElementById('submit.add-to-cart').style.display = "none"
  }
catch(err)
  {
    //Skip if "submit.add-to-cart" div tag isn't on this page
  }
  
console.log('All BS purchases have been removed.');
setTimeout(function(){remove();},2000);
}
remove();

