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
    public class SalaRepository : ISalaRepository
    {
        SMContext ctx = new SMContext();

        public void Atualizar(int id, Sala salaAtualizada)
        {
            Sala salaBuscada = ctx.Salas.Find(id);

            if (salaAtualizada.Andar != 0)
            {
                salaBuscada.Andar = salaAtualizada.Andar;
            }

            if (salaAtualizada.Nome != null)
            {
                salaBuscada.Nome = salaAtualizada.Nome;
            }

            if (salaAtualizada.Metragem != 0)
            {
                salaBuscada.Metragem = salaAtualizada.Metragem;
            }

            ctx.Salas.Update(salaBuscada);

            ctx.SaveChanges();
        }

        public Sala BuscarPorId(int id)
        {
            return ctx.Salas.FirstOrDefault(e => e.IdSala == id);
        }

        public void Cadastrar(Sala novaSala)
        {
            ctx.Salas.Add(novaSala);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Salas.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Sala> Listar()
        {
            return ctx.Salas
                .ToList();
        }
    }
}
