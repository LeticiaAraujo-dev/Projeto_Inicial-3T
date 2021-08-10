using SenaiMateriais.Contexts;
using SenaiMateriais.Domains;
using SenaiMateriais.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiMateriais.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        SMContext ctx = new SMContext();
        public Usuario login(string email, string senha)
        {

            return ctx.Usuarios.FirstOrDefault(o => o.Email == email && o.Senha == senha);

        }
    }
}
