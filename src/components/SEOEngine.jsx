import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, seoByPath } from "../seo/seoConfig";

const setMetaTag = ({ name, property, content }) => {
  if (!content) return;
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let meta = document.head.querySelector(selector);
  if (!meta) {
    meta = document.createElement("meta");
    if (name) meta.setAttribute("name", name);
    if (property) meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const setLinkTag = ({ rel, href }) => {
  if (!href) return;
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const setJsonLd = (payload) => {
  const id = "seo-jsonld";
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
};

const SEOEngine = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const routeSeo = seoByPath[path] || seoByPath["/"];
    const canonical = `${SITE_URL}${path}`;
    const image = routeSeo.image || DEFAULT_IMAGE;

    document.title = routeSeo.title;
    setMetaTag({ name: "description", content: routeSeo.description });
    setMetaTag({ name: "keywords", content: routeSeo.keywords });
    setMetaTag({ name: "robots", content: path.startsWith("/admin") ? "noindex,nofollow" : "index,follow" });

    setMetaTag({ property: "og:type", content: "website" });
    setMetaTag({ property: "og:site_name", content: SITE_NAME });
    setMetaTag({ property: "og:title", content: routeSeo.title });
    setMetaTag({ property: "og:description", content: routeSeo.description });
    setMetaTag({ property: "og:url", content: canonical });
    setMetaTag({ property: "og:image", content: image });

    setMetaTag({ name: "twitter:card", content: "summary_large_image" });
    setMetaTag({ name: "twitter:title", content: routeSeo.title });
    setMetaTag({ name: "twitter:description", content: routeSeo.description });
    setMetaTag({ name: "twitter:image", content: image });

    setLinkTag({ rel: "canonical", href: canonical });

    setJsonLd({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: routeSeo.title,
      description: routeSeo.description,
      url: canonical,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    });
  }, [location.pathname]);

  return null;
};

export default SEOEngine;
