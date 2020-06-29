
 const CharPoses =  {
    exit: { opacity: 0, y: 0 },
    enter: {
      opacity: 1,
      y: 0,
  
      transition: ({ charInWordIndex }) => ({
        type: "spring",
        
        // delay: charInWordIndex * 130
        delay: charInWordIndex + Math.floor(Math.random() * 10) * 150
        // stiffness: 500 + charInWordIndex * 1,
        // damping: 10 - charInWordIndex * 1
      })
    }
  };
  export default CharPoses;