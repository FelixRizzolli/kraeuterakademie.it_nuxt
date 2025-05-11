<template>
    <section class="contentelement_accordions grid-container">
        <h2 class="title">{{ title }}</h2>

        <div class="accordions-container">
            <div v-for="(accordion, index) in accordions" class="accordion-wrapper" ref="accordionList">
                <details class="accordion" @click.prevent="toggleAccordion(index)">
                    <summary class="accordion-title">
                        <div class="safari-fix">
                            <h4 v-html="accordion.title" class="inner"></h4>
                            <div class="toggle">
                                <i-toggle :filled="false" />
                            </div>
                        </div>
                    </summary>
                    <section class="accordion-content">
                        <div v-html="accordion.content" class="inner"></div>
                    </section>
                </details>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Accordion {
    title: string;
    content: string;
}

export interface AccordionsProps {
    title: string;
    accordions: Array<Accordion>;
}

const props = defineProps<AccordionsProps>();

const accordionList = ref<HTMLDivElement[]>([]);
const animationDuration: number = 0.8;
let ctx: any;

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {});
});

onUnmounted(() => {
    ctx?.revert();
});

const toggleAccordion = (index: number) => {
    accordionList.value?.forEach((accordionWrapper: HTMLDivElement, i) => {
        const accordionItem = accordionWrapper.querySelector(".accordion") as HTMLDetailsElement;
        if (i === index && !accordionItem.open) {
            openAccordion(accordionWrapper);
        } else if (accordionItem.open) {
            closeAccordion(accordionWrapper);
        }
    });
};

const openAccordion = (accordionWrapper: HTMLDivElement) => {
    const accordionItem = accordionWrapper.querySelector(".accordion") as HTMLDetailsElement;
    const accordionContent = accordionItem.querySelector(".accordion-content") as HTMLElement;
    const safariFix = accordionWrapper.querySelector(".safari-fix") as HTMLElement;
    if (!accordionContent || !safariFix) return;

    gsap.fromTo(
        accordionContent,
        { height: 0 },
        {
            height: accordionContent.scrollHeight,
            duration: animationDuration,
            onStart: () => {
                accordionItem.setAttribute("open", "true");
                accordionWrapper.classList.add("open");
                accordionContent.style.height = "0";
            },
            onComplete: () => {
                accordionContent.style.height = "auto";
                ScrollTrigger.refresh();
            },
        }
    );
};

const closeAccordion = (accordionWrapper: HTMLDivElement) => {
    const accordionItem = accordionWrapper.querySelector(".accordion") as HTMLDetailsElement;
    const accordionContent = accordionItem.querySelector(".accordion-content") as HTMLElement;
    const safariFix = accordionWrapper.querySelector(".safari-fix") as HTMLElement;
    if (!accordionContent || !safariFix) return;

    gsap.to(accordionContent, {
        height: 0,
        duration: animationDuration,
        onStart: () => {
            accordionWrapper.classList.remove("open");
        },
        onComplete: () => {
            accordionItem.removeAttribute("open");
            ScrollTrigger.refresh();
        },
    });
};
</script>

<style lang="scss" scoped>
.contentelement_accordions {
    padding: 15rem 0;
}

.title {
    margin-bottom: 7.5rem;

    @include col-start(3);
    @include col(11);

    @include font-70-72-1-BL();
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

.accordion-title {
    cursor: pointer;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 4.5rem;

    .safari-fix {
        @include col-start(4);
        @include col(8);

        display: flex;
        justify-content: space-between;

        .inner {
            @include font-30-30-5-BL();
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

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 4.5rem;

    .inner {
        @include col-start(4);
        @include col(8);

        padding: 6rem 13.7rem 1.5rem 0;
    }
}

.accordion-wrapper:last-of-type {
    .accordion {
        border-bottom: $colorFontLight solid 0.3rem;
    }
}
</style>
