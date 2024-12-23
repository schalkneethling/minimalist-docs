---
title: Minimalist Table Styles
description: Reference documentation for table styles in the Minimalist CSS library.
---

## `atoms/tables.css`

This file provides CSS styles for HTML table elements, focusing on layout, spacing, and alternate row coloring to improve readability and visual hierarchy.

### General Elements

#### `table`

- **Description:** Styles the main table element.
- **Styles:**
  - Adds a border
  - Sets width

#### `caption`

- **Description:** Styles the table caption for alignment and spacing.
- **Styles:**
  - Configures font size
  - Adds bottom margin
  - Aligns text

### Table Sections

#### `thead`

- **Description:** Styles the table header row.
- **Styles:**
  - Configures background color
  - Configures text color
  - Applies padding to header cells
  - Aligns header text
- **Use Case:** Highlights the table header to distinguish it from the table body.

#### `tbody`

- **Description:** Styles the table body and its rows.
- **Styles:**
  - Applies bottom border to cells
  - Configures padding for cells
  - Alternates row colors
  - Removes bottom border for the last row
- **Use Case:** Ensures table rows are easy to differentiate and visually organized.

#### `tfoot`

- **Description:** Styles the table footer for emphasis.
- **Styles:**
  - Configures background color
  - Configures text color
  - Adds vertical and horizontal padding to footer cells
- **Use Case:** Highlights summary or footer rows to provide a clear visual distinction from the rest of the table.

### CSS Custom Properties and Defaults

| Custom Property                               | Default Value                            |
| --------------------------------------------- | ---------------------------------------- |
| `--minimalist-table-border`                   | `0.25rem solid #343434`                  |
| `--minimalist-table-width`                    | `100%`                                   |
| `--minimalist-table-caption-font-size`        | `1.563rem` (mobile) `1.777rem` (desktop) |
| `--minimalist-table-caption-margin-block-end` | `0.75rem`                                |
| `--minimalist-table-caption-align`            | `start`                                  |
| `--minimalist-table-thead-bg-color`           | `#343434`                                |
| `--minimalist-table-thead-color`              | `#f4f4f4`                                |
| `--minimalist-table-thead-align`              | `start`                                  |
| `--minimalist-table-cell-border`              | `0.0625rem solid #343434`                |
| `--minimalist-table-cell-padding`             | `0.5rem`                                 |
| `--minimalist-table-tbody-bg-odd`             | `#f4f4f4`                                |
| `--minimalist-table-tbody-bg-even`            | `#fff`                                   |
| `--minimalist-table-tfoot-bg-color`           | `#d5d5d5`                                |
| `--minimalist-table-tfoot-color`              | `#343434`                                |
| `--minimalist-table-tfoot-padding-block`      | `1rem`                                   |
| `--minimalist-table-tfoot-padding-inline`     | `0.5rem`                                 |

### Usage Example

#### Basic Table

```html
<table>
  <caption>
    Sample Table
  </caption>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Footer</td>
    </tr>
  </tfoot>
</table>
```
