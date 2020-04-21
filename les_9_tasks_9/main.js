// Зробити свій розпоряжок дня.
// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с. Зробити таких функцій
// в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання. Далі
// виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//     Тобто, як приклад:
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави -
// Працюєте - Поїхали до дому - Повчились - Лягли спати.
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції
// доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.

function myDay(isWorkDay, cb) {
    setTimeout(() => {
        if (isWorkDay) {
            cb(null, 'Need to work')
        } else {
            cb('I sleep');
        }
    } , 500)
}

function takeShower(hotWater, cb) {
    setTimeout(() => {
        if (hotWater) {
            cb(null, 'Take a shower')
        } else {
            cb('Wash in cold water ((')
        }
    }, 1000)
}

function haveBreakfast(isEat, cb) {
    setTimeout(() => {
        if (isEat) {
            cb(null, 'I am eating breakfast')
        } else {
            cb('Stay hungry ((')
        }
    }, 1000)
}

function needStudy(isStudy, cb) {
    setTimeout(() => {
        if (isStudy) {
            cb(null, 'Study  hard')
        } else {
            cb('I am lazy')
        }
    }, 2000)
}

function haveLunch(isEat, cb) {
    setTimeout(() => {
        if (isEat) {
            cb(null, 'Cook lunch')
        } else {
            cb('Stay hungry ((')
        }
    }, 1000)

}

function houseWork(isWorkDone, cb) {
    setTimeout(() => {
        if (isWorkDone) {
            cb(null, 'Clean apartment')
        } else {
            cb('Dirty apartment')
        }
    }, 2000)
}

function haveDinner(isEat, cb) {
    setTimeout(() => {
        if (isEat) {
            cb(null, 'Cook dinner')
        } else {
            cb('Stay hungry')
        }
    }, 1000)
}

function takeBath(isHotWater, cb) {
    setTimeout(() => {
        if (isHotWater) {
            cb(null, 'Take a bath, relax))')
        } else {
            cb('Wash in cold water ((')
        }
    }, 1000)
}

function goToBed(isTired, cb) {
    setTimeout(() => {
        if (isTired) {
            cb(null, 'I go to bed')
        } else {
            cb('Learn javascript')
        }
    }, 2000)
}

myDay(true, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        takeShower(true, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                haveBreakfast(true, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                        needStudy(true, (err, data) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(data);
                                haveLunch(true, (err, data) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log(data);
                                        houseWork(true, (err, data) => {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                console.log(data);
                                                haveDinner(true, (err, data) => {
                                                    if (err) {
                                                        console.log(err);
                                                    } else {
                                                        console.log(data);
                                                        takeBath(true, (err, data) => {
                                                            if (err) {
                                                                console.log(err);
                                                            } else {
                                                                console.log(data);
                                                                goToBed(true, (err, data) => {
                                                                    if (err) {
                                                                        console.log(err);
                                                                    } else {
                                                                        console.log(data);
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

//======================================================================================================================
//***** Перед переглядом закоментувати вище написане *****
// function myDay(isWorkDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkDay) {
//                 resolve('Need to work');
//             } else {
//                 reject('I sleep');
//             }
//         }, 500)
//     })
// }
//
// function takeShower(hotWater) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (hotWater) {
//                 resolve('Take a shower')
//             } else {
//                 reject('Wash in cold water ((')
//             }
//         }, 1000)
//     })
// }
//
// function haveBreakfast(isEat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isEat) {
//                 resolve('I am eating breakfast')
//             } else {
//                 reject('Stay hungry ((')
//             }
//         }, 1000)
//     })
// }
//
// function needStudy(isStudy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isStudy) {
//                 resolve('Study hard')
//             } else {
//                 reject('I am lazy')
//             }
//         }, 2000)
//     })
// }
//
// function haveLunch(isEat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isEat) {
//                 resolve('Cook lunch')
//             } else {
//                 reject('Stay hungry ((')
//             }
//         }, 1000)
//     })
// }
//
// function houseWork(isWorkDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkDone) {
//                 resolve('Clean apartment')
//             } else {
//                 reject('Dirty apartment')
//             }
//         }, 2000)
//     })
// }
//
// function haveDinner(isEat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isEat) {
//                 resolve('Cook dinner')
//             } else {
//                 reject('Stay hungry')
//             }
//         }, 1000)
//     })
// }
//
// function takeBath(isHotWater) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isHotWater) {
//                 resolve('Take a bath, relax))')
//             } else {
//                 reject('Wash in cold water ((')
//             }
//         }, 1000)
//     })
// }
//
// function goToBed(isTired) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isTired) {
//                 resolve('I go to bed')
//             } else {
//                 reject('Learn javascript')
//             }
//         }, 2000)
//     })
// }
//
// myDay(true)
//     .then(value => {
//         console.log(value);
//         return takeShower(value)
//     })
//     .then(value => {
//         console.log(value);
//         return haveBreakfast(value)
//     })
//     .then(value => {
//         console.log(value);
//         return needStudy(value)
//     })
//     .then(value => {
//         console.log(value);
//         return haveLunch(value)
//     })
//     .then(value => {
//         console.log(value);
//         return houseWork(value)
//     })
//     .then(value => {
//         console.log(value);
//         return haveDinner(value)
//     })
//     .then(value => {
//         console.log(value);
//         return takeBath(value)
//     })
//     .then(value => {
//         console.log(value);
//         return goToBed(value)
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log(reason);
//     })
