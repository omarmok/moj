
var vm = new Vue({
    el: '#app',
    data: {
        isActive: true,
        isHide: true,
      
        items: [{
            category:0
        } ],
        arabicName: '',
        englishName: '',
        link: '',
        childern: [
            { addchildern: 0 }
           
        ],
    },
    methods: {




        deleteitem() {
            this.data.modal();
          },
          removeitem(index) {
            this.items.splice(index, 1);
          },

          edititem() {
                    this.data.modal();
                },
                

         addcategory() {
            this.items.push({
          
                category: this.category++,
            
            }),
            this.isActive = !this.isActive;
            
        },
       
        addcategorychild() {
            this.childern.push({
                addchildern: this.addchildern++,
        
            
            }),
            this.isHide = !this.isHide;
        },


    }
    
  
})




