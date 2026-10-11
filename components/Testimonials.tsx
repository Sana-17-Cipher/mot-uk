"use client";
import { useState } from "react";
export default function Testimonials() { const [paused,setPaused]=useState(false); return (<section className="HomeTestimonials-section" aria-labelledby="testimonials-title" data-paused={paused}><div className="HomeTestimonials-heading"><h2 id="testimonials-title">{"Small moments. Meaningful progress."}</h2>
<button type="button" className="HomeTestimonials-motionButton" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Resume testimonial animation" : "Pause testimonial animation"}><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="3" height="12" rx="1"></rect>
<rect x="12" y="4" width="3" height="12" rx="1"></rect>
</svg>
<span>{paused ? "Play" : "Pause"}</span></button>
</div>
<div className="HomeTestimonials-viewport" tabIndex={0} role="region" aria-label="Illustrative parent and student feedback. Focus here to pause scrolling."><div className="HomeTestimonials-track"><div className="HomeTestimonials-group"><figure className="HomeTestimonials-card"><span className="HomeTestimonials-quoteMark" aria-hidden="true">{"“"}</span>
<blockquote><p>{"My daughter feels more comfortable asking questions and explaining what she has learnt."}</p>
</blockquote>
<figcaption><span className="HomeTestimonials-authorDot" aria-hidden="true"></span>
{"Parent "}</figcaption>
</figure>
<figure className="HomeTestimonials-card"><span className="HomeTestimonials-quoteMark" aria-hidden="true">{"“"}</span>
<blockquote><p>{"I can ask my teacher to explain something again and work through it at my own pace."}</p>
</blockquote>
<figcaption><span className="HomeTestimonials-authorDot" aria-hidden="true"></span>
{"Student "}</figcaption>
</figure>
<figure className="HomeTestimonials-card"><span className="HomeTestimonials-quoteMark" aria-hidden="true">{"“"}</span>
<blockquote><p>{"We appreciate the individual attention and the time spent on topics our child finds difficult."}</p>
</blockquote>
<figcaption><span className="HomeTestimonials-authorDot" aria-hidden="true"></span>
{"Parent "}</figcaption>
</figure>
<figure className="HomeTestimonials-card"><span className="HomeTestimonials-quoteMark" aria-hidden="true">{"“"}</span>
<blockquote><p>{"Working through each step with my teacher makes difficult questions feel more manageable."}</p>
</blockquote>
<figcaption><span className="HomeTestimonials-authorDot" aria-hidden="true"></span>
{"Student"}</figcaption>
</figure>
<figure className="HomeTestimonials-card"><span className="HomeTestimonials-quoteMark" aria-hidden="true">{"“"}</span>
<blockquote><p>{"The patient explanations and regular conversations help us stay involved in our child’s learning."}</p>
</blockquote>
<figcaption><span className="HomeTestimonials-authorDot" aria-hidden="true"></span>
{"Parent "}</figcaption>
</figure>
</div>
<div className="HomeTestimonials-group" aria-hidden="true"><figure className="HomeTestimonials-card"><span className="HomeTestimonials-quoteMark" aria-hidden="true">{"“"}</span>
<blockquote><p>{"My daughter feels more comfortable asking questions and explaining what she has learnt."}</p>
</blockquote>
<figcaption><span className="HomeTestimonials-authorDot" aria-hidden="true"></span>
{"Parent "}</figcaption>
</figure>
<figure className="HomeTestimonials-card"><span className="HomeTestimonials-quoteMark" aria-hidden="true">{"“"}</span>
<blockquote><p>{"I can ask my teacher to explain something again and work through it at my own pace."}</p>
</blockquote>
<figcaption><span className="HomeTestimonials-authorDot" aria-hidden="true"></span>
{"Student "}</figcaption>
</figure>
<figure className="HomeTestimonials-card"><span className="HomeTestimonials-quoteMark" aria-hidden="true">{"“"}</span>
<blockquote><p>{"We appreciate the individual attention and the time spent on topics our child finds difficult."}</p>
</blockquote>
<figcaption><span className="HomeTestimonials-authorDot" aria-hidden="true"></span>
{"Parent "}</figcaption>
</figure>
<figure className="HomeTestimonials-card"><span className="HomeTestimonials-quoteMark" aria-hidden="true">{"“"}</span>
<blockquote><p>{"Working through each step with my teacher makes difficult questions feel more manageable."}</p>
</blockquote>
<figcaption><span className="HomeTestimonials-authorDot" aria-hidden="true"></span>
{"Student"}</figcaption>
</figure>
<figure className="HomeTestimonials-card"><span className="HomeTestimonials-quoteMark" aria-hidden="true">{"“"}</span>
<blockquote><p>{"The patient explanations and regular conversations help us stay involved in our child’s learning."}</p>
</blockquote>
<figcaption><span className="HomeTestimonials-authorDot" aria-hidden="true"></span>
{"Parent "}</figcaption>
</figure>
</div>
</div>
</div>
</section>
); }