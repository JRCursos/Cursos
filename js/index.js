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
        'phone':'+5546988033710'
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
    {
        'name':'jk',
        'phone':'+5545999779672'
    },
    {'name':'DeBrito','phone':'+554535221212'},
{'name':'CristoRei','phone':'+5543999590301'},
{'name':'Dgraauw', 'phone':'+5546999371006'},
{'name':'Dourada','phone':'+5542998087000'},
{'name':'Agape','phone':'+5543996316900'},
{'name':'Altonia', 'phone':'+5544999254430'},
{'name':'Perola', 'phone':'+5544999254430'},
{'name':'Amorim', 'phone':'+5541991621023'},
{'name':'Anthony','phone':'+5544998919246'},
{'name':'Aprender','phone':'+5541998593355'},
{'name':'Artur', 'phone':'+554235352062'},
{'name':'AltoGiro', 'phone':'+5541991518709'},
{'name':'DoBarao', 'phone': '+5542998640054'},
{'name':'Barracao', 'phone': '+5549984210862'},
{'name':'Bituruna', 'phone': '+5542984311675'},
{'name':'Bosco', 'phone':'+5542998316015'},
{'name':'Caiua', 'phone':'+5544991196119'},
{'name':'CarFox', 'phone':'+5541995932071'},
{'name':'CristalSul', 'phone':'+554135341660'},
{'name':'EneasMarques', 'phone':'+5546984028316'},
{'name':'FarolVerde', 'phone':'+5543984346850'},
{'name':'FavoritaP', 'phone': '+554330153399'},
{'name':'Fasolin','phone':'+5546988260706'},
{'name':'Fox', 'phone':'+5541999320340'},
{'name':'GomeLiz', 'phone':'+5541992293671'},
{'name':'GralhaAzul', 'phone':'+5542998104390'},
{'name': 'GuiaAstorga', 'phone':'+5544999955065'},
{'name': 'GuiaJag', 'phone':'+5543999210734'},
{'name':'GuiaMed', 'phone':'+5545998064626'},
{'name':'Ibipora', 'phone':'+5543991750062'},
{'name':'Inovacao', 'phone':'+5544997700109'},
{'name':'Interlagos','phone':'+554335385628'},
{'name':'Irati', 'phone':'+5542999297831'},
{'name':'Izaak', 'phone':'+5541996280971'},
{'name':'Jandaia', 'phone':'+5543999233439'},
{'name':'jkCentro', 'phone':'+5545999779672'},
{'name':'Litoral', 'phone':'+554134723220'},
{'name':'Machado', 'phone':'+554699107080'},
{'name':'Mandaguacu', 'phone':'+5544999620135'},
{'name':'Mangueirinha', 'phone':'+5546999190050'},
{'name':'Marcon', 'phone':'+5541988938140'},
{'name':'Margil','phone':'+5546999757464'},
{'name':'Marol', 'phone':'+5543999383540'},
{'name':'Menon','phone' :'+5544998385454'},
{'name':'Milenio', 'phone': '+5541984218864'},
{'name':'Milesk', 'phone':'+5542984080207'},
{'name':'Orleans', 'phone':'+554132721222'},
{'name':'Paicandu', 'phone':'+5544998411157'},
{'name':'Paris', 'phone':'+5544999129559'},
{'name':'Pioneira', 'phone':'+5545999400191'},
{'name':'Piramide', 'phone':'+5544999976674'},
{'name':'Premier', 'phone':'+5541988208243'}
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
