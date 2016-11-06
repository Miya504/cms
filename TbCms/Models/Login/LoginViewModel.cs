using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TbCms.Models
{
    public class LoginViewModel
    {
        /// <summary>
        /// ログイン成否.
        /// </summary>
        public bool IsSuccess { get; set; }

        /// <summary>
        /// システムユーザーID.
        /// </summary>
        [Required(ErrorMessage = "{0}は必須です。")]
        [Display(Name = "システムユーザーID")]
        public string system_user_id { get; set; }

        /// <summary>
        /// パスワード.
        /// </summary>
        [Required(ErrorMessage = "{0}は必須です。")]
        [Display(Name = "パスワード")]
        public string password { get; set; }
        
    }
}