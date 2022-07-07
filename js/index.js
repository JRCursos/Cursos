const empresas = [
    {'name':'arautran','phone':'+5541996211600', 'uf':'PR'},
    {'name':'piloto','phone':'+5541999180066', 'uf':'PR'},
    {'name':'dinamica','phone':'+5543996673318', 'uf':'PR'},
    {'name':'autodelta','phone':'+554333288885', 'uf':'PR'},
    {'name':'sitiocercado','phone':'+5541999046958', 'uf':'PR'},
    {'name':'mandirituba','phone':'+5541988959536', 'uf':'PR'},
    {'name':'km','phone':' +5541974009774', 'uf':'PR'},
    {'name':'palmeira','phone':'+5542999537478', 'uf':'PR'},
    {'name':'umuarama','phone':'+554499912228', 'uf':'PR'},
    {'name':'alfa','phone':'+554599892007', 'uf':'PR'},
    {'name':'sgarione','phone':'+5543991631976', 'uf':'PR'},
    {'name':'saobraz','phone':'+5541992843110', 'uf':'PR'},
    {'name':'guarany','phone':'+5543996407722', 'uf':'PR'},
    {'name':'opcao','phone':'+5541992060207', 'uf':'PR'},
    {'name':'magnum','phone':'+5541996690303', 'uf':'PR'},
    {'name':'direcao','phone':'+5541985131396', 'uf':'PR'},
    {'name':'metropolitana','phone':'+554184570098', 'uf':'PR'},
    {'name':'jandaia','phone':'+5543999233439', 'uf':'PR'},
    {'name':'master','phone':'+5546988033710', 'uf':'PR'},
    {'name':'delta','phone':'+5565999729379', 'uf':'MT'}, 
    {'name':'transitolivre','phone':'+553832227889', 'uf': 'AL'},
    {'name':'piloto-taruma','phone':'+554184036732', 'uf':'PR'},
    {'name':'cuiaba','phone':'+5544999739340', 'uf':'PR'},
    {'name':'lisboa','phone':'+5544999098541', 'uf':'PR'},
    {'name':'santiago','phone':'+5544999498530', 'uf':'PR'},
    {'name':'destak','phone':'+5543998042792', 'uf':'PR'}, 
    {'name':'sinalverde','phone':'+5598987706422', 'uf':'MA'}, 
    {'name':'jk','phone':'+5545999779672', 'uf':'PR'},
    {'name':'DeBrito','phone':'+554535221212', 'uf':'PR'},
    {'name':'CristoRei','phone':'+5543999590301', 'uf':'PR'},
    {'name':'Dgraauw', 'phone':'+5546999371006', 'uf':'PR'},
    {'name':'Dourada','phone':'+5542998087000', 'uf':'PR'},
    {'name':'Agape','phone':'+5543996316900', 'uf':'PR'},
    {'name':'Altonia', 'phone':'+5544999254430', 'uf':'PR'},
    {'name':'Perola', 'phone':'+5544999254430', 'uf':'PR'},
    {'name':'Amorim', 'phone':'+5541991621023', 'uf':'PR'},
    {'name':'Anthony','phone':'+5544998919246', 'uf':'PR'},
    {'name':'Aprender','phone':'+5541998594448', 'uf':'PR'},
    {'name':'Artur', 'phone':'+554235352062', 'uf':'PR'},
    {'name':'AltoGiro', 'phone':'+5541991518709', 'uf':'PR'},
    {'name':'DoBarao', 'phone': '+5542998640054', 'uf':'PR'},
    {'name':'Barracao', 'phone': '+5549984210862', 'uf':'PR'},
    {'name':'Bituruna', 'phone': '+5542984311675', 'uf':'PR'},
    {'name':'Bosco', 'phone':'+5542998316015', 'uf':'PR'},
    {'name':'Caiua', 'phone':'+5544991196119', 'uf':'PR'},
    {'name':'CarFox', 'phone':'+5541995932071', 'uf':'PR'},
    {'name':'CristalSul', 'phone':'+554135341660', 'uf':'PR'},
    {'name':'EneasMarques', 'phone':'+5546984028316', 'uf':'PR'},
    {'name':'FarolVerde', 'phone':'+5543984346850', 'uf':'PR'},
    {'name':'FavoritaP', 'phone': '+554330153399', 'uf':'PR'},
    {'name':'Fasolin','phone':'+5546988260706', 'uf':'PR'},
    {'name':'Fox', 'phone':'+5541999320340', 'uf':'PR'},
    {'name':'GomeLiz', 'phone':'+5541992293671', 'uf':'PR'},
    {'name':'GralhaAzul', 'phone':'+5542998104390', 'uf':'PR'},
    {'name': 'GuiaAstorga', 'phone':'+5544999955065', 'uf':'PR'},
    {'name': 'GuiaJag', 'phone':'+5543999210734', 'uf':'PR'},
    {'name':'GuiaMed', 'phone':'+5545998064626', 'uf':'PR'},
    {'name':'Ibipora', 'phone':'+5543991750062', 'uf':'PR'},
    {'name':'Inovacao', 'phone':'+5544997700109', 'uf':'PR'},
    {'name':'Interlagos','phone':'+554335385628', 'uf':'PR'},
    {'name':'Irati', 'phone':'+5542999297831', 'uf':'PR'},
    {'name':'Izaak', 'phone':'+5541996280971', 'uf':'PR'},
    {'name':'Jandaia', 'phone':'+5543999233439', 'uf':'PR'},
    {'name':'jkCentro', 'phone':'+5545999779672', 'uf':'PR'},
    {'name':'Litoral', 'phone':'+554134723220', 'uf':'PR'},
    {'name':'Machado', 'phone':'+554695988635897', 'uf':'PR'},
    {'name':'Mandaguacu', 'phone':'+5544999620135', 'uf':'PR'},
    {'name':'Mangueirinha', 'phone':'+5546999190050', 'uf':'PR'},
    {'name':'Marcon', 'phone':'+5541988938140', 'uf':'PR'},
    {'name':'Mariluz', 'phone': '+5544998626842', 'uf':'PR'},
    {'name':'Margil','phone':'+5546999757464', 'uf':'PR'},
    {'name':'Marol', 'phone':'+5543999383540', 'uf':'PR'},
    {'name':'Menon','phone' :'+5544998385454', 'uf':'PR'},
    {'name':'Milenio', 'phone': '+5541984218864', 'uf':'PR'},
    {'name':'Milesk', 'phone':'+5542984080207', 'uf':'PR'},
    {'name':'Orleans', 'phone':'+554132721222', 'uf':'PR'},
    {'name':'Paicandu', 'phone':'+5544998411157', 'uf':'PR'},
    {'name':'Paris', 'phone':'+5544999129559', 'uf':'PR'},
    {'name':'Pioneira', 'phone':'+5545999400191', 'uf':'PR'},
    {'name':'Piramide', 'phone':'+5544999976674', 'uf':'PR'},
    {'name':'Premier', 'phone':'+5541988208243', 'uf':'PR'},
    {'name':'Rolandia', 'phone':'+554332562889', 'uf':'PR'},
    {'name':'RotaSul', 'phone':'+5542988814739', 'uf':'PR'},
    {'name':'Sheifer', 'phone':'+5542998134848', 'uf':'PR'},
    {'name':'Seculo', 'phone':'+554133856781', 'uf':'PR'},
    {'name':'SilvaLon', 'phone':'+5543999918038', 'uf':'PR'},
    {'name':'SilvaVip', 'phone':'+5543996708583', 'uf':'PR'},    
    {'name':'StreetCar', 'phone':'+554335462688', 'uf':'PR'},
    {'name':'Transitar', 'phone':'+554134223950', 'uf':'PR'},
    {'name':'Universitaria', 'phone':'+5544991197009', 'uf':'PR'},
    {'name':'Veneza', 'phone':'+554230277777', 'uf':'PR'},
    {'name':'Vicenza', 'phone':'+5541988900508', 'uf':'PR'},
    {'name':'Xaxim', 'phone':'+5541991265968', 'uf':'PR'},
    {'name':'Carlopolis', 'phone':'+5543991822759', 'uf':'PR'},
    {'name':'AltoParana', 'phone':'+554434222511', 'uf':'PR'},
    {'name':'Tuneiras', 'phone':'+5544999700038', 'uf':'PR'},
    {'name':'Ideal', 'phone':'+5544999350031', 'uf':'PR'},
    {'name':'Brasilia', 'phone':'+5544991098560', 'uf':'PR'},
    {'name':'BelaCidade', 'phone':'+554332583648', 'uf':'PR'}, 
    {'name':'Tallentus', 'phone':'+558332227089', 'uf':'PB'},
    {'name':'Araujo', 'phone':'+5541985035886', 'uf':'PR'},
    {'name':'Nardoni', 'phone':'+5544999757295', 'uf':'PR'},
    {'name':'Martins', 'phone':'+5543984571025', 'uf':'PR'},
    {'name':'Pratense', 'phone':'+5541999765290', 'uf':'PR'},
    {'name':'Seminario', 'phone':'+5541984636465', 'uf':'PR'},
];


 
const p = new URLSearchParams(window.location.search).get('p');
$(document).ready(function(){
    if(p != null){
        var e = empresas.find((e) => e.name == p);
        if(e != null){
            $("#img-parceiro").attr("src", "./img/c-"+p+".jpeg");
            $("#img-cfc").attr("src", "./img/c-cfc-"+e.uf+".jpeg");
            
            $("#infrator-link").attr("href", 
            "https://api.whatsapp.com/send?phone="+e.phone+"&text=Olá, gostaria de mais informações sobre o curso *Reciclagem do motorista infrator*"
            );
            
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
