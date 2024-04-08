// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//FactoryFuction
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomMutation = Math.floor(Math.random() * 15);
      const newBase = returnRandBase();
      if (this.dna[randomMutation] !== newBase) {
        this.dna[randomMutation] = newBase;
      } else {
        this.mutate();
      }
    },
    compareDNA(pAequorObj) {
      let match = 0;
      for (let i = 0; i <= 15; i++) {
        if (this.dna[i] === pAequorObj.dna[i]) {
          match++;
        }
      }
      let percentage = (match / 15) * 100;
      console.log(
        `pAequors ${this.specimenNum} and ${pAequorObj.specimenNum} have a ${percentage}% DNA match.`
      );
    },
    willLikelySurvive() {
      let countCG = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === "G" || this.dna[i] === "C") {
          countCG++;
        }
      }
      let percentage = (countCG / 15) * 100;
      if (percentage >= 60) {
        return true;
      }
    },
  };
};

const createThirty = () => {
  let specimenArray = [];
  for (let i = 0; i < 30; i++) {
    specimenArray.push(pAequorFactory(i + 1, mockUpStrand()));
  }
  console.log(specimenArray);
};

createThirty();
