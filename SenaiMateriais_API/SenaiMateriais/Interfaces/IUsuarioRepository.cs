using SenaiMateriais.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiMateriais.Interfaces
{
    interface IUsuarioRepository
    {
        Usuario login(string email, string senha);
    }
}
