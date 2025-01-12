---
title: Minimalist Utilities
description: Reference documentation for CSS utilities that ship with the Minimalist CSS library.
---

## `utils/utils.css`

Minimalist intentionally ships with a small set of utility classes but these may grow over time. This will never be a comprehensive utility library but rather a small set of classes that are commonly used in web projects.

Minimalist also ships with a reset stylesheet. Instead of including the source here, please refer to the most up to date source in the [Minimalist GitHub repository](https://github.com/schalkneethling/minimalist/blob/main/src/minimalist/utils/reset.css)

### Remove borders

CSS class to remove borders from an element. By default Minimalist does not remove the border from the `fieldset` element as it can be a useful visual indicator for grouping form elements. This is an example use case where the `no-border` class can be helpful.

```css
.no-border {
  border: 0;
}
```

### Reset lists

CSS class to reset the default list styling.

- Removes bullet points or numbers from list items.
- Eliminates default margin and padding.

```css
.reset-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

### Readable line length

A simple utility for setting a max width on an element that constrains its width to what is commonly known to be a readable line length for prose.

```css
.readable-line-length {
  max-width: 40rem;
  max-width: 85ch;
}
```

### Visually hidden

A utility class to visually hide an element while keeping it accessible to screen readers.

```css
/* https://www.tpgi.com/the-anatomy-of-visually-hidden/ */
.visually-hidden:not(:focus, :active) {
  block-size: 1px;
  clip-path: inset(50%);
  inline-size: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}
```
