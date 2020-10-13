using System;
using System.ComponentModel.DataAnnotations;
namespace dojosurvey_model.Models
{
    public class Survey
    {

        [Required(ErrorMessage="This field must be no less than two characters")]
        [MinLength (2)]
        public string name { get; set; }

        [Required(ErrorMessage="This field is required")]
        public string location { get; set; }
        [Required(ErrorMessage="This field is required")]
        public string language { get; set; }
        [MaxLength (20)]
        public string textarea { get; set; }
    }
}