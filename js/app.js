function safeGetStorage(key, def) {
    try {
        return localStorage.getItem(key) || def;
    } catch (e) {
        return def;
    }
}
function safeSetStorage(key, val) {
    try {
        localStorage.setItem(key, val);
    } catch (e) {}
}

// Initialize i18n
const savedLang = safeGetStorage('vsdun_lang', 'zh');
const i18n = VueI18n.createI18n({
    locale: savedLang,
    fallbackLocale: 'en',
    messages: messages
});

// Global cart state
const cartState = Vue.reactive({
    items: JSON.parse(safeGetStorage('vsdun_cart', '[]')),
    isOpen: false
});

function cartAdd(product) {
    const existing = cartState.items.find(i => i.id === product.id);
    if (existing) {
        existing.quantity++;
    } else {
        cartState.items.push({
            id: product.id,
            name: product.name,
            price: product.basePrice || 0,
            quantity: 1,
            categoryId: product.categoryId
        });
    }
    cartSave();
    cartState.isOpen = true;
}

function cartRemove(id) {
    const idx = cartState.items.findIndex(i => i.id === id);
    if (idx > -1) cartState.items.splice(idx, 1);
    cartSave();
}

function cartUpdateQty(id, qty) {
    const item = cartState.items.find(i => i.id === id);
    if (item) {
        item.quantity = Math.max(1, qty);
        cartSave();
    }
}

function cartClear() {
    cartState.items.splice(0, cartState.items.length);
    cartSave();
}

function cartSave() {
    safeSetStorage('vsdun_cart', JSON.stringify(cartState.items));
}

function cartTotalCount() {
    return cartState.items.reduce((sum, i) => sum + i.quantity, 0);
}

function cartTotalPrice() {
    return cartState.items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
}

// Global app initializer for MPA
function initVueApp(pageOptions = {}) {
    const app = Vue.createApp({
        data() {
            return {
                cart: cartState,
                ...(pageOptions.data ? pageOptions.data() : {})
            };
        },
        computed: {
            ...(pageOptions.computed || {})
        },
        methods: {
            ...(pageOptions.methods || {})
        },
        mounted() {
            if (pageOptions.mounted) {
                pageOptions.mounted.call(this);
            }
        },
        watch: {
            ...(pageOptions.watch || {})
        }
    });

    app.use(i18n);
    app.component('app-navbar', AppNavbar);
    app.component('app-footer', AppFooter);
    app.mount('#app');
}

