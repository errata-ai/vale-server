export default {
  "title": "errata.ai",
  "tagline": "Innovative tools for collaborative writing",
  "url": "https://nervous-almeida-4ca728.netlify.app",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "errata-ai",
  "projectName": "vale-server",
  "plugins": [],
  "scripts": [],
  "stylesheets": [],
  "themeConfig": {
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#fff",
          "backgroundColor": "#1e1e1e"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "rgb(161, 155, 143)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "rgb(33, 175, 144)"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "rgb(102, 181, 246)"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "rgb(243, 153, 97)"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "rgb(187, 151, 231)"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "rgb(243, 153, 97)"
            }
          }
        ]
      },
      "additionalLanguages": [
        "ini"
      ]
    },
    "algolia": {
      "apiKey": "12bdf8cd642ab554d424ff89eed88ce9",
      "indexName": "errata_ai",
      "appId": "BH4D9OD16A"
    },
    "navbar": {
      "hideOnScroll": false,
      "title": "errata.ai | Docs",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "label": "Products",
          "position": "left",
          "items": [
            {
              "label": "Vale",
              "to": "/vale/about",
              "position": "left"
            },
            {
              "label": "Vale Server",
              "to": "/vale-server/install",
              "position": "left"
            },
            {
              "label": "Static School",
              "href": "https://staticschool.com/",
              "position": "left"
            }
          ]
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/errata-ai",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ]
    },
    "footer": {
      "links": [
        {
          "title": "About",
          "items": [
            {
              "label": "Home",
              "to": "https://errata.ai"
            },
            {
              "label": "Blog",
              "to": "Blog"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/errata-ai"
            },
            {
              "label": "Slack",
              "href": "https://writethedocs.slack.com/archives/CBWQQ5E57"
            },
            {
              "label": "Open Collective",
              "href": "https://opencollective.com/vale"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Become a Sponsor",
              "to": "https://opencollective.com/vale"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 errata.ai",
      "style": "light"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "/Users/jdkato/Documents/Code/websites/vale-server/website/sidebars.js",
          "editUrl": "https://github.com/errata-ai/vale-server/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/errata-ai/vale-server/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/jdkato/Documents/Code/websites/vale-server/website/src/css/custom.css"
        }
      }
    ]
  ],
  "onBrokenLinks": "throw",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": []
};