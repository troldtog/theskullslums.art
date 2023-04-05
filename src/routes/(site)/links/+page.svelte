<script lang="ts">
    import Tumblr from 'svelte-ionicons/LogoTumblr.svelte';
    import Twitter from 'svelte-ionicons/LogoTwitter.svelte';
    import Instagram from 'svelte-ionicons/LogoInstagram.svelte';
    import ArtStation from './LogoArtStation.svelte';
    import Patreon from './LogoPatreon.svelte';
    import KoFi from './LogoKoFi.svelte';
    import RedBubble from './LogoRedBubble.svelte';
    const size="40"
</script>

<h2>Links</h2>

<div class="py-4">
    <h3>Here's a logocloud, just cause I wanted to try one</h3>
    <div class="logo-cloud grid-cols-1 xs:!grid-cols-4 md:!grid-cols-6 gap-1">
        <a class="logo-item xs:col-span-4 md:col-start-2" href="https://www.redbubble.com/people/theskullslums/shop">
            <span><RedBubble {size}  /></span>
            <span>Red Bubble</span>
        </a>
        <a class="logo-item  xs:col-span-2" href="https://patreon.com/theSkullSlums">
            <span><Patreon {size} /></span>
            <span>Patreon</span>
        </a>
        <a class="logo-item  xs:col-span-2" href="https://www.artstation.com/theskullslums">
            <span><ArtStation {size} /></span>
            <span>ArtStation</span>
        </a>
        <a class="logo-item  xs:col-span-2" href="https://ko-fi.com/theskullslums">
            <span><KoFi {size} /></span>
            <span>Ko-Fi</span>
        </a>
        <a class="logo-item xs:col-span-2" href="https://www.instagram.com/theskullslums/">
            <span><Instagram {size} /></span>
            <span>Instagram</span>
        </a>
        <a class="logo-item  xs:col-span-2" href="https://www.twitter.com/real_skully/">
            <span><Twitter {size} /></span>
            <span>Twitter</span>
        </a>
        <a class="logo-item  xs:col-span-2" href="https://theskullslums.tumblr.com">
            <span><Tumblr {size} /></span>
            <span>Tumblr</span>
        </a>
    </div>
</div>
