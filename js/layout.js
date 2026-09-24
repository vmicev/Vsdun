const AppNavbar = {
    template: `
        <nav class="bg-white shadow-md z-50 sticky top-0">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="index.html" class="flex-shrink-0 flex items-center">
                            <img src="images/logo.svg" alt="vsdun" class="h-4 w-auto">
                        </a>
                        <div class="hidden sm:ml-16 sm:flex sm:space-x-8">
                            <a href="index.html" :class="navClass('index.html')">
                                {{ $t('nav.home') }}
                            </a>
                            <a href="products.html" :class="navClass('products.html')">
                                {{ $t('nav.products') }}
                            </a>
                            <a href="configurator.html" :class="navClass('configurator.html')">
                                {{ $t('nav.configurator') }}
                            </a>
                            <a href="service.html" :class="navClass('service.html')">
                                {{ $t('nav.service') }}
                            </a>
                            <a href="manuals.html" :class="navClass('manuals.html')">
                                {{ $t('nav.manuals') }}
                            </a>
                            <a href="about.html" :class="navClass('about.html')">
                                {{ $t('nav.about') }}
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button @click="openCart" class="relative p-2 text-gray-500 hover:text-primary transition-colors focus:outline-none">
                            <i class="fa-solid fa-cart-shopping text-xl"></i>
                            <span v-if="cartCount > 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                                {{ cartCount }}
                            </span>
                        </button>
                        <div class="relative">
                            <select v-model="$i18n.locale" @change="changeLanguage" class="block w-full pl-3 pr-8 py-2 text-sm border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md shadow-sm border bg-white cursor-pointer">
                                <option value="zh">中文</option>
                                <option value="en">English</option>
                                <option value="ru">Русский</option>
                            </select>
                        </div>
                        <div class="flex items-center sm:hidden ml-2">
                            <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-100 focus:outline-none">
                                <i class="fa-solid text-xl" :class="mobileMenuOpen ? 'fa-xmark' : 'fa-bars'"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div v-show="mobileMenuOpen" class="sm:hidden bg-white border-t border-gray-200 shadow-lg absolute w-full left-0">
                <div class="pt-2 pb-3 space-y-1 px-4">
                    <a href="index.html" class="block py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md px-3 border-l-4 border-transparent hover:border-primary">{{ $t('nav.home') }}</a>
                    <a href="products.html" class="block py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md px-3 border-l-4 border-transparent hover:border-primary">{{ $t('nav.products') }}</a>
                    <a href="configurator.html" class="block py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md px-3 border-l-4 border-transparent hover:border-primary">{{ $t('nav.configurator') }}</a>
                    <a href="service.html" class="block py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md px-3 border-l-4 border-transparent hover:border-primary">{{ $t('nav.service') }}</a>
                    <a href="manuals.html" class="block py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md px-3 border-l-4 border-transparent hover:border-primary">{{ $t('nav.manuals') }}</a>
                    <a href="about.html" class="block py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md px-3 border-l-4 border-transparent hover:border-primary">{{ $t('nav.about') }}</a>
                </div>
            </div>

            <div v-if="cart.isOpen" class="fixed inset-0 overflow-hidden z-[100]" role="dialog" aria-modal="true">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="cart.isOpen = false"></div>
                    <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                        <div class="w-screen max-w-md">
                            <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-lg font-bold text-gray-900">{{ $t('cart.title') }}</h2>
                                        <button type="button" @click="cart.isOpen = false" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
                                            <i class="fa-solid fa-xmark text-xl"></i>
                                        </button>
                                    </div>

                                    <div class="mt-8">
                                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                                            <li v-for="item in cart.items" :key="item.id" class="py-6 flex">
                                                <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden bg-white p-2">
                                                    <img :src="'images/cat-' + item.categoryId + '.jpg'" alt="" class="w-full h-full object-contain">
                                                </div>
                                                <div class="ml-4 flex-1 flex flex-col">
                                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                                        <h3><a :href="'product-detail.html?id=' + item.id">{{ item.name }}</a></h3>
                                                        <p class="ml-4">{{ '$' + (item.price * item.quantity).toLocaleString() }}</p>
                                                    </div>
                                                    <div class="flex-1 flex items-end justify-between text-sm mt-2">
                                                        <div class="flex items-center border border-gray-300 rounded">
                                                            <button @click="decQty(item)" class="px-2 py-1 text-gray-600 hover:bg-gray-100">-</button>
                                                            <span class="px-3 font-medium">{{ item.quantity }}</span>
                                                            <button @click="incQty(item)" class="px-2 py-1 text-gray-600 hover:bg-gray-100">+</button>
                                                        </div>
                                                        <button @click="removeItem(item.id)" type="button" class="font-medium text-red-600 hover:text-red-500">
                                                            <i class="fa-solid fa-trash-can"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div v-if="cart.items.length === 0" class="py-12 text-center text-gray-400">
                                            <i class="fa-solid fa-cart-shopping text-5xl mb-4"></i>
                                            <p class="text-gray-500">{{ $t('cart.empty') }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="cart.items.length > 0" class="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <div class="flex justify-between text-lg font-bold text-gray-900 mb-4">
                                        <p>{{ $t('cart.total') }}</p>
                                        <p>{{ '$' + cartTotal.toLocaleString() }}</p>
                                    </div>
                                    <button @click="checkout" class="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none whitespace-nowrap">
                                        {{ $t('cart.checkout') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        <!-- Cart Order Modal -->
                <div v-if="showOrderModal" class="fixed inset-0 z-[110] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" @click="showOrderModal = false"></div>
                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div v-if="!orderSubmitted">
                                <form @submit.prevent="submitOrder">
                                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title">
                                            {{ $t('products.order_form.title') }}
                                        </h3>
                                        <div class="mt-2 space-y-4">
                                            <div>
                                                <label for="cart-name" class="block text-sm font-medium text-gray-700">{{ $t('products.order_form.name') }} <span class="text-red-500">*</span></label>
                                                <input type="text" id="cart-name" v-model="orderForm.name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                                            </div>
                                            <div>
                                                <label for="cart-contact" class="block text-sm font-medium text-gray-700">{{ $t('products.order_form.contact') }} <span class="text-red-500">*</span></label>
                                                <input type="text" id="cart-contact" v-model="orderForm.contact" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                                            </div>
                                            <div>
                                                <label for="cart-company" class="block text-sm font-medium text-gray-700">{{ $t('products.order_form.company') }}</label>
                                                <input type="text" id="cart-company" v-model="orderForm.company" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                                            </div>
                                            <div>
                                                <label for="cart-message" class="block text-sm font-medium text-gray-700">{{ $t('products.order_form.message') }}</label>
                                                <textarea id="cart-message" v-model="orderForm.message" rows="3" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm">
                                            {{ $t('products.order_form.submit') }}
                                        </button>
                                        <button type="button" @click="showOrderModal = false" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                            {{ $t('products.order_form.cancel') }}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div v-else class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
                                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                                    <i class="fa-solid fa-check text-green-600 text-xl"></i>
                                </div>
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                    {{ $t('products.order_form.success_msg') }}
                                </h3>
                                <div class="mt-5 sm:mt-6">
                                    <button type="button" @click="closeOrderModal" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:text-sm">
                                        {{ $t('products.order_form.close') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
    `,
    data() {
        return {
            mobileMenuOpen: false,
            cart: cartState,
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
    computed: {
        cartCount() {
            return this.cart.items.reduce((sum, i) => sum + i.quantity, 0);
        },
        cartTotal() {
            return this.cart.items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
        }
    },
    methods: {
        openCart() {
            this.cart.isOpen = true;
        },
        incQty(item) {
            cartUpdateQty(item.id, item.quantity + 1);
        },
        decQty(item) {
            cartUpdateQty(item.id, item.quantity - 1);
        },
        removeItem(id) {
            cartRemove(id);
        },
        checkout() {
            this.showOrderModal = true;
            this.orderSubmitted = false;
            this.orderForm = { name: '', contact: '', company: '', message: '' };
        },
        submitOrder() {
            setTimeout(() => {
                this.orderSubmitted = true;
                cartClear();
            }, 400);
        },
        closeOrderModal() {
            this.showOrderModal = false;
            this.cart.isOpen = false;
        },
        changeLanguage() {
            try { localStorage.setItem('vsdun_lang', this.$i18n.locale); } catch(e) {}
        },
        navClass(path) {
            const currentPath = window.location.pathname;
            const isActive = currentPath.endsWith(path) || (path === 'index.html' && (currentPath === '/' || currentPath.endsWith('/')));
            
            const baseClass = 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5';
            
            if (isActive) {
                return baseClass + ' border-primary text-primary';
            } else {
                return baseClass + ' border-transparent text-gray-600 hover:border-primary hover:text-primary';
            }
        }
    }
};

const AppFooter = {
    template: `
        <footer class="bg-gray-900 text-gray-400 mt-auto border-t border-gray-800 text-sm overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:h-16 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
                <!-- Left: Logo, Copyright & Description -->
                <div class="flex items-center space-x-3 sm:space-x-4 whitespace-nowrap">
                    <img src="images/logo.svg" alt="VSDUN" class="h-4 w-auto opacity-70 filter brightness-0 invert">
                    <span class="border-l border-gray-700 h-4"></span>
                    <span class="text-xs">&copy; {{ new Date().getFullYear() }} {{ $t('footer.rights') }}</span>
                    <span class="hidden lg:inline border-l border-gray-700 h-4"></span>
                    <span class="hidden lg:inline text-xs text-gray-500">{{ $t('footer.about_desc') }}</span>
                </div>
                
                <!-- Right: Contact & Links -->
                <div class="flex items-center space-x-4 text-xs whitespace-nowrap">
                    <span class="hidden md:inline hover:text-white transition-colors cursor-default">
                        <i class="fa-solid fa-phone mr-1.5"></i>{{ $t('footer.phone') }}
                    </span>
                    <a href="mailto:contact@vsdun.com" class="hover:text-white transition-colors hidden sm:inline">
                        <i class="fa-solid fa-envelope mr-1.5"></i>{{ $t('footer.email') }}
                    </a>
                    <span class="hidden sm:inline border-l border-gray-700 h-3"></span>
                    <a href="service.html" class="hover:text-white transition-colors">{{ $t('footer.support') }}</a>
                    <span class="border-l border-gray-700 h-3"></span>
                    <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-linkedin text-sm"></i></a>
                    <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-twitter text-sm"></i></a>
                </div>
            </div>
        </footer>
    `
};





