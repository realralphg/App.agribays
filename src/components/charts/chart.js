
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: 'activityChart',
  data() {
    return {
      chartdata: {
        labels: ['Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20', 'Nov 21', 'Nov 22', 'Nov 23', 'Nov 24',],
        datasets: [
          {
            label: 'A',
            backgroundColor: '#2B945B',
            data: [250000, 150000, 200000, 70000, 250000, 350000, 280000, 80000, 150000, 290000, 250000, 250000, 50000, 90000]
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        lineWidth: 5,
        drawBorder: true,
      }
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}

