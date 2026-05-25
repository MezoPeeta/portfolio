import { c as createComponent } from './astro-component_CfmrekeY.mjs';
import 'piccolore';
import { p as maybeRenderHead, j as addAttribute, t as renderTemplate } from './entrypoint_C3HFFkYg.mjs';
import 'clsx';
import { r as renderScript } from './Layout_NUnVjBmb.mjs';

const $$LatestWork = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LatestWork;
  const {
    name,
    link,
    images,
    reverse,
    description,
    textAction,
    technology,
    playStoreLink,
    appStoreLink,
    platform,
    year,
    role
  } = Astro2.props;
  const hasMultipleImages = images.length > 1;
  return renderTemplate`${maybeRenderHead()}<div class="projects" data-animate="fade-up" data-astro-cid-yvopb6im> <a${addAttribute(link !== "#" ? link : void 0, "href")}${addAttribute(link !== "#" ? "_blank" : void 0, "target")} class="image-link" data-astro-cid-yvopb6im> ${hasMultipleImages ? renderTemplate`<div class="carousel" data-carousel data-autoplay="true" data-astro-cid-yvopb6im> <div class="carousel-stage" data-astro-cid-yvopb6im> ${images.map((src, i) => renderTemplate`<div class="carousel-slide"${addAttribute(i, "data-slide")} data-astro-cid-yvopb6im> <img${addAttribute(src, "src")}${addAttribute(`${name} screenshot ${i + 1}`, "alt")} class="carousel-slide-img" data-astro-cid-yvopb6im> <div class="carousel-slide-overlay" data-slide-overlay data-astro-cid-yvopb6im></div> </div>`)} </div> <div class="carousel-dots" data-carousel-dots data-astro-cid-yvopb6im> ${images.map((_, i) => renderTemplate`<button${addAttribute(`carousel-dot${i === 0 ? " active" : ""}`, "class")}${addAttribute(i, "data-carousel-dot")}${addAttribute(`Go to slide ${i + 1}`, "aria-label")} data-astro-cid-yvopb6im></button>`)} </div> </div>` : renderTemplate`<div class="single-image-wrapper" data-astro-cid-yvopb6im> <img${addAttribute(images[0], "src")}${addAttribute(`${name} screenshot`, "alt")} class="single-image" data-astro-cid-yvopb6im> </div>`} </a> <div class="project-info" data-astro-cid-yvopb6im> <a${addAttribute(link !== "#" ? link : void 0, "href")}${addAttribute(link !== "#" ? "_blank" : void 0, "target")} data-type="link" class="project-title-link" data-astro-cid-yvopb6im> <h2 data-astro-cid-yvopb6im>${name}</h2> </a> ${(platform || role || year) && renderTemplate`<div class="project-meta" data-astro-cid-yvopb6im> ${platform && renderTemplate`<span class="meta-badge" data-astro-cid-yvopb6im>${platform}</span>`} ${role && renderTemplate`<span class="meta-badge" data-astro-cid-yvopb6im>${role}</span>`} ${year && renderTemplate`<span class="meta-badge" data-astro-cid-yvopb6im>${year}</span>`} </div>`} <p data-astro-cid-yvopb6im>${description}</p> ${textAction ? renderTemplate`<p style="text-transform: uppercase;font-weight: bold;border: 2px solid white;text-align:center;padding:5%;" data-astro-cid-yvopb6im> ${textAction} </p>` : renderTemplate`<hr data-astro-cid-yvopb6im>`} <div data-astro-cid-yvopb6im> <span style="font-weight: bold;" data-astro-cid-yvopb6im>Technologies used: </span><br data-astro-cid-yvopb6im> ${technology.map((tech, i) => renderTemplate`<span data-astro-cid-yvopb6im> ${tech} ${i < technology.length - 1 ? " · " : ""} </span>`)} </div> ${(playStoreLink || appStoreLink) && renderTemplate`<div class="store-badges" data-astro-cid-yvopb6im> ${playStoreLink && renderTemplate`<a${addAttribute(playStoreLink, "href")} target="_blank" class="store-badge" data-astro-cid-yvopb6im> <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="white" data-astro-cid-yvopb6im> <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" data-astro-cid-yvopb6im></path> </svg>${" "}
Google Play
</a>`} ${appStoreLink && renderTemplate`<a${addAttribute(appStoreLink, "href")} target="_blank" class="store-badge" data-astro-cid-yvopb6im> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="apple-icon" fill="white" data-astro-cid-yvopb6im> <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" data-astro-cid-yvopb6im></path> </svg>${" "}
App Store
</a>`} </div>`} </div> </div> ${renderScript($$result, "E:/Projects/Website/portfolio/src/components/LatestWork.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/Projects/Website/portfolio/src/components/LatestWork.astro", void 0);

const projects = [
  {
    name: "Hydex",
    reverse: true,
    images: ["/gifs/hydex-1.gif", "/gifs/hydex-2.gif", "/gifs/hydex-3.gif"],
    link: "#",
    technology: ["Flutter"],
    description: "A lifestyle app connecting users to the city's most exclusive venues, sports activities, curated events, and unique adventures — all personalized to their interests",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.hyde_x.hydex&hl=en",
    appStoreLink: "https://apps.apple.com/us/app/hydex/id6751296150",
    platform: "Cross-platform",
    year: "2025",
    role: "Mobile Developer"
  },
  {
    name: "AlMabarrah",
    images: ["/gifs/mabarrah.gif"],
    link: "#",
    technology: ["Flutter", "Supabase"],
    description: "A charity platform that lets users discover humanitarian campaigns, donate securely via electronic payments, and track the progress of each initiative in real time",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.mabarrah&hl=en",
    appStoreLink: "https://apps.apple.com/us/app/al-mabarrah/id6762282059",
    platform: "Cross-platform",
    year: "2025",
    role: "Mobile Developer"
  },
  {
    name: "Mostaqem",
    reverse: true,
    images: ["https://placehold.co/800x600"],
    link: "#",
    technology: ["Flutter"],
    platform: "Desktop",
    year: "2024",
    description: "An Islamic media app offering Quran and podcasts — completely free, with no ads or subscriptions."
  },
  {
    name: "Mostaqem",
    images: ["https://placehold.co/800x600"],
    link: "#",
    technology: ["Jetpack Compose"],
    platform: "Android",
    year: "2024",
    description: "An Islamic media app offering Quran and podcasts — completely free, with no ads or subscriptions.",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.mostaqem&hl=en"
  }
];

export { $$LatestWork as $, projects as p };
