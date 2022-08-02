// Closure: Mỗi hàm được tạo ra đều có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó.

function createCounter() {
    let counter = 0;
    function increase() {
        return ++counter;
    }
    return increase;
}

const counterFunc = createCounter();

console.log(counterFunc());
console.log(counterFunc());
console.log(counterFunc());


// Ứng dụng closure:


// Ví dụ 1:
function cssProperty(property) {
    function cssValue(value) {
        console.log(`${property} {${value}}`);
    }
    return cssValue;
};


// Áp dụng:
const boxStyle = cssProperty('div.box');
boxStyle('with: 500px');
boxStyle('hight: 500px');
boxStyle('margin: auto');

const headingStyle = cssProperty('h1.heading');
headingStyle('fon-tsize: 16px');
headingStyle('font-weight: 500');
headingStyle('color: red');

// Ví dụ 2:
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storerage = {
        getAll() {
            return store
        },
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }
    return storerage
}

const profileSetting = createStorage('profile_setting');
profileSetting.set('Fullname', 'Quach Van Bach');
profileSetting.set('Age', 27);
profileSetting.set('Email', 'quachvanbach@gmail.com');
profileSetting.set('Tel', 0971882842);
profileSetting.set('Marital status', 'FA');
profileSetting.remove('Marital status'); 

console.log(profileSetting.getAll())


// Ví dụ 3:
function createApp() {
    const cars = [];

    return {
        show(){
            return cars;
        },
        get(index) {
            return cars[index];
        },
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice[index, 1];
        }

    }
}

const app = createApp();
