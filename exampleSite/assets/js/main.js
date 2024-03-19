document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const progressBar = document.querySelector('.progress-bar');

  function updateProgressBar() {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / scrollTotal) * 100;
    progressBar.style.width = progress + '%';
  }

  function checkScroll() {
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    updateProgressBar();
  }
  window.addEventListener('scroll', checkScroll);
});

document.addEventListener('DOMContentLoaded', function() {
  const themeToggleButton = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('dark-icon');
  const lightIcon = document.getElementById('light-icon');

  function updateIcons() {
    const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
    darkIcon.style.display = isDarkMode ? 'none' : 'block';
    lightIcon.style.display = isDarkMode ? 'block' : 'none';
  }

  function setInitialTheme() {
    // 로컬 스토리지에서 테마 상태 읽기 또는 시간에 따라 결정
    const storedTheme = localStorage.getItem('theme') || (isNightTime() ? 'dark' : 'light');
    document.body.setAttribute('data-theme', storedTheme);
    updateIcons();
  }

  function toggleTheme() {
    const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons();
  }

  themeToggleButton.addEventListener('click', toggleTheme);
  setInitialTheme();
});
