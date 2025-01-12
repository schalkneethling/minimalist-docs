---
title: Minimalist Button Styles
description: Reference documentation for the buttons in the Minimalist CSS library.
---

## `atoms/buttons.css`

This file contains CSS classes for styling buttons. The classes are designed to provide flexibility for various button styles and use cases.

### General Classes

#### `.button-ghost`

- **Description:** Provides a minimalist button style without a background or border.
- **Use Case:** Ideal for buttons that should blend into the background or rely on surrounding context for visibility.

#### `.button`

- **Description:** A base button style with configurable variants.

### Variants of `.button`

#### `.rounded`

- **Description:** Adds rounded corners to the button.
- **Use Case:** Suitable for creating softer, rounded button styles.

#### `.bordered`

- **Description:** Adds a visible primary border to the button.
- **Use Case:** Highlights the button with a distinct border.

#### `.outline`

- **Description:** Creates an outlined button with a transparent background.
- **Use Case:** Ideal for secondary actions or subtle emphasis.

#### `.solid`

- **Description:** Creates a filled button with a solid background color.
- **Styles:**
  - Adds a transition effect for hover and focus states: `transition: background-color 0.2s ease-in;`
- **Use Case:** Best for primary actions that require clear visual emphasis.

### `.button-icon`

**Description:** Styles buttons with inline icons.

#### Variants of `.button-icon`

##### `.inline-end`

**Description:** Positions the icon at the end of the button text.

### CSS Custom Properties and Defaults

| Custom Property                                | Default Value                |
| ---------------------------------------------- | ---------------------------- |
| `--minimalist-button-border-default`           | `0.125rem solid transparent` |
| `--minimalist-button-padding-block`            | `0.5rem`                     |
| `--minimalist-button-padding-inline`           | `1rem`                       |
| `--minimalist-button-border-radius-default`    | `0.5rem`                     |
| `--minimalist-button-primary-border`           | `0.125rem solid #4e4e4e`     |
| `--minimalist-button-bg-color`                 | `#1b1b1b`                    |
| `--minimalist-button-solid-border-color`       | `#1b1b1b`                    |
| `--minimalist-button-solid-txt-color`          | `#fff`                       |
| `--minimalist-button-hover-bg-color`           | `#343434`                    |
| `--minimalist-button-solid-hover-border-color` | `#343434`                    |
| `--minimalist-button-icon-gap`                 | `0.5rem`                     |
| `--minimalist-icon-default-size`               | `1.5rem`                     |

### Usage Example

```html
<!-- Minimal button -->
<button class="button-ghost">Ghost Button</button>

<!-- Rounded bordered button -->
<button class="button rounded bordered">Bordered Button</button>

<!-- Solid button with icon -->
<button class="button solid button-icon">
  <svg>...</svg>
  Solid Button
</button>

<!-- Icon positioned on the right -->
<button class="button solid button-icon inline-end">
  Icon Button
  <svg>...</svg>
</button>
```
