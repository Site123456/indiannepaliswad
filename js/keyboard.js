// no reupload
$( document ).ready(function() {
    if ($(window).width() < 800) {
        $("#searchbar").attr("placeholder", "Rechercher...");
    }
});
$( function() {
    var availableTags = [
        "Filtrer les produits par ses descriptions, nom, prix, type, etc..."
    ];
    $( "#searchbar" ).autocomplete({
        source: availableTags
    });
});
$( "#searchbar" ).bind("enterKey",function(e){
    gosearch();
  });
  $( "#searchbar" ).keyup(function(e){
  if(e.keyCode == 13)
  {
  $(this).trigger("enterKey");
  }
  });
jQuery.fn.extend({
  toggleText: function (aa, bb){
      var isClicked = false;
      var that = this;
      this.click(function (){
          if (isClicked) { that.text(aa); isClicked = false; }
          else { that.text(bb); isClicked = true; }
      });
      return this;
  }
});
function gosearch() {
    window.location.href = "./results?q=" + $( "#searchbar" ).val();
}