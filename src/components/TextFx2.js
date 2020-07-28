const TextFx2 = {
    exit: { opacity: 0, x: 5 , y:-4 },
    enter: {
      opacity: 1,
      y: 0,
      x:0,
      delay: ({ charIndex }) => {
        return charIndex *4
      
      }
    }
  };
  export default TextFx2;