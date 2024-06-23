<script>
document.addEventListener("DOMContentLoaded", function () {
  console.log("scripts.js loaded");

  // Check if the elements exist
  let langEn = document.getElementById("lang-en");
  let langZh = document.getElementById("lang-zh");

  if (!langEn || !langZh) {
    console.error("Language toggle buttons not found.");
    return;
  }

  // Function to add id attribute based on text content
  function addIdByText(text, id) {
    document.querySelectorAll('.nav.navbar-nav.navbar-right li').forEach(function(item) {
      let anchor = item.querySelector('a');
      if (anchor && anchor.textContent.trim() === text) {
        item.id = id;
      }
    });
  }

  // Add id attributes to specific navbar links
  addIdByText('English', 'lang-en');
  addIdByText('中文', 'lang-zh');

  function toggleLanguage(targetLang) {
    const currentPath = window.location.pathname.split("/").pop();
    console.log("Current Path: ", currentPath);
    let newPath = currentPath;

    if (targetLang === 'zh' && currentPath.includes('_en')) {
      newPath = currentPath.replace('_en', '_zh');
    } else if (targetLang === 'en' && currentPath.includes('_zh')) {
      newPath = currentPath.replace('_zh', '_en');
    }

    console.log("New Path: ", newPath);
    const newUrl = window.location.href.replace(currentPath, newPath);
    console.log("New URL: ", newUrl);
    window.location.href = newUrl;
  }

  langEn.addEventListener("click", function() { toggleLanguage('en'); });
  langZh.addEventListener("click", function() { toggleLanguage('zh'); });
});

$(document).ready(function() {
  // Fade in body on page load
  $('body').addClass('loaded');

  // Fade out body and navigate when clicking a link
  $('a').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    
    // Add fading class to initiate fade-out effect
    $('body').addClass('fading');
    
    // Navigate to new page after fade-out animation
    setTimeout(function() {
      window.location.href = href;
    }, 888); // Adjust timing to match your animation duration
  });
});

</script>
