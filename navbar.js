
function insertNavbar(){
  const runColorMode = (fn) => {
  if (!window.matchMedia) {
    return;
  }
  
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  const favicon = document.getElementById("favicon");

  fn(query.matches);

  query.addEventListener('change', (event) => fn(event.matches));
}

runColorMode((isDarkMode) => {
  if (isDarkMode) {
    console.log('dark mode favicon set')
		document.getElementById('nav-bar').innerHTML = `    
		    <a href='/' class='link'><span class='link-down'>Home</span></a>
		    <a href='/about/' class='link'><span class='link-down'>About</span></a>
		    <a href='/' class='link'><img class='logo' src='/assets/v3-lightpng-large.png'></a>
		    <a href='/team/' class='link'><span class='link-down'>Our Team</span></a>
		    <a href='/services/' class='link'><span class='link-down'>Services</span></a>`;

       		document.querySelector('footer').innerHTML = `<p class='copyright'><b>By using this site, you agree to the <u><span id='myBtn'>Andrims Privacy Policy</span></u>.</b><br>For any questions or concerns, please contact us. <a target='_blank' href='mailto:hello@andrims.com'>hello@andrims.com</a></p>`;
    
  favicon.setAttribute("href", "/assets/v3-lightpng-large.png");
  } else {
    console.log('light mode favicon set')
		document.getElementById('nav-bar').innerHTML = `    
		    <a href='/' class='link'><span class='link-down'>Home</span></a>
		    <a href='/about/' class='link'><span class='link-down'>About</span></a>
		    <a href='/' class='link'><img class='logo' src='/assets/v3-darkpng-large.png'></a>
		    <a href='/team/' class='link'><span class='link-down'>Our Team</span></a>
		    <a href='/services/' class='link'><span class='link-down'>Services</span></a>`;

       		document.querySelector('footer').innerHTML = `<p class='copyright'><b>By using this site, you agree to the <u><span id='myBtn'>Andrims Privacy Policy</span></u>.</b><br>For any questions or concerns, please contact us. <a target='_blank' href='mailto:hello@andrims.com'>hello@andrims.com</a></p>`;
    favicon.setAttribute("href", "/assets/v3-darkpng-large.png");
  }

})
}

insertNavbar();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

