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
        /// ログインエラーメッセージ.
        /// </summary>
        public string LoginErrMessage { get; set; }

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
        
        /// <summary>
        /// ID/Pass保存.
        /// </summary>
        [Display(Name = "ID/パスワードを保存する")]
        public bool IsSaveId { get; set; }

        /// <summary>
        /// 管理者.
        /// </summary>
        public bool IsAdmin { get; set; }

        /// <summary>
        /// 記事作成者.
        /// </summary>
        public bool IsCreateNews { get; set; }

        /// <summary>
        /// コンテンツ作成者.
        /// </summary>
        public bool IsCreateContents { get; set; }
    }
}