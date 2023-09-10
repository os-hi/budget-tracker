import {defineStore} from 'pinia'
import { Categories } from '../utils/types'
import {reactive, ref, computed} from 'vue'


export const useCategoryStore = defineStore('categoryStore', ()=>{
    
    let totalIncome = ref(0)
    let totalHousehold = ref(0)
    const daysInMonth = 30
    const weeksInMonth = 4
    const monthsInYear = 12
    let state= reactive<Categories[]>([
        {
            name: 'Income',
            categories: [
                {
                    total: totalIncome.value,
                    type: 'income',
                    options: [
                        {
                            name: 'Pay',
                            portfolios: [
                                {
                                    label: 'salary (after tax)',
                                    amount: 0,
                                    recurring: 'month'
                                },
                                {
                                    label: 'Income from self-employment',
                                    amount: 0,
                                    recurring: 'month'
                                },
                            ]
                        },
                        {
                            name: 'Other Income',
                            portfolios: [
                                {
                                    label: 'savings & Investments',
                                    amount: 0,
                                    recurring: 'month'
                                },
                                {
                                    label: 'board & Rent',
                                    amount: 0,
                                    recurring: 'month'
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Household',
            categories: [
                {
                    total: totalIncome.value,
                    type: 'household',
                    options: [
                        {
                            name: 'Mortgage & Rent',
                            portfolios: [
                                {
                                    label: 'Mortgage payment',
                                    amount: 0,
                                    recurring: 'month'
                                },
                                {
                                    label: 'Rent',
                                    amount: 0,
                                    recurring: 'month'
                                },
                            ]
                        },
                        {
                            name: 'Utilities',
                            portfolios: [
                                {
                                    label: 'Gas',
                                    amount: 0,
                                    recurring: 'month'
                                },
                                {
                                    label: 'Electricity',
                                    amount: 0,
                                    recurring: 'month'
                                },
                                {
                                    label: 'Water',
                                    amount: 0,
                                    recurring: 'month'
                                },
                                {
                                    label: 'Mobile phones',
                                    amount: 0,
                                    recurring: 'month'
                                },
                                {
                                    label: 'Internet /Broadbands',
                                    amount: 0,
                                    recurring: 'month'
                                },
                                {
                                    label: 'Satelite or digital TV',
                                    amount: 0,
                                    recurring: 'month'
                                },
                            ]
                        }
                    ]
                }
            ]
        }

    ])
    
    let income = computed(() =>{
        let sum = 0
        for(let category of state){
            for(let cat of category.categories){
                if(cat.type === 'income'){
                    for(let option of cat.options){
                        for(let portfolio of option.portfolios){
                            if(portfolio.recurring === 'day'){
                                sum += portfolio.amount * daysInMonth
                                totalIncome.value = sum
                            }
                            else if (portfolio.recurring === 'week'){
                                sum += portfolio.amount * weeksInMonth
                                totalIncome.value = sum
                            }
                            else if(portfolio.recurring === 'year'){
                                sum += portfolio.amount / monthsInYear
                                totalIncome.value = sum
                            }
                            else{
                                sum += portfolio.amount * 1
                                totalIncome.value = sum
                            }
                            
                        }
                    }
                }
                
            }
        }
        return sum
    })
    let household = computed(() =>{
        let sum = 0
        for(let category of state){
            for(let cat of category.categories){
                if(cat.type === 'household'){
                    for(let option of cat.options){
                        for(let portfolio of option.portfolios){
                            if(portfolio.recurring === 'day'){
                                sum += portfolio.amount * daysInMonth
                                totalHousehold.value = sum
                            }
                            else if (portfolio.recurring === 'week'){
                                sum += portfolio.amount * weeksInMonth
                                totalHousehold.value = sum
                            }
                            else if(portfolio.recurring === 'year'){
                                sum += portfolio.amount / monthsInYear
                                totalHousehold.value = sum
                            }
                            else{
                                sum += portfolio.amount * 1
                                totalHousehold.value = sum
                            }
                        }
                    }
                }
                
            }
        }
        return sum
    })

    let data = {
        name: 'oshi'
    }
    return {data}
    return {state,income, household}
})