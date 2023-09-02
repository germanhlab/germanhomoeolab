import React from 'react'

const Header = () => {
  return (
    <div className=''>
<>
<nav id="navbar-collapse" class="nav__wrap collapse navbar-collapse">
							<ul class="nav__menu">
								<li class="nav__dropdown active">
									<a href="index.html" aria-haspopup="true">Home</a>
									<i class="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									
								</li>
								<li class="nav__dropdown">
									<a href="#" aria-haspopup="true">Pages</a>
									<i class="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul class="nav__dropdown-menu">
										<li><a href="about.html">About</a></li>
										<li><a href="services.html">Services</a></li>
										<li><a href="single-service.html">Single Service</a></li>
										<li><a href="contact.html">Contact</a></li>
									</ul>
								</li>
								<li class="nav__dropdown">
									<a href="#" aria-haspopup="true">Works</a>
									<i class="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul class="nav__dropdown-menu">
										<li><a href="portfolio.html">Portfolio</a></li>
										<li><a href="portfolio-gallery.html">Portfolio Gallery</a></li>
										<li><a href="portfolio-single.html">Portfolio Single</a></li>
									</ul>
								</li>
								
								
							</ul> 
							<div class="nav_phone nav_phone--mobile d-lg-none">
								<span class="nav__phone-text">Call us:</span>
								<a href="tel:+919373658727" class="nav__phone-number">9373658727</a>
							</div>

							<div class="nav_socials nav_socials--mobile d-lg-none">
								<div class="socials">
									<a href="#" class="social social-twitter" aria-label="twitter" title="twitter" target="_blank"><i class="ui-twitter"></i></a>
									<a href="#" class="social social-facebook" aria-label="facebook" title="facebook" target="_blank"><i class="ui-facebook"></i></a>
									<a href="#" class="social social-youtube" aria-label="youtube" title="google plus" target="_blank"><i class="ui-youtube"></i></a>
									<a href="#" class="social social-instagram" aria-label="instagram" title="instagram" target="_blank"><i class="ui-instagram"></i></a>
								</div>
							</div>
						</nav>
</>

    </div>
  )
}

export default Header
