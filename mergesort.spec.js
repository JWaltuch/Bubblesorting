describe('Split Array function', function() {
  it('returns empty array if the array is empty', function() {
    expect(split([])).toEqual([]);
  });
  it('returns an array itself if it has only one item', function(){
    expect(split([5])).toEqual([5]);
  })
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4]) ).toEqual( [[1,2], [3,4]] );
    // your code here
  });
  it('if the number of items is odd, the first array will be bigger', function(){
    expect(split([1,2,3,4,5])).toEqual([[1,2,3], [4,5]]);
  })
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([3,4],[1,2])).toEqual([1,2,3,4]);
    expect(merge([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
  });
  it('if one of the arrays empty, it returns non-empty array', function(){
    expect(merge([], [5,6])).toEqual([5,6]);
  });
  it('return empty array if both arrays are empty', function(){
    expect(merge([],[])).toEqual([]);
  });
  it('returns merged array if one array is bigger', function(){
    expect(merge([2,3,4], [6,7])).toEqual([2,3,4,6,7]);
  })
});
