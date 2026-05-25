import { c as createComponent } from './astro-component_CfmrekeY.mjs';
import 'piccolore';
import { r as renderComponent, t as renderTemplate } from './entrypoint_C3HFFkYg.mjs';
import { $ as $$Layout } from './Layout_NUnVjBmb.mjs';
import { p as projects, $ as $$LatestWork } from './projects_CViCX-pk.mjs';

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio" }, { "default": ($$result2) => renderTemplate`${projects.map((project) => renderTemplate`${renderComponent($$result2, "LatestWork", $$LatestWork, { "name": project.name, "reverse": project.reverse, "images": project.images, "link": project.link, "technology": project.technology, "description": project.description, "playStoreLink": project.playStoreLink, "appStoreLink": project.appStoreLink, "platform": project.platform, "year": project.year, "role": project.role })}`)}` })}`;
}, "E:/Projects/Website/portfolio/src/pages/portfolio.astro", void 0);

const $$file = "E:/Projects/Website/portfolio/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
