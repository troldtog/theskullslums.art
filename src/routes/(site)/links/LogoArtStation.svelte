<script>
    export let size = '24';
    export let color = 'currentColor';
    // Unlike actual Svelte Ionicons, we omit view box because image was designed with VB unspecified
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    width={size}
    height={size}
    fill={color}
    class={$$props.class}
>
    <path
        d="M24.972 16.96c0-.502-.148-.97-.403-1.363L16.365 1.386A2.522 2.522 0 0014.137.049H9.8l12.672 21.88 1.997-3.448c.394-.66.502-.952.502-1.521zM0 16.934l2.11 3.634a2.523 2.523 0 002.252 1.382h14.002l-2.905-5.016H0zm7.728-13.34l5.664 9.776H2.064l5.664-9.776z"
    />
</svg>
