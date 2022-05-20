//1.Напишите тип функции, конкатенирующей две строки concat('Hello ', 'World') // -> Hello World;

function fnConcat(strA: string, strB: string): string {
    return strA.concat(strB);
}

const result = fnConcat('Hello ', 'World');



//------------------------------------------------------------------------------
//2.Напишите интерфейс для описания следующих данных

const My: MyHomeTask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [
        { 
            howIDoIt: "I Do It Wel",
            simeArray: ["string one", 23]
        }
    ],
}

interface MyHomeTask {
    howIDoIt: string,
    simeArray: Array<string | number>,
    withData: Array<{ howIDoIt: string, simeArray: Array<string | number> }>,
}


//---------------------------------------------------------------------------------------------
// 3. Типизация функций, используя Generic

// В уроке про Generics мы написали интерфейс массива MyArray

const MyArrayThree: MyArray<number> = [1, 2, 3];

interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (A: T, V: T) => T, I: T): U[];
}

const initialValue = 0;
const result2 = MyArrayThree.reduce((accumulator, value) => accumulator + value, initialValue); // -> 6



//-------------------------------------------------------------------------------------------
// 4. Работа с MappedTypes

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}