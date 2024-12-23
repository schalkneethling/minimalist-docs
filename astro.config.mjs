// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Minimalist",
      social: {
        github: "https://github.com/schalkneethling/minimalist",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Welcome to Minimalist",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Overview", slug: "reference" },
            { label: "Getting Started", slug: "getting-started" },
          ],
        },
        {
          label: "Atoms",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Buttons", slug: "reference/atoms/buttons" },
            { label: "Colors", slug: "reference/atoms/colors" },
            { label: "Forms", slug: "reference/atoms/forms" },
            { label: "Media", slug: "reference/atoms/media" },
            { label: "Tables", slug: "reference/atoms/tables" },
            { label: "Text", slug: "reference/atoms/text" },
            { label: "Typography", slug: "reference/atoms/typography" },
          ],
        },
        {
          label: "Utilities",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Utilities", slug: "reference/utils" },
          ],
        },
      ],
    }),
  ],
});
