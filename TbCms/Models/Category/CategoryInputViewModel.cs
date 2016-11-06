using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TbCms.Models
{
    public class CategoryInputViewModel
    {
        /// <summary>
        /// システムユーザーID.
        /// </summary>
        [Required(ErrorMessage = "{0}は必須です。")]
        [Remote("CheckSystemUserId", "SystemUser", ErrorMessage = "既に使用されている{0}です。")]
        [Display(Name = "システムユーザーID")]
        public string system_user_id { get; set; }

        /// <summary>
        /// システムユーザー名.
        /// </summary>
        [StringLength(255, ErrorMessage = "{0}は{1}文字以内で入力してください。")]
        [Remote("CheckSystemUserId", "SystemUser", ErrorMessage = "既に使用されている{0}です。")]
        [Display(Name = "システムユーザー名")]
        public string system_user_name { get; set; }

        /// <summary>
        /// ロールID.
        /// </summary>
        [Required(ErrorMessage = "{0}は必須です。")]
        [Display(Name = "ロールID")]
        public byte role_id { get; set; }

        /// <summary>
        /// ロール名.
        /// </summary>
        [Display(Name = "ロール名")]
        public string role_name { get; set; }

        /// <summary>
        /// メールアドレス.
        /// </summary>
        [EmailAddress(ErrorMessage = "メールアドレスの形式で入力してください。")]
        [Display(Name = "メールアドレス")]
        public string mail_address { get; set; }

        /// <summary>
        /// パスワード.
        /// </summary>
        [Required(ErrorMessage = "{0}は必須です。")]
        [MinLength(4, ErrorMessage = "{0}は{1}文字以上で入力してください。")]
        [MaxLength(20, ErrorMessage = "{0}は{1}文字以内で入力してください。")]
        [Display(Name = "パスワード")]
        public string password { get; set; }

        /// <summary>
        /// 削除状態.
        /// </summary>
        [Display(Name = "削除状態")]
        public string delete_state { get; set; }
    }
}