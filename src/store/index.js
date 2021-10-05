import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import example from './module-example'

Vue.use(Vuex,axios)

axios.defaults.headers.common['Authorization'] = `Bearer ${
  localStorage.getItem('token') || null
}`

 console.log("First method...")
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    state: {
       apiServer: 'http://localhost:1337',
       token: localStorage.getItem('token') || '',
       user : localStorage.getItem('user') || null,
       plans: [],
       products: [],
       userInvestments: [],
       userTransactions: [],
       users: [],
       transactions: [],
       savings: []
    },

    getters: {
        user: state => JSON.parse(state.user),
        apiServer: state => state.apiServer,
        plans: state => state.plans,
        products: state => state.products,
        investment: state =>state.investment,
        userInvestments: state =>state.userInvestments,
        userTransactions: state =>state.userTransactions,
        users: state => state.users,
        savings: state => state.savings,
        transactions: state => transactions.users
    },

    mutations: {
      registration_success(state,user){
        state.user = JSON.stringify(user);
      },
      login_success(state,user){
        state.user = JSON.stringify(user);
        console.log("After Commit>>>",state.user)
      },
      plans_fetched(state,plans){
        state.plans = plans;
      },
      products_fetched(state,products){
        state.products = products;
      },
      investment_success(state,investment){
        state.investment = investment
      },
      user_investments(state,investment){
        state.userInvestment = investment
      },
      user_transactions(state,transactions){
        state.userTransactions = transactions
      },
      users_fetched(state,users){
        state.users = users
      },
      savings_fetched(state,savings){
        state.savings = savings
      },
      transactions_fetched(state,transactions){
        state.transactions = transactions
      }
    },
    
    actions: {
       
        register({commit},userData){
          console.log("User Data",userData)
          return new Promise((resolve,reject)=>{
            delete axios.defaults.headers.common['Authorization']
            axios.post(`${this.getters.apiServer}/auth/local/register/`,userData).then(response=>{
               console.log(response)
               localStorage.setItem('token', response.data.jwt)
               localStorage.setItem('user', JSON.stringify(response.data.user))
               axios.defaults.headers.common['Authorization'] = 'Bearer '+response.data.jwt
               commit('registration_success', response.data.user)
               resolve(response.data.user)
            }).catch(error=>{
                console.log(error);
                reject(error)
            });
          })
        },

        login({commit},userData){
          console.log("User Data",userData)
          return new Promise((resolve,reject)=>{
            delete axios.defaults.headers.common['Authorization']
            axios.post(`${this.getters.apiServer}/auth/local/`,userData).then(response=>{
               console.log("After Login",response)
               localStorage.setItem('token', response.data.jwt)
               localStorage.setItem('user', JSON.stringify(response.data.user.data))
               axios.defaults.headers.common['Authorization'] = 'Bearer '+response.data.jwt
               commit('login_success', response.data.user)
               resolve(response.data.user)
            }).catch(error=>{
                console.log(error);
                reject(error)
            });
          })
        },

        logout({commit}){
          return new Promise((resolve) => {
            //commit('logout')
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            delete axios.defaults.headers.common['Authorization']
            this.$router.push("/")
            resolve("success")
          })
      },

      plans({commit}){
          axios.get(`${this.getters.apiServer}/plans`).then(response=>{
              response = response.data.map(plan=>{
                return {label:plan.name,value:plan.id}
              })
             commit('plans_fetched', response)
          }).catch(error=>{
              console.log(error);
          });
       },


       products({commit}){
        axios.get(`${this.getters.apiServer}/products`).then(response=>{
           response = response.data.map(product=>{
             return {label: product.name, value: product.id}
           })
           commit('products_fetched', response)
        }).catch(error=>{
            console.log(error);
        });
     },

    createInvestment({commit},investmentData){
      return new Promise((resolve,reject)=>{
        axios.post(`${this.getters.apiServer}/investments/`,investmentData).then(response=>{
           console.log(response)
           commit('investment_success', response.data)
           resolve(response.data)
        }).catch(error=>{
            console.log(error);
            reject(error)
        });
      })
    },

    getPlan({commit},planId){
      return new Promise((resolve,reject)=>{
        axios.get(`${this.getters.apiServer}/plans/${planId}`).then(plan=>{
           console.log(plan)
           //commit('login_success', plan)
           resolve(plan)
        }).catch(error=>{
            console.log(error);
            reject(error)
        });
      })
    },

    refreshUser({commit}){
      console.log("Current user",this.getters.user)
      axios.get(`${this.getters.apiServer}/users/${this.getters.user.id}`).then(user=>{
         console.log("User fetched is>>>",user.data)
         localStorage.setItem('user', JSON.stringify(user.data))
         commit('login_success', user.data)
      }).catch(error=>{
          console.log(error);
      });
    },

    updateUser({commit},userData){
      return new Promise((resolve,reject)=>{
      axios.put(`${this.getters.apiServer}/users/${this.getters.user.id}`,userData).then(user=>{
         console.log("User Updated is>>>",user)
         localStorage.setItem('user', JSON.stringify(user.data))
         commit('login_success', user.data)
         resolve("success")
      }).catch(error=>{
          reject(error)
          console.log(error);
      });
    })
  },

  deleteUser({commit},userId){
    return new Promise((resolve,reject)=>{
    axios.delete(`${this.getters.apiServer}/users/${userId}`).then(user=>{
       console.log("User Deleted is>>>",user)
       resolve("success")
    }).catch(error=>{
        reject(error)
        console.log(error);
    });
  })
},

  getUsers({commit}){
    return new Promise((resolve,reject)=>{
    axios.get(`${this.getters.apiServer}/users/`).then(users=>{
       console.log("Users fetched are is>>>",users)
       commit('users_fetched', users.data)
       resolve(users.data)
    }).catch(error=>{
        reject(error)
        console.log(error);
    });
   })
  },

  getSavings({commit}){
    return new Promise((resolve,reject)=>{
    axios.get(`${this.getters.apiServer}/investments/`).then(savings=>{
       console.log("Savings fetched are is>>>",savings)
       commit('savings_fetched', savings.data)
            //axios.delete(`${this.getters.apiServer}/investments/45`)
            console.log("delete")
       resolve(savings.data)
    }).catch(error=>{
        reject(error)
        console.log(error);
    });
   })
  },

  completeInvestment({commit},investmentId){
    return new Promise((resolve,reject)=>{
    axios.put(`${this.getters.apiServer}/investments/${investmentId}`,{status:"completed"}).then(savings=>{
       console.log("Investment Updated>>>",savings)
       //commit('savings_fetched', savings.data)
            //axios.delete(`${this.getters.apiServer}/investments/45`)
            console.log("delete")
       resolve(savings.data)
    }).catch(error=>{
        reject(error)
        console.log(error);
    });
   })
  },

  getTransactions({commit}){
    return new Promise((resolve,reject)=>{
    axios.get(`${this.getters.apiServer}/transactions/`).then(transactions=>{
       console.log("transactions fetched are is>>>",transactions)
      //  transactions.data.forEach(element => {
      //     if(!element.user || !element.investment){
      //       console.log("deleted...")
      //       axios.delete(`${this.getters.apiServer}/transactions/${element.id}`)
      //     }
      //  });
       commit('transactions_fetched', transactions.data)
       resolve(transactions.data)
    }).catch(error=>{
        reject(error)
        console.log(error);
    });
   })
  },

    userInvestments({commit},userId){
      return new Promise((resolve,reject)=>{
          axios.get(`${this.getters.apiServer}/getInvestments/${userId}`).then(investments=>{
            console.log("The current users investments are",investments.data)
            commit('user_investments', investments.data)
            resolve(investments.data)
          }).catch(error=>{
              console.log(error);
              reject(error)
          });
     })
    },

    userTransactions({commit},userId){
      return new Promise((resolve,reject)=>{
          axios.get(`${this.getters.apiServer}/getTransactions/${userId}`).then(transactions=>{
            console.log("The current users transactions are",transactions.data)
            commit('user_transactions', transactions.data)
            resolve(transactions.data)
          }).catch(error=>{
              console.log(error);
              reject(error)
          });
     })
    },

    getInvestment({commit},investmentId){
      return new Promise((resolve,reject)=>{
          axios.get(`${this.getters.apiServer}/investments/${investmentId}`).then(investment=>{
            console.log("The current users investments are",investment.data)
            resolve(investment.data)
          }).catch(error=>{
              console.log(error);
              reject(error)
          });
     })
    },
  },
 
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
