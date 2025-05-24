export const CONTENT_PAGE_QUERY = `
    query Pages($filters: PageFiltersInput) {
        pages: pages(filters: $filters) {
            seo {
                id
                metaTitle
                metaDescription
                sharedImage {
                    alt
                    media {
                        alternativeText
                        url
                    }
                }
                keywords
                preventIndexing
            }
            components {
                __typename
                ... on ComponentContentHeroSmall {
                    id
                    title
                    link {
                        id
                        href
                        text
                    }
                    image {
                        alternativeText
                        url
                    }
                }
                ... on ComponentContentAnimatedText {
                    id
                    text
                }
                ... on Error {
                    code
                    message
                }
            }
        }
    }
`;
