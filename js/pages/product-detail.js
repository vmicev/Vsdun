const productDetailPageLogic = {
    data() {
        return {
            product: null,
            category: null,
            activeTab: (window.location.hash ? window.location.hash.substring(1) : 'features'),
            showOrderModal: false,
            orderSubmitted: false,
            orderForm: {
                name: '',
                contact: '',
                company: '',
                message: ''
            }
        }
    },
    watch: {
        activeTab(newTab) {
            if (newTab) {
                window.history.replaceState(null, null, '#' + newTab);
            }
        }
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        if (productId) {
            this.product = serverData.products.find(p => p.id === productId);
            if (this.product) {
                this.category = serverData.categories.find(c => c.id === this.product.categoryId);
            }
        }
    },
    methods: {
        openOrderModal() {
            this.showOrderModal = true;
            this.orderSubmitted = false;
            this.orderForm = { name: '', contact: '', company: '', message: '' };
        },
        submitOrder() {
            // In a real app, this would be an API call
            setTimeout(() => {
                this.orderSubmitted = true;
            }, 400);
        },
        addToCart() {
            if (this.product) {
                cartAdd(this.product);
            }
        }
    }
};


