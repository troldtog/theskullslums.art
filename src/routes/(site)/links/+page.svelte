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
