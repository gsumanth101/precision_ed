const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default fadeUp
