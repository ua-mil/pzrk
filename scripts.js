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

function copyM2Data() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК Canik M2:\n';

    const keys = [
        { id: '12.7', label: '12.7' },
        { id: 'targeting-m2', label: 'Цілевказівку дав' },
        { id: 'shooter-m2', label: 'Стрільбу вів' }
        { id: 'video-m2', label: 'Відеозйомка' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані секції "Витрата БК Canik M2" скопійовано до буферу обміну!');
    });
}

function shareM2Data() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК Canik M2:\n';

    const keys = [
        { id: '12.7', label: '12.7' },
        { id: 'targeting-m2', label: 'Цілевказівку дав' },
        { id: 'shooter-m2', label: 'Стрільбу вів' }
        { id: 'video-m2', label: 'Відеозйомка' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані секції "Витрата БК Canik M2"',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyAKData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК АК-74/5.45:\n';

    const keys = [
        { id: 'ps', label: 'ПС' },
        { id: 'ts', label: 'ТС' },
        { id: 'targeting-ak', label: 'Цілевказівку дав' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
        { id: 'video-ak', label: 'Відеозйомка' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані секції "Витрата БК АК-74/5.45" скопійовано до буферу обміну!');
    });
}

function shareAKData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК АК-74/5.45:\n';

    const keys = [
        { id: 'ps', label: 'ПС' },
        { id: 'ts', label: 'ТС' },
        { id: 'targeting-ak', label: 'Цілевказівку дав' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
        { id: 'video-ak', label: 'Відеозйомка' }

    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані секції "Витрата БК АК-74/5.45"',
            text: dataString,
        }).catch(error => console.error('Помилка при спробі поділитися даними:', error));
    } else {
        alert('Ваш браузер не підтримує функцію поділитися.');
    }
}

function copyIglaData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК ПЗРК Игла-1:\n';

    const keys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрільбу вів' }
        { id: 'video', label: 'Відеозйомка' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    navigator.clipboard.writeText(dataString).then(() => {
        alert('Дані секції "Витрата БК ПЗРК Игла-1" скопійовано до буферу обміну!');
    });
}

function shareIglaData() {
    const form = document.getElementById('dataForm');
    let dataString = 'Витрата БК ПЗРК Игла-1:\n';

    const keys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрільбу вів' }
        { id: 'video', label: 'Відеозйомка' }
    ];

    keys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    if (navigator.share) {
        navigator.share({
            title: 'Дані секції "Витрата БК ПЗРК Игла-1"',
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
    
    const m2SectionKeys = [
        { id: '12.7', label: '12.7' },
        { id: 'targeting-m2', label: 'Цілевказівку дав' },
        { id: 'shooter-m2', label: 'Стрільбу вів' }
        { id: 'video-m2', label: 'Відеозйомка' }
    ];

    const akSectionKeys = [
        { id: 'ps', label: 'ПС' },
        { id: 'ts', label: 'ТС' },
        { id: 'targeting-ak', label: 'Цілевказівку дав' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
        { id: 'video-ak', label: 'Відеозйомка' }
    ];

    const iglaSectionKeys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрільбу вів' }
        { id: 'video', label: 'Відеозйомка' }
    ];

    mainSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });
    
    dataString += '\nВитрата БК Canik M2:\n';
    akSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nВитрата БК АК-74/5.45:\n';
    akSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nВитрата БК ПЗРК Игла-1:\n';
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
    
    const m2SectionKeys = [
        { id: '12.7', label: '12.7' },
        { id: 'targeting-m2', label: 'Цілевказівку дав' },
        { id: 'shooter-m2', label: 'Стрільбу вів' }
        { id: 'video-m2', label: 'Відеозйомка' }
    ];
    

    const akSectionKeys = [
        { id: 'ps', label: 'ПС' },
        { id: 'ts', label: 'ТС' },
        { id: 'targeting-ak', label: 'Цілевказівку дав' },
        { id: 'shooter-ak', label: 'Стрільбу вів' }
        { id: 'video-ak', label: 'Відеозйомка' }
    ];

    const iglaSectionKeys = [
        { id: 'bk-usage', label: 'НДЖ' },
        { id: 'missile', label: 'Ракета' },
        { id: 'targeting', label: 'Цілевказівку дав' },
        { id: 'shooter', label: 'Стрільбу вів' }
        { id: 'video', label: 'Відеозйомка' }
    ];

    mainSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });
    
    dataString += '\nВитрата БК Canik M2:\n';
    akSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nВитрата БК АК-74/5.45:\n';
    akSectionKeys.forEach(({ id, label }) => {
        const value = form[id].value;
        if (value) {
            dataString += `${label}: ${value}\n`;
        }
    });

    dataString += '\nВитрата БК ПЗРК Игла-1:\n';
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
