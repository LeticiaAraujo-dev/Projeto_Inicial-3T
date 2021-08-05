using Microsoft.EntityFrameworkCore;
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
            ctx.Equipamentos.Add(novoEquipamento);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Equipamentos.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Equipamento> Listar()
        {
            return ctx.Equipamentos
                .Include(p => p.IdTipoEquipamentoNavigation)
                .ToList();
        }

        public List<Equipamento> ListarSala(int id)
        {
            return ctx.Equipamentos
                .Include(te => te.IdTipoEquipamentoNavigation)
                .Include(s => s.IdSalaNavigation)
                .Where(s => s.IdSala == id)
                .ToList();
        }

        public void UsarMaterial(int id, Equipamento equipamentoAtualizado)
        {
            Equipamento equipamentoBuscado = ctx.Equipamentos.Find(id);

            if (equipamentoBuscado.Statu == true)
            {
                equipamentoAtualizado.Statu = false;
                equipamentoBuscado.Statu = equipamentoAtualizado.Statu;

            }
            if (equipamentoBuscado.Statu == false)
            {
                equipamentoAtualizado.Statu = true;
                equipamentoBuscado.Statu = equipamentoAtualizado.Statu;
            }

            ctx.Equipamentos.Update(equipamentoBuscado);

            ctx.SaveChanges();
        }
    }
}
