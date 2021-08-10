using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiMateriais.ViewModels
{
    public class LoginViewModel
    {
        [Required (ErrorMessage  = "informe o email do usuario ")]
        public string email { get; set; }

        [Required(ErrorMessage = "informe senha do ususario ")]
        public string senha   { get; set; }
    }
}
