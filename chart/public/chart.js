const liveData = {
    labels: ['การกิน', 'การนอน', 'เล่นโทรศัพท์', 'วาดรูป', 'ทำงาน'],
    datasets: [{
        data: [10, 35, 15, 20, 30],
    }]
};

const liveConfig = {
    type: 'doughnut',
    data: liveData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'กิจวัตรประจำวัน'
            }
        }
    },
};

const liveCtx = document.getElementById('liveChart').getContext('2d');
new Chart(liveCtx, liveConfig);

const moneyLabels = ['ค่าหอ', 'ค่าเน็ต', 'ค่ากิน', 'ค่าน้ำ', 'ค่าไฟ', 'ค่าอื่นๆ'];

const moneyData = {
    labels: moneyLabels,
    datasets: [{
        label: 'จำนวนเงิน (บาท)',
        data: [3000, 320, 4000, 100, 1200, 4000],
    }]
};

const moneyConfig = {
    type: 'line',
    data: moneyData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    callback: function(value, index, values) {
                        return moneyLabels[index];
                    },
                }
            },
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'ค่าใช้จ่ายต่อเดือน'
            }
        }
    },
};

const moneyCtx = document.getElementById('moneyChart').getContext('2d');
new Chart(moneyCtx, moneyConfig);

const gradeLabels = [
    'เกษตรเพื่อชีวิต',
    'การเขียนโปรแกรมเบื้องต้น',
    'เทคโนโลยีสารสนเทศและการสื่อสาร',
    'คณิตศาสตร์ดีครีต',
    'องค์ประกอบและสถาปัตยกรรมคอมพิวเตอร์',
    'เครือข่ายคอมพิวเตอร์เบื้องต้น',
    'การเขียนโปรแกรมและทักษะการแก้ปัญหา',
    'แคลคูลัสสำหรับวิทยาศาสตร์และเทคโนโลยี',
    'ภาษาไทยเพื่อการนำเสนอ',
    'ภาษาอังกฤษในชีวิตประจำวัน',
    'สนทนาภาษาอังกฤษ',
    'พลเมืองดิจิทัล'
];

const gradeData = {
    labels: gradeLabels,
    datasets: [{
        label: 'เกรด',
        data: [4, 3, 4, 4, 4, 3.5, 3.5, 4, 4, 2.5, 2, 4], // ตัวเลขเป็นค่าเกรดที่คุณต้องการแสดง
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
    }]
};

const gradeConfig = {
    type: 'bar',
    data: gradeData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 4,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'เกรดวิชาต่างๆ'
            }
        }
    },
};

const gradeCtx = document.getElementById('gradeChart').getContext('2d');
new Chart(gradeCtx, gradeConfig);