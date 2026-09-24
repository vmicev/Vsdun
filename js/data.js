const serverData = {
    mainCategories: [
        { id: 'servers', icon: 'fa-server' },
        { id: 'terminals', icon: 'fa-desktop' },
        { id: 'storage', icon: 'fa-database' }
    ],
    categories: [
        // Servers
        { id: 'gpu', parentId: 'servers', image: 'images/cat-gpu.jpg', icon: 'fa-microchip' },
        { id: 'edge_server', parentId: 'servers', image: 'images/cat-edge_server.jpg', icon: 'fa-network-wired' },
        { id: 'general_server', parentId: 'servers', image: 'images/cat-general_server.jpg', icon: 'fa-server' },
        { id: 'storage_server', parentId: 'servers', image: 'images/cat-storage_server.jpg', icon: 'fa-hdd' },
        { id: 'container_dc', parentId: 'servers', image: 'images/cat-container_dc.jpg', icon: 'fa-box' },
        
        // Terminals
        { id: 'workstation', parentId: 'terminals', image: 'images/cat-workstation.jpg', icon: 'fa-laptop-code' },
        { id: 'iot_gateway', parentId: 'terminals', image: 'images/cat-iot_gateway.jpg', icon: 'fa-wifi' },
        { id: 'terminal', parentId: 'terminals', image: 'images/cat-terminal.jpg', icon: 'fa-tv' },
        { id: 'monitor', parentId: 'terminals', image: 'images/cat-monitor.jpg', icon: 'fa-desktop' },
        
        // Storage
        { id: 'storage_sys', parentId: 'storage', image: 'images/cat-storage_sys.jpg', icon: 'fa-database' }
    ],
    products: [
        { id: 'gpu-a100', categoryId: 'gpu', name: 'VSDUN GPU-A100', basePrice: 15000 },
        { id: 'ag7050t', categoryId: 'gpu', name: 'CSAstra AG7050T', basePrice: 28000 },
        { id: 'edge-100', categoryId: 'edge_server', name: 'VSDUN Edge-100', basePrice: 2000 },
        { id: 'gen-200', categoryId: 'general_server', name: 'VSDUN Gen-200', basePrice: 3000 },
        { id: 'stor-500', categoryId: 'storage_server', name: 'VSDUN Stor-500', basePrice: 4500 },
        { id: 'cdc-1', categoryId: 'container_dc', name: 'VSDUN CDC-1 (Base)', basePrice: 50000 },
        
        { id: 'ws-pro', categoryId: 'workstation', name: 'VSDUN WS Pro', basePrice: 2500 },
        { id: 'iot-gw', categoryId: 'iot_gateway', name: 'VSDUN IoT GW-1', basePrice: 800 },
        { id: 'term-basic', categoryId: 'terminal', name: 'VSDUN Terminal T1', basePrice: 500 },
        { id: 'mon-27', categoryId: 'monitor', name: 'VSDUN 27" Pro Display', basePrice: 600 },
        
        { id: 'san-1', categoryId: 'storage_sys', name: 'VSDUN SAN Array', basePrice: 12000 }
    ],
    components: {
        cpu: [
            { id: 'c1', name: 'Intel Xeon Silver 4210R', price: 450 },
            { id: 'c2', name: 'Intel Xeon Gold 6230', price: 1200 },
            { id: 'c3', name: 'AMD EPYC 7302', price: 950 }
        ],
        ram: [
            { id: 'r1', name: '16GB DDR4 ECC', price: 80 },
            { id: 'r2', name: '32GB DDR4 ECC', price: 150 },
            { id: 'r3', name: '64GB DDR4 ECC', price: 300 }
        ],
        storage: [
            { id: 's1', name: '1TB SATA SSD', price: 120 },
            { id: 's2', name: '2TB NVMe SSD', price: 250 },
            { id: 's3', name: '4TB NVMe SSD', price: 500 },
            { id: 's4', name: '8TB Enterprise HDD', price: 200 }
        ],
        network: [
            { id: 'n1', name: '1GbE Dual Port', price: 50 },
            { id: 'n2', name: '10GbE Dual Port SFP+', price: 180 },
            { id: 'n3', name: '25GbE Dual Port', price: 350 }
        ]
    }
};
