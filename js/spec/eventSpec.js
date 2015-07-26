describe('todaysDate', function () {
    it('should be defined', function () {
        expect(todaysDate).toBeDefined();
    });

    it('should be to todays date', function () {
        expect(todaysDate.getYear()).toEqual(new Date().getYear());
        expect(todaysDate.getMonth()).toEqual(new Date().getMonth());
        expect(todaysDate.getDay()).toEqual(new Date().getDay());
    });
});

describe('getDayOfWeek', function () {
    beforeEach(function () {
        sundayDate = new Date('July 26, 2015');
    });

    it('should be defined', function () {
        expect(getDayOfWeek).toBeDefined();
    });

    it('should be equal the string of the current day of the week', function () {
       expect(getDayOfWeek(sundayDate.getDay())).toEqual('sunday');
    });
});
