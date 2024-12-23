---
title: Minimalist Media Elements Styles
description: Reference documentation for media related element styles in the Minimalist CSS library.
---

## `atoms/media.css`

This file provides styles for media-related HTML elements, with a focus on enhancing the layout and appearance of `figure` and its child elements.

### General Elements

#### `figure`

- **Description:** Styles the `figure` element for consistent layout and spacing.
- **Styles:**
  - Adds a border
  - Configures layout as a grid
  - Removes default margins
  - Adds vertical margin
  - Restricts maximum width
- **Nested Styles:**
  - `img`:
    - Makes images responsive:
  - `figcaption`:
    - Configures background color
    - Configures text color
    - Adds padding
- **Use Case:** Creates a clean and visually appealing layout for images and their captions.

#### `figure.overlap`

- **Description:** Applies overlapping styles to `figure`, allowing `figcaption` to overlap the image.
- **Styles:**
  - Configures grid template
  - Ensures `img` and `figcaption` occupy the same grid area
  - `figcaption` specific styles
    - Sets background color
    - Sets text color
    - Aligns the caption to the bottom
- **Use Case:** Provides a visually dynamic layout where captions are overlaid on images.

### CSS Custom Properties and Defaults

| Custom Property                                    | Default Value           |
| -------------------------------------------------- | ----------------------- |
| `--minimalist-figure-border`                       | `0.25rem solid #343434` |
| `--minimalist-figure-margin-block`                 | `1rem`                  |
| `--minimalist-figcaption-background-color`         | `#d5d5d5`               |
| `--minimalist-figcaption-foreground-color`         | `#343434`               |
| `--minimalist-figcaption-spacing`                  | `0.5rem`                |
| `--minimalist-figcaption-overlap-background-color` | `rgba(255 255 255 0.7)` |
| `--minimalist-figcaption-overlap-foreground-color` | `#343434`               |

### Usage Example

#### Basic Figure

```html
<figure>
  <img src="example.jpg" alt="Example Image" />
  <figcaption>This is an example caption.</figcaption>
</figure>
```

#### Overlapping Figure

```html
<figure class="overlap">
  <img src="example.jpg" alt="Example Image" />
  <figcaption>This is an overlapping caption.</figcaption>
</figure>
```
