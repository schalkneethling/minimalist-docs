---
title: Minimalist Form Styles
description: Reference documentation for form related styles in the Minimalist CSS library.
---

## `atoms/forms.css`

This file contains CSS classes for styling form elements, focusing on consistent spacing, borders, and user interaction states.

### General Elements

#### `fieldset`

- **Description:** Sets a default block start and end margin for all `fieldset` elements.

### Inputs, Selects, and Textareas

#### `input`, `select:not(.custom-select)`, `textarea`

- **Description:** Sets the default border and padding for basic form elements.
- **Use Case:** Ensures a consistent look and feel for form controls.

#### `input:user-valid`, `textarea:user-valid`

- **Description:** Applies styles for valid input states.
- **Use Case:** Provides visual feedback for valid user input.

#### `input:user-invalid`, `textarea:user-invalid`

- **Description:** Applies styles for invalid input states.
- **Use Case:** Indicates incorrect or incomplete user input.

### Interaction States

#### Focus and Validation Styling

- **Combined Valid and Invalid States:**
  - Targets focus and validation states with `outline-offset: var(--size-2);`
  - Applies to:
    - `input:user-valid`
    - `input:user-invalid`
    - `input:focus:invalid:not(:user-invalid)`
    - `textarea:user-valid`
    - `textarea:user-invalid`
    - `textarea:focus:invalid:not(:user-invalid)`

#### `input:focus:invalid:not(:user-invalid)`, `textarea:focus:invalid:not(:user-invalid)`

- **Description:** Ensures fields are not styles as invalid before having received user input.

### CSS Custom Properties and Defaults

| Custom Property                              | Default Value            |
| -------------------------------------------- | ------------------------ |
| `--minimalist-fieldset-margin-block`         | `0.75rem`                |
| `--minimalist-form-field-gap`                | `0.75rem`                |
| `--minimalist-form-field-margin-block-end`   | `0.75rem`                |
| `--minimalist-input-border`                  | `0.125rem solid #4e4e4e` |
| `--minimalist-input-padding`                 | `0.375rem`               |
| `--minimalist-input-border-valid-color`      | `#007d50`                |
| `--minimalist-input-border-valid-outline`    | `#00bc7a`                |
| `--minimalist-input-border-critical-color`   | `#db000e`                |
| `--minimalist-input-border-critical-outline` | `#ff7d7e`                |
| `--minimalist-input-border-warning-color`    | `#978c00`                |
| `--minimalist-input-border-warning-outline`  | `#b4a700`                |

### Usage Example

```html
<!-- Fieldset with margin -->
<form name="contact" action="/" method="post">
  <fieldset>
    <legend>Contact us</legend>

    <div class="form-field">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" required />
    </div>

    <div class="form-field">
      <label for="subject">Subject</label>
      <input id="subject" name="subject" type="text" required minlength="10" />
    </div>

    <div class="form-field">
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
  </fieldset>
  <button class="button button-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"
      />
    </svg>
    <span>Email us</span>
  </button>
</form>
```
