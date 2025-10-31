const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const comidas = [
    { nome: 'Pizza', tipo: 'Salgada', preco: 35.0, descricao: 'Pizza de queijo' },
    { nome: 'Hamburguer', tipo: 'Salgada', preco: 25.0, descricao: 'Hamburguer com batata' },
    { nome: 'Sorvete', tipo: 'Doce', preco: 15.0, descricao: 'Sorvete de chocolate' },
    { nome: 'Lasanha', tipo: 'Salgada', preco: 40.0, descricao: 'Lasanha à bolonhesa' },
    { nome: 'Coxinha', tipo: 'Salgada', preco: 8.0, descricao: 'Coxinha de frango' },
    { nome: 'Brigadeiro', tipo: 'Doce', preco: 5.0, descricao: 'Brigadeiro tradicional' },
    { nome: 'Pastel', tipo: 'Salgada', preco: 10.0, descricao: 'Pastel de carne' },
    { nome: 'Pão de Queijo', tipo: 'Salgada', preco: 3.0, descricao: 'Pão de queijo mineiro' },
    { nome: 'Churros', tipo: 'Doce', preco: 7.0, descricao: 'Churros com doce de leite' },
    { nome: 'Esfiha', tipo: 'Salgada', preco: 6.0, descricao: 'Esfiha de carne' },
    { nome: 'Crepe', tipo: 'Doce', preco: 12.0, descricao: 'Crepe de Nutella' },
    { nome: 'Bolo de Chocolate', tipo: 'Doce', preco: 20.0, descricao: 'Bolo de chocolate com cobertura' },
    { nome: 'Cachorro Quente', tipo: 'Salgada', preco: 15.0, descricao: 'Hot dog completo' },
    { nome: 'Torta de Frango', tipo: 'Salgada', preco: 18.0, descricao: 'Torta de frango cremosa' },
    { nome: 'Quiche', tipo: 'Salgada', preco: 22.0, descricao: 'Quiche de queijo' },
    { nome: 'Panqueca', tipo: 'Doce', preco: 14.0, descricao: 'Panqueca com doce de leite' },
    { nome: 'Bolinho de Chuva', tipo: 'Doce', preco: 6.0, descricao: 'Bolinho de chuva polvilhado' },
    { nome: 'Açaí', tipo: 'Doce', preco: 18.0, descricao: 'Açaí com granola' },
    { nome: 'Espetinho', tipo: 'Salgada', preco: 12.0, descricao: 'Espetinho de carne' },
    { nome: 'Empada', tipo: 'Salgada', preco: 7.0, descricao: 'Empada de frango' },
    { nome: 'Mousse de Maracujá', tipo: 'Doce', preco: 15.0, descricao: 'Mousse cremosa de maracujá' },
    { nome: 'Pudim', tipo: 'Doce', preco: 14.0, descricao: 'Pudim de leite condensado' },
    { nome: 'Canelone', tipo: 'Salgada', preco: 38.0, descricao: 'Canelone recheado de queijo' },
    { nome: 'Risoto', tipo: 'Salgada', preco: 45.0, descricao: 'Risoto de frango' },
    { nome: 'Sushi', tipo: 'Salgada', preco: 50.0, descricao: 'Sushi variado' },
    { nome: 'Temaki', tipo: 'Salgada', preco: 25.0, descricao: 'Temaki de salmão' },
    { nome: 'Wrap', tipo: 'Salgada', preco: 20.0, descricao: 'Wrap de frango' },
    { nome: 'Brownie', tipo: 'Doce', preco: 12.0, descricao: 'Brownie de chocolate' },
    { nome: 'Cupcake', tipo: 'Doce', preco: 8.0, descricao: 'Cupcake com cobertura' },
    { nome: 'Tapioca', tipo: 'Salgada', preco: 10.0, descricao: 'Tapioca de queijo' },
    { nome: 'Pão Francês', tipo: 'Salgada', preco: 2.0, descricao: 'Pão francês fresquinho' },
    { nome: 'Pizza Doce', tipo: 'Doce', preco: 30.0, descricao: 'Pizza doce com chocolate' },
    { nome: 'Sanduíche Natural', tipo: 'Salgada', preco: 18.0, descricao: 'Sanduíche natural de frango' },
    { nome: 'Bolo de Cenoura', tipo: 'Doce', preco: 20.0, descricao: 'Bolo de cenoura com cobertura' },
    { nome: 'Pastel de Chocolate', tipo: 'Doce', preco: 10.0, descricao: 'Pastel de chocolate' },
    { nome: 'Chili', tipo: 'Salgada', preco: 35.0, descricao: 'Chili com carne moída' },
    { nome: 'Macarrão', tipo: 'Salgada', preco: 25.0, descricao: 'Macarrão ao molho branco' },
    { nome: 'Polenta', tipo: 'Salgada', preco: 20.0, descricao: 'Polenta cremosa' },
    { nome: 'Filé de Frango', tipo: 'Salgada', preco: 30.0, descricao: 'Filé de frango grelhado' },
    { nome: 'Frango a Passarinho', tipo: 'Salgada', preco: 28.0, descricao: 'Frango a passarinho crocante' },
    { nome: 'Coxinha de Jaca', tipo: 'Salgada', preco: 9.0, descricao: 'Versão vegetariana da coxinha' },
    { nome: 'Pastel de Queijo', tipo: 'Salgada', preco: 7.0, descricao: 'Pastel de queijo quentinho' },
    { nome: 'Bolo de Fubá', tipo: 'Doce', preco: 15.0, descricao: 'Bolo de fubá fofinho' },
    { nome: 'Sorvete de Morango', tipo: 'Doce', preco: 16.0, descricao: 'Sorvete de morango natural' },
    { nome: 'Pipoca Doce', tipo: 'Doce', preco: 5.0, descricao: 'Pipoca caramelizada' },
    { nome: 'Bolinho de Bacalhau', tipo: 'Salgada', preco: 12.0, descricao: 'Bolinho de bacalhau tradicional' },
    { nome: 'Camarão Empanado', tipo: 'Salgada', preco: 45.0, descricao: 'Camarão empanado crocante' },
    { nome: 'Feijoada', tipo: 'Salgada', preco: 50.0, descricao: 'Feijoada completa' },
    { nome: 'Panettone', tipo: 'Doce', preco: 30.0, descricao: 'Panettone com frutas' },
    { nome: 'Chá Gelado', tipo: 'Bebida', preco: 8.0, descricao: 'Chá gelado refrescante' },
    { nome: 'Suco Natural', tipo: 'Bebida', preco: 10.0, descricao: 'Suco natural de laranja' }
  ];

  for (const comida of comidas) {
    await prisma.comidas.create({ data: comida });
  }

  console.log('Seed completo!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
