/** easeOutExpo — mesma curva do sistema visual */
export const enterEase = [0.22, 1, 0.36, 1] as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: enterEase },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const viewportOnce = { once: true, amount: 0.18 } as const;
