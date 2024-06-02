<script>
$(document).ready(function(){
  // Fade out body when leaving the page
  $('a').click(function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    $('body').fadeOut(1000, function(){
      window.location.href = href;
    });
  });

  // Fade in body when page is loaded
  $('body').hide().fadeIn(1000);
});
</script>


