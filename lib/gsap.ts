import gsap from 'gsap';

export { gsap };

export const animatePageIn = (
  element: HTMLElement,
  type: 'slide-left' | 'slide-right' | 'fade' | 'glitch' = 'slide-left'
) => {
  switch (type) {
    case 'slide-left':
      return gsap.fromTo(
        element,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.6, ease: 'power3.out' }
      );
    
    case 'slide-right':
      return gsap.fromTo(
        element,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.6, ease: 'power3.out' }
      );
    
    case 'fade':
      return gsap.fromTo(
        element,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    
    case 'glitch':
      const tl = gsap.timeline();
      tl.fromTo(
        element,
        { opacity: 0 },
        { opacity: 1, duration: 0.1 }
      )
      .to(element, {
        x: () => gsap.utils.random(-10, 10),
        duration: 0.05,
        repeat: 5,
        yoyo: true,
      })
      .to(element, { x: 0, duration: 0.1 });
      return tl;
  }
};

export const animatePageOut = (element: HTMLElement) => {
  return gsap.to(element, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
  });
};
