export type User = {
    username: string,
    password: string,
    // totalAmount: Category["total"]
}
export type Categories = {
    name: string,
    categories: Category[]
}
export type Category = {
    total: number
    type: 'income' |
          'household' |
          'living' |
          'finance' |
          'family' | 
          'travel' |
          'liesure'
    options: Option[]
}
export type Option = {
    name: string,
    portfolios: Portfolio[]
}
export type Portfolio = {
    label: string,
    amount: number,
    recurring: 'day' | 'week' | 'month' | 'year'
}



