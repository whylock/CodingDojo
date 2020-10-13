using System.Net.Mime;
using System.Security.Cryptography.X509Certificates;
using System;
using System.ComponentModel.DataAnnotations;
namespace form_submission.Models
{
    
        public class User
        {

            [Required(ErrorMessage="This field must be at least 4 characters.")]
            [MinLength (4)]
            public string first_name { get; set; }

            [Required(ErrorMessage="This field must be at least 4 characters.")]
            [MinLength (4)]
            public string last_name { get; set; }

            [Required(ErrorMessage="Age must be a positive number")]
            [Range(1,100)]
            public int age { get; set; }

            [Required(ErrorMessage="Please enter a vaild email")]
            [EmailAddress]
            public string email { get; set; }

            [Required(ErrorMessage="Password must be at least 8 characters long")]
            [MinLength (8)]
            public string password { get; set; }
        }



}