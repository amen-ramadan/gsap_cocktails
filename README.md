# GSAP Landing Page - Technical Report

This report details the issues identified and the solutions implemented to improve the GSAP landing page project.

## 1. Implemented a Full Loading Screen (Preloader)

*   **Issue:** The website lacked a preloader, causing layout shifts and janky animations on initial load as assets were still being downloaded.
*   **Solution:**
    *   A `Preloader` React component was created to display a loading screen.
    *   A utility function `preloadAssets` was implemented to handle the asynchronous loading of all site assets, including images, videos, and fonts.
    *   The main `App` component now displays the `Preloader` until all assets are successfully loaded, ensuring a smooth and seamless user experience from the start.

## 2. Improved GSAP Animations in the Hero Section

*   **Issue:** The video in the Hero section stuttered and lagged during scroll-based animations, especially in a production environment. This was due to the animation starting before the video was fully buffered.
*   **Solution:**
    *   The GSAP animation trigger was changed from the `onloadedmetadata` event to the `oncanplaythrough` event for the video element.
    *   The `oncanplaythrough` event ensures that the browser has buffered enough of the video to play it through to the end without interruption, resulting in a much smoother animation.

## 3. Fixed Video Background Blend Issue

*   **Issue:** After scrolling past the Hero section, the black background of the video element became visible, disrupting the visual flow of the page. The `mix-blend-mode: screen` property was not effective when there was no content behind the video to blend with.
*   **Solution:**
    *   GSAP's `ScrollTrigger` callbacks were used to control the visibility of the video.
    *   An `onLeave` callback was added to the scroll trigger to fade out the video (using `gsap.to(video, { autoAlpha: 0 })`) when the user scrolls past the Hero section.
    *   An `onEnterBack` callback was added to fade the video back in when the user scrolls back into the Hero section. This completely hides the video when it's not in view, resolving the blend mode issue.

## 4. Added Horizontal Spacing

*   **Issue:** Some elements, particularly the paragraph in the Art section, lacked consistent horizontal spacing, leading to a cramped and misaligned layout on smaller screens.
*   **Solution:**
    *   Consistent horizontal padding was applied to the affected elements using Tailwind CSS utility classes (`px-5`).
    *   The `Art.jsx` component was updated to include padding on the main container and the specific text element, ensuring a visually consistent and responsive design across the entire website.
