---
title: Minimalist Text Level Styles
description: Reference documentation for text level styles in the Minimalist CSS library.
---

## `atoms/text.css`

This file provides styles for various text-related HTML elements, enhancing readability, spacing, and interaction.

### General Elements

#### `blockquote`

- **Description:** Styles blockquote elements for emphasis and readability.
- **Styles:**
  - Adds a left border
  - Italicizes text
  - Adds padding
- **Nested Styles:**
  - Adds a default margin to all `p` elements within the blockquote except the last `p` from which it removes the bottom margin.
- **Use Case:** Highlights quoted text in a visually distinct manner.

#### `pre`

- **Description:** Styles preformatted text blocks.
- **Styles:**
  - Adds padding

#### Headings with Inline Code

- **Description:** Ensures inline code in headings maintains consistent font size.
- **Styles:**
  - Inherits font size from heading
- **Use Case:** Keeps inline code visually consistent within headings.

#### `a` (Links)

- **Description:** Styles anchor elements for clarity and accessibility.
- **Styles:**
  - Sets text color
  - Adjusts underline thickness
  - Visited state:
    - Changes text color
  - Hover and focus states:
    - Adjusts underline offset
  - Active state:
    - Removes underline
  - Focus-visible state:
    - Adds a focus indicator
- **Use Case:** Ensures links are accessible and provide clear visual feedback.

#### `ul`, `ol`

- **Description:** Styles unordered and ordered lists for spacing and layout.
- **Styles:**
  - Configures list layout as grid
  - Adds spacing between items
- **Use Case:** Creates evenly spaced and well-aligned list items.

### CSS Custom Properties and Defaults

| Custom Property                                  | Default Value                   |
| ------------------------------------------------ | ------------------------------- |
| `--minimalist-blockquote-border`                 | `4px solid #ccc`                |
| `--minimalist-blockquote-padding`                | `1rem`                          |
| `--minimalist-blockquote-paragraph-block-end`    | `0.5rem`                        |
| `--minimalist-pre-padding`                       | `1rem`                          |
| `--minimalist-link-color`                        | `#007bff`                       |
| `--minimalist-link-color-visited`                | `#551a8b`                       |
| `--minimalist-link-text-decoration-offset`       | `0.2em`                         |
| `--minimalist-link-focus-visible-box-shadow`     | `0 0 0 3px rgba(0,123,255,0.5)` |
| `--minimalist-link-focus-visible-outline`        | `1px solid #007bff`             |
| `--minimalist-link-focus-visible-outline-offset` | `2px`                           |
| `--minimalist-list-items-gap`                    | `0.5rem`                        |

### Usage Example

#### Blockquote

```html
<blockquote>
  <p>This is a quoted text.</p>
  <p>It can span multiple paragraphs.</p>
</blockquote>
```

#### Preformatted Text

```html
<pre>
  const example = "This is a code block.";
</pre>
```

#### Links

```html
<a href="#">This is a link</a>
```

#### Lists

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```
