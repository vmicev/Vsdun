const configuratorPageLogic = {
    data() {
        return {
            submitted: false,
            form: {
                server: {
                    producer: 'vsdun',
                    type: 'tower',
                    purpose: '1c',
                    users: '1-30',
                    cpuCount: '1',
                    cpuCores: '',
                    drives: '',
                    driveVol: '',
                    hotSwap: 'yes',
                    raid: 'yes',
                    ramTotal: '',
                    ramStick: '16',
                    powerCount: '1',
                    powerHot: 'yes',
                    ethCount: '2',
                    ethSpeed: '1 Gb',
                    opticCount: '1'
                },
                storage: {
                    producer: 'AIC',
                    connType: 'direct',
                    capacity: '',
                    hotData: '',
                    frontEnd: 'fc',
                    expCabs: '',
                    ctrlCount: '0',
                    ctrlPorts: '0',
                    ctrlCache: '',
                    mediaType: 'hdd',
                    diskIface: 'sata'
                },
                contact: {
                    name: '',
                    phone: '',
                    email: ''
                }
            }
        }
    },
    methods: {
        submitForm() {
            setTimeout(() => {
                this.submitted = true;
                this.form.contact.name = '';
                this.form.contact.phone = '';
                this.form.contact.email = '';
            }, 500);
        }
    }
};
