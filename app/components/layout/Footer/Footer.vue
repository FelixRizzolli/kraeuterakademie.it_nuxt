<template>
    <footer class="grid-container">
        <address class="address">
            <p class="name">Sigrid Thaler Rizzolli</p>
            <p class="street">Weingütl Nr. 6</p>
            <p class="place">39040 Montan, Italien</p>
        </address>
        <div class="contact">
            <a href="tel:+39 3382 698 477" class="link">+39 3382 698 477</a>
            <a href="mailto:sigrid.thaler@gmail.com" class="link">sigrid.thaler@gmail.com</a>
        </div>
        <div class="text1">
            <p>Natürliche Entscheidungen.</p>
            <p>Gesundes Leben.</p>
        </div>
        <div class="text2">Kräuterakademie Südtirol</div>
        <div class="socials">
            <NuxtLink class="social" to="/impressum">
                <img src="/images/socials/facebook.png" alt="Facebook" />
                <i-facebook />
            </NuxtLink>
            <NuxtLink class="social" to="/impressum">
                <img src="/images/socials/instagram.png" alt="Instagram" />
                <i-instagram />
            </NuxtLink>
        </div>
        <nav class="footer-links">
            <NuxtLink class="link" to="/impressum">Impressum</NuxtLink>
            <span class="sep">.</span>
            <NuxtLink class="link" to="/privacy">Privacy</NuxtLink>
            <span class="sep">.</span>
            <NuxtLink class="link" to="/cookies">Cookies</NuxtLink>
        </nav>
        <div class="partner">
            <NuxtLink to="https://fnl-kraeuterakademie.at/">
                <img src="/images/partner/fnl_akademie_logo.png" alt="FML Kräuterakademie nach Ignaz Schlifni" />
            </NuxtLink>
            <NuxtLink to="https://fnl.at/">
                <img src="/images/partner/fnl_experte_logo.png" alt="FML Kräuterexperte*in nach Ignaz Schlifni" />
            </NuxtLink>
            <NuxtLink to="http://www.suedtiroler-kraeuterpaedagogen.it/">
                <img src="/images/partner/skp_logo.png" alt="Südtiroler Kräuterpädagogen" />
            </NuxtLink>
        </div>
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

.address {
    @include col-start(2);
    @include col(3);
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

.socials {
    @include col-start(5);
    @include col(6);

    & {
        width: 100%;

        display: flex;
        justify-content: center;
        gap: 3rem;
    }

    .social {
        position: relative;

        img {
            height: 7.5rem;
            width: 7.5rem;
        }

        :deep(svg) {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;

            height: 7.5rem;
            width: 7.5rem;
        }
    }
}

.footer-links {
    @include col-start(11);
    @include col(3);

    & {
        height: 100%;

        display: flex;
        justify-content: end;
        align-items: center;
    }

    .sep {
        padding: 0 0.5rem;
    }

    a {
        color: $colorFont;
        text-decoration: none;

        &:hover {
            color: $colorCta;
            text-decoration: underline;
        }
    }
}

.partner {
    @include col-start(1);
    @include col(14);

    padding: 5.5rem;
    background-color: $colorBackgroundCream;

    display: flex;
    justify-content: end;
    gap: 4.5rem;

    img {
        height: 9rem;
        width: auto;
    }
}
</style>
