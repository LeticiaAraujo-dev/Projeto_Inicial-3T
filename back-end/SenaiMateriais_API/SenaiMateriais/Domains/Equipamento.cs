﻿using System;
using System.Collections.Generic;

#nullable disable

namespace SenaiMateriais.Domains
{
    public partial class Equipamento
    {
        public int IdEquipamento { get; set; }
        public int IdTipoEquipamento { get; set; }
        public int IdSala { get; set; }
        public bool Statu { get; set; }
        public string Marca { get; set; }
        public string Descricao { get; set; }
        public string NumeroPatrimonio { get; set; }
        public string NumeroSerie { get; set; }

        public virtual Sala IdSalaNavigation { get; set; }
        public virtual TipoEquipamento IdTipoEquipamentoNavigation { get; set; }
    }
}
