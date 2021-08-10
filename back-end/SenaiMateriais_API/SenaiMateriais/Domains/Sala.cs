using System;
using System.Collections.Generic;

#nullable disable

namespace SenaiMateriais.Domains
{
    public partial class Sala
    {
        public Sala()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdSala { get; set; }
        public int Andar { get; set; }
        public string Nome { get; set; }
        public int Metragem { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
