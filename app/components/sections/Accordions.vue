<template>
    <section class="contentelement_accordions grid-container">
        <h2 v-if="data.title" class="title" ref="titleElement">{{ data.title }}</h2>

        <div class="accordions-container">
            <div v-for="(accordion, index) in data.accordions" class="accordion-wrapper" ref="accordionList">
                <details class="accordion" @click.prevent="toggleAccordion(index)">
                    <summary class="accordion-title accordion-grid">
                        <div class="safari-fix">
                            <h3 v-html="accordion.title" class="inner"></h3>
                            <div class="toggle">
                                <i-toggle :filled="false" />
                            </div>
                        </div>
                    </summary>
                    <section class="accordion-content accordion-grid">
                        <div class="inner">
                            <StrapiBlocksText :nodes="accordion.content" />
                        </div>
                    </section>
                </details>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    interface Accordion {
        title: string;
        content: any;
    }

    interface AccordionsData {
        title: string;
        accordions: Array<Accordion>;
    }

    interface AccordionsSettings {}

    export interface AccordionsProps {
        data: AccordionsData;
        settings?: AccordionsSettings;
    }

    const props = defineProps<AccordionsProps>();

    const titleElement = ref<HTMLElement>();

    const accordionList = ref<HTMLDivElement[]>([]);
    const animationDuration: number = 0.8;
    let ctx: any;

    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {});

        if (titleElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(titleElement);
        }
    });

    onUnmounted(() => {
        ctx?.revert();
    });

    const toggleAccordion = (index: number) => {
        accordionList.value?.forEach((accordionWrapper: HTMLDivElement, i) => {
            const accordionItem = accordionWrapper.querySelector('.accordion') as HTMLDetailsElement;
            if (i === index && !accordionItem.open) {
                openAccordion(accordionWrapper);
            } else if (accordionItem.open) {
                closeAccordion(accordionWrapper);
            }
        });
    };

    const openAccordion = (accordionWrapper: HTMLDivElement) => {
        const accordionItem = accordionWrapper.querySelector('.accordion') as HTMLDetailsElement;
        const accordionContent = accordionItem.querySelector('.accordion-content') as HTMLElement;
        const safariFix = accordionWrapper.querySelector('.safari-fix') as HTMLElement;
        if (!accordionContent || !safariFix) return;

        gsap.fromTo(
            accordionContent,
            { height: 0 },
            {
                height: accordionContent.scrollHeight,
                duration: animationDuration,
                onStart: () => {
                    accordionItem.setAttribute('open', 'true');
                    accordionWrapper.classList.add('open');
                    accordionContent.style.height = '0';
                },
                onComplete: () => {
                    accordionContent.style.height = 'auto';
                    ScrollTrigger.refresh();
                },
            },
        );
    };

    const closeAccordion = (accordionWrapper: HTMLDivElement) => {
        const accordionItem = accordionWrapper.querySelector('.accordion') as HTMLDetailsElement;
        const accordionContent = accordionItem.querySelector('.accordion-content') as HTMLElement;
        const safariFix = accordionWrapper.querySelector('.safari-fix') as HTMLElement;
        if (!accordionContent || !safariFix) return;

        gsap.to(accordionContent, {
            height: 0,
            duration: animationDuration,
            onStart: () => {
                accordionWrapper.classList.remove('open');
            },
            onComplete: () => {
                accordionItem.removeAttribute('open');
                ScrollTrigger.refresh();
            },
        });
    };
</script>

<style lang="scss" scoped>
    .contentelement_accordions {
        margin-bottom: 15rem;
    }

    .title {
        @include col-start(3);
        @include col(6);

        & {
            margin-bottom: 7.5rem;
        }
    }

    details summary::-webkit-details-marker {
        display: none;
    }

    details > summary {
        list-style: none;
    }

    .accordions-container {
        @include col-start(3);
        @include col(11);
    }

    .accordion-wrapper {
        .accordion {
            border-top: $colorFontLight solid 0.3rem;
        }
    }

    .accordion {
        padding: 3.5rem 0;

        width: 100%;
    }

    .accordion-grid {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-column-gap: 4.5rem;
    }

    .accordion-title {
        cursor: pointer;

        .safari-fix {
            @include col-start(4);
            @include col(8);

            & {
                display: flex;
                justify-content: space-between;
            }

            .toggle {
                display: flex;
                align-items: center;
            }

            svg {
                width: 6.5rem;
                height: 2.7rem;

                transition: transform 500ms;
            }
        }
    }

    .accordion-wrapper.open {
        .accordion > .accordion-title > .safari-fix > .toggle > svg {
            transform: rotate(180deg);
        }
        .accordion > .accordion-title > .safari-fix {
            @include col-start(1);
            @include col(12);
        }
    }

    .accordion-content {
        overflow: hidden;

        .inner {
            @include col-start(4);
            @include col(8);

            & {
                padding: 3rem 13.7rem 1.5rem 0;
            }

            :deep(p:not(:first-of-type)) {
                margin-top: 3rem;
            }
        }
    }

    .accordion-wrapper:last-of-type {
        .accordion {
            border-bottom: $colorFontLight solid 0.3rem;
        }
    }

    @media (max-width: 1023px) {
        .contentelement_accordions {
            margin-bottom: 7.5rem;
        }

        .accordion {
            padding: 2rem 0;
        }

        .accordion-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-column-gap: 1rem;
        }

        .title {
            @include col-start(3);
            @include col(11);

            & {
                margin-bottom: 4.5rem;
            }
        }

        .accordions-container {
            @include col-start(2);
            @include col(12);
        }

        .accordion-title {
            .safari-fix {
                @include col-start(1);
                @include col(12);

                svg {
                    width: 2rem;
                    height: auto;
                }
            }
        }

        .accordion-content {
            .inner {
                @include col-start(1);
                @include col(12);

                & {
                    padding: 2.5rem 0 2.5rem 0;
                }
            }
        }
    }
</style>
