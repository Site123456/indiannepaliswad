$( document ).ready(function() {
    if ($(window).width() < 800) {
        $("#searchbar").attr("placeholder", "Rechercher...");
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