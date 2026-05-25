import { c as createComponent } from './astro-component_CfmrekeY.mjs';
import 'piccolore';
import { r as renderComponent, t as renderTemplate, p as maybeRenderHead } from './entrypoint_C3HFFkYg.mjs';
import { $ as $$Layout } from './Layout_NUnVjBmb.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Error", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> <h2 data-astro-cid-zetdm5md>Page not found</h2> <p data-astro-cid-zetdm5md>Seems like you've lost your way, Let's bring you back <a href="/" data-astro-cid-zetdm5md>Home</a> </p> </div> ` })}`;
}, "E:/Projects/Website/portfolio/src/pages/404.astro", void 0);

const $$file = "E:/Projects/Website/portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
