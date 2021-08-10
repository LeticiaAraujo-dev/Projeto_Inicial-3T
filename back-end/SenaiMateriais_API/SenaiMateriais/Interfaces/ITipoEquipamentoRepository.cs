using SenaiMateriais.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiMateriais.Interfaces
{
    interface ITipoEquipamentoRepository
    {
        List<TipoEquipamento> Listar();
    }
}
