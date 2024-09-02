function copyMainData() {
    const form = document.getElementById('dataForm');
    let dataString = '';

    const keys = [
        { id: 'post', label: 'Пост' },
        { id: 'settlement', label: 'Населений пункт' },
        { id: 'time', label: 'Час' },
        { id: 'date', label: 'Дата' },
        { id: 'target-number', label: 'Ном.цілі' },
        { id: 'target-name', label: 'Назва цілі' },
        { id: 'azimuth', label: 'Азимут' },
        { id: 'course', label: 'Курс' },
        { id: 'altitude', label: 'Висота' },
        { id: 'distance', label: 'Дистанція' },
        { id: 'results', label: 'Результати роботи' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані основної секції скопійовано до буферу обміну!');
    });
}

function shareMainData() {
    const form = document.getElementById('dataForm');
    let dataString = '';

    const keys = [
        { id: 'post', label: 'Пост' },
        { id: 'settlement', label: 'Населений пункт' },
        { id: 'time', label: 'Час' },
        { id: 'date', label: 'Дата' },
        { id: 'target-number', label: 'Ном.цілі' },
        { id: 'target-name', label: 'Назва цілі' },
        { id: 'azimuth', label: 'Азимут' },
        { id: 'course', label: 'Курс' },
        { id: 'altitude', label: 'Висота' },
        { id: 'distance', label: 'Дистанція' },
        { id: 'results', label: 'Результати роботи' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані основної секції',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyAKData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Расход БК АК-74/5.45:\n';

    const keys = [
        { id: 'pm', label: 'ПМ' },
        { id: 'ts', label: 'ТС' },
        { id: 'targeting-ak', label: 'Цілевказівку дав' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані першої секції скопійовано до буферу обміну!');
    });
}

function shareAKData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Расход БК АК-74/5.45:\n';

    const keys = [
        { id: 'pm', label: 'ПМ' },
        { id: 'ts', label: 'ТС' },
        { id: 'targeting-ak', label: 'Цілевказівку дав' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані першої секції',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyIglaData() {
    const form = document.getElementById('dataForm');
    let dataString =
function copyIglaData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Розхід Б.К. ПЗРК Игла-1:\n';

    const keys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрілець' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані другої секції скопійовано до буферу обміну!');
    });
}

function shareIglaData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Розхід Б.К. ПЗРК Игла-1:\n';

    const keys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрілець' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані другої секції',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyAllData() {
    const form = document.getElementById('dataForm');
    let dataString = '';

    // Основная секция
    dataString += 'Основна секція:\n';
    const mainKeys = [
        { id: 'post', label: 'Пост' },
        { id: 'settlement', label: 'Населений пункт' },
        { id: 'time', label: 'Час' },
        { id: 'date', label: 'Дата' },
        { id: 'target-number', label: 'Ном.цілі' },
        { id: 'target-name', label: 'Назва цілі' },
        { id: 'azimuth', label: 'Азимут' },
        { id: 'course', label: 'Курс' },
        { id: 'altitude', label: 'Висота' },
        { id: 'distance', label: 'Дистанція' },
        { id: 'results', label: 'Результати роботи' }
    ];
    mainKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    // Первая секция
    dataString += '\nРасход БК АК-74/5.45:\n';
    const akKeys = [
        { id: 'pm', label: 'ПМ' },
        { id: 'ts', label: 'ТС' },
        { id: 'targeting-ak', label: 'Цілевказівку дав' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
    ];
    akKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    // Вторая секция
    dataString += '\nРозхід Б.К. ПЗРК Игла-1:\n';
    const iglaKeys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрілець' }
    ];
    iglaKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Всі дані скопійовано до буферу обміну!');
    });
}

function shareAllData() {
    const form = document.getElementById('dataForm');
    let dataString = '';

    // Основная секция
    dataString += 'Основна секція:\n';
    const mainKeys = [
        { id: 'post', label: 'Пост' },
        { id: 'settlement', label: 'Населений пункт' },
        { id: 'time', label: 'Час' },
        { id: 'date', label: 'Дата' },
        { id: 'target-number', label: 'Ном.цілі' },
        { id: 'target-name', label: 'Назва цілі' },
        { id: 'azimuth', label: 'Азимут' },
        { id: 'course', label: 'Курс' },
        { id: 'altitude', label: 'Висота' },
        { id: 'distance', label: 'Дистанція' },
        { id: 'results', label: 'Результати роботи' }
    ];
    mainKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    // Первая секция
    dataString += '\nРасход БК АК-74/5.45:\n';
    const akKeys = [
        { id: 'pm', label: 'ПМ' },
        { id: 'ts', label: 'ТС' },
        { id: 'targeting-ak', label: 'Цілевказівку дав' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
    ];
    akKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    // Вторая секция
    dataString += '\nРозхід Б.К. ПЗРК Игла-1:\n';
    const iglaKeys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрілець' }
    ];
    iglaKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Всі дані',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}