export default function LocationContent({city}: {city: string}) { return (<main className="services-page locations-page"><div className="services-container"><nav aria-label="Breadcrumb" className="services-breadcrumb"><a href="/">{"Home"}</a>
<span aria-hidden="true">{"/"}</span>
<a href="/locations/">{"Locations"}</a>
<span aria-hidden="true">{"/"}</span>
<span aria-current="page">{city}</span>
</nav>
<section className="locations-hero" aria-labelledby="location-title"><p className="locations-eyebrow">{"LITTLE STEPS. BRIGHTER FUTURES."}</p>
<h1 id="location-title" className="locations-title"><span className="locations-paper">{"Online Tuition in "}{city}</span>
<span className="locations-paper">{"for NRI & Expat Students"}</span>
</h1>
<p className="locations-intro">{"Moms on Teaching provides personalised one-to-one online tuition in "}{city}{" for CBSE, ICSE, IGCSE and Kerala State Board students, delivered by verified mother-teachers familiar with"}{" "}{city}{"’s school calendar and time zone."}</p>
</section>
<section className="locations-facts" aria-labelledby="facts-title"><div className="locations-factsHeading"><span className="locations-sparkle" aria-hidden="true">{"✦"}</span>
<h2 id="facts-title">{"Quick Facts — "}{city}</h2>
</div>
<dl className="locations-factsGrid"><div className="locations-fact"><span className="locations-check" aria-hidden="true">{"✓"}</span>
<div><dt>{"Boards available"}</dt>
<dd>{"CBSE, ICSE, IGCSE, Kerala Board"}</dd>
</div>
</div>
<div className="locations-fact"><span className="locations-check" aria-hidden="true">{"✓"}</span>
<div><dt>{"Time zone"}</dt>
<dd>{"GMT (UTC+0) / British Summer Time (BST, UTC+1)"}</dd>
</div>
</div>
<div className="locations-fact"><span className="locations-check" aria-hidden="true">{"✓"}</span>
<div><dt>{"Currency"}</dt>
<dd>{"GBP"}</dd>
</div>
</div>
<div className="locations-fact"><span className="locations-check" aria-hidden="true">{"✓"}</span>
<div><dt>{"Languages"}</dt>
<dd>{"English, Malayalam"}</dd>
</div>
</div>
</dl>
</section>
<section className="locations-boards" aria-labelledby="boards-title"><div className="locations-sectionHeading"><p className="locations-eyebrow">{"FAMILIAR CURRICULUM. PERSONAL SUPPORT."}</p>
<h2 id="boards-title">{"Boards Available in "}{city}</h2>
</div>
<ul className="locations-boardGrid"><li className="locations-boardCard"><span className="locations-boardNumber" aria-hidden="true">{"0"}{"1"}</span>
<h3>{"CBSE"}</h3>
</li>
<li className="locations-boardCard"><span className="locations-boardNumber" aria-hidden="true">{"0"}{"2"}</span>
<h3>{"ICSE"}</h3>
</li>
<li className="locations-boardCard"><span className="locations-boardNumber" aria-hidden="true">{"0"}{"3"}</span>
<h3>{"IGCSE"}</h3>
</li>
<li className="locations-boardCard"><span className="locations-boardNumber" aria-hidden="true">{"0"}{"4"}</span>
<h3>{"Kerala Board"}</h3>
</li>
</ul>
</section>
<section className="locations-cta" aria-labelledby="location-cta"><div><p className="locations-eyebrow">{"THE NEXT CHAPTER STARTS HERE"}</p>
<h2 id="location-cta">{"Find the right support for your child."}</h2>
<p className="locations-ctaText">{"Explore our tuition services or talk to us about your child’s learning needs in "}{city}{"."}</p>
</div>
<div className="locations-actions"><a className="services-primaryButton" href="/services/">{"Explore Our Services "}<span aria-hidden="true">{"↗"}</span>
</a>
<a className="services-secondaryButton" href="/contact/">{"Contact Us"}</a>
</div>
</section>
</div>
</main>
); }