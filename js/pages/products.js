const productsPageLogic = {
    data() {
        return {
            mainCategories: serverData.mainCategories,
            categories: serverData.categories,
            products: serverData.products,
            activeCategory: 'all',
            openMainCats: ['servers'],
            searchQuery: ''
        }
    },
    computed: {
        filteredProducts() {
            let result = this.products;
            
            // Filter by category
            if (this.activeCategory !== 'all') {
                result = result.filter(p => p.categoryId === this.activeCategory);
            }
            
            // Filter by search query
            if (this.searchQuery.trim()) {
                const q = this.searchQuery.trim().toLowerCase();
                result = result.filter(p => {
                    const nameMatch = p.name.toLowerCase().includes(q);
                    const catName = this.$te('home.' + p.categoryId) ? this.$t('home.' + p.categoryId).toLowerCase() : '';
                    const catMatch = catName.includes(q);
                    return nameMatch || catMatch;
                });
            }
            
            return result;
        }
    },
    mounted() {
        // Read query params manually since we don't have Vue Router
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        
        if (categoryParam) {
            this.activeCategory = categoryParam;
            // Also open the parent category
            const targetCat = this.categories.find(c => c.id === this.activeCategory);
            if (targetCat) {
                this.openMainCats = [targetCat.parentId];
            }
        }
    },
    methods: {
        getSubCategories(parentId) {
            return this.categories.filter(c => c.parentId === parentId);
        },
        toggleMainCategory(id) {
            if (this.openMainCats.includes(id)) {
                this.openMainCats = [];
            } else {
                this.openMainCats = [id];
            }
        },
        getCategoryImg(categoryId) {
            const cat = this.categories.find(c => c.id === categoryId);
            return cat && cat.image ? cat.image : 'images/cat-general_server.jpg';
        },
        getCategoryIcon(categoryId) {
            const icons = {
                'gpu': 'fa-microchip',
                'storage_server': 'fa-database',
                'storage_sys': 'fa-hard-drive',
                'edge_server': 'fa-network-wired',
                'iot_gateway': 'fa-satellite-dish',
                'workstation': 'fa-desktop',
                'monitor': 'fa-tv',
                'container_dc': 'fa-box-open'
            };
            return icons[categoryId] || 'fa-server';
        },
        addToCart(product) {
            cartAdd(product);
        }
    }
};
