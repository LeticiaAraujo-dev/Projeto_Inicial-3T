using SenaiMateriais.Contexts;
using SenaiMateriais.Domains;
using SenaiMateriais.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiMateriais.Repositories
{
    public class EquipamentoRepository : IEquipamentoRepository
    {

        SMContext ctx = new SMContext();
        public void Atualizar(int id, Equipamento equipamentoAtualizado)
        {

            Equipamento equipamentoBuscado = ctx.Equipamentos.Find(id);

            if (equipamentoAtualizado.Marca != null)
            {
                equipamentoBuscado.Marca = equipamentoAtualizado.Marca;
            }

            if (equipamentoAtualizado.Descricao != null)
            {
                equipamentoBuscado.Descricao = equipamentoAtualizado.Descricao;
            }

            if (equipamentoAtualizado.NumeroPatrimonio != null)
            {
                equipamentoBuscado.NumeroSerie = equipamentoAtualizado.NumeroSerie;
            }

            if (equipamentoAtualizado.IdSala != 0)
            {
                equipamentoBuscado.IdSala = equipamentoAtualizado.IdSala;
            }

            if (equipamentoAtualizado.IdTipoEquipamento != 0)
            {
                equipamentoBuscado.IdTipoEquipamento = equipamentoAtualizado.IdTipoEquipamento;
            }

            ctx.Equipamentos.Update(equipamentoBuscado);

            ctx.SaveChanges();
        }

        public Equipamento BuscarPorId(int id)
        {
            return ctx.Equipamentos.FirstOrDefault(e => e.IdEquipamento == id);
        }

        public void Cadastrar(Equipamento novoEquipamento)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public List<Equipamento> Listar()
        {
            throw new NotImplementedException();
        }

        public List<Equipamento> ListarSala(int id)
        {
            throw new NotImplementedException();
        }

        public void UsarMaterial(int id, Equipamento statusNovo)
        {
            throw new NotImplementedException();
        }
    }
}
