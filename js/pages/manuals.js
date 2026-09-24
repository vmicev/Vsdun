const manualsPageLogic = {
    data() {
        return {
            activeCategory: 'server',
            categories: [
                { id: 'server', i18nKey: 'manuals.cat_server', icon: 'fa-server' },
                { id: 'storage', i18nKey: 'manuals.cat_storage', icon: 'fa-database' },
                { id: 'network', i18nKey: 'manuals.cat_network', icon: 'fa-network-wired' },
                { id: 'software', i18nKey: 'manuals.cat_software', icon: 'fa-microchip' }
            ],
            documents: [
                { id: 1, category: 'server', type: 'guide', size: '2.4 MB', date: 'Oct 12, 2025' },
                { id: 2, category: 'server', type: 'manual', size: '15.1 MB', date: 'Sep 05, 2025' },
                { id: 3, category: 'server', type: 'spec', size: '1.2 MB', date: 'Aug 20, 2025' },
                { id: 4, category: 'server', type: 'kb', size: '0.8 MB', date: 'Jul 15, 2025' },
                { id: 13, category: 'server', type: 'guide', size: '3.5 MB', date: 'Jun 10, 2025' },
                { id: 14, category: 'server', type: 'manual', size: '12.0 MB', date: 'May 02, 2025' },
                { id: 15, category: 'server', type: 'spec', size: '1.8 MB', date: 'Apr 18, 2025' },
                { id: 16, category: 'server', type: 'kb', size: '0.5 MB', date: 'Mar 22, 2025' },
                
                { id: 5, category: 'storage', type: 'guide', size: '3.1 MB', date: 'Oct 01, 2025' },
                { id: 6, category: 'storage', type: 'manual', size: '18.5 MB', date: 'Sep 10, 2025' },
                { id: 7, category: 'storage', type: 'spec', size: '2.2 MB', date: 'Aug 25, 2025' },
                { id: 17, category: 'storage', type: 'kb', size: '0.9 MB', date: 'Jul 11, 2025' },
                { id: 18, category: 'storage', type: 'guide', size: '4.0 MB', date: 'Jun 25, 2025' },
                { id: 19, category: 'storage', type: 'manual', size: '21.4 MB', date: 'May 14, 2025' },
                { id: 20, category: 'storage', type: 'spec', size: '1.5 MB', date: 'Apr 03, 2025' },
                
                { id: 8, category: 'network', type: 'guide', size: '1.5 MB', date: 'Oct 05, 2025' },
                { id: 9, category: 'network', type: 'manual', size: '8.4 MB', date: 'Sep 12, 2025' },
                { id: 21, category: 'network', type: 'spec', size: '0.7 MB', date: 'Aug 08, 2025' },
                { id: 22, category: 'network', type: 'kb', size: '0.4 MB', date: 'Jul 29, 2025' },
                { id: 23, category: 'network', type: 'guide', size: '2.1 MB', date: 'Jun 17, 2025' },
                { id: 24, category: 'network', type: 'manual', size: '10.2 MB', date: 'May 05, 2025' },
                
                { id: 10, category: 'software', type: 'guide', size: '5.6 MB', date: 'Oct 15, 2025' },
                { id: 11, category: 'software', type: 'manual', size: '25.0 MB', date: 'Sep 20, 2025' },
                { id: 12, category: 'software', type: 'kb', size: '1.1 MB', date: 'Aug 30, 2025' },
                { id: 25, category: 'software', type: 'spec', size: '3.3 MB', date: 'Jul 14, 2025' },
                { id: 26, category: 'software', type: 'guide', size: '4.8 MB', date: 'Jun 02, 2025' },
                { id: 27, category: 'software', type: 'manual', size: '30.5 MB', date: 'May 21, 2025' },
                { id: 28, category: 'software', type: 'kb', size: '0.6 MB', date: 'Apr 11, 2025' }
            ]
        };
    },
    computed: {
        filteredDocs() {
            return this.documents.filter(doc => doc.category === this.activeCategory);
        },
        featuredDocs() {
            return this.filteredDocs.slice(0, 2); // Show top 2 as featured
        },
        listDocs() {
            return this.filteredDocs.slice(2); // The rest in the list
        }
    },
    methods: {
        selectCategory(catId) {
            this.activeCategory = catId;
        }
    }
};