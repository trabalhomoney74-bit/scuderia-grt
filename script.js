const btn = document.querySelector('.hamburger');
const nav = document.querySelector('#mainNav');
if (btn) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    if (open) {
      nav.style.display = 'flex';
      nav.style.position = 'absolute';
      nav.style.top = '78px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#fff';
      nav.style.padding = '22px';
      nav.style.flexDirection = 'column';
      nav.style.borderBottom = '1px solid #eee';
    } else {
      nav.style.display = '';
    }
  });
}
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 980) nav.style.display = '';
}));
document.querySelectorAll('.control-grid input').forEach(input => {
  input.addEventListener('change', () => {
    const label = input.closest('label');
    label.style.opacity = input.checked ? '.5' : '1';
    label.style.textDecoration = input.checked ? 'line-through' : 'none';
  });
});
