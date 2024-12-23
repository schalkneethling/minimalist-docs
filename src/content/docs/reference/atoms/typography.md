---
title: Minimalist Typography Styles
description: Reference documentation for typography styles in the Minimalist CSS library.
---

## `atoms/typography.css`

This file provides foundational typography styles, including font families, sizes, and line heights for headings, text, and other elements.

### General Elements

#### Headings

- **Description:** Sets a base font family, and line height for headings.
- **Styles:**
  - Other than assigning sizes to individual heading elements, the following classes are also provided:
    - `.heading-display` - Primarily used for large display or hero like text.
    - `.heading-xxl` which matches the default size of the `h1` element.
    - `.heading-xl` which matches the default size of the `h2` element.
    - `.heading-large` which matches the default size of the `h3` element.
    - `.heading-medium` which matches the default size of the `h4` element.
    - `.heading-small-medium` which matches the default size of the `h5` element.
    - `h6` heading element uses the default base font size of `1rem`.

> NOTE: The type scale and as a result the font sizes differ between large viewports and small viewports. See the table below for details.

#### Text Classes and Body

- **Description:** Sets a base font family, and line height for prose like content.
- **Styles:**
  - The following classes are available (please see the table below for details):
    - `.text-medium`
    - `.text-small-medium`
    - `.text-small`
    - `.text-tiny` - Mostly useful for footnotes and small print.
    - Text on the `body` element is set to 100% to respect the base font size set by the user. By default this will be `16px`.

> NOTE: The type scale and as a result the font sizes differ between large viewports and small viewports. See the table below for details.

#### Inline Code

- **Description:** Sets a base font family, and line height for inline code and code blocks.
- **Use Case:** Clearly distinguish the appearance of code snippets from other text content.

### CSS Custom Properties and Defaults

On larger viewports the typography follows a perfect-fourth scale with a base font size of `1rem` (16px). On smaller viewports the typography follows a minor-third scale with a base font size of `1rem` (16px). Both uses a perfect-fourth scale for sizes smaller than `1rem`.

The default font-families uses the user's [system font stack](https://systemfontstack.com/) as the base font family.

#### Headings

`iowan old style, apple garamond, baskerville, times new roman, droid serif, times, source serif pro, serif,apple color emoji, segoe ui emoji, segoe ui symbol`

#### Body

`-apple-system, blinkmacsystemfont, avenir next, avenir, segoe ui, helvetica neue, helvetica, cantarell, ubuntu, roboto, noto, arial, sans-serif`

#### Code

`menlo, consolas, monaco, liberation mono, lucida console, monospace`

| Custom Property                         | Large Viewport | Mobile     |
| --------------------------------------- | -------------- | ---------- |
| `--typography-size-display`             | `5.61rem`      | `3.815rem` |
| `--typography-size-xxl`                 | `4.209rem`     | `3.052rem` |
| `--typography-size-xl`                  | `3.157rem`     | `2.441rem` |
| `--typography-size-large`               | `2.369rem`     | `1.953rem` |
| `--typography-size-medium`              | `1.777rem`     | `1.563rem` |
| `--typography-size-small-medium`        | `1.333rem`     | `1.25rem`  |
| `--typography-size-default`             | `1rem`         | `1rem`     |
| `--typography-size-small`               | `0.75rem`      | `0.75rem`  |
| `--typography-size-tiny`                | `0.563rem`     | `0.563rem` |
| `--typography-document-line-height`     | `1.75`         | `1.75`     |
| `--typography-code-example-line-height` | `1.4`          | `1.4`      |
| `--typography-heading-line-height`      | `1.2`          | `1.2`      |
| `--typography-interactive-line-height`  | `1.1`          | `1.1`      |

### Usage Examples

#### Headings

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Title</h3>
```

#### Text Classes

```html
<p class="text-medium">This is medium-sized text.</p>
<p class="text-small">This is small text.</p>
<p class="tiny-small">This is tiny text.</p>
```

#### Inline Code

```html
<p>Use the <code>ls</code> command to list directory contents.</p>
```
