import{
    sumMultiples,
    isValidDNA,
    isItPrime,
    getComplementaryDNA,
    createMatrix,
    areWeCovered
} from "../challenges/exercise006";


describe("sumMultiples", () => {
  it('should return the sum of numbers that are multiples of 3 or 5', () => {
    // Test Case 1
    const result1 = sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log(result1)
    expect(result1).toBe(33);

    const result2 = sumMultiples([2,4,8,11]);
    expect(result2).toBe(0);

    const result3 = sumMultiples([3, 5, 6, 9, 10, 12, 15]);
    expect(result3).toBe(60);

  });
});

describe("isValidDNA" , () => {
    it('should return true for valid DNA strings', () => {
        expect(isValidDNA('CGTA')).toBe(true);
        expect(isValidDNA('ACGTACGT')).toBe(true);
      });
    
      // Test case: Invalid DNA strings
      it('should return false for invalid DNA strings', () => {
        expect(isValidDNA('CGTAB')).toBe(false);
        expect(isValidDNA('GCTY')).toBe(false);
      });

});

describe("getComplementaryDNA", () => {
    // Test case: Complementary DNA strings
    it('should return the complementary DNA string', () => {
      expect(getComplementaryDNA('ACTG')).toBe('TGAC');
      expect(getComplementaryDNA('ACGT')).toBe('TGCA');
      expect(getComplementaryDNA('ATCG')).toBe('TAGC');
      expect(getComplementaryDNA('CGTA')).toBe('GCAT');
    });
  });

describe("isItPrime" , () => {

    it('should return true if the number is Prime', () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(7)).toBe(true);
      });
    
      
      it('should return false if the number is not prime', () => {
        expect(isItPrime(12)).toBe(false);
        expect(isItPrime(22)).toBe(false);
      });

});

describe('createMatrix', () => {
    // Test case: Filled matrix with specified value
    it('should return a filled matrix with specified value', () => {
      expect(createMatrix(3, "foo")).toEqual([
        ["foo", "foo", "foo"],
        ["foo", "foo", "foo"],
        ["foo", "foo", "foo"]
      ]);
  
      expect(createMatrix(2, 0)).toEqual([
        [0, 0],
        [0, 0]
      ]);
  
      expect(createMatrix(4, false)).toEqual([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
      ]);

      expect(createMatrix(5, "Priya")).toEqual([
        ["Priya", "Priya", "Priya", "Priya","Priya"],
        ["Priya", "Priya", "Priya", "Priya","Priya"],
        ["Priya", "Priya", "Priya", "Priya","Priya"],
        ["Priya", "Priya", "Priya", "Priya","Priya"],
        ["Priya", "Priya", "Priya", "Priya","Priya"]
      ]);
    });
  });


  describe('areWeCovered', () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Thursday","Saturday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Priya", rota: ["Tuesday", "Thursday", "Saturday"] },
      { name: "Elena", rota: ["Thursday","Monday","Friday"]}
    ];
  
    // Test case: Enough staff members scheduled for the given day
    it('should return true if there are enough staff members scheduled for the given day', () => {
      expect(areWeCovered(staff, "Tuesday")).toBe(true);
      expect(areWeCovered(staff, "Saturday")).toBe(true);
      expect(areWeCovered(staff, "Thursday")).toBe(true);
    
     });

    // Test case: Not enough staff members scheduled for the given day
  it('should return false if there are not enough staff members scheduled for the given day', () => {
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Friday")).toBe(false);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });
  });