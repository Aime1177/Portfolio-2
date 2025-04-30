const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu.classList.toggle('flex-col');
    menu.classList.toggle('items-center');
    menu.classList.toggle('space-y-4');
    
  });

  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const toast = document.getElementById('simpleToast');
    toast.classList.remove('hidden');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 1500);
  });