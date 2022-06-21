const empresas = [
    {
        'name':'arautran',
        'phone':'+5541996211600'
    },
    {
        'name':'piloto',
        'phone':'+5541999180066'
    },
    {
        'name':'dinamica',
        'phone':'+5543996673318'
    },
    {
        'name':'autodelta',
        'phone':'+554333288885'
    },
    {
        'name':'sitiocercado',
        'phone':'+5541999046958'
    },
    {
        'name':'mandirituba',
        'phone':'+5541988959536'
    },
    {
        'name':'km',
        'phone':' +5541974009774'
    },
    {
        'name':'palmeira',
        'phone':'+5542999537478'
    },
    {
        'name':'umuarama',
        'phone':'+554491212228'
    },
    {
        'name':'alfa',
        'phone':'+554599892007'
    },
    {
        'name':'sgarione',
        'phone':'+5543991631976'
    },
    {
        'name':'saobraz',
        'phone':'+5541992843110'
    },
    {
        'name':'guarany',
        'phone':'+5543996407722'
    },
    {
        'name':'opcao',
        'phone':'+5541992060207'
    },
    {
        'name':'magnum',
        'phone':'+5541996690303'
    },
    {
        'name':'direcao',
        'phone':'+5541985131396'
    },
    {
        'name':'metropolitana',
        'phone':'+554184570098'
    },
    {
        'name':'jandaia',
        'phone':'+5543999233439'
    },
    {
        'name':'master',
        'phone':'+5541999180066'
    },
    {
        'name':'delta',
        'phone':'+5565999729379'
    }, 
    {
        'name':'transitolivre',
        'phone':'+553832227889'
    },
    {
        'name':'piloto-taruma',
        'phone':'+554184036732'
    },
    {
        'name':'cuiaba',
        'phone':'+5544999739340'
    },
    {
        'name':'lisboa',
        'phone':'+5544999098541'
    },
    {
        'name':'santiago',
        'phone':'+5544999498530'
    },
    {
        'name':'destak',
        'phone':'+5543998042792'
    }, 
    {
        'name':'sinalverde',
        'phone':'+5598987706422'
    },  
];
 

 
const p = new URLSearchParams(window.location.search).get('p');
$(document).ready(function(){
    if(p != null){
        var e = empresas.find((e) => e.name == p);
        if(e != null){
            $("#img-parceiro").attr("src", "./img/c-"+p+".jpeg");
            $("#cetci-link").attr("href", 
            "https://api.whatsapp.com/send?phone="+e.phone+"&text=Olá, gostaria de mais informações sobre o curso *CETCI - Condutor Especializado em Transporte de Cargas Indivisíveis*"
            );
            $("#cetpp-link").attr("href", 
            "https://api.whatsapp.com/send?phone="+e.phone+"&text=Olá, gostaria de mais informações sobre o curso *CETPP - Condutor Especializado em Transporte de Produtos Perigosos - MOPP*"
            );
            $("#cete-link").attr("href", 
            "https://api.whatsapp.com/send?phone="+e.phone+"&text=Olá, gostaria de mais informações sobre o curso *CETE - Condutor Especializado em Transporte de Escolares*"
            );
            $("#cetcp-link").attr("href", 
            "https://api.whatsapp.com/send?phone="+e.phone+"&text=Olá, gostaria de mais informações sobre o curso *CETCP - Condutor Especialozado em Transporte Coletivo de Passageiros*"
            );
            $("#cetve-link").attr("href", 
            "https://api.whatsapp.com/send?phone="+e.phone+"&text=Olá, gostaria de mais informações sobre o curso *CETVE - Condutor Especializado em Transporte de Veículos de Emergência*"
            );
        }
        
    }
});
