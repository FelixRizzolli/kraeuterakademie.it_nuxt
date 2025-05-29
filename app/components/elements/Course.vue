<template>
    <section class="course" ref="courseElement">
        <h3 class="title">{{ course.title }}</h3>
        <span v-if="sortedDates" class="key-infos"
            >{{ course.place }} | {{ formatDate(sortedDates[0].date) }} -
            {{ formatDate(sortedDates[sortedDates.length - 1].date) }}</span
        >
        <div class="description">
            <StrapiBlocksText :nodes="course.description" />
        </div>
        <a v-if="sortedDates" class="open-close" @click="toggleDates">{{ toggleDatesTextBlock }}</a>
        <div class="dates" ref="datesContainer">
            <p class="date" v-for="(date, index) in sortedDates" :key="index">
                {{ formatDate2(date.date) }}
            </p>
        </div>
        <NuxtLink v-if="course.link" class="link-button" :to="course.link?.href">{{ course.link?.text }}</NuxtLink>
    </section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    const { isMobile } = useDevice();

    interface CourseDate {
        id: number;
        date: string;
    }

    export interface Course {
        title: string;
        place: string;
        description: string;
        dates: Array<CourseDate>;
        link?: {
            href: string;
            text: string;
        };
    }

    export interface CourseProps {
        course: Course;
    }

    const props = defineProps<CourseProps>();

    const sortedDates = computed(() => {
        if (!props.course.dates || props.course.dates.length === 0) return null;
        return props.course.dates.sort(
            (a: CourseDate, b: CourseDate) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
    });

    const courseElement = ref<HTMLElement>();

    const datesContainer = ref<HTMLDivElement | null>(null);
    const showDates = ref(false);
    const toggleDates = () => {
        if (showDates.value) {
            closeDatesContainer();
        } else {
            openDatesContainer();
        }
    };

    const openDatesContainer = () => {
        showDates.value = true;

        // Temporarily set the target styles to measure the full height
        gsap.set(datesContainer.value, {
            height: 'auto',
            paddingTop: '2.5rem',
            visibility: 'hidden',
        });
        const fullHeight = datesContainer.value?.offsetHeight || 0;
        gsap.set(datesContainer.value, {
            height: 0,
            paddingTop: 0,
            visibility: 'visible',
        });

        // Animate to the full height + padding
        gsap.fromTo(
            datesContainer.value,
            {
                height: 0,
                paddingTop: 0,
            },
            {
                height: fullHeight,
                paddingTop: '2.5rem',
                duration: 0.8,
                ease: 'power2.out',
                autoRound: false,
                onComplete: () => {
                    gsap.set(datesContainer.value, { height: 'auto' });
                    ScrollTrigger.refresh();
                },
            },
        );
    };

    const closeDatesContainer = () => {
        showDates.value = false;

        // Animate to height 0 and padding 0
        gsap.to(datesContainer.value, {
            height: 0,
            paddingTop: 0,
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => {
                ScrollTrigger.refresh();
            },
        });
    };

    // Function to format ISO date YYYY-MM-DD to DD.MM.YYYY
    const formatDate = (isoDate: string): string => {
        const date = new Date(isoDate);
        return new Intl.DateTimeFormat('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(date);
    };

    // Function to format ISO date YYYY-MM-DD to DD.MM.YYYY WD with weekday
    const formatDate2 = (isoDate: string): string => {
        const date = new Date(isoDate);
        const formattedDate = new Intl.DateTimeFormat('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(date);
        const weekday = new Intl.DateTimeFormat('de-DE', {
            weekday: 'short',
        }).format(date);
        return `${formattedDate} ${weekday}`;
    };

    const openDatesTextBlock = ref<string | undefined | null>(null);
    const closedDatesTextBlock = ref<string | undefined | null>(null);
    const toggleDatesTextBlock = computed(() => {
        return showDates.value ? openDatesTextBlock.value : closedDatesTextBlock.value;
    });
    onMounted(() => {
        openDatesTextBlock.value = useTextBlock('link-dates-open');
        closedDatesTextBlock.value = useTextBlock('link-dates-closed');

        if (courseElement.value) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(courseElement);
        }
    });
</script>

<style lang="scss" scoped>
    .course {
        display: grid;
        height: fit-content;
    }

    .title {
        order: 2;
        margin-top: 4.5rem;
    }

    .key-infos {
        @include font-19-30-5-L();

        & {
            order: 1;

            text-transform: uppercase;
        }
    }

    .description {
        order: 3;
        margin-top: 2.5rem;
    }

    .dates {
        order: 4;
        padding-top: 0px;

        height: 0px;
        overflow: hidden;

        display: grid;
        grid-template-columns: 1fr 1fr;

        text-transform: uppercase;
    }

    .open-close {
        order: 5;
        margin-top: 2.5rem;

        text-align: right;
        text-decoration: underline;

        &:hover {
            cursor: pointer;
            color: $colorCta;
        }
    }

    .link-button {
        order: 6;
        margin-top: 4.5rem;
    }

    @media (max-width: 1023px) {
        .title {
            margin-top: 2.5rem;
        }

        .description {
            margin-top: 1rem;
        }

        .open-close {
            margin-top: 1.5rem;
        }

        .link-button {
            margin-top: 3rem;
        }
    }
</style>
