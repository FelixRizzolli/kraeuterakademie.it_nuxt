# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-29

### Added

- Added graphql-codegen for type-safe GraphQL queries and fragments
- Added lint script with oxlint for code quality checks
- Added new TitleElement component
- Added LexicalRenderer for rich text rendering with Lexical editor content

### Changed

- **BREAKING**: Migrated from Strapi to Payload CMS as the backend
- Updated API integration to use Payload CMS endpoints
- Environment variable `STRAPI_API_URL` replaced with `PAYLOAD_API_URL`
- updated types across components
- enhanced SEO metadata handling
- reporganized graphql fragments for better maintainability

### Fixed

- fixed some issues by removing effects from footer components

## [0.6.4] - 2025-12-16

### Changed

- updated dependencies
    - @nuxtjs/device 3.2.4 → 4.0.0
    - @nuxtjs/seo 3.2.2 → 3.3.0
    - gsap 3.13.0 → 3.14.2
    - nuxt 4.2.1 → 4.2.2
    - prettier 3.6.2 → 3.7.4
    - vue 3.5.24 → 3.5.25
    - vue-router 4.6.3 → 4.6.4
- updated devDependencies
    - @vitest/browser 4.0.10 → 4.0.15
    - @vitest/browser-playwright 4.0.10 → 4.0.15
    - @vitest/coverage-v8 4.0.10 → 4.0.15
    - playwright 1.56.1 → 1.57.0
    - sass 1.94.1 → 1.97.0
    - vitest 4.0.10 → 4.0.15

## [0.6.3] - 2025-11-18

### Fixed

- fixed migration issue from Vitest 3 to Vitest 4

### Changed

- updated devDependencies
    - @chromatic-com/storybook 4.1.2 → 4.1.3
    - @vitest/browser 4.0.8 → 4.0.10
    - @vitest/coverage-v8 4.0.8 → 4.0.10
    - sass 1.93.3 → 1.94.1
    - vitest 4.0.8 → 4.0.10
- added devDependencies
    - @vitest/browser-playwright@4.0.10

## [0.6.2] - 2025-11-12

### Changed

- Updated Dockerfile to use the Node 24 base image (switched from node:22-alpine to node:24-alpine).
- Added a repository_dispatch trigger to the build-and-push GitHub Actions workflow so the release workflow can programmatically trigger Docker image builds.
- Ensure Docker images pushed by the build-and-push workflow are tagged with the release version (added explicit version tagging to image pushes).

## [0.6.1] - 2025-11-11

### Fixed

- Added linux/arm64 and linux/amd64 platforms to the Docker build and push GitHub Actions workflows for Nuxt and Storybook
- Added node-compile-cache to .prettierignore
- use RELEASE_TOKEN instead of GITHUB_TOKEN for the auto-release-action to trigger subsequent workflows

## [0.6.0] - 2025-11-09

### Added

- GitHub Actions workflow for building and pushing Docker images (Nuxt and Storybook) to GitHub Container Registry
- GitHub Actions workflow for automatic release creation when version changes in package.json - FelixRizzolli/auto-release-action
- GitHub Actions step "Update CHANGELOG" (in .github/workflows/release.yml) that automatically updates CHANGELOG.md with dependency changes

### Changed

- Rewrote and reformatted the project changelog to follow the "Keep a Changelog" format.
    - Standardized section headings (Added, Changed, Deprecated, Removed, Fixed, Security).
    - Filled in missing dates and details for past releases where available.

- updated dependencies
    - @nuxt/image 1.11.0 → 2.0.0
    - @nuxtjs/seo 3.1.0 → 3.2.2
    - nuxt 4.0.3 → 4.2.1
    - nuxt-strapi-blocks-renderer 1.1.0 → 1.1.1
    - pinia 3.0.3 → 3.0.4
    - vue 3.5.20 → 3.5.24
    - vue-router 4.5.1 → 4.6.3
- updated devDependencies
    - @chromatic-com/storybook 4.1.1 → 4.1.2
    - @storybook/addon-docs 9.1.3 → 9.1.16
    - @storybook/addon-vitest 9.1.3 → 9.1.16
    - @storybook/vue3 9.1.3 → 9.1.16
    - @vitest/browser 3.2.4 → 4.0.8
    - @vitest/coverage-v8 3.2.4 → 4.0.8
    - graphql 16.11.0 → 16.12.0
    - playwright 1.55.0 → 1.56.1
    - sass 1.91.0 → 1.93.3
    - storybook 9.1.3 → 9.1.16
    - vitest 3.2.4 → 4.0.8

## [0.5.0] - 2025-08-29

### Changed

- nuxt 3.17.5 → 4.0.3
- @nuxt/image 1.10.0 → 1.11.0
- @nuxtjs/seo 3.0.3 → 3.1.0
- nuxt-svgo 4.2.1 → 4.2.6
- vue 3.5.16 → 3.5.20
- @vitest/\* 3.1.4 → 3.2.4
- sass 1.89.1 → 1.91
- @nuxtjs/strapi 2.0.0 → 2.1.1
- nuxt-strapi-blocks-renderer 1.0.18 → 1.1.0
- prettier 3.5.3 → 3.6.2
- vite-plugin-devtools-json 0.1.0 → 1.0.0
- @nuxtjs/storybook 8.3.5 → 9.0.1
- @storybook/\* 8.6.14 → 9.1.3
- playwright 1.52.0 → 1.55.0

## [0.4.0] - 2025-06-08

### Added

- added BookList component
- added SwiperSimple component
- added SwiperLarge component
- added HighlightedLinks component
- added SectionElement component
- added TextBlocks
- add CHANGELOG.md file

### Changed

- enhanced page loading
- Footer: adjust style
- ImageText: adjust props
- HeroLarge: renamed HeroBig to HeroLarge
- CourseList: adjust style and add open/close animation
- implemented global state management with Pinia
- updated storybook stories of: Accordions, AnimatedText, ImageText, Infos, TextElement, HeroLarge, HeroSmall, MoodPicture, CourseList
- added version field to package.json
- replaced com.chrome.devtools.json with vite-plugin-devtools-json
- removed some console.log
- @nuxtjs/storybook 8.3.3 → 8.3.5
- vue 3.5.14 → 3.5.16
- nuxt 3.17.4 → 3.17.5

## [0.3.0] - 2025-05-25

### Added

- add strapi and adjust pages and components for strapi
- add nuxt/seo, use the useSeoMeta hook for each page
- add .gitattributes file

### Changed

- changed docker port from 80 to 3000
- fix all scss deprecation warnings
- update prettier config and format code
- upgrade nuxt-svgo from 4.1.2 to 4.2.1
- upgrade nuxt from 3.17.3 to 3.17.4
- upgrade vitest from 3.1.3 to 3.1.4
- upgrade @vitest/browser from 3.1.3 to 3.1.4
- upgrade @vitest/coverage-v8 from 3.1.3 to 3.1.4
- upgrade sass from 1.88.0 to 1.89.0
- upgrade storybook from 8.6.12 to 8.6.14

## [0.2.0] - 2025-05-15

### Added

- setup storybook for the project
- add stories for existing components

### Changed

- Infos: adjust link button style
- ImageText: add title
- update .prettierignore file

## [0.1.0] - 2025-05-15

### Added

- use opacity and scale animations for the components
- added Accordions
- added AnimatedText
- added CourseList
- added HeroBig
- added HeroSmall
- added Infos
- added MoodPicture
- added TextElement
- add scss
- add prettier

### Changed

- use the nuxt 4 directory structure
