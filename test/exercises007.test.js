import{
    sumDigits,
    createRange
   
} from "../challenges/exercise007-optional.js";




describe('sumDigits', () => {
    it('should return the sum of digits in a number', () => {
      expect(sumDigits(123)).toBe(6);    // Sum of digits: 1 + 2 + 3 = 6
      expect(sumDigits(4567)).toBe(22);  // Sum of digits: 4 + 5 + 6 + 7 = 22
      expect(sumDigits(987)).toBe(24);   // Sum of digits: 9 + 8 + 7 = 24
      expect(sumDigits(0)).toBe(0);      // Sum of digits: 0 (single digit number)
      expect(sumDigits(9999)).toBe(36);  // Sum of digits: 9 + 9 + 9 + 9 = 36
      expect(sumDigits(111111)).toBe(6); // Sum of digits: 1 + 1 + 1 + 1 + 1 + 1 = 6
    });
  });
  
  
  describe('createRange' , () => {
    it('should create a range using provided start,end,step',() => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(2, 4, 2)).toEqual([2,4]);
        expect(createRange(1,7,2)).toEqual([1, 3, 5, 7]);
        expect(createRange(1,5,1)).toEqual([1,2,3,4,5]);
    });

   
  });

  
