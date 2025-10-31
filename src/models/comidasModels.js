import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const  encontreTodos =async () =>{
    return await prisma.comidas.findMany({
        orderBy: { nome: 'asc' }
    });
};

export const encontreUm = async (id) => {
    return await prisma.comidas.findUnique({
        where: { id: Number(id) }
    })

}

export const criar = async (data) => {
    return await prisma.comidas.create({
        data:{
            nome: data.nome,
            tipo: data.tipo,
            preco: data.preco,
            descricao: data.descricao
        }
    })

}

export const deletar = async (id) => {
    return await prisma.comidas.delete({
        where: { id: Number(id) }
    });
};


export const atualizar = async (id, dado ) => {
    return await prisma.comidas.update({
        where: { id: Number(id) },
        data:{
            ...(dado.nome && { nome: dado.nome }),
            ...(dado.tipo && { tipo: dado.tipo }),
            ...(dado.preco && { preco: dado.preco}),
            ...(dado.descrição && { descricao: dado.descricao})

        }
    })
}