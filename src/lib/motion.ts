/** easeOutExpo — mesma curva do sistema visual */
export const enterEase = [0.22, 1, 0.36, 1] as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: enterEase },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const viewportOnce = { once: true, amount: 0.16 } as const;
