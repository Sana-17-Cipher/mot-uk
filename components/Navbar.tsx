"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
export default function Navbar() {
const [mobileOpen, setMobileOpen] = useState(false);
const [locationsOpen, setLocationsOpen] = useState(false);
const pathname = usePathname();
const headerRef = useRef<HTMLElement>(null);
useEffect(() => {
 const close = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) { setMobileOpen(false); setLocationsOpen(false); } };
 document.addEventListener("pointerdown", close);
 return () => document.removeEventListener("pointerdown", close);
}, []);
return (<header className="Navbar-header" ref={headerRef} onKeyDown={(event) => { if (event.key === "Escape") { setMobileOpen(false); setLocationsOpen(false); } }}><nav className="Navbar-bar" aria-label="Main navigation"><a className="Navbar-logo" href="/"><img alt="" loading="lazy" width="42" height="42" decoding="async" className="Navbar-logoImage" style={{"color": "transparent"} as React.CSSProperties} src="/images/mot-logo.png" /><span>{"Moms on Teaching"}</span>
</a>
<button type="button" className="Navbar-toggle" aria-controls="main-navigation-links" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close navigation" : "Open navigation"}><span aria-hidden="true">{"☰"}</span>
</button>
<div id="main-navigation-links" className="Navbar-links" data-open={mobileOpen}><a className="Navbar-navLink" href="/about/" data-active={pathname.startsWith("/about")}>{"About"}</a>
<a className="Navbar-navLink" href="/services/" data-active={pathname.startsWith("/services")}>{"Services"}</a>
<div className="Navbar-locationGroup" onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}><button type="button" className="Navbar-navLink" data-active="false" aria-controls="location-navigation" aria-expanded={locationsOpen} onClick={() => setLocationsOpen(!locationsOpen)}>{"Locations"}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="Navbar-chevron" data-open="false"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div id="location-navigation" className="Navbar-dropdown" hidden={!locationsOpen}><ul className="Navbar-dropdownList"><li><a href="/locations/">{"All locations"}</a>
</li>
<li><a href="/locations/london/">{"London"}</a>
</li>
<li><a href="/locations/leicester/">{"Leicester"}</a>
</li>
<li><a href="/locations/birmingham/">{"Birmingham"}</a>
</li>
<li><a href="/locations/manchester/">{"Manchester"}</a>
</li>
<li><a href="/locations/coventry/">{"Coventry"}</a>
</li>
<li><a href="/locations/slough/">{"Slough"}</a>
</li>
</ul>
</div>
</div>
<a className="Navbar-navLink" href="/faq/" data-active={pathname.startsWith("/faq")}>{"FAQ"}</a>
<a className="Navbar-navLink" href="/pricing/" data-active={pathname.startsWith("/pricing")}>{"Pricing"}</a>
<a className="Navbar-navLink" href="/contact/" data-active={pathname.startsWith("/contact")}>{"Contact"}</a>
<a className="Navbar-demo" href="/contact/">{"Book Free Demo "}<span aria-hidden="true">{"↗"}</span>
</a>
</div>
</nav>
</header>
);
}
