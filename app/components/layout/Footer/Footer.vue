<template>
    <footer class="grid-container">
        <div class="contact">
            <a href="tel:+39 3382 698 477" class="link">+39 3382 698 477</a>
            <a href="mailto:sigrid.thaler@gmail.com" class="link">sigrid.thaler@gmail.com</a>
        </div>
        <div class="text1">
            <p>Natürliche Entscheidungen.</p>
            <p>Gesundes Leben.</p>
        </div>
        <div class="text2">Kräuterakademie Südtirol</div>
        <FooterSocials />
        <FooterLinks />
        <FooterPartner />
    </footer>
</template>

<script lang="ts" setup>
export interface FooterProps {}

const props = defineProps<FooterProps>();
</script>

<style lang="scss" scoped>
footer {
    @include font-17-29-5-L-U();

    row-gap: 3rem;

    & {
        padding-top: 6rem;
    }
}

.contact {
    @include col-start(5);
    @include col(6);
    @include font-50-63-1-BL();
    @include fontFamilyHeading();

    & {
        padding-bottom: 4rem;
    }

    a {
        width: 100%;

        text-align: center;
        text-decoration: none;
        text-transform: lowercase;

        color: $colorFontLight;

        &:hover {
            color: $colorCta;
            text-decoration: underline;
        }
    }
}

.text1 {
    @include col-start(11);
    @include col(3);

    p {
        text-align: right;
    }
}

.text2 {
    @include col-start(2);
    @include col(3);

    & {
        height: 100%;

        display: flex;
        align-items: center;
    }
}

@media (max-width: 1023px) {
    footer {
        row-gap: 0;
    }

    .contact {
        @include col-start(2);
        @include col(12);
        @include font-50-63-1-B();

        & {
            padding-bottom: 4.5rem;
        }

        a {
            text-align: left;
        }
    }

    .text1 {
        @include col-start(2);
        @include col(12);

        & {
            padding-bottom: 1.5rem;
        }

        p {
            text-align: left;
        }
    }

    .text2 {
        @include col-start(2);
        @include col(12);

        & {
            padding-bottom: 4.5rem;
        }
    }
}
</style>
