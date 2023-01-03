// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand;
}

// Returns an object contained the DNA's info
const pAequorFactory = (num, arrDNA) => {
  return {
    specimenNum: num,
    dna: arrDNA,
    // Makes DNA mutated which means every element is not as before
    mutate() {
      this.dna = arrDNA.map(function (base) {
        let randBase = base;
        while (base === randBase) {
          randBase = returnRandBase();
        }
        base = randBase;
        return base;
      })
      return this.dna;
    },
    // Compares current DNA and new provided DNA and returns its percentage.
    compareDNA(pAequor) {
      let amountOfSimilarities = 0;
      for (let i = 0; i < pAequor.length - 1; i++) {
        if (pAequor[i] === this.dna[i]) {
          amountOfSimilarities += 1;
        }
      }
      const commonDNA = Math.floor((amountOfSimilarities * 100) / 15);
      return `specimen #1 and specimen #2 have ${commonDNA}% DNA in common`;
    },
    // Returns how many C or G bases the DNA has in percentage.
    willLikelySurvive() {
      let amountCandG;
      for (let base of this.dna) {
        if (base === "C" || base === "G") {
          amountCandG += 1;
        }
      }
      return (amountCandG * 100) / 15 >= 60;
    }
  };
}








