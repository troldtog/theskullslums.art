<script lang="ts">
    import Tumblr from 'svelte-ionicons/LogoTumblr.svelte';
    import Twitter from 'svelte-ionicons/LogoTwitter.svelte';
    import Instagram from 'svelte-ionicons/LogoInstagram.svelte';
    import ArtStation from './LogoArtStation.svelte';
    import Patreon from './LogoPatreon.svelte';
    import KoFi from './LogoKoFi.svelte';
</script>

<h2>Support</h2>

<div class="py-4">
    <h3>Hello!</h3>

    <p>
        I'm not actually sure what to put here. My original idea was to sell subscriptions without
        Patreon or Ko-Fi taking a cut, but also include Patreon and Ko-Fi links for people who still wanted to use them to send money. Anyway building a subscription- and
        payment-processing backend takes time and all in all the money wasn't really that different, so I took all the direct sale stuff out at least for now. And then all that was left was the Ko-Fi and Patreon badges, and a few
        links doesn't really fill a page. If you have a vision for ideas what to do with this page,
        I can definitey do whatever that vision is though!
    </p>
</div>
<div class="py-3">
    <h3>Here's a logocloud, just cause I wanted to try one</h3>
    <div class="logo-cloud grid-cols-1 xs:!grid-cols-2 lg:!grid-cols-3 gap-1">
        <a class="logo-item" href="https://patreon.com/theSkullSlums">
            <span><Patreon /></span>
            <span>Patreon</span>
        </a>
        <a class="logo-item" href="https://www.artstation.com/theskullslums">
            <span><ArtStation /></span>
            <span>ArtStation</span>
        </a>
        <a class="logo-item" href="https://ko-fi.com/theskullslums">
            <span><KoFi /></span>
            <span>Ko-Fi</span>
        </a>
        <a class="logo-item" href="https://www.instagram.com/theskullslums/">
            <span><Instagram /></span>
            <span>Instagram</span>
        </a>
        <a class="logo-item" href="https://www.twitter.com/real_skully/">
            <span><Twitter /></span>
            <span>Twitter</span>
        </a>
        <a class="logo-item" href="https://theskullslums.tumblr.com">
            <span><Tumblr /></span>
            <span>Tumblr</span>
        </a>
    </div>
</div>
