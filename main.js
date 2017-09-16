function remove(){
try
  {
    document.getElementById('add-to-cart-button').innerHTML = '';
  }
catch(err)
  {
    //Skip if "add-to-cart-button" div tag isn't on this page
  }
  
console.log('All BS purchases have been removed.');
setTimeout(function(){remove();},2000);
}
remove();

