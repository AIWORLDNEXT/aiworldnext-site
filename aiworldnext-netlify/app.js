(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
  }
  themeToggle?.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  });
  // Placeholder search button
  const searchBtn = document.getElementById('searchBtn');
  searchBtn?.addEventListener('click', () => {
    alert('Global search coming soon!');
  });
})();