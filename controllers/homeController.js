const homeController = {
    index: (req, res) => {
        let servicos = [{nome: 'Desenvolvimento Web Dani', imagem: '/imagens/undraw_dev_focus.svg'},
                        {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
                        {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'}
                        ];
        let banners= ['/imagens/html5.jpg',
                      '/imagens/download.jpg',
                      '/imagens/dwn.jpg'
                    ];

        res.render("index", { title: "Home", listaServicos: servicos, listaBanners: banners});
    },
    contato: (req, res) => {
        let {nome, email, mensagem} = req.body;
        //POST - req.body
        res.render("contato", { nome, email, mensagem, title: "Contato" });
    },
    newsletter: (req, res) => {
        let {nome, email} = req.query;
        //GET - req.query
        //GET - com rota /:email - req.params
        res.render("newsletter", {nome, email, title: "Newsletter"});
    }
};

module.exports = homeController;