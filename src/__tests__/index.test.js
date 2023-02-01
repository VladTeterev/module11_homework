import { getMonth } from "../index";

describe("test function getMonth", () => {
  it("the value must match the month number", () => {
    // Определение значений в переменные
    const MONTH_NUMBER = getMonth(1);
    const SEPTEMBER = getMonth(9);
    const NOT_CORRECT_NUMBER = getMonth(13);
    // Проверка трех вариантов работы ф-ции
    expect(MONTH_NUMBER).toBe("January");
    expect(SEPTEMBER).toBe("September");
    expect(NOT_CORRECT_NUMBER).toBe("Data is not correct");
  });
});
