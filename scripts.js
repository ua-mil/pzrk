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
        alert('Ваш браузер не підтримує ф""ункцію поділитися.');
    }
}

function copyAKData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Расход БК АК-74/5.45:\n';

    const keys = [
        { id: 'ps', label: 'ПС' },
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
        alert('Дані секції "Расход БК АК-74/5.45" скопійовано до буферу обміну!');
    });
}

function shareAKData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Расход БК АК-74/5.45:\n';

    const keys = [
        { id: 'ps', label: 'ПС' },
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
            title: 'Дані секції "Расход БК АК-74/5.45"',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyIglaData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Розхід Б.К. ПЗРК Игла-1:\n';

    const keys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрільбу вів' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані секції "Розхід Б.К. ПЗРК Игла-1" скопійовано до буферу обміну!');
    });
}

function shareIglaData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Розхід Б.К. ПЗРК Игла-1:\n';

    const keys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрільбу вів' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані секції "Розхід Б.К. ПЗРК Игла-1"',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyAllData() {
    const form = document.getElementById('dataForm');
    let dataString = '';

    const mainSectionKeys = [
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

    const akSectionKeys = [
        { id: 'ps', label: 'ПС' },
        { id: 'ts', label: 'ТС' },
        { id: 'targeting-ak', label: 'Цілевказівку дав' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
    ];

    const iglaSectionKeys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрільбу вів' }
    ];

    mainSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nРасход БК АК-74/5.45:\n';
    akSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nРозхід Б.К. ПЗРК Игла-1:\n';
    iglaSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Усі дані скопійовано до буферу обміну!');
    });
}

function shareAllData() {
    const form = document.getElementById('dataForm');
    let dataString = '';

    const mainSectionKeys = [
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

    const akSectionKeys = [
        { id: 'ps', label: 'ПС' },
        { id: 'ts', label: 'ТС' },
        { id: 'targeting-ak', label: 'Цілевказівку дав' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
    ];

    const iglaSectionKeys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрільбу вів' }
    ];

    mainSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nРасход БК АК-74/5.45:\n';
    akSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nРозхід Б.К. ПЗРК Игла-1:\n';
    iglaSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Усі дані',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}
