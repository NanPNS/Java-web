const liveChart = document.getElementById('LiveChart').getContext('2d');

const liveData = {
  labels: ['นอน', 'กิน', 'ทำงาน', 'วาดรูป', 'เล่นโทรศัพท์'],
  datasets: [{
    data: [20, 15, 30, 10, 25],
  }]
};

const liveOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const liveChartInstance = new Chart(liveChart, {
  type: 'doughnut',
  data: liveData,
  options: liveOptions
});

const financialChart = document.getElementById('financialChart').getContext('2d');

const financialData = {
  labels: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม'],
  datasets: [{
    label: 'รายรับ',
    data: [20000, 22000, 25000, 23000, 24000],
  }, {
    label: 'รายจ่าย',
    data: [15000, 18000, 17000, 19000, 20000],
  }]
};

const financialOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const financialChartInstance = new Chart(financialChart, {
  type: 'bar',
  data: financialData,
  options: financialOptions
});

const scheduleChart = document.getElementById('scheduleChart').getContext('2d');

const scheduleData = {
  labels: ['ตื่น', 'ไปเรียน', 'พักกลางวัน', 'เลิกเรียน', 'กลับหอ'],
  datasets: [{
    data: [7, 8, 2, 6, 4],
  }]
};

const scheduleOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 10
    }
  }
};

const scheduleChartInstance = new Chart(scheduleChart, {
  type: 'horizontalBar',
  data: scheduleData,
  options: scheduleOptions
});