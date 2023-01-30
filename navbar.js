function insertNavbar(page){
  const runColorMode = (fn) => {
  if (!window.matchMedia) {
    return;
  }
  
  const query = window.matchMedia('(prefers-color-scheme: dark)');

  fn(query.matches);

  query.addEventListener('change', (event) => fn(event.matches));
}

runColorMode((isDarkMode) => {
  if (isDarkMode) {
    
		document.getElementById('nav-bar').innerHTML = `    
		    <a href='/' class='link'><span class='link-down'>Home</span></a>
		    <a href='/about/' class='link'><span class='link-down'>About</span></a>
		    <a href='/' class='link'><img class='logo' src='/assets/v3-lightpng-large.png'></a>
		    <a href='/team/' class='link'><span class='link-down'>Our Team</span></a>
		    <a href='/services/' class='link'><span class='link-down'>Services</span></a>`;
    var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = '/assets/v3-lightpng-large.png';

  } else {
    
		document.getElementById('nav-bar').innerHTML = `    
		    <a href='/' class='link'><span class='link-down'>Home</span></a>
		    <a href='/about/' class='link'><span class='link-down'>About</span></a>
		    <a href='/' class='link'><img class='logo' src='/assets/v3-darkpng-large.png'></a>
		    <a href='/team/' class='link'><span class='link-down'>Our Team</span></a>
		    <a href='/services/' class='link'><span class='link-down'>Services</span></a>`;
  }
      var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = '/assets/v3-darkpng-large.png';

})
}

insertNavbar();