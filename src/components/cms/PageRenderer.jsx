import React, { useEffect, useRef } from "react";
import Home from "../../pages/HomePage";
import About from "../../pages/about";
import Services from "../../pages/Services";
import Blog from "../../pages/blog";

const NON_EDITABLE_TAGS = new Set([
  "html",
  "body",
  "script",
  "style",
  "svg",
  "path",
  "defs",
  "clipPath",
  "meta",
  "link",
]);

const TEXT_ATTR_TAGS = new Set([
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "button",
  "a",
  "li",
  "label",
  "small",
  "strong",
  "em",
  "b",
  "i",
  "blockquote",
  "figcaption",
  "td",
  "th",
  "option",
]);

const VALUE_TAGS = new Set(["input", "textarea"]);

const getPageComponent = (pageId, pageProps) => {
  switch (pageId) {
    case "home":
      return <Home {...pageProps} />;
    case "about":
      return <About {...pageProps} />;
    case "services":
      return <Services {...pageProps} />;
    case "blog":
      return <Blog {...pageProps} />;
    default:
      return null;
  }
};

const buildDomPath = (element, root) => {
  const parts = [];
  let current = element;
  while (current && current !== root) {
    const parent = current.parentElement;
    if (!parent) break;
    const index = Array.from(parent.children).indexOf(current);
    parts.push(`${current.tagName.toLowerCase()}:${index}`);
    current = parent;
  }
  return parts.reverse().join(">");
};

const findByDomPath = (root, path) => {
  if (!path || !root) return null;
  const parts = path.split(">").filter(Boolean);
  let current = root;
  for (const part of parts) {
    const [tag, rawIndex] = part.split(":");
    const index = Number(rawIndex);
    if (!Number.isFinite(index) || !current.children[index]) return null;
    const next = current.children[index];
    if (!next || next.tagName.toLowerCase() !== tag) return null;
    current = next;
  }
  return current === root ? null : current;
};

const extractPropsFromElement = (element) => {
  const type = element.tagName.toLowerCase();
  const props = {};

  if (type === "img") {
    props.src = element.getAttribute("src") || "";
    props.alt = element.getAttribute("alt") || "";
  } else if (VALUE_TAGS.has(type)) {
    props.value = element.value || element.getAttribute("value") || "";
    props.placeholder = element.getAttribute("placeholder") || "";
  } else {
    props.children = element.textContent || "";
  }

  if (type === "a" || element.hasAttribute("href")) {
    props.href = element.getAttribute("href") || "";
    props.target = element.getAttribute("target") || "_self";
  }

  // Capture visual text styles so formatting controls can reflect current state.
  if (typeof window !== "undefined") {
    const computed = window.getComputedStyle(element);
    props.style = {
      fontWeight: computed.fontWeight || "",
      fontStyle: computed.fontStyle || "",
      textDecorationLine: computed.textDecorationLine || "",
      textAlign: computed.textAlign || "",
      color: computed.color || "",
    };
  }

  return { type, props };
};

const applyPropsToElement = (element, props) => {
  if (!element || !props || typeof props !== "object") return;

  if (typeof props.src === "string" && element.tagName.toLowerCase() === "img") {
    element.setAttribute("src", props.src);
  }
  if (typeof props.alt === "string" && element.tagName.toLowerCase() === "img") {
    element.setAttribute("alt", props.alt);
  }
  if (typeof props.href === "string" && (element.tagName.toLowerCase() === "a" || element.hasAttribute("href"))) {
    element.setAttribute("href", props.href);
  }
  if (typeof props.target === "string" && (element.tagName.toLowerCase() === "a" || element.hasAttribute("target"))) {
    element.setAttribute("target", props.target);
  }
  if (
    (typeof props.children === "string" || typeof props.children === "number") &&
    element.tagName.toLowerCase() !== "img"
  ) {
    element.textContent = String(props.children);
  }
  if (typeof props.value === "string" && VALUE_TAGS.has(element.tagName.toLowerCase())) {
    element.value = props.value;
    element.setAttribute("value", props.value);
  }
  if (typeof props.placeholder === "string" && VALUE_TAGS.has(element.tagName.toLowerCase())) {
    element.setAttribute("placeholder", props.placeholder);
  }
  if (props.style && typeof props.style === "object") {
    if (typeof props.style.fontWeight === "string") {
      element.style.fontWeight = props.style.fontWeight;
    }
    if (typeof props.style.fontStyle === "string") {
      element.style.fontStyle = props.style.fontStyle;
    }
    if (typeof props.style.textDecorationLine === "string") {
      element.style.textDecorationLine = props.style.textDecorationLine;
    }
    if (typeof props.style.textAlign === "string") {
      element.style.textAlign = props.style.textAlign;
    }
    if (typeof props.style.color === "string") {
      element.style.color = props.style.color;
    }
  }
};

const clearSelectionStyles = (root) => {
  if (!root) return;
  root.querySelectorAll("[data-cms-selected='true']").forEach((el) => {
    el.removeAttribute("data-cms-selected");
    el.style.outline = "";
    el.style.outlineOffset = "";
  });
};

const hasVisibleText = (element) => {
  if (!element) return false;
  return Array.from(element.childNodes || []).some(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0
  );
};

const isEditableElement = (element, root) => {
  if (!element || element === root) return false;
  const tag = element.tagName?.toLowerCase?.();
  if (!tag || NON_EDITABLE_TAGS.has(tag)) return false;

  if (tag === "img") return true;
  if (TEXT_ATTR_TAGS.has(tag) && hasVisibleText(element)) return true;
  if (VALUE_TAGS.has(tag)) return true;
  if (element.hasAttribute("data-cms-editable")) return true;

  return false;
};

const findEditableTarget = (start, root) => {
  let current = start;
  while (current && current !== root) {
    if (isEditableElement(current, root)) return current;
    current = current.parentElement;
  }
  return null;
};

const PageRenderer = ({
  pageId,
  onElementSelect,
  selectedElement,
  pageEdits = {},
  interactive = true,
  pageProps = {},
}) => {
  const rootRef = useRef(null);
  const pageContent = getPageComponent(pageId, pageProps);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    Object.entries(pageEdits || {}).forEach(([path, props]) => {
      const element = findByDomPath(root, path);
      if (element) applyPropsToElement(element, props);
    });
  }, [pageEdits, pageId]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    clearSelectionStyles(root);
    if (!interactive || !selectedElement) return;

    const selected = findByDomPath(root, selectedElement);
    if (!selected) return;

    selected.setAttribute("data-cms-selected", "true");
    selected.style.outline = "3px solid #7c7adb";
    selected.style.outlineOffset = "2px";
  }, [interactive, selectedElement, pageId, pageEdits]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !interactive || !onElementSelect) return;

    const handleClick = (event) => {
      const target = findEditableTarget(event.target, root);
      if (!target || !root.contains(target)) return;

      event.preventDefault();
      event.stopPropagation();

      const id = buildDomPath(target, root);
      const { type, props } = extractPropsFromElement(target);
      onElementSelect(id, type, props);
    };

    root.addEventListener("click", handleClick, true);
    return () => root.removeEventListener("click", handleClick, true);
  }, [interactive, onElementSelect, pageId]);

  return (
    <div className={`relative w-full min-h-screen ${interactive ? "bg-white" : ""}`} ref={rootRef}>
      {pageContent}
    </div>
  );
};

export default PageRenderer;
