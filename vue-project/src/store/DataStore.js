import { defineStore } from 'pinia'
export const useDataStore = defineStore('dataStore', {
  state: () => ({
    users: [],
    user: {
      id: '',
      name: ''
    },
    products: [],
    product: {
      id: '',
      title: ''
    },
    pr: '/products',
    card: true,
    userPage: true,
    CheckPage: true,
    dialogVisible: false,
    showUs: true,
    showPr: true,
    textDialog: '',
    PrtextDialogBtn: '',
    textDialogBtnPr: '',
    CheckedNames: [],
    CreditObjArr: [],
    CommonDuty: [],
    selected: '',
    credit: {
      id: '',
      who: '',
      whon: '',
      sum: ''
    },
    inputSum: ''
  }),
  getters: {},
  actions: {
    changeCard() {
      this.card = false
    },
    changeUser() {
      if (this.users.length > 2) {
        this.userPage = false
      }
    },
    changeCheck() {
      if (this.products.length > 1) {
        this.CheckPage = false
      }
    },
    saveData(data) {
      this.users.push(data)
    },
    removeUser(user) {
      this.users = this.users.filter(p => p.id !== user.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    scoreUser() {
      if (this.users.length < 3) {
        this.textDialogBtn = 'надо минимум 3 друга'
        return this.textDialogBtn
      } else {
        this.showUs = false
        this.textDialogBtn = 'поехали дальше!'
        return this.textDialogBtn
      }
    },
    scoreProducts() {
      if (this.products.length < 2) {
        this.textDialogBtnPr = 'минимум 2 заказа нужно'
        return this.textDialogBtnPr
      } else {
        this.showPr = false
        this.textDialogBtnPr = 'официант! счет!'
        return this.textDialogBtnPr = 'официант! счет!'
      }
    },
    AddFormCreateUser() {
      this.user.id = Math.random();
      if (this.user.name == '') {
        this.textDialog = 'Нужно его как-то назвать...'
        this.showDialog()
      } else if (this.user.name.length == 1) {
        this.textDialog = '...Ну не бывает имен из 1 буквы...'
        this.showDialog()
      } else {
        this.saveData(this.user)
        this.user = {
          id: '',
          name: ''
        }
      }
    },
    createProducts(product) {
      this.products.push(product)
    },
    createProducts() {
      this.product.id = Math.random();
      if (this.product.title == '') {
        this.textDialog = 'Так ты же еще ничего не написал('
        this.showDialog()
      } else if (this.product.title.length == 1) {
        this.textDialog = '...Ну не бывает вещей из 1 буквы...'
        this.showDialog()
      } else {
        this.products.push(this.product)
        this.product = {
          id: '',
          title: ''
        }
      }
    },
    showUser() {
      if (this.users.length > 2) {
        this.showUs = false
        return this.showUs
      }
    },
    TotalSum(){
      let sum = 0;
      for(let i=0; i<this.CommonDuty.length; i++){
        sum += this.CommonDuty[i].sum
      }
       return  Math.ceil(sum) 
    },
    RecountDuty(){
      this.CommonDuty = this.CommonDuty.filter((el)=> el.who !== el.whon)
      return this.CommonDuty
    },
    reverseDuty(){
      this.CommonDuty.forEach((elI)=>{
        this.CommonDuty.forEach((elJ)=>{
          if(elI.who == elJ.whon && elI.whon == elJ.who){
            this.credit.id = Math.random()
            // let sumCredit = ''
            if(elI.sum >= elJ.sum){
              this.credit.who = elI.who
              this.credit.whon = elJ.who
              this.credit.sum = elI.sum - elJ.sum
            }else{
              this.credit.who = elJ.who
              this.credit.whon = elI.who
              this.credit.sum = elJ.sum - elI.sum
            }
            this.CommonDuty = this.CommonDuty.filter((i)=> i.id !== elJ.id)
            this.CommonDuty = this.CommonDuty.filter((i)=> i.id !== elI.id)

            this.CommonDuty.push(this.credit)
            this.credit = {
              id: '',
              who: '',
              whon: '',
              sum: ''
            }
          }
        })
      })
      console.log(this.CommonDuty)
    }
  }
})
