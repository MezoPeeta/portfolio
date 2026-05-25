import { c as createComponent } from './astro-component_CfmrekeY.mjs';
import 'piccolore';
import { k as createRenderInstruction, p as maybeRenderHead, t as renderTemplate, j as addAttribute, q as renderHead, r as renderComponent, s as renderSlot } from './entrypoint_C3HFFkYg.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="primary-header flex" data-astro-cid-ymhdp2rl> <div data-astro-cid-ymhdp2rl> <a href="/" data-astro-cid-ymhdp2rl> <h1 class="logo" data-astro-cid-ymhdp2rl>Mazen</h1> </a> </div> <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" data-astro-cid-ymhdp2rl><span class="sr-only" data-astro-cid-ymhdp2rl>Menu</span></button> <nav data-astro-cid-ymhdp2rl> <ul data-visible="false" id="primary-navigation" class="primary-navigation flex" data-astro-cid-ymhdp2rl> <li data-astro-cid-ymhdp2rl> <a href="/portfolio" data-astro-cid-ymhdp2rl> Portfolio</a> </li> <li data-astro-cid-ymhdp2rl> <a href="/#sayhi" data-astro-cid-ymhdp2rl> Contact</a> </li> </ul> </nav> </header>  ${renderScript($$result, "E:/Projects/Website/portfolio/src/components/NavBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/Projects/Website/portfolio/src/components/NavBar.astro", void 0);

const $$Trailer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="trailer" data-astro-cid-rr33gbh5> <i class="fa-solid fa-arrow-up-right" id="trailer-icon" data-astro-cid-rr33gbh5></i> </div>`;
}, "E:/Projects/Website/portfolio/src/components/trailer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  Astro2.response.headers.set("Cache-Control", "public,max-age=604800,immutable");
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Mazen Omar is a CS student specialized in mobile development"><meta property="og:title" content="Mazen Omar"><meta property="og:description" content="Talented - Passionate - Innovative"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="627"><meta property="og:type" content="website"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body id="bg" style="scroll-behavior: smooth;"> ${renderComponent($$result, "Trailer", $$Trailer, {})} ${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderSlot($$result, $$slots["default"])} <footer> <div class="footer"> <h1 style="font-size: 1rem;">
© Mazen <span id="currentYear"></span> </h1> <a href="https://www.x.com/_mazenomar" target="_blank" style="color:white">X (Twitter)</a> <a href="https://www.linkedin.com/in/mazenomar1/" style="color:white" target="_blank">Linkedin</a> <a href="https://github.com/mezopeeta/" style="color:white" target="_blank">Github</a> <a href="#bg" aria-label="scrollIcon"> <div style="display:flex;align-items:center;"> <div class="scrollbg"> <i class="fa-solid fa-arrow-up" id="scrollIcon"></i> </div> </div> </a> </div> <div style="display:block"> <p>Made with ❤ by Mazen</p> </div> </footer> ${renderScript($$result, "E:/Projects/Website/portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>  ${renderScript($$result, "E:/Projects/Website/portfolio/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")}`;
}, "E:/Projects/Website/portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $, renderScript as r };
