const env = 'development';

const config = {
    development:{
        api:'http://localhost:3000'
    },
    staging:{
        api:'http://stating'
    },
    production:{
        api:'http://production'
    }
};

export default config[env];