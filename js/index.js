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
        'name':'giusoft',
        'phone':'+5571992339330'
    },
    {
        'name':'rotasul',
        'phone':'+5542988814739' 
    },
    {
        'name':'guia',
        'phone':'+554598064626'
    },
    {
        'name':'paris',
        'phone':'+5544999129559'
    },
    {
        'name':'anthony',
        'phone':'+5544998319246'
    }
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
