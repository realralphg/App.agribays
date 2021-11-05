
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: 'activityChart',
  data() {
    return {
      investments: [],
      chartdata: {
        labels: ["January","February","March","April","May","June","July",
        "August","September","October","November","December"],
        datasets: [
          {
            label: 'A',
            backgroundColor: '#2B945B',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
  computed: {
    user(){
       return this.$store.getters.user
    },
    userInvestments(){
      return this.$store.getters.userInvestments
   },
  },
  mounted() {
    
    if(this.user.role.name=='Authenticated'){
      this.$store.dispatch("userInvestments",this.$store.getters.user.id).then(async (investments)=>{
        this.investments = investments
        console.log("Investments>>>>",this.investments)
        await this.investments.forEach(investment=>{
            let date = new Date(investment.created_at)
            let month = date.getMonth()
            this.chartdata.datasets[0].data[month-1] = investment.paidAmount
            console.log("HELLO A",this.chartdata.datasets[0].data)

        })
        this.renderChart(this.chartdata, this.options)
     })
    }

    else if(this.user.role.name=='Admin'){
      this.$store.dispatch("getSavings").then(async (investments)=>{
        this.investments = investments
        console.log("Investments>>>>",this.investments)
        await this.investments.forEach(investment=>{
            let date = new Date(investment.created_at)
            let month = date.getMonth()
            this.chartdata.datasets[0].data[month-1] = investment.paidAmount
            console.log("HELLO A",this.chartdata.datasets[0].data)
        })
        this.renderChart(this.chartdata, this.options)
     })
    }
    
   
  },
  
}

