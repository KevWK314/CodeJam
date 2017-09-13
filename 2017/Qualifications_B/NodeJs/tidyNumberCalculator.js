class TidyNumberCalculator {

    calculate(value) {
        if (value.length == 1) {
            return value;
        }

        let currentValue = [...value].map(x => parseInt(x));
        for (let outer = currentValue.length - 1; outer > 0; outer--) {
            let isValid = true;
            let smallest = currentValue[outer];
            for(let inner = outer - 1; inner >= 0; inner--) {
                if(currentValue[inner] > smallest) {
                    isValid = false;
                    break;
                }
                smallest = currentValue[inner];
            }

            if (!isValid) {
                currentValue[outer] = 9;
                currentValue = this.decrement(currentValue, outer - 1);
            }
        }
        return currentValue.join('');
    }

    decrement(value, index) {
        if (index == undefined) {
            index = data.length - 1;
        }

        if (value[index] === 0) {
            value[index] = 9;
            return this.decrement(value, index - 1)
        }

        if (index === 0 && value[index] === 1) {
            value.shift();
        }
        else {
            value[index] = value[index] - 1;
        }
        return value;
    }

    isTidyNumber(value) {
        if (value.length === 1) {
            return true;
        }

        for(let i = 1; i < value.length; i++) {
            if(value[i] < value[i-1]) {
                return false;
            }
        }

        return true;
    }
}

module.exports = TidyNumberCalculator;