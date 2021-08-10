using SenaiMateriais.Contexts;
using SenaiMateriais.Domains;
using SenaiMateriais.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiMateriais.Repositories
{
    public class TipoEquipamentoRepository : ITipoEquipamentoRepository
    {
        SMContext ctx = new SMContext();

        public List<TipoEquipamento> Listar()
        {
            return ctx.TipoEquipamentos.ToList();
        }
    }
}
