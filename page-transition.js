<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function() {
  const langEn = $('#lang-en');
  const langZh = $('#lang-zh');

  function toggleLanguage(targetLang) {
    const currentPath = window.location.pathname; // Get current path
    let newPath;

    // Replace language suffix based on targetLang
    if (targetLang === 'zh' && currentPath.includes('_en')) {
      newPath = currentPath.replace('_en', '_zh');
    } else if (targetLang === 'en' && currentPath.includes('_zh')) {
      newPath = currentPath.replace('_zh', '_en');
    }

    // If newPath is defined, navigate to it
    if (newPath && newPath !== currentPath) {
      window.location.href = newPath;
    }
  }

  langEn.click(function(e) { 
    e.preventDefault();
    toggleLanguage('en'); 
  });

  langZh.click(function(e) { 
    e.preventDefault();
    toggleLanguage('zh'); 
  });
});
</script>
