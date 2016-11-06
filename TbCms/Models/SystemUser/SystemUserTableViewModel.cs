using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TbCms.Models
{
    public class SystemUserTableViewModel
    {
        /// <summary>
        /// システムユーザーID.
        /// </summary>
        public string system_user_id { get; set; }

        /// <summary>
        /// システムユーザー名.
        /// </summary>
        public string system_user_name { get; set; }

        /// <summary>
        /// ロール名.
        /// </summary>
        public string role_name { get; set; }

        /// <summary>
        /// メールアドレス.
        /// </summary>
        public string mail_address { get; set; }

        /// <summary>
        /// パスワード.
        /// </summary>
        public string password { get; set; }
        
        /// <summary>
        /// 削除状態.
        /// </summary>
        public string delete_state { get; set; }
    }
}