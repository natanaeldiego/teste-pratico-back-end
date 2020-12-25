import { Request, Response } from 'express';

export default class PostsController {
  async index(request: Request, response: Response) {
    let resultPosts = [
      { "title": "O Papel do novo centro da juventude para todos", "category": "messages", "content": "A Secretaria de Juventude do Distrito Federal (Sejuv) lança, nesta segunda-feira (16), um vídeo institucional sobre os centros de Juventude. A peça, que tem como objetivo apresentar à população o trabalho que vem sendo realizado nesses locais, foi produzida pela Sejuv em parceria com o Instituto de Educação, Esporte, Cultura e Artes Populares (Iecap) e a Brasileiro Films. O Iecap é uma organização da sociedade civil responsável por administrar os centros de Juventude." },
      { "title": "Mensagem de Natal 2020", "category": "messages", "content": "Com o Natal se aproximando, vem também aquela vontade de expressar o amor nutrido pelas pessoas queridas. As atípicas circunstâncias de 2020, contudo, exigem uma adaptação dessas demonstrações de afeto, uma vez que dificilmente será possível reunir todo mundo como de costume." },
      { "title": "Obras na avenida 25 de Abril finalizadas atempadamente", "category": "news", "content": "A intervenção, que contou com um investimento municipal na ordem dos 350 mil euros, visou a renovação dos pavimentos e a melhoria da mobilidade pedonal, a ampliação do espaço verde existente e a introdução de novo mobiliário urbano." },
      { "title": "Piscinas municipais abrem portas as cidadãos carenciados", "category": "news", "content": "Para utilização das piscinas municipais de lazer, dirija-se à piscina municipal no dia e no horário de funcionamento previamente estabelecido, apresente o Cartão Cidadão de Vinhedo junto a um documento de identidade com foto e o comprovante de avaliação (com a validade)." },
      { "title": "Horários dos serviços municipais", "category": "schedules", "content": "A Administração Municipal de Canelinha informa que os atendimentos na prefeitura do município funcionarão até quarta-feira, dia 23 de dezembro, das 8h às 12h, e das 14h às 17h. Excepcionalmente nesta sexta-feira, dia 18, o atendimento será até às 12h." },
      { "title": "Horários das instalações desportivas", "category": "schedules", "content": "Dando sequência ao Estado de Emergência decretado no dia 6 de novembro pelo Presidente da República, e a fim de respeitar as determinações do Conselho de Ministros, que entraram em vigor às 00h00 do dia 9 de novembro, a Tempo Livre informa que foram alterados os horários de funcionamento das Piscinas de Candoso, Piscinas de Moreira, Piscina de Brito, Pista de Atletismo e serviço de atendimento ao publico do Multiusos de Guimarães para os próximos dias 14, 15, 21 e 22 de novembro." },
      { "title": "Atendimento ao cliente no serviço de águas", "category": "schedules", "content": "O desejo do cliente é sempre facilidade e disponibilidade no acesso aos serviços que deseja, ainda mais quando se trata de serviços básicos como a água." },
      { "title": "Tarifas de licenciamento", "category": "taxes", "content": "De acordo com o Código de Trânsito Brasileiro (CTB), o Certificado de Registro e Licenciamento de Veículo (CRLV) deve ser renovado anualmente. Para tanto, os proprietário de veículos devem, em alguns estados, realizar o pagamento da Taxa de Renovação de Licenciamento Anual de Veículo (TRLAV). Conheça o valor da Taxa de Licenciamento 2020, assim como a data de pagamento do tributo." },
      { "title": "Tarifários de água do concelho", "category": "taxes", "content": "O ciclo da água é o processo natural de circulação da água na Terra. A água evapora de rios e lagos e volta para o céu (atmosfera), depois cai sobre a terra em forma de chuva, é interceptada pelas folhas das árvores que posteriormente irão fazer o processo de evapotranspiração, infiltra para o subsolo, escoa e abastece rios, lagos e mares." },
      { "title": "Taxas de saneamento", "category": "taxes", "content": "O PRO-Saneamento é um software para Projetos de saneamento que possui ferramentas facilitadoras de cálculo, verificação e dimensionamento de redes de saneamento, abastecimento de águas e drenagens pluviais. Proporciona diversas facilidades para desenho das redes sobre um dwg topográfico com as curvas de níveis." }
    ];

    const { category } = request.body;

    let arrayPosts = Array<Object>();
    for (let index = 0; index < category.length; index++) {
      resultPosts.filter((data) => {
        if (data.category === category[index]) {
          arrayPosts.push(data);
        }
      });
    }
    return response.json(arrayPosts);
  }
}