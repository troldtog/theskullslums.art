import * as Image from '$lib/images';

export const mockdata = {
    data: [
        {
            id: 1,
            alt: 'Text describing the general look and vibes of the image.',
            orientation: 'portrait',
            title: 'Possessed Crown',
            previews: [Image.cartoon],
            images: [{ tierName: 'flats', image: [Image.cartoon] }, { tierName: 'color', image: [Image.cartoon] }, { tierName: 'process', image: [Image.cartoon] }],
            fileUnder: ['Midna', 'Crown', 'Possessed', 'Spooky', 'Portrait'],
            comment:
                'This is an example of art with a shop link! There are stickers! There are prints!',
            shopLink: 'https://www.redbubble.com/shop/ap/124108935'
        },
        {
            id: 2,
            alt: 'Text describing the general look and vibes of the image.',
            orientation: 'landscape',
            title: 'Color Practice',
            previews: [Image.cartoon_sideways],
            images: [{ tierName: 'flats', image: [Image.cartoon_sideways] }],
            fileUnder: ['Link', 'Skully', 'Midna', 'Practice', 'Color'],
            comment:
                "This is an example of a landscape-oriented preview image. On larger screens this will auto-adjust its dimensions. If you're on desktop try re-sizing your screen.",
            shopLink: ''
        },
        {
            id: 3,
            alt: 'Text describing the general look and vibes of the image.',
            orientation: 'landscape',
            title: 'Linkspressions',
            previews: [Image.cartoon_sideways],
            images: [{ tierName: 'sketch', image: [Image.cartoon_sideways] }],
            fileUnder: [
                'Link',
                'Emotions',
                'Sketch',
                'Practice',
                'Thoughtful',
                'Angry',
                'Determined',
                'Surprised',
                'Joyful'
            ],
            comment: 'Link Link Link Link Lonk Link',
            shopLink: ''
        },
        {
            id: 4,
            alt: 'Text describing the general look and vibes of the image.',
            orientation: 'portrait',
            title: 'Toon Skully',
            previews: [Image.cartoon],
            images: [
                { tierName: 'sketch', image: [Image.cartoon] },
                { tierName: 'color', image: [Image.CARTOON] }
            ],
            fileUnder: ['Skully', 'Doodle', 'Excited'],
            comment:
                'This is an example of tiered content. Click on this one to view other versions!',
            shopLink: ''
        },
        {
            id: 5,
            alt: 'Text describing the general look and vibes of the image.',
            orientation: 'portrait',
            title: 'Forest Warrior',
            previews: [Image.cartoon],
            images: [{ tierName: 'color', image: [Image.cartoon] }],
            fileUnder: ['Link'],
            comment: 'And this one is for a yellow-red color test on the background!',
            shopLink: ''
        },
        {
            id: 6,
            alt: 'Text describing the general look and vibes of the image.',
            orientation: 'landscape',
            title: 'Midlinkspressions',
            previews: [Image.cartoon_sideways],
            images: [{ tierName: 'sketch', image: [Image.cartoon_sideways] }],
            fileUnder: ['Midna'],
            comment: "And since I included the Linkspressions, I couldn't leave this one out.",
            shopLink: ''
        }
    ]
};
