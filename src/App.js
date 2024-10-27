import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름(이름은 쉽표(,) 기준으로 구분)\n"
    );

    if (inputCarNames === "") {
      throw new Error("[ERROR]: 빈 문자열은 입력할 수 없습니다.");
    }

    const carNames = inputCarNames.split(",");

    const uniqueCarNames = [];

    carNames.forEach((carName) => {
      if (uniqueCarNames.includes(carName)) {
        throw new Error("[ERROR]: 같은 이름은 불가능합니다.");
      }
      if (carName.length > 5) {
        throw new Error("[ERROR]: 이름은 5자 이하만 가능합니다.");
      }
      uniqueCarNames.push(carName);
    });
  }
}

export default App;
