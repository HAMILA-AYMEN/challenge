import React from 'react'

function Header(){
  
    return (
      <div>
        <header>
      <h1>John Doe</h1>
      <ul class="navmenu">
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </header>

        <section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src="/John-Doe.jpg" alt="jhon-doe" />
    </section>
      
      </div>
    )
  
}
export default Header
