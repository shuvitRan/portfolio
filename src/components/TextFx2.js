const TextFx2 = {
    exit: { opacity: 0, x: 10 , y:-10 },
    enter: {
      opacity: 1,
      y: 0,
      x:0,
      delay: ({ charIndex }) => charIndex * 15
    }
  };
  export default TextFx2;