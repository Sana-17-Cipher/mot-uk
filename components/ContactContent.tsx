"use client";
import type { FormEvent } from "react";
export default function ContactContent() {
function submitEnquiry(event: FormEvent<HTMLFormElement>) {
 event.preventDefault();
 const form = event.currentTarget;
 if (!form.reportValidity()) return;
 const values = new FormData(form);
 const body = ["Free demo request — Moms on Teaching UK", "", "Parent’s name: " + values.get("parentName"), "Phone number: " + values.get("phoneNumber"), "Curriculum: " + values.get("service"), "Location: " + values.get("location"), "", "How can we help?", String(values.get("message") || "")].join("\n");
 window.location.href = "mailto:info@momsonteaching.com?subject=" + encodeURIComponent("UK — Request a free demo") + "&body=" + encodeURIComponent(body);
}
return (<main className="contact-page"><div className="contact-container"><header className="contact-contactHeader"><div className="contact-contactTitleRow"><h1>{"Contact us"}</h1>
<a href="tel:+917012092344" className="contact-telephone" aria-label="Call Moms on Teaching on +91 70120 92344"><svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><ellipse cx="53" cy="80" rx="34" ry="4" fill="#172547" opacity=".09"></ellipse>
<path d="\n\n            M20 35\n\n            C8 35 8 43 15 44\n\n            C5 45 6 52 14 53\n\n            C5 55 7 62 15 62\n\n            C8 66 13 72 21 70\n\n            L29 68\n\n          " stroke="#172547" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 4"></path>
<path d="\n\n            M34 43\n\n            H68\n\n            Q73 43 75 49\n\n            L84 71\n\n            Q87 79 78 79\n\n            H24\n\n            Q16 79 19 71\n\n            L28 49\n\n            Q30 43 34 43Z\n\n          " fill="#E8BC59" stroke="#172547" strokeWidth="2.2" strokeLinejoin="round"></path>
<path d="M34 48H67" stroke="#FFF5D8" strokeWidth="3" strokeLinecap="round"></path>
<circle cx="51" cy="62" r="13" fill="#FFF9EB" stroke="#172547" strokeWidth="2.2"></circle>
<circle cx="51" cy="62" r="9" stroke="#172547" strokeWidth="3" strokeDasharray="1 6"></circle>
<circle cx="51" cy="62" r="4.5" fill="#E8BC59"></circle>
<g className="contact-phoneReceiver"><path d="\n\n              M18 28\n\n              Q51 13 84 28\n\n              Q88 30 87 35\n\n              L85 43\n\n              Q84 47 79 46\n\n              L67 43\n\n              Q63 42 64 38\n\n              L65 33\n\n              Q51 28 37 33\n\n              L38 38\n\n              Q39 42 35 43\n\n              L23 46\n\n              Q18 47 17 43\n\n              L15 35\n\n              Q14 30 18 28Z\n\n            " fill="#172547"></path>
<path d="M29 27Q51 19 73 27" stroke="#526488" strokeWidth="2.5" strokeLinecap="round"></path>
</g>
<g className="contact-phoneRings" stroke="#AD7E29" strokeWidth="2.5" strokeLinecap="round"><path d="M13 21L8 17M20 16L18 10"></path>
<path d="M87 21L92 17M80 16L82 10"></path>
</g>
</svg>
</a>
</div>
</header>
<div className="contact-contactScene"><section className="contact-details" aria-labelledby="contact-details-title"><div className="contact-detailsContent"><h2 id="contact-details-title">{"We’re here to help."}</h2>
<p className="contact-detailsIntro">{"Tell us what your child needs. We’ll help you find the right place to start."}</p>
<dl className="contact-contactList"><div><dt>{"Email us"}</dt>
<dd><a href="mailto:info@momsonteaching.com">{"info@momsonteaching.com"}</a>
</dd>
</div>
<div><dt>{"Call us"}</dt>
<dd><a href="tel:+917012092344">{"+91 70120 92344"}</a>
</dd>
</div>
<div><dt>{"Response time"}</dt>
<dd>{"Within 2–4 business hours"}</dd>
</div>
</dl>
<div className="contact-connectRow"><a href="https://wa.me/917012092344" target="_blank" rel="noopener noreferrer" className="contact-whatsapp">{"Chat on WhatsApp"}<span aria-hidden="true">{"↗"}</span>
<span className="contact-srOnly">{" "}{"(opens in a new tab)"}</span>
</a>
<div className="contact-socials" role="group" aria-label="Follow Moms on Teaching"><a href="https://www.youtube.com/@MomsonteachingTutions" target="_blank" rel="noopener noreferrer" aria-label="YouTube (opens in a new tab)"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"></path>
</svg>
</a>
<a href="https://www.instagram.com/moms.on.teaching/" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"></rect>
<circle cx="12" cy="12" r="4"></circle>
<circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"></circle>
</svg>
</a>
</div>
</div>
<div className="ContactEyes-eyes" aria-hidden="true"><span className="ContactEyes-eye"><span className="ContactEyes-pupil" data-pupil="true"></span>
</span>
<span className="ContactEyes-eye"><span className="ContactEyes-pupil" data-pupil="true"></span>
</span>
</div>
</div>
</section>
<section className="contact-formPanel" aria-labelledby="demo-form-title"><div className="contact-formHeading"><h2 id="demo-form-title">{"Request a free demo"}</h2>
</div>
<form className="contact-form" onSubmit={submitEnquiry}><div className="contact-formRow"><div className="contact-field"><label htmlFor="parent-name">{"Parent’s name"}</label>
<input id="parent-name" type="text" placeholder="Your name" autoComplete="name" maxLength={100} required={true} name="parentName" /></div>
<div className="contact-field"><label htmlFor="phone-number">{"Phone number"}</label>
<input id="phone-number" type="tel" placeholder="Include country code" autoComplete="tel" maxLength={30} required={true} name="phoneNumber" /></div>
</div>
<div className="contact-formRow"><div className="contact-field"><label htmlFor="curriculum">{"Curriculum"}</label>
<select id="curriculum" name="service" required={true} defaultValue=""><option value="" disabled={true}>{"Select curriculum"}</option>
<option value="CBSE">{"CBSE"}</option>
<option value="ICSE">{"ICSE"}</option>
<option value="IGCSE">{"IGCSE"}</option>
<option value="IB">{"IB"}</option>
<option value="US Curriculum">{"US Curriculum"}</option>
<option value="Kerala State Board">{"Kerala State Board"}</option>
<option value="Not sure yet">{"Not sure yet"}</option>
</select>
</div>
<div className="contact-field"><label htmlFor="location">{"Location"}</label>
<select id="location" name="location" required={true} defaultValue=""><option value="" disabled={true}>{"Select location"}</option>
<option value="London">{"London"}</option>
<option value="Leicester">{"Leicester"}</option>
<option value="Birmingham">{"Birmingham"}</option>
<option value="Manchester">{"Manchester"}</option>
<option value="Coventry">{"Coventry"}</option>
<option value="Slough">{"Slough"}</option>
<option value="Elsewhere in the UK">{"Elsewhere in the UK"}</option>
<option value="Outside the UK">{"Outside the UK"}</option>
</select>
</div>
</div>
<div className="contact-field"><label htmlFor="message">{"How can we help? "}<span>{"(optional)"}</span>
</label>
<textarea id="message" name="message" rows={3} maxLength={1200} placeholder="Your child’s class, subjects and any learning needs"></textarea>
</div>
<div className="contact-submitRow"><button type="submit" className="contact-submit">{"Request a free demo"}<span aria-hidden="true">{"↗"}</span>
</button>
<p>{"Opens your email app to send the request."}</p>
</div>
</form>
</section>
</div>
<aside className="contact-appNote"><span className="contact-appDot" aria-hidden="true"></span>
<p>{"A little closer to learning."}<span>{" Our mobile app is coming soon."}</span>
</p>
</aside>
</div>
</main>
);
}
