function insertNavbar(page){
		document.getElementById('nav-bar').innerHTML = `    
		    <a href='/' class='link'><span class='link-down'>Home</span></a>
		    <a href='/about/' class='link'><span class='link-down'>About</span></a>
		    <a href='/' class='link'><img class='logo' src='/assets/v3-darkpng-large.png'</a>
		    <a href='/team/' class='link'><span class='link-down'>Team</span></a>
		    <a href='/services/' class='link'><span class='link-down'>Services</span></a>`
}
insertNavbar();