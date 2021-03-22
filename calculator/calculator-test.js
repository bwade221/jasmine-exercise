
it('should calculate the monthly rate correctly', function () {
  const testValues = {
    amount: 10000,
    years: 8,
    rate: 5.8
  }

  expect(calculateMonthlyPayment(testValues)).toEqual('130.44')
});


it("should return a result with 2 decimal places", function() {
  const testValues = {
    amount: 10043,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(testValues)).toEqual('131.00')
});
