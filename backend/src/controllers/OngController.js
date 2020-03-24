const crypto = require('crypto');
const connection = require("../database/connection");

module.exports = {
  /** Rota para listar os cadastros já feitos */
  async index (request, response){
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  /** Rota para cadastro de ONG's */
  async create(request, response){
    const { name, email, whatsapp, city, uf} = request.body; /** Recebe o corpo do request e separa em variáveis */

    const id = crypto.randomBytes(4).toString('HEX'); /** Gera o id da ONG */
  
    /** Aguarda o cadastro da ONG no DB */
    await connection('ongs').insert({
      id, name, email, whatsapp, city, uf,
    });
    /** Retorna o id da ONG */
    return response.json({ id });
  }
};