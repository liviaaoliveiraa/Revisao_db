import * as comidasModels from './../models/comidasModels.js'

export const listarTodos = async (req, res) => {
    try{
        const comidas = await comidasModels.encontreTodos();

        if (!comidas || comidas.length === 0 ) {
            res.status(404).json({
                total:0,
                mensagem:"Não há comidas na lista",
            })
        }

        res.status(200).json({
            total:comidas.length,
            mensagem:"Lista de comidas",
            comidas
        })
    } catch (error) {
        res.status(500).json({
            erro:"Erro interno no servidor",
            detalhes: error.message,
            status:500
        })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const comida = await comidasModels.encontreUm(id);

        if (!comida) {
            return res.status(404).json({
                erro:'Comida Não encontrada',
                mensagem:'Verifique o id da comida',
                id: id
            })
        }

        res.status(200).json({
            message:'Comida encontrada',
            comida
        })

    }catch (error) {
        res.status(500).json({
            erro:"Erro interno no servidor",
            detalhes: error.message,
            status:500
        })
    }
}

export const criar = async (req, res) => {
    try {
        const { nome, tipo, preco, descricao } = req.body;

        const data = req.body;

        const camposObrigatorios = [ 'nome', 'tipo', 'preco' ];

const faltando = camposObrigatorios.filter(campo => !data[campo]);

if (faltando.length > 0) {
  return res.status(400).json({
    erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
  });
}

const novaComida = await comidasModels.criar(req.body)

res.status(201).json({
    mensagem:'Bruxo criado com sucesso',
    comida: novaComida
})

    }catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar comida',
            detalhes:error.message
        })
    }
}

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const comidaExiste = await comidasModels.encontreUm(id);

        if (!comidaExiste) {
            return res.status(404).json({
                erro: 'Comida não econtrado com esse id',
                id: id
            })
        }

        await comidasModels.deletar(id);

        res.status(200).json({
            mensagem: ' Comida apagada com sucesso!',
            comidaRemovida: comidaExiste
        })

    }catch (error) {
        res.status(500).json({
            erro: ' Erro ao apagar a comida!',
            detalhes: error.message
        })
    }
}

export const atualizar = async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const dados = req.body;
  
      const comidaExiste = await comidasModels.encontreUm(id);
  
      if (!comidaExiste) {
        return res.status(404).json({
          erro: 'Comida não existe',
          id: id
        });
      }
  
      const comidaAtualizada = await comidasModels.atualizar(id, dados);
  
      res.status(200).json({
        mensagem: 'Comida atualizada com sucesso!',
        comida: comidaAtualizada
      });
  
    } catch (error) {
      res.status(500).json({
        erro: 'Erro ao atualizar a comida!',
        detalhes: error.message
      });
    }
  };
  