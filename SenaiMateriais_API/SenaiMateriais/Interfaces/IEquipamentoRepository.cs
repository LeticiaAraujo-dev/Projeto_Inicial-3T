using SenaiMateriais.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiMateriais.Interfaces
{
    interface IEquipamentoRepository
    {
        List<Equipamento> Listar();

        Equipamento BuscarPorId(int id);

        void Cadastrar(Equipamento novoEquipamento);

        void Atualizar(int id, Equipamento equipamentoAtualizado);

        void Deletar(int id);

        List<Equipamento> ListarSala(int id);

        void UsarMaterial (int id, Equipamento equipamentoAtualizado);

    }
}
